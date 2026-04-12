// src/components/sections/LocationGrid.tsx
// All Family Health Care — Location Cards Grid Section

import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import type { CTA } from "@/types/content";

interface LocationItem {
  name: string;
  slug: string;
}

interface LocationGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  featured: LocationItem[];
  cta?: CTA;
}

export default function LocationGrid({ eyebrow, headline, subheadline, featured, cta }: LocationGridProps) {
  return (
    <section
      className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2
              id="locations-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-2"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {headline}
            </h2>
            {subheadline && (
              <p className="max-w-[560px] text-sm leading-relaxed text-body font-light md:text-base">
                {subheadline}
              </p>
            )}
          </div>

          {cta && (
            <Link
              href={cta.href}
              aria-label={cta.ariaLabel ?? cta.text}
              className="inline-flex flex-shrink-0 items-center gap-1.5 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark"
            >
              {cta.text}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Location cards */}
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          role="list"
          aria-label="Service locations"
        >
          {featured.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              role="listitem"
              aria-label={`Home health care in ${location.name}`}
              className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface p-4 transition-all hover:border-electric/30 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              <MapPin
                className="h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-electric"
                aria-hidden="true"
              />
              <span className="font-heading text-sm font-semibold text-charcoal transition-colors group-hover:text-electric">
                {location.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
