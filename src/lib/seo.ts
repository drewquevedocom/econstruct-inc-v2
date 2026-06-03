import type { Metadata } from "next";
import { site } from "@/lib/content";

export function absoluteUrl(path = "/") {
  return new URL(path, site.domain).toString();
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.legalName,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl("/assets/logos/econ-lockup-dark.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: [
      "Los Angeles",
      "Beverly Hills",
      "Santa Monica",
      "Brentwood",
      "Pacific Palisades",
      "Calabasas",
      "West Hollywood",
      "Hollywood Hills",
      "San Fernando Valley",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.coordinates.latitude,
      longitude: site.coordinates.longitude,
    },
  };
}
