/**
 * Curated homepage content for the eConstruct Inc. (Indutri-style) homepage.
 * Commercial-forward, homes included. Service/case imagery reuses real
 * econstructinc.com assets via projects.ts and /public.
 */

export interface HomeService {
  title: string;
  description: string;
  image: string;
  /** lucide-react icon name resolved in ServicesIndustri.tsx */
  icon: string;
  href: string;
}

export const homeServices: HomeService[] = [
  {
    title: "Restaurant & Bar Construction",
    description:
      "Full hospitality build-outs — kitchens, hoods, bars and MEP — coordinated to hit your opening day.",
    image: "https://i1.wp.com/econstructinc.com/wp-content/uploads/2023/09/hutchinson11.jpg",
    icon: "UtensilsCrossed",
    href: "/projects",
  },
  {
    title: "Retail Fit-Out",
    description:
      "Storefronts, custom millwork and brand-perfect finishes delivered on tight launch schedules.",
    image: "https://i1.wp.com/econstructinc.com/wp-content/uploads/2023/10/Untitled-design-87.png",
    icon: "ShoppingBag",
    href: "/projects",
  },
  {
    title: "Office & Tenant Improvement",
    description:
      "Office, creative and workplace TI with permit support, MEP coordination and clean turnover.",
    image: "/Photorealistic_cinematic_interior_202604121940.png",
    icon: "Building2",
    href: "/services",
  },
  {
    title: "Food Distribution & Cold Storage",
    description:
      "Distribution centers, cold storage, commissary kitchens, ghost kitchens, food manufacturing — built to code and operational on day one.",
    image: "https://i1.wp.com/econstructinc.com/wp-content/uploads/2023/09/2017-09-02.jpg",
    icon: "Warehouse",
    href: "/food-distribution-construction",
  },
  {
    title: "Custom Homes & ADUs",
    description:
      "Ground-up custom homes, luxury modernizations, additions and accessory dwelling units.",
    image: "/custom_home_service.png",
    icon: "Home",
    href: "/services",
  },
  {
    title: "Architecture & Expediting",
    description:
      "In-house design coordination plus LADBS and LA County entitlement, plan-check and expediting.",
    image: "/01-palisades-modern-glass-v1.png",
    icon: "PencilRuler",
    href: "/services",
  },
];

export interface HomeTestimonial {
  quote: string;
  name: string;
  role: string;
}

/** Verbatim from econstructinc.com — commercial clients first. */
export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      "When the opportunity arose to build our stores in Los Angeles, bringing Frank and Robyn onboard was a no-brainer. They understand retail and they deliver.",
    name: "John McKeon",
    role: "Head of Retail, Rothy's",
  },
  {
    quote:
      "Great company with the highest quality work and professional management. Frank and Robyn are top notch — they make complex restaurant builds look easy.",
    name: "Rick B.",
    role: "Director of Construction, Jersey Mike's",
  },
  {
    quote:
      "I've consistently found them exceptionally professional and knowledgeable. Their organized approach and high ethical standards stand out on every project.",
    name: "Ali H.",
    role: "Architect, Prosper Architects",
  },
  {
    quote:
      "They are true professionals and the results are incredible. Thank you Frank, Robyn, and the entire team for taking such great care of us.",
    name: "Miriam Stanley",
    role: "Homeowner",
  },
  {
    quote:
      "The finish work is top notch and their ability to build on a quick schedule is top shelf. Great people to work with who excel at their jobs.",
    name: "Neil M.",
    role: "Retail Operator",
  },
  {
    quote:
      "econstruct went above and beyond to turn my master into a beautiful new space with a walk-in closet, balcony, and bath. I'd use them again in a heartbeat.",
    name: "Eugene S.",
    role: "Homeowner",
  },
];

export interface HomeAward {
  title: string;
  place: string;
  year: string;
  image: string;
}

export const homeAwards: HomeAward[] = [
  {
    title: "Best Restaurant Contractor",
    place: "Santa Monica, CA",
    year: "2024",
    image: "/award_2024.png",
  },
  {
    title: "Best Restaurant Contractor",
    place: "Glendale, CA",
    year: "2022",
    image: "/award_2022.png",
  },
];
