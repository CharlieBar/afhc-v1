// src/app/patients/page.tsx
// All Family Health Care — Patients & Caregivers Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import { patientsSeo, patientsHero, patientPages } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: patientsSeo.title,
  description: patientsSeo.description,
  keywords: patientsSeo.keywords,
  alternates: { canonical: patientsSeo.canonical },
  openGraph: {
    title: patientsSeo.title,
    description: patientsSeo.description,
    url: patientsSeo.canonical,
    type: "website",
  },
};

export default function PatientsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: patientsHero.eyebrow,
          headline: patientsHero.headline,
          subheadline: patientsHero.subheadline,
          primaryCTA: patientsHero.primaryCTA,
          secondaryCTA: patientsHero.secondaryCTA,
          badge: "Medicare Certified · Joint Commission Accredited · Serving Chicago 20+ Years",
          image: patientsHero.image,
          stats: [
            { value: "20+", label: "Years Serving Chicago" },
            { value: "100%", label: "Medicare Covered" },
            { value: "5,000+", label: "Patients Cared For" },
            { value: "24/7", label: "On-Call Nursing" },
          ],
        }}
      />

      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Have questions? Our care coordinators answer the phone during business hours.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Patient Resources Grid */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="patients-hub-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Patient Resources
              </span>
            </div>
            <h2
              id="patients-hub-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Everything You Need to Know
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body md:text-base">
              Guides, resources, and answers for patients and family caregivers navigating home health care in Chicago.
            </p>
          </div>

          {/* Resource Cards */}
          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Patient resource pages"
          >
            {patientPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                role="listitem"
                className="group block bg-surface p-6 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
                aria-label={`Go to ${page.title} resource`}
              >
                <h3 className="mb-2 font-heading text-[17px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                  {page.title}
                </h3>
                <p className="text-[13px] font-light leading-relaxed text-body mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  {page.cta}
                </span>
              </Link>
            ))}
          </div>

          {/* Also: patient rights */}
          <div className="mt-[2px] overflow-hidden rounded-b-xl border-x border-b border-border bg-surface p-6 transition-all hover:bg-electric-light">
            <Link
              href="/patients/patient-rights"
              className="group block focus:outline-none focus:ring-2 focus:ring-electric"
              aria-label="Learn about your patient rights"
            >
              <h3 className="mb-2 font-heading text-[17px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                Your Rights as a Patient
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-body mb-4">
                Every patient receiving home health care has important rights protected by federal and state law. Know what you&apos;re entitled to.
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                View Patient Rights →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom phone CTA bar */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to get started? We&apos;re here to help.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Medicare covers most services at no cost to you. Call to verify your benefits.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
