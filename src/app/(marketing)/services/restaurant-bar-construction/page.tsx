import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed, CheckCircle, Phone, ArrowRight,
  Thermometer, Zap, Wind, Clock, Shield, Star,
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
  title: "Restaurant & Bar Construction Los Angeles | econstruct",
  description:
    "econstruct builds restaurants, bars, and hospitality spaces across Los Angeles — from full ground-up builds to occupied renovations. Health dept ready. CA Lic #964015.",
  path: "/services/restaurant-bar-construction",
  image: "/projects/hutchinson11.jpg",
  imageAlt: "Restaurant construction Los Angeles by econstruct",
  openGraphTitle: "Restaurant & Bar Construction Los Angeles | econstruct",
  twitterTitle: "Restaurant & Bar Construction Los Angeles | econstruct",
});

const features = [
  {
    icon: UtensilsCrossed,
    title: "Commercial Kitchen Build-Out",
    description:
      "Full kitchen construction — hoods, grease traps, fire suppression, NSF-rated surfaces, walk-in coolers, and equipment pads. Built to LA County Health Department standards from day one.",
  },
  {
    icon: Thermometer,
    title: "MEP Coordination",
    description:
      "Mechanical, electrical, and plumbing coordinated as a single integrated scope. We manage all permit disciplines so trade conflicts don't become your problem.",
  },
  {
    icon: Zap,
    title: "Electrical for High-Load Kitchens",
    description:
      "Commercial kitchens require high-capacity electrical service. We size and install panels, circuits, and emergency systems for the real operational load — not an estimate.",
  },
  {
    icon: Wind,
    title: "HVAC & Exhaust Systems",
    description:
      "Make-up air, exhaust hoods, and HVAC systems designed for the heat loads of commercial cooking. Energy compliance built in from the design phase.",
  },
  {
    icon: Clock,
    title: "Opening-Day Coordination",
    description:
      "We coordinate the health permit, fire marshal clearance, certificate of occupancy, and final inspections on a sequenced schedule — so your opening date is a real date.",
  },
  {
    icon: Shield,
    title: "Fire Suppression (Ansul)",
    description:
      "Ansul and wet chemical systems designed, installed, and inspected in coordination with your local fire marshal. We manage the paperwork, not just the hardware.",
  },
];

const process = [
  { step: "01", title: "Preconstruction & Scope", body: "We walk the space with you, review existing conditions, and produce a detailed scope with line-item pricing before any commitment." },
  { step: "02", title: "Permit & Health Dept. Filing", body: "We file for building, electrical, plumbing, mechanical, and fire permits simultaneously — and manage LA County Health Department plan check in parallel." },
  { step: "03", title: "Demolition & Rough-In", body: "Demolition, framing, MEP rough-in, and underground work completed on a coordinated schedule that protects your opening date." },
  { step: "04", title: "Kitchen & Bar Installation", body: "Equipment pads, hoods, grease systems, bar plumbing, and all commercial-grade finishes installed per approved plans." },
  { step: "05", title: "Inspections & Health Permit", body: "We schedule and manage every inspection, address corrections, and walk the final health department inspection with you." },
  { step: "06", title: "Punch & Certificate of Occupancy", body: "Final punch list, CO obtained, keys turned over. We're not done until you're legally open to serve customers." },
];

const faqs = [
  {
    q: "How long does a restaurant build-out take in Los Angeles?",
    a: "A typical restaurant TI in an existing shell runs 60–120 days from permit approval, depending on scope. Ground-up builds with LA County Health and fire marshal approvals add 2–4 months. econstruct provides a milestone schedule before construction begins so you can plan your opening date with confidence.",
  },
  {
    q: "What permits are required for a restaurant in Los Angeles?",
    a: "Los Angeles restaurant construction requires a building permit from LADBS, a health permit from LA County Department of Public Health, fire department clearance, and a certificate of occupancy. econstruct manages all of these submissions and coordinates inspections.",
  },
  {
    q: "How much does restaurant construction cost per square foot in LA?",
    a: "Restaurant construction in Los Angeles typically costs $150–$400+ per square foot depending on finish level, kitchen equipment complexity, and MEP scope. Fast-casual concepts run lower; full-service upscale restaurants trend higher. We provide detailed line-item estimates before you commit.",
  },
  {
    q: "Do you work with our architect, or do you provide design-build?",
    a: "Both. We work with your architect as the GC, or we coordinate the full design-build process. We have established relationships with restaurant architects who understand LA's health department and LADBS requirements.",
  },
];

export default function RestaurantBarConstruction() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: "Restaurant & Bar Construction", url: `${SITE_URL}/services/restaurant-bar-construction` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title="Restaurant & Bar Construction"
        subtitle="From commercial kitchens and bar programs to full hospitality build-outs — econstruct delivers restaurant and bar construction across Los Angeles, health-department ready on opening day."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Restaurant & Bar Construction" },
        ]}
        backgroundImage="/projects/hutchinson11.jpg"
        stats={[
          { value: "634+", label: "Projects Completed" },
          { value: "Since 2001", label: "Building in LA" },
          { value: "CA #964015", label: "Licensed GC" },
        ]}
      />

      {/* Featured project image */}
      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <Image
                  src="/projects/hutchinson11.jpg"
                  alt="Hutchinson Cocktails & Grill — restaurant build-out by econstruct Los Angeles"
                  fill={false}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Featured Work</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-4 md:text-4xl">
                Hutchinson Cocktails & Grill
              </h2>
              <p className="text-[15px] leading-relaxed text-body-text mb-4">
                An upscale cocktail lounge on La Cienega blending modern elegance with old Hollywood glamour. econstruct delivered the blue onyx bar, custom leather and velvet booth seating, live-edge wood tables, and a fully outfitted open-concept kitchen with a state-of-the-art bar program.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text mb-8">
                Scope: full interior build-out, MEP coordination, health department compliance, and opening-day delivery.
              </p>
              <Link href="/projects/hutchinson-cocktails-and-grill" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-red hover:text-brand-ink transition-colors">
                View Full Project <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* What we handle */}
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
                Every element of a restaurant build, under one team
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
                From permit filing to opening day
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

      {/* Recent restaurant projects */}
      <section className="bg-secondary py-20 md:py-24">
        <Container>
          <AnimatedSection>
            <div className="mb-10 flex items-center justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Our Work</span>
                </div>
                <h2 className="font-display text-3xl font-extrabold text-brand-ink md:text-4xl">Recent restaurant projects</h2>
              </div>
              <Link href="/projects" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-ink hover:text-brand-red transition-colors">
                View All <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Hutchinson Cocktails & Grill", location: "La Cienega, LA", img: "/projects/hutchinson11.jpg", slug: "hutchinson-cocktails-and-grill" },
              { title: "Hal's Bar and Grill", location: "Playa Vista", img: "/projects/Hals_pv_12-scaled.jpg", slug: "hals-bar-and-grill" },
              { title: "El Pollo Loco", location: "Delano, CA", img: "/projects/El_pollo_loco_3.jpg", slug: "el-pollo-loco" },
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

      {/* CTA strip */}
      <section className="bg-brand-red py-14 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>
              Ready to talk about your restaurant?
            </h2>
            <p className="mt-1 text-white/80">Tell us your concept, location, and timeline. We'll take it from there.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/free-consultation" className="rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red hover:-translate-y-0.5 transition-all hover:bg-brand-ink hover:text-white">
              Get a Free Quote
            </Link>
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
