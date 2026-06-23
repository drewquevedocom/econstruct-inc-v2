"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { team } from "@/lib/data/team";
import { ECONSTRUCT_INC } from "@/lib/constants";
import SectionHeading from "@/components/home/SectionHeading";

/** Portrait overrides (cleaner assets than the residential defaults in team.ts). */
const PORTRAITS: Record<string, string> = {
  "Frank Neimroozi": "/frank-about.png",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function LeadershipTeam() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team that runs your project"
          intro="Hands-on partners with the field and operations experience behind 600+ completed builds across Los Angeles."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => {
            const photo = PORTRAITS[member.name] ?? member.image;
            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-md bg-secondary shadow-[0_18px_40px_rgba(12,15,26,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(12,15,26,0.14)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="brand-grid flex h-full w-full items-center justify-center">
                      <span className="font-display text-6xl font-extrabold text-white/85">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-brand-ink/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={ECONSTRUCT_INC.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-brand-red"
                    >
                      <Linkedin size={15} />
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-brand-red"
                      >
                        <Mail size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="px-6 py-6 text-center">
                  <h3 className="font-display text-lg font-bold text-brand-ink">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-red">
                    {member.title}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
