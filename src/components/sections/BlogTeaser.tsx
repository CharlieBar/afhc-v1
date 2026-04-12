// src/components/sections/BlogTeaser.tsx
// All Family Health Care — Blog / Resource Teaser Cards Section

import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import type { CTA } from "@/types/content";

interface BlogTeaserItem {
  title: string;
  slug: string;
  category: string;
  readTime: string;
}

interface BlogTeaserProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  featured: BlogTeaserItem[];
  cta?: CTA;
}

export default function BlogTeaser({ eyebrow, headline, subheadline, featured, cta }: BlogTeaserProps) {
  return (
    <section
      className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
      aria-labelledby="blog-teaser-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2
              id="blog-teaser-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-2"
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

          {cta && (
            <Link
              href={cta.href}
              aria-label={cta.ariaLabel ?? cta.text}
              className="inline-flex flex-shrink-0 items-center gap-1.5 font-heading text-sm font-bold text-electric transition-colors hover:text-electric-dark"
            >
              {cta.text}
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Blog cards */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Featured articles"
        >
          {featured.map((post) => (
            <article key={post.slug} role="listitem">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-electric/30 hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                aria-label={`Read: ${post.title}`}
              >
                {/* Category tag */}
                <div className="mb-4">
                  <span className="inline-block rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-muted">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 font-heading text-base font-bold tracking-tight text-charcoal leading-snug group-hover:text-electric transition-colors">
                  {post.title}
                </h3>

                {/* Read time */}
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
