import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ConsultationCTA from "@/components/ConsultationCTA";

const SERVICES = [
  {
    href: "/services/restaurant-bar-construction",
    label: "Hospitality",
    title: "Restaurant & Bar Construction",
    image: "/projects/hutchinson11.jpg",
    blurb:
      "Ground-up builds, gut renovations, and health-department-ready kitchens for restaurants, bars, and cafes across Los Angeles — delivered on operator timelines.",
  },
  {
    href: "/services/retail-tenant-improvement",
    label: "Retail",
    title: "Retail Tenant Improvement",
    image: "/projects/Untitled-design-87-600x600.png",
    blurb:
      "Storefronts, flagship boutiques, and multi-site rollouts built to landlord specs and brand standards, with disciplined schedules that protect your opening date.",
  },
  {
    href: "/services/office-tenant-improvement",
    label: "Commercial",
    title: "Office & Tenant Improvement",
    image: "/Photorealistic_cinematic_interior_202604121940_web.jpg",
    blurb:
      "Creative office, medical, and professional space build-outs — from test-fit through turnover — coordinated tightly with property management and inspectors.",
  },
  {
    href: "/food-distribution-construction",
    label: "Industrial",
    title: "Food Distribution & Cold Storage",
    image: "/projects/85c_Distribution_2.jpg",
    blurb:
      "Distribution centers, cold storage, commissaries, and ghost kitchens engineered for food-safety compliance, refrigeration loads, and 24/7 operations.",
  },
  {
    href: "/services/custom-homes",
    label: "Residential",
    title: "Custom Homes & ADUs",
    image: "/custom_home_service.png",
    blurb:
      "Architect-driven custom homes and ADUs across Los Angeles' premier neighborhoods, managed with the same preconstruction rigor as our commercial work.",
  },
  {
    href: "/services/luxury-modernization",
    label: "Residential",
    title: "Luxury Modernization",
    image: "/luxury_mod_service.png",
    blurb:
      "Whole-home transformations and elevated interiors for established properties — thoughtful modernization that respects the architecture you already own.",
  },
  {
    href: "/services/fire-rebuild",
    label: "Restoration",
    title: "Fire Rebuild & Restoration",
    image: "/fire_rebuild_hero.png",
    blurb:
      "Insurance-coordinated fire rebuilds from debris and permits through final finish — bringing Palisades, Altadena, and Malibu families home faster.",
  },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Los Angeles Construction Services | econstruct",
  description:
    "Commercial and residential construction services in Los Angeles: restaurant and bar construction, retail and office tenant improvements, food distribution and cold storage facilities, custom homes, luxury modernization, and fire rebuilds.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://econstructinc.com" },
    { name: "Services", url: "https://econstructinc.com/services" },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://econstructinc.com${service.href}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What commercial construction services does econstruct offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "econstruct offers restaurant and bar construction, retail tenant improvement, office and tenant improvement, food distribution and cold storage construction, custom homes and ADUs, luxury modernization, and fire rebuild and restoration across Los Angeles and Southern California.",
        },
      },
      {
        "@type": "Question",
        name: "Does econstruct handle permits and inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Permit expediting, plan check coordination, and inspection scheduling are included in our project management process. CA Lic #964015.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, itemListSchema, faqSchema]),
        }}
      />

      <PageHero
        title="Los Angeles Construction Services"
        subtitle="Commercial and residential construction across Los Angeles — restaurants, retail, office TI, food facilities, custom homes, and fire rebuilds. One team, one standard."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-body-text">
              econstruct operates across the full lifecycle of commercial and
              residential construction in Los Angeles — restaurants, retail,
              office tenant improvements, food facilities, custom homes, ADUs,
              and fire rebuilds. Every project is managed with the same
              priorities: clear leadership, disciplined preconstruction, strong
              field execution, and direct communication.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.href} delay={index * 0.06}>
                <Link href={service.href} className="group block">
                  <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold/90">
                          {service.label}
                        </p>
                        <h3 className="mt-3 text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="leading-relaxed text-body-text">
                        {service.blurb}
                      </p>
                      <p className="mt-6 text-sm font-bold text-brand-dark transition-colors group-hover:text-accent-gold">
                        Learn More
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                value: "634",
                label: "Combined Partner Projects",
              },
              {
                value: "51 Years",
                label: "Collective Experience Between Partners",
              },
              {
                value: "Since 2001",
                label: "Building in Los Angeles",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm">
                  <p className="text-5xl font-bold tracking-tight text-brand-dark">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-accent-gold">
                    {item.label}
                  </p>
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
