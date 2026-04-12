// src/components/sections/ServiceGrid.tsx
// All Family Health Care — Services Grid Section

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CTA, ImageAsset } from "@/types/content";

interface ServiceGridItem {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  highlights?: string[];
  image?: ImageAsset;
}

interface ServiceGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  services: ServiceGridItem[];
  cta?: CTA;
}

// Map icon string names to emoji/unicode symbols since icons are stored as strings in content
const iconMap: Record<string, string> = {
  stethoscope: "🩺",
  activity: "📈",
  hand: "🤲",
  mic: "🎙️",
  "heart-handshake": "🤝",
  bandage: "🩹",
  heart: "❤️",
  users: "👥",
  "clipboard-plus": "📋",
  brain: "🧠",
  "heart-pulse": "💓",
  wind: "💨",
  droplets: "💧",
  "brain-circuit": "🧠",
  zap: "⚡",
  bone: "🦴",
  ribbon: "🎗️",
  shield: "🛡️",
  pill: "💊",
};

function getIcon(icon: string): string {
  return iconMap[icon] ?? "✦";
}

function formatIndex(idx: number): string {
  return String(idx + 1).padStart(2, "0");
}

export default function ServiceGrid({ eyebrow, headline, subheadline, services, cta }: ServiceGridProps) {
  return (
    <section
      className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-10">
          {eyebrow && (
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                {eyebrow}
              </span>
            </div>
          )}
          <h2
            id="services-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
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

        {/* Services grid */}
        <div
          className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Our services"
        >
          {services.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              role="listitem"
              className={cn(
                "group block overflow-hidden bg-surface transition-all hover:bg-electric-light",
                "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
              )}
              aria-label={`Learn about ${service.name}`}
            >
              {/* Image band */}
              {service.image?.src && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="p-7">
                {/* Card number */}
                <div className="mb-3.5 font-mono text-[10px] tracking-widest text-muted">
                  {formatIndex(idx)}
                </div>

                {/* Icon (only when no image) */}
                {!service.image?.src && (
                  <div className="mb-3 text-[26px]" aria-hidden="true">
                    {getIcon(service.icon)}
                  </div>
                )}

                {/* Service name */}
                <h3 className="mb-2 font-heading text-[17px] font-bold tracking-tight text-charcoal group-hover:text-electric transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-[13px] font-light leading-relaxed text-body">
                  {service.description}
                </p>

                {/* Highlights */}
                {service.highlights && service.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1" aria-label={`${service.name} highlights`}>
                    {service.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-1.5 text-[12px] leading-snug text-body">
                        <span className="mt-0.5 text-electric" aria-hidden="true">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tagline */}
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {service.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        {cta && (
          <div className="mt-8 flex justify-center">
            <Link
              href={cta.href}
              aria-label={cta.ariaLabel ?? cta.text}
              className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark"
            >
              {cta.text}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
