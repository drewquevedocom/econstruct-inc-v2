import type { Metadata } from "next";
import { Barlow_Condensed, Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/content";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const bodyFont = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: site.domain,
  },
  keywords: [
    "Los Angeles general contractor",
    "luxury home builder Los Angeles",
    "restaurant construction Los Angeles",
    "commercial construction Los Angeles",
    "retail construction Los Angeles",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <JsonLd data={localBusinessSchema()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
