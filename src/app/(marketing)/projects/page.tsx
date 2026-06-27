import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { projects } from "@/lib/data/projects";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Work | Restaurant, Retail & Commercial Construction Projects | econstruct",
  description:
    "Browse econstruct's completed restaurant, retail, and commercial construction projects across Los Angeles. From Hutchinson Cocktails to Jersey Mike's — see the work.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Restaurant, Retail & Commercial Projects | econstruct Los Angeles",
    description: "econstruct's project portfolio spans restaurants, bars, retail stores, and multi-location commercial build-outs across Los Angeles.",
    url: `${SITE_URL}/projects`,
    images: [{ url: "/projects/hutchinson11.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Construction Projects | econstruct LA",
    description: "Restaurant, retail, and commercial build-outs by econstruct across Los Angeles.",
    images: ["/projects/hutchinson11.jpg"],
  },
};

export default function ProjectsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "econstruct Portfolio Projects",
    description: "econstruct commercial construction projects spanning restaurants, retail, and tenant improvements across Los Angeles.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${SITE_URL}/projects/${project.slug}`,
      image: project.heroImage,
      description: project.description,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <section className="relative flex min-h-[44vh] items-end overflow-hidden bg-brand-ink pt-36 pb-14">
        <div className="brand-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-ink to-transparent" />
        <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">Selected Work</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-[3.5rem]" style={{ color: "#ffffff" }}>
            Projects We&apos;ll Let Speak for Themselves
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Restaurant build-outs, retail fit-outs, commercial TI, and multi-location projects completed across Los Angeles.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
            <span><span className="font-bold text-white">634+</span> Projects Completed</span>
            <span className="hidden sm:inline">·</span>
            <span><span className="font-bold text-white">CA #964015</span> Licensed GC</span>
            <span className="hidden sm:inline">·</span>
            <span><span className="font-bold text-white">Since 2001</span> Building in LA</span>
          </div>
        </div>
      </section>

      {/* Interactive filter + grid */}
      <ProjectsGrid />

      {/* CTA */}
      <section className="bg-brand-red py-16 md:py-20 relative overflow-hidden">
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>
              Ready to start your project?
            </h2>
            <p className="mt-2 text-white/80 text-[15px]">We&apos;d love to show you more. Let&apos;s talk about your space.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact" className="rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red transition-all hover:-translate-y-0.5 hover:bg-brand-ink hover:text-white">
              Get in Touch
            </Link>
            <Link href="/free-consultation" className="rounded-sm border border-white/40 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-white/10">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
