export const site = {
  name: "econstruct",
  legalName: "econstruct Inc.",
  domain: "https://www.econstructinc.com",
  title: "Los Angeles General Contractor for Luxury Residential and Commercial Construction",
  description:
    "econstruct is a Los Angeles general contractor specializing in luxury homes, restaurant construction, commercial tenant improvements, retail build-outs, and design-led construction management.",
  phone: "310.740.9999",
  phoneHref: "tel:+13107409999",
  email: "info@econstructinc.com",
  address: {
    street: "25350 Magic Mountain Pkwy, Suite 300",
    city: "Valencia",
    region: "CA",
    postalCode: "91355",
    country: "US",
  },
  license: "CA License #964015",
  coordinates: {
    latitude: 34.4276,
    longitude: -118.5619,
  },
};

export type LinkItem = {
  label: string;
  href: string;
};

export const navLinks: LinkItem[] = [
  { label: "Services", href: "/service/" },
  { label: "Our Work", href: "/our-work/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about-us/" },
  { label: "Contact", href: "/contact/" },
];

export const heroSlides = [
  {
    word: "live",
    image: "/assets/photography/hero-live.png",
    alt: "Luxury hillside residence built by econstruct in Los Angeles",
  },
  {
    word: "work",
    image: "/assets/photography/hero-work.png",
    alt: "Modern office tenant improvement by econstruct",
  },
  {
    word: "eat",
    image: "/assets/photography/hero-eat.png",
    alt: "Restaurant build-out by econstruct in Los Angeles",
  },
  {
    word: "shop",
    image: "/assets/photography/hero-shop.png",
    alt: "Retail fit-out by econstruct in Los Angeles",
  },
];

export const brandStats = [
  { value: "639", label: "Projects delivered" },
  { value: "50+", label: "Combined years of principal experience" },
  { value: "2011", label: "Operating in Los Angeles under the econstruct name" },
  { value: "24 hrs", label: "Average response target for qualified inquiries" },
];

export type ServiceCard = {
  slug: string;
  name: string;
  short: string;
  audience: string;
  highlight: string;
};

export const coreServices: ServiceCard[] = [
  {
    slug: "commercial-construction-los-angeles",
    name: "Commercial Construction",
    short: "Ground-up and tenant improvement work for offices, retail, hospitality, and specialty commercial spaces.",
    audience: "Operators, developers, landlords",
    highlight: "Permitting, coordination, schedule control",
  },
  {
    slug: "los-angeles-residential-construction-services",
    name: "Luxury Residential Construction",
    short: "Custom homes, hillside builds, additions, remodels, and high-end residential execution across affluent LA neighborhoods.",
    audience: "Homeowners, architects, family offices",
    highlight: "Design-sensitive build execution",
  },
  {
    slug: "restaurant-construction-services",
    name: "Restaurant Construction",
    short: "Restaurant and bar build-outs with MEP coordination, inspection management, and opening-day readiness.",
    audience: "Hospitality groups, chefs, franchise operators",
    highlight: "Kitchen-heavy construction expertise",
  },
  {
    slug: "retail-construction-los-angeles",
    name: "Retail Construction",
    short: "Retail store build-outs that protect brand standards and launch schedules in competitive Los Angeles submarkets.",
    audience: "Brand teams, retail real estate, rollout managers",
    highlight: "Finish quality and fixture coordination",
  },
  {
    slug: "turn-key-build-outs-la",
    name: "Turn-Key Build Outs",
    short: "Single-team project delivery from preconstruction through turnover for owners who need fewer handoff points.",
    audience: "Founders, owner-operators, small portfolios",
    highlight: "One accountable lead",
  },
  {
    slug: "architectural-design",
    name: "Architectural Design",
    short: "Partner-driven architectural design support that aligns the vision, approvals, and build strategy early.",
    audience: "Owners, developers, design-led teams",
    highlight: "Concept through permit support",
  },
];

export type ContentPage = {
  slug: string;
  kind: "service" | "location" | "post" | "case-study";
  title: string;
  metaTitle: string;
  description: string;
  kicker: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  bodyTitle: string;
  bullets: string[];
  process?: string[];
  faq?: { question: string; answer: string }[];
  proof?: { label: string; value: string }[];
  related?: string[];
};

const serviceFaq = [
  {
    question: "How does econstruct keep complex projects on track?",
    answer:
      "The team fronts the project with preconstruction planning, scope alignment, permit coordination, and active trade management in the field so risk is handled early instead of during punch.",
  },
  {
    question: "Do you work with outside architects and designers?",
    answer:
      "Yes. econstruct can lead as a general contractor, support a design-build team, or integrate with an outside architect, engineer, landlord team, or owner's representative.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Primary focus is Los Angeles and nearby affluent submarkets including Beverly Hills, Santa Monica, Brentwood, Pacific Palisades, Calabasas, West Hollywood, Hollywood Hills, and the San Fernando Valley.",
  },
];

export const contentPages: ContentPage[] = [
  {
    slug: "architectural-design",
    kind: "service",
    title: "Architectural Design Services in Los Angeles",
    metaTitle: "Architectural Design Services Los Angeles | econstruct",
    description:
      "Architectural design support for luxury residential and commercial projects in Los Angeles, aligned to feasibility, entitlement, and buildability.",
    kicker: "Architectural Design",
    heroImage: "/assets/photography/jobsite-hero.jpg",
    heroAlt: "Construction planning and architecture coordination in Los Angeles",
    intro:
      "Design quality matters early. econstruct works with owners and design partners to turn ambitious concepts into permit-ready, buildable plans that reflect budget, code, and schedule realities in Los Angeles.",
    bodyTitle: "Architecture that respects the realities of construction",
    bullets: [
      "Concept development aligned to site, neighborhood, and city review conditions",
      "Architect and consultant coordination from schematic phase through permit",
      "Value engineering that protects the design intent instead of flattening it",
      "Builder-informed detailing to reduce field changes and schedule slip",
    ],
    process: [
      "Project discovery, feasibility review, and initial programming",
      "Design coordination with architect, engineers, and consultants",
      "Permit and entitlement support where required",
      "Construction transition with scope clarity and sequencing",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Best fit", value: "Owners needing design and execution alignment" },
      { label: "Project types", value: "Luxury residential, restaurant, retail, office" },
    ],
    related: ["commercial-construction-los-angeles", "los-angeles-residential-construction-services"],
  },
  {
    slug: "commercial-construction-los-angeles",
    kind: "service",
    title: "Commercial Construction Company in Los Angeles",
    metaTitle: "Commercial Construction Los Angeles | Tenant Improvement Contractors | econstruct",
    description:
      "Los Angeles commercial construction for office, hospitality, retail, and specialty environments with strong preconstruction, field coordination, and finish quality.",
    kicker: "Commercial Construction",
    heroImage: "/assets/photography/commercial-ti.png",
    heroAlt: "Commercial tenant improvement work completed by econstruct in Los Angeles",
    intro:
      "For owners and operators, commercial construction is not just about square footage. It is about opening on time, coordinating multiple stakeholders, and protecting the details clients actually notice. econstruct builds commercial environments with that pressure in mind.",
    bodyTitle: "A Los Angeles contractor built for schedule-sensitive commercial work",
    bullets: [
      "Office and retail tenant improvements with landlord and property management coordination",
      "Hospitality, restaurant, and specialty commercial environments with complex MEP scopes",
      "Preconstruction planning, schedule modeling, and trade sequencing",
      "Permit, inspection, and closeout management across Los Angeles jurisdictions",
    ],
    process: [
      "Preconstruction planning with budget and scope alignment",
      "City submission support, permit tracking, and landlord coordination",
      "Trade buyout, site management, and QA/QC execution",
      "Closeout, punch, turnover, and opening-readiness review",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Typical sectors", value: "Office, retail, hospitality, food production" },
      { label: "Service area", value: "Los Angeles, Santa Monica, Beverly Hills, West Hollywood" },
    ],
    related: ["restaurant-construction-services", "retail-construction-los-angeles", "turn-key-build-outs-la"],
  },
  {
    slug: "los-angeles-residential-construction-services",
    kind: "service",
    title: "Luxury Residential Construction in Los Angeles",
    metaTitle: "Luxury Residential Construction Los Angeles | Custom Home Builders | econstruct",
    description:
      "Luxury residential construction for custom homes, hillside builds, additions, and major remodels across Los Angeles and its high-end neighborhoods.",
    kicker: "Residential Construction",
    heroImage: "/assets/photography/hero-live.png",
    heroAlt: "Luxury residential construction by econstruct in Los Angeles",
    intro:
      "High-end residential work demands a contractor who can protect design intent while managing field realities, neighbors, inspectors, consultants, and schedule pressure. econstruct delivers that balance for Los Angeles homeowners and project teams.",
    bodyTitle: "Custom homes and remodels built with discipline",
    bullets: [
      "Ground-up custom homes and estate-level residential projects",
      "Hillside construction, additions, structural remodels, and major interior transformations",
      "Coordination with architects, interior designers, landscape teams, and consultants",
      "Field quality control suited to premium materials and finish standards",
    ],
    process: [
      "Discovery, site realities, and design-team alignment",
      "Budgeting, sequencing, consultant coordination, and municipal review",
      "Construction execution with owner communication and milestone tracking",
      "Final detailing, commissioning, and turnover",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Neighborhood focus", value: "Beverly Hills, Brentwood, Pacific Palisades, Calabasas" },
      { label: "Project profile", value: "High-end custom homes, remodels, additions" },
    ],
    related: ["architectural-design", "beverly-hills-luxury-home-builders", "hollywood-hills-home-remodeling"],
  },
  {
    slug: "restaurant-construction-services",
    kind: "service",
    title: "Restaurant Construction Services in Los Angeles",
    metaTitle: "Restaurant Construction Services Los Angeles | econstruct",
    description:
      "Restaurant construction in Los Angeles for full-service restaurants, bars, cafes, and hospitality concepts that need tight field execution and opening-day readiness.",
    kicker: "Restaurant Construction",
    heroImage: "/assets/photography/hero-eat.png",
    heroAlt: "Restaurant construction and hospitality buildout by econstruct",
    intro:
      "Hospitality projects carry unusual pressure: kitchen infrastructure, health approvals, landlord expectations, and a narrow opening window. econstruct is built for that complexity and has deep experience turning hospitality concepts into operating spaces.",
    bodyTitle: "Hospitality construction that understands operations",
    bullets: [
      "Restaurant, bar, cafe, ghost kitchen, and food-service environments",
      "Back-of-house coordination with kitchen equipment, hood, and MEP scope",
      "Brand-sensitive front-of-house execution and finish control",
      "Inspection readiness and opening-day delivery planning",
    ],
    process: [
      "Preconstruction review with concept, landlord, and consultant teams",
      "Permit and health department coordination as applicable",
      "Trade execution with active schedule and quality control",
      "Commissioning, punch, and turnover for operations",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Known for", value: "Restaurant and bar build-outs across Los Angeles" },
      { label: "Best markets", value: "Santa Monica, West Hollywood, Glendale, Silver Lake" },
    ],
    related: ["case-study-800-woodfired-kitchen", "santa-monica-restaurant-construction", "turn-key-build-outs-la"],
  },
  {
    slug: "retail-construction-los-angeles",
    kind: "service",
    title: "Retail Construction in Los Angeles",
    metaTitle: "Retail Construction Los Angeles | Retail Build-Outs | econstruct",
    description:
      "Los Angeles retail construction and fit-outs for brands that need launch discipline, fixture coordination, and polished finish execution.",
    kicker: "Retail Construction",
    heroImage: "/assets/photography/hero-shop.png",
    heroAlt: "Retail fit-out by econstruct in Los Angeles",
    intro:
      "Retail construction succeeds when brand standards, fixture packages, and launch deadlines all stay intact. econstruct manages the details that keep store openings from slipping.",
    bodyTitle: "Build-outs that protect the brand as much as the schedule",
    bullets: [
      "Flagship stores, boutiques, national rollouts, and experiential retail spaces",
      "Coordination with landlords, mall management, and fixture vendors",
      "Finish-driven QA for merchandising, millwork, lighting, and customer flow",
      "Construction sequencing aligned to merchandising and install windows",
    ],
    process: [
      "Scope and landlord package review",
      "Budget, schedule, fixture, and long-lead coordination",
      "Build-out execution with close finish tracking",
      "Turnover timed around merchandising and launch",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Best fit", value: "Design-led retail and brand environments" },
      { label: "Active markets", value: "West Hollywood, Melrose, Santa Monica, Beverly Hills" },
    ],
    related: ["commercial-construction-los-angeles", "turn-key-build-outs-la"],
  },
  {
    slug: "turn-key-build-outs-la",
    kind: "service",
    title: "Turn-Key Build Outs in Los Angeles",
    metaTitle: "Turn-Key Build Outs Los Angeles | econstruct",
    description:
      "End-to-end turn-key build outs in Los Angeles for owners who want one team accountable for planning, permitting, construction, and turnover.",
    kicker: "Turn-Key Build Outs",
    heroImage: "/assets/photography/bar-construction.png",
    heroAlt: "Turn-key construction buildout managed by econstruct",
    intro:
      "When ownership wants fewer handoffs and stronger accountability, turn-key delivery is the right model. econstruct coordinates the process from early planning through turnover so critical details do not fall between firms.",
    bodyTitle: "One accountable team from early planning to final turnover",
    bullets: [
      "Preconstruction, consultant coordination, permitting, and build execution",
      "Single point of contact for schedule, scope, and progress reporting",
      "Useful for restaurant, retail, office, and select residential transformations",
      "Cleaner decision-making for owners without in-house construction staff",
    ],
    process: [
      "Discovery and project definition",
      "Consultant alignment, permit prep, and schedule formation",
      "Construction management and quality control",
      "Closeout, turnover, and operational readiness",
    ],
    faq: serviceFaq,
    proof: [
      { label: "Ideal client", value: "Owners who want fewer handoffs" },
      { label: "Typical use", value: "Restaurant, office, retail, hospitality projects" },
    ],
    related: ["commercial-construction-los-angeles", "restaurant-construction-services"],
  },
  {
    slug: "beverly-hills-luxury-home-builders",
    kind: "location",
    title: "Luxury Home Builders in Beverly Hills",
    metaTitle: "Beverly Hills Luxury Home Builders | High-End Residential Construction | econstruct",
    description:
      "High-end residential construction for Beverly Hills homeowners seeking a disciplined general contractor for custom homes, additions, and premium remodels.",
    kicker: "Beverly Hills",
    heroImage: "/assets/photography/hero-live.png",
    heroAlt: "Luxury home construction for Beverly Hills homeowners",
    intro:
      "Beverly Hills projects have little tolerance for sloppy coordination or average finish work. econstruct approaches these builds with a process that protects design intent, timeline, and discretion.",
    bodyTitle: "A better fit for design-sensitive residential work in Beverly Hills",
    bullets: [
      "Custom homes, estate remodels, and additions with high finish expectations",
      "Coordination with architects, interior designers, and specialty trades",
      "Neighbor-aware site management and clean owner communication",
      "Suitable for clients balancing aesthetics, schedule, and long-term property value",
    ],
    faq: serviceFaq,
    related: ["los-angeles-residential-construction-services", "architectural-design"],
  },
  {
    slug: "santa-monica-restaurant-construction",
    kind: "location",
    title: "Restaurant Construction in Santa Monica",
    metaTitle: "Santa Monica Restaurant Construction | Hospitality General Contractor | econstruct",
    description:
      "Restaurant construction in Santa Monica for hospitality groups that need strong coordination, polished finishes, and dependable launch timing.",
    kicker: "Santa Monica",
    heroImage: "/assets/photography/hero-eat.png",
    heroAlt: "Santa Monica restaurant construction by econstruct",
    intro:
      "Santa Monica hospitality projects demand operational awareness as much as construction skill. econstruct handles the field complexity that can derail restaurant openings if left unmanaged.",
    bodyTitle: "Restaurant build-outs that stay aligned with hospitality realities",
    bullets: [
      "Dining rooms, bars, kitchen build-outs, and guest-facing finish work",
      "Useful for chef-driven concepts, neighborhood restaurants, and growth-stage groups",
      "Attention to health, MEP, and opening-readiness issues that affect launch",
      "Strong fit for projects where aesthetic standards are part of the business model",
    ],
    faq: serviceFaq,
    related: ["restaurant-construction-services", "case-study-800-woodfired-kitchen"],
  },
  {
    slug: "brentwood-home-additions-and-remodels",
    kind: "location",
    title: "Brentwood Home Additions and Remodels",
    metaTitle: "Brentwood Home Additions and Remodels | econstruct",
    description:
      "Residential additions and remodels in Brentwood for homeowners who need premium construction execution and clear coordination.",
    kicker: "Brentwood",
    heroImage: "/assets/photography/project-residential.jpg",
    heroAlt: "Residential remodeling project for Brentwood homeowner",
    intro:
      "Brentwood homeowners often need a contractor who can operate inside an existing high-value property with discipline, respect for design, and minimal drama. That is the position econstruct is built to fill.",
    bodyTitle: "Thoughtful execution inside high-value homes",
    bullets: [
      "Additions, major remodels, and layout transformations",
      "Clean coordination with residential design teams and consultants",
      "Useful for owners protecting both livability and long-term resale value",
      "Detailed scheduling and quality control from demolition through finish",
    ],
    faq: serviceFaq,
    related: ["los-angeles-residential-construction-services"],
  },
  {
    slug: "calabasas-custom-home-construction",
    kind: "location",
    title: "Custom Home Construction in Calabasas",
    metaTitle: "Calabasas Custom Home Construction | Luxury Builder | econstruct",
    description:
      "Custom home construction in Calabasas for owners who want a Los Angeles-area builder capable of premium design execution and organized delivery.",
    kicker: "Calabasas",
    heroImage: "/assets/photography/hero-live.png",
    heroAlt: "Custom home construction in Calabasas",
    intro:
      "Calabasas clients usually care about more than just build completion. They care about detail, team quality, and whether the contractor can support a premium design outcome without creating operational noise.",
    bodyTitle: "A disciplined custom home partner for Calabasas projects",
    bullets: [
      "Ground-up homes and large-scale residential transformations",
      "Design-team collaboration with strong scope and schedule management",
      "Quality control suited to custom millwork, stone, glazing, and specialty finishes",
      "High-touch reporting and owner communication",
    ],
    faq: serviceFaq,
    related: ["los-angeles-residential-construction-services", "architectural-design"],
  },
  {
    slug: "hollywood-hills-home-remodeling",
    kind: "location",
    title: "Home Remodeling in Hollywood Hills",
    metaTitle: "Hollywood Hills Home Remodeling | High-End Residential Contractor | econstruct",
    description:
      "High-end home remodeling in Hollywood Hills for owners updating dated layouts, improving flow, and building premium interiors.",
    kicker: "Hollywood Hills",
    heroImage: "/assets/photography/project-residential.jpg",
    heroAlt: "Hollywood Hills residential remodel project",
    intro:
      "Hollywood Hills remodels often involve structural realities, access constraints, and ambitious aesthetic goals all at once. econstruct helps owners move those projects without losing design discipline.",
    bodyTitle: "Remodeling with design fluency and field control",
    bullets: [
      "Whole-home remodels, reconfigurations, additions, and premium interiors",
      "Useful for owners refreshing outdated homes for modern living",
      "Coordination across consultants, trades, and permit requirements",
      "Finish-sensitive execution from rough work through final detailing",
    ],
    faq: serviceFaq,
    related: ["los-angeles-residential-construction-services", "case-study-devista-project"],
  },
  {
    slug: "newcomb-road-remodel-residential-construction-success-story",
    kind: "post",
    title: "Newcomb Road Remodel: A Residential Construction Success Story",
    metaTitle: "Newcomb Road Remodel Case Story | econstruct Blog",
    description:
      "How econstruct approached a residential remodel with tighter planning, clear communication, and a premium finished result.",
    kicker: "Residential Insights",
    heroImage: "/assets/photography/project-residential.jpg",
    heroAlt: "Completed residential remodel featured by econstruct",
    intro:
      "Strong residential work is rarely about spectacle. It is about how well the contractor manages design intent, sequencing, and the dozens of decisions that shape the finished experience of a home.",
    bodyTitle: "What a successful remodel actually depends on",
    bullets: [
      "Early alignment between owner goals, budget pressure, and design scope",
      "Trade sequencing that protects both schedule and finish quality",
      "Detailed communication to avoid late surprises",
      "A field standard high enough for premium residential expectations",
    ],
    related: ["los-angeles-residential-construction-services", "hollywood-hills-home-remodeling"],
  },
  {
    slug: "are-tiny-homes-legal-in-los-angeles-everything-you-need-to-know-in-2024",
    kind: "post",
    title: "Are Tiny Homes Legal in Los Angeles?",
    metaTitle: "Are Tiny Homes Legal in Los Angeles? | econstruct Blog",
    description:
      "A plain-language overview of how Los Angeles homeowners should think about tiny homes, code, approvals, and the difference between trends and buildable reality.",
    kicker: "ADU and Code",
    heroImage: "/assets/photography/project-adu.jpg",
    heroAlt: "ADU and compact residential construction in Los Angeles",
    intro:
      "Search demand for tiny homes often hides a more practical question: what can actually be designed, permitted, and built on a Los Angeles property. That distinction matters before money gets committed.",
    bodyTitle: "The practical way to evaluate tiny-home demand",
    bullets: [
      "Separate trend language from what local agencies actually review",
      "Understand access, utility, size, and site constraints early",
      "Use a contractor and design team who can vet feasibility before optimism turns expensive",
      "Frame the project around use case, not internet terminology",
    ],
    related: ["los-angeles-residential-construction-services", "architectural-design"],
  },
  {
    slug: "how-much-does-it-cost-to-build-an-adu-in-los-angeles-your-burning-questions-answered",
    kind: "post",
    title: "How Much Does It Cost to Build an ADU in Los Angeles?",
    metaTitle: "ADU Cost in Los Angeles | econstruct Blog",
    description:
      "The variables that actually drive ADU cost in Los Angeles, from site conditions and utility work to finishes, approvals, and execution risk.",
    kicker: "ADU Cost",
    heroImage: "/assets/photography/project-adu.jpg",
    heroAlt: "ADU construction cost planning in Los Angeles",
    intro:
      "There is no honest single-number answer for ADU cost. The useful answer is what factors move the budget, which risks can be reduced early, and how owners avoid comparing real projects to misleading internet averages.",
    bodyTitle: "Cost clarity starts with scope clarity",
    bullets: [
      "Site conditions, utility work, access, and jurisdiction all move price",
      "Finish level and structural complexity matter more than headline averages",
      "Owners should compare proposals by scope quality, not just low bid totals",
      "Better preconstruction work is usually cheaper than late-stage rework",
    ],
    related: ["los-angeles-residential-construction-services"],
  },
  {
    slug: "top-residential-contractors-in-los-angeles-the-ultimate-list",
    kind: "post",
    title: "Top Residential Contractors in Los Angeles",
    metaTitle: "Top Residential Contractors in Los Angeles | econstruct Blog",
    description:
      "What sophisticated homeowners should actually evaluate when choosing a residential contractor in Los Angeles.",
    kicker: "Homeowner Guide",
    heroImage: "/assets/photography/hero-live.png",
    heroAlt: "Luxury residential contractor in Los Angeles",
    intro:
      "The best contractor is not the one with the loudest branding. It is the one whose process, communication style, and execution quality match the complexity of the home being built or renovated.",
    bodyTitle: "How serious homeowners should vet a contractor",
    bullets: [
      "Look for evidence of process, not just pretty after photos",
      "Ask how field quality is managed and who leads day-to-day decisions",
      "Evaluate communication, budgeting discipline, and consultant coordination",
      "Choose a builder whose work aligns with the level of finish you expect",
    ],
    related: ["los-angeles-residential-construction-services", "beverly-hills-luxury-home-builders"],
  },
  {
    slug: "case-study-800-woodfired-kitchen",
    kind: "case-study",
    title: "Case Study: 800 Degrees Woodfired Kitchen",
    metaTitle: "800 Degrees Woodfired Kitchen Case Study | econstruct",
    description:
      "A hospitality case study showing how econstruct executed a restaurant environment with operational complexity and brand-sensitive finish standards.",
    kicker: "Case Study",
    heroImage: "/assets/photography/project-bar.jpg",
    heroAlt: "800 Degrees Woodfired Kitchen project by econstruct",
    intro:
      "This project reflects the kind of hospitality work where econstruct is strongest: design-sensitive, infrastructure-heavy, and deadline conscious. The challenge was balancing brand experience with the realities of restaurant operations and field coordination.",
    bodyTitle: "Operational detail matters as much as visual finish",
    bullets: [
      "Complex hospitality work with guest-facing design expectations",
      "Coordination of kitchen, front-of-house, and schedule-critical scopes",
      "Execution standard suited to a visible, brand-defining location",
      "Useful proof point for restaurant groups evaluating contractor fit",
    ],
    related: ["restaurant-construction-services", "santa-monica-restaurant-construction"],
  },
  {
    slug: "case-study-devista-project",
    kind: "case-study",
    title: "Case Study: Devista Residential Transformation",
    metaTitle: "Devista Residential Transformation Case Study | econstruct",
    description:
      "A residential case study showing how econstruct approached a dated Hollywood Hills property and repositioned it for modern family living.",
    kicker: "Case Study",
    heroImage: "/assets/photography/project-residential.jpg",
    heroAlt: "Devista residential transformation case study",
    intro:
      "The Devista project shows how a contractor can do more than build. It can help clarify what the home needs to become, then coordinate the path to get there with less friction for the owner.",
    bodyTitle: "Residential transformation requires both vision and field discipline",
    bullets: [
      "Older home repositioned for a modern family lifestyle",
      "Heavy coordination across structure, flow, and updated finish direction",
      "A useful model for owners planning major residential change, not surface-only renovation",
      "Proof that disciplined execution protects the value of ambitious design decisions",
    ],
    related: ["los-angeles-residential-construction-services", "hollywood-hills-home-remodeling"],
  },
];

export const testimonials = [
  {
    quote:
      "When we had the opportunity to build in Los Angeles again, bringing econstruct back in was an easy decision. The team understands what retail brands need from a contractor.",
    name: "John McKeon",
    role: "Head of Retail Construction, Rothy's",
  },
  {
    quote:
      "They brought calm, clarity, and real construction depth to a complicated residential build. That combination is rare.",
    name: "Miriam Stanley",
    role: "Homeowner",
  },
  {
    quote:
      "Their communication stayed sharp from planning through closeout. We always knew where the project stood and what decisions mattered next.",
    name: "Hospitality Client",
    role: "Restaurant Operator",
  },
];

export const featuredProjects = [
  {
    title: "800 Degrees Woodfired Kitchen",
    slug: "case-study-800-woodfired-kitchen",
    tag: "Restaurant",
    location: "Los Angeles, CA",
    image: "/assets/photography/project-bar.jpg",
    alt: "800 Degrees Woodfired Kitchen by econstruct",
  },
  {
    title: "Devista Residential Transformation",
    slug: "case-study-devista-project",
    tag: "Residential",
    location: "Hollywood Hills, CA",
    image: "/assets/photography/project-residential.jpg",
    alt: "Residential transformation project by econstruct",
  },
  {
    title: "Rothy's Melrose Rollout",
    slug: "retail-construction-los-angeles",
    tag: "Retail",
    location: "West Hollywood, CA",
    image: "/assets/photography/hero-office.jpg",
    alt: "Retail rollout by econstruct",
  },
  {
    title: "Commercial TI Program",
    slug: "commercial-construction-los-angeles",
    tag: "Office TI",
    location: "Los Angeles, CA",
    image: "/assets/photography/commercial-ti.png",
    alt: "Commercial TI project by econstruct",
  },
];

export const blogPreviewSlugs = contentPages
  .filter((page) => page.kind === "post")
  .map((page) => page.slug);

export const contentMap = new Map(contentPages.map((page) => [page.slug, page]));

export function getPageBySlug(slug: string) {
  return contentMap.get(slug);
}

export function getRelatedPages(slugs: string[] = []) {
  return slugs
    .map((slug) => contentMap.get(slug))
    .filter((page): page is ContentPage => Boolean(page));
}

export function getArchive(kind: ContentPage["kind"]) {
  return contentPages.filter((page) => page.kind === kind);
}
