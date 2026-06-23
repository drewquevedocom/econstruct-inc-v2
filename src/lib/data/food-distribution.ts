export interface FoodSubPage {
  title: string;
  slug: string;
  href: string;
  headline: string;
  subheadline: string;
  description: string;
  services: string[];
  seoTarget: string;
  imagePrompt: string;
}

export const foodSubPages: FoodSubPage[] = [
  {
    title: "Food Distribution Centers",
    slug: "distribution-centers",
    href: "/food-distribution-construction/distribution-centers",
    headline: "Distribution Center Construction & Tenant Improvements",
    subheadline: "Dock improvements, office TI, fire suppression, MEP upgrades — built to keep your operation moving.",
    description: "econstruct builds and upgrades food distribution centers throughout Los Angeles and Southern California. From dock levelers and cold-chain tie-ins to full-facility build-outs, we deliver on fast-track schedules with zero disruption to active operations.",
    services: ["Dock leveler installation & reconfiguration", "Office & admin tenant improvements", "Fire suppression system upgrades", "MEP capacity upgrades", "ADA compliance improvements", "Permit expediting", "Fast-track scheduling around operations"],
    seoTarget: "Food distribution center contractor Los Angeles",
    imagePrompt: "Modern food distribution facility exterior in a Southern California industrial park at dusk. Clean architecture, loading docks with trucks, bright outdoor lighting, branded signage. Wide establishing shot, slightly elevated angle.",
  },
  {
    title: "Cold Storage & Refrigerated Warehouses",
    slug: "cold-storage",
    href: "/food-distribution-construction/cold-storage",
    headline: "Cold Storage & Refrigerated Warehouse Construction",
    subheadline: "Code-compliant cold chain facilities — built fast, built right, built to stay at temperature.",
    description: "Cold storage construction demands precision beyond standard commercial work. econstruct delivers refrigerated warehouse builds and tenant improvements with full MEP coordination, insulated panel systems, and cold-chain compliance documentation throughout Southern California.",
    services: ["Refrigeration infrastructure & cold chain systems", "Insulated panel installation", "Dock door & seal systems for temperature retention", "MEP coordination for refrigeration loads", "Moisture management & epoxy flooring", "Health department & USDA compliance", "Fast-track occupied renovations"],
    seoTarget: "Cold storage construction California",
    imagePrompt: "Interior of a modern refrigerated cold storage warehouse. Blue-tinted industrial lighting, tall insulated racking systems, clean concrete floors with moisture management, organized inventory. Wide shot, slightly elevated.",
  },
  {
    title: "Commissary Kitchens",
    slug: "commissary-kitchens",
    href: "/food-distribution-construction/commissary-kitchens",
    headline: "Commissary Kitchen Construction Los Angeles",
    subheadline: "Ground-up builds to occupied renovations — health department ready from day one.",
    description: "Commissary kitchens require a contractor who understands LA County Health Department requirements at a granular level. econstruct has built and renovated commissary facilities across Los Angeles — coordinating grease systems, HVAC, fire suppression, and code compliance as one integrated team.",
    services: ["Ground-up commissary construction", "Tenant improvements for existing facilities", "LA County Health Department compliance", "Grease trap & interceptor installation", "Commercial HVAC & ventilation systems", "Fire suppression (Ansul) systems", "NSF/ANSI-compliant finishes & equipment pads"],
    seoTarget: "Commissary kitchen builder California",
    imagePrompt: "Professional commissary kitchen interior — rows of stainless steel prep tables, commercial ranges and ovens, overhead ventilation hoods, clean tile floors and walls, bright lighting. Health-code compliant, organized, operational. Wide shot from kitchen entrance.",
  },
  {
    title: "Ghost Kitchens",
    slug: "ghost-kitchens",
    href: "/food-distribution-construction/ghost-kitchens",
    headline: "Ghost Kitchen & Cloud Kitchen Construction Los Angeles",
    subheadline: "Multi-tenant kitchen build-outs — fast-track delivery, high-volume MEP, operational from opening day.",
    description: "Ghost kitchen operators need a contractor who moves fast and understands the unique infrastructure demands of shared, high-volume cooking environments. econstruct has built multi-tenant cloud kitchen facilities, commissary conversions, and standalone ghost kitchen suites throughout Los Angeles.",
    services: ["Multi-tenant kitchen station build-outs", "High-capacity electrical & gas upgrades", "Commercial plumbing for high-volume operations", "Ventilation & exhaust system design-build", "Delivery staging & packaging area TI", "Fast-track permitting & plan check", "Occupied facility renovations"],
    seoTarget: "Ghost kitchen contractor Los Angeles",
    imagePrompt: "Modern ghost kitchen / cloud kitchen interior — multiple independently operated kitchen stations side by side, each with commercial equipment, separated by partial dividers. Busy but organized. Delivery packaging visible. Wide shot.",
  },
  {
    title: "Food Manufacturing & Processing",
    slug: "food-manufacturing",
    href: "/food-distribution-construction/food-manufacturing",
    headline: "Food Manufacturing & Processing Facility Construction",
    subheadline: "Production line TI to full-facility builds — food-grade, code-compliant, operational on schedule.",
    description: "Food manufacturing construction requires stricter tolerances, tighter compliance, and more coordinated MEP work than almost any other commercial build type. econstruct delivers construction and tenant improvements for food manufacturing and processing facilities throughout Southern California — from HACCP-compliant finishes to full production line infrastructure.",
    services: ["Production line tenant improvements", "Food-grade epoxy & cleanroom finishes", "HACCP & FDA-compliant construction", "Mechanical & electrical for processing equipment", "Drainage & grease management systems", "ADA & code upgrades", "Structural modifications for heavy equipment"],
    seoTarget: "Food manufacturing construction Los Angeles",
    imagePrompt: "Interior of a modern food manufacturing and processing facility. Stainless steel production line equipment, food-grade epoxy floors, HVAC systems overhead, workers in white coats visible in the distance. Clean, industrial, regulated environment. Wide shot from production floor.",
  },
  {
    title: "Last-Mile Logistics & Fulfillment",
    slug: "logistics-fulfillment",
    href: "/food-distribution-construction/logistics-fulfillment",
    headline: "Last-Mile Logistics & Fulfillment Center Construction",
    subheadline: "Dock configuration, office TI, electrical upgrades — built around your operational flow.",
    description: "Last-mile logistics facilities have unique construction requirements: high vehicle throughput, dock-intensive layouts, and the need to stay operational during improvements. econstruct designs and builds logistics and fulfillment center improvements throughout Los Angeles with minimal disruption and maximum speed.",
    services: ["Dock door & drive-through reconfiguration", "Office & admin tenant improvements", "Electrical capacity & panel upgrades", "Security system & access control rough-in", "Exterior site improvements & striping", "ADA compliance upgrades", "Fast-track occupied facility improvements"],
    seoTarget: "Logistics facility contractor Los Angeles",
    imagePrompt: "Exterior of a busy last-mile logistics and fulfillment center in Los Angeles at midday. Multiple loading bays with delivery vans and trucks, clean industrial architecture, directional signage, organized vehicle staging area. Wide shot, slightly elevated.",
  },
];

export const foodHubCapabilities = [
  "Tenant Improvements",
  "Design-Build",
  "Fast-Track Construction",
  "MEP Infrastructure Upgrades",
  "Refrigeration & Cold Chain Support",
  "Commercial Kitchen Construction",
  "Health Dept. & Code Compliance",
  "ADA Upgrades",
  "Permit Expediting",
];

export const foodDecisionMakers = [
  "Directors of Real Estate",
  "Facilities Managers",
  "Construction Managers",
  "Development Managers",
  "Operations Executives",
];
