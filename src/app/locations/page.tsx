// src/app/locations/page.tsx
// All Family Health Care — Locations Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { locations } from "@/content/locations";
import type { LocationPage } from "@/types/content";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Home Health Care Service Areas",
  description:
    "All Family Health Care provides Medicare-certified home health services across 31 Chicago neighborhoods and North Shore communities — skilled nursing, therapy, and personal care delivered to your home.",
  openGraph: {
    images: [{ url: "/images/og/locations.jpg" }],
  },
};

// Split locations into two groups
const allLocations = Object.values(locations) as LocationPage[];
const chicagoLocations = allLocations.filter((loc) => loc.type === "neighborhood");
const suburbLocations = allLocations.filter((loc) => loc.type === "suburb");

function LocationCard({ location }: { location: LocationPage }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all hover:border-electric/40 hover:bg-electric-light hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
      aria-label={`Home health care in ${location.fullName}`}
    >
      {/* Icon + badge row */}
      <div className="flex items-start justify-between gap-2">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-electric-light border border-electric/20 group-hover:bg-white transition-colors"
          aria-hidden="true"
        >
          <MapPin className="h-5 w-5 text-electric" />
        </div>
        <span
          className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest ${
            location.type === "neighborhood"
              ? "bg-electric-light text-electric border border-electric/20"
              : "bg-surface-2 text-muted border border-border"
          }`}
        >
          {location.type === "neighborhood" ? "Chicago" : "Suburb"}
        </span>
      </div>

      {/* Name */}
      <div>
        <h3 className="font-heading text-[15px] font-bold tracking-tight text-charcoal group-hover:text-electric transition-colors">
          {location.name}
        </h3>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
          {location.state}
          {location.zip && location.zip.length > 0 ? ` · ${location.zip[0]}` : ""}
        </p>
      </div>

      {/* Arrow */}
      <div className="mt-auto flex items-center gap-1 font-heading text-xs font-semibold text-electric opacity-0 group-hover:opacity-100 transition-opacity">
        View Services
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </Link>
  );
}

export default function LocationsHubPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Service Areas · Chicago & North Shore",
          headline: "Home Health Care Across Chicago & the North Shore",
          subheadline:
            "We bring Medicare-certified skilled nursing, therapy, and personal care to 31 communities — so your loved one can recover safely at home, in the neighborhood they know.",
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
            src: "/images/hero/locations.jpg",
            alt: "Home health nurse arriving at a Chicago home for a patient visit",
            width: 1344,
            height: 768,
          },
          stats: [
            { value: "31", label: "Communities Served" },
            { value: "20+", label: "Years in Chicago" },
            { value: "5,000+", label: "Patients Helped" },
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
            Not sure if we serve your neighborhood? Call us — we&apos;ll confirm coverage for free.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Chicago Neighborhoods Section */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="chicago-neighborhoods-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Chicago Neighborhoods
              </span>
            </div>
            <h2
              id="chicago-neighborhoods-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Chicago Neighborhoods We Serve
            </h2>
            <p className="mt-3 max-w-[580px] text-sm font-light leading-relaxed text-body md:text-base">
              Our clinical team covers Chicago&apos;s North Side, Northwest Side, and surrounding communities — delivering care within hours of your call.
            </p>
          </div>

          {/* Location cards grid */}
          <div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            role="list"
            aria-label="Chicago neighborhoods served"
          >
            {chicagoLocations.map((location) => (
              <div key={location.slug} role="listitem">
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* North Shore & Suburbs Section */}
      <section
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="north-shore-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                North Shore &amp; Suburbs
              </span>
            </div>
            <h2
              id="north-shore-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              North Shore &amp; Suburban Communities
            </h2>
            <p className="mt-3 max-w-[580px] text-sm font-light leading-relaxed text-body md:text-base">
              We extend the same Medicare-certified, Joint Commission accredited care to communities north and west of Chicago.
            </p>
          </div>

          {/* Location cards grid */}
          <div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            role="list"
            aria-label="North Shore and suburban communities served"
          >
            {suburbLocations.map((location) => (
              <div key={location.slug} role="listitem">
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA bar */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to start care in your community?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call now — a care coordinator will answer your questions with no pressure and no commitment.
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
