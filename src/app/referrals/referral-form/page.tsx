// src/app/referrals/referral-form/page.tsx
// All Family Health Care — Online Patient Referral Form

import type { Metadata } from "next";
import { referralFormSeo, referralFormContent } from "@/content/pages/referrals";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import ReferralForm from "@/components/forms/ReferralForm";

export const metadata: Metadata = {
  title: referralFormSeo.title,
  description: referralFormSeo.description,
  keywords: referralFormSeo.keywords,
  alternates: { canonical: referralFormSeo.canonical },
  openGraph: {
    title: referralFormSeo.title,
    description: referralFormSeo.description,
    url: referralFormSeo.canonical,
    type: "website",
  },
};

export default function ReferralFormPage() {
  const { hero } = referralFormContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Physicians", href: "/referrals" },
              { label: "Referral Form" },
            ]}
          />
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-bg py-12 px-6 md:py-16 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-sm border border-electric/25 bg-electric-light px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              {hero.eyebrow}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold leading-none tracking-tight text-charcoal"
            style={{ fontSize: "clamp(32px, 7vw, 56px)" }}
          >
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-[560px] text-base font-light leading-relaxed text-body">
            {hero.subheadline}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.phoneCTA.href}
              aria-label={hero.phoneCTA.text}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              {hero.phoneCTA.text}
            </a>
          </div>
        </div>
      </div>

      <TrustBar />

      {/* Form + Sidebar */}
      <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Quick contact */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <h2 className="mb-3 font-heading text-[15px] font-bold text-charcoal">
                    Prefer to Call?
                  </h2>
                  <p className="mb-4 text-[13px] font-light text-body">
                    Our intake coordinator is available during business hours for direct referrals and urgent cases.
                  </p>
                  <PhoneButton variant="default" className="w-full" />
                </div>

                {/* What happens next */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <h2 className="mb-3 font-heading text-[15px] font-bold text-charcoal">
                    After Submission
                  </h2>
                  <ol className="space-y-3">
                    {[
                      "We confirm receipt within 24 hours",
                      "We verify insurance eligibility",
                      "Patient contacted to schedule first visit",
                      "Care begins within 24–48 hours",
                    ].map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-electric-light font-mono text-[9px] font-bold text-electric">
                          {idx + 1}
                        </span>
                        <p className="text-[12px] font-light text-body">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Accreditations */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted">
                    Our Credentials
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Medicare Certified (CMS)",
                      "Joint Commission Gold Seal",
                      "Illinois Licensed Home Health Agency",
                      "20+ Years Serving Chicago",
                    ].map((cred) => (
                      <li key={cred} className="flex items-center gap-2 text-[12px] text-body">
                        <span className="text-electric" aria-hidden="true">✓</span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Need to discuss a complex patient before referring?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us directly — our clinical team is available to discuss any case.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip
        eyebrow="Trusted by Physicians"
        headline="We Make Referrals Easy — and Follow Through"
        subheadline="We respond within 24 hours, keep you informed throughout the episode, and prevent readmissions."
      />
    </>
  );
}
