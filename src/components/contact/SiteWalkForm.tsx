"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, Mail, Phone } from "lucide-react";

const facilityTypes = [
  "Food Distribution Center",
  "Cold Storage / Refrigerated Warehouse",
  "Ghost Kitchen / Commissary",
  "Food Processing Facility",
  "Grocery / Retail Food",
  "Other",
];

const inputClasses =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-dark font-medium focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all";
const labelClasses = "text-sm font-bold text-gray-700 uppercase tracking-wide";

export default function SiteWalkForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    facilityType: "Food Distribution Center",
    address: "",
    squareFootage: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.facilityType,
          details: `Facility Address: ${formData.address}\nSq Ft: ${formData.squareFootage}\n\n${formData.message}`,
          source: "site_walk_food_distribution",
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      window.dispatchEvent(
        new CustomEvent("econstruct:form_submit_success", {
          detail: {
            form_id: "site-walk-form",
            form_destination: window.location.href,
            form_length: 8,
            form_name: "site walk request",
          },
        })
      );
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-2xl md:p-12">
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold/10">
            <CheckCircle2 size={40} className="text-accent-gold" />
          </div>
          <h3 className="mb-4 text-3xl font-bold text-brand-dark">Request Received</h3>
          <p className="mb-8 max-w-md font-medium text-gray-500">
            {"Frank's team will review your facility details and reach out within 24 hours to confirm timing."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      id="site-walk-form"
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-2xl md:p-12"
    >
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-brand-dark">Request a Site Walk</h3>
        <p className="mt-3 text-gray-500">
          {"Tell us about your facility. We'll confirm availability and schedule within 24 hours."}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>First Name</label>
          <input
            value={formData.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClasses}
            placeholder="John"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Last Name</label>
          <input
            value={formData.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClasses}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses}
            placeholder="john@company.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses}
            placeholder="(310) 555-1234"
            required
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={labelClasses}>Facility Type</label>
        <select
          value={formData.facilityType}
          onChange={(e) => update("facilityType", e.target.value)}
          className={inputClasses}
        >
          {facilityTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={labelClasses}>Facility Address or City</label>
        <input
          value={formData.address}
          onChange={(e) => update("address", e.target.value)}
          className={inputClasses}
          placeholder="123 Industry Blvd, Los Angeles, CA"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={labelClasses}>Approx. Square Footage</label>
        <input
          value={formData.squareFootage}
          onChange={(e) => update("squareFootage", e.target.value)}
          className={inputClasses}
          placeholder="e.g. 15,000 sq ft"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className={labelClasses}>Project Notes</label>
        <textarea
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClasses} min-h-[140px] resize-none`}
          placeholder="Describe the scope — what needs to be built, renovated, or upgraded."
        />
      </div>

      {error && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-8 py-4 font-bold text-white transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
          {isSubmitting ? "Sending..." : "Request Site Walk"}
        </button>
        <a
          href="tel:+13107409999"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-4 font-bold text-brand-dark transition-colors hover:border-accent-gold hover:text-accent-gold"
        >
          <Phone size={18} />
          Call Instead
        </a>
      </div>
    </form>
  );
}
