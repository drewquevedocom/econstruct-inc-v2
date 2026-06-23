"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { homeTestimonials } from "@/lib/data/home";

function monogram(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function TestimonialsIndutri() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => {
      setSnaps(emblaApi.scrollSnapList());
      setSelected(emblaApi.selectedScrollSnap());
    };
    const raf = requestAnimationFrame(sync);
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 md:py-28">
      <div className="brand-grid absolute inset-0 opacity-40" />
      <Quote
        className="pointer-events-none absolute -right-6 top-10 text-white/[0.04]"
        size={240}
        strokeWidth={1}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[2.6rem]">
              Trusted by operators, architects &amp; homeowners
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-brand-red hover:bg-brand-red"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-brand-red hover:bg-brand-red"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {homeTestimonials.map((t) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="flex min-w-0 flex-[0_0_100%] flex-col rounded-md border border-white/10 bg-white/[0.04] p-8 md:flex-[0_0_47%] lg:flex-[0_0_31.5%]"
              >
                <div className="mb-4 flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red font-display text-sm font-bold text-white">
                    {monogram(t.name)}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold text-white">{t.name}</span>
                    <span className="block text-xs text-white/55">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-7 bg-brand-red" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
