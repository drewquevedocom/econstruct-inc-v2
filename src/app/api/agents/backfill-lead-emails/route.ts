import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotificationEmail } from "@/lib/email";

export const maxDuration = 300;

const SUPABASE_URL = "https://dzudtdhmvnuipqyoogem.supabase.co";
const BACKFILL_TO = ["frank@econstructinc.com", "info@econstructinc.com"];

// Test submissions created during the July 2026 form troubleshooting session
const TEST_NAME_PATTERN =
  /formtest|leadtest|checkfinal|domaintest|delivery test|verified test|final test|^test test$|^subject /i;

type LeadRow = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  zip_code: string | null;
  source: string | null;
  created_at: string | null;
};

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization") || "";
  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY not set" }, { status: 500 });
  }

  let dryRun = true;
  try {
    const body = await req.json();
    dryRun = body?.dry_run !== false;
  } catch {
    // no body → dry run
  }

  const supabase = createClient(SUPABASE_URL, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // Only genuine form submissions: every website form requires an email.
  // Bulk-imported records (e.g. source "dins_calfire") have no email.
  const { data, error } = await supabase
    .from("leads")
    .select("id, name, email, phone, zip_code, source, created_at")
    .not("email", "is", null)
    .neq("email", "")
    .neq("source", "dins_calfire")
    .order("created_at", { ascending: true })
    .limit(2000);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const leads = (data || []) as LeadRow[];
  const real = leads.filter((l) => !TEST_NAME_PATTERN.test(l.name || ""));
  const excluded = leads.filter((l) => TEST_NAME_PATTERN.test(l.name || ""));

  if (dryRun) {
    return NextResponse.json({
      dry_run: true,
      total_leads: leads.length,
      would_send: real.length,
      excluded_as_tests: excluded.map((l) => ({ name: l.name, created_at: l.created_at })),
      leads: real.map((l) => ({
        name: l.name,
        email: l.email,
        source: l.source,
        created_at: l.created_at,
      })),
    });
  }

  let sent = 0;
  const failures: { name: string | null; error?: string }[] = [];

  for (const lead of real) {
    const when = lead.created_at
      ? new Date(lead.created_at).toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "unknown date";

    const result = await sendNotificationEmail({
      from: "econstruct Website <no-reply@econstructinc.com>",
      to: BACKFILL_TO,
      replyTo: lead.email || undefined,
      subject: `Website lead - ${lead.name || "Unknown"} (${when})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
          <div style="background:#fff3cd;border:1px solid #ffeeba;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:13px;color:#856404;">
            This lead was submitted on <strong>${when}</strong> while email notifications were down. It was safely captured in the CRM and is being delivered now.
          </div>
          <div style="background:#07090c;padding:24px 32px;border-radius:12px 12px 0 0;">
            <p style="color:#d9b661;font-weight:700;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;margin:0;">econstruct Inc.</p>
            <h1 style="color:#ffffff;font-size:22px;margin:8px 0 0;">Website Lead - ${lead.name || "Unknown"}</h1>
          </div>
          <div style="background:#f8f6f2;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e2db;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:13px;color:#666;width:40%;font-weight:600;">Name</td><td style="padding:8px 0;font-size:14px;">${lead.name || "-"}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${lead.email || ""}">${lead.email || "-"}</a></td></tr>
              ${lead.phone ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>` : ""}
              ${lead.zip_code ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Zip Code</td><td style="padding:8px 0;font-size:14px;">${lead.zip_code}</td></tr>` : ""}
              <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Source</td><td style="padding:8px 0;font-size:14px;">${lead.source || "contact_form"}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Submitted</td><td style="padding:8px 0;font-size:14px;">${when}</td></tr>
            </table>
            <p style="font-size:13px;color:#666;margin-top:16px;">Full record in the CRM: <a href="https://econstructinc.com/crm/leads">econstructinc.com/crm/leads</a></p>
          </div>
        </div>
      `,
    });

    if (result.sent) {
      sent++;
    } else {
      failures.push({ name: lead.name, error: result.error });
    }

    // Resend rate limit is ~2 requests/second
    await new Promise((r) => setTimeout(r, 600));
  }

  return NextResponse.json({
    dry_run: false,
    sent,
    failed: failures.length,
    failures,
    excluded_as_tests: excluded.length,
  });
}
