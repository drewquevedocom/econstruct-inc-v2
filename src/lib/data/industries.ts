export interface Industry {
  name: string;
  blurb: string;
  /** Confidence/strength bar value used in the "Relationships" section. */
  strength: number;
}

/**
 * The markets econstruct builds for — mirrors the econstructinc.com footer
 * "Industries" list. Commercial-forward, homes included.
 */
export const industries: Industry[] = [
  {
    name: "Restaurant & Bar",
    blurb: "Hospitality build-outs, commercial kitchens, MEP, and opening-day coordination.",
    strength: 96,
  },
  {
    name: "Retail Fit-Out",
    blurb: "Storefronts, fixtures, and finish work tuned to launch schedules.",
    strength: 92,
  },
  {
    name: "Office Tenant Improvement",
    blurb: "Office, creative, and workplace TI with full permit support.",
    strength: 88,
  },
  {
    name: "Luxury Homes & ADU",
    blurb: "Custom homes, modernizations, additions, and accessory dwelling units.",
    strength: 90,
  },
  {
    name: "Food Manufacturing",
    blurb: "Food plants, ghost kitchens, and commissaries built to health-code standards.",
    strength: 84,
  },
];
