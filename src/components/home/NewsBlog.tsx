import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function NewsBlog() {
  const posts = getAllBlogPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
                Field Notes
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-[2.6rem]">
              News &amp; insights from the field
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 self-start rounded-sm border border-brand-ink/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-brand-ink transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
          >
            View All Posts
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {/* Featured */}
          <AnimatedSection>
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-md bg-secondary shadow-[0_18px_40px_rgba(12,15,26,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(12,15,26,0.14)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.heroImage}
                  alt={featured.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 flex items-center gap-2 rounded-sm bg-brand-red px-3 py-1.5 text-[11px] font-bold text-white">
                  <CalendarDays size={13} />
                  {featured.formattedDate}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-bold leading-snug text-brand-ink transition-colors group-hover:text-brand-red">
                  {featured.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body-text">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-ink transition-colors group-hover:text-brand-red">
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Two compact */}
          <div className="flex flex-col gap-7">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={(i + 1) * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-5 overflow-hidden rounded-md bg-secondary p-3 shadow-[0_18px_40px_rgba(12,15,26,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(12,15,26,0.12)]"
                >
                  <div className="relative h-32 w-40 shrink-0 overflow-hidden rounded-sm sm:h-36 sm:w-48">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-1 pr-3">
                    <span className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-red">
                      <CalendarDays size={12} />
                      {post.formattedDate}
                    </span>
                    <h3 className="font-display text-base font-bold leading-snug text-brand-ink transition-colors group-hover:text-brand-red sm:text-lg">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
