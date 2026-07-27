// Safe to import from client components — no server-only deps (no
// disposable-email-domains list, no process.env secrets). Kept separate from
// spam-protection.ts so importing just this constant doesn't pull the ~120k
// entry domain list into the client bundle.
export const HONEYPOT_FIELD = "company_website";
