import type { Metadata } from "next";
import {
  ContactBand,
  HomeHero,
  LogoBar,
  ProofSection,
  ServiceGrid,
  TestimonialRail,
} from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Commercial & Luxury Residential General Contractor Los Angeles",
  description:
    "Commercial and luxury residential general contractor in Los Angeles delivering premium construction, tighter planning, and stronger finish standards.",
  path: "/",
});

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoBar />
      <ServiceGrid />
      <ProofSection />
      <TestimonialRail />
      <ContactBand />
    </>
  );
}
