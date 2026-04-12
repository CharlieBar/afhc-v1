// src/app/patients/caregiver-resources/page.tsx
// All Family Health Care — Caregiver Resources

import type { Metadata } from "next";
import { caregiverResourcesSeo, caregiverResourcesContent } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import CaregiverForm from "@/components/forms/CaregiverForm";

export const metadata: Metadata = {
  title: caregiverResourcesSeo.title,
  description: caregiverResourcesSeo.description,
  keywords: caregiverResourcesSeo.keywords,
  alternates: { canonical: caregiverResourcesSeo.canonical },
  openGraph: {
    title: caregiverResourcesSeo.title,
    description: caregiverResourcesSeo.description,
    url: caregiverResourcesSeo.canonical,
    type: "website",
  },
};

export default function CaregiverResourcesPage() {
  const { hero, intro, howWeHelp, warningSignsSection, guideTopics } = caregiverResourcesContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "Caregiver Resources" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero data={hero} />

      <TrustBar />

      {/* Intro */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[800px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                The Reality of Caregiving
              </span>
            </div>
            <h2
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {intro.headline}
            </h2>
            <p className="text-sm font-light leading-relaxed text-body md:text-base">
              {intro.body}
            </p>
          </div>
          <div className="mt-8">
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* How We Help Caregivers */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="help-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                How We Help
              </span>
            </div>
            <h2
              id="help-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {howWeHelp.headline}
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {howWeHelp.items.map((item) => (
              <div key={item.title} className="bg-surface p-6" role="listitem">
                <h3 className="mb-2 font-heading text-[15px] font-bold text-charcoal">{item.title}</h3>
                <p className="text-[13px] font-light leading-relaxed text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Warning Signs
            </span>
          </div>
          <h2
            className="mb-3 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            {warningSignsSection.headline}
          </h2>
          <p className="mb-8 max-w-[560px] text-sm font-light leading-relaxed text-body">
            {warningSignsSection.body}
          </p>

          <ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            role="list"
            aria-label="Warning signs your loved one needs more help"
          >
            {warningSignsSection.signs.map((sign) => (
              <li key={sign} className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4" role="listitem">
                <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">⚠</span>
                <p className="text-[13px] font-light text-body">{sign}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={warningSignsSection.cta.href}
              aria-label={warningSignsSection.cta.text}
              className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              {warningSignsSection.cta.text}
            </a>
          </div>
        </div>
      </section>

      {/* Caregiver Guides */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="guides-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Resource Library
              </span>
            </div>
            <h2
              id="guides-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {guideTopics.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideTopics.articles.map((article) => (
              <div
                key={article.slug}
                className="rounded-xl border border-border bg-surface p-5 transition-all hover:border-electric/40 hover:bg-electric-light"
              >
                <span className="mb-2 inline-block font-mono text-[9px] uppercase tracking-widest text-electric">
                  {article.category} · {article.readTime} read
                </span>
                <h3 className="font-heading text-[14px] font-bold text-charcoal leading-snug">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregiver Consultation Form */}
      <section
        className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="consult-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Get Support
                </span>
              </div>
              <h2
                id="consult-heading"
                className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
              >
                Request a Free Caregiver Consultation
              </h2>
              <p className="mb-6 text-sm font-light leading-relaxed text-body">
                Not sure where to start? Our care coordinators can walk you through your options, explain what home health care would look like for your loved one, and answer any questions you have — at no cost and with no commitment.
              </p>
              <div className="mb-6">
                <PhoneButton variant="default" />
              </div>
              <p className="text-[13px] font-light text-muted">
                Prefer a callback? Fill out the form and we&apos;ll reach out at the time you specify.
              </p>
            </div>
            <div>
              <CaregiverForm />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
