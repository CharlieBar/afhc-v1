// src/app/patients/how-to-start-home-health/page.tsx
// All Family Health Care — How to Start Home Health Care

import type { Metadata } from "next";
import Link from "next/link";
import { howToStartSeo, howToStartContent } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: howToStartSeo.title,
  description: howToStartSeo.description,
  keywords: howToStartSeo.keywords,
  alternates: { canonical: howToStartSeo.canonical },
  openGraph: {
    title: howToStartSeo.title,
    description: howToStartSeo.description,
    url: howToStartSeo.canonical,
    type: "website",
  },
};

export default function HowToStartPage() {
  const { hero, scenarios, faqs } = howToStartContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "How to Start" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero data={hero} />

      <TrustBar />

      {/* Scenarios */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="scenarios-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Common Scenarios
              </span>
            </div>
            <h2
              id="scenarios-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              How to Start — Depending on Your Situation
            </h2>
          </div>

          <div className="space-y-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <h3 className="mb-3 font-heading text-[20px] font-bold text-charcoal">{scenario.title}</h3>
                <p className="mb-5 text-sm font-light leading-relaxed text-body">{scenario.description}</p>

                <ol className="space-y-3" role="list">
                  {scenario.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3" role="listitem">
                      <div
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric text-white font-heading text-[11px] font-bold"
                        aria-hidden="true"
                      >
                        {idx + 1}
                      </div>
                      <p className="text-[14px] font-light leading-relaxed text-body pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>

                {scenario.cta && (
                  <div className="mt-5">
                    <Link
                      href={scenario.cta.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-5 py-2.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                    >
                      {scenario.cta.text}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Need help getting started? We guide you through every step.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              A nurse can be at your door within 24–48 hours of your call.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* What information to have ready */}
      <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              When You Call
            </span>
          </div>
          <h2
            className="mb-6 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
          >
            What to Have When You Call (Optional — Don&apos;t Wait)
          </h2>
          <p className="mb-8 max-w-[560px] text-sm font-light leading-relaxed text-body">
            Don&apos;t have everything ready? Call anyway. We&apos;ll guide you through it. Here&apos;s what&apos;s helpful but not required:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Patient name and date of birth", optional: false },
              { label: "Medicare or insurance information", optional: true },
              { label: "Physician's name and phone number", optional: true },
              { label: "Description of care needs or concerns", optional: false },
              { label: "Hospital discharge paperwork (if recent)", optional: true },
              { label: "Patient's home address", optional: false },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <span className="mt-0.5 text-electric" aria-hidden="true">✓</span>
                <div>
                  <p className="text-[13px] font-medium text-charcoal">{item.label}</p>
                  {item.optional && (
                    <p className="text-[11px] text-muted">Optional — we can gather this later</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={faqs}
        eyebrow="Getting Started"
        headline="Common Questions About Starting Care"
      />

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to take the first step?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call now — we&apos;ll handle the rest.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
