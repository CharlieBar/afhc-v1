// src/app/about/why-choose-all-family/page.tsx
// All Family Health Care — Why Choose All Family Health Care

import type { Metadata } from "next";
import { whyChooseSeo, whyChooseContent } from "@/content/pages/about";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: whyChooseSeo.title,
  description: whyChooseSeo.description,
  alternates: { canonical: whyChooseSeo.canonical },
  openGraph: {
    title: whyChooseSeo.title,
    description: whyChooseSeo.description,
    url: whyChooseSeo.canonical,
    type: "website",
  },
};

export default function WhyChoosePage() {
  const { hero, comparisons, testimonials } = whyChooseContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Why Choose All Family" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero data={hero} />

      <TrustBar />

      {/* Comparison Table */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="compare-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                The Difference
              </span>
            </div>
            <h2
              id="compare-heading"
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              All Family vs. Other Home Health Agencies
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              Not all home health agencies are the same. Here&apos;s an honest comparison of what sets us apart.
            </p>
          </div>

          {/* Comparison header */}
          <div className="mb-1 grid grid-cols-3 overflow-hidden rounded-t-xl border border-b-0 border-border bg-charcoal">
            <div className="p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Category</span>
            </div>
            <div className="border-l border-white/10 bg-electric p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white">All Family Health Care</span>
            </div>
            <div className="border-l border-white/10 p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Other Agencies</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-b-xl border border-border bg-border">
            {comparisons.map((comparison, idx) => (
              <div
                key={comparison.category}
                className={`grid grid-cols-3 gap-[1px] ${idx < comparisons.length - 1 ? "mb-[1px]" : ""}`}
              >
                <div className="bg-surface p-5">
                  <p className="font-heading text-[13px] font-bold text-charcoal">{comparison.category}</p>
                </div>
                <div className="bg-electric-light p-5">
                  <p className="text-[13px] font-medium leading-snug text-charcoal">{comparison.us}</p>
                </div>
                <div className="bg-surface p-5">
                  <p className="text-[13px] font-light leading-snug text-muted">{comparison.others}</p>
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
              Experience the All Family difference for yourself.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call to schedule a free in-home assessment — no commitment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Testimonials */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                What People Say
              </span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              From Patients & Physicians
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <figure key={idx} className="rounded-xl border border-border bg-surface p-6 md:p-8">
                <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-electric" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="mb-4">
                  <p className="text-sm font-light leading-relaxed text-body">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption>
                  <p className="font-heading text-[14px] font-bold text-charcoal">{testimonial.author}</p>
                  <p className="text-[12px] text-muted">{testimonial.role}</p>
                  {testimonial.location && (
                    <p className="text-[12px] text-muted">{testimonial.location}</p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Summary comparison bullets */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                The All Family Advantage
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              Every Reason to Choose All Family
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            {[
              "Medicare-certified AND Joint Commission-accredited",
              "Locally owned — embedded in Chicago's North Side for 20+ years",
              "Same nurse and therapist assigned to each patient for consistency",
              "24/7 on-call nursing — real people answer, not voicemail",
              "Care starts within 24–48 hours — same-day for urgent cases",
              "Free Medicare and insurance benefits verification before care begins",
              "Regular physician communication — updates after every significant visit",
              "Caregiver education at every visit — families feel supported too",
              "Serving 30+ Chicago neighborhoods and suburbs",
              "5,000+ patients cared for over 20+ years",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4" role="listitem">
                <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">✓</span>
                <p className="text-[13px] font-light text-body">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PhoneButton variant="large" />
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
