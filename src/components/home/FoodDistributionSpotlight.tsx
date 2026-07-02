"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Thermometer, ChefHat, Factory, Package, Truck } from "lucide-react";
import { foodSubPages } from "@/lib/data/food-distribution";
import type { LucideIcon } from "lucide-react";

const ICONS: LucideIcon[] = [Warehouse, Thermometer, ChefHat, Factory, Factory, Package, Truck];

export default function FoodDistributionSpotlight() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 md:py-28">
      <div className="brand-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Header row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-14">
          <div className="max-w-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                Food Distribution
              </span>
            </div>
            <h2
              className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white md:text-[2.6rem]"
              style={{ color: "#ffffff" }}
            >
              Food Distribution
              <br />
              <span className="text-brand-gold">Construction</span> — Six Disciplines
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65">
              From cold storage warehouses and commissary kitchens to ghost kitchens and last-mile
              fulfillment — econstruct is Southern California&apos;s specialist for food facility
              construction. Built to code. Built fast. Operational on day one.
            </p>
          </div>

          <Link
            href="/food-distribution-construction"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-sm bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark md:self-auto"
          >
            Explore the Division
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Sub-page cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foodSubPages.map((page, i) => {
            const Icon = ICONS[i] ?? Warehouse;
            return (
              <motion.div
                key={page.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={page.href}
                  className="group flex items-start gap-4 rounded-md border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-brand-red/60 hover:bg-white/[0.08]"
                >
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5 text-brand-gold transition-colors group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-brand-gold">
                      {page.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55 line-clamp-2">
                      {page.services[0]} · {page.services[1]}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-red opacity-0 transition-all group-hover:opacity-100">
                      View Services <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
          <span>CA Lic #964015</span>
          <span className="h-4 w-px bg-white/20" />
          <span>Health Dept. Compliant Builds</span>
          <span className="h-4 w-px bg-white/20" />
          <span>Fast-Track Scheduling</span>
          <span className="h-4 w-px bg-white/20" />
          <span>Southern California</span>
        </div>
      </div>
    </section>
  );
}
