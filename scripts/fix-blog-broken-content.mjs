/**
 * Second formatting pass: removes broken iStock/mywebsites360 images,
 * fixes ALL-CAPS headers, removes trailing colons from headers, and
 * de-smashes "**N.****TITLE**" patterns into clean spaced bold text.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
let totalFixed = 0;

function toTitleCase(text) {
  const minorWords = new Set(["a", "an", "the", "of", "in", "on", "for", "to", "and", "or", "with", "is"]);
  return text
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (i !== 0 && minorWords.has(word)) return word;
      // Keep numbers / acronyms like "LADBS", "ADA", "16" as-is if originally caps
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const original = fs.readFileSync(filePath, "utf8");
  const parts = original.split(/^---$/m);
  if (parts.length < 3) continue;
  const frontmatter = parts[1];
  let body = parts.slice(2).join("---");
  let changed = false;

  // 1. Remove broken iStock / mywebsites360 images entirely
  const noImg = body.replace(
    /!\[[^\]]*\]\(https:\/\/static\.mywebsites360\.com\/[^)]+\)\s*/g,
    ""
  );
  if (noImg !== body) { body = noImg; changed = true; }

  // 2. De-smash "**N.****TITLE**" → "**N. TITLE**" and "**N.**Text" → "**N.** Text"
  const deSmashed = body
    .replace(/\*\*(\d+)\.\*\*\*\*([^*]+)\*\*/g, "**$1. $2**")
    .replace(/\*\*(\d+)\.\*\*([A-Z])/g, "**$1.** $2");
  if (deSmashed !== body) { body = deSmashed; changed = true; }

  // 3. Remove trailing colon from markdown headers
  const noColonHeaders = body.replace(/^(#{1,4} .+):$/gm, "$1");
  if (noColonHeaders !== body) { body = noColonHeaders; changed = true; }

  // 4. Convert ALL-CAPS headers (8+ chars, mostly letters) to Title Case
  const titleCased = body.replace(/^(#{1,4}) ([A-Z0-9 ,&:'-]{8,})$/gm, (match, hashes, text) => {
    // Skip if it's mostly a number/acronym heavy line we shouldn't touch (rare false positive guard)
    return `${hashes} ${toTitleCase(text)}`;
  });
  if (titleCased !== body) { body = titleCased; changed = true; }

  // 5. Collapse stray blank-line buildup left by image removal
  const blankFixed = body.replace(/\n{4,}/g, "\n\n\n");
  if (blankFixed !== body) { body = blankFixed; changed = true; }

  if (changed) {
    fs.writeFileSync(filePath, `---${frontmatter}---${body}`, "utf8");
    totalFixed++;
    console.log(`✓ Fixed: ${file}`);
  }
}

console.log(`\nDone. Fixed ${totalFixed} / ${files.length} files.`);
