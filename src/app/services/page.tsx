// src/app/services/page.tsx
// All Family Health Care — Services Hub Page

import type { Metadata } from "next";
import { coreServices, specializedServices } from "@/content/services";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import type { ProcessStep } from "@/types/content";

export const metadata: Metadata = {
  title: "Home Health Care Services in Chicago",
  description:
    "All Family Health Care provides a full range of Medicare-certified home health services in Chicago — skilled nursing, physical therapy, occupational therapy, speech therapy, wound care, and more.",
  openGraph: {
    images: [{ url: "/images/og/services.jpg" }],
  },
};

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Call Us or Ask Your Doctor",
    description:
      "Call (773) 775-2588 or ask your physician, hospital discharge planner, or social worker to refer you. We handle all the paperwork.",
    icon: "phone-call",
  },
  {
    step: "02",
    title: "We Verify Your Benefits",
    description:
      "Our care coordinators verify your Medicare or insurance coverage and confirm what services are authorized — at no cost to you.",
    icon: "clipboard-check",
  },
  {
    step: "03",
    title: "Care Begins Within 24–48 Hours",
    description:
      "A clinician comes to your home, conducts a full assessment, and begins delivering personalized care — often within one to two days of your physician's order.",
    icon: "heart",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Home Health Care Services",
          headline: "Our Home Health Care Services",
          subheadline:
            "We deliver a full range of Medicare-certified, physician-ordered home health services — skilled nursing, therapy, wound care, and more — bringing hospital-level care to patients across Chicago and surrounding communities.",
          primaryCTA: {
            text: "Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
            ariaLabel: "Call All Family Health Care at (773) 775-2588",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "Medicare Certified · Joint Commission Accredited · Serving Chicago 20+ Years",
          image: {
            src: "/images/hero/services.jpg",
            alt: "Nurse with medical tablet consulting with senior patient at home",
            width: 1344,
            height: 768,
          },
          stats: [
            { value: "12", label: "Services Offered" },
            { value: "20+", label: "Years in Chicago" },
            { value: "5,000+", label: "Patients Cared For" },
            { value: "24/7", label: "On-Call Nursing" },
          ],
        }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Questions about which service is right for you?
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Core Services Grid */}
      <ServiceGrid
        eyebrow="Core Services"
        headline="Essential Home Health Services"
        subheadline="Our core clinical services — staffed by registered nurses, licensed therapists, and trained aides — form the foundation of every care plan."
        services={coreServices}
      />

      {/* Specialized Services Grid */}
      <ServiceGrid
        eyebrow="Specialized Services"
        headline="Specialized Clinical Programs"
        subheadline="Advanced clinical programs tailored to specific conditions, surgical recovery, and complex care needs — all delivered in the comfort of home."
        services={specializedServices}
      />

      {/* Process Steps */}
      <ProcessSteps
        eyebrow="How It Works"
        headline="Starting Care Is Simple"
        subheadline="From your first call to your first visit, we handle every detail — so you can focus on healing."
        steps={processSteps}
        cta={{
          text: "Schedule Free Assessment",
          href: "/contact",
        }}
        phoneCTA={{
          text: "(773) 775-2588",
          href: "tel:(773)775-2588",
          ariaLabel: "Call All Family Health Care at (773) 775-2588",
        }}
      />

      {/* Bottom phone CTA bar */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to begin? Our care coordinators are standing by.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              No pressure, no commitment — just answers to your questions.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
