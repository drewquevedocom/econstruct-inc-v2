import { Suspense } from "react";
import type { Metadata } from "next";
import GenericContactForm from "@/components/contact/GenericContactForm";

export const metadata: Metadata = {
  title: "Request a Site Walk | Food Facility Construction | econstruct",
  description:
    "Schedule a site walk for your food distribution, cold storage, or commissary facility. econstruct responds within 24 hours. CA Lic #964015.",
};

export default function SiteWalkPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent-gold">
            Food Facility Construction
          </p>
          <h1 className="text-4xl font-bold text-brand-dark md:text-5xl">
            Request a Site Walk
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Tell us about your facility and {"we'll"} schedule a walk within 24 hours — no
            obligation.
          </p>
        </div>
        <Suspense fallback={null}>
          <GenericContactForm />
        </Suspense>
      </div>
    </main>
  );
}
