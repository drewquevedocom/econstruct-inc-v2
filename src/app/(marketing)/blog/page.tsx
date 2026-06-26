import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogPagination from "@/components/blog/BlogPagination";
import {
  getAllBlogPosts,
  getBlogArchiveSummary,
  getBlogIndexPages,
  paginatePosts,
} from "@/lib/blog";
import { generateBlogBreadcrumbSchema } from "@/lib/blog/schema";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Blog | Construction Insights for Restaurant, Retail & Luxury Builds | econstruct",
  description:
    "Expert guidance on restaurant construction, retail build-outs, office TI, fire rebuilds, luxury remodels, and ADUs across Los Angeles from econstruct's project team.",
  alternates: {
    canonical: "https://econstructinc.com/blog",
  },
  openGraph: {
    title: "Restaurant, Commercial & Luxury Construction Insights | econstruct LA",
    description:
      "Field-tested construction guidance on restaurant, retail, TI, fire rebuild, and luxury home projects across Los Angeles.",
    url: "https://econstructinc.com/blog",
    images: [{ url: "/blog/blog_08_vet_contractor_og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant, Commercial & Construction Insights | econstruct LA",
    description:
      "Expert rebuild, modernization, and custom home guidance from active Los Angeles job sites.",
    images: ["/blog/blog_08_vet_contractor_og.png"],
  },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page ?? "1", 10) || 1);

  const allPosts = getAllBlogPosts();
  const featuredPost = currentPage === 1 ? allPosts[0] : null;
  const remainingPosts = allPosts.slice(1);
  const pagedPosts = paginatePosts(remainingPosts, currentPage);
  const totalPages = getBlogIndexPages(remainingPosts.length);

  const breadcrumbSchema = generateBlogBreadcrumbSchema([
    { name: "Home", url: "https://econstructinc.com" },
    { name: "Blog", url: "https://econstructinc.com/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="Construction Insights"
        subtitle="Expert guidance on restaurant build-outs, retail TI, office construction, fire rebuilds, and commercial projects across Los Angeles from econstruct's project team."
        breadcrumbs={[{ label: "Blog" }]}
        backgroundImage="/hollywood_hills.png"
      />

      <section className="bg-secondary py-16 md:py-20">
        <Container>
          <BlogFilters />
        </Container>
      </section>

      {featuredPost && (
        <section className="py-16 md:py-20">
          <Container>
            <div className="mb-8 flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold">
                  Latest From The Field
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
                  Featured Analysis
                </h2>
              </div>
              <Link
                href="/contact"
                className="hidden rounded-full border border-brand-dark/12 px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:border-accent-gold hover:text-accent-gold md:inline-flex"
              >
                Ask About Your Project
              </Link>
            </div>
            <PostCard post={featuredPost} featured />
          </Container>
        </section>
      )}

      <section className="pb-20 md:pb-24">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold">
              {currentPage === 1 ? "Archive" : `Page ${currentPage}`}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Tactical Articles for Owners and Advisors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body-text">
              {getBlogArchiveSummary()}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {pagedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalPosts={remainingPosts.length}
            postsPerPage={POSTS_PER_PAGE}
            basePath="/blog"
          />

          {currentPage === 1 && (
            <div className="mt-14 rounded-[2rem] bg-brand-dark px-8 py-10 text-white md:px-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold">
                    Newsletter
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                    Get the econstruct Newsletter
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72">
                    Monthly insight on restaurant construction, commercial TI, permits, and LA build costs from active econstruct job sites.
                    Use our contact page and we will add you to the list.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6">
                  <p className="text-sm leading-relaxed text-white/72">
                    Tell us your neighborhood, project type, and timeline. We will route you to the
                    right rebuild or modernization contact.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-dark"
                  >
                    Join via Contact
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
