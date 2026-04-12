// src/app/referrals/how-to-refer/page.tsx
// All Family Health Care — How to Refer a Patient

import type { Metadata } from "next";
import Link from "next/link";
import { referralProcess } from "@/content/pages/referrals";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "How to Refer a Patient",
  description:
    "Three ways to refer a patient to All Family Health Care — by phone, fax, or online. We confirm all referrals within 24 hours and start care within 24–48 hours.",
  keywords: ["how to refer home health patient Chicago", "home health referral process"],
  alternates: { canonical: "https://www.allfamilyhealthcare.com/referrals/how-to-refer" },
  openGraph: {
    title: "How to Refer a Patient",
    description:
      "Three ways to refer a patient to All Family Health Care — by phone, fax, or online. We confirm all referrals within 24 hours.",
    url: "https://www.allfamilyhealthcare.com/referrals/how-to-refer",
    type: "website",
  },
};

const referralMethods = [
  {
    method: "Phone",
    detail: "(773) 775-2588",
    description:
      "Call our referral line directly. A care coordinator answers during business hours. For urgent referrals, calling is the fastest option.",
    badge: "Fastest Response",
    cta: { text: "Call Now", href: "tel:(773)775-2588" },
  },
  {
    method: "Online Form",
    detail: "allfamilyhealthcare.com/referrals/referral-form",
    description:
      "Submit a complete referral securely online. We confirm receipt within 24 hours by phone or email. Available 24/7.",
    badge: "Available 24/7",
    cta: { text: "Submit Online", href: "/referrals/referral-form" },
  },
  {
    method: "Fax",
    detail: "Contact us for fax number",
    description:
      "Fax clinical documentation and referral information directly to our intake team. Please call us after faxing to confirm receipt for urgent cases.",
    badge: "For Clinical Documents",
    cta: { text: "Get Fax Number", href: "tel:(773)775-2588" },
  },
];

const requiredInfo = [
  { label: "Patient name and date of birth", required: true },
  { label: "Patient phone / family contact", required: true },
  { label: "Home address where care will be provided", required: true },
  { label: "Primary diagnosis / ICD-10 code", required: true },
  { label: "Services ordered (skilled nursing, PT, OT, etc.)", required: true },
  { label: "Insurance information (Medicare ID, etc.)", required: false },
  { label: "Physician name and office phone", required: false },
  { label: "Hospital discharge date (if applicable)", required: false },
  { label: "Clinical notes or special instructions", required: false },
];

export default function HowToReferPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Physicians", href: "/referrals" },
              { label: "How to Refer" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Referral Process",
          headline: "How to Refer a Patient — Three Simple Options",
          subheadline:
            "Call, fax, or submit online. We confirm every referral within 24 hours and initiate care within 24–48 hours of receiving complete information.",
          primaryCTA: {
            text: "📞 Call Referral Line: (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Submit Online Referral",
            href: "/referrals/referral-form",
          },
          badge: "✅ We accept referrals 7 days a week · Urgent cases handled same day",
        }}
      />

      <TrustBar />

      {/* Referral Methods */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="methods-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Referral Options
              </span>
            </div>
            <h2
              id="methods-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Three Ways to Refer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {referralMethods.map((method) => (
              <div
                key={method.method}
                className="flex flex-col rounded-xl border border-border bg-surface p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-[20px] font-bold text-charcoal">{method.method}</h3>
                  <span className="rounded-sm border border-electric/20 bg-electric-light px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-electric">
                    {method.badge}
                  </span>
                </div>
                <p className="mb-2 font-mono text-[12px] text-electric">{method.detail}</p>
                <p className="mb-5 flex-1 text-[13px] font-light leading-relaxed text-body">
                  {method.description}
                </p>
                <Link
                  href={method.cta.href}
                  className="inline-flex items-center justify-center rounded-lg bg-electric px-5 py-2.5 font-heading text-sm font-bold text-white transition-all hover:bg-electric-dark focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                >
                  {method.cta.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                After You Refer
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              What Happens After You Refer
            </h2>
          </div>

          <ol className="space-y-[2px] overflow-hidden rounded-xl border border-border bg-border" role="list">
            {referralProcess.map((step) => (
              <li key={step.step} className="bg-bg p-6 md:p-8" role="listitem">
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-electric-light"
                    aria-hidden="true"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-electric">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-heading text-[17px] font-bold text-charcoal">{step.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-body">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What information we need */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="info-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Referral Checklist
              </span>
            </div>
            <h2
              id="info-heading"
              className="mb-3 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Information We Need
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              Don&apos;t have everything ready? Don&apos;t let that delay a referral — we can gather missing information. Required fields are marked below.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            {requiredInfo.map((item) => (
              <li key={item.label} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4" role="listitem">
                <span
                  className={`mt-0.5 flex-shrink-0 ${item.required ? "text-electric" : "text-muted"}`}
                  aria-hidden="true"
                >
                  {item.required ? "✓" : "○"}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-charcoal">{item.label}</p>
                  {!item.required && (
                    <p className="text-[11px] text-muted">Optional — helpful but not required</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton variant="default" />
            <Link
              href="/referrals/referral-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              Submit Online Referral
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Urgent referral? Call us directly.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              We prioritize urgent cases and start care as quickly as possible.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip
        eyebrow="Refer a Patient Today"
        headline="A Home Health Partner You Can Rely On"
        subheadline="Medicare-certified, Joint Commission-accredited, 24-hour response, and consistent communication back to your office."
      />
    </>
  );
}
