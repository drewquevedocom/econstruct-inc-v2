import type { Metadata } from "next";
import IndutriHero from "@/components/home/IndutriHero";
import QuoteStrip from "@/components/home/QuoteStrip";
import SolutionAbout from "@/components/home/SolutionAbout";
import ServicesIndustri from "@/components/home/ServicesIndustri";
import FoodDistributionSpotlight from "@/components/home/FoodDistributionSpotlight";
import StatsFunFacts from "@/components/home/StatsFunFacts";
import IndustriesRelationships from "@/components/home/IndustriesRelationships";
import CaseStudies from "@/components/home/CaseStudies";
import TestimonialsIndutri from "@/components/home/TestimonialsIndutri";
import ClientLogos from "@/components/home/ClientLogos";
import NewsBlog from "@/components/home/NewsBlog";
import MapSection from "@/components/home/MapSection";
import { generatePageMetadata } from "@/lib/metadata";
import { generateWebPageSchema } from "@/lib/schema";

export const dynamic = "force-static";

const homeTitle =
  "Commercial & Residential General Contractor Los Angeles | econstruct";
const homeDescription =
  "econstruct builds restaurants, retail, offices, tenant improvements, and luxury homes across Los Angeles. 634 projects, 51 years of combined experience. California License #964015.";

export const metadata: Metadata = generatePageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "",
  image: "/og-homepage.jpg",
  imageAlt: "econstruct commercial and residential construction in Los Angeles",
  openGraphTitle: homeTitle,
  twitterTitle: homeTitle,
});

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    name: homeTitle,
    description: homeDescription,
    path: "",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <IndutriHero />
      <QuoteStrip />
      <SolutionAbout />
      <ServicesIndustri />
      <FoodDistributionSpotlight />
      <StatsFunFacts />
      <IndustriesRelationships />
      <CaseStudies />
      <TestimonialsIndutri />
      <ClientLogos />
      <NewsBlog />
      <MapSection />
    </>
  );
}
