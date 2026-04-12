// src/app/referrals/contact-referral-team/page.tsx
// All Family Health Care — Contact Referral Team

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";
import { site } from "@/content/global/site";

export const metadata: Metadata = {
  title: "Contact Our Referral Team",
  description:
    "Contact the All Family Health Care referral and intake team. Direct phone line for physicians and discharge planners. We respond to all referrals within 24 hours.",
  keywords: ["contact home health referral team Chicago", "physician referral contact Chicago"],
  alternates: { canonical: "https://www.allfamilyhealthcare.com/referrals/contact-referral-team" },
  openGraph: {
    title: "Contact Our Referral Team",
    description:
      "Direct contact information for the All Family Health Care referral and intake team.",
    url: "https://www.allfamilyhealthcare.com/referrals/contact-referral-team",
    type: "website",
  },
};

export default function ContactReferralTeamPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "For Physicians", href: "/referrals" },
              { label: "Contact Referral Team" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Referral Team Contact",
          headline: "Reach Our Referral Team Directly",
          subheadline:
            "Our intake coordinators and clinical staff are available to discuss referrals, answer clinical questions, and handle urgent requests. No automated systems — real people, real answers.",
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Submit Referral Online",
            href: "/referrals/referral-form",
          },
          badge: "Referrals accepted 7 days a week · Urgent cases handled same day",
        }}
      />

      <TrustBar />

      {/* Contact Info */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Contact Information
              </span>
            </div>
            <h2
              id="contact-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              How to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Phone */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Phone</p>
              <a
                href={`tel:${site.phoneRaw}`}
                className="block font-heading text-[28px] font-extrabold text-electric hover:text-electric-dark transition-colors"
                aria-label={`Call All Family Health Care at ${site.phoneDisplay}`}
              >
                {site.phone}
              </a>
              <p className="mt-2 text-[13px] font-light text-body">
                Primary referral line. A care coordinator answers during business hours. For urgent referrals, calling is the fastest option.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="block font-heading text-[16px] font-bold text-electric hover:text-electric-dark transition-colors break-all"
              >
                {site.email}
              </a>
              <p className="mt-2 text-[13px] font-light text-body">
                For non-urgent inquiries. Please do not send protected health information via unencrypted email.
              </p>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">Office Address</p>
              <address className="not-italic">
                <p className="font-heading text-[16px] font-bold text-charcoal">{site.address.street}</p>
                <p className="font-heading text-[16px] font-bold text-charcoal">
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </address>
              <p className="mt-2 text-[13px] font-light text-body">
                Edgebrook neighborhood, Chicago. Physician visits by appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Office Hours
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              When We Are Available
            </h2>
          </div>

          <div className="max-w-[480px] overflow-hidden rounded-xl border border-border bg-bg">
            {site.hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between border-b border-border p-4 last:border-b-0"
              >
                <span className="font-heading text-[14px] font-semibold text-charcoal">{item.day}</span>
                <span className="font-mono text-[12px] text-electric">{item.hours}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-light text-body">
              For urgent referrals outside business hours, call our main line and leave a message — we will respond as quickly as possible.
            </p>
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* For urgent referrals */}
      <section className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Urgent Referrals
                </span>
              </div>
              <h2
                className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
              >
                For STAT and Urgent Referrals
              </h2>
              <p className="mb-4 text-sm font-light leading-relaxed text-body">
                For patients requiring same-day or next-day home health initiation, call our referral line directly and clearly indicate the urgency. We prioritize urgent cases and work to start care as quickly as possible.
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  "Call (773) 775-2588 and state the urgency clearly",
                  "Provide patient name, contact, diagnosis, and insurance",
                  "We will confirm within hours, not 24 hours",
                  "Discharge coordination handled same day when possible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-light text-body">
                    <span className="mt-0.5 text-electric" aria-hidden="true">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <PhoneButton variant="large" />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                  Hospital Discharge Planners
                </span>
              </div>
              <h2
                className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
                style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
              >
                Working with Discharge Teams
              </h2>
              <p className="mb-4 text-sm font-light leading-relaxed text-body">
                We work closely with hospital discharge planners and social workers throughout the Chicago area. We are familiar with discharge protocols at major Chicago-area hospitals and can coordinate directly with your team.
              </p>
              <ul className="space-y-2">
                {[
                  "Direct referral line staffed during business hours",
                  "We accept verbal and written referrals",
                  "We confirm insurance eligibility before you discharge",
                  "Nursing visit typically within 24 hours of discharge",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-light text-body">
                    <span className="mt-0.5 text-electric" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Ready to refer? Call or submit online.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              We confirm every referral within 24 hours.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip
        eyebrow="Refer a Patient"
        headline="We Respond Within 24 Hours — Guaranteed"
        subheadline="Your patients receive expert home health care. You receive consistent communication throughout the episode. That's our promise."
      />
    </>
  );
}
