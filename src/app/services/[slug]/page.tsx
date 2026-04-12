// src/app/services/[slug]/page.tsx
// All Family Health Care — Dynamic Service Detail Page

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  allServices,
  allServiceSlugs,
  getServiceBySlug,
  sharedServiceFAQs,
} from "@/content/services";
import { getConditionBySlug } from "@/content/conditions";
import { getServiceRichContent } from "@/content/services/rich";
import { getTestimonialsForService } from "@/content/shared/testimonials-pool";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTAStrip from "@/components/sections/CTAStrip";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import ServiceSchema from "@/components/schema/ServiceSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import type { ProcessStep } from "@/types/content";
import { CheckCircle2, ChevronRight, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const rich = getServiceRichContent(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested home health service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/services/${service.slug}`;
  const title = `${service.name} at Home in Chicago`;
  const description =
    rich?.medicareCoverage?.body
      ? `${service.name} at home in Chicago. ${rich.medicareCoverage.body} Call (773) 775-2588.`
      : `${service.name} at home in Chicago from All Family Health Care. Medicare-covered home health services. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: [
      service.name,
      `${service.name} Chicago`,
      "Chicago home health",
      "Medicare home health Chicago",
      ...service.highlights.slice(0, 4),
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
        url: service.image?.src ?? "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: service.image?.alt ?? `${service.name} home health care in Chicago`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image?.src ?? "/images/og/services.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Call Us or Get a Physician's Order",
    description:
      "Call (773) 775-2588 or ask your physician, hospital discharge planner, or social worker for a home health referral. We handle all the paperwork from there.",
    icon: "phone-call",
  },
  {
    step: "02",
    title: "We Verify Your Coverage",
    description:
      "Our care coordinators verify your Medicare or insurance benefits and confirm authorized services — completely free of charge before care begins.",
    icon: "clipboard-check",
  },
  {
    step: "03",
    title: "Care Starts Within 24–48 Hours",
    description:
      "A clinician visits your home, completes a comprehensive assessment, and begins delivering your personalized care plan — often within one to two days.",
    icon: "heart",
  },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Resolve related conditions from slugs
  const relatedConditions = (service.relatedConditions ?? [])
    .map((condSlug) => getConditionBySlug(condSlug))
    .filter(Boolean);

  // Other services (exclude current)
  const otherServices = allServices.filter((s) => s.slug !== slug).slice(0, 5);

  // Rich content for this service
  const richContent = getServiceRichContent(slug);

  // Get a testimonial for this service
  const serviceTestimonials = getTestimonialsForService(slug, 1);

  // Related services from rich content
  const relatedServiceCards = (richContent?.relatedServices ?? [])
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: service.category === "core" ? "Core Service" : "Specialized Service",
          headline: service.name,
          subheadline: service.tagline,
          body: service.description,
          primaryCTA: {
            text: "Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
            ariaLabel: `Call All Family Health Care to inquire about ${service.name}`,
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "Medicare Certified · Physician-Ordered Care · Serving Chicago 20+ Years",
          ...(service.image ? { image: service.image } : {}),
        }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* What is [Service]? */}
      {richContent && richContent.overview.length > 0 && (
        <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="service-overview-heading">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Understanding This Service
              </span>
            </div>
            <h2 id="service-overview-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-8" style={{ fontSize: "clamp(26px, 6vw, 44px)" }}>
              What Is {service.name}?
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

      {/* Service Details Section */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="service-details-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main content */}
            <div>
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  What We Provide
                </span>
              </div>

              <h2
                id="service-details-heading"
                className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-6"
                style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
              >
                What&apos;s Included in {service.name}
              </h2>

              <p className="mb-8 max-w-[640px] text-base font-light leading-relaxed text-body">
                {service.description}
              </p>

              {/* Highlights checklist */}
              <div className="mb-10">
                <h3 className="mb-5 font-heading text-[17px] font-bold tracking-tight text-charcoal">
                  Services Include:
                </h3>
                <ul
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                  aria-label={`${service.name} highlights`}
                >
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light leading-relaxed text-body">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone CTA inline */}
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
            <aside aria-label="Service sidebar">
              {/* Related Conditions */}
              {relatedConditions.length > 0 && (
                <div className="mb-8 rounded-xl border border-border bg-surface p-7">
                  <h3 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                    Conditions We Treat
                  </h3>
                  <ul className="space-y-2" aria-label="Related conditions">
                    {relatedConditions.map((condition) => (
                      <li key={condition!.slug}>
                        <Link
                          href={`/conditions/${condition!.slug}`}
                          className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                        >
                          <ChevronRight
                            className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                            aria-hidden="true"
                          />
                          {condition!.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other Services */}
              <div className="rounded-xl border border-border bg-surface p-7">
                <h3 className="mb-4 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                  Other Services
                </h3>
                <ul className="space-y-2" aria-label="Other services">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm font-light text-body transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                      >
                        <ChevronRight
                          className="h-3.5 w-3.5 flex-shrink-0 text-electric"
                          aria-hidden="true"
                        />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-5">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 font-heading text-xs font-bold text-electric transition-colors hover:text-electric-dark"
                  >
                    View All Services
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Sidebar phone CTA */}
              <div className="mt-8 rounded-xl border border-electric/20 bg-electric-light p-6 text-center">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  Free Consultation
                </p>
                <p className="mb-4 font-heading text-sm font-semibold text-charcoal">
                  Questions about {service.name}?
                </p>
                <PhoneButton variant="default" className="w-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Who Needs This Service? */}
      {richContent && richContent.whoNeeds.length > 0 && (
        <section className="bg-surface py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="who-needs-heading">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Is This Right for Your Family?
              </span>
            </div>
            <h2 id="who-needs-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-4" style={{ fontSize: "clamp(26px, 6vw, 44px)" }}>
              Who Needs {service.name}?
            </h2>
            <p className="mb-10 max-w-[560px] text-sm leading-relaxed text-body font-light md:text-base">
              If any of these situations sound familiar, {service.name.toLowerCase()} at home may be right for your loved one.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {richContent.whoNeeds.map((scenario, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-bg p-7 transition-all hover:border-electric/30 hover:shadow-sm">
                  <div className="mb-3 text-[22px]" aria-hidden="true">
                    {scenario.icon === "heart" ? "❤️" : scenario.icon === "users" ? "👥" : scenario.icon === "activity" ? "📈" : scenario.icon === "clipboard-plus" ? "📋" : scenario.icon === "stethoscope" ? "🩺" : scenario.icon === "brain" ? "🧠" : scenario.icon === "shield" ? "🛡️" : scenario.icon === "home" ? "🏠" : "✦"}
                  </div>
                  <h3 className="mb-2 font-heading text-[15px] font-bold tracking-tight text-charcoal">
                    {scenario.title}
                  </h3>
                  <p className="text-[13px] font-light leading-relaxed text-body">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Medicare Coverage */}
      {richContent && (
        <section className="bg-electric/5 py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="medicare-coverage-heading">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Insurance & Coverage
              </span>
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            </div>
            <h2 id="medicare-coverage-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-6" style={{ fontSize: "clamp(24px, 5vw, 36px)" }}>
              {richContent.medicareCoverage.headline}
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-body">
              {richContent.medicareCoverage.body}
            </p>
            <a
              href={richContent.medicareCoverage.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-electric px-8 py-4 font-heading text-base font-bold text-white shadow-md transition-all hover:bg-electric-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              aria-label={richContent.medicareCoverage.cta.ariaLabel ?? richContent.medicareCoverage.cta.text}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {richContent.medicareCoverage.cta.text}
            </a>
          </div>
        </section>
      )}

      {/* Process Steps */}
      <ProcessSteps
        eyebrow="How It Works"
        headline="Starting Care Is Simple"
        subheadline="From your first call to your first visit at home, we handle every step so you can focus on recovery."
        steps={processSteps}
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

      {/* Testimonial */}
      {serviceTestimonials.length > 0 && (
        <TestimonialSection
          eyebrow="Patient Stories"
          headline={`What Families Say About Our ${service.name}`}
          testimonials={serviceTestimonials}
        />
      )}

      {/* Related Services */}
      {relatedServiceCards.length > 0 && (
        <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14" aria-labelledby="related-services-heading">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Related Services
              </span>
            </div>
            <h2 id="related-services-heading" className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal mb-8" style={{ fontSize: "clamp(24px, 5vw, 36px)" }}>
              Services That Work With {service.name}
            </h2>
            <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {relatedServiceCards.map((rs) => (
                <Link
                  key={rs!.slug}
                  href={`/services/${rs!.slug}`}
                  className="group block bg-surface p-7 transition-all hover:bg-electric-light"
                >
                  <h3 className="mb-2 font-heading text-[15px] font-bold tracking-tight text-charcoal group-hover:text-electric transition-colors">
                    {rs!.name}
                  </h3>
                  <p className="text-[13px] font-light leading-relaxed text-body">
                    {rs!.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQAccordion
        eyebrow="Common Questions"
        headline={`${service.name} FAQs`}
        items={[...(richContent?.faqs ?? []), ...sharedServiceFAQs]}
      />

      {/* CTA Strip */}
      <CTAStrip />

      <ServiceSchema
        name={service.name}
        description={service.description}
        url={`https://www.allfamilyhealthcare.com/services/${service.slug}`}
      />
      <FAQSchema items={richContent?.faqs ?? []} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
          { name: "Services", url: "https://www.allfamilyhealthcare.com/services" },
          { name: service.name, url: `https://www.allfamilyhealthcare.com/services/${service.slug}` },
        ]}
      />
    </>
  );
}
