/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { projects } from "@/lib/data/projects";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ConsultationCTA from "@/components/ConsultationCTA";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects | econstruct Portfolio",
  description:
    "Explore 19 migrated econstruct portfolio projects across residential, restaurant, retail, and commercial construction.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | econstruct Portfolio",
    description:
      "Legacy econstruct portfolio projects migrated into the new website format, including residential, restaurant, retail, and commercial work.",
    url: `${SITE_URL}/projects`,
    images: [{ url: "/projects/devista-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | econstruct Portfolio",
    description: "19 legacy econstruct projects migrated into the new site.",
    images: ["/projects/devista-hero.jpg"],
  },
};

const categoryLabels = {
  residential: "Residential",
  restaurant: "Restaurant",
  retail: "Retail",
  commercial: "Commercial",
} as const;

const categoryColors = {
  residential: "bg-accent-gold/12 text-accent-gold",
  restaurant: "bg-emerald-500/10 text-emerald-700",
  retail: "bg-blue-500/10 text-blue-700",
  commercial: "bg-brand-dark/8 text-brand-dark",
} as const;

const featuredProject =
  projects.find((project) => project.slug === "mulholland-drive-residence") ??
  projects.find((project) => project.featured) ??
  projects[0];

const remainingProjects = projects.filter((project) => project.slug !== featuredProject.slug);

export default function ProjectsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "econstruct Portfolio Projects",
    description: "Migrated econstruct portfolio projects spanning residential and commercial construction.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <PageHero
        title="Legacy Portfolio, Rebuilt for the New Site"
        subtitle="All 19 projects from the previous econstruct portfolio have been migrated into the new format across residential, restaurant, retail, and commercial work."
        breadcrumbs={[{ label: "Projects" }]}
        backgroundImage={featuredProject.heroImage}
        stats={[
          { value: "19", label: "Migrated Projects" },
          { value: "4", label: "Project Sectors" },
          { value: "CA #964015", label: "Licensed GC" },
        ]}
      />

      <section className="bg-[#f6f2ea] py-20 md:py-28">
        <Container>
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent-gold">
            Featured Project
          </p>

          <Link
            href={`/projects/${featuredProject.slug}`}
            className="group block overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)] lg:grid lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[520px]">
              <img
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute left-6 top-6">
                <span
                  className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] ${
                    categoryColors[featuredProject.category]
                  }`}
                >
                  {categoryLabels[featuredProject.category]}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-gold">
                  {featuredProject.neighborhood}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <h2 className="font-heading text-[1.85rem] leading-[1.08] tracking-tight text-brand-dark md:text-[2.2rem]">
                  {featuredProject.title}
                </h2>
                <p className="mt-5 text-[0.95rem] leading-[1.75] text-black/60">
                  {featuredProject.description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 border-t border-black/8 pt-8 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <div>
                  <p className="text-black/35">Category</p>
                  <p className="mt-1 text-brand-dark">{categoryLabels[featuredProject.category]}</p>
                </div>
                <div>
                  <p className="text-black/35">Location</p>
                  <p className="mt-1 text-brand-dark">{featuredProject.neighborhood}</p>
                </div>
                {featuredProject.specs.scope && (
                  <div>
                    <p className="text-black/35">Scope</p>
                    <p className="mt-1 text-brand-dark">{featuredProject.specs.scope}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-gold transition-colors group-hover:text-brand-dark">
                View Project
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col gap-4 min-[700px]:flex-row min-[700px]:items-end min-[700px]:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent-gold">
                All Projects
              </p>
              <h2 className="font-heading text-[2.2rem] leading-tight tracking-tight text-brand-dark md:text-[2.8rem]">
                Complete Migrated Portfolio
              </h2>
            </div>
            <p className="max-w-md text-[0.9rem] leading-[1.7] text-black/50">
              Each card below is now mapped to the legacy portfolio project data and images rather than the temporary residential prompt set.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {remainingProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm ${
                        categoryColors[project.category]
                      }`}
                    >
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-gold">
                      {project.neighborhood}
                    </p>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="font-heading text-[1.35rem] leading-snug tracking-tight text-brand-dark">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[0.875rem] leading-[1.72] text-black/55 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 border-t border-black/8 pt-5">
                    {project.specs.scope && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-accent-gold" />
                        {project.specs.scope}
                      </span>
                    )}
                    {project.specs.sqft && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-accent-gold" />
                        {project.specs.sqft} sq ft
                      </span>
                    )}
                    {project.specs.timeline && (
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-black/45">
                        <span className="h-1 w-1 rounded-full bg-accent-gold" />
                        {project.specs.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-accent-gold transition-colors group-hover:text-brand-dark">
                    View Project
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
