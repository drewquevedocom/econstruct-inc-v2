"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent, type MouseEvent } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import HoneypotField from "@/components/HoneypotField";
import TurnstileWidget from "@/components/TurnstileWidget";
import { HONEYPOT_FIELD } from "@/lib/spam-protection-shared";

const facilityTypes = [
  "Cold Storage / Refrigerated Warehouse",
  "Food Distribution Center",
  "Food Manufacturing / Processing",
  "Commercial Kitchen / Commissary",
  "Ghost Kitchen",
  "Multi-Tenant Industrial",
  "Not Sure Yet",
];

const facilitySizes = [
  "Under 10,000 sq ft",
  "10,000 - 25,000 sq ft",
  "25,000 - 50,000 sq ft",
  "50,000 - 100,000 sq ft",
  "100,000+ sq ft",
  "Not sure yet",
];

const facilityStatuses = [
  "Existing facility — currently operating",
  "Existing facility — vacant / between tenants",
  "Lease signed, not yet occupied",
  "Evaluating a property before signing lease",
  "Ground-up new construction",
];

const walkTimings = [
  "This week",
  "Next 2 weeks",
  "Within 30 days",
  "30-60 days",
  "Just exploring, no rush",
];

const inputClasses =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-dark font-medium focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all";
const labelClasses = "text-sm font-bold text-gray-700 uppercase tracking-wide";
const errorClasses = "text-xs font-semibold text-red-600";

interface SiteWalkCTAProps {
  leadSource?: string;
}

export default function SiteWalkCTA({ leadSource = "site_walk_request" }: SiteWalkCTAProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const [formData, setFormData] = useState({
    facilityType: "",
    zipCode: "",
    facilitySize: "",
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    facilityStatus: "",
    walkTiming: "",
    details: "",
  });

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number) => {
    const errors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.facilityType) errors.facilityType = "Select a facility type";
      if (!formData.zipCode.trim()) errors.zipCode = "Property ZIP code is required";
    }
    if (currentStep === 2) {
      if (!formData.firstName.trim()) errors.firstName = "First name is required";
      if (!formData.lastName.trim()) errors.lastName = "Last name is required";
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Enter a valid email";
      }
      if (!formData.phone.trim()) errors.phone = "Phone number is required";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = (e: MouseEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;
    if (step < 3) setStep(step + 1);
  };

  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const details = [
      formData.companyName && `Company / Operation: ${formData.companyName}`,
      formData.facilitySize && `Approximate Facility Size: ${formData.facilitySize}`,
      formData.facilityStatus && `Facility Status: ${formData.facilityStatus}`,
      formData.details && `Additional Details: ${formData.details}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          zipCode: formData.zipCode,
          projectType: formData.facilityType,
          timeline: formData.walkTiming,
          details,
          source: leadSource,
          [HONEYPOT_FIELD]: honeypot,
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        setSubmitError(json.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      window.dispatchEvent(
        new CustomEvent("econstruct:form_submit_success", {
          detail: {
            form_id: "site-walk-cta-form",
            form_destination: window.location.href,
            form_length: 9,
            form_name: "site walk request",
          },
        }),
      );
      setStep(4); // Success
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
        <HoneypotField value={honeypot} onChange={setHoneypot} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100"
        >
          {/* Progress Bar */}
          {step < 4 && (
            <div className="w-full bg-gray-100 h-2 rounded-full mb-12 overflow-hidden">
              <div
                className="bg-accent-gold h-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">

              {/* STEP 1: Facility Basics */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    Facility Basics (1/3)
                  </h3>

                  <div className="flex flex-col gap-2">
                    <label className={labelClasses}>Facility Type</label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => update("facilityType", e.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select the facility type...</option>
                      {facilityTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {fieldErrors.facilityType && <p className={errorClasses}>{fieldErrors.facilityType}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>Property ZIP Code</label>
                      <input
                        type="text"
                        placeholder="e.g. 90058"
                        value={formData.zipCode}
                        onChange={(e) => update("zipCode", e.target.value)}
                        className={inputClasses}
                      />
                      {fieldErrors.zipCode && <p className={errorClasses}>{fieldErrors.zipCode}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>Approximate Facility Size</label>
                      <select
                        value={formData.facilitySize}
                        onChange={(e) => update("facilitySize", e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Select a range...</option>
                        {facilitySizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClasses}>
                      Company / Operation Name{" "}
                      <span className="text-gray-400 normal-case font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Cold Storage"
                      value={formData.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className={inputClasses}
                    />
                  </div>

                  <button
                    onClick={handleNext}
                    className="mt-4 bg-brand-dark text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                  >
                    Continue to Contact Info <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    Your Information (2/3)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className={inputClasses}
                      />
                      {fieldErrors.firstName && <p className={errorClasses}>{fieldErrors.firstName}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className={inputClasses}
                      />
                      {fieldErrors.lastName && <p className={errorClasses}>{fieldErrors.lastName}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClasses}>Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClasses}
                    />
                    {fieldErrors.email && <p className={errorClasses}>{fieldErrors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClasses}>Phone</label>
                    <input
                      type="tel"
                      placeholder="(310) 555-1234"
                      value={formData.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClasses}
                    />
                    {fieldErrors.phone && <p className={errorClasses}>{fieldErrors.phone}</p>}
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleBack}
                      className="bg-gray-100 text-gray-600 rounded-xl py-4 px-8 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-brand-dark text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                    >
                      Continue to Site Details <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Site Walk Details & Submit */}
              {step === 3 && (
                <motion.form
                  id="site-walk-cta-form"
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    Site Walk Details (3/3)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>Facility Status</label>
                      <select
                        value={formData.facilityStatus}
                        onChange={(e) => update("facilityStatus", e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Select one...</option>
                        {facilityStatuses.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClasses}>Preferred Site Walk Timing</label>
                      <select
                        value={formData.walkTiming}
                        onChange={(e) => update("walkTiming", e.target.value)}
                        className={inputClasses}
                      >
                        <option value="">Select timing...</option>
                        {walkTimings.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClasses}>
                      Additional Details{" "}
                      <span className="text-gray-400 normal-case font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Refrigeration or freezer zones, dock door count, power/utility needs, health department requirements, or anything our team should review before the walk."
                      value={formData.details}
                      onChange={(e) => update("details", e.target.value)}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
                      {submitError}
                    </div>
                  )}

                  <TurnstileWidget onVerify={setTurnstileToken} onExpire={() => setTurnstileToken("")} />

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleBack}
                      type="button"
                      className="bg-gray-100 text-gray-600 rounded-xl py-4 px-8 font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-accent-gold text-white rounded-xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#a68636] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Site Walk <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}

              {/* STEP 4: Success */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-[300px]"
                >
                  <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-accent-gold" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-dark mb-4">
                    Site Walk Request Received
                  </h3>
                  <p className="text-gray-500 font-medium max-w-sm mb-8">
                    Thank you. A member of the econstruct team will reach out within 24 hours to confirm a time and walk through facility details.
                  </p>
                  <button
                    onClick={() => {
                      setStep(1);
                      setFieldErrors({});
                      setFormData({
                        facilityType: "",
                        zipCode: "",
                        facilitySize: "",
                        companyName: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        facilityStatus: "",
                        walkTiming: "",
                        details: "",
                      });
                    }}
                    className="text-brand-dark font-bold border-b-2 border-brand-dark pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
    </div>
  );
}
