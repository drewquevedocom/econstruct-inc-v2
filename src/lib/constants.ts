export const SITE_URL = "https://econstructinc.com";

export const COMPANY = {
  name: "econstruct",
  shortName: "econstruct",
  tagline: "Los Angeles Luxury Home Builder and General Contractor",
  phone: {
    primary: "310.740.9999",
    primaryHref: "+13107409999",
    secondary: "310.740.9999",
    secondaryHref: "+13107409999",
    display: "310.740.9999",
    displaySecondary: "310.740.9999",
  },
  email: "info@econstructinc.com",
  address: {
    street: "25350 Magic Mountain Pkwy",
    suite: "Suite 300",
    city: "Valencia",
    state: "CA",
    zip: "91355",
    full: "25350 Magic Mountain Pkwy, Suite 300, Valencia, CA 91355",
  },
  license: {
    number: "964015",
    display: "CA Lic #964015",
    verificationUrl: "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  },
  social: {
    instagram: "https://instagram.com/econstructhomes",
    linkedin: "https://linkedin.com/company/econstruct-homes",
    houzz: "https://houzz.com/professionals/econstruct-homes",
    youtube: "https://youtube.com/@econstructhomes",
  },
  team: {
    owner: { name: "Frank Neimroozi", title: "Owner & President", email: "frank@econstructinc.com" },
    vpAdmin: { name: "Katie Krueger", title: "VP Administration", email: "katie@econstructinc.com" },
    operations: { name: "Robyn Ellis", title: "Operations", email: "robyn@econstructinc.com" },
  },
  credentials: [
    "CA License #964015",
    "Building LA Since 2001",
    "econstruct Since 2011",
    "NAHB Member",
    "USGBC Member",
  ],
} as const;

/**
 * econstruct Inc. (commercial brand -- econstructinc.com) contact + headline
 * stats. Kept separate from COMPANY so existing residential pages are untouched.
 */
export const ECONSTRUCT_INC = {
  name: "econstruct",
  legalName: "econstruct, Inc.",
  tagline: "Constructing Exceptional Spaces to Live, Work, Shop & Eat",
  phone: {
    primary: "310.740.9999",
    primaryHref: "+13107409999",
    secondary: "310.740.9999",
    secondaryHref: "+13107409999",
  },
  email: "info@econstructinc.com",
  address: {
    line: "25350 Magic Mountain Pkwy,",
    line2: "Suite 300,",
    line3: "Valencia, CA 91355",
    city: "Valencia",
    state: "CA",
    zip: "91355",
    full: "25350 Magic Mountain Pkwy, Suite 300, Valencia, CA 91355",
  },
  stats: {
    projects: 634,
    years: 51,
    license: "CA Lic #964015",
  },
  social: {
    facebook: "https://facebook.com/econstructinc",
    instagram: "https://instagram.com/econstructinc",
    linkedin: "https://linkedin.com/company/econstruct-inc",
    youtube: "https://youtube.com/@econstructinc",
    twitter: "https://x.com/econstructinc",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Luxury Home Building", href: "/services/luxury-home-builder-los-angeles" },
      { label: "Fire Rebuild", href: "/services/fire-rebuild-contractor-los-angeles" },
      { label: "Custom Home Construction", href: "/services/custom-home-construction-los-angeles" },
      { label: "Home Additions", href: "/services/home-additions-los-angeles" },
      { label: "Home Automation", href: "/services/home-automation-los-angeles" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
