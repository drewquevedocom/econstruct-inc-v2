import Image from "next/image";
import Link from "next/link";
import {
  brandStats,
  ContentPage,
  coreServices,
  featuredProjects,
  getRelatedPages,
  heroSlides,
  site,
  testimonials,
} from "@/lib/content";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {heroSlides.map((slide) => (
          <div key={slide.word} className="relative h-[28rem] md:h-[42rem]">
            <Image src={slide.image} alt={slide.alt} fill className="object-cover opacity-45" priority />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.1),rgba(7,10,16,0.92))]" />
          </div>
        ))}
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl space-y-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--clay)]">
            Commercial and luxury residential general contractor, Los Angeles
          </p>
          <h1 className="max-w-5xl font-display text-5xl uppercase leading-[0.88] text-[var(--sand)] md:text-8xl">
            We build where Los Angeles comes to live, work, eat, and shop.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted-bright)] md:text-lg">
            From luxury homes in Beverly Hills to restaurant interiors in Santa Monica and retail
            build-outs in West Hollywood, econstruct delivers premium construction with tighter
            planning, cleaner communication, and a stronger finish standard.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/contact/" className="button-primary">
              Book a consultation
            </Link>
            <Link href="/our-work/" className="button-secondary">
              See selected work
            </Link>
          </div>
        </div>
        <dl className="grid gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
          {brandStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <dt className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{stat.label}</dt>
              <dd className="font-display text-4xl uppercase leading-none text-[var(--sand)]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function LogoBar() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-5 border border-white/10 bg-white/3 p-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Trusted by LA operators</p>
          <div className="grid grid-cols-2 items-center gap-8 opacity-80 md:grid-cols-5">
            {["el-pollo-loco.png", "jersey-mikes.png", "85c.png", "woodfire.png", "rothy.png"].map((logo) => (
              <div key={logo} className="relative h-12">
                <Image
                  src={`/assets/client-logos/${logo}`}
                  alt={logo.replace(".png", "").replaceAll("-", " ")}
                  fill
                  className="object-contain object-left"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <section className="section-space">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.4fr] md:px-8">
        <div className="space-y-5">
          <p className="eyebrow">What We Build</p>
          <h2 className="section-title">Five core disciplines, one operating standard.</h2>
          <p className="section-copy">
            The new site is built around the services that can actually generate qualified local
            demand. Each page is structured to rank, convert, and support paid or organic growth
            without reading like SEO filler.
          </p>
        </div>
        <div className="grid gap-4">
          {coreServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              className="group grid gap-4 border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)] hover:bg-white/7 md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-display text-3xl text-[var(--clay)]">{String(index + 1).padStart(2, "0")}</span>
              <div className="space-y-2">
                <h3 className="text-2xl uppercase tracking-[0.06em] text-[var(--sand)]">{service.name}</h3>
                <p className="max-w-2xl text-sm leading-7 text-[var(--muted-bright)]">{service.short}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {service.audience} | {service.highlight}
                </p>
              </div>
              <span className="self-start text-sm uppercase tracking-[0.18em] text-[var(--sand)] transition group-hover:translate-x-1">
                Explore
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="section-space bg-[var(--night-2)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_1.1fr] md:px-8">
        <div className="space-y-5">
          <p className="eyebrow">Why Clients Switch</p>
          <h2 className="section-title">Premium construction is mostly about risk control.</h2>
          <p className="section-copy">
            Owners come to econstruct when the job is too visible, too expensive, or too schedule
            sensitive for an average contractor. The site makes that positioning obvious through
            proof, not chest-beating.
          </p>
          <ul className="grid gap-3 text-sm leading-7 text-[var(--muted-bright)]">
            <li>One accountable lead who can make decisions and communicate them clearly.</li>
            <li>Builder-informed planning that protects design intent before the field gets messy.</li>
            <li>Stronger finish discipline for retail, hospitality, and luxury residential work.</li>
            <li>Local pages aimed at affluent, high-intent neighborhoods instead of keyword spam.</li>
          </ul>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/${project.slug}/`}
              className="group relative min-h-72 overflow-hidden border border-white/10"
            >
              <Image src={project.image} alt={project.alt} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,18,0.08),rgba(8,11,18,0.92))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{project.tag}</p>
                <h3 className="text-2xl uppercase text-[var(--sand)]">{project.title}</h3>
                <p className="text-sm text-[var(--muted-bright)]">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialRail() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Client Perspective</p>
            <h2 className="section-title">What a serious client actually wants to hear.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            Testimonials are framed around trust, communication, and execution quality because those
            are the signals that convert premium leads better than generic praise.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="flex min-h-72 flex-col justify-between border border-white/10 bg-white/4 p-6">
              <p className="text-lg leading-8 text-[var(--sand)]">{item.quote}</p>
              <div className="pt-8">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--clay)]">{item.name}</p>
                <p className="pt-2 text-sm text-[var(--muted)]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="section-space bg-[linear-gradient(135deg,rgba(157,97,74,0.2),rgba(11,17,28,0.4))]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div className="space-y-5">
          <p className="eyebrow">Ready to Build</p>
          <h2 className="section-title">Bring the right project, we will bring the process.</h2>
          <p className="section-copy">
            This launch is designed to convert high-intent consultations. Every page closes toward
            the same next step: an informed conversation with a contractor who understands premium
            execution, local permitting, and client-facing complexity.
          </p>
        </div>
        <div className="border border-white/10 bg-[var(--night-2)] p-7">
          <div className="space-y-4 text-sm leading-7 text-[var(--muted-bright)]">
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
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact/" className="button-primary">
              Start your project
            </Link>
            <Link href="/service/" className="button-secondary">
              Review services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  image,
  alt,
}: {
  kicker: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image src={image} alt={alt} fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,18,0.18),rgba(8,11,18,0.94))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow">{kicker}</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl uppercase leading-[0.9] text-[var(--sand)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted-bright)] md:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function DetailPage({ page }: { page: ContentPage }) {
  const related = getRelatedPages(page.related);

  return (
    <>
      <PageHero
        kicker={page.kicker}
        title={page.title}
        description={page.description}
        image={page.heroImage}
        alt={page.heroAlt}
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
          <div className="space-y-8">
            <p className="text-lg leading-8 text-[var(--muted-bright)]">{page.intro}</p>
            <div className="space-y-4">
              <h2 className="text-3xl uppercase tracking-[0.08em] text-[var(--sand)]">{page.bodyTitle}</h2>
              <ul className="grid gap-4">
                {page.bullets.map((bullet) => (
                  <li key={bullet} className="border border-white/10 bg-white/3 p-5 text-sm leading-7 text-[var(--muted-bright)]">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            {page.process ? (
              <div className="space-y-4">
                <h2 className="text-3xl uppercase tracking-[0.08em] text-[var(--sand)]">How the work moves</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {page.process.map((step, index) => (
                    <article key={step} className="border border-white/10 bg-[var(--night-2)] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--clay)]">
                        Step {index + 1}
                      </p>
                      <p className="pt-4 text-sm leading-7 text-[var(--muted-bright)]">{step}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <aside className="space-y-6">
            {page.proof ? (
              <div className="border border-white/10 bg-[var(--night-2)] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Quick facts</p>
                <div className="mt-5 grid gap-5">
                  {page.proof.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--clay)]">{item.label}</p>
                      <p className="pt-2 text-sm leading-7 text-[var(--sand)]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {page.faq ? (
              <div className="border border-white/10 bg-white/3 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">FAQ</p>
                <div className="mt-5 grid gap-5">
                  {page.faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-base uppercase tracking-[0.08em] text-[var(--sand)]">{item.question}</h3>
                      <p className="pt-2 text-sm leading-7 text-[var(--muted-bright)]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="border border-[var(--clay)] bg-[linear-gradient(160deg,rgba(157,97,74,0.18),rgba(12,18,28,0.9))] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Next step</p>
              <h3 className="pt-4 text-2xl uppercase text-[var(--sand)]">Talk through your project.</h3>
              <p className="pt-3 text-sm leading-7 text-[var(--muted-bright)]">
                If the job is design-sensitive, time-sensitive, or expensive enough that average
                execution becomes a risk, this is the right conversation to have early.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <Link href="/contact/" className="button-primary">
                  Request a consultation
                </Link>
                <a href={site.phoneHref} className="button-secondary">
                  Call {site.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
      {related.length ? (
        <section className="section-space bg-[var(--night-2)]">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Related Pages</p>
                <h2 className="section-title">Keep moving through the strongest intent paths.</h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/${item.slug}/`} className="border border-white/10 bg-white/4 p-6 transition hover:border-[var(--clay)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--clay)]">{item.kicker}</p>
                  <h3 className="pt-3 text-2xl uppercase text-[var(--sand)]">{item.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-[var(--muted-bright)]">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
