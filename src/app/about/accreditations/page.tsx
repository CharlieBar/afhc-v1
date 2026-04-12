// src/app/about/accreditations/page.tsx
// All Family Health Care — Accreditations & Certifications

import type { Metadata } from "next";
import { accreditationsSeo, accreditationsContent } from "@/content/pages/about";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: accreditationsSeo.title,
  description: accreditationsSeo.description,
  alternates: { canonical: accreditationsSeo.canonical },
  openGraph: {
    title: accreditationsSeo.title,
    description: accreditationsSeo.description,
    url: accreditationsSeo.canonical,
    type: "website",
  },
};

export default function AccreditationsPage() {
  const { hero, accreditations, staffCredentials } = accreditationsContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Accreditations" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: hero.eyebrow,
          headline: hero.headline,
          subheadline: hero.subheadline,
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "✅ Medicare Certified · Joint Commission Gold Seal · Illinois Licensed",
        }}
      />

      <TrustBar />

      {/* Accreditations */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="accred-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Our Credentials
              </span>
            </div>
            <h2
              id="accred-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Accreditations & Certifications
            </h2>
          </div>

          <div className="space-y-8">
            {accreditations.map((accred) => (
              <div key={accred.name} className="rounded-xl border border-border bg-surface p-6 md:p-8">
                <div className="mb-4">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="rounded-sm border border-electric/20 bg-electric-light px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-electric">
                      Accreditation
                    </span>
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-charcoal">{accred.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{accred.issuer}</p>
                </div>
                <p className="mb-5 text-sm font-light leading-relaxed text-body">{accred.description}</p>
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-electric">
                    What This Means for Your Care
                  </p>
                  <ul className="space-y-2" role="list">
                    {accred.whatItMeans.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[13px] font-light text-body" role="listitem">
                        <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Our accreditations mean you receive the highest quality care — guaranteed.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call to schedule a free in-home assessment today.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Staff credentials */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="staff-creds-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Clinical Staff
              </span>
            </div>
            <h2
              id="staff-creds-heading"
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {staffCredentials.headline}
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              {staffCredentials.body}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            {staffCredentials.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4" role="listitem">
                <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">✓</span>
                <p className="text-[13px] font-light text-body">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why accreditation matters */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Why It Matters
              </span>
            </div>
            <h2
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              Not All Home Health Agencies Are Equal
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              Many home health agencies are only Medicare-certified — the minimum federal requirement. All Family Health Care goes further, holding Joint Commission accreditation, the same standard used by the country&apos;s best hospitals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Medicare Certification Only", desc: "Meets minimum federal requirements. Required to receive Medicare payment.", tag: "Minimum Standard" },
              { label: "Joint Commission Accredited", desc: "Voluntarily meets standards above the federal minimum. Same as top hospitals.", tag: "Gold Standard" },
              { label: "All Family Health Care", desc: "Medicare-certified AND Joint Commission-accredited. Both credentials, maintained continuously.", tag: "Both — All Family" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-bg p-5">
                <span className="mb-2 inline-block font-mono text-[9px] uppercase tracking-widest text-electric">
                  {item.tag}
                </span>
                <h3 className="mb-2 font-heading text-[14px] font-bold text-charcoal">{item.label}</h3>
                <p className="text-[12px] font-light text-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Choose the highest standard. Choose All Family Health Care.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Schedule a free in-home assessment and see the difference.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
