"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

/** General portfolio rotation — dramatic tones, no bright whites that cause glow */
const GENERAL_IMAGES = [
  { src: "/projects/hutchinson11.jpg",              alt: "Hutchinson Cocktails & Grill — La Cienega, Los Angeles" },
  { src: "/projects/01_Starbucks.jpg",               alt: "SBUX Lancaster — ground-up construction" },
  { src: "/projects/01_TheFix.jpg",                  alt: "The Fix Wellness Lounge — Hermosa Beach" },
  { src: "/projects/JOETHEJUICE_1-scaled.webp",      alt: "Joe & The Juice — Southern California" },
  { src: "/projects/devista-hero.jpg",                alt: "Devista Project — custom home" },
  { src: "/projects/85c_Distribution_2.jpg",         alt: "85°C distribution center — Buena Park" },
];

/** Shown on /food-distribution-construction pages */
const FOOD_DISTRIBUTION_IMAGES = [
  { src: "/projects/85c_Distribution_2.jpg",                                                                                  alt: "85°C distribution center — Buena Park" },
  { src: "/projects/Cold Storage & Refrigerated Glacier_Logistics_facility_aeria…_202607081201.jpeg",                          alt: "Cold storage & distribution facility — aerial view" },
  { src: "/projects/temp/food-manufacturing-plant/02.jpeg",                                                                    alt: "Food manufacturing facility — twilight exterior" },
];

/** Shown on /services/restaurant-bar-construction */
const RESTAURANT_IMAGES = [
  { src: "/projects/hutchinson11.jpg",         alt: "Hutchinson Cocktails & Grill — La Cienega, Los Angeles" },
  { src: "/projects/Hals_pv_12-scaled.jpg",    alt: "Hal's Bar and Grill" },
  { src: "/projects/800degrees_1.webp",        alt: "800 Degrees Woodfired Kitchen" },
  { src: "/projects/01_Starbucks.jpg",         alt: "SBUX Lancaster — ground-up construction" },
];

/** Shown on /services/retail-tenant-improvement */
const RETAIL_IMAGES = [
  { src: "/projects/JOETHEJUICE_1-scaled.webp",                    alt: "Joe & The Juice — Southern California" },
  { src: "/projects/temp/amouage-flagship-boutique/01.jpeg",       alt: "Amouage Flagship Boutique — Beverly Hills" },
  { src: "/projects/Untitled-design-84.webp",                      alt: "Rothy's retail build-out" },
];

/** Shown on /services/office-tenant-improvement */
const OFFICE_IMAGES = [
  { src: "/blog/85c-distribution-11-600x600.jpg",         alt: "Corporate office interior build-out" },
  { src: "/blog/85c-distribution-12-600x600.jpg",         alt: "Corporate office interior build-out" },
  { src: "/blog/85c-distribution-14-600x600.jpg",         alt: "Office cubicle build-out" },
  { src: "/blog/85c-distribution-16-600x600.jpg",         alt: "Corporate conference room build-out" },
];

/** Shown on custom homes, ADU, luxury modernization, fire rebuild, and all residential /services/[slug] pages */
const RESIDENTIAL_IMAGES = [
  { src: "/projects/01_SanVincenteADU.jpg",     alt: "Santa Monica ADU" },
  { src: "/projects/devista-hero.jpg",          alt: "Devista Project" },
  { src: "/projects/saddlebow-54-hero.jpg",     alt: "54 Saddlebow Rd" },
  { src: "/projects/newcomb-road-hero.jpg",     alt: "Newcomb Road residence" },
  { src: "/projects/marine-ave-hero.jpg",       alt: "Lawndale Condo" },
];

const INTERVAL_MS = 5000; // 5 s per image

const CTA_COPY = [
  {
    match: (p: string) => p === "/",
    eyebrow: "Los Angeles",
    title: ["Ready to Build", "the Extraordinary?"],
    body: "Restaurants, retail, offices, custom homes — we build for clients who expect precision, speed, and premium execution.",
    button: "Get A Quote",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/projects"),
    eyebrow: "Case Studies",
    title: ["Ready to Start", "Your Own Signature Project?"],
    body: "If the work speaks to you, the next move is simple. Bring us your site, your plans, or your idea and we will shape the path forward.",
    button: "Start Your Project",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/food-distribution"),
    eyebrow: "Food Facility Construction",
    title: ["Ready to Talk", "About Your Facility?"],
    body: "Tell us the scope, the timeline, and the operational constraints. We'll build around all three.",
    button: "Request a Site Walk",
    href: "/food-distribution-construction/site-walk",
    images: FOOD_DISTRIBUTION_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/services/restaurant-bar-construction"),
    eyebrow: "Restaurant & Bar Construction",
    title: ["Need the Right Team", "for Your Next Opening?"],
    body: "Kitchens, bars, and MEP coordinated to hit your opening day. Let's talk about your concept.",
    button: "Book a Consultation",
    href: "/free-consultation",
    images: RESTAURANT_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/services/retail-tenant-improvement"),
    eyebrow: "Retail Tenant Improvement",
    title: ["Need the Right Team", "for Your Storefront?"],
    body: "Custom millwork and brand-perfect finishes delivered on tight launch schedules. Let's talk about yours.",
    button: "Book a Consultation",
    href: "/free-consultation",
    images: RETAIL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/services/office-tenant-improvement"),
    eyebrow: "Office Tenant Improvement",
    title: ["Need the Right Team", "for Your Build-Out?"],
    body: "Permit support, MEP coordination, and clean turnover. Let's talk about your space.",
    button: "Book a Consultation",
    href: "/free-consultation",
    images: OFFICE_IMAGES,
  },
  {
    match: (p: string) => p === "/services",
    eyebrow: "Los Angeles Services",
    title: ["Need the Right Team", "for a Demanding Project?"],
    body: "Every project type on our services page has been managed, permitted, and delivered by this team. Let's talk about yours.",
    button: "Book a Consultation",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/services"),
    eyebrow: "Los Angeles Services",
    title: ["Need the Right Team", "for a Demanding Project?"],
    body: "Custom homes, ADUs, luxury modernizations, and fire rebuilds — managed, permitted, and delivered by one team. Let's talk about yours.",
    button: "Book a Consultation",
    href: "/free-consultation",
    images: RESIDENTIAL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/about"),
    eyebrow: "Leadership",
    title: ["Ready to Work", "Directly with econstruct?"],
    body: "When the project is high-stakes, you need more than a contractor. You need a construction partner who leads from the front.",
    button: "Talk With Our Team",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
  {
    match: (p: string) => p.startsWith("/contact"),
    eyebrow: "Contact",
    title: ["Let's Turn", "the Vision into a Plan."],
    body: "Tell us what you are building, rebuilding, or reimagining. We will help you define the smartest next step.",
    button: "Request a Consultation",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
  {
    match: () => true,
    eyebrow: "Los Angeles",
    title: ["Bring Us the Project", "That Actually Matters."],
    body: "From first planning conversations to final delivery, we build for clients who expect precision, speed, and premium execution.",
    button: "Get A Quote",
    href: "/free-consultation",
    images: GENERAL_IMAGES,
  },
] as const;

export default function GatekeeperCTA() {
  const pathname = usePathname();
  const copy = CTA_COPY.find((item) => item.match(pathname)) ?? CTA_COPY[CTA_COPY.length - 1];

  // ── Rotating images (theme-matched to the current page section) ──
  const images = copy.images;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    if (isReducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isReducedMotion, images]);

  // ── Parallax ─────────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Image moves 20% slower than scroll → classic parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(680px, 110vh, 1000px)" }}
    >
      {/* ── Parallax image stack ── */}
      <motion.div
        className="absolute inset-0 bg-black will-change-transform"
        style={{ y: isReducedMotion ? "0%" : imageY, scale: 1.2 }}
      >
        {/*
          Glow-free crossfade: old image stays at full opacity underneath
          while the new one fades IN on top. No exit animation = no partial-
          transparency moment where bright backgrounds show through.
        */}
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            className="absolute inset-0"
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-[rgba(4,7,12,0.52)]" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(180deg,transparent_0%,rgba(4,7,12,0.65)_100%)]" />

      {/* ── Image indicator dots ── */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2 md:bottom-10 md:right-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex ? "w-6 bg-brand-gold" : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="absolute inset-0 flex items-end px-5 pb-10 md:px-14 md:pb-14">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold/90"
            >
              {copy.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-extrabold leading-[0.93] tracking-tight text-white"
              style={{
                fontSize: "clamp(2.5rem, 5.2vw, 5.25rem)",
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)",
                color: "#ffffff",
              }}
            >
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white md:text-[1.35rem]"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              {copy.body}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link
              href={copy.href}
              className="group inline-flex items-center gap-3 rounded-full border border-brand-gold/55 bg-[rgba(17,20,25,0.74)] px-8 py-5 text-base font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:text-brand-dark hover:shadow-2xl hover:shadow-brand-gold/25 active:scale-95"
            >
              {copy.button}
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/12 transition-colors duration-300 group-hover:bg-brand-dark/10">
                <ArrowUpRight size={15} className="text-white group-hover:text-brand-dark" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
