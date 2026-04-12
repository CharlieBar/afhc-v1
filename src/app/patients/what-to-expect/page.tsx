// src/app/patients/what-to-expect/page.tsx
// All Family Health Care — What to Expect with Home Health Care

import type { Metadata } from "next";
import { whatToExpectSeo, whatToExpectContent } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: whatToExpectSeo.title,
  description: whatToExpectSeo.description,
  keywords: whatToExpectSeo.keywords,
  alternates: { canonical: whatToExpectSeo.canonical },
  openGraph: {
    title: whatToExpectSeo.title,
    description: whatToExpectSeo.description,
    url: whatToExpectSeo.canonical,
    type: "website",
  },
};

export default function WhatToExpectPage() {
  const { hero, steps, faqs } = whatToExpectContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "What to Expect" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero data={hero} />

      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Have questions before we start? Call us — we&apos;ll walk you through everything.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Process Steps */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                The Process
              </span>
            </div>
            <h2
              id="process-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Step-by-Step: How Home Health Care Works
            </h2>
          </div>

          <ol className="space-y-[2px] overflow-hidden rounded-xl border border-border bg-border" role="list">
            {steps.map((step) => (
              <li key={step.step} className="bg-surface p-6 md:p-8" role="listitem">
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
                    <h3 className="mb-2 font-heading text-[17px] font-bold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to prepare section */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Be Prepared
            </span>
          </div>
          <h2
            className="mb-6 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
          >
            What to Have Ready for Your First Visit
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "All current medications", detail: "Include supplements and over-the-counter drugs" },
              { label: "Insurance cards", detail: "Medicare card, Medicaid card, or private insurance" },
              { label: "List of physicians", detail: "Names and phone numbers of all treating doctors" },
              { label: "Recent hospital records", detail: "Discharge summaries, test results if available" },
              { label: "Emergency contacts", detail: "Names and numbers of family members or caregivers" },
              { label: "A safe, accessible space", detail: "Clear pathways and a comfortable area for the visit" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-bg p-5">
                <p className="mb-1 font-heading text-[14px] font-bold text-charcoal">{item.label}</p>
                <p className="text-[13px] font-light text-body">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PhoneButton variant="default" />
            <p className="text-sm font-light text-body">
              Don&apos;t worry — we&apos;ll guide you through everything on your first call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={faqs}
        eyebrow="Your Questions Answered"
        headline="Common Questions About What to Expect"
      />

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to get started? A nurse can be at your door within 24–48 hours.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Medicare covers most services at no cost to you.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
