import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag, CheckCircle, Phone, ArrowRight,
  Ruler, Clock, Shield, Star, Zap, Package,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ECONSTRUCT_INC, SITE_URL } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ConsultationCTA from "@/components/ConsultationCTA";

export const dynamic = "force-static";

export const metadata: Metadata = generatePageMetadata({
  title: "Retail Fit-Out & Tenant Improvement Los Angeles | econstruct",
  description:
    "econstruct builds retail fit-outs, brand-spec storefronts, and tenant improvements across Los Angeles — on time, on budget, and on-brand. CA Lic #964015.",
  path: "/services/retail-tenant-improvement",
  image: "/projects/Untitled-design-87-600x600.png",
  imageAlt: "Retail fit-out construction Los Angeles by econstruct",
  openGraphTitle: "Retail Fit-Out & Tenant Improvement Los Angeles | econstruct",
  twitterTitle: "Retail Fit-Out Los Angeles | econstruct",
});

const features = [
  {
    icon: ShoppingBag,
    title: "Brand-Spec Build-Out",
    description: "We build to brand standards — reading corporate prototype drawings, matching spec finishes, and delivering spaces that pass corporate inspections on the first walk.",
  },
  {
    icon: Ruler,
    title: "Custom Millwork & Fixtures",
    description: "In-house millwork coordination for custom displays, shelving, counters, and brand-specific fixture systems. Locally fabricated or sourced to spec.",
  },
  {
    icon: Zap,
    title: "Electrical & Lighting",
    description: "Retail lighting is part of the brand experience. We execute lighting plans precisely — track systems, accent lighting, display lighting, and control systems.",
  },
  {
    icon: Package,
    title: "Storefront & Facade",
    description: "Storefront glazing, signage rough-in, ADA-compliant entries, and exterior finishes that match your brand's street presence and the landlord's requirements.",
  },
  {
    icon: Clock,
    title: "Launch-Schedule Delivery",
    description: "Retail openings are tied to lease commencement dates, marketing launches, and inventory arrival. We build schedules around your opening date — not the other way around.",
  },
  {
    icon: Shield,
    title: "Multi-Location Experience",
    description: "We've built Rothy's, Malin+Goetz, and Thom Sweeney across multiple LA locations. Consistency across a portfolio is a discipline we understand.",
  },
];

const process = [
  { step: "01", title: "Lease & Landlord Coordination", body: "We review your lease exhibit and work with the landlord's property manager on TI allowance, demising conditions, and any base building tie-ins." },
  { step: "02", title: "Permit & Plan Check", body: "Building, electrical, plumbing, and mechanical permits filed simultaneously. We manage LADBS plan check and push for expedited review where available." },
  { step: "03", title: "Demolition & Rough-In", body: "Existing tenant improvements demolished, MEP rough-in installed, framing complete — all sequenced to protect your opening date." },
  { step: "04", title: "Millwork, Fixtures & Finishes", body: "Custom millwork installed, flooring laid, fixtures set, lighting trimmed out, and all brand-spec finishes applied per your design documents." },
  { step: "05", title: "Punch & Certificate of Occupancy", body: "Final punch list walked with your team, CO obtained, and keys turned over. We're not done until the space is ready for merchandise and customers." },
];

const faqs = [
  {
    q: "How long does a retail fit-out take in Los Angeles?",
    a: "A typical retail TI in Los Angeles runs 45–90 days from permit approval depending on scope. Simple refreshes take less; full gut build-outs with custom millwork take longer. econstruct provides a milestone schedule before construction begins so your opening date is real.",
  },
  {
    q: "Can you build to a national brand's prototype drawings?",
    a: "Yes. We regularly build from corporate prototype packages for national brands. We read the drawings, match the specs, and deliver spaces that pass corporate inspections. We also flag any local code conflicts early so the drawings get adjusted before they cause field problems.",
  },
  {
    q: "How do you handle tenant improvement allowances?",
    a: "We work with your landlord's property manager on TI allowance documentation, draw schedules, and lien waivers. Getting the TI allowance right requires contractor cooperation — we make it straightforward for your real estate team.",
  },
  {
    q: "Do you handle multi-location rollouts?",
    a: "Yes. We've built multi-location retail rollouts across LA for several brands. Consistency across locations requires the same team, same standards, and the same discipline on every build — that's how we operate.",
  },
];

export default function RetailTenantImprovementPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Retail Fit-Out & TI", url: `${SITE_URL}/services/retail-tenant-improvement` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Retail Fit-Out & Tenant Improvement"
        subtitle="Brand-spec storefronts, custom millwork, and retail build-outs across Los Angeles — delivered on your launch schedule."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Retail Fit-Out & TI" },
        ]}
        backgroundImage="/projects/Untitled-design-87-600x600.png"
        stats={[
          { value: "634+", label: "Projects Completed" },
          { value: "Since 2001", label: "Building in LA" },
          { value: "CA #964015", label: "Licensed GC" },
        ]}
      />

      {/* Features */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">What We Handle</span>
                <span className="h-px w-10 bg-brand-red" />
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">
                Everything between the shell and opening day
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-2xl bg-secondary h-full">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <f.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-ink mb-2">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-body-text">{f.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands we've built */}
      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <AnimatedSection>
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Recent Retail Work</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">Brands we've built in LA</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Rothy's", location: "Melrose & Pasadena", img: "/projects/Untitled-design-87-600x600.png", slug: "rothys" },
              { title: "Malin+Goetz", location: "Venice & Silverlake", img: "/projects/2-web-or-mls-APR00067-1-600x600.jpg", slug: "malin-goetz" },
              { title: "Thom Sweeney", location: "Melrose Place", img: "/projects/10-web-or-mls-APR00150-600x600.jpg", slug: "thom-sweeney" },
            ].map((proj, i) => (
              <AnimatedSection key={proj.slug} delay={i * 0.1}>
                <Link href={`/projects/${proj.slug}`} className="group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={proj.img} alt={proj.title} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{proj.location}</p>
                      <h3 className="font-display text-lg font-bold text-white">{proj.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-navy py-20 md:py-28 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-30" />
        <Container>
          <AnimatedSection>
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Our Process</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl" style={{ color: "#ffffff" }}>
                From lease signing to keys in hand
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 h-full">
                  <span className="font-display text-4xl font-extrabold text-brand-gold/40">{p.step}</span>
                  <h3 className="font-display text-lg font-bold text-white mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <Container size="narrow">
          <AnimatedSection>
            <div className="mb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">FAQ</span>
                <span className="h-px w-10 bg-brand-red" />
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">Common questions</h2>
            </div>
          </AnimatedSection>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="py-6">
                  <div className="flex gap-4">
                    <CheckCircle size={20} className="shrink-0 text-brand-red mt-0.5" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-ink mb-2">{faq.q}</h3>
                      <p className="text-[15px] leading-relaxed text-body-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>Ready to talk about your retail build-out?</h2>
            <p className="mt-1 text-white/80">Tell us your brand, your space, and your opening date.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/free-consultation" className="rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red hover:-translate-y-0.5 transition-all hover:bg-brand-ink hover:text-white">Get a Free Quote</Link>
            <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="rounded-sm border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone size={16} /> {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
