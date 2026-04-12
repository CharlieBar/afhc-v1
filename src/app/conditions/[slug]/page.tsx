// src/app/conditions/[slug]/page.tsx
// All Family Health Care — Dynamic Condition Detail Page

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  allConditions,
  allConditionSlugs,
  getConditionBySlug,
  getConditionsByCategory,
} from "@/content/conditions";
import { getServiceBySlug } from "@/content/services";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import type { ProcessStep } from "@/types/content";
import { ChevronRight } from "lucide-react";
import { getConditionRichContent } from "@/content/conditions/rich";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { AlertTriangle, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allConditionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  const rich = getConditionRichContent(slug);

  if (!condition) {
    return {
      title: "Condition Not Found",
      description: "The requested condition page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/conditions/${condition.slug}`;
  const title = `Home Health Care for ${condition.name} in Chicago`;
  const description =
    rich?.overview?.[0]
      ? `Home health care for ${condition.name} in Chicago. ${rich.overview[0]} Call (773) 775-2588.`
      : `${condition.name} home health care in Chicago from All Family Health Care. Skilled nursing and therapy at home. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: [
      condition.name,
      `${condition.name} Chicago`,
      "Chicago home health",
      "Medicare home health Chicago",
      ...condition.relatedServices,
    ],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [{
        url: "/images/og/conditions.jpg",
        width: 1200,
        height: 630,
        alt: `${condition.name} home health care in Chicago`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/conditions.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Get a Physician's Order",
    description:
      "Ask your doctor, hospital discharge planner, or specialist for a home health referral. We can also help coordinate this — just call (773) 775-2588.",
    icon: "phone-call",
  },
  {
    step: "02",
    title: "We Confirm Your Coverage",
    description:
      "Our team verifies your Medicare or insurance benefits and confirms which services are authorized — at no cost to you before care begins.",
    icon: "clipboard-check",
  },
  {
    step: "03",
    title: "Care Delivered to Your Home",
    description:
      "A clinician visits your home within 24–48 hours, conducts a thorough assessment, and begins your personalized care plan immediately.",
    icon: "heart",
  },
];

export default async function ConditionDetailPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  // Rich content for this condition
  const richContent = getConditionRichContent(slug);

  // Resolve related services
  const relatedServices = condition.relatedServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(Boolean);

  // Related conditions in same category (exclude current)
  const relatedInCategory = getConditionsByCategory(condition.category)
    .filter((c) => c.slug !== slug)
    .slice(0, 4);

  // Other conditions from other categories
  const otherConditions = allConditions
    .filter((c) => c.slug !== slug && c.category !== condition.category)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions" },
              { label: condition.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: condition.category,
          headline: condition.name,
          subheadline: condition.tagline,
          body: condition.description,
          primaryCTA: {
            text: "Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
            ariaLabel: `Call All Family Health Care about ${condition.name} home care`,
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "Medicare Certified · Physician-Ordered Care · Serving Chicago 20+ Years",
        }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Understanding [Condition] */}
      {richContent && richContent.overview.length > 0 && (
        <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="condition-overview-heading">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                About This Condition
              </span>
            </div>
            <h2 id="condition-overview-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-8" style={{ fontSize: "clamp(26px, 6vw, 44px)" }}>
              Understanding {condition.name}
            </h2>
            <div className="space-y-6">
              {richContent.overview.map((paragraph, idx) => (
                <p key={idx} className="text-base font-light leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How We Help Section */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="how-we-help-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main content */}
            <div>
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  How We Help
                </span>
              </div>

              <h2
                id="how-we-help-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-6"
                style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
              >
                {condition.name} Home Care
              </h2>

              <p className="mb-8 max-w-[640px] text-base font-light leading-relaxed text-body">
                {condition.description}
              </p>

              {/* How home health care helps with this condition */}
              {richContent && richContent.howWeHelp.length > 0 && (
                <div className="mb-8 space-y-6">
                  <h3 className="font-heading text-[17px] font-bold tracking-tight text-charcoal">
                    How Home Health Care Helps with {condition.name}
                  </h3>
                  {richContent.howWeHelp.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-electric/30 pl-5">
                      <h4 className="mb-1 font-heading text-[15px] font-bold text-charcoal">
                        {item.serviceName}
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-body">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Related Services as treatment approach */}
              {relatedServices.length > 0 && (
                <div className="mb-10">
                  <h3 className="mb-5 font-heading text-[17px] font-bold tracking-tight text-charcoal">
                    Services Involved in {condition.name} Care:
                  </h3>
                  <div
                    className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
                    role="list"
                    aria-label="Related services"
                  >
                    {relatedServices.map((service) => (
                      <Link
                        key={service!.slug}
                        href={`/services/${service!.slug}`}
                        role="listitem"
                        className="group block bg-surface p-5 transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric"
                        aria-label={`Learn about ${service!.name}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="mb-1 font-heading text-[15px] font-bold tracking-tight text-charcoal transition-colors group-hover:text-electric">
                              {service!.name}
                            </h4>
                            <p className="text-[13px] font-light leading-relaxed text-muted">
                              {service!.tagline}
                            </p>
                          </div>
                          <ChevronRight
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-border transition-colors group-hover:text-electric"
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA row */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <PhoneButton variant="large" />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 font-heading text-sm font-bold text-charcoal transition-all hover:border-electric/40 hover:bg-electric-light hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
                >
                  Schedule Free Assessment
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Condition sidebar">
              {/* Related conditions in same category */}
              {relatedInCategory.length > 0 && (
                <div className="mb-8 rounded-xl border border-border bg-surface p-7">
                  <h3 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                    Related {condition.category} Conditions
                  </h3>
                  <ul className="space-y-2" aria-label={`Other ${condition.category} conditions`}>
                    {relatedInCategory.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/conditions/${c.slug}`}
                          className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                        >
                          <ChevronRight
                            className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                            aria-hidden="true"
                          />
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other conditions */}
              {otherConditions.length > 0 && (
                <div className="mb-8 rounded-xl border border-border bg-surface p-7">
                  <h3 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                    Other Conditions We Treat
                  </h3>
                  <ul className="space-y-2" aria-label="Other conditions">
                    {otherConditions.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/conditions/${c.slug}`}
                          className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                        >
                          <ChevronRight
                            className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                            aria-hidden="true"
                          />
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <Link
                      href="/conditions"
                      className="inline-flex items-center gap-1 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
                    >
                      View All Conditions
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Sidebar phone CTA */}
              <div className="rounded-xl border border-electric/20 bg-electric-light p-6 text-center">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  Free Consultation
                </p>
                <p className="mb-4 font-heading text-sm font-semibold text-charcoal">
                  Questions about {condition.name} care?
                </p>
                <PhoneButton variant="default" className="w-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      {richContent && richContent.warningSigns.length > 0 && (
        <section className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="warning-signs-heading">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Know the Signs
              </span>
            </div>
            <h2 id="warning-signs-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4" style={{ fontSize: "clamp(24px, 5vw, 36px)" }}>
              Warning Signs Your Loved One Needs Professional Support at Home
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-body font-light md:text-base">
              If you notice any of these signs, it may be time to call a professional. Our team can assess the situation and recommend the right care plan.
            </p>
            <ul className="space-y-4" aria-label="Warning signs">
              {richContent.warningSigns.map((sign, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" aria-hidden="true" />
                  <span className="text-sm font-light leading-relaxed text-body">{sign}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <a
                href="tel:(773)775-2588"
                className="inline-flex items-center gap-2 rounded-lg bg-electric px-8 py-4 font-heading text-base font-bold text-white shadow-md transition-all hover:bg-electric-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call (773) 775-2588 for a Free Assessment
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Care Journey */}
      <ProcessSteps
        eyebrow="Your Care Journey"
        headline={`What to Expect from Our ${condition.name} Care Team`}
        subheadline="From your first call to ongoing care at home, here's how we support your loved one every step of the way."
        steps={richContent?.careJourney ?? processSteps}
        cta={{
          text: "Schedule Free Assessment",
          href: "/contact",
        }}
        phoneCTA={{
          text: "(773) 775-2588",
          href: "tel:(773)775-2588",
          ariaLabel: "Call All Family Health Care at (773) 775-2588",
        }}
      />

      {/* Bottom phone CTA bar */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to arrange {condition.name} home care?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Our care coordinators are available now — no pressure, no commitment.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Condition-Specific FAQs */}
      {richContent && richContent.faqs.length > 0 && (
        <FAQAccordion
          eyebrow="Common Questions"
          headline={`${condition.name} FAQs`}
          items={richContent.faqs}
        />
      )}

      {/* CTA Strip */}
      <CTAStrip />

      <FAQSchema items={richContent?.faqs ?? []} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
          { name: "Conditions", url: "https://www.allfamilyhealthcare.com/conditions" },
          { name: condition.name, url: `https://www.allfamilyhealthcare.com/conditions/${condition.slug}` },
        ]}
      />
    </>
  );
}
