// src/components/sections/WhyChooseSection.tsx
// All Family Health Care — Why Choose Us Feature Grid

import {
  ShieldCheck,
  MapPin,
  Clock,
  Users,
  FileCheck,
  Heart,
  Star,
  CheckCircle,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types/content";

interface WhyChooseSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  features: FeatureItem[];
}

// Map icon string names to Lucide components
const IconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  "shield-check": ShieldCheck,
  "map-pin": MapPin,
  clock: Clock,
  users: Users,
  "file-check": FileCheck,
  heart: Heart,
  star: Star,
  "check-circle": CheckCircle,
  award: Award,
};

function FeatureIcon({ name }: { name: string }) {
  const IconComponent = IconComponents[name];
  if (!IconComponent) {
    return (
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-light text-electric">
        <span className="text-lg">✦</span>
      </span>
    );
  }
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-light">
      <IconComponent className="h-5 w-5 text-electric" aria-hidden="true" />
    </span>
  );
}

export default function WhyChooseSection({
  eyebrow,
  headline,
  subheadline,
  features,
}: WhyChooseSectionProps) {
  return (
    <section
      className="bg-surface-2 py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="why-choose-heading"
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
            id="why-choose-heading"
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

        {/* Feature cards grid */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Why choose All Family Health Care"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              role="listitem"
              className={cn(
                "rounded-xl border border-border bg-surface p-7",
                "transition-all hover:border-electric/25 hover:shadow-sm"
              )}
            >
              {/* Icon */}
              <div className="mb-4" aria-hidden="true">
                <FeatureIcon name={feature.icon} />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-heading text-[17px] font-bold tracking-tight text-charcoal">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] font-light leading-relaxed text-body">
                {feature.description}
              </p>

              {/* Optional link */}
              {feature.link && (
                <a
                  href={feature.link.href}
                  aria-label={feature.link.ariaLabel ?? feature.link.text}
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-electric transition-colors hover:text-electric-dark"
                >
                  {feature.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
