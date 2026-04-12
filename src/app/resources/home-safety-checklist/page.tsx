// src/app/resources/home-safety-checklist/page.tsx
// All Family Health Care — Home Safety Checklist Resource Page

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckSquare, AlertTriangle } from "lucide-react";
import {
  homeSafetyChecklistSeo,
  homeSafetyChecklist,
} from "@/content/pages/resources";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: homeSafetyChecklistSeo.title,
  description: homeSafetyChecklistSeo.description,
  keywords: homeSafetyChecklistSeo.keywords,
  alternates: { canonical: homeSafetyChecklistSeo.canonical },
};

const priorityColors: Record<string, string> = {
  highest: "text-red-600 bg-red-50 border-red-100",
  high: "text-orange-600 bg-orange-50 border-orange-100",
  medium: "text-yellow-700 bg-yellow-50 border-yellow-100",
};

const priorityLabel: Record<string, string> = {
  highest: "Highest Priority",
  high: "High Priority",
  medium: "Medium Priority",
};

export default function HomeSafetyChecklistPage() {
  const { hero, note, rooms, professionalAssessmentCTA } = homeSafetyChecklist;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Home Safety Checklist" },
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
              {hero.eyebrow}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-charcoal mb-4"
            style={{ fontSize: "clamp(32px, 7vw, 60px)" }}
          >
            {hero.headline}
          </h1>
          <p className="max-w-[560px] text-base font-light leading-relaxed text-body mb-6">
            {hero.subheadline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCTA.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
            >
              {hero.primaryCTA.text}
            </Link>
            <PhoneButton variant="default" />
          </div>
        </div>
      </div>

      {/* Clinical note banner */}
      <div className="bg-electric-light border-y border-electric/20 px-6 py-4 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-light leading-relaxed text-body">
            <span className="font-semibold text-electric">Clinical note:</span>{" "}
            {note}
          </p>
        </div>
      </div>

      {/* Checklist rooms */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="checklist-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 id="checklist-heading" className="sr-only">Room-by-Room Safety Checklist</h2>

          <div className="space-y-10">
            {rooms.map((room) => (
              <div
                key={room.room}
                className="rounded-xl border border-border bg-surface overflow-hidden"
              >
                {/* Room header */}
                <div className="flex items-center justify-between border-b border-border px-7 py-5">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="h-5 w-5 text-electric flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-heading text-[18px] font-bold tracking-tight text-charcoal">
                      {room.room}
                    </h3>
                  </div>
                  <span
                    className={`rounded-sm border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest ${priorityColors[room.priority] ?? priorityColors.medium}`}
                  >
                    {priorityLabel[room.priority] ?? room.priority}
                  </span>
                </div>

                {/* Checklist items */}
                <ul
                  className="divide-y divide-border"
                  aria-label={`${room.room} safety checklist`}
                >
                  {room.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 px-7 py-4">
                      {/* Checkbox visual */}
                      <div
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-2 border-border bg-bg"
                        aria-hidden="true"
                      />
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm leading-relaxed ${item.critical ? "font-medium text-charcoal" : "font-light text-body"}`}>
                          {item.text}
                        </span>
                        {item.critical && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-sm bg-red-50 border border-red-100 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-red-600">
                            <AlertTriangle className="h-2.5 w-2.5" aria-hidden="true" />
                            Critical
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional assessment CTA section */}
      <section
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="assessment-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-[720px] text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Professional Assessment
              </span>
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            </div>
            <h2
              id="assessment-heading"
              className="font-heading font-extrabold tracking-tight leading-tight text-charcoal mb-4"
              style={{ fontSize: "clamp(24px, 5vw, 40px)" }}
            >
              {professionalAssessmentCTA.headline}
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-body">
              {professionalAssessmentCTA.body}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <PhoneButton variant="large" />
              <Link
                href={professionalAssessmentCTA.secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-bg px-6 py-3.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                {professionalAssessmentCTA.secondaryCTA.text}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready for a professional home safety assessment?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Our occupational therapists identify hazards and make specific recommendations — at no cost to qualifying Medicare patients.
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
            href="/blog/fall-prevention-for-seniors"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            Read: Fall Prevention Guide
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/blog/bathroom-safety-for-seniors"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            Read: Bathroom Safety
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
