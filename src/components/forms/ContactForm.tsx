"use client";
// src/components/forms/ContactForm.tsx
// All Family Health Care — General Contact Form (Netlify)

import { cn } from "@/lib/utils";
import FormConnectionNotice from "@/components/forms/FormConnectionNotice";

const inputBase =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-charcoal placeholder-muted transition-colors focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20";

const labelBase = "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted";

export default function ContactForm() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <FormConnectionNotice />
      <form
        name="contact-general"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="contact-general" />
        <div hidden aria-hidden="true">
          <label>
            Do not fill this out if you are human:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="cf-name" className={labelBase}>
            Full Name <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputBase}
          />
        </div>

        {/* Phone + Email */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-phone" className={labelBase}>
              Phone Number <span className="text-electric" aria-hidden="true">*</span>
            </label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(773) 555-0000"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelBase}>
              Email Address
            </label>
            <input
              id="cf-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="your@email.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mt-4">
          <label htmlFor="cf-subject" className={labelBase}>
            Subject <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <select
            id="cf-subject"
            name="subject"
            required
            defaultValue=""
            className={cn(inputBase, "cursor-pointer")}
          >
            <option value="" disabled>Select a subject…</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Request Information">Request Information</option>
            <option value="Schedule Assessment">Schedule Assessment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label htmlFor="cf-message" className={labelBase}>
            Message <span className="text-electric" aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder="How can we help you?"
            className={cn(inputBase, "resize-y")}
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark hover:shadow-electric/35 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
          We respond within 24 hours · Your information is private and secure
        </p>
      </form>
    </div>
  );
}
