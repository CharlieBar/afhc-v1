// src/app/about/page.tsx
// All Family Health Care — About Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import { aboutSeo, aboutHero } from "@/content/pages/about";
import { site } from "@/content/global/site";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.description,
  keywords: aboutSeo.keywords,
  alternates: { canonical: aboutSeo.canonical },
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    url: aboutSeo.canonical,
    type: "website",
  },
};

const aboutPages = [
  {
    title: "Our Story",
    description: "20+ years of caring for Chicago families. Learn how All Family Health Care began and why we do what we do.",
    href: "/about/our-story",
    cta: "Read Our Story →",
  },
  {
    title: "Our Team",
    description: "Meet the registered nurses, therapists, aides, and care coordinators who make exceptional home health care possible.",
    href: "/about/our-team",
    cta: "Meet the Team →",
  },
  {
    title: "Mission & Values",
    description: "The principles that guide every care decision — from our mission statement to the values that define our culture.",
    href: "/about/mission-values",
    cta: "Our Mission →",
  },
  {
    title: "Accreditations",
    description: "Medicare-certified and Joint Commission-accredited. What these credentials mean and why they matter for your care.",
    href: "/about/accreditations",
    cta: "View Accreditations →",
  },
  {
    title: "Why Choose All Family",
    description: "What makes us different from other Chicago home health agencies? A side-by-side comparison.",
    href: "/about/why-choose-all-family",
    cta: "See the Difference →",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: aboutHero.eyebrow,
          headline: aboutHero.headline,
          subheadline: aboutHero.subheadline,
          primaryCTA: aboutHero.primaryCTA,
          secondaryCTA: aboutHero.secondaryCTA,
          image: aboutHero.image,
          stats: site.stats,
        }}
      />

      <TrustBar />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Questions about our agency? We answer calls during business hours.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* About Pages Grid */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="about-hub-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Learn About Us
              </span>
            </div>
            <h2
              id="about-hub-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Everything About All Family Health Care
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {aboutPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                role="listitem"
                className="group block bg-surface p-6 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
              >
                <h3 className="mb-2 font-heading text-[17px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                  {page.title}
                </h3>
                <p className="mb-4 text-[13px] font-light leading-relaxed text-body">{page.description}</p>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  {page.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations highlight */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Our Credentials
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              The Highest Standards in Home Health Care
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: "Medicare Certified",
                issuer: "Centers for Medicare & Medicaid Services",
                detail: "We meet all federal quality and safety standards required for Medicare certification.",
              },
              {
                name: "Joint Commission Gold Seal",
                issuer: "The Joint Commission",
                detail: "The same accreditation earned by top hospitals — the highest standard in home health.",
              },
              {
                name: "Illinois Licensed",
                issuer: "Illinois Department of Public Health",
                detail: "State-licensed home health agency meeting all Illinois staffing and care standards.",
              },
            ].map((cred) => (
              <div key={cred.name} className="rounded-xl border border-border bg-bg p-5">
                <h3 className="mb-1 font-heading text-[15px] font-bold text-charcoal">{cred.name}</h3>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-electric">{cred.issuer}</p>
                <p className="text-[13px] font-light text-body">{cred.detail}</p>
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
              Ready to get started? We&apos;re here to help.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Medicare-covered home health care in Chicago — call to verify your benefits.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
