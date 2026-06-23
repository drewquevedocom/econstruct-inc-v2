"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  ShoppingBag,
  Building2,
  Warehouse,
  Home,
  PencilRuler,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { homeServices } from "@/lib/data/home";
import SectionHeading from "@/components/home/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Warehouse,
  ShoppingBag,
  Building2,
  Home,
  PencilRuler,
};

export default function ServicesIndustri() {
  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <SectionHeading
          eyebrow="What We Build"
          title="Five disciplines, one standard"
          intro="Commercial and residential work across Los Angeles — scoped, permitted, and delivered to a single bar for quality."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Building2;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="group flex flex-col overflow-hidden rounded-md bg-white shadow-[0_18px_40px_rgba(12,15,26,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(12,15,26,0.14)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 to-transparent" />
                  <span className="absolute bottom-0 left-6 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-md bg-brand-red text-white shadow-lg transition-colors duration-300 group-hover:bg-brand-ink">
                    <Icon size={24} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-12">
                  <h3 className="font-display text-xl font-bold leading-snug text-brand-ink transition-colors group-hover:text-brand-red">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body-text">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brand-ink transition-colors group-hover:text-brand-red"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
