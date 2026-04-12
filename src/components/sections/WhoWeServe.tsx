// src/components/sections/WhoWeServe.tsx
// All Family Health Care — Who We Serve Persona Cards Section

import Link from "next/link";
import Image from "next/image";
import { Heart, Users, Activity, ClipboardPlus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CTA, ImageAsset } from "@/types/content";

interface PersonaItem {
  icon: string;
  title: string;
  description: string;
  cta: CTA;
  image?: ImageAsset;
}

interface WhoWeServeProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  personas: PersonaItem[];
}

// Map icon strings to Lucide components
const PersonaIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  users: Users,
  activity: Activity,
  "clipboard-plus": ClipboardPlus,
};

function PersonaIconEl({ name }: { name: string }) {
  const Icon = PersonaIcons[name];
  if (!Icon) {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric text-white">
        <span className="text-xl">✦</span>
      </span>
    );
  }
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric">
      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
    </span>
  );
}

export default function WhoWeServe({ eyebrow, headline, subheadline, personas }: WhoWeServeProps) {
  return (
    <section
      className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="who-we-serve-heading"
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
            id="who-we-serve-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="max-w-[620px] text-sm leading-relaxed text-body font-light md:text-base">
              {subheadline}
            </p>
          )}
        </div>

        {/* Persona cards */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Who we serve"
        >
          {personas.map((persona, idx) => (
            <div
              key={idx}
              role="listitem"
              className={cn(
                "group flex flex-col overflow-hidden rounded-xl border border-border bg-surface",
                "transition-all hover:border-electric/25 hover:shadow-sm"
              )}
            >
              {/* Image header (when provided) */}
              {persona.image?.src && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
                  <Image
                    src={persona.image.src}
                    alt={persona.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Card body */}
              <div className="flex flex-1 flex-col p-7">
                {/* Icon (only when no image, preserves original look) */}
                {!persona.image?.src && (
                  <div className="mb-5" aria-hidden="true">
                    <PersonaIconEl name={persona.icon} />
                  </div>
                )}

                {/* Title */}
                <h3 className="mb-3 font-heading text-[17px] font-bold tracking-tight text-charcoal">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-[13px] font-light leading-relaxed text-body">
                  {persona.description}
                </p>

                {/* CTA link */}
                <Link
                  href={persona.cta.href}
                  aria-label={persona.cta.ariaLabel ?? persona.cta.text}
                  className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark focus:outline-none focus:underline"
                >
                  {persona.cta.text}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
