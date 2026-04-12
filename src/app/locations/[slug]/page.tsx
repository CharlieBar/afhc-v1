// src/app/locations/[slug]/page.tsx
// All Family Health Care — Dynamic Location Detail Page (31 pages)

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ChevronRight, Star } from "lucide-react";
import {
  locations,
  allLocationSlugs,
  getNearbyLocations,
  type LocationSlug,
} from "@/content/locations";
import { allServices } from "@/content/services";
import { allConditions } from "@/content/conditions";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}


export function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested location page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical =
    location.seo?.canonical ??
    `https://www.allfamilyhealthcare.com/locations/${location.slug}`;

  const title =
    location.seo?.title ||
    `Home Health Care in ${location.name}, Chicago`;

  const description =
    location.seo?.description ||
    `Home health care in ${location.name}, Chicago from All Family Health Care. Skilled nursing, therapy, and personal care at home. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: location.seo?.keywords ?? [
      `home health care ${location.name}`,
      `${location.name} home health`,
      "Chicago home health",
      "Medicare home health Chicago",
    ],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [{
        url: "/images/og/locations.jpg",
        width: 1200,
        height: 630,
        alt: `Home health care in ${location.name}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/locations.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(slug as LocationSlug);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: location.name },
            ]}
          />
        </div>
      </div>

      {/* 1. Hero */}
      <Hero data={location.hero} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Intro */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="services-intro-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main content */}
            <div>
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Our Services in {location.name}
                </span>
              </div>

              <h2
                id="services-intro-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-6"
                style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
              >
                {location.servicesIntro.headline}
              </h2>

              <p className="mb-8 max-w-[640px] text-base font-light leading-relaxed text-body">
                {location.servicesIntro.body}
              </p>

              {/* Services list */}
              <div className="mb-10">
                <h3 className="mb-5 font-heading text-[17px] font-bold tracking-tight text-charcoal">
                  Home Health Services We Provide:
                </h3>
                <div
                  className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
                  role="list"
                  aria-label={`Home health services in ${location.name}`}
                >
                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      role="listitem"
                      className="group block bg-surface p-5 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
                      aria-label={`${service.name} in ${location.name}`}
                    >
                      <h4 className="mb-1 font-heading text-[14px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                        {service.name}
                      </h4>
                      <p className="text-[12px] font-light leading-relaxed text-muted">
                        {service.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Inline phone CTA — occurrence 1 of 3 */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <PhoneButton variant="large" />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                >
                  Schedule Free Assessment
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Page sidebar">
              {/* Conditions teaser card */}
              <div className="mb-8 rounded-xl border border-border bg-surface p-7">
                <h3 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                  Conditions We Treat
                </h3>
                <ul className="space-y-2" aria-label="All conditions we treat">
                  {allConditions.map((condition) => (
                    <li key={condition.slug}>
                      <Link
                        href={`/conditions/${condition.slug}`}
                        className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                      >
                        <ChevronRight
                          className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        {condition.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-border pt-4">
                  <Link
                    href="/conditions"
                    className="inline-flex items-center gap-1 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
                  >
                    View All Conditions
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Sidebar phone CTA — occurrence 2 of 3 */}
              <div className="rounded-xl border border-electric/20 bg-electric-light p-6 text-center">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  Free Consultation
                </p>
                <p className="mb-4 font-heading text-sm font-semibold text-charcoal">
                  Questions about home health care in {location.name}?
                </p>
                <PhoneButton variant="default" className="w-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Conditions We Treat in [Location] */}
      <section
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="conditions-grid-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Conditions We Treat
            </span>
          </div>
          <h2
            id="conditions-grid-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            Conditions We Treat in {location.name}
          </h2>
          <p className="mb-10 max-w-[560px] text-sm leading-relaxed text-body font-light md:text-base">
            Our clinical team in {location.name} has deep experience managing the conditions that matter most to families in your community.
          </p>
          <div
            className="grid grid-cols-2 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            role="list"
            aria-label={`Medical conditions treated in ${location.name}`}
          >
            {allConditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                role="listitem"
                className="group block bg-bg p-4 text-center transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
                aria-label={`${condition.name} home care in ${location.name}`}
              >
                <span className="font-heading text-[13px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                  {condition.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Local */}
      <section
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="why-choose-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Why Choose Us in {location.name}
              </span>
            </div>
            <h2
              id="why-choose-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {location.whyChooseLocal.headline}
            </h2>
          </div>

          {/* Points grid */}
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Reasons to choose All Family Health Care"
          >
            {location.whyChooseLocal.points.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-surface p-7 shadow-sm"
                role="listitem"
              >
                {/* Number badge */}
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-electric-light border border-electric/20">
                  <span className="font-mono text-[11px] font-bold text-electric">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-[16px] font-bold tracking-tight text-charcoal mb-2">
                  {point.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-body">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Care in [Location] */}
      <ProcessSteps
        eyebrow={`Getting Started in ${location.name}`}
        headline={`How to Start Home Health Care in ${location.name}`}
        subheadline={`Getting professional care for your loved one in ${location.name} is simple. Most families have a nurse at their door within 24\u201348 hours.`}
        steps={[
          {
            step: "01",
            title: "Call Us or Get a Referral",
            description: `Call (773) 775-2588 or ask your ${location.name} physician, hospital discharge planner, or specialist for a home health referral. We handle all coordination and paperwork from there.`,
            icon: "phone-call",
          },
          {
            step: "02",
            title: "Free In-Home Assessment",
            description: `A registered nurse visits your ${location.name} home to assess your loved one\u2019s needs, verify Medicare or insurance coverage, and create a personalized care plan \u2014 at no charge.`,
            icon: "clipboard-check",
          },
          {
            step: "03",
            title: "Care Begins at Home",
            description: `Your dedicated ${location.name} care team starts visits \u2014 usually within 24\u201348 hours. We coordinate with your doctor and keep your family informed every step of the way.`,
            icon: "heart",
          },
        ]}
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

      {/* 5. Testimonials (if available) */}
      {location.testimonials && location.testimonials.length > 0 && (
        <section
          className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Section header */}
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Patient Stories
                </span>
              </div>
              <h2
                id="testimonials-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
              >
                What {location.name} Families Are Saying
              </h2>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {location.testimonials.map((testimonial, idx) => (
                <blockquote
                  key={idx}
                  className="rounded-xl border border-border bg-surface p-7 shadow-sm"
                >
                  {/* Stars */}
                  <div
                    className="mb-4 flex gap-1"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-electric text-electric"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-5 text-sm font-light leading-relaxed text-body italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <footer className="flex flex-col">
                    <cite className="not-italic font-heading text-[14px] font-bold text-charcoal">
                      {testimonial.author}
                    </cite>
                    {testimonial.role && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted mt-0.5">
                        {testimonial.role}
                      </span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section
          className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
          aria-labelledby="nearby-heading"
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Section header */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Also Serving
                </span>
              </div>
              <h2
                id="nearby-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
              >
                Nearby Areas We Also Serve from {location.name}
              </h2>
            </div>

            {/* Nearby cards */}
            <div
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              role="list"
              aria-label="Nearby communities with home health care"
            >
              {nearbyLocations.map((nearby) => {
                const nearbyData = locations[nearby.slug as LocationSlug];
                return (
                  <div key={nearby.slug} role="listitem">
                    <Link
                      href={nearby.href}
                      className="group flex flex-col gap-2 rounded-xl border border-border bg-bg p-5 transition-all hover:border-electric/40 hover:bg-electric-light hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                      aria-label={`Home health care in ${nearby.name}`}
                    >
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-electric-light border border-electric/20 group-hover:bg-white transition-colors"
                        aria-hidden="true"
                      >
                        <MapPin className="h-4 w-4 text-electric" />
                      </div>
                      <span className="font-heading text-[14px] font-bold tracking-tight text-charcoal group-hover:text-electric transition-colors">
                        {nearby.name}
                      </span>
                      {nearbyData && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                          {nearbyData.type === "neighborhood" ? "Chicago" : "IL Suburb"}
                        </span>
                      )}
                      <span className="mt-auto flex items-center gap-1 font-heading text-[11px] font-semibold text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                        View Services
                        <ChevronRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Link back to hub */}
            <div className="mt-8">
              <Link
                href="/locations"
                className="inline-flex items-center gap-1 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark focus:outline-none focus:underline"
              >
                View All 31 Service Areas
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Mid-page phone CTA bar — occurrence 3 of 3 */}
      <div className="bg-bg border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to start home health care in {location.name}?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Care coordinators available now — no pressure, no commitment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* 7. FAQ */}
      <FAQAccordion
        eyebrow={`FAQs · ${location.name}`}
        headline={`Common Questions About Home Health Care in ${location.name}`}
        items={location.faqs}
      />

      {/* 8. CTA Strip */}
      <CTAStrip />

      <FAQSchema items={location.faqs ?? []} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
          { name: "Locations", url: "https://www.allfamilyhealthcare.com/locations" },
          { name: location.name, url: `https://www.allfamilyhealthcare.com/locations/${location.slug}` },
        ]}
      />
    </>
  );
}
