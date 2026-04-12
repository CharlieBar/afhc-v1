// src/app/about/our-story/page.tsx
// All Family Health Care — Our Story

import type { Metadata } from "next";
import { ourStorySeo, ourStoryContent } from "@/content/pages/about";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: ourStorySeo.title,
  description: ourStorySeo.description,
  alternates: { canonical: ourStorySeo.canonical },
  openGraph: {
    title: ourStorySeo.title,
    description: ourStorySeo.description,
    url: ourStorySeo.canonical,
    type: "website",
  },
};

export default function OurStoryPage() {
  const { hero, sections, timeline } = ourStoryContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Story" },
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
        }}
      />

      <TrustBar />

      {/* Story Sections */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="story-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Our History
            </span>
          </div>
          <h2
            id="story-heading"
            className="mb-12 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            The Story of All Family Health Care
          </h2>

          <div className="space-y-12 max-w-[800px]">
            {sections.map((section, idx) => (
              <div key={idx} className="border-l-2 border-electric pl-6">
                <h3 className="mb-4 font-heading text-[20px] font-bold text-charcoal">{section.headline}</h3>
                {section.body.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx} className="mb-4 text-sm font-light leading-relaxed text-body last:mb-0">
                    {paragraph}
                  </p>
                ))}
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
              We&apos;d love to welcome you to the All Family family.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us to discuss your care needs — no pressure, no commitment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Timeline */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="timeline-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Our Milestones
              </span>
            </div>
            <h2
              id="timeline-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Key Milestones
            </h2>
          </div>

          <ol className="relative max-w-[600px] space-y-0" role="list">
            {timeline.map((item, idx) => (
              <li key={idx} className="flex items-start gap-6 pb-10 last:pb-0" role="listitem">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-electric bg-electric-light">
                    <span className="h-2 w-2 rounded-full bg-electric" aria-hidden="true" />
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="mt-2 flex-1 w-px min-h-[40px] bg-border" aria-hidden="true" />
                  )}
                </div>
                <div className="pt-1.5">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-electric">
                    {item.year}
                  </span>
                  <p className="font-heading text-[16px] font-bold text-charcoal">{item.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              20 years of caring for Chicago families — let us care for yours.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call today to schedule a free in-home assessment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
