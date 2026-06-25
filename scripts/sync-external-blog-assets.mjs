import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourceDir = "C:\\Users\\drewq\\OneDrive\\Documentos\\DREW\\drewquevedo\\dq_agentiq\\econstruct\\econstruct-crm\\assets\\blog";
const targetDir = path.join(rootDir, "public", "blog");
const contentDir = path.join(rootDir, "content", "blog");

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function syncAssets() {
  await ensureDir(targetDir);
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  let copied = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    await fs.copyFile(sourcePath, targetPath);
    copied += 1;
  }

  return copied;
}

async function rewriteBlogUrls() {
  const entries = await fs.readdir(contentDir);
  let updated = 0;

  for (const entry of entries) {
    if (!entry.endsWith(".md")) continue;
    const filePath = path.join(contentDir, entry);
    const original = await fs.readFile(filePath, "utf8");
    const next = original.replace(/\/blog\/wordpress\//g, "/blog/");
    if (next !== original) {
      await fs.writeFile(filePath, next, "utf8");
      updated += 1;
    }
  }

  return updated;
}

async function run() {
  const copied = await syncAssets();
  const updated = await rewriteBlogUrls();

  console.log(`Copied ${copied} external blog assets into public/blog.`);
  console.log(`Updated ${updated} markdown files from /blog/wordpress/ to /blog/.`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
