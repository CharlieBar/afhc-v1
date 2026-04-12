"use client";
// src/components/forms/ReferralForm.tsx
// All Family Health Care — Physician Referral Form (Netlify)

import { cn } from "@/lib/utils";
import FormConnectionNotice from "@/components/forms/FormConnectionNotice";

const inputBase =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-charcoal placeholder-muted transition-colors focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20";

const labelBase = "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted";

const sectionHeadingClass =
  "mb-4 mt-8 font-heading text-base font-bold text-charcoal first:mt-0 border-b border-border pb-2";

const SERVICES = [
  "Skilled Nursing",
  "Physical Therapy",
  "Occupational Therapy",
  "Speech Therapy",
  "Home Health Aide",
  "Wound Care",
  "IV Therapy",
  "Medication Management",
  "Medical Social Work",
];

export default function ReferralForm() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <FormConnectionNotice />
      <form
        name="referral-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="referral-form" />
        <div hidden aria-hidden="true">
          <label>
            Do not fill this out if you are human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* ── Referring Physician ── */}
        <h2 className={sectionHeadingClass}>Referring Physician / Facility</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rf-physician-name" className={labelBase}>
              Physician / Clinician Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="rf-physician-name"
              type="text"
              name="physician-name"
              required
              placeholder="Dr. Jane Smith"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="rf-practice-hospital" className={labelBase}>
              Practice / Hospital Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="rf-practice-hospital"
              type="text"
              name="practice-hospital"
              required
              placeholder="Northwestern Medicine"
              className={inputBase}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="rf-npi-number" className={labelBase}>
              NPI Number
            </label>
            <input
              id="rf-npi-number"
              type="text"
              name="npi-number"
              placeholder="1234567890"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="rf-physician-phone" className={labelBase}>
              Office Phone <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="rf-physician-phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(773) 555-0000"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="rf-fax" className={labelBase}>
              Fax Number
            </label>
            <input
              id="rf-fax"
              type="tel"
              name="fax"
              placeholder="(773) 555-0000"
              className={inputBase}
            />
          </div>
        </div>

        {/* ── Patient Information ── */}
        <h2 className={sectionHeadingClass}>Patient Information</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rf-patient-name" className={labelBase}>
              Patient Full Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="rf-patient-name"
              type="text"
              name="patient-name"
              required
              placeholder="Patient full name"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="rf-patient-dob" className={labelBase}>
              Date of Birth <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="rf-patient-dob"
              type="date"
              name="patient-dob"
              required
              className={inputBase}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="rf-insurance" className={labelBase}>
            Insurance / Medicare ID
          </label>
          <input
            id="rf-insurance"
            type="text"
            name="insurance"
            placeholder="Medicare Beneficiary ID or insurance plan name"
            className={inputBase}
          />
        </div>

        {/* ── Clinical Information ── */}
        <h2 className={sectionHeadingClass}>Clinical Information</h2>

        <div>
          <label htmlFor="rf-diagnosis" className={labelBase}>
            Primary Diagnosis / ICD-10 <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <input
            id="rf-diagnosis"
            type="text"
            name="diagnosis"
            required
            placeholder="e.g. CHF (I50.9), Hip fracture post-ORIF"
            className={inputBase}
          />
        </div>

        {/* Services needed checkboxes */}
        <fieldset className="mt-4">
          <legend className={cn(labelBase, "mb-2")}>
            Services Needed <span className="text-electric" aria-hidden="true">*</span>
          </legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <label
                key={service}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-charcoal transition-colors hover:border-electric/40 hover:bg-electric-light has-[:checked]:border-electric has-[:checked]:bg-electric-light"
              >
                <input
                  type="checkbox"
                  name="services-needed"
                  value={service}
                  className="h-4 w-4 rounded border-border text-electric accent-electric focus:ring-electric"
                />
                <span className="text-[13px]">{service}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Urgency */}
        <div className="mt-4">
          <label htmlFor="rf-urgency" className={labelBase}>
            Urgency <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <select
            id="rf-urgency"
            name="urgency"
            required
            defaultValue=""
            className={cn(inputBase, "cursor-pointer")}
          >
            <option value="" disabled>Select urgency…</option>
            <option value="Routine">Routine (within 48 hours)</option>
            <option value="Urgent">Urgent (within 24 hours)</option>
            <option value="STAT">STAT (same-day)</option>
          </select>
        </div>

        {/* Notes */}
        <div className="mt-4">
          <label htmlFor="rf-notes" className={labelBase}>
            Additional Clinical Notes
          </label>
          <textarea
            id="rf-notes"
            name="notes"
            rows={4}
            placeholder="Relevant medical history, special instructions, or concerns…"
            className={cn(inputBase, "resize-y")}
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark hover:shadow-electric/35 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          >
            Submit Referral
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          High-priority referrals — we respond within 24 hours · Urgent cases handled same day
        </p>
      </form>
    </div>
  );
}
