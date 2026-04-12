// src/components/sections/CTAStrip.tsx
// All Family Health Care — Full-Width Gradient CTA Block

import Link from "next/link";
import { Phone } from "lucide-react";
import type { CTA } from "@/types/content";

interface CTAStripProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  trustLine?: string;
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  phoneCTA?: CTA;
}

const DEFAULT_EYEBROW = "Ready to Get Started?";
const DEFAULT_HEADLINE = "Your Loved One Deserves to Heal at Home";
const DEFAULT_SUBHEADLINE =
  "Call us today and a care coordinator will answer your questions — no pressure, no commitment. We'll help you understand your options and benefits.";
const DEFAULT_TRUST_LINE =
  "Medicare Certified · Joint Commission Accredited · Licensed in Illinois · Serving Chicago 20+ Years";
const DEFAULT_PHONE_CTA: CTA = {
  text: "(773) 775-2588",
  href: "tel:(773)775-2588",
  variant: "phone",
  ariaLabel: "Call All Family Health Care at (773) 775-2588",
};
const DEFAULT_SECONDARY_CTA: CTA = {
  text: "Schedule Free In-Home Assessment",
  href: "/contact",
  variant: "secondary",
};

export default function CTAStrip({
  eyebrow = DEFAULT_EYEBROW,
  headline = DEFAULT_HEADLINE,
  subheadline = DEFAULT_SUBHEADLINE,
  trustLine = DEFAULT_TRUST_LINE,
  primaryCTA,
  secondaryCTA = DEFAULT_SECONDARY_CTA,
  phoneCTA = DEFAULT_PHONE_CTA,
}: CTAStripProps) {
  return (
    <section
      className="py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14 bg-bg"
      aria-labelledby="cta-strip-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20"
          style={{
            background: "linear-gradient(135deg, var(--electric) 0%, var(--electric-dark) 100%)",
          }}
        >
          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          {/* Glow orb */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative">
            {/* Eyebrow tag */}
            {eyebrow && (
              <div className="mb-6 inline-flex items-center rounded-sm border border-white/25 bg-white/15 px-3 py-1.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Headline */}
            <h2
              id="cta-strip-heading"
              className="font-heading font-extrabold text-white mb-4"
              style={{ fontSize: "clamp(24px, 6vw, 40px)" }}
            >
              {headline}
            </h2>

            {/* Subheadline */}
            {subheadline && (
              <p className="mb-8 max-w-[560px] text-sm leading-relaxed text-white/80 font-light md:text-base">
                {subheadline}
              </p>
            )}

            {/* CTA row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Phone block */}
              <a
                href={phoneCTA?.href ?? "tel:(773)775-2588"}
                aria-label={phoneCTA?.ariaLabel ?? "Call All Family Health Care at (773) 775-2588"}
                className="group inline-flex flex-col rounded-[10px] border border-white/20 bg-white/10 p-[18px] transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-electric sm:min-w-[200px]"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/60 mb-1">
                  Call Now — Free Consultation
                </span>
                <span className="flex items-center gap-2 font-heading text-[26px] font-extrabold text-white leading-none">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {phoneCTA?.text ?? "(773) 775-2588"}
                </span>
              </a>

              {/* White secondary button */}
              {(secondaryCTA || primaryCTA) && (
                <Link
                  href={(primaryCTA ?? secondaryCTA)!.href}
                  aria-label={(primaryCTA ?? secondaryCTA)?.ariaLabel}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-[15px] py-[15px] font-heading text-sm font-bold text-electric transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-electric"
                >
                  {(primaryCTA ?? secondaryCTA)!.text}
                </Link>
              )}
            </div>

            {/* Trust line */}
            {trustLine && (
              <p className="mt-6 font-mono text-[9px] uppercase tracking-widest text-white/50">
                {trustLine}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
