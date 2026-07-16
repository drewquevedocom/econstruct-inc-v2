import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, Warehouse, Thermometer, ChefHat, Truck, Factory, Package } from "lucide-react";
import { foodSubPages, foodHubCapabilities, foodDecisionMakers } from "@/lib/data/food-distribution";
import { generatePageMetadata } from "@/lib/metadata";
import { ECONSTRUCT_INC } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = generatePageMetadata({
  title: "Food Distribution & Commercial Kitchen Contractor | Los Angeles | econstruct",
  description: "econstruct builds, renovates, and upgrades food distribution centers, cold storage warehouses, ghost kitchens, and commissary facilities throughout Southern California.",
  path: "/food-distribution-construction",
  image: "/og-homepage.jpg",
  imageAlt: "econstruct food distribution construction Los Angeles",
  openGraphTitle: "Food Distribution & Commercial Kitchen Contractor | Los Angeles | econstruct",
  twitterTitle: "Food Distribution & Commercial Kitchen Contractor | Los Angeles | econstruct",
});

const ICONS = [Warehouse, Thermometer, ChefHat, Factory, Factory, Package];

const LEAD_GEN = [
  { label: "Schedule a Consultation", href: "/free-consultation", primary: true },
  { label: "Request Budget Pricing", href: "/contact", primary: false },
  { label: "Request a Site Walk", href: "/food-distribution-construction/site-walk", primary: false },
  { label: "Emergency Facility Improvements", href: "/contact", primary: false },
];

export default function FoodDistributionHub() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-brand-ink pt-32 pb-20">
        <div className="brand-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-ink to-transparent" />
        <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Food & Distribution Construction</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[4.5rem] max-w-4xl" style={{ color: "#ffffff" }}>
            Built for Food.{" "}
            <span className="text-brand-red">Built to Code.</span>{" "}
            Built Fast.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            econstruct delivers construction, tenant improvements, and facility upgrades for food distribution, cold storage, commissary, and ghost kitchen operations across Southern California.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/food-distribution-construction/site-walk" className="inline-flex items-center gap-3 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_38px_rgba(225,20,44,0.3)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark">
              Request a Site Walk
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="inline-flex items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10">
              <Phone size={16} className="text-brand-gold" />
              {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Sub-pages grid ── */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Our Specializations</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-12 md:text-4xl">Six disciplines. One accountable team.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {foodSubPages.map((page, i) => {
              const Icon = ICONS[i] ?? Warehouse;
              return (
                <Link key={page.slug} href={page.href} className="group flex flex-col gap-4 rounded-md bg-white p-7 shadow-[0_18px_40px_rgba(12,15,26,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(12,15,26,0.14)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-red/8 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={26} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-ink transition-colors group-hover:text-brand-red">{page.title}</h3>
                  <p className="text-sm leading-relaxed text-body-text flex-1">{page.subheadline}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-brand-red">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Occupied-Facility Work Is Different ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Why This Work Is Different</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-6 md:text-[2.6rem] leading-[1.08]">
                We Don&apos;t Just Build Food Facilities.<br />We Understand How They Run.
              </h2>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                Food facility construction is not the same as standard commercial TI. Every element of the construction schedule — phasing, utility shutdowns, equipment disconnects, temporary service paths — has to be designed around the client&apos;s operational calendar, not just the build sequence.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                LA County Health Department inspections don&apos;t pause for construction. Cold chain integrity has to be maintained even when refrigeration systems are being upgraded. When a commissary supplies 40 restaurant locations, there is no acceptable downtime window — which means the GC has to phase work at a level of precision that most contractors simply aren&apos;t built for.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text">
                econstruct coordinates health department permitting, fire suppression compliance, utility shutdown sequences, and phased construction schedules as one integrated program — so the facility keeps running while we build around it. That capability is what separates a food facility specialist from a general contractor who has done a few kitchen jobs.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: "Health Department Permitting",
                  body: "LA County Department of Public Health requirements are built into the construction schedule from day one — not filed after the build and hoped for. We coordinate pre-opening inspections, plan check submissions, and correction responses as part of the critical path.",
                },
                {
                  title: "Operational Continuity Planning",
                  body: "We phase construction around your production schedule. Utility shutdowns are sequenced with minimum operational impact, temporary service paths are planned in advance, and equipment disconnects are coordinated with your facilities team — not improvised in the field.",
                },
                {
                  title: "Cold Chain Integrity",
                  body: "Refrigeration system upgrades in active cold storage facilities require precise sequencing so product never leaves its required temperature range. We've done it. We know what a misstep costs an operation.",
                },
                {
                  title: "Food-Grade Compliance From Day One",
                  body: "HACCP-compliant finishes, NSF/ANSI surfaces, and food-safe drainage systems are specified in the scope documents — not added as corrections after the health inspector walks the space.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-brand-ink/8 bg-secondary p-6">
                  <h3 className="font-display text-lg font-bold text-brand-ink mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-body-text">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Key Capabilities</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-8 md:text-4xl">Everything a food facility project requires. In-house.</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {foodHubCapabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <CheckCircle size={18} className="shrink-0 text-brand-red" />
                    <span className="text-sm font-semibold text-brand-ink">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md bg-brand-navy p-8 md:p-10 relative overflow-hidden">
              <div className="brand-grid absolute inset-0 opacity-30" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Who We Work With</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-6">Decision makers we speak directly to</h3>
                <div className="space-y-3">
                  {foodDecisionMakers.map((dm) => (
                    <div key={dm} className="flex items-center gap-3 border-b border-white/8 pb-3">
                      <span className="h-2 w-2 rounded-full bg-brand-gold shrink-0" />
                      <span className="text-[15px] font-semibold text-white/85">{dm}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead gen CTA boxes ── */}
      <section className="bg-brand-ink py-20 md:py-24">
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Get Started</span>
              <span className="h-px w-10 bg-brand-red" />
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">Ready to talk about your facility?</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LEAD_GEN.map((item) => (
              <Link key={item.label} href={item.href}
                className={`flex flex-col items-center justify-center gap-3 rounded-md px-6 py-8 text-center font-bold transition-all hover:-translate-y-1 ${
                  item.primary
                    ? "bg-brand-red text-white shadow-[0_18px_38px_rgba(225,20,44,0.3)] hover:bg-brand-red-dark"
                    : "border border-white/15 bg-white/5 text-white hover:border-brand-gold/50 hover:bg-white/10"
                }`}
              >
                <span className="font-display text-base font-extrabold">{item.label}</span>
                <ArrowRight size={18} className={item.primary ? "text-white/80" : "text-brand-gold"} />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
