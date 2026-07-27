import disposableDomains from "disposable-email-domains";
import { HONEYPOT_FIELD } from "@/lib/spam-protection-shared";

export { HONEYPOT_FIELD };

const DISPOSABLE_DOMAIN_SET = new Set(
  (disposableDomains as string[]).map((d) => d.toLowerCase())
);

export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase().trim();
  if (!domain) return false;
  return DISPOSABLE_DOMAIN_SET.has(domain);
}

// Common solicitation phrases seen in inbound spam/pitches. Not exhaustive —
// this only tags the email subject for a human to triage, it never blocks.
const SOLICITATION_KEYWORDS = [
  "seo services",
  "estimating services",
  "guest post",
  "link building",
  "web design services",
  "website design services",
  "increase your rankings",
  "improve your ranking",
  "improve your website",
  "digital marketing services",
  "social media marketing services",
  "content writing services",
  "app development services",
  "software development services",
  "backlink",
  "google ranking",
  "search engine optimization",
  "boost your traffic",
  "no upfront cost",
  "free trial seo",
];

export function containsSolicitationKeywords(text: string | null | undefined): boolean {
  if (!text) return false;
  const lower = text.toLowerCase();
  return SOLICITATION_KEYWORDS.some((kw) => lower.includes(kw));
}

export function isHoneypotTripped(body: Record<string, unknown>): boolean {
  const value = body[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim().length > 0;
}

interface TurnstileVerifyResult {
  success: boolean;
  errorCodes?: string[];
}

/**
 * Verifies a Cloudflare Turnstile token server-side. Fails OPEN (treats as
 * success) when the secret isn't configured yet or Cloudflare's endpoint is
 * unreachable/erroring — a real lead should never be silently dropped
 * because of our own misconfiguration or a third-party outage. Both cases
 * are logged loudly so the failure is visible without blocking submissions.
 */
export async function verifyTurnstile(
  token: string | undefined | null,
  remoteIp?: string | null
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("[spam-protection] TURNSTILE_SECRET_KEY not set — skipping verification (fail open)");
    return { success: true };
  }
  if (!token) {
    return { success: false, errorCodes: ["missing-input-response"] };
  }

  try {
    const params = new URLSearchParams();
    params.set("secret", secret);
    params.set("response", token);
    if (remoteIp) params.set("remoteip", remoteIp);

    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 5000);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      signal: ctrl.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error("[spam-protection] Turnstile siteverify HTTP error:", res.status);
      return { success: true }; // fail open on Cloudflare-side issue
    }

    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.error("[spam-protection] Turnstile verification failed:", data["error-codes"]);
    }
    return { success: data.success, errorCodes: data["error-codes"] };
  } catch (err) {
    console.error("[spam-protection] Turnstile verification threw (fail open):", err);
    return { success: true };
  }
}

// --- IP rate limiting -------------------------------------------------
// Lightweight in-memory sliding window, no new infra. Best-effort: resets
// on cold start and isn't shared across concurrent serverless instances,
// but that's an acceptable tradeoff for stopping basic scripted abuse
// without adding paid infrastructure.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

export function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(key, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  rateLimitStore.set(key, timestamps);

  // Opportunistic cleanup so the map doesn't grow unbounded under sustained
  // traffic from many distinct IPs on a long-lived warm instance.
  if (rateLimitStore.size > 5000) {
    for (const [k, v] of rateLimitStore) {
      if (v.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) rateLimitStore.delete(k);
    }
  }

  return { allowed: true, remaining: RATE_LIMIT_MAX - timestamps.length };
}

export function getClientIp(req: Request): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return null;
}
