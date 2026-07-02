import { chromium } from "playwright";
const OUT = "C:/Users/drewq/AppData/Local/Temp/claude/c--Users-drewq-OneDrive-Documentos-DREW-drewquevedo-dq-agentiq-econstruct-inc-v2/83fe9b09-55ca-466a-b982-9f0d43507bff/scratchpad";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://127.0.0.1:3000/blog/restaurant-construction-los-angeles-800-degrees-pizzeria-case-study-by-econstruct", { waitUntil: "load", timeout: 60000 });
await page.waitForTimeout(2000);
// Scroll to the featured image area (after author box)
await page.evaluate(() => window.scrollTo(0, 700));
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/800-blog-image-area.png` });
await browser.close();
