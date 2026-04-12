// src/app/about/mission-values/page.tsx
// All Family Health Care — Mission & Values

import type { Metadata } from "next";
import { missionValuesSeo, missionValuesContent } from "@/content/pages/about";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: missionValuesSeo.title,
  description: missionValuesSeo.description,
  alternates: { canonical: missionValuesSeo.canonical },
  openGraph: {
    title: missionValuesSeo.title,
    description: missionValuesSeo.description,
    url: missionValuesSeo.canonical,
    type: "website",
  },
};

export default function MissionValuesPage() {
  const { hero, mission, vision, values } = missionValuesContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Mission & Values" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: hero.eyebrow,
          headline: hero.headline,
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
        }}
      />

      <TrustBar />

      {/* Mission & Vision */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
              Purpose & Direction
            </span>
          </div>
          <h2
            id="mission-heading"
            className="mb-10 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
            style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
          >
            Our Mission and Vision
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-xl border border-electric/30 bg-electric-light p-8">
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-widest text-electric">
                {mission.label}
              </span>
              <blockquote className="font-heading text-[20px] font-bold leading-snug text-charcoal">
                &ldquo;{mission.statement}&rdquo;
              </blockquote>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-border bg-surface p-8">
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-widest text-muted">
                {vision.label}
              </span>
              <blockquote className="font-heading text-[18px] font-semibold leading-snug text-charcoal">
                &ldquo;{vision.statement}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page phone CTA */}
      <div className="bg-surface border-y border-border px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Our values show in every visit. Call us to experience the difference.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              Medicare-covered home health care in Chicago — no obligation.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      {/* Values */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Core Values
              </span>
            </div>
            <h2
              id="values-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              The Values Behind Every Decision
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {values.map((value) => (
              <div key={value.name} className="bg-surface p-6" role="listitem">
                <h3 className="mb-2 font-heading text-[16px] font-bold text-charcoal">{value.name}</h3>
                <p className="text-[13px] font-light leading-relaxed text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How values show in our care */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Values in Action
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              How Our Values Show Up in Your Care
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { value: "Compassion First", inAction: "We take time to listen before we treat. Every visit starts with checking in on how the patient — and their family — is doing." },
              { value: "Clinical Excellence", inAction: "Our nurses and therapists maintain current licensure, participate in continuing education, and follow Joint Commission-level clinical standards." },
              { value: "Family-Centered Care", inAction: "We educate family caregivers at every visit — so they know what to watch for and how to help between our visits." },
              { value: "Dignity and Respect", inAction: "We knock before entering. We ask before touching. We treat every patient's home as their sanctuary, and every patient as our guest." },
              { value: "Radical Transparency", inAction: "We tell patients exactly what to expect from their care plan. We communicate changes promptly to physicians and families. No surprises." },
              { value: "Home as Healer", inAction: "We advocate for patients to receive care at home whenever clinically appropriate — because we genuinely believe they heal better there." },
            ].map((item) => (
              <div key={item.value} className="rounded-lg border border-border bg-bg p-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-electric">{item.value}</p>
                <p className="text-[13px] font-light leading-relaxed text-body">{item.inAction}</p>
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
              Experience our values in person. Schedule a free assessment.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              A care coordinator will call you back — real people, real answers.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
