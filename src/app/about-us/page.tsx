import { ContactBand, PageHero, TestimonialRail } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About econstruct | Los Angeles Construction Leadership",
  description:
    "Learn how econstruct approaches commercial and luxury residential construction in Los Angeles, with a focus on communication, planning, and finish quality.",
  path: "/about-us/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A Los Angeles construction team built around clarity and control."
        description="econstruct was built for clients who need more than labor. They need a contractor who can manage the pressure around premium work without letting communication, schedule, or quality drift."
        image="/assets/photography/commercial-ti.png"
        alt="Commercial construction by econstruct"
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1fr] md:px-8">
          <div className="space-y-5">
            <p className="eyebrow">What Sets Us Apart</p>
            <h2 className="section-title">The work is visible, expensive, and hard to fake.</h2>
            <p className="section-copy">
              That is why the company position is simple: protect the details early, communicate
              clearly, and deliver a finish standard that holds up when clients, neighbors, design
              teams, and future buyers look closely.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Preconstruction planning that protects schedule before the field gets busy.",
              "A communication style calibrated for owners, consultants, and operators who want direct answers.",
              "Commercial and residential experience that supports crossover clients, from hospitality founders to high-end homeowners.",
              "Los Angeles local knowledge that strengthens both permitting strategy and neighborhood relevance.",
            ].map((item) => (
              <div key={item} className="border border-white/10 bg-white/4 p-5 text-sm leading-7 text-[var(--muted-bright)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialRail />
      <ContactBand />
    </>
  );
}
