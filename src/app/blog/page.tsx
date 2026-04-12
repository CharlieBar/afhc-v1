// src/app/blog/page.tsx
// All Family Health Care — Blog Hub Page

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { blogSeo, blogHero, hubPages, allArticles } from "@/content/pages/blog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Hero from "@/components/sections/Hero";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: blogSeo.title,
  description: blogSeo.description,
  keywords: blogSeo.keywords,
  alternates: { canonical: blogSeo.canonical },
};

// Category icon map using simple SVG paths from lucide icons rendered inline
const categoryIconMap: Record<string, string> = {
  heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  "shield-check": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4",
  "dollar-sign": "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
};

// Show only the 5 existing MDX articles (they exist on disk)
const featuredSlugs = [
  "ultimate-guide-home-health-care",
  "caregiver-burnout-warning-signs",
  "communication-with-elderly-parents",
  "fall-prevention-for-seniors",
  "heart-failure-care-tips",
];

const featuredArticles = featuredSlugs
  .map((slug) => allArticles.find((a) => a.slug === slug))
  .filter(Boolean);

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: blogHero.eyebrow,
          headline: blogHero.headline,
          subheadline: blogHero.subheadline,
          body: blogHero.note,
          image: blogHero.image,
          primaryCTA: {
            text: "Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
            ariaLabel: "Call All Family Health Care at (773) 775-2588",
          },
          secondaryCTA: {
            text: "Browse All Topics",
            href: "#categories",
          },
        }}
      />

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Need guidance choosing the right care for your family?
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Category Hub Cards */}
      <section
        id="categories"
        className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="categories-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Section header */}
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Browse by Topic
            </span>
          </div>
          <h2
            id="categories-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            Find Guides by Category
          </h2>
          <p className="mb-10 max-w-[560px] text-base font-light leading-relaxed text-body">
            Every article is written or reviewed by our licensed clinical team — not marketers.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hubPages.map((hub) => (
              <Link
                key={hub.slug}
                href={`/blog/${hub.slug}`}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-bg p-6 transition-all hover:border-electric/30 hover:shadow-md hover:shadow-electric/5 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                aria-label={`Browse ${hub.name} articles`}
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-light">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-electric"
                    aria-hidden="true"
                  >
                    <path d={categoryIconMap[hub.icon] ?? categoryIconMap.heart} />
                  </svg>
                </div>

                <div>
                  <h3 className="font-heading text-[17px] font-bold tracking-tight text-charcoal mb-1 group-hover:text-electric transition-colors">
                    {hub.name}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-body">
                    {hub.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {hub.articleCount} articles
                  </span>
                  <ChevronRight
                    className="h-3.5 w-3.5 text-electric opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Featured Articles
            </span>
          </div>
          <h2
            id="featured-heading"
            className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-10"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            Start Here — Our Most Helpful Guides
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => {
              if (!article) return null;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-electric/30 hover:shadow-md hover:shadow-electric/5 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                  aria-label={`Read: ${article.title}`}
                >
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="inline-block rounded-sm bg-electric-light px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-electric">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[16px] font-bold tracking-tight text-charcoal mb-3 leading-snug group-hover:text-electric transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm font-light leading-relaxed text-body mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {article.readTime} read
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {new Date(article.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Have questions about home health care?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us — no pressure, no commitment. Just answers.
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
