import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotificationEmail } from "@/lib/email";
import {
  checkRateLimit,
  containsSolicitationKeywords,
  getClientIp,
  isDisposableEmail,
  isHoneypotTripped,
  verifyTurnstile,
} from "@/lib/spam-protection";

const NOTIFY_TO = ["info@econstructinc.com", "frank@econstructinc.com"];
const NOTIFY_CC: string[] = [
  "katie@econstructinc.com",
  "marketing@econstructinc.com",
];

const SUPABASE_URL = "https://dzudtdhmvnuipqyoogem.supabase.co";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      projectType,
      zipCode,
      firstName,
      lastName,
      email,
      phone,
      budget,
      timeline,
      details,
      source, // optional: "contact_form" | "consultation_cta"
      turnstileToken,
    } = body;

    // Rate limit first — cheapest check, no DB/network cost.
    const clientIp = getClientIp(req);
    if (clientIp) {
      const rl = checkRateLimit(`contact:${clientIp}`);
      if (!rl.allowed) {
        console.warn(`[spam-protection] contact route rate-limited: ${clientIp}`);
        return NextResponse.json(
          { error: "Too many submissions. Please try again in a bit." },
          { status: 429 }
        );
      }
    }

    // Honeypot — bots that fill every field get a fake success, silently,
    // with no save and no email. Logged so it's visible in server logs.
    if (isHoneypotTripped(body)) {
      console.warn("[spam-protection] contact route honeypot tripped, silently dropped");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const turnstileResult = await verifyTurnstile(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      console.warn("[spam-protection] contact route Turnstile check failed:", turnstileResult.errorCodes);
      return NextResponse.json(
        { error: "Verification failed. Please refresh the page and try again." },
        { status: 400 }
      );
    }

    if (isDisposableEmail(email)) {
      return NextResponse.json(
        { error: "Please use a permanent email address rather than a disposable one." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    // Build Supabase service client inline — avoids crash if env var missing
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
      console.error("SUPABASE_SERVICE_ROLE_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error. Please contact us directly." },
        { status: 500 }
      );
    }

    const supabase = createClient(SUPABASE_URL, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabase.from("leads").insert([
      {
        name: fullName,
        email,
        phone: phone || null,
        zip_code: zipCode || null,
        source: source || "contact_form",
        lifecycle_stage: "new",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead. Please try again." },
        { status: 500 }
      );
    }

    // Send email notification (sendNotificationEmail logs failures and
    // falls back to the Resend account owner's inbox if the domain send fails)
    {
      const normalizedProjectType = projectType || "General Inquiry";
      const isConsultation = source === "consultation_cta" || source === "free_consultation";
      const baseSubject = isConsultation
        ? `New Consultation Request - ${fullName}`
        : `New Contact Form Submission - ${fullName}`;
      const subject = containsSolicitationKeywords(details)
        ? `[Possible Solicitation] ${baseSubject}`
        : baseSubject;

      await sendNotificationEmail({
        from: "econstruct Website <no-reply@econstructinc.com>",
        to: NOTIFY_TO,
        cc: NOTIFY_CC,
        replyTo: email,
        subject,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
            <div style="background:#07090c;padding:24px 32px;border-radius:12px 12px 0 0;">
              <p style="color:#d9b661;font-weight:700;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;margin:0;">econstruct Inc.</p>
              <h1 style="color:#ffffff;font-size:22px;margin:8px 0 0;">${subject}</h1>
            </div>
            <div style="background:#f8f6f2;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e2db;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;font-size:13px;color:#666;width:40%;font-weight:600;">Name</td><td style="padding:8px 0;font-size:14px;">${fullName}</td></tr>
                <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
                ${zipCode ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Zip Code</td><td style="padding:8px 0;font-size:14px;">${zipCode}</td></tr>` : ""}
                <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Project Type</td><td style="padding:8px 0;font-size:14px;">${normalizedProjectType}</td></tr>
                ${budget ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Budget</td><td style="padding:8px 0;font-size:14px;">${budget}</td></tr>` : ""}
                ${timeline ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Timeline</td><td style="padding:8px 0;font-size:14px;">${timeline}</td></tr>` : ""}
                ${details ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;vertical-align:top;">Details</td><td style="padding:8px 0;font-size:14px;">${details}</td></tr>` : ""}
                <tr><td style="padding:8px 0;font-size:13px;color:#666;font-weight:600;">Source</td><td style="padding:8px 0;font-size:14px;">${source || "contact_form"}</td></tr>
              </table>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
