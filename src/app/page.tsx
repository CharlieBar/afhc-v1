// src/app/page.tsx
// All Family Health Care — Homepage

import type { Metadata } from "next";
import {
  hero,
  urgencyBanner,
  whoWeServe,
  servicesSection,
  conditionsSection,
  medicareSection,
  processSection,
  whyChooseSection,
  testimonialsSection,
  locationsSection,
  blogTeaser,
  finalCTA,
  faqs,
  seo,
} from "@/content/pages/home";

import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhoWeServe from "@/components/sections/WhoWeServe";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ConditionGrid from "@/components/sections/ConditionGrid";
import MedicareSection from "@/components/sections/MedicareSection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import LocationGrid from "@/components/sections/LocationGrid";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.canonical,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical,
    images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />

      {/* Urgency banner — shown between Hero and TrustBar */}
      {urgencyBanner?.text && (
        <div
          className="bg-electric px-6 py-3 text-center"
          role="alert"
          aria-live="polite"
        >
          <p className="inline text-sm font-medium text-white">
            {urgencyBanner.text}{" "}
            <a
              href={urgencyBanner.phoneCTA.href}
              aria-label={`Call us: ${urgencyBanner.phoneCTA.text}`}
              className="inline-flex items-center gap-1 font-bold underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {urgencyBanner.phoneCTA.text}
            </a>
          </p>
        </div>
      )}

      <TrustBar />

      <WhoWeServe
        eyebrow={whoWeServe.eyebrow}
        headline={whoWeServe.headline}
        subheadline={whoWeServe.subheadline}
        personas={whoWeServe.personas}
      />

      <ServiceGrid
        eyebrow={servicesSection.eyebrow}
        headline={servicesSection.headline}
        subheadline={servicesSection.subheadline}
        services={servicesSection.services}
        cta={servicesSection.cta}
      />

      <ConditionGrid
        eyebrow={conditionsSection.eyebrow}
        headline={conditionsSection.headline}
        subheadline={conditionsSection.subheadline}
        featured={conditionsSection.featured}
        cta={conditionsSection.cta}
      />

      <MedicareSection
        eyebrow={medicareSection.eyebrow}
        headline={medicareSection.headline}
        subheadline={medicareSection.subheadline}
        body={medicareSection.body}
        cta={medicareSection.cta}
        phoneCTA={medicareSection.phoneCTA}
        points={medicareSection.points}
      />

      <ProcessSteps
        eyebrow={processSection.eyebrow}
        headline={processSection.headline}
        subheadline={processSection.subheadline}
        steps={processSection.steps}
        cta={processSection.cta}
        phoneCTA={processSection.phoneCTA}
      />

      <WhyChooseSection
        eyebrow={whyChooseSection.eyebrow}
        headline={whyChooseSection.headline}
        subheadline={whyChooseSection.subheadline}
        features={whyChooseSection.features}
      />

      <TestimonialSection
        eyebrow={testimonialsSection.eyebrow}
        headline={testimonialsSection.headline}
        subheadline={testimonialsSection.subheadline}
        testimonials={testimonialsSection.testimonials}
      />

      <LocationGrid
        eyebrow={locationsSection.eyebrow}
        headline={locationsSection.headline}
        subheadline={locationsSection.subheadline}
        featured={locationsSection.featured}
        cta={locationsSection.cta}
      />

      <BlogTeaser
        eyebrow={blogTeaser.eyebrow}
        headline={blogTeaser.headline}
        subheadline={blogTeaser.subheadline}
        featured={blogTeaser.featured}
        cta={blogTeaser.cta}
      />

      <FAQAccordion
        items={faqs}
        eyebrow="FAQ"
        headline="Common Questions About Home Health Care"
      />

      <CTAStrip
        eyebrow={finalCTA.eyebrow}
        headline={finalCTA.headline}
        subheadline={finalCTA.subheadline}
        trustLine={finalCTA.trustLine}
        phoneCTA={finalCTA.primaryCTA}
        secondaryCTA={finalCTA.secondaryCTA}
      />
    </>
  );
}
