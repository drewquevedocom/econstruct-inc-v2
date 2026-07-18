import { Resend } from "resend";

// Until econstructinc.com is verified at resend.com/domains, Resend rejects
// sends from @econstructinc.com addresses and only delivers to the account
// owner's inbox (the production key's account is owned by
// marketing@econstructinc.com). The fallback below guarantees lead
// notifications still land somewhere instead of failing silently. Once the
// domain is verified, the primary send succeeds and the fallback never fires.
const FALLBACK_FROM = "econstruct Website <onboarding@resend.dev>";
const FALLBACK_TO = "marketing@econstructinc.com";

export type SendResult = {
  sent: boolean;
  usedFallback: boolean;
  id?: string;
  error?: string;
};

export async function sendNotificationEmail(opts: {
  from: string;
  to: string | string[];
  cc?: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      `[email] RESEND_API_KEY is not set — notification NOT sent: "${opts.subject}"`
    );
    return { sent: false, usedFallback: false, error: "RESEND_API_KEY not set" };
  }

  const resend = new Resend(apiKey);

  try {
    const primary = await resend.emails.send({
      from: opts.from,
      to: opts.to,
      cc: opts.cc,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    });

    if (primary.data?.id) {
      console.log(`[email] sent "${opts.subject}" id=${primary.data.id}`);
      return { sent: true, usedFallback: false, id: primary.data.id };
    }

    const primaryError =
      primary.error?.message || JSON.stringify(primary.error) || "unknown error";
    console.error(
      `[email] primary send failed for "${opts.subject}": ${primaryError}`
    );

    const toList = Array.isArray(opts.to) ? opts.to : [opts.to];
    const ccList = opts.cc ? (Array.isArray(opts.cc) ? opts.cc : [opts.cc]) : [];
    const banner = `<div style="background:#fff3cd;border:1px solid #ffeeba;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-family:sans-serif;font-size:13px;color:#856404;"><strong>Fallback delivery.</strong> Resend could not send this from econstructinc.com (${primaryError}). Intended recipients: ${[...toList, ...ccList].join(", ")}. Verify the domain at resend.com/domains to restore normal delivery.</div>`;

    const fallback = await resend.emails.send({
      from: FALLBACK_FROM,
      to: FALLBACK_TO,
      subject: opts.subject,
      html: banner + opts.html,
      replyTo: opts.replyTo,
    });

    if (fallback.data?.id) {
      console.log(
        `[email] fallback sent "${opts.subject}" to ${FALLBACK_TO} id=${fallback.data.id}`
      );
      return { sent: true, usedFallback: true, id: fallback.data.id };
    }

    const fallbackError =
      fallback.error?.message || JSON.stringify(fallback.error) || "unknown error";
    console.error(
      `[email] fallback send ALSO failed for "${opts.subject}": ${fallbackError}`
    );
    return { sent: false, usedFallback: true, error: fallbackError };
  } catch (err) {
    console.error(`[email] send threw for "${opts.subject}":`, err);
    return { sent: false, usedFallback: false, error: String(err) };
  }
}
