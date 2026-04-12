// src/components/sections/ProcessSteps.tsx
// All Family Health Care — How It Works / Process Steps Section

import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProcessStep, CTA } from "@/types/content";

interface ProcessStepsProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  steps: ProcessStep[];
  cta?: CTA;
  phoneCTA?: CTA;
}

// Icon map for step icons stored as strings
const stepIconMap: Record<string, string> = {
  "phone-call": "📞",
  "clipboard-check": "📋",
  heart: "❤️",
  phone: "📞",
  check: "✓",
  calendar: "📅",
};

function getStepIcon(icon?: string): string {
  if (!icon) return "✦";
  return stepIconMap[icon] ?? "✦";
}

export default function ProcessSteps({
  eyebrow,
  headline,
  subheadline,
  steps,
  cta,
  phoneCTA,
}: ProcessStepsProps) {
  return (
    <section
      className="bg-surface-2 py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-12 text-center">
          {eyebrow && (
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                {eyebrow}
              </span>
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            </div>
          )}
          <h2
            id="process-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="mx-auto max-w-[560px] text-sm leading-relaxed text-body font-light md:text-base">
              {subheadline}
            </p>
          )}
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          aria-label="Process steps"
        >
          {steps.map((step, idx) => (
            <li key={idx} className="relative">
              {/* Connector line between steps (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute top-10 left-full hidden h-px w-6 -translate-x-3 bg-border md:block"
                  aria-hidden="true"
                />
              )}

              <div className="rounded-xl border border-border bg-surface p-7 h-full">
                {/* Step number */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-electric-light border border-electric/20">
                    <span className="font-mono text-[11px] font-bold text-electric">
                      {step.step}
                    </span>
                  </span>
                  {step.icon && (
                    <span className="text-2xl" aria-hidden="true">
                      {getStepIcon(step.icon)}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-[17px] font-bold tracking-tight text-charcoal mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] font-light leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA buttons */}
        {(cta || phoneCTA) && (
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {cta && (
              <Link
                href={cta.href}
                aria-label={cta.ariaLabel ?? cta.text}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
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
        )}
      </div>
    </section>
  );
}
