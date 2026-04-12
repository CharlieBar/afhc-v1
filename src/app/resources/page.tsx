// src/app/resources/page.tsx
// All Family Health Care — Resources Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, Users, ShieldCheck } from "lucide-react";
import { resourcesSeo, resourcesHero, resourceCategories } from "@/content/pages/resources";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: resourcesSeo.title,
  description: resourcesSeo.description,
  keywords: resourcesSeo.keywords,
  alternates: { canonical: resourcesSeo.canonical },
};

const categoryIcons: Record<string, React.ReactNode> = {
  "file-text": <FileText className="h-5 w-5 text-electric" aria-hidden="true" />,
  users: <Users className="h-5 w-5 text-electric" aria-hidden="true" />,
  "shield-check": <ShieldCheck className="h-5 w-5 text-electric" aria-hidden="true" />,
};

export default function ResourcesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: resourcesHero.eyebrow,
          headline: resourcesHero.headline,
          subheadline: resourcesHero.subheadline,
          image: resourcesHero.image,
          primaryCTA: {
            text: "Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
            ariaLabel: "Call All Family Health Care at (773) 775-2588",
          },
          secondaryCTA: {
            text: "Browse Guides Below",
            href: "#categories",
          },
        }}
      />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Prefer to speak with someone? Our care coordinators can answer your questions.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Resource Categories */}
      <section
        id="categories"
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="resources-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Browse by Category
            </span>
          </div>
          <h2
            id="resources-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-10"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            Resources for Patients &amp; Caregivers
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {resourceCategories.map((category) => (
              <div
                key={category.slug}
                className="rounded-xl border border-border bg-bg p-7"
              >
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-light flex-shrink-0">
                    {categoryIcons[category.icon] ?? categoryIcons["file-text"]}
                  </div>
                  <div>
                    <h3 className="font-heading text-[17px] font-bold tracking-tight text-charcoal">
                      {category.name}
                    </h3>
                    <p className="text-xs font-light text-muted mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Resource links */}
                <ul className="space-y-3" aria-label={`${category.name} resources`}>
                  {category.resources.map((resource) => (
                    <li key={resource.title}>
                      <Link
                        href={resource.href}
                        className="group flex items-start gap-2.5 rounded-lg border border-border bg-surface p-4 transition-all hover:border-electric/30 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                      >
                        <ChevronRight
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className="font-heading text-[13px] font-semibold text-charcoal leading-snug group-hover:text-electric transition-colors mb-1">
                            {resource.title}
                          </p>
                          <p className="text-xs font-light leading-relaxed text-body">
                            {resource.description}
                          </p>
                          <span className="mt-2 inline-block font-mono text-[9px] uppercase tracking-widest text-muted">
                            {resource.type === "article" ? "Blog Article" : "Guide"}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Category page link */}
                <div className="mt-5 border-t border-border pt-4">
                  <Link
                    href={`/resources/${category.slug}`}
                    className="inline-flex items-center gap-1 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
                  >
                    View All {category.name}
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Have questions about your specific situation?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us — our care coordinators are available to help with no pressure and no commitment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
