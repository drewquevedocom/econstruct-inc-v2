"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

const FEATURED_SLUGS = [
  "hutchinson-cocktails-and-grill",
  "hals-bar-and-grill",
  "el-pollo-loco",
  "rothys",
  "jersey-mikes-subs",
  "koala-t-cafe",
  "odd-one-out",
  "devista-project",
];

const featured = FEATURED_SLUGS.map((slug) =>
  projects.find((p) => p.slug === slug)
).filter((p): p is (typeof projects)[number] => Boolean(p));

export default function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-[2.6rem]">
              Projects we&apos;ll let speak for themselves
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
            <Link
              href="/projects"
              className="ml-2 hidden items-center gap-2 rounded-sm bg-brand-ink px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-red sm:inline-flex"
            >
              View All
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {featured.map((project) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_31%]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-md shadow-md"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-sm bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {project.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
                      {project.neighborhood}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-white">
                      {project.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/0 transition-all duration-300 group-hover:text-white">
                      View project
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
