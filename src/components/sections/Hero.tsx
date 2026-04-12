// src/components/sections/Hero.tsx
// All Family Health Care — Hero Section Component

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroSection } from "@/types/content";

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  const { eyebrow, headline, subheadline, body, primaryCTA, secondaryCTA, phoneCTA, badge, stats, image } = data;
  const hasImage = Boolean(image?.src);

  return (
    <section
      className="relative overflow-hidden bg-bg"
      aria-label="Hero section"
    >
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--electric) 1px, transparent 1px), linear-gradient(90deg, var(--electric) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, var(--electric) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-[72px] lg:px-10 lg:py-[88px] xl:px-14 xl:py-[100px]">
        <div
          className={cn(
            hasImage
              ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20"
              : ""
          )}
        >
          <div className={cn(hasImage ? "max-w-[620px]" : "max-w-[680px]")}>
            {/* Eyebrow tag */}
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-electric/25 bg-electric-light px-3 py-1.5">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1
              className="font-heading font-extrabold leading-none tracking-tight text-charcoal"
              style={{
                fontSize: hasImage ? "clamp(34px, 7.5vw, 64px)" : "clamp(36px, 9vw, 72px)",
              }}
            >
              {headline}
            </h1>

            {/* Subheadline */}
            {subheadline && (
              <p className="mt-5 max-w-[520px] text-base font-light leading-relaxed text-body md:text-lg">
                {subheadline}
              </p>
            )}

            {/* Body */}
            {body && (
              <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-muted">
                {body}
              </p>
            )}

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Primary / Phone CTA */}
              {primaryCTA && (
                primaryCTA.variant === "phone" ? (
                  <a
                    href={primaryCTA.href}
                    aria-label={primaryCTA.ariaLabel ?? `Call us: ${primaryCTA.text}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark hover:shadow-electric/35 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {primaryCTA.text}
                  </a>
                ) : (
                  <Link
                    href={primaryCTA.href}
                    aria-label={primaryCTA.ariaLabel}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-electric px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-electric/25 transition-all hover:bg-electric-dark focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                  >
                    {primaryCTA.text}
                  </Link>
                )
              )}

              {/* Secondary CTA */}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  aria-label={secondaryCTA.ariaLabel}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                >
                  {secondaryCTA.text}
                </Link>
              )}

              {/* Phone CTA (separate from primary) */}
              {phoneCTA && primaryCTA.variant !== "phone" && (
                <a
                  href={phoneCTA.href}
                  aria-label={phoneCTA.ariaLabel ?? `Call us: ${phoneCTA.text}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-electric transition-colors hover:text-electric-dark"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {phoneCTA.text}
                </a>
              )}
            </div>

            {/* Badge */}
            {badge && (
              <p className="mt-4 text-xs text-muted">{badge}</p>
            )}
          </div>

          {/* Image column (lg+ only) */}
          {hasImage && image && (
            <div className="relative hidden lg:block">
              {/* Sharp corner frame accent */}
              <div
                className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-electric"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-electric"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface-2 shadow-[0_20px_60px_rgba(13,22,48,0.12)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1344}
                  height={image.height ?? 768}
                  priority={image.priority ?? true}
                  sizes="(max-width: 1024px) 0vw, (max-width: 1400px) 48vw, 640px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Stats grid */}
        {stats && stats.length > 0 && (
          <div className="mt-12">
            <div
              className={cn(
                "grid gap-[2px] overflow-hidden rounded-[10px] border border-border bg-border",
                "grid-cols-2 md:grid-cols-4"
              )}
              role="list"
              aria-label="Key statistics"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-[18px]"
                  role="listitem"
                >
                  <div className="font-heading text-[28px] font-extrabold leading-none text-charcoal">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-electric">{stat.suffix}</span>
                    )}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
