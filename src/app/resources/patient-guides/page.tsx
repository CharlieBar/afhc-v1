// src/app/resources/patient-guides/page.tsx
// All Family Health Care — Patient Guides Resource Page

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, BookOpen } from "lucide-react";
import { resourceCategories } from "@/content/pages/resources";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Patient Guides | Home Health Care Resources",
  description:
    "Guides to help home health care patients understand their care, rights, Medicare benefits, and what to expect — written by our clinical team in Chicago.",
};

const patientCategory = resourceCategories.find((c) => c.slug === "patient-guides");

export default function PatientGuidesPage() {
  if (!patientCategory) return null;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Patient Guides" },
            ]}
          />
        </div>
      </div>

      {/* Page header */}
      <div className="bg-bg px-6 py-12 md:px-8 md:py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Resources
            </span>
          </div>
          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-charcoal mb-4"
            style={{ fontSize: "clamp(32px, 7vw, 60px)" }}
          >
            Patient Guides
          </h1>
          <p className="max-w-[560px] text-base font-light leading-relaxed text-body">
            {patientCategory.description}
          </p>
        </div>
      </div>

      {/* Mid-page phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Have questions about starting home health care? We can walk you through every step.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Resource list */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="guides-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 id="guides-heading" className="sr-only">Patient Guide Resources</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {patientCategory.resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:border-electric/30 hover:shadow-md hover:shadow-electric/5 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric-light">
                  {resource.type === "guide" ? (
                    <FileText className="h-5 w-5 text-electric" aria-hidden="true" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-electric" aria-hidden="true" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-heading text-[15px] font-bold tracking-tight text-charcoal group-hover:text-electric transition-colors leading-snug">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-body mb-2">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                    {resource.type === "article" ? "Blog Article" : "Patient Guide"}
                    <ChevronRight className="h-3 w-3 text-electric opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to start home health care?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Most services are covered by Medicare. Call us and we will verify your benefits at no cost.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-wrap items-center gap-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
            Back to All Resources
          </Link>
          <Link
            href="/resources/caregiver-guides"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            Caregiver Guides
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/resources/home-safety-checklist"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            Home Safety Checklist
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
