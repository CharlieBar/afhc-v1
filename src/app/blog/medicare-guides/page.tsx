// src/app/blog/medicare-guides/page.tsx
// All Family Health Care — Medicare Guides Blog Hub

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { getArticlesByHub } from "@/content/pages/blog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Medicare Home Health Guides",
  description:
    "Understanding what Medicare covers for home health care — plain-language guides written by Chicago's licensed home health professionals.",
};

const articles = getArticlesByHub("medicare-guides");

export default function MedicareGuidesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Medicare Guides" },
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
              Blog Category
            </span>
          </div>
          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-charcoal mb-4"
            style={{ fontSize: "clamp(32px, 7vw, 60px)" }}
          >
            Medicare Guides
          </h1>
          <p className="max-w-[560px] text-base font-light leading-relaxed text-body">
            Understanding what Medicare covers for home health care — and how to access your benefits — explained in plain language.
          </p>
        </div>
      </div>

      {/* Mid-page phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Not sure if Medicare covers your care? Call us — we verify benefits at no cost.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      {/* Articles grid */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="articles-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2 id="articles-heading" className="sr-only">Medicare Guide Articles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-electric/30 hover:shadow-md hover:shadow-electric/5 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                aria-label={`Read: ${article.title}`}
              >
                <div className="mb-4">
                  <span className="inline-block rounded-sm bg-electric-light px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-electric">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-heading text-[16px] font-bold tracking-tight text-charcoal mb-3 leading-snug group-hover:text-electric transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-body mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {article.readTime} read
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-center text-body font-light">
              Articles coming soon. In the meantime,{" "}
              <Link href="/blog" className="text-electric hover:underline">
                browse all guides
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Questions about your Medicare home health benefits?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              We verify benefits for free — call us to learn exactly what you qualify for.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Back to blog */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex items-center gap-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
          >
            <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
            Back to All Blog Topics
          </Link>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
