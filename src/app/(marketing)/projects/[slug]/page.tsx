/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ConsultationCTA from "@/components/ConsultationCTA";

const categoryLabels = {
  residential: "Residential",
  restaurant: "Restaurant",
  retail: "Retail",
  commercial: "Commercial",
} as const;

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return generatePageMetadata({
    title: `${project.title} | econstruct Project`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.images,
    keywords: [categoryLabels[project.category], project.neighborhood, project.specs.scope].filter(Boolean),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
    { name: project.title, url: `${SITE_URL}/projects/${project.slug}` },
  ]);

  const statCards = [
    ["Category", categoryLabels[project.category]],
    ["Neighborhood", project.neighborhood],
    ...(project.specs.scope ? [["Scope", project.specs.scope]] : []),
    ...(project.specs.sqft ? [["Size", `${project.specs.sqft} sq ft`]] : []),
    ...(project.specs.timeline ? [["Timeline", project.specs.timeline]] : []),
    ...(project.specs.value ? [["Value", project.specs.value]] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, projectSchema]) }}
      />

      <PageHero
        title={project.title}
        subtitle={project.description}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        backgroundImage={project.heroImage}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge={["Project", "Snapshot"]}
            title="Verified Project Details"
            subtitle="This page is built from the migrated legacy portfolio entry and its associated project imagery."
            centered={false}
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map(([label, value], index) => (
              <AnimatedSection key={label} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">
                    {label}
                  </p>
                  <p className="mt-4 text-lg font-bold text-brand-dark">
                    {value}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedSection>
              <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold">
                  Overview
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
                  Legacy Portfolio Summary
                </h2>
                <p className="mt-6 leading-relaxed text-body-text">
                  {project.description}
                </p>
                {project.testimonial && (
                  <div className="mt-8 rounded-2xl bg-[#f8f6f2] p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-gold">
                      Client Perspective
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-body-text">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">
                      {project.testimonial.name}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-[2rem] bg-brand-dark p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold">
                  Available Media
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {project.images.length} Project Image{project.images.length === 1 ? "" : "s"}
                </h2>
                <ul className="mt-8 space-y-4 text-white/80">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gold" />
                    <span>Original neighborhood: {project.neighborhood}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gold" />
                    <span>Construction category: {categoryLabels[project.category]}</span>
                  </li>
                  {project.specs.scope && (
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent-gold" />
                      <span>Primary scope: {project.specs.scope}</span>
                    </li>
                  )}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/projects"
                    className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-accent-gold"
                  >
                    Back to Projects
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-[#F8F6F2] py-24 md:py-32">
        <Container>
          <SectionHeader
            badge={["Gallery", "Images"]}
            title="Migrated Project Gallery"
            subtitle="These images are carried over from the legacy portfolio entry and rendered in the new layout."
            centered={false}
            className="mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <AnimatedSection key={`${project.slug}-${index}`} delay={index * 0.06}>
                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
