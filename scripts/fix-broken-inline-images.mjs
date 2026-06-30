/**
 * Removes broken in-body markdown image embeds that reference local
 * /blog/ files that don't actually exist on disk. Leaves working images
 * (hero images, real local files) untouched.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
let totalFixed = 0;
let totalRemoved = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // Match markdown images: ![alt](url) or ![alt](url "title")
  const imgPattern = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)\s*/g;
  let removedInFile = 0;

  content = content.replace(imgPattern, (match, rawUrl) => {
    if (rawUrl.startsWith("http")) return match; // external, leave alone
    const url = decodeURIComponent(rawUrl);
    const localPath = path.join(PUBLIC_DIR, url);
    if (fs.existsSync(localPath)) return match; // real file, keep
    removedInFile++;
    return ""; // broken — strip it
  });

  if (removedInFile > 0) {
    // collapse extra blank lines left behind
    content = content.replace(/\n{4,}/g, "\n\n\n");
    fs.writeFileSync(filePath, content, "utf8");
    totalFixed++;
    totalRemoved += removedInFile;
    console.log(`✓ ${file} — removed ${removedInFile} broken image(s)`);
  }
}

console.log(`\nDone. Fixed ${totalFixed} files, removed ${totalRemoved} broken image embeds.`);
