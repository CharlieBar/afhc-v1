// src/components/sections/ConditionGrid.tsx
// All Family Health Care — Conditions Tag Cloud Section

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CTA } from "@/types/content";

interface ConditionItem {
  name: string;
  slug: string;
  icon: string;
}

interface ConditionGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  featured: ConditionItem[];
  cta?: CTA;
}

export default function ConditionGrid({ eyebrow, headline, subheadline, featured, cta }: ConditionGridProps) {
  return (
    <section
      className="border-y border-border bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="conditions-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header row */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
              id="conditions-heading"
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

        {/* Condition tags */}
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Conditions we treat"
        >
          {featured.map((condition) => (
            <Link
              key={condition.slug}
              href={`/conditions/${condition.slug}`}
              role="listitem"
              className={cn(
                "inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-3.5 py-2",
                "text-xs font-medium text-body transition-all",
                "hover:border-electric/35 hover:bg-electric-light hover:text-electric",
                "focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-1"
              )}
              aria-label={`Learn about ${condition.name}`}
            >
              {condition.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
