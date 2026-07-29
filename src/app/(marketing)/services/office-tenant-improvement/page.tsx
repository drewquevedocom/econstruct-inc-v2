import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2, CheckCircle, Phone, ArrowRight,
  Layers, Clock, Shield, Zap, Users, Wind,
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
  title: "Office Tenant Improvement Contractor Los Angeles | econstruct",
  description:
    "econstruct delivers office TI, creative space build-outs, and commercial tenant improvements across Los Angeles — permitted, phased, and on schedule. CA Lic #964015.",
  path: "/services/office-tenant-improvement",
  image: "/Photorealistic_cinematic_interior_202604121940_web.jpg",
  imageAlt: "Office tenant improvement Los Angeles by econstruct",
  openGraphTitle: "Office Tenant Improvement Contractor Los Angeles | econstruct",
  twitterTitle: "Office TI Contractor Los Angeles | econstruct",
});

const features = [
  {
    icon: Layers,
    title: "Full-Scope TI Management",
    description: "Demolition, framing, drywall, acoustic ceiling, MEP, flooring, doors, hardware — every discipline under one GC. No finger-pointing between trades.",
  },
  {
    icon: Zap,
    title: "Electrical & Low-Voltage",
    description: "Panel upgrades, new circuit distribution, structured cabling, AV rough-in, and lighting controls. Modern offices have complex electrical demands — we build for real-world density.",
  },
  {
    icon: Wind,
    title: "HVAC Reconfiguration",
    description: "New ceiling layouts require new ductwork. We coordinate HVAC reconfiguration with the building engineer and execute to the mechanical permit.",
  },
  {
    icon: Building2,
    title: "ADA Compliance",
    description: "ADA-compliant restrooms, door hardware, signage, and accessible routes — required on any TI that changes the occupancy load or configuration.",
  },
  {
    icon: Users,
    title: "Occupied-Building Phasing",
    description: "We've completed TI projects in active buildings in Culver City and West LA, phasing work to maintain business operations throughout construction.",
  },
  {
    icon: Clock,
    title: "Lease-Date Delivery",
    description: "Your rent commencement date is a fixed constraint. We plan backward from your move-in date, not forward from a vague construction estimate.",
  },
];

const process = [
  { step: "01", title: "Preconstruction & Lease Review", body: "We review your lease TI exhibit, confirm base building conditions, and identify any landlord work that needs to be completed before our scope begins." },
  { step: "02", title: "Permit Filing", body: "Building, electrical, mechanical, plumbing, and fire sprinkler permits filed simultaneously through LADBS. We push for expedited review where the schedule requires it." },
  { step: "03", title: "Demolition", body: "Existing TI demolished, hazardous materials abated if required, and conditions documented for any base building discrepancies." },
  { step: "04", title: "Rough-In", body: "Framing, MEP rough-in, fire sprinkler modifications, and ceiling grid installation — all coordinated to prevent conflicts in the ceiling plenum." },
  { step: "05", title: "Finishes", body: "Drywall, paint, flooring, doors, hardware, millwork, lighting trim-out, and low-voltage terminations completed per your design documents." },
  { step: "06", title: "Punch & CO", body: "Final punch list, certificate of occupancy obtained, and the space turned over to your facilities team ready for furniture and move-in." },
];

const faqs = [
  {
    q: "How long does an office TI take in Los Angeles?",
    a: "A typical office tenant improvement in Los Angeles takes 60–120 days from permit approval. Full-floor build-outs in existing shell space run 90–120 days. Simple reconfigurations can finish in 45–60 days. econstruct sets a milestone schedule before construction begins.",
  },
  {
    q: "What permits are required for office TI in Los Angeles?",
    a: "Office tenant improvements require building, electrical, mechanical (HVAC), plumbing, and fire sprinkler permits from LADBS. California Title 24 energy code governs lighting controls and HVAC systems. econstruct manages all permit submissions and inspector coordination.",
  },
  {
    q: "Can you work while our team is still in the space?",
    a: "Yes. We regularly phase occupied-building TI projects — completing the noisiest, most disruptive work first in one zone, then moving employees into the newly finished space while we begin the next zone. Dust barriers, negative air containment, and off-hours scheduling are standard.",
  },
  {
    q: "Do you handle the TI allowance draw process?",
    a: "Yes. We work with your landlord's property manager on draw documentation, lien waivers, and allowance reconciliation. Getting the TI allowance right requires contractor cooperation — we make it straightforward for your real estate team.",
  },
];

export default function OfficeTenantImprovementPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Office Tenant Improvement", url: `${SITE_URL}/services/office-tenant-improvement` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Office Tenant Improvement"
        subtitle="Full-scope office TI, creative space build-outs, and commercial tenant improvements across Los Angeles — permitted, phased, and delivered on your lease date."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Office Tenant Improvement" },
        ]}
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
                Every trade, one point of contact
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

      {/* Why econstruct */}
      <section className="bg-brand-navy py-20 md:py-24 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-30" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Why econstruct</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-white mb-6 md:text-4xl" style={{ color: "#ffffff" }}>
                Commercial discipline on every office build
              </h2>
              <p className="text-[15px] leading-relaxed text-white/70 mb-5">
                Most office TI contractors come from a residential background. econstruct comes from commercial construction — restaurants, retail, multi-location build-outs, and food facilities. That commercial discipline means tighter schedules, cleaner permit coordination, and better multi-trade management.
              </p>
              <p className="text-[15px] leading-relaxed text-white/70">
                We've delivered office TI projects in Culver City, West LA, and across the Westside — including occupied-building renovations where business continuity was non-negotiable.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Pre-construction planning", body: "Full scope review before a hammer swings." },
                  { title: "Multi-permit coordination", body: "Building, electrical, mechanical, plumbing — all filed simultaneously." },
                  { title: "Occupied-building expertise", body: "Phased construction around your active operations." },
                  { title: "Single point of contact", body: "One project lead from permit filing to CO." },
                ].map((item, i) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <CheckCircle size={18} className="text-brand-gold mb-2" />
                    <h4 className="font-display text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.body}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-secondary py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Our Process</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">
                From lease signing to move-in day
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.08}>
                <div className="rounded-xl border border-brand-ink/8 bg-white p-6 h-full shadow-sm">
                  <span className="font-display text-4xl font-extrabold text-brand-red/20">{p.step}</span>
                  <h3 className="font-display text-lg font-bold text-brand-ink mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-body-text">{p.body}</p>
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
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>Ready to talk about your office TI?</h2>
            <p className="mt-1 text-white/80">Tell us your space, your lease date, and your scope. We'll build the plan.</p>
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
