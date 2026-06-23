"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { ECONSTRUCT_INC } from "@/lib/constants";

export default function QuoteStrip() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-md bg-brand-red px-7 py-8 shadow-[0_30px_70px_rgba(225,20,44,0.28)] md:px-12"
        >
          {/* decorative grid */}
          <div className="brand-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <h2
              className="font-display text-2xl font-extrabold leading-tight text-white md:text-[2rem]"
              style={{ color: "#ffffff" }}
            >
              Need a quality contractor
              <br className="hidden sm:block" /> for your next project?
            </h2>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-sm bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-red transition-all hover:-translate-y-1 hover:bg-brand-ink hover:text-white"
            >
              Contact Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-4 border-t border-white/25 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <Phone size={24} />
              </span>
              <div>
                <a
                  href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
                  className="block font-display text-2xl font-extrabold text-white transition-colors hover:text-brand-gold"
                >
                  {ECONSTRUCT_INC.phone.primary}
                </a>
                <p className="text-[13px] font-medium text-white/80">
                  Call for a fast, no-obligation estimate
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
