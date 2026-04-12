// src/app/terms-of-service/page.tsx
// All Family Health Care — Terms of Service Page

import type { Metadata } from "next";
import { site } from "@/content/global/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import CTAStrip from "@/components/sections/CTAStrip";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the All Family Health Care website — acceptable use, disclaimers, and governing law.",
  alternates: {
    canonical: `${site.url}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service",
    description:
      "Terms of service for the All Family Health Care website — acceptable use, disclaimers, and governing law.",
    url: `${site.url}/terms-of-service`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 1, 2025";

export default function TermsOfServicePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service" },
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
            Terms of Service
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Prose Content */}
      <section className="bg-bg px-6 py-10 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px]">

          <p className="text-[14px] font-light text-body leading-relaxed mb-6">
            By accessing or using the {site.name} website at{" "}
            <a href={site.url} className="text-electric underline hover:no-underline">
              {site.url}
            </a>
            , you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our website.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            1. Website Use
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            This website is provided for informational purposes only. The content on this site
            does not constitute medical advice. Always consult a licensed healthcare provider for
            medical decisions. Nothing on this website creates a patient-provider relationship.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            You agree to use this website only for lawful purposes and in a manner that does not
            infringe the rights of others or restrict their use of the site.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            2. No Medical Advice
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            The information provided on this website — including descriptions of services,
            conditions, and care — is general in nature and is not a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the guidance of your physician or
            other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            In the event of a medical emergency, call 911 immediately.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            3. Intellectual Property
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            All content on this website — including text, graphics, logos, and images — is the
            property of {site.name} or its content suppliers and is protected by applicable
            copyright and trademark laws. You may not reproduce, distribute, or create derivative
            works without our express written consent.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            4. Third-Party Links
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Our website may contain links to third-party websites for your convenience.
            We do not control those sites and are not responsible for their content, privacy
            practices, or accuracy. Linking to a site does not imply endorsement.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            5. Disclaimer of Warranties
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
            of any kind, either express or implied, including but not limited to implied warranties
            of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We do not warrant that the website will be uninterrupted, error-free, or free of
            viruses or other harmful components.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            To the fullest extent permitted by law, {site.name} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of your
            use of or inability to use this website.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            7. Governing Law
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            These Terms of Service are governed by and construed in accordance with the laws of
            the State of Illinois, without regard to its conflict of law provisions. Any disputes
            arising from these terms shall be resolved in the courts of Cook County, Illinois.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            8. Changes to These Terms
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We reserve the right to update these Terms at any time. The updated date at the top
            of this page reflects the most recent revision. Continued use of the website after
            changes constitutes acceptance of the new terms.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">
            9. Contact
          </h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Questions about these Terms should be directed to:
          </p>
          <address className="not-italic rounded-xl border border-border bg-surface p-5 mb-4">
            <p className="font-heading font-bold text-charcoal text-sm mb-1">{site.name}</p>
            <p className="text-[13px] text-body font-light">{site.address.full}</p>
            <p className="text-[13px] text-body font-light">Phone: {site.phone}</p>
            <p className="text-[13px] text-body font-light">Email: {site.email}</p>
          </address>
        </div>
      </section>

      {/* Phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-sm font-semibold text-charcoal">
            Questions? Our care coordinators are ready to help.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
