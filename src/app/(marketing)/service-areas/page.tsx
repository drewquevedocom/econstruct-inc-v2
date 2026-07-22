import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ConsultationCTA from "@/components/ConsultationCTA";

const serviceAreas: { area: string; note: string }[] = [
  {
    area: "Downtown Los Angeles",
    note: "Restaurant build-outs, office TI, and adaptive reuse in high-rise and historic-core buildings with strict property management coordination.",
  },
  {
    area: "Vernon",
    note: "Food processing, cold storage, and distribution facilities in LA's densest industrial food corridor — USDA and health-department ready.",
  },
  {
    area: "Commerce",
    note: "Warehouse conversions, distribution center upgrades, and industrial tenant improvements near the I-5 and 710 freight corridors.",
  },
  {
    area: "City of Industry",
    note: "Large-footprint manufacturing and distribution projects with heavy power, refrigeration, and dock-high logistics requirements.",
  },
  {
    area: "Santa Fe Springs",
    note: "Cold storage retrofits and food distribution facility improvements for operators serving LA and Orange County markets.",
  },
  {
    area: "Buena Park",
    note: "Food manufacturing and distribution construction, including bakery-cafe production facilities like our 85°C distribution center work.",
  },
  {
    area: "Anaheim & North Orange County",
    note: "Restaurant chains, commissaries, and retail TI serving OC's hospitality and entertainment economy.",
  },
  {
    area: "Long Beach",
    note: "Port-adjacent industrial improvements, restaurant construction, and mixed-use retail build-outs.",
  },
  {
    area: "Carson & Torrance",
    note: "South Bay industrial TI, food facility upgrades, and commercial kitchen construction for regional operators.",
  },
  {
    area: "El Segundo",
    note: "Creative office build-outs and restaurant TI in one of LA's fastest-growing corporate submarkets.",
  },
  {
    area: "Culver City",
    note: "Studio-adjacent office TI, hospitality construction, and retail improvements for media and tech tenants.",
  },
  {
    area: "Santa Monica & Westside",
    note: "Design-forward restaurant and retail construction with coastal-zone permitting experience.",
  },
  {
    area: "West Hollywood",
    note: "Bar, nightlife, and boutique retail construction where design detail and after-hours logistics matter.",
  },
  {
    area: "Hollywood & Los Feliz",
    note: "Restaurant and hospitality renovations in character-rich buildings requiring thoughtful structural and MEP upgrades.",
  },
  {
    area: "Burbank & Glendale",
    note: "Office TI, restaurant rollouts, and commercial renovations serving the media district and Brand Boulevard retail core.",
  },
  {
    area: "Pasadena & San Gabriel Valley",
    note: "Restaurant construction, retail TI, and commercial work balancing historic-district review with operator schedules.",
  },
  {
    area: "San Fernando Valley",
    note: "Commissaries, ghost kitchens, and industrial TI from Van Nuys to Chatsworth, plus custom residential across the hills.",
  },
  {
    area: "Malibu & Pacific Palisades",
    note: "Fire rebuild and restoration leadership, luxury custom homes, and coastal commercial improvements.",
  },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Los Angeles & SoCal Commercial Construction Service Areas | econstruct",
  description:
    "econstruct builds across Los Angeles and Southern California's commercial markets — restaurant construction, retail and office TI, food distribution and cold storage facilities, custom homes, and fire rebuilds.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://econstructinc.com" },
    { name: "Service Areas", url: "https://econstructinc.com/service-areas" },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas does econstruct serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "econstruct serves the greater Los Angeles area including Vernon, Commerce, City of Industry, Buena Park, Downtown LA, El Monte, Torrance, Long Beach, Inglewood, Hawthorne, Compton, Carson, Anaheim, Santa Ana, Pomona, Ontario, Fontana, and Riverside.",
        },
      },
      {
        "@type": "Question",
        name: "Does econstruct work outside of Los Angeles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve commercial clients throughout Southern California including Orange County, the Inland Empire, and the greater LA metro region.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />

      <PageHero
        title="Los Angeles & SoCal Service Areas"
        subtitle="Commercial market experience across Los Angeles and Southern California — restaurants, retail, office TI, food facilities, custom homes, and fire rebuilds."
        breadcrumbs={[{ label: "Service Areas" }]}
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map(({ area, note }, index) => (
              <AnimatedSection key={area} delay={index * 0.04}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-brand-dark">{area}</h2>
                  <p className="mt-4 leading-relaxed text-body-text">{note}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/services/restaurant-bar-construction"
                      className="text-sm font-bold text-accent-gold transition-colors hover:text-brand-dark"
                    >
                      Restaurant &amp; Bar
                    </Link>
                    <Link
                      href="/food-distribution-construction"
                      className="text-sm font-bold text-accent-gold transition-colors hover:text-brand-dark"
                    >
                      Food Facilities
                    </Link>
                    <Link
                      href="/services/fire-rebuild"
                      className="text-sm font-bold text-accent-gold transition-colors hover:text-brand-dark"
                    >
                      Fire Rebuild
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
