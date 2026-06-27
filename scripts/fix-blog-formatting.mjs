/**
 * Fixes common formatting issues across all 67 blog posts:
 * 1. Standalone **Bold Text** on its own line → ## Bold Text (header)
 * 2. Key Takeaways / Pro Tip / Did You Know sections → blockquotes
 * 3. Ensures blank lines around headers and blockquotes
 * 4. Fixes "eConstruct Homes" and "EConstruct" brand name errors
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const original = fs.readFileSync(filePath, "utf8");

  // Split into frontmatter and body
  const parts = original.split(/^---$/m);
  if (parts.length < 3) continue; // skip if no frontmatter
  const frontmatter = parts[1];
  let body = parts.slice(2).join("---");

  let changed = false;

  // ── 1. Fix brand name ─────────────────────────────────────────
  const brandFixed = body
    .replace(/eConstruct Homes/g, "econstruct")
    .replace(/EConstruct(?!\s+Inc)/g, "econstruct");
  if (brandFixed !== body) { body = brandFixed; changed = true; }

  // ── 2. Standalone **Bold Text** lines → ## header ─────────────
  // Matches lines that are ONLY bold text (possibly with trailing colon)
  const headerFixed = body.replace(
    /^(\*\*([^*\n]{4,80}?)\*\*\s*:?\s*)$/gm,
    (_, __, title) => `## ${title.replace(/:$/, "").trim()}`
  );
  if (headerFixed !== body) { body = headerFixed; changed = true; }

  // ── 3. Callout sections → blockquote ──────────────────────────
  // Patterns: "Key Takeaway:", "Pro Tip:", "Did You Know?", "Quick Tip:"
  const calloutFixed = body.replace(
    /^((?:Key Takeaways?|Pro Tips?|Did You Know\??|Quick Tips?|Expert Tips?|Important Note|Note to Homeowners?)[:\s]*)(.+)$/gm,
    (_, label, content) => `> **${label.trim().replace(/:$/, "")}:** ${content}`
  );
  if (calloutFixed !== body) { body = calloutFixed; changed = true; }

  // ── 4. Ensure blank line before ## / ### headers ──────────────
  const spacingFixed = body.replace(/([^\n])\n(#{1,4} )/g, "$1\n\n$2");
  if (spacingFixed !== body) { body = spacingFixed; changed = true; }

  // ── 5. Ensure blank line after ## / ### headers ───────────────
  const afterHeaderFixed = body.replace(/(#{1,4} [^\n]+)\n([^\n#>-])/g, "$1\n\n$2");
  if (afterHeaderFixed !== body) { body = afterHeaderFixed; changed = true; }

  // ── 6. Collapse 3+ blank lines → 2 blank lines ────────────────
  const blankFixed = body.replace(/\n{4,}/g, "\n\n\n");
  if (blankFixed !== body) { body = blankFixed; changed = true; }

  if (changed) {
    const output = `---${frontmatter}---${body}`;
    fs.writeFileSync(filePath, output, "utf8");
    totalFixed++;
    console.log(`✓ Fixed: ${file}`);
  }
}

console.log(`\nDone. Fixed formatting in ${totalFixed} / ${files.length} files.`);
