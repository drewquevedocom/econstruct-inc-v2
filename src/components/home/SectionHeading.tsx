"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-white" : "text-brand-ink";
  const introColor = tone === "dark" ? "text-white/65" : "text-body-text";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <div className={`mb-4 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-px w-9 bg-brand-red" />
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-red">
          {eyebrow}
        </span>
        {isCenter && <span className="h-px w-9 bg-brand-red" />}
      </div>
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-[2.6rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base leading-relaxed ${introColor}`}>{intro}</p>}
    </motion.div>
  );
}
