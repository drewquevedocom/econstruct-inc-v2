import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";
import {
  checkRateLimit,
  containsSolicitationKeywords,
  getClientIp,
  isDisposableEmail,
  isHoneypotTripped,
  verifyTurnstile,
} from "@/lib/spam-protection";

const NOTIFY_TO = ["frank@econstructinc.com", "drewquevedo@gmail.com"];

function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, rating, feedback, turnstileToken } = body;

    const clientIp = getClientIp(req);
    if (clientIp) {
      const rl = checkRateLimit(`review-feedback:${clientIp}`);
      if (!rl.allowed) {
        console.warn(`[spam-protection] review-feedback route rate-limited: ${clientIp}`);
        return NextResponse.json(
          { error: "Too many submissions. Please try again in a bit." },
          { status: 429 }
        );
      }
    }

    if (isHoneypotTripped(body)) {
      console.warn("[spam-protection] review-feedback route honeypot tripped, silently dropped");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !feedback) {
      return NextResponse.json({ error: "Name, email, and feedback are required." }, { status: 400 });
    }

    const turnstileResult = await verifyTurnstile(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      console.warn("[spam-protection] review-feedback route Turnstile check failed:", turnstileResult.errorCodes);
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

    {
      const baseSubject = `Private client feedback - ${esc(name)}`;
      const subject = containsSolicitationKeywords(feedback)
        ? `[Possible Solicitation] ${baseSubject}`
        : baseSubject;
      const result = await sendNotificationEmail({
        from: "econstruct Reviews <no-reply@econstructinc.com>",
        to: NOTIFY_TO,
        replyTo: email,
        subject,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#1a1a1a;">
            <div style="background:#1C1C1E;color:#fff;padding:22px 28px;border-radius:12px 12px 0 0;">
              <p style="color:#d9b661;font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin:0;">econstruct private feedback</p>
              <h1 style="font-size:22px;margin:8px 0 0;">${esc(rating)} star review from ${esc(name)}</h1>
            </div>
            <div style="border:1px solid #e8e4dc;border-top:0;padding:28px;border-radius:0 0 12px 12px;background:#faf9f6;">
              <p><strong>Name:</strong> ${esc(name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
              <p><strong>Project Type:</strong> ${esc(projectType || "Other")}</p>
              <p><strong>Rating:</strong> ${esc(rating || "Not provided")}</p>
              <p><strong>Feedback:</strong></p>
              <p style="white-space:pre-wrap;line-height:1.6;">${esc(feedback)}</p>
            </div>
          </div>
        `,
      });
      if (!result.sent) {
        return NextResponse.json(
          { error: "Unable to send feedback." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Private review feedback error:", err);
    return NextResponse.json({ error: "Unable to send feedback." }, { status: 500 });
  }
}
