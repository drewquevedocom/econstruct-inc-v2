export interface Project {
  title: string;
  slug: string;
  category: "residential" | "restaurant" | "retail" | "commercial";
  neighborhood: string;
  description: string;
  heroImage: string;
  images: string[];
  specs: {
    sqft?: string;
    timeline?: string;
    value?: string;
    scope?: string;
  };
  testimonial?: {
    quote: string;
    name: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  // ── Restaurant & Bar ─────────────────────────────────────────
  {
    title: "Hutchinson Cocktails & Grill",
    slug: "hutchinson-cocktails-and-grill",
    category: "restaurant",
    neighborhood: "La Cienega, Los Angeles",
    description:
      "An upscale cocktail lounge blending modern elegance with old Hollywood glamour. Features an expansive blue onyx bar as centerpiece, custom leather and velvet booth seating, live-edge wood tables fabricated by econstruct artisans, and an open-concept kitchen with a state-of-the-art bar program.",
    heroImage: "/projects/hutchinson11.jpg",
    images: [
      "/projects/hutchinson11.jpg",
      "/projects/hutchinson9.jpg",
      "/projects/hutchinson8.jpg",
      "/projects/hutchinson7.jpg",
      "/projects/hutchinson6.jpg",
      "/projects/hutchinson5.jpg",
      "/projects/hutchinson4.jpg",
      "/projects/hutchinson3.jpg",
      "/projects/hutchinson_1.jpg",
    ],
    specs: { scope: "Interior Build-Out" },
    featured: true,
  },
  {
    title: "Hal's Bar and Grill",
    slug: "hals-bar-and-grill",
    category: "restaurant",
    neighborhood: "Playa Vista",
    description:
      "Complete interior and exterior remodel of a beloved Venice-area restaurant established in 1987. Stripped to studs, upgraded all systems, added custom live-edge wood millwork, and redesigned the kitchen with state-of-the-art commercial equipment — all while preserving the neighborhood character the restaurant was known for.",
    heroImage: "/projects/Hals_pv_12-scaled.jpg",
    images: [
      "/projects/Hals_pv_12-scaled.jpg",
      "/projects/DSC02984-scaled.jpg",
      "/projects/DSC02973-scaled.jpg",
      "/projects/DSC02969-scaled.jpg",
      "/projects/Hals_pv_9-scaled.jpg",
      "/projects/Hals_pv_7-scaled.jpg",
      "/projects/Hals_pv_6-scaled.jpg",
      "/projects/Hals_pv_5-scaled.jpg",
      "/projects/Hals_pv_4-scaled.jpg",
      "/projects/Hals_pv_2-scaled.jpg",
    ],
    specs: { scope: "Full Remodel" },
    featured: true,
  },
  {
    title: "El Pollo Loco",
    slug: "el-pollo-loco",
    category: "restaurant",
    neighborhood: "Delano, CA",
    description:
      "Ground-up construction of a standalone El Pollo Loco restaurant, delivered from foundation through opening day. Features an open kitchen with vertical spits, plancha grill station, branded patio with fire fixtures, and interior finishes optimized for fast-casual service volume.",
    heroImage: "/projects/El_pollo_loco_3.jpg",
    images: [
      "/projects/El_pollo_loco_3.jpg",
      "/projects/El_pollo_loco_4.jpg",
      "/projects/El_pollo_loco_5.jpg",
      "/projects/El_pollo_loco_7.jpg",
      "/projects/El_pollo_loco_8.jpg",
    ],
    specs: { sqft: "2,500", scope: "Ground-Up Construction" },
  },
  {
    title: "800 Degrees Woodfired Kitchen",
    slug: "800-degrees-woodfired-kitchen",
    category: "restaurant",
    neighborhood: "Hollywood",
    description:
      "Collaboration with acclaimed chef Anthony Carron to construct an innovative woodfired restaurant featuring dual wood-burning ovens, charcoal grill, and rotisserie. Custom Douglas fir accents, reclaimed whiskey barrel oak counters and bar tops, and a state-of-the-art ventilation hood system throughout.",
    heroImage: "/projects/800degrees_1.webp",
    images: [
      "/projects/800degrees_1.webp",
      "/projects/800degrees_2.webp",
      "/projects/800degrees_3.webp",
      "/projects/800degrees_4.webp",
      "/projects/800degrees_5.webp",
      "/projects/800degrees_6.webp",
    ],
    specs: { scope: "New Build-Out" },
  },
  {
    title: "Koala T Cafe",
    slug: "koala-t-cafe",
    category: "restaurant",
    neighborhood: "Westwood Village",
    description:
      "First brick-and-mortar location for Koala T Cafe, designed to feel like an extension of your living room. Features cozy seating with antique mirrors and armchairs, an expansive marble counter, La Marzocco espresso machines, and custom wood shelving.",
    heroImage: "/projects/2017-09-02.jpg",
    images: [
      "/projects/2017-09-02.jpg",
      "/projects/Koala_Tea_6.jpg",
      "/projects/Koala_Tea_5.jpg",
      "/projects/Koala_Tea_4.jpg",
      "/projects/Koala_Tea_3.jpg",
      "/projects/Koala_Tea_2.jpg",
      "/projects/Koala_Tea_1.jpg",
    ],
    specs: { scope: "New Build-Out" },
  },
  {
    title: "Odd One Out",
    slug: "odd-one-out",
    category: "restaurant",
    neighborhood: "3rd Street Promenade, Santa Monica",
    description:
      "Boba tea shop on the iconic 3rd Street Promenade, transforming a prime retail space under complex construction conditions. Navigated extended plan check delays and an accelerated finish timeline requiring extended work hours and coordinated manpower to hit opening day.",
    heroImage: "/projects/DSC00788-1-scaled.jpg",
    images: [
      "/projects/DSC00788-1-scaled.jpg",
      "/projects/o1o_b4_after.png",
    ],
    specs: { scope: "Interior Remodel" },
  },
  {
    title: "Tea Pot Cafe",
    slug: "tea-pot-cafe",
    category: "restaurant",
    neighborhood: "Santa Clarita",
    description:
      "Ground-up commercial restaurant build-out for this family-oriented dining destination. Open, welcoming interior with separate kids' and adults' zones, custom booth seating fabricated from reclaimed wood, an efficient stainless-steel kitchen for a diverse menu, an indoor supervised playground, and an outdoor cafe patio.",
    heroImage: "/projects/2017-09-02.jpg",
    images: [
      "/projects/2017-09-02.jpg",
    ],
    specs: { scope: "New Build-Out" },
  },

  // ── Retail ───────────────────────────────────────────────────
  {
    title: "Rothy's",
    slug: "rothys",
    category: "retail",
    neighborhood: "Melrose & Pasadena",
    description:
      "Three retail locations for eco-conscious footwear brand Rothy's across Los Angeles and Pasadena. Each build-out integrates locally-sourced reclaimed woods, accent tile, and sustainable finishes aligned with the brand's mission, along with custom millwork displays.",
    heroImage: "/projects/Untitled-design-87-600x600.png",
    images: [
      "/projects/Untitled-design-87-600x600.png",
    ],
    specs: { scope: "Retail Build-Out" },
    featured: true,
  },
  {
    title: "Malin+Goetz",
    slug: "malin-goetz",
    category: "retail",
    neighborhood: "Venice & Silverlake",
    description:
      "Two distinctive retail locations for premium skincare brand Malin+Goetz, reflecting the brand's philosophy of uncomplicated skincare and sustainable living. Recycled construction materials, minimalist aesthetic with clean lines and neutral palette, and energy-efficient lighting throughout.",
    heroImage: "/projects/2-web-or-mls-APR00067-1-600x600.jpg",
    images: [
      "/projects/2-web-or-mls-APR00067-1-600x600.jpg",
    ],
    specs: { scope: "Retail Build-Out" },
  },
  {
    title: "Thom Sweeney",
    slug: "thom-sweeney",
    category: "retail",
    neighborhood: "Melrose Place",
    description:
      "Flagship West Coast retail store for renowned British bespoke menswear brand Thom Sweeney, completed in a record-breaking four weeks. Clean lines, natural materials, and carefully considered lighting create a gallery-like atmosphere on Melrose Place.",
    heroImage: "/projects/10-web-or-mls-APR00150-600x600.jpg",
    images: [
      "/projects/10-web-or-mls-APR00150-600x600.jpg",
    ],
    specs: { timeline: "4 weeks", scope: "Retail Build-Out" },
  },

  // ── Commercial (Multi-Location) ─────────────────────────────
  {
    title: "Jersey Mike's Subs",
    slug: "jersey-mikes-subs",
    category: "commercial",
    neighborhood: "Southern California",
    description:
      "Eight-plus new restaurant builds across Southern California — Los Angeles, Riverside, Yucaipa, Redlands, Barstow, and Moreno Valley. Full-service construction from permitting and site prep through ground-up building and complete brand-spec interiors.",
    heroImage: "/projects/Jersey_Mikes_LA_1-scaled.jpg",
    images: [
      "/projects/Jersey_Mikes_LA_1-scaled.jpg",
      "/projects/Jersey_Mikes_LA_2-scaled.jpg",
      "/projects/Jersey_Mikes_LA_3-scaled.jpg",
    ],
    specs: { scope: "Multi-Location Build-Out" },
    featured: true,
  },
  {
    title: "85°C Bakery Cafe",
    slug: "85c-bakery-cafe",
    category: "commercial",
    neighborhood: "Buena Park & Multiple West Coast Locations",
    description:
      "Eight locations across California and Arizona for the premium bakery concept, plus the brand's Buena Park distribution center office build-out. Each space showcases an in-house bakery producing fresh items hourly, with dark wood displays, commercial baking equipment, and site-specific adaptations including a historic early 20th-century building in Downtown LA.",
    heroImage: "/blog/85c-distribution-11-600x600.jpg",
    images: [
      "/blog/85c-distribution-11-600x600.jpg",
      "/blog/85c-distribution-12-600x600.jpg",
      "/blog/85c-distribution-13-600x600.jpg",
      "/blog/85c-distribution-14-600x600.jpg",
      "/blog/85c-distribution-15-600x600.jpg",
      "/blog/85c-distribution-16-600x600.jpg",
      "/blog/85c-distribution-6-600x600.jpg",
      "/blog/85c-distribution-8-600x600.jpg",
    ],
    specs: { scope: "Multi-Location Build-Out + Distribution Center Office" },
  },
  {
    title: "Joe & The Juice",
    slug: "joe-and-the-juice",
    category: "commercial",
    neighborhood: "Multiple LA Locations",
    description:
      "Five successful locations across Southern California for the Scandinavian juice and coffee brand. Each build-out features a signature aesthetic — moss walls, brick backsplashes, sleek counters, and durable high-traffic finishes with custom juice stations and coffee bar installations.",
    heroImage: "/projects/Untitled-design-18-1-600x600.png",
    images: [
      "/projects/Untitled-design-18-1-600x600.png",
    ],
    specs: { scope: "Multi-Location Build-Out" },
  },

  // ── Residential ──────────────────────────────────────────────
  {
    title: "Devista Project",
    slug: "devista-project",
    category: "residential",
    neighborhood: "Hollywood Hills",
    description:
      "Comprehensive renovation of a 1980s Hollywood Hills residence transformed into a modern open-concept home. The project involved removing walls for improved natural light flow, a redesigned chef's kitchen with large island and premium appliances, smart home technology integration, and drought-resistant hillside landscaping.",
    heroImage: "/projects/devista-hero.jpg",
    images: [
      "/projects/devista-hero.jpg",
      "/projects/devista-2.jpg",
      "/projects/Devista_1-scaled.webp",
      "/projects/Devista_2-scaled.webp",
      "/projects/Devista_3-scaled.webp",
      "/projects/Devista_4-scaled.webp",
      "/projects/Devista_5-scaled.webp",
      "/projects/Devista_6-scaled.webp",
      "/projects/Devista_7-scaled.webp",
      "/projects/Devista_8-scaled.webp",
      "/projects/Devista_9-scaled.webp",
      "/projects/Devista_11-scaled.webp",
    ],
    specs: { scope: "Full Remodel" },
    featured: true,
  },
  {
    title: "54 Saddlebow Rd",
    slug: "54-saddlebow-rd",
    category: "residential",
    neighborhood: "Bell Canyon",
    description:
      "Comprehensive transformation of a late 1970s residence into a modern open-concept home. The project involved removing walls for improved natural light flow, a redesigned chef's kitchen with large island and premium appliances, smart home technology integration, and drought-resistant hillside landscaping.",
    heroImage: "/projects/saddlebow-54-hero.jpg",
    images: [
      "/projects/saddlebow-54-hero.jpg",
      "/projects/saddlebow-54-2.jpg",
      "/projects/saddlebow-54-3.jpg",
      "/projects/saddlebow-54-5.jpg",
      "/projects/saddlebow-54-8.jpg",
    ],
    specs: { scope: "Full Remodel" },
  },
  {
    title: "50 Saddlebow Rd",
    slug: "50-saddlebow-rd",
    category: "residential",
    neighborhood: "Bell Canyon",
    description:
      "A luxury modern hillside home required innovative access solutions to an unusable lower property area. The team engineered and installed a compact hillside lift system with a 950-pound capacity, featuring custom doors and cab matching the home's modern materials, reinforced concrete landing, and multiple redundant fail-safe systems.",
    heroImage: "/projects/saddlebow-50-hero.jpg",
    images: [
      "/projects/saddlebow-50-hero.jpg",
      "/projects/saddlebow-50-2.webp",
      "/projects/Saddlebow2.webp",
      "/projects/Saddlebow3.webp",
      "/projects/Saddlebow4.webp",
      "/projects/Saddlebow5.webp",
      "/projects/Saddlebow6.webp",
      "/projects/Saddlebow9.webp",
    ],
    specs: { scope: "Hillside Lift Installation" },
  },
  {
    title: "Lawndale Condo",
    slug: "marine-avenue-condo",
    category: "residential",
    neighborhood: "Lawndale",
    description:
      "A comprehensive transformation of a 3-bedroom, 3-bathroom coastal condo on Marine Avenue. Reconfigured the floorplan with an open, airy layout for beachside living, including kitchen expansion, spa-inspired bathroom renovation, and a redesigned private balcony with firepit seating area.",
    heroImage: "/projects/marine-ave-hero.jpg",
    images: [
      "/projects/marine-ave-hero.jpg",
      "/projects/Marine_Ave_condo_6.webp",
      "/projects/Marine_Ave_condo_7.webp",
      "/projects/Marine_Ave_condo_12.webp",
    ],
    specs: { scope: "Condo Remodel" },
  },
  {
    title: "Mulholland Dr Project",
    slug: "mulholland-drive-residence",
    category: "residential",
    neighborhood: "Mulholland Drive, Los Angeles",
    description:
      "A 1970s home on Mulholland Drive underwent a comprehensive remodel to modernize the space and enhance its connection to panoramic hillside views. Open-concept design achieved through partition removal, expansive glass walls, wide plank flooring, and coastal-inspired tile — plus a redesigned open kitchen with quartz island, spa-like master suite, resurfaced pool and deck, and an outdoor barbecue kitchen.",
    heroImage: "/projects/mulholland-hero.jpg",
    images: [
      "/projects/mulholland-hero.jpg",
    ],
    specs: { scope: "Full Remodel" },
  },
  {
    title: "Newcomb Road",
    slug: "newcomb-road-residence",
    category: "residential",
    neighborhood: "Newcomb Road, Los Angeles",
    description:
      "A full home transformation into a sleek, modern oasis — fresh exterior paint, new concrete patio, and custom wood fence outside; complete kitchen remodel with white cabinetry, marble countertops and high-end appliances inside; plus a master bath update with a freestanding tub and frameless glass shower, hardwood flooring, and custom built-ins throughout.",
    heroImage: "/projects/newcomb-road-hero.jpg",
    images: [
      "/projects/newcomb-road-hero.jpg",
    ],
    specs: { scope: "Full Remodel" },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** All projects in a given category. */
export function getProjectsByCategory(
  category: Project["category"]
): Project[] {
  return projects.filter((p) => p.category === category);
}

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Restaurant & Bar", value: "restaurant" },
  { label: "Retail", value: "retail" },
  { label: "Commercial", value: "commercial" },
] as const;

/** @deprecated use getProjectsByCategory("restaurant") instead */
export const residentialProjects = projects.filter(
  (p) => p.category === "residential"
);

/** @deprecated alias for projectCategories */
export const residentialProjectCategories = projectCategories;
