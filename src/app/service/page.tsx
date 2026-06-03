import Link from "next/link";
import { ContactBand, PageHero } from "@/components/marketing";
import { coreServices, getArchive } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Construction Services | Los Angeles | econstruct",
  description:
    "Explore econstruct services for commercial construction, luxury residential, restaurant construction, retail build-outs, architecture coordination, and turn-key delivery.",
  path: "/service/",
});

export default function ServiceArchivePage() {
  const locationPages = getArchive("location");

  return (
    <>
      <PageHero
        kicker="Services"
        title="Pages built to rank for the work that actually drives revenue."
        description="The migration preserves service intent while giving the new site stronger structure, cleaner messaging, and room to grow local search coverage without polluting the brand."
        image="/assets/photography/hero-work.png"
        alt="Commercial construction services by econstruct"
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:px-8">
          {coreServices.map((service) => (
            <Link key={service.slug} href={`/${service.slug}/`} className="border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{service.audience}</p>
              <h2 className="pt-3 text-3xl uppercase text-[var(--sand)]">{service.name}</h2>
              <p className="pt-4 text-sm leading-7 text-[var(--muted-bright)]">{service.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section-space bg-[var(--night-2)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-8 space-y-3">
            <p className="eyebrow">Local SEO Expansion</p>
            <h2 className="section-title">Geo pages for affluent, high-intent neighborhoods.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {locationPages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}/`} className="border border-white/10 bg-white/4 p-5 text-sm leading-7 text-[var(--muted-bright)] transition hover:border-[var(--clay)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{page.kicker}</p>
                <h3 className="pt-3 text-xl uppercase text-[var(--sand)]">{page.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
