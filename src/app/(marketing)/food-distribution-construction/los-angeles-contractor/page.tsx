import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ECONSTRUCT_INC } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata: Metadata = generatePageMetadata({
  title: "Food Distribution Contractor Los Angeles | econstruct Inc.",
  description:
    "econstruct is a licensed food distribution contractor serving Los Angeles — distribution centers, cold storage, and commissary facilities built by a GC who understands food operations. CA Lic #964015.",
  path: "/food-distribution-construction/los-angeles-contractor",
});

const QUALIFICATIONS = [
  "California General Contractor License #964015, active since 2001",
  "Direct experience coordinating LA County Environmental Health plan check for food facilities",
  "In-house project management for refrigeration, electrical service upgrades, and dock configuration",
  "Built and converted food distribution and cold storage facilities across the Vernon, Compton, and City of Industry corridors",
  "Single point of accountability from permitting through final health department inspection",
];

export default function FoodDistributionContractorLAPage() {
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
            Food Distribution Contractor, Los Angeles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            A general contractor who understands cold chain, health department compliance, and dock logistics — not a standard industrial GC learning food facilities on your project.
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

      {/* ── What a food distribution contractor does ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">What This Work Requires</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-6 md:text-4xl">
                What a Food Distribution Contractor Actually Does
              </h2>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                A food distribution contractor builds and converts facilities that receive, store, and ship food product — distribution centers, cold storage warehouses, commissaries, and last-mile logistics space. That scope is materially different from standard industrial construction. It requires coordinating refrigeration system design, insulated panel installation, health department plan check, high-piled storage fire code, and dock configuration decisions that determine a facility's operational throughput for the life of the building.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text mb-5">
                General contractors without food facility experience routinely underestimate this scope. Refrigeration systems get sized wrong. Health department corrections surface late and blow the schedule. Electrical service upgrades for continuous refrigeration loads get discovered mid-project instead of the day the lease is signed.
              </p>
              <p className="text-[15px] leading-relaxed text-body-text">
                A contractor with genuine food distribution experience runs these workstreams in parallel from day one — because the permitting agencies, engineering disciplines, and operational constraints are known quantities, not surprises.
              </p>
            </div>

            <div className="rounded-md bg-secondary p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">econstruct's Qualifications</span>
              </div>
              <div className="space-y-4">
                {QUALIFICATIONS.map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-red" />
                    <span className="text-[15px] font-medium text-brand-ink">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why LA's food supply chain needs a specialized GC ── */}
      <section className="bg-brand-navy py-20 md:py-24 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Why Los Angeles Is Different</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white mb-8 md:text-4xl">
            Why LA&apos;s Food Supply Chain Requires a Specialized GC
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Jurisdictional Complexity",
                body: "Vernon, Compton, City of Industry, and Fontana each have their own permit authority and inspection protocol, on top of LA County Environmental Health oversight that follows the facility everywhere.",
              },
              {
                title: "Cold Chain at Scale",
                body: "Los Angeles' food distribution corridor runs on refrigerated logistics — a contractor who hasn't built cold storage will underestimate electrical, insulation, and sequencing requirements.",
              },
              {
                title: "Aging Industrial Stock",
                body: "Much of LA's industrial inventory was not built for refrigeration or high-piled storage loads. Utility and structural upgrades are the norm, not the exception.",
              },
              {
                title: "Health Department Timelines",
                body: "LA County Environmental Health plan check commonly runs 8–14 weeks with correction cycles. A GC who doesn't build this into the schedule from day one will miss the opening date.",
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
              Ready to talk about your facility?
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
