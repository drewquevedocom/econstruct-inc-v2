import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import HeaderLogo from "@/components/HeaderLogo";
import GatekeeperCTA from "@/components/GatekeeperCTA";
import { ECONSTRUCT_INC } from "@/lib/constants";
import { getAllBlogPosts } from "@/lib/blog";

const EXPLORE = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Restaurant & Bar Construction", href: "/projects" },
  { label: "Retail Fit-Out", href: "/free-consultation" },
  { label: "Office & Tenant Improvement", href: "/contact" },
  { label: "Custom Homes & ADUs", href: "/services/custom-homes" },
  { label: "Architecture & Expediting", href: "/for-architects" },
];

const SOCIAL = [
  { Icon: Facebook, href: ECONSTRUCT_INC.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: ECONSTRUCT_INC.social.instagram, label: "Instagram" },
  { Icon: Linkedin, href: ECONSTRUCT_INC.social.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: ECONSTRUCT_INC.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const news = getAllBlogPosts().slice(0, 2);

  return (
    <>
      <GatekeeperCTA />

      <footer className="relative overflow-hidden bg-brand-ink text-white">
        <div className="brand-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-10 pt-20 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <HeaderLogo height={42} />
              <p className="mt-6 text-sm leading-relaxed text-white/65">
                West LA&apos;s trusted general contractor since 2011. We build restaurants,
                retail, offices, and luxury homes — managed from preconstruction to
                close-out.
              </p>
              <a
                href="https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.16em] text-brand-gold transition-colors hover:text-white"
              >
                {ECONSTRUCT_INC.stats.license}
              </a>
              <div className="mt-6 flex gap-3">
                {SOCIAL.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-all hover:border-brand-red hover:bg-brand-red hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                Explore
              </h4>
              <span className="mt-3 block h-0.5 w-10 bg-brand-red" />
              <ul className="mt-6 space-y-3.5">
                {EXPLORE.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-brand-gold"
                    >
                      <ChevronRight size={14} className="text-brand-red transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                What We Build
              </h4>
              <span className="mt-3 block h-0.5 w-10 bg-brand-red" />
              <ul className="mt-6 space-y-3.5">
                {SERVICES.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-brand-gold"
                    >
                      <ChevronRight size={14} className="text-brand-red transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + latest news */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                Get in Touch
              </h4>
              <span className="mt-3 block h-0.5 w-10 bg-brand-red" />
              <ul className="mt-6 space-y-4 text-sm text-white/65">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                  <span className="leading-relaxed">{ECONSTRUCT_INC.address.full}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="shrink-0 text-brand-gold" />
                  <a href={`tel:${ECONSTRUCT_INC.phone.primaryHref}`} className="transition-colors hover:text-brand-gold">
                    {ECONSTRUCT_INC.phone.primary}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="shrink-0 text-brand-gold" />
                  <a href={`mailto:${ECONSTRUCT_INC.email}`} className="transition-colors hover:text-brand-gold">
                    {ECONSTRUCT_INC.email}
                  </a>
                </li>
              </ul>

              {news.length > 0 && (
                <div className="mt-7 space-y-4">
                  {news.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-center gap-3">
                      <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={post.heroImage}
                          alt={post.heroImageAlt}
                          fill
                          sizes="64px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <span className="block text-[11px] text-brand-gold">{post.formattedDate}</span>
                        <span className="line-clamp-2 text-xs font-semibold text-white/75 transition-colors group-hover:text-white">
                          {post.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} econstruct, Inc. All rights reserved · {ECONSTRUCT_INC.stats.license}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/careers" className="transition-colors hover:text-white">Careers</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
