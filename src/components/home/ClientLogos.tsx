"use client";

import { partners } from "@/lib/data/partners";

export default function ClientLogos() {
  const row = [...partners, ...partners];

  return (
    <section className="border-y border-brand-ink/5 bg-white py-14">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <p className="mb-9 text-center text-xs font-bold uppercase tracking-[0.28em] text-body-text/70">
          Trusted by leading LA operators &amp; brands
        </p>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div
          className="flex w-max items-center gap-14 whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
          style={{ animation: "pill-marquee 38s linear infinite" }}
        >
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl font-extrabold tracking-tight text-brand-ink/35 transition-colors duration-300 hover:text-brand-red md:text-[1.7rem]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
