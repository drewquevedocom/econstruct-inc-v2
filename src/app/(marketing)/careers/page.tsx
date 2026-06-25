import type { Metadata } from "next";
import {
  Hammer,
  TrendingUp,
  Users,
  Banknote,
  Mail,
  Briefcase,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ConsultationCTA from "@/components/ConsultationCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers at econstruct — Join Our Team",
  description:
    "Build your career with econstruct. We build restaurants, retail stores, and commercial spaces across Los Angeles. New positions coming soon.",
  path: "/careers",
});

const cultureValues = [
  {
    icon: Hammer,
    title: "Craftsmanship Culture",
    description:
      "We take pride in every detail. If you care about doing things right — not just fast — you'll fit right in. Our work speaks for itself.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "With a growing commercial pipeline, there's room to advance. We invest in our people with training, mentorship, and clear paths for career development.",
  },
  {
    icon: Users,
    title: "Team-First Environment",
    description:
      "Small team, big impact. Everyone knows each other by name. We collaborate, we communicate, and we have each other's backs on every project.",
  },
  {
    icon: Banknote,
    title: "Competitive Compensation",
    description:
      "Top-tier pay, health benefits, and performance bonuses. We pay for quality because we hire for quality.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build Your Career with econstruct"
        subtitle="Join a team that builds Los Angeles' finest restaurants, retail stores, and commercial spaces."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Work With Us */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            badge={["Culture"]}
            title="Why Work With Us"
            subtitle="We build commercial spaces across LA — and we build strong careers. Here's what sets econstruct apart as an employer."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={28} className="text-accent-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Jobs Coming Soon */}
      <section className="py-24 md:py-32 bg-[#F8F6F2]">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={36} className="text-accent-gold" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-gold mb-4">
                Open Positions
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-brand-dark mb-6">
                Jobs Coming Soon
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                We are actively growing our team. New positions for project managers, superintendents, estimators, and skilled tradespeople will be posted here soon.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                In the meantime, send your resume to{" "}
                <a
                  href="mailto:info@econstructinc.com"
                  className="text-accent-gold font-semibold hover:underline"
                >
                  info@econstructinc.com
                </a>{" "}
                and we will keep you in mind when the right role opens up.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Application CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} className="text-accent-gold" />
              </div>
              <SectionHeader
                title="Interested in Joining econstruct?"
                subtitle="Don't see your role listed? We're always open to hearing from talented construction professionals. Send your resume and tell us about yourself."
                className="mb-8"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="mailto:info@econstructinc.com?subject=Career Inquiry"
                  variant="primary"
                  size="lg"
                >
                  Send Your Resume
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                info@econstructinc.com
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
