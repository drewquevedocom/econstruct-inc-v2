"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogo from "@/components/HeaderLogo";
import { ECONSTRUCT_INC } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Restaurant & Bar Construction", href: "/services/restaurant-bar-construction" },
  { label: "Retail Tenant Improvement", href: "/services/retail-tenant-improvement" },
  { label: "Office & Tenant Improvement", href: "/services/office-tenant-improvement" },
  { label: "Food Distribution & Cold Storage", href: "/food-distribution-construction" },
  { label: "Custom Homes & ADUs", href: "/services/custom-homes" },
  { label: "Luxury Modernization", href: "/services/luxury-modernization" },
  { label: "Fire Rebuild & Restoration", href: "/services/fire-rebuild" },
];

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: SERVICE_LINKS },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) setMobileServicesOpen(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* ── Red utility bar ─────────────────────────────────────── */}
      <div className="hidden bg-brand-red text-white md:block">
        <div className="mx-auto flex h-10 w-full max-w-[1760px] items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: ECONSTRUCT_INC.social.facebook, label: "Facebook" },
              { Icon: Instagram, href: ECONSTRUCT_INC.social.instagram, label: "Instagram" },
              { Icon: Linkedin, href: ECONSTRUCT_INC.social.linkedin, label: "LinkedIn" },
              { Icon: Youtube, href: ECONSTRUCT_INC.social.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 transition-colors hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6 text-[12.5px] font-medium tracking-wide">
            <a href={`mailto:${ECONSTRUCT_INC.email}`} className="flex items-center gap-2 text-white/90 transition-colors hover:text-white">
              <Mail size={14} />
              {ECONSTRUCT_INC.email}
            </a>
            <span className="hidden items-center gap-2 text-white/90 lg:flex">
              <MapPin size={14} />
              {ECONSTRUCT_INC.address.city}, {ECONSTRUCT_INC.address.state}
            </span>
            <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-gold">
              <Phone size={14} />
              {ECONSTRUCT_INC.phone.primary}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────────────────── */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-white/5 bg-brand-ink/95 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/10 bg-brand-ink/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between px-5 py-3.5 lg:px-10">
          <Link href="/" className="flex shrink-0 items-center" aria-label="econstruct home">
            <HeaderLogo height={38} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/97 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl border-l-2 border-transparent px-4 py-3 text-sm font-semibold text-white/70 transition-all hover:border-brand-red hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-ink">
                <Phone size={16} />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/50">Call us</span>
                <span className="block text-sm font-bold text-white">{ECONSTRUCT_INC.phone.primary}</span>
              </span>
            </a>
            <Link
              href="/free-consultation"
              className="rounded-sm bg-brand-red px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_24px_rgba(225,20,44,0.28)] transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark active:translate-y-0"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
              aria-label="Call econstruct"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold"
            >
              <Phone size={17} />
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-3 top-full mt-2 flex max-h-[calc(100vh-96px)] flex-col gap-1 overflow-y-auto rounded-2xl border border-white/10 bg-brand-navy/98 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 rounded-lg px-3 py-3 text-base font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-brand-gold"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-label={mobileServicesOpen ? "Collapse services" : "Expand services"}
                      aria-expanded={mobileServicesOpen}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/5 hover:text-brand-gold"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg border-l-2 border-white/10 px-4 py-2.5 text-sm font-semibold text-white/65 transition-colors hover:border-brand-red hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3.5 font-bold text-white"
            >
              <Phone size={18} className="text-brand-gold" />
              {ECONSTRUCT_INC.phone.primary}
            </a>
            <Link
              href="/free-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-brand-red py-3.5 text-center font-bold uppercase tracking-wide text-white"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
