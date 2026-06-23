import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { foodSubPages } from "@/lib/data/food-distribution";
import { ECONSTRUCT_INC } from "@/lib/constants";

export const dynamic = "force-static";

export function generateStaticParams() {
  return foodSubPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = foodSubPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.headline} | Los Angeles | econstruct`,
    description: page.description.slice(0, 160),
    openGraph: { title: `${page.headline} | Los Angeles | econstruct`, description: page.description.slice(0, 160) },
  };
}

export default async function FoodSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = foodSubPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const others = foodSubPages.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-brand-ink pt-36 pb-16">
        <div className="brand-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-ink to-transparent" />
        <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-10">
          <Link href="/food-distribution-construction" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-brand-gold">
            <ArrowLeft size={14} />
            All Food & Distribution Services
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">econstruct — Los Angeles</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-5xl lg:text-[3.8rem] max-w-4xl" style={{ color: "#ffffff" }}>
            {page.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{page.subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_38px_rgba(225,20,44,0.3)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark">
              Request a Site Walk <ArrowRight size={16} />
            </Link>
            <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="inline-flex items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:border-brand-gold/50">
              <Phone size={15} className="text-brand-gold" /> {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── About + services ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">Our Approach</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-brand-ink mb-6 md:text-4xl">
                Built around how your facility actually operates
              </h2>
              <p className="text-[15px] leading-relaxed text-body-text mb-6">{page.description}</p>
              <p className="text-[15px] leading-relaxed text-body-text">
                Every facility project we touch goes through a single project lead from preconstruction through closeout. You don&apos;t manage subcontractors — we do. You get weekly photo updates, budget accountability, and one call that solves everything.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm bg-brand-ink px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-brand-red">
                  Schedule a Consultation <ArrowRight size={15} />
                </Link>
                <Link href="/food-distribution-construction" className="inline-flex items-center gap-2 rounded-sm border border-brand-ink/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-brand-ink transition-all hover:border-brand-red hover:text-brand-red">
                  All Food Services
                </Link>
              </div>
            </div>

            <div className="rounded-md bg-secondary p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">What We Handle</span>
              </div>
              <div className="space-y-4">
                {page.services.map((svc) => (
                  <div key={svc} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand-red" />
                    <span className="text-[15px] font-medium text-brand-ink">{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why econstruct ── */}
      <section className="bg-brand-navy py-20 md:py-24 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Why econstruct</span>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Fast-Track Delivery", body: "We build around your operational schedule — nights, weekends, phased builds. Downtime is not acceptable." },
              { title: "Full-Scope Accountability", body: "One team from permits and design through final walk. No finger-pointing between trades." },
              { title: "Code & Compliance Expertise", body: "LADBS, LA County Health, USDA, fire marshal — we know every agency your facility needs to satisfy." },
              { title: "CA License #964015", body: "Licensed, bonded, and insured in California. 634 completed projects and 51 years of combined experience." },
            ].map((pillar) => (
              <div key={pillar.title} className="rounded-md border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other sub-pages ── */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">Also in This Division</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <Link key={other.slug} href={other.href} className="group flex items-center justify-between gap-4 rounded-md bg-white px-6 py-5 font-bold text-brand-ink shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:text-brand-red">
                <span className="font-display text-base">{other.title}</span>
                <ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
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
              Ready to move forward on your facility?
            </h2>
            <p className="mt-2 text-white/80 text-[15px]">Call or request a site walk — we respond same business day.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:text-white">
              Request a Site Walk
            </Link>
            <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="rounded-sm border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-white/10">
              {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
