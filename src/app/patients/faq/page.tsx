// src/app/patients/faq/page.tsx
// All Family Health Care — Home Health Care FAQ

import type { Metadata } from "next";
import { faqSeo, allFAQs, faqCategories } from "@/content/pages/patients";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import FAQSchema from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: faqSeo.title,
  description: faqSeo.description,
  keywords: faqSeo.keywords,
  alternates: { canonical: faqSeo.canonical },
  openGraph: {
    title: faqSeo.title,
    description: faqSeo.description,
    url: faqSeo.canonical,
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "FAQ" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Frequently Asked Questions",
          headline: "Home Health Care Questions — Answered",
          subheadline:
            "The most common questions we receive from patients and families — about Medicare coverage, our services, eligibility, and getting started in Chicago.",
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
        }}
      />

      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Don&apos;t see your question here? Call us — we answer the phone during business hours.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* FAQs by Category with phone CTAs between */}
      {faqCategories.map((category, idx) => {
        const items = allFAQs.filter((faq) => faq.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category}>
            <FAQAccordion
              items={items}
              eyebrow={category}
              headline={category}
            />
            {idx < faqCategories.length - 1 && (
              <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
                <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <p className="text-sm font-light text-body">
                    Need help right now?
                  </p>
                  <PhoneButton variant="default" />
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Still have questions? We&apos;re happy to help.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Real people answer our phone during business hours — no voicemail mazes.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />

      <FAQSchema items={allFAQs} />
    </>
  );
}
