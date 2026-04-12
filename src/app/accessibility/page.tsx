// src/app/accessibility/page.tsx
// All Family Health Care — Accessibility Statement Page

import type { Metadata } from "next";
import { site } from "@/content/global/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import CTAStrip from "@/components/sections/CTAStrip";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "All Family Health Care's commitment to web accessibility — WCAG 2.1 AA compliance and how to request accommodations.",
  alternates: {
    canonical: `${site.url}/accessibility`,
  },
  openGraph: {
    title: "Accessibility Statement",
    description:
      "All Family Health Care's commitment to web accessibility — WCAG 2.1 AA compliance and how to request accommodations.",
    url: `${site.url}/accessibility`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 1, 2025";

export default function AccessibilityPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Accessibility" },
            ]}
          />
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-bg px-6 pt-8 pb-4 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px]">
          <h1
            className="font-heading font-extrabold tracking-tight text-charcoal mb-3"
            style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
          >
            Accessibility Statement
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Prose Content */}
      <section className="bg-bg px-6 py-10 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px]">

          {/* Commitment Banner */}
          <div className="rounded-xl border border-electric/20 bg-electric-light p-5 mb-8">
            <p className="font-heading text-sm font-semibold text-electric mb-1">
              Our Commitment
            </p>
            <p className="text-[13px] text-body font-light">
              {site.name} is committed to ensuring digital accessibility for people with
              disabilities. We continually improve the user experience for everyone and apply
              relevant accessibility standards.
            </p>
          </div>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Conformance Status
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            These guidelines explain how to make web content more accessible to people with
            disabilities and more user-friendly for everyone.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We are actively working toward full conformance. Some content may not yet meet
            all WCAG 2.1 AA criteria, and we are continuously improving.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Measures We Take
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-2">
            We take the following measures to ensure accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {[
              "Semantic HTML markup used throughout the site for proper screen reader interpretation",
              "All images include descriptive alternative text",
              "Color contrast ratios meet or exceed WCAG 2.1 AA minimums (4.5:1 for normal text)",
              "All interactive elements are keyboard navigable",
              "Focus indicators are visible on all focusable elements",
              "Forms include proper labels associated with all input fields",
              "ARIA labels and landmarks are used to aid screen reader navigation",
              "Text can be resized up to 200% without loss of content or functionality",
              "No content flashes more than 3 times per second",
            ].map((item) => (
              <li key={item} className="text-[14px] font-light text-body leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Known Limitations
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We are aware of some areas that may not yet fully meet WCAG 2.1 AA standards,
            including some third-party embedded content. We are actively working to address
            these issues. If you encounter a barrier, please contact us (see below).
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Assistive Technologies Supported
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Our website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {[
              "Screen readers: NVDA, JAWS, VoiceOver (iOS/macOS), TalkBack (Android)",
              "Keyboard-only navigation",
              "Browser zoom and text size adjustments",
              "High contrast mode",
              "Voice control software",
            ].map((item) => (
              <li key={item} className="text-[14px] font-light text-body leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Feedback and Contact
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We welcome your feedback on the accessibility of our website. If you experience
            any accessibility barriers, please contact us:
          </p>
          <address className="not-italic rounded-xl border border-border bg-surface p-5 mb-6">
            <p className="font-heading font-bold text-charcoal text-sm mb-1">{site.name}</p>
            <p className="text-[13px] text-body font-light">{site.address.full}</p>
            <p className="text-[13px] text-body font-light">
              Phone:{" "}
              <a href={`tel:${site.phoneRaw}`} className="text-electric underline hover:no-underline">
                {site.phone}
              </a>
            </p>
            <p className="text-[13px] text-body font-light">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-electric underline hover:no-underline">
                {site.email}
              </a>
            </p>
          </address>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We try to respond to accessibility feedback within 2 business days. We consider
            all feedback as we evaluate how to improve our site.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            Formal Complaints
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            If you are not satisfied with our response, you may contact the relevant
            enforcement authority. In the United States, this may include filing a complaint
            with the U.S. Department of Justice Civil Rights Division or the Department of
            Health and Human Services Office for Civil Rights.
          </p>
        </div>
      </section>

      {/* Phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Need help accessing our services? Call us — we are here for you.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
