import Link from "next/link";
import { ContactBand, PageHero } from "@/components/marketing";
import { featuredProjects, getArchive } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Selected Work | econstruct",
  description:
    "Selected construction work from econstruct across luxury residential, restaurant, retail, and commercial build-outs in Los Angeles.",
  path: "/our-work/",
});

export default function WorkPage() {
  const caseStudies = getArchive("case-study");

  return (
    <>
      <PageHero
        kicker="Selected Work"
        title="Proof matters more than posturing."
        description="A premium construction site should show the reader what the team can actually carry, not just what it says in a headline. This section is designed to grow with new case studies, photography, and launch stories."
        image="/assets/photography/bar-construction.png"
        alt="Selected construction work by econstruct"
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/${project.slug}/`} className="border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{project.tag}</p>
              <h2 className="pt-3 text-3xl uppercase text-[var(--sand)]">{project.title}</h2>
              <p className="pt-3 text-sm leading-7 text-[var(--muted-bright)]">{project.location}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-space bg-[var(--night-2)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 space-y-3">
            <p className="eyebrow">Case Studies</p>
            <h2 className="section-title">Use project pages to support both conversion and rankings.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((page) => (
              <Link key={page.slug} href={`/${page.slug}/`} className="border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{page.kicker}</p>
                <h3 className="pt-3 text-2xl uppercase text-[var(--sand)]">{page.title}</h3>
                <p className="pt-3 text-sm leading-7 text-[var(--muted-bright)]">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
