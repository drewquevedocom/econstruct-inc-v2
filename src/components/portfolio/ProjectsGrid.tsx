/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/data/projects";
import type { Project } from "@/lib/data/projects";
import Container from "@/components/ui/Container";

const categoryColors: Record<Project["category"], string> = {
  residential: "bg-brand-gold/15 text-brand-ink",
  restaurant: "bg-emerald-500/10 text-emerald-700",
  retail: "bg-blue-500/10 text-blue-700",
  commercial: "bg-brand-dark/8 text-brand-dark",
};

const categoryLabels: Record<Project["category"], string> = {
  residential: "Residential",
  restaurant: "Restaurant & Bar",
  retail: "Retail",
  commercial: "Commercial",
};

export default function ProjectsGrid() {
  const [active, setActive] = useState<"all" | Project["category"]>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <section className="bg-secondary py-8 sticky top-0 z-10 border-b border-black/5 shadow-sm">
        <Container>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActive("all")}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                active === "all"
                  ? "bg-brand-ink text-white shadow-md"
                  : "bg-white text-brand-ink/60 hover:text-brand-ink border border-black/8"
              }`}
            >
              All Projects
              <span className={`ml-2 text-[10px] ${active === "all" ? "text-brand-gold" : "text-brand-ink/40"}`}>
                ({projects.length})
              </span>
            </button>
            {projectCategories.filter((c) => c.value !== "all").map((cat) => {
              const count = projects.filter((p) => p.category === cat.value).length;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value as Project["category"])}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                    active === cat.value
                      ? "bg-brand-red text-white shadow-md"
                      : "bg-white text-brand-ink/60 hover:text-brand-ink border border-black/8"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-2 text-[10px] ${active === cat.value ? "text-white/70" : "text-brand-ink/40"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  {project.featured && (
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ink shadow">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute left-4 top-4">
                    <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm ${categoryColors[project.category]}`}>
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-gold">
                      {project.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-brand-ink transition-colors group-hover:text-brand-red">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.72] text-black/55 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-black/8 pt-4">
                    {project.specs.scope && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                        {project.specs.scope}
                      </span>
                    )}
                    {project.specs.sqft && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                        {project.specs.sqft} sq ft
                      </span>
                    )}
                    {project.specs.timeline && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                        {project.specs.timeline}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-red">
                    View Project <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="py-20 text-center text-body-text">No projects in this category yet.</div>
          )}
        </Container>
      </section>
    </>
  );
}
