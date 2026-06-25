import Link from "next/link";
import { ContactBand, PageHero } from "@/components/marketing";
import { getArchive } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Construction Blog | Los Angeles Insights | econstruct",
  description:
    "Construction insights from econstruct covering residential building, restaurant construction, ADUs, and local Los Angeles project considerations.",
  path: "/blog/",
});

export default function BlogPage() {
  const posts = getArchive("post");

  return (
    <>
      <PageHero
        kicker="Blog"
        title="Search-led content that still sounds like a serious contractor wrote it."
        description="The blog is built to preserve and expand organic demand around residential construction, local feasibility questions, and owner decision-making, without dropping into generic content sludge."
        image="/assets/photography/jobsite-hero.jpg"
        alt="Construction blog by econstruct"
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 xl:grid-cols-3 md:px-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}/`} className="border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{post.kicker}</p>
              <h2 className="pt-3 text-2xl uppercase text-[var(--sand)]">{post.title}</h2>
              <p className="pt-3 text-sm leading-7 text-[var(--muted-bright)]">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
