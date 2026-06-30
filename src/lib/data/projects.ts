/** A distinct scope of work within a single multi-part project (e.g. retail
 * locations vs. a distribution center build for the same client). */
export interface ProjectPart {
  title: string;
  description: string;
  images: string[];
  video?: string;
}

export interface Project {
  title: string;
  slug: string;
  category: "residential" | "restaurant" | "retail" | "commercial";
  neighborhood: string;
  /** Short one-line hero tagline — NOT the full description. */
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  /** YouTube video URL, if available for this project. */
  video?: string;
  /** For multi-scope projects: render distinct sections instead of one flat gallery. */
  parts?: ProjectPart[];
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
    tagline: "Old Hollywood glamour meets a modern cocktail program.",
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
    tagline: "A neighborhood landmark since 1987, reimagined from the studs.",
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
    tagline: "Ground-up fast-casual, built from foundation to opening day.",
    description:
      "Ground-up construction of a standalone El Pollo Loco restaurant, delivered from foundation through opening day. Features an open kitchen with vertical spits, plancha grill station, branded patio with fire fixtures, and interior finishes optimized for fast-casual service volume.",
    heroImage: "/blog/El_pollo_loco_3.webp",
    images: [
      "/blog/El_pollo_loco_3.webp",
      "/blog/El_pollo_loco_4.webp",
      "/blog/El_pollo_loco_5.webp",
      "/blog/El_pollo_loco_7.webp",
      "/blog/El_pollo_loco_8.webp",
      "/blog/El_pollo_loco_10.webp",
      "/blog/El_pollo_loco_12.webp",
      "/blog/El_pollo_loco_13.webp",
      "/blog/El_pollo_loco_14.webp",
      "/blog/El_pollo_loco_15.webp",
      "/blog/El_pollo_loco_16.webp",
      "/blog/El_pollo_loco_18.webp",
      "/blog/El_pollo_loco_19.webp",
    ],
    specs: { sqft: "2,500", scope: "Ground-Up Construction" },
  },
  {
    title: "800 Degrees Woodfired Kitchen",
    slug: "800-degrees-woodfired-kitchen",
    category: "restaurant",
    neighborhood: "Hollywood",
    tagline: "Wood-fired ovens and reclaimed whiskey-barrel oak, built with chef Anthony Carron.",
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
    tagline: "A living-room-style cafe with marble counters and La Marzocco machines.",
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
    tagline: "A boba shop on the Promenade, delivered against an accelerated timeline.",
    description:
      "Boba tea shop on the iconic 3rd Street Promenade, transforming a prime retail space under complex construction conditions. Navigated extended plan check delays and an accelerated finish timeline requiring extended work hours and coordinated manpower to hit opening day.",
    heroImage: "/projects/DSC00788-1-scaled.jpg",
    images: [
      "/projects/DSC00788-1-scaled.jpg",
      "/projects/o1o_b4_after.png",
    ],
    video: "https://www.youtube.com/watch?v=xSOv0Nafzr4",
    specs: { scope: "Interior Remodel" },
  },
  {
    title: "Tea Pot Cafe",
    slug: "tea-pot-cafe",
    category: "restaurant",
    neighborhood: "Santa Clarita",
    tagline: "A family-oriented dining destination with its own indoor playground.",
    description:
      "Ground-up commercial restaurant build-out for this family-oriented dining destination. Open, welcoming interior with separate kids' and adults' zones, custom booth seating fabricated from reclaimed wood, an efficient stainless-steel kitchen for a diverse menu, an indoor supervised playground, and an outdoor cafe patio.",
    heroImage: "/blog/Tea_Pot_Cafe_1-scaled.webp",
    images: [
      "/blog/Tea_Pot_Cafe_1-scaled.webp",
      "/blog/Tea_Pot_Cafe_2-scaled.webp",
      "/blog/Tea_Pot_Cafe_3-scaled.webp",
      "/blog/Tea_Pot_Cafe_4-scaled.webp",
      "/blog/Tea_Pot_Cafe_5-scaled.webp",
      "/blog/Tea_Pot_Cafe_6-scaled.webp",
      "/blog/Tea_Pot_Cafe_7-scaled.webp",
      "/blog/Tea_Pot_Cafe_8-scaled.webp",
      "/blog/Tea_Pot_Cafe_9-scaled.webp",
      "/blog/Tea_Pot_Cafe_10-scaled.webp",
    ],
    specs: { scope: "New Build-Out" },
  },

  // ── Retail ───────────────────────────────────────────────────
  {
    title: "Rothy's",
    slug: "rothys",
    category: "retail",
    neighborhood: "Melrose & Pasadena",
    tagline: "Sustainable retail design for an eco-conscious footwear brand.",
    description:
      "Three retail locations for eco-conscious footwear brand Rothy's across Los Angeles and Pasadena. Each build-out integrates locally-sourced reclaimed woods, accent tile, and sustainable finishes aligned with the brand's mission, along with custom millwork displays.",
    heroImage: "/projects/Untitled-design-84.webp",
    images: [
      "/projects/Untitled-design-84.webp",
      "/projects/Untitled-design-85.webp",
      "/projects/Untitled-design-86.webp",
      "/projects/Untitled-design-87.webp",
      "/projects/Untitled-design-89.webp",
      "/projects/Untitled-design-90.webp",
      "/projects/Untitled-design-91.webp",
    ],
    specs: { scope: "Retail Build-Out" },
    featured: true,
  },
  {
    title: "Malin+Goetz",
    slug: "malin-goetz",
    category: "retail",
    neighborhood: "Venice & Silverlake",
    tagline: "Minimalist retail design for a premium skincare brand.",
    description:
      "Two distinctive retail locations for premium skincare brand Malin+Goetz, reflecting the brand's philosophy of uncomplicated skincare and sustainable living. Recycled construction materials, minimalist aesthetic with clean lines and neutral palette, and energy-efficient lighting throughout.",
    heroImage: "/projects/1-web-or-mls-APR00058 (1).webp",
    images: [
      "/projects/1-web-or-mls-APR00058 (1).webp",
      "/projects/2-web-or-mls-APR00067.webp",
      "/projects/4-web-or-mls-APR00061.webp",
      "/projects/5-web-or-mls-APR00004.webp",
      "/projects/7-web-or-mls-APR00007.webp",
      "/projects/10-web-or-mls-APR00013.webp",
      "/projects/11-web-or-mls-APR00043.webp",
      "/projects/12-web-or-mls-APR00016.webp",
      "/projects/17-web-or-mls-APR00037.webp",
      "/projects/18-web-or-mls-APR00049.webp",
      "/projects/20-web-or-mls-APR00055.webp",
    ],
    video: "https://www.youtube.com/watch?v=LG9jy5Nt-So",
    specs: { scope: "Retail Build-Out" },
  },
  {
    title: "Thom Sweeney",
    slug: "thom-sweeney",
    category: "retail",
    neighborhood: "Melrose Place",
    tagline: "A flagship menswear store delivered in a record four weeks.",
    description:
      "Flagship West Coast retail store for renowned British bespoke menswear brand Thom Sweeney, completed in a record-breaking four weeks. Clean lines, natural materials, and carefully considered lighting create a gallery-like atmosphere on Melrose Place.",
    heroImage: "/blog/1-web-or-mls-APR00120.webp",
    images: [
      "/blog/1-web-or-mls-APR00120.webp",
      "/blog/2-web-or-mls-APR00123.webp",
      "/blog/3-web-or-mls-APR00129.webp",
      "/blog/4-web-or-mls-APR00132.webp",
      "/blog/5-web-or-mls-APR00135.webp",
      "/blog/7-web-or-mls-APR00141.webp",
      "/blog/9-web-or-mls-APR00147.webp",
      "/blog/10-web-or-mls-APR00150.webp",
      "/blog/12-web-or-mls-APR00156.webp",
      "/blog/13-web-or-mls-APR00159.webp",
      "/blog/14-web-or-mls-APR00162.webp",
    ],
    specs: { timeline: "4 weeks", scope: "Retail Build-Out" },
  },

  // ── Commercial (Multi-Location) ─────────────────────────────
  {
    title: "Jersey Mike's Subs",
    slug: "jersey-mikes-subs",
    category: "commercial",
    neighborhood: "Southern California",
    tagline: "Eight-plus restaurant builds across Southern California.",
    description:
      "Eight-plus new restaurant builds across Southern California — Los Angeles, Riverside, Yucaipa, Redlands, Barstow, and Moreno Valley. Full-service construction from permitting and site prep through ground-up building and complete brand-spec interiors.",
    heroImage: "/projects/Jersey_Mikes_LA_1-scaled.webp",
    images: [
      "/projects/Jersey_Mikes_LA_1-scaled.webp",
      "/projects/Jersey_Mikes_LA_2-scaled.webp",
      "/projects/Jersey_Mikes_LA_3-scaled.webp",
      "/projects/Jersey_Mikes_LA_4-scaled.webp",
      "/projects/Jersey_Mikes_LA_5-scaled.webp",
      "/projects/Jersey_Mikes_LA_6-scaled.webp",
      "/projects/Jersey_Mikes_LA_7-scaled.webp",
    ],
    specs: { scope: "Multi-Location Build-Out" },
    featured: true,
  },
  {
    title: "85°C Bakery Cafe & Warehouse",
    slug: "85c-bakery-cafe",
    category: "commercial",
    neighborhood: "Buena Park & Multiple Los Angeles Locations",
    tagline: "Nine projects, one client: eight bakery cafes plus the commercial building built to feed all of them.",
    description:
      "econstruct delivered nine distinct builds for 85°C as one program: eight individual bakery cafe locations across the Los Angeles area, each with an in-house bakery producing fresh items hourly, dark wood displays, and commercial baking equipment — and, as the ninth and most complex piece, a dedicated commercial distribution center and corporate office in Buena Park engineered to supply and support every one of those locations. The distribution center was the operational backbone of the entire rollout: a single commercial building handling production, logistics, and administration for the full Los Angeles footprint.",
    heroImage: "/blog/image00409-scaled.webp",
    images: [
      "/blog/image00409-scaled.webp",
      "/blog/image00011-scaled.webp",
      "/blog/image00024-scaled.webp",
      "/blog/image00045-scaled.webp",
      "/blog/image00126-scaled.webp",
      "/blog/image00128-scaled.webp",
      "/blog/image00129-scaled.webp",
      "/blog/image00407-29-scaled.webp",
      "/blog/image00412-scaled.webp",
      "/blog/85c-distribution-11-600x600.jpg",
      "/blog/85c-distribution-12-600x600.jpg",
      "/blog/85c-distribution-13-600x600.jpg",
      "/blog/85c-distribution-14-600x600.jpg",
      "/blog/85c-distribution-15-600x600.jpg",
      "/blog/85c-distribution-16-600x600.jpg",
      "/blog/85c-distribution-6-600x600.jpg",
      "/blog/85c-distribution-8-600x600.jpg",
    ],
    parts: [
      {
        title: "Part 1 — Eight Bakery Cafe Locations",
        description:
          "Eight individual restaurant build-outs across the Los Angeles area for the premium bakery concept. Each location showcases an in-house bakery producing fresh pastries and beverages hourly, dark wood displays, commercial baking equipment, and site-specific design adaptations to fit each property's footprint and shell condition.",
        images: [
          "/blog/image00409-scaled.webp",
          "/blog/image00011-scaled.webp",
          "/blog/image00024-scaled.webp",
          "/blog/image00045-scaled.webp",
          "/blog/image00126-scaled.webp",
          "/blog/image00128-scaled.webp",
          "/blog/image00129-scaled.webp",
          "/blog/image00407-29-scaled.webp",
          "/blog/image00412-scaled.webp",
        ],
      },
      {
        title: "Part 2 — The Distribution Center: One Building Feeding Every LA Location",
        description:
          "The ninth and central piece of the program: a commercial distribution center and corporate office build-out in Buena Park, purpose-built to produce and supply every 85°C bakery cafe across Los Angeles from a single facility. This was the most complex scope in the engagement — production space, logistics flow, and administrative offices delivered as one coordinated commercial build.",
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
        video: "https://www.youtube.com/watch?v=zHbxhNZdRT4",
      },
    ],
    specs: { scope: "9 Builds: 8 Bakery Locations + 1 Distribution Center" },
  },
  {
    title: "Joe & The Juice",
    slug: "joe-and-the-juice",
    category: "commercial",
    neighborhood: "Multiple LA Locations",
    tagline: "Five Scandinavian juice and coffee bars across Southern California.",
    description:
      "Five successful locations across Southern California for the Scandinavian juice and coffee brand. Each build-out features a signature aesthetic — moss walls, brick backsplashes, sleek counters, and durable high-traffic finishes with custom juice stations and coffee bar installations.",
    heroImage: "/projects/JOETHEJUICE_1-scaled.webp",
    images: [
      "/projects/JOETHEJUICE_1-scaled.webp",
      "/projects/JOETHEJUICE_3-scaled.webp",
      "/projects/JOETHEJUICE_3-1-scaled.webp",
      "/projects/JOETHEJUICE_4-scaled.webp",
      "/projects/JOETHEJUICE_5-scaled.webp",
      "/projects/JOETHEJUICE_6-scaled.webp",
      "/projects/JOETHEJUICE_7-scaled.webp",
    ],
    specs: { scope: "Multi-Location Build-Out" },
  },

  // ── Residential ──────────────────────────────────────────────
  {
    title: "Devista Project",
    slug: "devista-project",
    category: "residential",
    neighborhood: "Hollywood Hills",
    tagline: "A 1980s Hollywood Hills home reimagined as a modern open-concept residence.",
    description:
      "Comprehensive renovation of a 1980s Hollywood Hills residence transformed into a modern open-concept home. The project involved removing walls for improved natural light flow, a redesigned chef's kitchen with large island and premium appliances, smart home technology integration, and drought-resistant hillside landscaping.",
    heroImage: "/projects/devista-hero.jpg",
    images: [
      "/projects/devista-hero.jpg",
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
    tagline: "A late-1970s Bell Canyon home transformed into a modern open-concept retreat.",
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
    tagline: "A custom hillside lift engineered for safe access to an unusable lower lot.",
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
    video: "https://www.youtube.com/watch?v=mzZI4WeI2pA",
    specs: { scope: "Hillside Lift Installation" },
  },
  {
    title: "Lawndale Condo",
    slug: "marine-avenue-condo",
    category: "residential",
    neighborhood: "Lawndale",
    tagline: "A coastal condo reconfigured into an open, airy beachside retreat.",
    description:
      "A comprehensive transformation of a 3-bedroom, 3-bathroom coastal condo on Marine Avenue. Reconfigured the floorplan with an open, airy layout for beachside living, including kitchen expansion, spa-inspired bathroom renovation, and a redesigned private balcony with firepit seating area.",
    heroImage: "/projects/marine-ave-hero.jpg",
    images: [
      "/projects/marine-ave-hero.jpg",
      "/projects/Marine_Ave_condo_6.webp",
      "/projects/Marine_Ave_condo_7.webp",
      "/projects/Marine_Ave_condo_12.webp",
      "/projects/20220123_121812-29.webp",
      "/projects/20220123_121937-29.webp",
      "/projects/20220123_121946-29.webp",
      "/projects/20220123_121954-29.webp",
      "/projects/20220123_122005-29.webp",
      "/projects/20220123_122041-29.webp",
      "/projects/20220123_122345-29.webp",
      "/projects/20220123_122417-29.webp",
      "/projects/20220123_122438-29.webp",
      "/projects/20220123_122634-29.webp",
      "/projects/20220123_122645-29.webp",
      "/projects/20220123_122731-29-1.webp",
    ],
    specs: { scope: "Condo Remodel" },
  },
  {
    title: "Mulholland Dr Project",
    slug: "mulholland-drive-residence",
    category: "residential",
    neighborhood: "Mulholland Drive, Los Angeles",
    tagline: "A 1970s hillside home opened up to its panoramic views.",
    description:
      "A 1970s home on Mulholland Drive underwent a comprehensive remodel to modernize the space and enhance its connection to panoramic hillside views. Open-concept design achieved through partition removal, expansive glass walls, wide plank flooring, and coastal-inspired tile — plus a redesigned open kitchen with quartz island, spa-like master suite, resurfaced pool and deck, and an outdoor barbecue kitchen.",
    heroImage: "/projects/Tan_estate_with_tiled_roof_202606192224.jpeg",
    images: [
      "/projects/Tan_estate_with_tiled_roof_202606192224.jpeg",
      "/projects/Tan_mansion_with_glowing_lights_202606192224.jpeg",
      "/projects/Interior_view_grand_foyer_estate_202606192224.jpeg",
      "/projects/Great_room_with_glass_windows_202606192224.jpeg",
      "/projects/Chef's_kitchen_Mediterranean_sty…_202606192224.jpeg",
      "/projects/Primary_bedroom_suite_mansion_wi…_202606192224.jpeg",
      "/projects/Spa_bathroom_with_marble_surfaces_202606192224.jpeg",
      "/projects/Arched_entrance_double_wooden_doors_202606192224.jpeg",
      "/projects/Backyard_infinity_pool_reflectin…_202606192224.jpeg",
      "/projects/Backyard_stone_patio_outdoor_fur…_202606192224.jpeg",
    ],
    specs: { scope: "Full Remodel" },
  },
  {
    title: "Newcomb Road",
    slug: "newcomb-road-residence",
    category: "residential",
    neighborhood: "Newcomb Road, Los Angeles",
    tagline: "A full transformation into a sleek, modern residential oasis.",
    description:
      "A full home transformation into a sleek, modern oasis — fresh exterior paint, new concrete patio, and custom wood fence outside; complete kitchen remodel with white cabinetry, marble countertops and high-end appliances inside; plus a master bath update with a freestanding tub and frameless glass shower, hardwood flooring, and custom built-ins throughout.",
    heroImage: "/projects/newcomb-road-hero.jpg",
    images: [
      "/projects/newcomb-road-hero.jpg",
      "/Untitled-design-2023-10-19T154306.166.webp",
      "/Untitled-design-2023-10-19T154528.592.webp",
      "/Untitled-design-2023-10-19T154958.982.webp",
      "/Untitled-design-2023-10-19T155017.194.webp",
      "/Untitled-design-2023-10-19T155044.095.webp",
      "/Untitled-design-2023-10-19T155100.028.webp",
      "/Untitled-design-2023-10-19T155139.368.webp",
      "/Untitled-design-2023-10-23T105802.767.webp",
      "/Untitled-design-2023-10-23T105827.240.webp",
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
