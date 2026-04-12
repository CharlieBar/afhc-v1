// src/app/referrals/physician-resources/page.tsx
// All Family Health Care — Physician Resources

import type { Metadata } from "next";
import Link from "next/link";
import { clinicalCapabilities } from "@/content/pages/referrals";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Physician Resources",
  description:
    "Resources for physicians and discharge planners working with All Family Health Care — referral guides, clinical capabilities, and communication processes.",
  keywords: ["physician home health resources Chicago", "home health referral checklist", "home health clinical capabilities"],
  alternates: { canonical: "https://www.allfamilyhealthcare.com/referrals/physician-resources" },
  openGraph: {
    title: "Physician Resources",
    description:
      "Resources for physicians and discharge planners working with All Family Health Care.",
    url: "https://www.allfamilyhealthcare.com/referrals/physician-resources",
    type: "website",
  },
};

const communicationProcess = [
  {
    timing: "Within 24 hours of referral",
    what: "Referral confirmation — we confirm receipt, insurance verification status, and scheduled first visit.",
  },
  {
    timing: "After initial assessment",
    what: "Initial assessment summary — copy of the comprehensive in-home assessment sent to your office.",
  },
  {
    timing: "As needed (significant changes)",
    what: "Condition change notifications — prompt notification if there is a significant clinical change, hospitalization, or ER visit.",
  },
  {
    timing: "30-day mark",
    what: "30-day progress update — clinical summary of progress toward goals and current status.",
  },
  {
    timing: "60-day recertification",
    what: "Recertification documentation — physician signature required; we handle all paperwork preparation.",
  },
  {
    timing: "At discharge",
    what: "Discharge summary — clinical summary, goal outcomes, and discharge plan sent to your office.",
  },
];

const quickLinks = [
  {
    title: "Submit a Referral Online",
    description: "Complete our secure online referral form — available 24/7.",
    href: "/referrals/referral-form",
    cta: "Submit Referral →",
  },
  {
    title: "How to Refer a Patient",
    description: "Step-by-step guide to the referral process — phone, fax, or online.",
    href: "/referrals/how-to-refer",
    cta: "See the Process →",
  },
  {
    title: "Contact the Referral Team",
    description: "Speak directly with our intake coordinator or clinical supervisor.",
    href: "/referrals/contact-referral-team",
    cta: "Contact Us →",
  },
];

export default function PhysicianResourcesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Physicians", href: "/referrals" },
              { label: "Physician Resources" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "For Physicians & Discharge Planners",
          headline: "Clinical Resources for Referring Physicians",
          subheadline:
            "Everything you need to refer patients, understand our clinical capabilities, and set expectations for communication and care delivery.",
          primaryCTA: {
            text: "📞 Call Referral Line: (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Submit Referral Online",
            href: "/referrals/referral-form",
          },
          badge: "✅ Medicare Certified · Joint Commission Accredited · 20+ Years in Chicago",
        }}
      />

      <TrustBar />

      {/* Quick Links */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-label="Quick links for physicians"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Quick Access
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Referral Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:border-electric/40 hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <h3 className="mb-2 font-heading text-[16px] font-bold text-charcoal transition-colors group-hover:text-electric">
                  {link.title}
                </h3>
                <p className="mb-4 text-[13px] font-light leading-relaxed text-body">
                  {link.description}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-electric">
                  {link.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Physician Communication Process */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Communication Protocol
              </span>
            </div>
            <h2
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              How We Keep You Informed
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              We believe referring physicians deserve complete visibility into their patients&apos; home health episode. Here is our standard communication schedule:
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-bg">
            {communicationProcess.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border-b border-border p-5 last:border-b-0 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex-shrink-0 sm:w-48">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-electric">
                    {item.timing}
                  </span>
                </div>
                <p className="text-[13px] font-light leading-relaxed text-body">{item.what}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <PhoneButton variant="default" />
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

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Want to discuss a complex patient before referring?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call our clinical team directly — we welcome the conversation.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip
        eyebrow="Refer a Patient Today"
        headline="A Home Health Partner Who Follows Through"
        subheadline="Medicare-certified, Joint Commission-accredited, and committed to keeping you informed throughout every episode of care."
      />
    </>
  );
}
