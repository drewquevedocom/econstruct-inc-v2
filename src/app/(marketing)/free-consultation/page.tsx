import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Free Construction Consultation | econstruct",
  description:
    "Request a free consultation for restaurant construction, retail build-outs, office TI, fire rebuilds, custom homes, and luxury remodels across Los Angeles.",
  path: "/free-consultation",
});

export default function FreeConsultationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://econstructinc.com" },
    { name: "Free Consultation", url: "https://econstructinc.com/free-consultation" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="Free Consultation"
        subtitle="Restaurant, retail, TI, fire rebuild, custom home, or luxury remodel. Tell us your project and we will outline the right next step."
        breadcrumbs={[{ label: "Free Consultation" }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <ConsultationCTA leadSource="consultation_page" />
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}

