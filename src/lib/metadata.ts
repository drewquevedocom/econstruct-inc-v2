import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "@/lib/constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  openGraphTitle?: string;
  twitterTitle?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  openGraphTitle,
  twitterTitle,
  noIndex,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || "/og-homepage.jpg";
  const ogTitle = openGraphTitle || title;
  const xTitle = twitterTitle || ogTitle;
  const ogImageAlt = imageAlt || `${COMPANY.name} luxury residential construction in Los Angeles`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      siteName: COMPANY.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: xTitle,
      description,
      images: [ogImage],
    },
    other: {
      "geo.region": "US-CA",
      "geo.placename": "Los Angeles, California",
      "geo.position": "34.0522;-118.2437",
      ICBM: "34.0522, -118.2437",
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

