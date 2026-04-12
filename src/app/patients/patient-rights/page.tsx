// src/app/patients/patient-rights/page.tsx
// All Family Health Care — Patient Rights & Responsibilities

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: "Patient Rights & Responsibilities",
  description:
    "Every patient receiving home health care has important rights protected by federal and state law. Learn your rights as a patient at All Family Health Care.",
  keywords: [
    "home health patient rights",
    "patient rights home care Illinois",
    "Medicare patient rights",
  ],
  alternates: { canonical: "https://www.allfamilyhealthcare.com/patients/patient-rights" },
  openGraph: {
    title: "Patient Rights & Responsibilities",
    description:
      "Every patient receiving home health care has important rights protected by federal and state law.",
    url: "https://www.allfamilyhealthcare.com/patients/patient-rights",
    type: "website",
  },
};

const patientRights = [
  {
    title: "Right to Be Informed",
    rights: [
      "You have the right to be informed of your rights in a language and manner you understand.",
      "You have the right to receive written notice of your rights before care begins.",
      "You have the right to know the name and credentials of every clinician who cares for you.",
      "You have the right to receive an itemized bill and explanation of all charges.",
    ],
  },
  {
    title: "Right to Participate in Care",
    rights: [
      "You have the right to participate in the development and revision of your care plan.",
      "You have the right to refuse treatment or any part of a care plan.",
      "You have the right to be informed about your medical condition, diagnosis, and treatment options.",
      "You have the right to request changes to your care schedule.",
    ],
  },
  {
    title: "Right to Privacy and Dignity",
    rights: [
      "You have the right to have your personal privacy respected.",
      "You have the right to be treated with dignity, respect, and consideration.",
      "You have the right to have your personal health information kept confidential (HIPAA).",
      "You have the right to review your medical records upon request.",
    ],
  },
  {
    title: "Right to Safe Care",
    rights: [
      "You have the right to receive care that is safe and of high quality.",
      "You have the right to be free from verbal, mental, sexual, and physical abuse.",
      "You have the right to have your property treated with respect.",
      "You have the right to receive care without discrimination based on race, religion, nationality, or disability.",
    ],
  },
  {
    title: "Right to Complain",
    rights: [
      "You have the right to voice grievances without fear of retaliation or discrimination.",
      "You have the right to have your complaints heard and addressed promptly.",
      "You have the right to contact the Illinois Department of Public Health or Medicare with unresolved concerns.",
      "You have the right to contact the Illinois Long-Term Care Ombudsman program.",
    ],
  },
  {
    title: "Right to Discharge Planning",
    rights: [
      "You have the right to be involved in discharge planning.",
      "You have the right to know about alternative services when home health is no longer needed.",
      "You have the right to be informed in advance of any changes to your care plan.",
    ],
  },
];

const patientResponsibilities = [
  "Provide accurate and complete information about your health, medications, and medical history.",
  "Follow the care plan agreed upon with your physician and care team.",
  "Notify your care team of any changes in your condition or concerns between visits.",
  "Treat all home health staff with respect and courtesy.",
  "Keep scheduled appointments and notify us as soon as possible if you need to reschedule.",
  "Provide a safe environment for your care team to deliver care.",
  "Be honest about your needs, preferences, and any barriers to following your care plan.",
];

const contacts = [
  {
    name: "All Family Health Care — Patient Concerns",
    phone: "(773) 775-2588",
    detail: "Call to speak with a supervisor about any concern.",
  },
  {
    name: "Illinois Department of Public Health",
    phone: "1-800-252-4343",
    detail: "For unresolved complaints about a home health agency.",
  },
  {
    name: "Medicare — 1-800-MEDICARE",
    phone: "1-800-633-4227",
    detail: "For concerns about Medicare-covered services.",
  },
];

export default function PatientRightsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Patients & Caregivers", href: "/patients" },
              { label: "Patient Rights" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: "Patient Rights",
          headline: "Your Rights as a Home Health Patient",
          subheadline:
            "Every patient receiving home health care is protected by federal and state law. We are committed to upholding every one of these rights — every visit, every time.",
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "Medicare Certified · Joint Commission Accredited · Illinois Licensed",
        }}
      />

      <TrustBar />

      {/* Patient Rights */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="rights-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Patient Rights
              </span>
            </div>
            <h2
              id="rights-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Your Rights as Our Patient
            </h2>
          </div>

          <div className="space-y-6">
            {patientRights.map((section) => (
              <div key={section.title} className="rounded-xl border border-border bg-surface p-6 md:p-8">
                <h3 className="mb-4 font-heading text-[17px] font-bold text-charcoal">{section.title}</h3>
                <ul className="space-y-2.5" role="list">
                  {section.rights.map((right) => (
                    <li key={right} className="flex items-start gap-3 text-sm font-light text-body" role="listitem">
                      <span className="mt-1 flex-shrink-0 text-electric" aria-hidden="true">→</span>
                      {right}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Have a concern about your care? We want to hear from you.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us directly — a supervisor is available to address any issue.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Patient Responsibilities */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="responsibilities-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Patient Responsibilities
              </span>
            </div>
            <h2
              id="responsibilities-heading"
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Your Responsibilities as a Patient
            </h2>
            <p className="max-w-[560px] text-sm font-light leading-relaxed text-body">
              A successful home health care experience is a partnership. Here&apos;s what we ask of you and your family:
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            {patientResponsibilities.map((responsibility) => (
              <li key={responsibility} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4" role="listitem">
                <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">✓</span>
                <p className="text-[13px] font-light text-body">{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact for Concerns */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              File a Concern
            </span>
          </div>
          <h2
            className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
          >
            How to Report a Concern
          </h2>
          <p className="mb-8 max-w-[560px] text-sm font-light leading-relaxed text-body">
            If you have a concern about your care, please contact us first so we can resolve it promptly. If you are not satisfied with our response, you may contact the following agencies:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contacts.map((contact) => (
              <div key={contact.name} className="rounded-xl border border-border bg-bg p-5">
                <h3 className="mb-1 font-heading text-[14px] font-bold text-charcoal">{contact.name}</h3>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className="mb-2 block font-mono text-[13px] text-electric hover:underline"
                >
                  {contact.phone}
                </a>
                <p className="text-[12px] font-light text-muted">{contact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Have questions about your care or rights?
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Call us anytime during business hours. We&apos;re here to help.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
