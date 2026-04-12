// src/app/blog/[slug]/page.tsx
// All Family Health Care — Blog Article Detail Page

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { getAllArticles, getArticleBySlug } from "@/lib/blog";
import { allArticles, getRelatedArticles } from "@/content/pages/blog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTAStrip from "@/components/sections/CTAStrip";
import PhoneButton from "@/components/ui/PhoneButton";
import ArticleSchema from "@/components/schema/ArticleSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/blog/${article.slug}`;
  const title =
    article.frontmatter.seo?.title ??
    `${article.frontmatter.title}`;
  const description =
    article.frontmatter.seo?.description ?? article.frontmatter.description;
  const image =
    article.frontmatter.featuredImage?.src ?? "/images/og/blog.jpg";

  return {
    title,
    description,
    keywords: article.frontmatter.tags ?? ["home health care Chicago", "Medicare home health"],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: article.frontmatter.title,
      }],
      publishedTime: article.frontmatter.publishDate,
      modifiedTime: article.frontmatter.publishDate,
      authors: [article.frontmatter.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

// Simple markdown-to-HTML renderer for article body
// Handles headings, bold, lists, paragraphs, horizontal rules, and inline links
function renderMarkdown(content: string): string {
  let html = content
    // Strip MDX/JSX import lines
    .replace(/^import .+$/gm, "")
    // H2
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    // H3
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    // H4
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    // Horizontal rule
    .replace(/^---$/gm, "<hr />")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic (single star not already handled by bold)
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Markdown links [text](href)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Handle unordered lists (- item)
  html = html.replace(/(^- .+$\n?)+/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
      .join("\n");
    return `<ul>\n${items}\n</ul>\n`;
  });

  // Handle ordered lists (1. item)
  html = html.replace(/(^\d+\. .+$\n?)+/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`)
      .join("\n");
    return `<ol>\n${items}\n</ol>\n`;
  });

  // Wrap remaining non-empty lines that aren't already block elements in <p>
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (/^<(h[1-6]|ul|ol|li|hr|blockquote|pre|code)/.test(block)) return block;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  return html;
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;

  // Related articles from content data (by cluster)
  const related = getRelatedArticles(slug, frontmatter.cluster, 4);

  // Format publish date
  const publishDateFormatted = new Date(frontmatter.publishDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Rendered HTML
  const bodyHtml = renderMarkdown(content);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: frontmatter.category, href: `/blog/${frontmatter.cluster === "skilled-nursing" ? "senior-health" : frontmatter.cluster === "caregiver" ? "caregiver-support" : frontmatter.cluster === "chronic-disease" ? "chronic-conditions" : frontmatter.cluster === "home-safety" ? "home-safety" : "home-recovery"}` },
              { label: frontmatter.title },
            ]}
          />
        </div>
      </div>

      {/* Article header */}
      <div className="bg-bg px-6 py-12 md:px-8 md:py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[720px]">
            {/* Category tag */}
            <div className="mb-5">
              <span className="inline-block rounded-sm bg-electric-light px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-electric">
                {frontmatter.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-heading font-extrabold leading-tight tracking-tight text-charcoal mb-5"
              style={{ fontSize: "clamp(28px, 6vw, 52px)" }}
            >
              {frontmatter.title}
            </h1>

            {/* Description */}
            <p className="text-base font-light leading-relaxed text-body mb-6 max-w-[600px]">
              {frontmatter.description}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 border-t border-border pt-5">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {publishDateFormatted}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {frontmatter.readTime} read
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                By {frontmatter.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body + sidebar */}
      <div className="bg-bg px-6 pb-16 md:px-8 md:pb-[72px] lg:px-10 lg:pb-[88px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main article content */}
            <article aria-label={frontmatter.title}>
              {/* Inline phone CTA before article */}
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center rounded-xl border border-electric/20 bg-electric-light p-5">
                <div className="flex-1">
                  <p className="font-heading text-sm font-bold text-charcoal">
                    Questions about home health care?
                  </p>
                  <p className="text-xs font-light text-body mt-0.5">
                    Our care coordinators are available to help — no pressure, no commitment.
                  </p>
                </div>
                <PhoneButton variant="default" />
              </div>

              {/* Prose content */}
              <div
                className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-charcoal prose-p:text-body prose-p:font-light prose-p:leading-relaxed prose-a:text-electric prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal prose-strong:font-semibold prose-li:text-body prose-li:font-light prose-code:text-electric prose-code:bg-electric-light prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-sm"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />

              {/* Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-10 border-t border-border pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="h-3.5 w-3.5 text-muted flex-shrink-0" aria-hidden="true" />
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom inline phone CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center rounded-xl border border-border bg-surface p-6">
                <div className="flex-1">
                  <p className="font-heading text-base font-bold text-charcoal">
                    Ready to get started?
                  </p>
                  <p className="mt-1 text-sm font-light text-body">
                    Call us today — most services are covered by Medicare at no out-of-pocket cost.
                  </p>
                </div>
                <PhoneButton variant="large" />
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Article sidebar" className="space-y-6">
              {/* Sidebar phone CTA */}
              <div className="rounded-xl border border-electric/20 bg-electric-light p-6 text-center">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  Free Consultation
                </p>
                <p className="mb-4 font-heading text-sm font-semibold text-charcoal">
                  Have questions about your care options?
                </p>
                <PhoneButton variant="default" className="w-full" />
              </div>

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h2 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                    Related Articles
                  </h2>
                  <ul className="space-y-3" aria-label="Related articles">
                    {related.map((relArticle) => (
                      <li key={relArticle.slug}>
                        <Link
                          href={`/blog/${relArticle.slug}`}
                          className="group flex items-start gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                        >
                          <ChevronRight
                            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-electric"
                            aria-hidden="true"
                          />
                          <span className="leading-snug group-hover:text-electric transition-colors">
                            {relArticle.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services sidebar */}
              <div className="rounded-xl border border-border bg-surface p-6">
                <h2 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                  Our Services
                </h2>
                <ul className="space-y-2" aria-label="Home health care services">
                  {[
                    { name: "Skilled Nursing", slug: "skilled-nursing" },
                    { name: "Physical Therapy", slug: "physical-therapy" },
                    { name: "Occupational Therapy", slug: "occupational-therapy" },
                    { name: "Speech Therapy", slug: "speech-therapy" },
                    { name: "Home Health Aide", slug: "home-health-aide" },
                  ].map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                      >
                        <ChevronRight
                          className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-border pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
                  >
                    View All Services
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Blog categories */}
              <div className="rounded-xl border border-border bg-surface p-6">
                <h2 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                  More Topics
                </h2>
                <ul className="space-y-2" aria-label="Blog categories">
                  {[
                    { name: "Senior Health", slug: "senior-health" },
                    { name: "Caregiver Support", slug: "caregiver-support" },
                    { name: "Home Recovery", slug: "home-recovery" },
                    { name: "Chronic Conditions", slug: "chronic-conditions" },
                    { name: "Home Safety", slug: "home-safety" },
                    { name: "Medicare Guides", slug: "medicare-guides" },
                  ].map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/blog/${cat.slug}`}
                        className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                      >
                        <ChevronRight
                          className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />

      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        publishDate={frontmatter.publishDate}
        author={frontmatter.author}
        url={`https://www.allfamilyhealthcare.com/blog/${article.slug}`}
        image={frontmatter.featuredImage?.src}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
          { name: "Blog", url: "https://www.allfamilyhealthcare.com/blog" },
          { name: frontmatter.title, url: `https://www.allfamilyhealthcare.com/blog/${article.slug}` },
        ]}
      />
    </>
  );
}
