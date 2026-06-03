import { PageHero } from "@/components/marketing";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact econstruct | Book a Consultation",
  description:
    "Contact econstruct to discuss a luxury residential, restaurant, retail, or commercial construction project in Los Angeles.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start with the project, the constraints, and the real timeline."
        description="The best first conversation is direct. Tell us what you are building, where it is, what stage it is in, and what pressure the project is under."
        image="/assets/photography/jobsite-hero.jpg"
        alt="Construction consultation with econstruct"
      />
      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8">
          <div className="space-y-5">
            <p className="eyebrow">Project Intake</p>
            <h2 className="section-title">Bring enough detail for a useful answer.</h2>
            <p className="section-copy">
              This frontend is ready for a CRM or forms backend later. For now it gives the client
              a polished contact path and keeps the lead machine focused on qualified conversations.
            </p>
            <form className="grid gap-4 border border-white/10 bg-white/4 p-6">
              <input className="field" placeholder="Name" />
              <input className="field" placeholder="Email" type="email" />
              <input className="field" placeholder="Phone" />
              <input className="field" placeholder="Project location" />
              <select className="field" defaultValue="">
                <option value="" disabled>
                  Project type
                </option>
                <option>Luxury Residential</option>
                <option>Restaurant</option>
                <option>Retail</option>
                <option>Office / TI</option>
                <option>Other Commercial</option>
              </select>
              <textarea
                className="field min-h-40"
                placeholder="Tell us about the scope, timing, and what matters most."
              />
              <button type="button" className="button-primary">
                Request consultation
              </button>
            </form>
          </div>
          <aside className="space-y-5 border border-white/10 bg-[var(--night-2)] p-7">
            <p className="eyebrow">Direct Contact</p>
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
              <p>{site.license}</p>
            </div>
            <div className="border-t border-white/10 pt-5 text-sm leading-7 text-[var(--muted)]">
              Best fit inquiries include luxury homes, restaurant construction, retail rollout work,
              premium tenant improvements, and projects where schedule or finish quality is a real
              business risk.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
