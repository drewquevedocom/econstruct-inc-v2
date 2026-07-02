import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { ECONSTRUCT_INC } from "@/lib/constants";

const MAP_SRC =
  "https://www.google.com/maps?q=25350+Magic+Mountain+Pkwy+Suite+300+Valencia+CA+91355&output=embed";

export default function MapSection() {
  return (
    <section className="relative bg-secondary">
      <div className="mx-auto grid max-w-[1760px] items-stretch lg:grid-cols-[1fr_440px]">
        {/* Map */}
        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <iframe
            title="econstruct headquarters — Valencia, CA"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.2]"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

        {/* Contact card */}
        <div className="relative flex flex-col justify-center gap-7 bg-brand-ink px-8 py-12 md:px-12">
          <div className="brand-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold">
                Visit / Call
              </span>
            </div>
            <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              Let&apos;s build something exceptional
            </h2>
          </div>

          <ul className="relative space-y-5 text-white/80">
            <li className="flex gap-4">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand-gold" />
              <span className="text-[15px] leading-relaxed">
                {ECONSTRUCT_INC.address.line}<br />
                {ECONSTRUCT_INC.address.line2}<br />
                {ECONSTRUCT_INC.address.line3}
              </span>
            </li>
            <li className="flex gap-4">
              <Phone size={20} className="mt-0.5 shrink-0 text-brand-gold" />
              <a
                href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
                className="text-[15px] font-semibold text-white transition-colors hover:text-brand-gold"
              >
                {ECONSTRUCT_INC.phone.primary}
              </a>
            </li>
            <li className="flex gap-4">
              <Mail size={20} className="mt-0.5 shrink-0 text-brand-gold" />
              <a
                href={`mailto:${ECONSTRUCT_INC.email}`}
                className="text-[15px] transition-colors hover:text-brand-gold"
              >
                {ECONSTRUCT_INC.email}
              </a>
            </li>
            <li className="flex gap-4">
              <Clock size={20} className="mt-0.5 shrink-0 text-brand-gold" />
              <span className="text-[15px] leading-relaxed">Mon–Fri · 9:00 AM – 5:00 PM</span>
            </li>
          </ul>

          <Link
            href="/contact"
            className="group relative inline-flex w-fit items-center gap-3 rounded-sm bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
          >
            Get in Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
