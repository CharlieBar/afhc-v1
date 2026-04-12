"use client";
// src/components/sections/FAQAccordion.tsx
// All Family Health Care — FAQ Accordion Section (client component for toggle state)

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types/content";

interface FAQAccordionProps {
  items: FAQItem[];
  eyebrow?: string;
  headline?: string;
}

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const id = `faq-${item.question.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 40)}`;

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
        className={cn(
          "flex w-full items-center justify-between gap-4 py-5 text-left transition-colors",
          "hover:text-electric focus:outline-none focus:text-electric"
        )}
      >
        <span className="font-heading text-base font-semibold text-charcoal">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="pb-5 text-sm leading-relaxed text-body font-light">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items, eyebrow, headline }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function handleToggle(idx: number) {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }

  return (
    <section
      className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby={headline ? "faq-heading" : undefined}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        {(eyebrow || headline) && (
          <div className="mb-10">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  {eyebrow}
                </span>
              </div>
            )}
            {headline && (
              <h2
                id="faq-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
              >
                {headline}
              </h2>
            )}
          </div>
        )}

        {/* Accordion */}
        <div className="max-w-[800px]">
          <dl>
            {items.map((item, idx) => (
              <AccordionItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
