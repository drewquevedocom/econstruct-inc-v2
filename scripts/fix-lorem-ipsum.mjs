import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

const LOREM = "Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit lorem ipsum is simply free amet finibus eros.";

const fixes = {
  "decoding-the-permit-and-inspection-process-in-the-city-of-los-angeles.md": {
    desc: "Building permits and inspections in Los Angeles can derail a construction timeline fast if you don't know the process. Here's how LADBS permitting and inspections actually work.",
    excerpt: "Building permits and inspections in Los Angeles can derail a construction timeline if you don't know the process. econstruct walks through how LADBS permitting, plan check, and inspections actually work — and how to avoid the most common delays.",
  },
  "architect-designer-contractor-collaboration-the-key-to-successful-construction-projects.md": {
    desc: "A strong architect-contractor relationship prevents costly delays and miscommunication. Here's why early collaboration between design and construction teams matters.",
    excerpt: "A strong architect-contractor relationship prevents costly delays, RFIs, and miscommunication on a construction project. econstruct breaks down why early collaboration between design and construction teams matters — and how we foster it on every job.",
  },
  "essential-elements-of-construction-blueprints-a-comprehensive-guide.md": {
    desc: "Construction blueprints guide every phase of a build. Here are the 16 types of drawings that make up a complete plan set in Los Angeles.",
    excerpt: "Construction blueprints guide every phase of a build, from permitting through final inspection. econstruct breaks down the 16 types of drawings that make up a complete plan set in Los Angeles — and what LADBS requires for approval.",
  },
  "plan-check-los-angeles-streamline-your-construction-approval-with-econstruct.md": {
    desc: "LA's plan check process can take 4-12 weeks and derail a project timeline. Here's how to navigate LADBS plan check efficiently.",
    excerpt: "Los Angeles plan check can take 4-12 weeks and derail a project timeline if it's mismanaged. econstruct explains how the LADBS plan check process works, common causes of correction cycles, and how our permit team keeps submissions moving.",
  },
  "design-build-company-los-angeles-streamline-your-construction-with-econstruct.md": {
    desc: "Design-build consolidates design and construction under one team, cutting timelines and miscommunication. Here's how the model works and why it matters in Los Angeles.",
    excerpt: "Design-build consolidates design and construction under one accountable team, cutting timelines and miscommunication versus the traditional design-bid-build approach. econstruct explains the history of design-build and why it matters for projects in Los Angeles.",
  },
  "food-specialty-construction-los-angeles-expert-builders-for-your-restaurant.md": {
    desc: "Hiring the right food service architect is the first real decision in any restaurant build. Here's how to vet and hire one in Los Angeles.",
    excerpt: "Hiring the right food service architect is the first real decision in any restaurant build-out. econstruct breaks down the steps to vetting and hiring a qualified architect for your Los Angeles restaurant or food service project.",
  },
  "homeowners-guide-to-asbestos-and-renovations-essential-information-from-residential-contractors-in-los-angeles.md": {
    desc: "Older Los Angeles homes often contain asbestos in flooring, insulation, or popcorn ceilings. Here's what homeowners need to know before renovating.",
    excerpt: "Older Los Angeles homes often contain asbestos in flooring, insulation, or popcorn ceilings — and disturbing it during a renovation creates real health and legal risk. econstruct explains what homeowners need to know before starting a remodel.",
  },
};

let fixed = 0;
for (const [fname, { desc, excerpt }] of Object.entries(fixes)) {
  const filePath = path.join(BLOG_DIR, fname);
  if (!fs.existsSync(filePath)) {
    console.log(`✗ Not found: ${fname}`);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf8");
  const before = content;
  content = content.replace(`description: "${LOREM}"`, `description: "${desc}"`);
  content = content.replace(`excerpt: "${LOREM}"`, `excerpt: "${excerpt}"`);
  if (content !== before) {
    fs.writeFileSync(filePath, content, "utf8");
    fixed++;
    console.log(`✓ Fixed: ${fname}`);
  } else {
    console.log(`⚠ No change (lorem not found?): ${fname}`);
  }
}
console.log(`\nDone. Fixed ${fixed} / ${Object.keys(fixes).length} files.`);
