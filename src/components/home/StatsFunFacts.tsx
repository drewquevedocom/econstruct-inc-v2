"use client";

import { motion } from "framer-motion";
import { Building2, CalendarClock, LayoutGrid, Award } from "lucide-react";
import CountUp from "@/components/home/CountUp";

const STATS = [
  { Icon: Building2, end: 634, suffix: "", label: "Projects Completed" },
  { Icon: CalendarClock, end: 51, suffix: "", label: "Years of Experience" },
  { Icon: LayoutGrid, end: 5, suffix: "", label: "Industries Served" },
  { Icon: Award, end: 2, suffix: "×", label: "Best Contractor Awards" },
];

export default function StatsFunFacts() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 md:py-24">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
        style={{ backgroundImage: "url('/fleet-of-trucks.png')" }}
      />
      <div className="brand-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand-gold">
                <stat.Icon size={28} />
              </span>
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                className="font-display text-4xl font-extrabold text-white md:text-5xl"
              />
              <span className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 md:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
