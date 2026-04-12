"use client";
// src/components/forms/FreeAssessmentForm.tsx
// All Family Health Care — Free In-Home Assessment Request Form (Netlify)

import { cn } from "@/lib/utils";
import FormConnectionNotice from "@/components/forms/FormConnectionNotice";

const inputBase =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-charcoal placeholder-muted transition-colors focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20";

const labelBase = "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted";

export default function FreeAssessmentForm() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <FormConnectionNotice />
      <form
        name="free-assessment"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        {/* Required hidden inputs for Netlify */}
        <input type="hidden" name="form-name" value="free-assessment" />
        <div hidden aria-hidden="true">
          <label>
            Do not fill this out if you are human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* Name row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fa-first-name" className={labelBase}>
              First Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="fa-first-name"
              type="text"
              name="first-name"
              required
              autoComplete="given-name"
              placeholder="First Name"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="fa-last-name" className={labelBase}>
              Last Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="fa-last-name"
              type="text"
              name="last-name"
              required
              autoComplete="family-name"
              placeholder="Last Name"
              className={inputBase}
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fa-phone" className={labelBase}>
              Phone Number <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="fa-phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(773) 555-0000"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="fa-email" className={labelBase}>
              Email Address
            </label>
            <input
              id="fa-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your@email.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Patient address */}
        <div className="mt-4">
          <label htmlFor="fa-patient-address" className={labelBase}>
            Patient Address (where care will take place) <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <input
            id="fa-patient-address"
            type="text"
            name="patient-address"
            required
            autoComplete="street-address"
            placeholder="Street address, city, ZIP"
            className={inputBase}
          />
        </div>

        {/* Care need + Best time */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fa-care-need" className={labelBase}>
              Type of Care Needed <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <select
              id="fa-care-need"
              name="care-need"
              required
              defaultValue=""
              className={cn(inputBase, "cursor-pointer")}
            >
              <option value="" disabled>Select care type…</option>
              <option value="Skilled Nursing">Skilled Nursing</option>
              <option value="Physical Therapy">Physical Therapy</option>
              <option value="Occupational Therapy">Occupational Therapy</option>
              <option value="Speech Therapy">Speech Therapy</option>
              <option value="Home Health Aide">Home Health Aide</option>
              <option value="Wound Care">Wound Care</option>
              <option value="Post-Surgical Care">Post-Surgical Care</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="fa-best-time" className={labelBase}>
              Best Time to Call
            </label>
            <select
              id="fa-best-time"
              name="best-time"
              defaultValue=""
              className={cn(inputBase, "cursor-pointer")}
            >
              <option value="" disabled>Select a time…</option>
              <option value="Morning 8am-12pm">Morning 8am–12pm</option>
              <option value="Afternoon 12pm-4pm">Afternoon 12pm–4pm</option>
              <option value="Evening 4pm-6pm">Evening 4pm–6pm</option>
              <option value="Any Time">Any Time</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label htmlFor="fa-message" className={labelBase}>
            Tell Us About the Situation
          </label>
          <textarea
            id="fa-message"
            name="message"
            rows={4}
            placeholder="Brief description of care needs, urgency, or questions…"
            className={cn(inputBase, "resize-y")}
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark hover:shadow-electric/35 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          >
            Request Free Assessment
          </button>
        </div>

        {/* Trust text */}
        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          We respond within 24 hours · Most calls answered same day · Medicare covers most services at no cost to you
        </p>
      </form>
    </div>
  );
}
