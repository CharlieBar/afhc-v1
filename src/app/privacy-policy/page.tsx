// src/app/privacy-policy/page.tsx
// All Family Health Care — Privacy Policy Page

import type { Metadata } from "next";
import { site } from "@/content/global/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import CTAStrip from "@/components/sections/CTAStrip";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "All Family Health Care's privacy policy — how we collect, use, and protect your personal health information in compliance with HIPAA.",
  alternates: {
    canonical: `${site.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "All Family Health Care's privacy policy — how we collect, use, and protect your personal health information in compliance with HIPAA.",
    url: `${site.url}/privacy-policy`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 1, 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" },
            ]}
          />
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-bg px-6 pt-8 pb-4 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px]">
          <h1 className="font-heading font-extrabold tracking-tight text-charcoal mb-3"
            style={{ fontSize: "clamp(28px, 6vw, 44px)" }}>
            Privacy Policy
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Prose Content */}
      <section className="bg-bg px-6 py-10 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[800px] prose prose-sm prose-neutral max-w-none">

          <div className="rounded-xl border border-electric/20 bg-electric-light p-5 mb-8">
            <p className="font-heading text-sm font-semibold text-electric mb-1">
              HIPAA Notice
            </p>
            <p className="text-[13px] text-body font-light">
              All Family Health Care is a HIPAA-covered entity. Your Protected Health Information (PHI) is
              governed by our Notice of Privacy Practices, which is provided separately at the start of care.
              This Privacy Policy covers our website and general business practices.
            </p>
          </div>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We collect information you voluntarily provide when you contact us, submit a referral form,
            or request a free assessment. This may include your name, phone number, email address, and
            general health situation. We do not collect sensitive health information through our website.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We also collect standard web analytics data including IP addresses, browser type, pages visited,
            and time on site through tools such as Google Analytics. This data is used in aggregate to
            improve our website.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Information you submit is used solely to respond to your inquiry, coordinate care services,
            or process a referral. We do not sell, rent, or trade your personal information to third parties.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We may share information with our clinical staff and care coordinators as necessary to
            provide services. We may also disclose information as required by law or to protect the
            safety of our patients and staff.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">3. HIPAA and Protected Health Information</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            As a Medicare-certified home health agency, we are subject to the Health Insurance Portability
            and Accountability Act (HIPAA). Your Protected Health Information (PHI) — including your medical
            records, diagnoses, and treatment information — is handled in strict compliance with HIPAA.
          </p>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            You have the right to access, correct, and request restrictions on use of your PHI.
            A full Notice of Privacy Practices is provided at the start of home health services.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">4. Cookies and Tracking</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Our website uses cookies to improve user experience and analyze site traffic. You may disable
            cookies in your browser settings. Disabling cookies will not affect your ability to access
            our content or contact us.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">5. Data Security</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We implement industry-standard security measures to protect information submitted through our
            website, including SSL encryption on all form submissions. No method of electronic transmission
            is 100% secure; we take reasonable precautions to protect your data.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">6. Children&apos;s Privacy</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            Our website is not directed to children under 13. We do not knowingly collect personal
            information from children. If you believe a child has submitted information to us,
            please contact us and we will promptly delete it.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">7. Changes to This Policy</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. The updated date at the top of this
            page reflects the most recent revision. Continued use of our website after changes constitutes
            acceptance of the updated policy.
          </p>

          <h2 className="font-heading font-bold text-charcoal text-xl mt-8 mb-3">8. Contact Us</h2>
          <p className="text-[14px] font-light text-body leading-relaxed mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us:
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
            Questions about your privacy rights? Call us directly.
          </p>
          <PhoneButton variant="default" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
