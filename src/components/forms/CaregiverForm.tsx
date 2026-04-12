"use client";
// src/components/forms/CaregiverForm.tsx
// All Family Health Care — Caregiver Consultation Request Form (Netlify)

import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-charcoal placeholder-muted transition-colors focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20";

const labelBase = "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted";

export default function CaregiverForm() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <form
        name="caregiver-consultation"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="caregiver-consultation" />
        <div hidden aria-hidden="true">
          <label>
            Do not fill this out if you are human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* Your name + relationship */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cg-your-name" className={labelBase}>
              Your Name <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="cg-your-name"
              type="text"
              name="your-name"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="cg-relationship" className={labelBase}>
              Your Relationship to Patient <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <select
              id="cg-relationship"
              name="relationship"
              required
              defaultValue=""
              className={cn(inputBase, "cursor-pointer")}
            >
              <option value="" disabled>Select relationship…</option>
              <option value="Spouse">Spouse</option>
              <option value="Son/Daughter">Son / Daughter</option>
              <option value="Sibling">Sibling</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Phone + email */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cg-phone" className={labelBase}>
              Phone Number <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="cg-phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(773) 555-0000"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="cg-email" className={labelBase}>
              Email Address
            </label>
            <input
              id="cg-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your@email.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Patient age */}
        <div className="mt-4">
          <label htmlFor="cg-patient-age" className={labelBase}>
            Patient Age
          </label>
          <input
            id="cg-patient-age"
            type="number"
            name="patient-age"
            min={0}
            max={130}
            placeholder="e.g. 78"
            className={inputBase}
          />
        </div>

        {/* Current situation */}
        <div className="mt-4">
          <label htmlFor="cg-current-situation" className={labelBase}>
            Describe the Current Situation <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <textarea
            id="cg-current-situation"
            name="current-situation"
            required
            rows={4}
            placeholder="Tell us about your loved one's condition, recent hospital stays, or care needs…"
            className={cn(inputBase, "resize-y")}
          />
        </div>

        {/* Biggest challenge */}
        <div className="mt-4">
          <label htmlFor="cg-biggest-challenge" className={labelBase}>
            What Is Your Biggest Challenge Right Now?
          </label>
          <input
            id="cg-biggest-challenge"
            type="text"
            name="biggest-challenge"
            placeholder="e.g. Managing medications, fall prevention, balancing work and caregiving"
            className={inputBase}
          />
        </div>

        {/* Best time to call */}
        <div className="mt-4">
          <label htmlFor="cg-best-time" className={labelBase}>
            Best Time to Call
          </label>
          <select
            id="cg-best-time"
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

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark hover:shadow-electric/35 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          >
            Request Caregiver Consultation
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          Free · No obligation · A care coordinator will contact you within 24 hours
        </p>
      </form>
    </div>
  );
}
