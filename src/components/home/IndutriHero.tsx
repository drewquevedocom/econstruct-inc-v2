"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { ECONSTRUCT_INC } from "@/lib/constants";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function IndutriHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden">

      {/* ── Video ── directly in section, no wrapper z-index needed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
      >
        <source src="/hero-v2.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlays (sit above video via DOM order) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,11,18,0.92)_0%,rgba(8,11,18,0.72)_38%,rgba(8,11,18,0.28)_70%,rgba(8,11,18,0.45)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-brand-ink/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-ink to-transparent" />
      <div className="brand-grid absolute inset-0 opacity-30" />

      {/* ── Content (relative = sits above all absolute siblings) ── */}
      <div className="relative mx-auto w-full max-w-[1760px] px-6 pb-24 pt-44 md:px-10 md:pt-48">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-brand-gold">
              Los Angeles General Contractor · Since 2011
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[5.2rem]"
            style={{ color: "#ffffff" }}
          >
            Constructing Exceptional
            <br />
            Spaces to{" "}
            <span className="bg-gradient-to-r from-brand-red via-[#ff5b39] to-brand-gold bg-clip-text text-transparent">
              Live, Work, Shop &amp; Eat
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-white/80"
          >
            From restaurants and retail to offices, build-outs and luxury homes —
            econstruct delivers precision commercial &amp; residential construction
            across Los Angeles, on schedule and on budget.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/free-consultation"
              className="group inline-flex items-center gap-3 rounded-sm bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_38px_rgba(225,20,44,0.34)] transition-all hover:-translate-y-1 hover:bg-brand-red-dark"
            >
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-sm border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-brand-ink">
                <Play size={13} className="translate-x-px fill-current" />
              </span>
              View Our Work
            </Link>
          </motion.div>

          {/* Mini trust stats */}
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7"
          >
            {[
              { num: "634", label: "Lifetime Completed" },
              { num: "51", label: "Years of Combined Partner Experience" },
              { num: ECONSTRUCT_INC.stats.license, label: "Licensed & Bonded" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-extrabold text-white md:text-3xl">
                  {stat.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 hidden justify-center md:flex">
        <div className="scroll-cue-bounce flex flex-col items-center gap-1 text-white/55">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>

    </section>
  );
}
