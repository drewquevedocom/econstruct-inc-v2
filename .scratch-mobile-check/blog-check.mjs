import { chromium } from "playwright";
const OUT = "C:/Users/drewq/AppData/Local/Temp/claude/c--Users-drewq-OneDrive-Documentos-DREW-drewquevedo-dq-agentiq-econstruct-inc-v2/83fe9b09-55ca-466a-b982-9f0d43507bff/scratchpad";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://127.0.0.1:3000/blog/restaurant-construction-los-angeles-800-degrees-pizzeria-case-study-by-econstruct", { waitUntil: "load", timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: `${OUT}/800-blog-full.png`, fullPage: false });
// zoom into the hero image area
await page.screenshot({ path: `${OUT}/800-blog-top.png`, clip: { x: 0, y: 80, width: 1280, height: 600 } });
console.log("Screenshots saved");
await browser.close();
