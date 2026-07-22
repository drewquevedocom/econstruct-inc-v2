export interface RelatedServiceLink {
  title: string;
  href: string;
}

// Keys must match the real `category` values in content/blog frontmatter.
const SERVICE_LINKS: Record<string, RelatedServiceLink[]> = {
  "Food Distribution & Cold Storage": [
    { title: "Food Distribution & Cold Storage Construction", href: "/food-distribution-construction" },
    { title: "Request a Commercial Site Walk", href: "/food-distribution-construction/site-walk" },
  ],
  "Restaurant & Bar": [
    { title: "Restaurant & Bar Construction", href: "/services/restaurant-bar-construction" },
    { title: "Free Consultation", href: "/free-consultation" },
  ],
  "Fire Rebuilds": [
    { title: "Fire Rebuild & Restoration", href: "/services/fire-rebuild" },
    { title: "Free Consultation", href: "/free-consultation" },
  ],
  "Luxury Residential": [
    { title: "Luxury Modernization", href: "/services/luxury-modernization" },
    { title: "Custom Homes & ADUs", href: "/services/custom-homes" },
  ],
  "ADU & New Construction": [
    { title: "ADU Construction", href: "/services/adu-construction" },
    { title: "Custom Homes & ADUs", href: "/services/custom-homes" },
  ],
  "Office & Commercial": [
    { title: "Office & Tenant Improvement", href: "/services/office-tenant-improvement" },
    { title: "Free Consultation", href: "/free-consultation" },
  ],
};

const DEFAULT_LINKS: RelatedServiceLink[] = [
  { title: "Our Services", href: "/services" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "Free Consultation", href: "/free-consultation" },
];

export function getRelatedServiceLinks(category: string): RelatedServiceLink[] {
  return SERVICE_LINKS[category] ?? DEFAULT_LINKS;
}
