/**
 * Auto-links the first mention of key service terms in rendered blog HTML.
 * Only rewrites plain text segments (never inside existing <a> or heading
 * tags) and links each phrase once per post to avoid over-linking.
 */
const CONTENT_LINK_MAP: { pattern: RegExp; href: string }[] = [
  { pattern: /\bfood distribution\b/i, href: "/food-distribution-construction" },
  { pattern: /\bcold storage\b/i, href: "/food-distribution-construction/cold-storage" },
  { pattern: /\bghost kitchens?\b/i, href: "/food-distribution-construction/ghost-kitchens" },
  { pattern: /\bcommissary kitchens?\b/i, href: "/food-distribution-construction/commissary-kitchens" },
  { pattern: /\bfood manufacturing\b/i, href: "/food-distribution-construction/food-manufacturing" },
  { pattern: /\brestaurant construction\b/i, href: "/services/restaurant-bar-construction" },
  { pattern: /\bretail tenant improvement\b/i, href: "/services/retail-tenant-improvement" },
  { pattern: /\boffice tenant improvement\b/i, href: "/services/office-tenant-improvement" },
  { pattern: /\bfire rebuild(ing)?\b/i, href: "/services/fire-rebuild" },
  { pattern: /\bluxury modernization\b/i, href: "/services/luxury-modernization" },
  { pattern: /\bcustom home(s)?\b/i, href: "/services/custom-homes" },
];

// Segments we must never rewrite inside: existing anchors, headings, and any tag's attributes.
const PROTECTED_SEGMENT = /(<a\b[^>]*>[\s\S]*?<\/a>|<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>|<[^>]+>)/gi;

export function addInternalLinks(html: string): string {
  const linkedHrefs = new Set<string>();
  const parts = html.split(PROTECTED_SEGMENT);

  const rewritten = parts.map((part, i) => {
    // Odd indices from the split are the captured protected segments — pass through untouched.
    if (i % 2 === 1) return part;

    let text = part;
    for (const { pattern, href } of CONTENT_LINK_MAP) {
      if (linkedHrefs.has(href)) continue;
      const match = pattern.exec(text);
      if (!match) continue;
      const [full] = match;
      text =
        text.slice(0, match.index) +
        `<a href="${href}" class="font-semibold text-accent-gold underline underline-offset-2">${full}</a>` +
        text.slice(match.index + full.length);
      linkedHrefs.add(href);
    }
    return text;
  });

  return rewritten.join("");
}
