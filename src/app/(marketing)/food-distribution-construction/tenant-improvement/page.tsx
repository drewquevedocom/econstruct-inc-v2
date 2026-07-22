import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ECONSTRUCT_INC } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = generatePageMetadata({
  title: "Food Facility Tenant Improvement | Los Angeles | econstruct",
  description:
    "econstruct delivers tenant improvement build-outs for food distribution, cold storage, and commissary facilities in Los Angeles — permitting, timeline, and cost factors handled by a GC who knows food facilities. CA Lic #964015.",
  path: "/food-distribution-construction/tenant-improvement",
});

const COST_FACTORS = [
  "Refrigeration and insulated panel scope, if the space requires cold storage or freezer conditions",
  "Electrical service capacity — most existing industrial spaces need a utility upgrade for food facility loads",
  "Health department plan check requirements for surfaces, drainage, and pest exclusion",
  "Fire code and sprinkler system compatibility with high-piled storage or commercial cooking",
  "Existing condition of the shell — floor sealing, dock equipment, and structural capacity for racking",
];

export default function FoodFacilityTenantImprovementPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-brand-ink pt-36 pb-16">
        <div className="brand-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-ink to-transparent" />
        <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-10">
          <Link
            href="/food-distribution-construction"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-brand-gold"
          >
            <ArrowLeft size={14} />
            All Food & Distribution Services
          </Link>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">econstruct — Los Angeles</span>
          </div>
          <h1
            className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-[3.8rem] max-w-4xl"
            style={{ color: "#ffffff" }}
          >
            Food Facility Tenant Improvement
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Converting a leased industrial or commercial space into a compliant, operational food facility — without the surprises that delay most build-outs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/food-distribution-construction/site-walk"
              className="inline-flex items-center gap-3 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_38px_rgba(225,20,44,0.3)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
            >
              Request a Site Walk <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
              className="inline-flex items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:border-brand-gold/50"
            >
              <Phone size={15} className="text-brand-gold" /> {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── What's involved + cost factors ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">What's Involved</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-6 md:text-4xl">
                Tenant Improvement for Food Facilities Is Not Standard TI
              </h2>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                Standard commercial tenant improvement scopes — flooring, ceilings, partitions, basic MEP — cover a fraction of what a food facility build-out actually requires. Food distribution centers, cold storage, commissaries, and ghost kitchens each carry health department surface and drainage requirements, refrigeration or cooking equipment loads that most existing electrical services can't support, and fire code triggers (high-piled storage, Type I hoods) that standard industrial space was never designed around.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                A tenant improvement scope for a food facility typically includes: cleanable, sealed floor and wall surfaces in product areas; floor drains and grease interceptors sized to the operation; refrigeration and insulated panel work for cold storage zones; an electrical service upgrade coordinated with SCE or LADWP; and a full health department plan check submission before any construction begins.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text">
                Getting this sequence wrong — starting construction before health department plans are approved, or discovering an electrical capacity shortfall mid-build — is the most common cause of delayed openings in food facility TI.
              </p>
            </div>

            <div className="rounded-md bg-secondary p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">What Drives Cost & Timeline</span>
              </div>
              <div className="space-y-4">
                {COST_FACTORS.map((factor) => (
                  <div key={factor} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-red" />
                    <span className="text-[15px] font-medium text-brand-ink">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Permitting & timeline ── */}
      <section className="bg-brand-navy py-20 md:py-24 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Permitting & Timeline</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white mb-8 md:text-4xl">
            Why This Requires a GC With Food Facility Experience
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Health Department Plan Check",
                body: "LA County Environmental Health reviews food facility TI plans separately from the building permit — commonly 8–14 weeks including correction cycles. This has to be sequenced from day one, not filed after design is finished.",
              },
              {
                title: "Electrical Service Timelines",
                body: "Utility upgrades for refrigeration or cooking loads run 8–14 weeks with SCE or LADWP. Initiating this the day the lease is signed — not the day construction starts — is the single biggest schedule lever.",
              },
              {
                title: "Fire Code Triggers",
                body: "High-piled storage and Type I hood installations require LAFD plan review. A GC unfamiliar with these triggers will discover them during health department or building plan check, adding weeks.",
              },
              {
                title: "Realistic Cost Ranges",
                body: "Food facility TI runs materially higher per square foot than standard commercial TI once refrigeration, electrical upgrades, and health department-driven finishes are priced accurately — budget accordingly from the start.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-md border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-red py-16 md:py-20 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>
              Evaluating a space for your facility?
            </h2>
            <p className="mt-2 text-white/80 text-[15px]">Call or request a site walk — we respond same business day.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/food-distribution-construction/site-walk"
              className="rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:text-white"
            >
              Request a Site Walk
            </Link>
            <a
              href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
              className="rounded-sm border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-white/10"
            >
              {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
