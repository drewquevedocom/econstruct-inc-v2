import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SiteWalkCTA from "@/components/SiteWalkCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Request a Site Walk | Food Distribution & Cold Storage Construction | econstruct",
  description:
    "Request a professional site walk for your food distribution, cold storage, or commercial kitchen facility. Tell us the facility type, size, and timing so our team arrives prepared.",
  path: "/food-distribution-construction/site-walk",
});

export default function SiteWalkPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://econstructinc.com" },
    { name: "Food Distribution & Commercial Kitchen", url: "https://econstructinc.com/food-distribution-construction" },
    { name: "Request a Site Walk", url: "https://econstructinc.com/food-distribution-construction/site-walk" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="Request a Site Walk"
        subtitle="Cold storage, food distribution, manufacturing, or commissary — tell us about your facility and we'll schedule a walk-through with the right team."
        breadcrumbs={[
          { label: "Food Distribution & Commercial Kitchen", href: "/food-distribution-construction" },
          { label: "Request a Site Walk" },
        ]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <SiteWalkCTA leadSource="site_walk_request" />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
