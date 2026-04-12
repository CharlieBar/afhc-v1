// src/app/patients/medicare-home-health-benefits/page.tsx
// All Family Health Care — Medicare Home Health Benefits

import type { Metadata } from "next";
import { medicareSeo, medicareContent } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: medicareSeo.title,
  description: medicareSeo.description,
  keywords: medicareSeo.keywords,
  alternates: { canonical: medicareSeo.canonical },
  openGraph: {
    title: medicareSeo.title,
    description: medicareSeo.description,
    url: medicareSeo.canonical,
    type: "website",
  },
};

export default function MedicareBenefitsPage() {
  const { hero, whatIsCovered, eligibility, costSection, faqs } = medicareContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "Medicare Benefits" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero data={hero} />

      <TrustBar />

      {/* What Medicare Covers */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="covered-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Coverage Details
              </span>
            </div>
            <h2
              id="covered-heading"
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {whatIsCovered.headline}
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body md:text-base">
              {whatIsCovered.body}
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {whatIsCovered.items.map((item) => (
              <div key={item.title} className="bg-surface p-6" role="listitem">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-electric-light">
                    <span className="font-mono text-[10px] uppercase text-electric" aria-hidden="true">✓</span>
                  </div>
                  <h3 className="font-heading text-[15px] font-bold text-charcoal">{item.title}</h3>
                </div>
                <p className="text-[13px] font-light leading-relaxed text-body">{item.description}</p>
                {item.covered && (
                  <span className="mt-3 inline-block rounded-sm border border-electric/20 bg-electric-light px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-electric">
                    Medicare Covered
                  </span>
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
              We verify your Medicare benefits at no charge — before care begins.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              No paperwork, no surprises. Call us to confirm your coverage today.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Eligibility */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="eligibility-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Eligibility Requirements
              </span>
            </div>
            <h2
              id="eligibility-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {eligibility.headline}
            </h2>
          </div>

          <ol className="space-y-4" role="list">
            {eligibility.requirements.map((req, idx) => (
              <li
                key={idx}
                className="flex items-start gap-5 rounded-xl border border-border bg-surface p-6"
                role="listitem"
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric text-white font-heading text-sm font-bold"
                  aria-hidden="true"
                >
                  {idx + 1}
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-[15px] font-bold text-charcoal">{req.title}</h3>
                  <p className="text-[13px] font-light leading-relaxed text-body">{req.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cost Section */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Cost & Coverage
            </span>
          </div>
          <h2
            className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            {costSection.headline}
          </h2>
          <div className="max-w-[720px]">
            <p className="mb-4 text-sm font-light leading-relaxed text-body md:text-base">
              {costSection.body}
            </p>
            <div className="rounded-xl border border-border bg-bg p-5">
              <p className="text-[13px] font-light leading-relaxed text-muted">
                <strong className="font-semibold text-charcoal">Please note:</strong> {costSection.note}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={faqs}
        eyebrow="Medicare Questions"
        headline="Medicare Home Health FAQs"
      />

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Not sure if you qualify? Call us — verification is free.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              We check your benefits before care begins. No surprise bills.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
