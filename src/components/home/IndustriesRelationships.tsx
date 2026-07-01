"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Award } from "lucide-react";
import { industries } from "@/lib/data/industries";
import { homeAwards } from "@/lib/data/home";
import SectionHeading from "@/components/home/SectionHeading";

const POINTS = [
  "Single point of accountability from preconstruction to close-out",
  "Permit, plan-check and health-department expertise across LA",
  "Expert coordination of custom millwork, specialty trades, and long-lead materials to keep projects on schedule",
];

export default function IndustriesRelationships() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1500px] items-start gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy + bars */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Industries We Serve"
            title={<>We build where LA comes to work, shop &amp; eat</>}
          />
          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-body-text">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <Check size={13} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5">
            {industries.map((industry, i) => (
              <div key={industry.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-brand-ink">
                    {industry.name}
                  </span>
                  <span className="text-sm font-bold text-brand-red">{industry.strength}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-brand-ink/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${industry.strength}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-red to-brand-gold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: awards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-md bg-brand-navy p-8 md:p-10"
        >
          <div className="brand-grid pointer-events-none absolute inset-0 rounded-md opacity-30" />
          <div className="relative">
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-ink">
                <Award size={24} />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">Award-winning builder</p>
                <p className="text-sm text-white/60">Recognized across Los Angeles County</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {homeAwards.map((award) => (
                <div
                  key={`${award.title}-${award.year}`}
                  className="flex flex-col items-center rounded-md border border-white/10 bg-white/5 p-5 text-center"
                >
                  <div className="relative mb-4 h-24 w-24">
                    <Image
                      src={award.image}
                      alt={`${award.title} ${award.year}`}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <p className="font-display text-sm font-bold leading-snug text-white">
                    {award.title}
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    {award.place} · {award.year}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-sm leading-relaxed text-white/70">
              Voted <span className="font-bold text-brand-gold">Best Restaurant Contractor</span> in
              Santa Monica (2024) and Glendale (2022).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
