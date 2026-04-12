// src/app/referrals/page.tsx
// All Family Health Care — Physician Referrals Hub

import type { Metadata } from "next";
import Link from "next/link";
import {
  referralsSeo,
  referralsHero,
  whyReferSection,
  referralProcess,
  clinicalCapabilities,
  referralFAQs,
} from "@/content/pages/referrals";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: referralsSeo.title,
  description: referralsSeo.description,
  keywords: referralsSeo.keywords,
  alternates: { canonical: referralsSeo.canonical },
  openGraph: {
    title: referralsSeo.title,
    description: referralsSeo.description,
    url: referralsSeo.canonical,
    type: "website",
  },
};

const referralPages = [
  {
    title: "How to Refer a Patient",
    description: "Step-by-step referral process — call, fax, or submit online. We confirm within 24 hours.",
    href: "/referrals/how-to-refer",
    cta: "Learn the Referral Process →",
  },
  {
    title: "Online Referral Form",
    description: "Submit a complete patient referral securely online. We respond within 24 business hours.",
    href: "/referrals/referral-form",
    cta: "Submit Referral Online →",
  },
  {
    title: "Physician Resources",
    description: "Clinical documentation, referral checklists, and resources for referring physicians.",
    href: "/referrals/physician-resources",
    cta: "Access Resources →",
  },
  {
    title: "Contact Our Referral Team",
    description: "Speak directly with our intake coordinator or clinical team. Direct line for physician offices.",
    href: "/referrals/contact-referral-team",
    cta: "Contact the Referral Team →",
  },
];

export default function ReferralsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Physicians" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: referralsHero.eyebrow,
          headline: referralsHero.headline,
          subheadline: referralsHero.subheadline,
          primaryCTA: referralsHero.primaryCTA,
          secondaryCTA: referralsHero.secondaryCTA,
          badge: referralsHero.badge,
          image: referralsHero.image,
          stats: [
            { value: "24hr", label: "Referral Response" },
            { value: "20+", label: "Years in Chicago" },
            { value: "30+", label: "Communities Served" },
            { value: "100%", label: "Medicare Certified" },
          ],
        }}
      />

      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Ready to refer? Call our direct referral line or submit online.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <PhoneButton variant="default" />
            <Link
              href="/referrals/referral-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              Submit Referral Online
            </Link>
          </div>
        </div>
      </div>

      {/* Why Refer Section */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="why-refer-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                {whyReferSection.eyebrow}
              </span>
            </div>
            <h2
              id="why-refer-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {whyReferSection.headline}
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {whyReferSection.features.map((feature) => (
              <div key={feature.title} className="bg-surface p-6" role="listitem">
                <h3 className="mb-2 font-heading text-[15px] font-bold text-charcoal">{feature.title}</h3>
                <p className="text-[13px] font-light leading-relaxed text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Process */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Referral Process
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              How the Referral Process Works
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PhoneButton variant="default" />
            <Link
              href="/referrals/referral-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-bg px-5 py-2.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              Submit Online Referral
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Capabilities */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="clinical-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                {clinicalCapabilities.eyebrow}
              </span>
            </div>
            <h2
              id="clinical-heading"
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {clinicalCapabilities.headline}
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              {clinicalCapabilities.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalCapabilities.specialties.map((specialty) => (
              <div key={specialty.category} className="rounded-xl border border-border bg-surface p-5">
                <h3 className="mb-3 font-heading text-[14px] font-bold text-charcoal">{specialty.category}</h3>
                <ul className="space-y-1.5">
                  {specialty.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-body">
                      <span className="mt-0.5 text-electric" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Referral Resources
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Physician Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {referralPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group block bg-bg p-6 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
              >
                <h3 className="mb-2 font-heading text-[17px] font-bold text-charcoal transition-colors group-hover:text-electric">
                  {page.title}
                </h3>
                <p className="mb-4 text-[13px] font-light leading-relaxed text-body">{page.description}</p>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  {page.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        items={referralFAQs}
        eyebrow="Physician FAQs"
        headline="Common Referral Questions"
      />

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to refer? We make it fast and simple.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call our referral line or submit online — we respond within 24 hours.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
