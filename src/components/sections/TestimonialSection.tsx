// src/components/sections/TestimonialSection.tsx
// All Family Health Care — Patient Testimonials Section

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TestimonialItem } from "@/types/content";

interface TestimonialSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < rating ? "fill-current text-yellow-400" : "text-border"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialSection({
  eyebrow,
  headline,
  subheadline,
  testimonials,
}: TestimonialSectionProps) {
  return (
    <section
      className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
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

        {/* Testimonials grid */}
        <div
          className="grid grid-cols-1 gap-4 lg:grid-cols-3"
          role="list"
          aria-label="Patient testimonials"
        >
          {testimonials.map((testimonial, idx) => {
            const isFeatured = idx === 0;

            return (
              <blockquote
                key={idx}
                role="listitem"
                className={cn(
                  "rounded-xl border p-7 flex flex-col",
                  isFeatured
                    ? "border-electric bg-electric"
                    : "border-border bg-surface"
                )}
              >
                {/* Quote mark */}
                <div
                  className={cn(
                    "mb-4 font-heading text-[56px] leading-[0.6] font-extrabold",
                    isFeatured ? "text-white/30" : "text-border"
                  )}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p
                  className={cn(
                    "flex-1 text-sm leading-relaxed font-light italic",
                    isFeatured ? "text-white/90" : "text-body"
                  )}
                >
                  {testimonial.quote}
                </p>

                {/* Condition tag */}
                {testimonial.condition && (
                  <div className="mt-4">
                    <span
                      className={cn(
                        "font-mono text-[9px] uppercase tracking-widest",
                        isFeatured ? "text-white/50" : "text-muted"
                      )}
                    >
                      {testimonial.condition}
                    </span>
                  </div>
                )}

                {/* Star rating */}
                <div className="mt-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Author */}
                <footer className="mt-4 border-t pt-4 border-current/10">
                  <cite className="not-italic">
                    <div
                      className={cn(
                        "font-heading text-[13px] font-bold",
                        isFeatured ? "text-white" : "text-charcoal"
                      )}
                    >
                      {testimonial.author}
                    </div>
                    {testimonial.role && (
                      <div
                        className={cn(
                          "text-[11px] mt-0.5",
                          isFeatured ? "text-white/70" : "text-muted"
                        )}
                      >
                        {testimonial.role}
                      </div>
                    )}
                    {testimonial.location && (
                      <div
                        className={cn(
                          "text-[11px]",
                          isFeatured ? "text-white/60" : "text-muted"
                        )}
                      >
                        {testimonial.location}
                      </div>
                    )}
                  </cite>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
