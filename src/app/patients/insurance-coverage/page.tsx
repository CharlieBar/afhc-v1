// src/app/patients/insurance-coverage/page.tsx
// All Family Health Care — Insurance Coverage Page

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import type { FAQItem } from "@/types/content";

export const metadata: Metadata = {
  title: "Insurance Coverage for Home Health Care",
  description:
    "Understand your insurance options for home health care in Chicago — Medicare, Medicaid, Medicare Advantage, and private insurance. All Family Health Care verifies benefits at no charge.",
  keywords: [
    "home health insurance coverage",
    "Medicaid home health Chicago",
    "Medicare Advantage home health",
    "private insurance home health",
  ],
  alternates: { canonical: "https://www.allfamilyhealthcare.com/patients/insurance-coverage" },
  openGraph: {
    title: "Insurance Coverage for Home Health Care",
    description:
      "Understand your insurance options for home health care in Chicago — Medicare, Medicaid, Medicare Advantage, and private insurance.",
    url: "https://www.allfamilyhealthcare.com/patients/insurance-coverage",
    type: "website",
  },
};

const coverageOptions = [
  {
    name: "Original Medicare (Part A & B)",
    badge: "Most Common",
    badgeColor: "bg-electric-light text-electric border-electric/20",
    description:
      "Medicare Part A and Part B cover home health services when you meet eligibility criteria: a physician's order, homebound status, and a need for skilled care. For covered services, Medicare pays 100% — no copays or deductibles.",
    covers: [
      "Skilled nursing visits",
      "Physical, occupational, and speech therapy",
      "Home health aide (when part of a skilled care plan)",
      "Medical social services",
    ],
    doesNotCover: [
      "24-hour custodial care",
      "Meals delivered to your home",
      "Non-medical homemaker services",
    ],
  },
  {
    name: "Medicare Advantage (Part C)",
    badge: "Accepted",
    badgeColor: "bg-electric-light text-electric border-electric/20",
    description:
      "Most Medicare Advantage plans cover home health care with the same or better benefits than Original Medicare. We work with all major Medicare Advantage plans in the Chicago area. Benefits vary by plan — call us and we'll verify your specific coverage at no charge.",
    covers: [
      "All Medicare-covered home health services (plan-specific)",
      "Some plans offer additional benefits beyond Original Medicare",
      "Many plans have $0 copay for in-network home health",
    ],
    doesNotCover: [
      "Out-of-network services may have different cost-sharing",
      "Check your plan's home health benefit details",
    ],
  },
  {
    name: "Medicaid (Illinois)",
    badge: "Accepted",
    badgeColor: "bg-electric-light text-electric border-electric/20",
    description:
      "Illinois Medicaid covers home health services for qualifying low-income patients. If you have both Medicare and Medicaid (dual eligible), your combined benefits typically mean no out-of-pocket costs for covered home health services.",
    covers: [
      "Skilled nursing and therapy services",
      "Home health aide services",
      "Dual eligible: Medicare pays first, Medicaid fills gaps",
    ],
    doesNotCover: [
      "Non-medical home care (unless through a specific waiver program)",
    ],
  },
  {
    name: "Private Insurance",
    badge: "Case by Case",
    badgeColor: "bg-surface text-muted border-border",
    description:
      "Many private health insurance plans include home health benefits. Coverage varies widely by plan, employer, and policy terms. We'll verify your specific plan's home health benefits and any prior authorization requirements before care begins.",
    covers: [
      "Skilled nursing and therapy (plan-specific)",
      "Coverage amount and visit limits vary",
      "Prior authorization often required",
    ],
    doesNotCover: [
      "Depends entirely on your specific plan",
      "Call us to verify — we do this at no charge",
    ],
  },
];

const insuranceFAQs: FAQItem[] = [
  {
    question: "How do you verify my insurance before care begins?",
    answer:
      "Our intake team contacts your insurance provider directly to verify your home health benefits, coverage limits, and any prior authorization requirements — before your first visit. This service is completely free. You won't receive any surprise bills.",
    category: "Insurance Verification",
  },
  {
    question: "What if my insurance doesn't cover home health care?",
    answer:
      "If your insurance doesn't cover home health care, or if you're uninsured, please call us at (773) 775-2588. We can discuss private-pay options and help you explore programs you may qualify for, including Medicare enrollment if you're not yet enrolled.",
    category: "Insurance Verification",
  },
  {
    question: "Do I need a referral from my insurance company?",
    answer:
      "This depends on your plan. Medicare doesn't require a referral from your insurance company, but does require a physician's order. Some private insurance and Medicare Advantage plans require prior authorization. We handle all of this on your behalf.",
    category: "Insurance Process",
  },
  {
    question: "What if my insurance is from another state?",
    answer:
      "Insurance issued in other states can sometimes be used for home health in Illinois. Call us and we'll check your specific plan's network status and coverage for our service area.",
    category: "Insurance Process",
  },
];

export default function InsuranceCoveragePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "Insurance Coverage" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Insurance & Coverage",
          headline: "Understanding Insurance Coverage for Home Health Care",
          subheadline:
            "We accept Medicare, Medicaid, Medicare Advantage, and many private insurance plans. We verify your benefits at no charge before care begins — no surprise bills.",
          primaryCTA: {
            text: "📞 Verify My Coverage: (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "✅ We verify your benefits at no charge before care begins",
        }}
      />

      <TrustBar />

      {/* Coverage options */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="coverage-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Coverage Options
              </span>
            </div>
            <h2
              id="coverage-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Insurance Plans We Accept
            </h2>
          </div>

          <div className="space-y-6">
            {coverageOptions.map((option) => (
              <div
                key={option.name}
                className="rounded-xl border border-border bg-surface p-6 md:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-[18px] font-bold text-charcoal">{option.name}</h3>
                  <span
                    className={`rounded-sm border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${option.badgeColor}`}
                  >
                    {option.badge}
                  </span>
                </div>
                <p className="mb-5 text-sm font-light leading-relaxed text-body">{option.description}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-electric">
                      Typically Covers
                    </p>
                    <ul className="space-y-1.5">
                      {option.covers.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-body">
                          <span className="mt-0.5 text-electric" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
                      May Not Cover
                    </p>
                    <ul className="space-y-1.5">
                      {option.doesNotCover.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-body">
                          <span className="mt-0.5 text-muted" aria-hidden="true">–</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Not sure what your plan covers? Let us check for you.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Benefits verification is free — and we handle all the calls to your insurance company.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* FAQ */}
      <FAQAccordion
        items={insuranceFAQs}
        eyebrow="Coverage Questions"
        headline="Insurance Coverage FAQs"
      />

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to verify your coverage?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us — most coverage is verified same business day.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
