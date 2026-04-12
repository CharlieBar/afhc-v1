// src/components/sections/MedicareSection.tsx
// All Family Health Care — Medicare Benefits Two-Column Section

import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import type { CTA } from "@/types/content";

interface MedicarePoint {
  icon: string;
  text: string;
}

interface MedicareSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  cta?: CTA;
  phoneCTA?: CTA;
  points: MedicarePoint[];
}

export default function MedicareSection({
  eyebrow,
  headline,
  subheadline,
  body,
  cta,
  phoneCTA,
  points,
}: MedicareSectionProps) {
  return (
    <section
      className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="medicare-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column — info */}
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
              id="medicare-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-5"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {headline}
            </h2>

            {subheadline && (
              <p className="mb-4 text-sm leading-relaxed text-body font-light md:text-base">
                {subheadline}
              </p>
            )}

            {body && (
              <p className="mb-6 text-sm leading-relaxed text-muted font-light">
                {body}
              </p>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {cta && (
                <Link
                  href={cta.href}
                  aria-label={cta.ariaLabel ?? cta.text}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-electric bg-electric-light px-5 py-3 font-heading text-sm font-bold text-electric transition-all hover:bg-electric hover:text-white focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                >
                  {cta.text}
                </Link>
              )}
              {phoneCTA && (
                <a
                  href={phoneCTA.href}
                  aria-label={phoneCTA.ariaLabel ?? `Call us: ${phoneCTA.text}`}
                  className="inline-flex items-center gap-2 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {phoneCTA.text}
                </a>
              )}
            </div>
          </div>

          {/* Right column — checklist */}
          <div
            className="rounded-xl border border-border bg-surface-2 p-8"
            aria-label="Medicare coverage checklist"
          >
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                What&apos;s Covered
              </span>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3" role="listitem">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-body font-light">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Phone CTA in card */}
            {phoneCTA && (
              <a
                href={phoneCTA.href}
                aria-label={phoneCTA.ariaLabel ?? `Call us: ${phoneCTA.text}`}
                className="mt-8 flex items-center gap-3 rounded-lg border border-electric/20 bg-electric-light p-4 transition-all hover:bg-electric hover:text-white group focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-electric text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted group-hover:text-white/70 transition-colors">
                    Call to Verify Your Benefits
                  </div>
                  <div className="font-heading text-base font-bold text-charcoal group-hover:text-white transition-colors">
                    {phoneCTA.text.replace("Call to Verify Your Benefits: ", "")}
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
