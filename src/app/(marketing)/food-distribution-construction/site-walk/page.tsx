import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Phone, Shield, Star } from "lucide-react";
import { ECONSTRUCT_INC } from "@/lib/constants";
import SiteWalkForm from "@/components/contact/SiteWalkForm";

export const metadata: Metadata = {
  title: "Request a Site Walk | Food Facility Construction | econstruct",
  description:
    "Schedule a site walk with econstruct's food facility construction team. We assess your distribution center, cold storage, or processing facility and provide a same-week scope review.",
};

const TRUST_POINTS = [
  "Licensed General Contractor — CA Lic #964015",
  "Food-grade construction specialists",
  "USDA, FDA & health code compliant builds",
  "Cold storage & refrigerated warehouse experts",
];

const NEXT_STEPS = [
  {
    step: "01",
    title: "We review your request",
    body: "Within a few hours of receiving your form, Frank's team checks your facility location and project type.",
  },
  {
    step: "02",
    title: "We confirm timing",
    body: "You'll get a call or email within 24 hours to lock in a walk time that works for your schedule.",
  },
  {
    step: "03",
    title: "On-site assessment",
    body: "We visit, measure, photograph, and ask the right questions — then deliver a scope summary within the week.",
  },
];

export default function FoodDistributionSiteWalkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/food-dist-hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/food-distribution-construction" className="hover:text-white transition-colors">
              Food Distribution Construction
            </Link>
            <span>/</span>
            <span className="text-white">Request Site Walk</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/20">
              <Star size={18} className="text-accent-gold" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">
              Food Facility Construction
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Request a Site Walk
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Tell us about your facility. We come to you, assess the space, and deliver a clear scope
            summary — no obligation, no guesswork.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 size={16} className="shrink-0 text-accent-gold" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <SiteWalkForm />
            </div>

            {/* Sidebar — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* What happens next */}
              <div className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-brand-dark">What happens next</h3>
                <div className="flex flex-col gap-6">
                  {NEXT_STEPS.map(({ step, title, body }) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-gold/10">
                        <span className="text-xs font-bold text-accent-gold">{step}</span>
                      </div>
                      <div>
                        <p className="font-bold text-brand-dark">{title}</p>
                        <p className="mt-1 text-sm text-gray-500">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust card */}
              <div className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Shield size={20} className="text-accent-gold" />
                  <h3 className="text-lg font-bold text-brand-dark">Why econstruct</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {TRUST_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call instead */}
              <div className="rounded-[24px] bg-brand-dark p-8">
                <div className="mb-3 flex items-center gap-3">
                  <Clock size={18} className="text-accent-gold" />
                  <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">
                    Prefer to call?
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-300">
                  Reach Frank directly — Mon–Fri, 7am–5pm PST.
                </p>
                <a
                  href={ECONSTRUCT_INC.phone.primaryHref}
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-accent-gold transition-colors"
                >
                  <Phone size={18} />
                  {ECONSTRUCT_INC.phone.primary}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
