// src/app/contact/page.tsx
// All Family Health Care — Contact Page

import type { Metadata } from "next";
import {
  contactSeo,
  contactHero,
  contactInfo,
  freeAssessmentForm,
  contactWhyCall,
} from "@/content/pages/contact";
import { site } from "@/content/global/site";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import FreeAssessmentForm from "@/components/forms/FreeAssessmentForm";

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
  keywords: contactSeo.keywords,
  alternates: { canonical: contactSeo.canonical },
  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    url: contactSeo.canonical,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: contactHero.eyebrow,
          headline: contactHero.headline,
          subheadline: contactHero.subheadline,
          primaryCTA: contactHero.primaryCTA,
          secondaryCTA: {
            text: "Submit Online Form",
            href: "#contact-form",
          },
          badge: contactHero.badge,
          image: contactHero.image,
        }}
      />

      <TrustBar />

      {/* Why Call Us */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="why-call-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Why Families Call Us
              </span>
            </div>
            <h2
              id="why-call-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              {contactWhyCall.headline}
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
            role="list"
          >
            {contactWhyCall.reasons.map((reason) => (
              <div key={reason.title} className="bg-surface p-6" role="listitem">
                <h3 className="mb-2 font-heading text-[15px] font-bold text-charcoal">{reason.title}</h3>
                <p className="text-[13px] font-light leading-relaxed text-body">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone CTA strip */}
      <div className="bg-electric px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-white">
              Call us now — we answer the phone.
            </p>
            <p className="mt-1 text-sm font-light text-white/80">
              No automated systems. No call centers. Real care coordinators who know home health.
            </p>
          </div>
          <a
            href={`tel:${site.phoneRaw}`}
            aria-label={`Call All Family Health Care at ${site.phoneDisplay}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-heading text-sm font-bold text-electric shadow-lg transition-all hover:bg-electric-light focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-electric"
          >
            {site.phone}
          </a>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section
        id="contact-form"
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Sidebar contact info */}
            <aside className="lg:col-span-1">
              <div className="space-y-6">
                {/* Phone */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">Phone</p>
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="block font-heading text-[24px] font-extrabold text-electric hover:text-electric-dark transition-colors"
                    aria-label={`Call us at ${contactInfo.phone}`}
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="mt-1 text-[12px] font-light text-muted">
                    Most calls answered same business day
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block font-heading text-[14px] font-bold text-electric hover:text-electric-dark transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                {/* Address */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">Office Address</p>
                  <address className="not-italic">
                    <p className="font-heading text-[14px] font-bold text-charcoal">{contactInfo.address.street}</p>
                    <p className="font-heading text-[14px] font-bold text-charcoal">
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                  </address>
                  <p className="mt-1 text-[12px] font-light text-muted">Edgebrook, Chicago</p>
                </div>

                {/* Hours */}
                <div className="rounded-xl border border-border bg-surface p-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">Office Hours</p>
                  <dl className="space-y-2">
                    {contactInfo.hours.map((item) => (
                      <div key={item.day} className="flex flex-col gap-0.5">
                        <dt className="font-heading text-[13px] font-semibold text-charcoal">{item.day}</dt>
                        <dd className="font-mono text-[12px] text-electric">{item.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Mid-page phone CTA */}
                <div>
                  <PhoneButton variant="large" className="w-full" />
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                    Free In-Home Assessment
                  </span>
                </div>
                <h2
                  id="form-heading"
                  className="mb-2 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                  style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
                >
                  {freeAssessmentForm.headline}
                </h2>
                <p className="text-sm font-light leading-relaxed text-body">
                  {freeAssessmentForm.subheadline}
                </p>
              </div>
              <FreeAssessmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area note */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Service Area
              </span>
            </div>
            <h2
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              Communities We Serve
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              We serve Chicago&apos;s North and Northwest Sides and surrounding suburbs. Not sure if we serve your area? Call us — we&apos;ll check immediately.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {site.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-sm border border-border bg-bg px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-body"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Still have questions? We&apos;d love to hear from you.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              No automated systems. Real people, real answers — same business day.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
