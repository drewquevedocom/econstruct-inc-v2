import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { navLinks, site } from "@/lib/content";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:color-mix(in_oklab,var(--canvas)_78%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logos/econ-mark-blueprint.png"
            alt="econstruct"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="leading-none">
            <span className="block font-display text-xl uppercase tracking-[0.18em] text-[var(--sand)]">
              econstruct
            </span>
            <span className="block pt-1 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
              Los Angeles General Contractor
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.14em] text-[var(--muted)] lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--sand)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="button-secondary hidden md:inline-flex">
          {site.phone}
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--night-2)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">econstruct Inc.</p>
          <h2 className="max-w-lg font-display text-3xl uppercase leading-none text-[var(--sand)] md:text-5xl">
            Precision construction for the clients who cannot afford average.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            Commercial and luxury residential construction across Los Angeles, with an emphasis on
            premium finish quality, schedule discipline, and clear owner communication.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Reach</p>
          <div className="space-y-3 text-sm text-[var(--sand)]">
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>{site.license}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Navigation</p>
          <div className="grid gap-3 text-sm text-[var(--sand)]">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
