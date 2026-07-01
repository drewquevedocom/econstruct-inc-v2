"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Play, ArrowRight, X } from "lucide-react";

const FEATURES = [
  {
    title: "Precision project planning",
    body: "Preconstruction, budgeting and scheduling locked before we break ground.",
  },
  {
    title: "One accountable team",
    body: "A dedicated project lead from permits and trades through final close-out.",
  },
];

export default function SolutionAbout() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-2xl">
            <Image
              src="/Photorealistic_cinematic_interior_202604121940.png"
              alt="econstruct commercial build-out in Los Angeles"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-4 flex items-center gap-4 rounded-md bg-brand-red px-6 py-5 shadow-xl md:-right-8">
            <span className="font-display text-4xl font-extrabold leading-none text-white">51</span>
            <span className="text-sm font-semibold leading-tight text-white/90">
              Years of
              <br />
              LA experience
            </span>
          </div>
          {/* Play button */}
          <button
            onClick={() => setVideoOpen(true)}
            aria-label="Watch how we build"
            className="group absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-lg backdrop-blur transition-transform hover:scale-[1.03]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white transition-colors group-hover:bg-brand-ink">
              <Play size={16} className="translate-x-px fill-current" />
            </span>
            <span className="text-left text-xs font-bold uppercase tracking-wide text-brand-ink">
              Watch how
              <br />
              we build
            </span>
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
              Who We Are
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-[2.7rem]">
            The trusted team behind LA&apos;s most demanding builds
          </h2>
          <p className="mt-6 text-base leading-relaxed text-body-text md:text-[1.05rem]">
            We are a leading general contractor serving all of Los Angeles and the
            surrounding areas — specializing in restaurants, retail, office tenant
            improvement, food manufacturing, and luxury residential. With over 50 years
            of combined experience between our partners, we turn ambitious concepts into
            spaces that open on time and perform for years.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Check size={16} />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-brand-ink">{f.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-body-text">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-sm bg-brand-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-red"
            >
              More About econstruct
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              aria-label="Close video"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/LG9jy5Nt-So?autoplay=1"
                  title="Watch How We Build — econstruct"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
