// src/app/conditions/page.tsx
// All Family Health Care — Conditions Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import {
  allConditions,
  conditionCategories,
  getConditionsByCategory,
} from "@/content/conditions";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Conditions We Treat at Home",
  description:
    "All Family Health Care provides expert home health care for a wide range of medical conditions — heart failure, stroke, COPD, diabetes, Parkinson's, post-surgical recovery, and more — throughout Chicago and surrounding communities.",
  openGraph: {
    images: [{ url: "/images/og/conditions.jpg" }],
  },
};

// Category color accent for visual distinction
const categoryAccentMap: Record<string, string> = {
  Cardiovascular: "text-rose-600",
  Neurological: "text-violet-600",
  Respiratory: "text-sky-600",
  Metabolic: "text-amber-600",
  Musculoskeletal: "text-emerald-600",
  Oncology: "text-pink-600",
  "General Recovery": "text-electric",
};

function getCategoryAccent(category: string): string {
  return categoryAccentMap[category] ?? "text-electric";
}

export default function ConditionsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Conditions" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Conditions We Treat",
          headline: "Conditions We Treat at Home",
          subheadline:
            "Our Medicare-certified clinicians care for patients with a wide range of acute and chronic conditions — bringing expert medical care directly to your home across Chicago and surrounding communities.",
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
          badge: "Medicare Certified · Joint Commission Accredited · 20+ Conditions Treated",
          image: {
            src: "/images/hero/conditions.jpg",
            alt: "Occupational therapist guiding senior patient through a fine motor skill triumph",
            width: 1344,
            height: 768,
          },
          stats: [
            { value: "20+", label: "Conditions Treated" },
            { value: "6", label: "Specialty Areas" },
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
            Not sure if we treat your condition? Call us and we&apos;ll help.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Conditions by Category */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="conditions-hub-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Browse By Category
              </span>
            </div>
            <h2
              id="conditions-hub-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Conditions Organized by Specialty
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body md:text-base">
              Find your condition by category below. Each condition page explains how our team
              provides care and which services are typically involved.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {conditionCategories.map((category) => {
              const conditions = getConditionsByCategory(category);
              if (conditions.length === 0) return null;

              return (
                <div key={category}>
                  {/* Category heading */}
                  <div className="mb-6 flex items-center gap-4">
                    <h3
                      className={`font-heading text-[22px] font-bold tracking-tight ${getCategoryAccent(category)}`}
                    >
                      {category}
                    </h3>
                    <span className="flex-1 border-t border-border" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {conditions.length} condition{conditions.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Condition cards */}
                  <div
                    className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label={`${category} conditions`}
                  >
                    {conditions.map((condition) => (
                      <Link
                        key={condition.slug}
                        href={`/conditions/${condition.slug}`}
                        role="listitem"
                        className="group block bg-surface p-6 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
                        aria-label={`Learn about ${condition.name} home care`}
                      >
                        <h4 className="mb-1.5 font-heading text-[15px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                          {condition.name}
                        </h4>
                        <p className="line-clamp-2 text-[13px] font-light leading-relaxed text-body">
                          {condition.tagline}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-electric opacity-0 transition-opacity group-hover:opacity-100">
                          Learn More
                          <span aria-hidden="true">→</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* All conditions count + bottom phone nudge */}
          <div className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              Don&apos;t see your condition?
            </p>
            <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
              We Treat Many More Conditions
            </h3>
            <p className="mb-6 mx-auto max-w-[480px] text-sm font-light leading-relaxed text-body">
              Our clinical team manages a wide spectrum of medical needs. Call us to speak with a
              care coordinator who can answer your specific questions.
            </p>
            <PhoneButton variant="large" />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
