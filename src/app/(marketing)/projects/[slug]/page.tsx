/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Layers, Ruler, Clock, Phone } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ECONSTRUCT_INC, SITE_URL } from "@/lib/constants";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import ConsultationCTA from "@/components/ConsultationCTA";

const categoryLabels = {
  residential: "Residential",
  restaurant: "Restaurant & Bar",
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
    description: project.tagline,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
  });
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
  return match ? match[1] : null;
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

  const specCards = [
    { label: "Category", value: categoryLabels[project.category], icon: Layers },
    ...(project.neighborhood ? [{ label: "Neighborhood", value: project.neighborhood, icon: MapPin }] : []),
    ...(project.specs.scope ? [{ label: "Scope", value: project.specs.scope, icon: Ruler }] : []),
    ...(project.specs.sqft ? [{ label: "Size", value: `${project.specs.sqft} sq ft`, icon: Ruler }] : []),
    ...(project.specs.timeline ? [{ label: "Timeline", value: project.specs.timeline, icon: Clock }] : []),
    ...(project.specs.value ? [{ label: "Value", value: project.specs.value, icon: Ruler }] : []),
  ];

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const youtubeId = project.video ? getYouTubeId(project.video) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, projectSchema]) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-brand-ink pt-36 pb-14">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-brand-ink/40" />
        <div className="brand-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-brand-gold"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>
          <span className="inline-block rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            {categoryLabels[project.category]}
          </span>
          <h1
            className="mt-5 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white md:text-[3.4rem]"
            style={{ color: "#ffffff" }}
          >
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{project.tagline}</p>
          {project.neighborhood && (
            <p className="mt-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
              <MapPin size={14} />
              {project.neighborhood}
            </p>
          )}
        </div>
      </section>

      {/* Spec cards */}
      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specCards.map((card, index) => (
              <AnimatedSection key={card.label} delay={index * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <card.icon size={20} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                      {card.label}
                    </p>
                    <p className="mt-1 text-base font-bold text-brand-ink">{card.value}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview + testimonial */}
      <section className="bg-secondary py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedSection>
              <div className="rounded-3xl border border-black/8 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">Overview</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold text-brand-ink md:text-3xl">
                  The Project
                </h2>
                <p className="mt-5 leading-relaxed text-body-text">{project.description}</p>
                {project.testimonial && (
                  <div className="mt-8 rounded-2xl bg-secondary p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                      Client Perspective
                    </p>
                    <p className="mt-3 text-lg leading-relaxed text-brand-ink">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-body-text">
                      {project.testimonial.name}
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl bg-brand-ink p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Ready to Start?</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>
                  Let&apos;s talk about your project
                </h2>
                <p className="mt-4 text-white/70">
                  Tell us what you&apos;re building. We&apos;ll bring the same discipline to your project that you see here.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/free-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-brand-red-dark"
                  >
                    Get a Free Quote
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-white/10"
                  >
                    <Phone size={15} />
                    {ECONSTRUCT_INC.phone.primary}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Top-level video (only when the project has no separate parts) */}
      {!project.parts && youtubeId && (
        <section className="bg-brand-navy py-16 md:py-24">
          <Container>
            <AnimatedSection>
              <div className="mb-8 text-center">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="h-px w-9 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Project Video</span>
                  <span className="h-px w-9 bg-brand-red" />
                </div>
                <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl" style={{ color: "#ffffff" }}>
                  See it in motion
                </h2>
              </div>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={`${project.title} project video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* During-construction photos, shown above the main gallery */}
      {project.constructionImages && project.constructionImages.length > 0 && (
        <section className="bg-secondary py-20 md:py-24">
          <Container>
            <AnimatedSection>
              <div className="mb-12 text-center">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="h-px w-9 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">During Construction</span>
                  <span className="h-px w-9 bg-brand-red" />
                </div>
                <h2 className="font-display text-2xl font-extrabold text-brand-ink md:text-3xl">Behind the Build</h2>
              </div>
            </AnimatedSection>
            <GalleryLightbox
              images={project.constructionImages.map((image) => ({ src: image, alt: `${project.title} during construction` }))}
              gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            />
          </Container>
        </section>
      )}

      {/* Multi-part projects: each scope gets its own labeled section */}
      {project.parts ? (
        project.parts.map((part, partIndex) => {
          const partVideoId = part.video ? getYouTubeId(part.video) : null;
          return (
            <section
              key={part.title}
              className={partIndex % 2 === 0 ? "bg-white py-20 md:py-28" : "bg-secondary py-20 md:py-28"}
            >
              <Container>
                <AnimatedSection>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-9 bg-brand-red" />
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                      Scope {partIndex + 1} of {project.parts!.length}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-extrabold text-brand-ink md:text-3xl">
                    {part.title}
                  </h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-body-text">{part.description}</p>
                </AnimatedSection>

                {partVideoId && (
                  <AnimatedSection delay={0.1}>
                    <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl shadow-xl">
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${partVideoId}`}
                          title={`${part.title} video`}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                )}

                <div className="mt-10">
                  <GalleryLightbox
                    images={part.images.map((image, index) => ({ src: image, alt: `${part.title} photo ${index + 1}` }))}
                    gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  />
                </div>
              </Container>
            </section>
          );
        })
      ) : (
        <section className="bg-white py-20 md:py-28">
          <Container>
            <AnimatedSection>
              <div className="mb-12 text-center">
                <div className="mb-3 flex items-center justify-center gap-3">
                  <span className="h-px w-9 bg-brand-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">Gallery</span>
                  <span className="h-px w-9 bg-brand-red" />
                </div>
                <h2 className="font-display text-2xl font-extrabold text-brand-ink md:text-3xl">
                  {project.images.length} Project Photo{project.images.length === 1 ? "" : "s"}
                </h2>
              </div>
            </AnimatedSection>
            <GalleryLightbox
              images={project.images.map((image, index) => ({ src: image, alt: `${project.title} photo ${index + 1}` }))}
              gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            />
          </Container>
        </section>
      )}

      {/* Other projects */}
      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <AnimatedSection>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">More Projects</span>
            </div>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherProjects.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                        {p.neighborhood}
                      </p>
                      <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
