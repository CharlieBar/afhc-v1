// src/app/about/our-team/page.tsx
// All Family Health Care — Our Team

import type { Metadata } from "next";
import { teamSeo, teamContent } from "@/content/pages/about";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CTAStrip from "@/components/sections/CTAStrip";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PhoneButton from "@/components/ui/PhoneButton";

export const metadata: Metadata = {
  title: teamSeo.title,
  description: teamSeo.description,
  alternates: { canonical: teamSeo.canonical },
  openGraph: {
    title: teamSeo.title,
    description: teamSeo.description,
    url: teamSeo.canonical,
    type: "website",
  },
};

export default function OurTeamPage() {
  const { hero, intro, departments } = teamContent;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-bg px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Team" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <Hero
        data={{
          eyebrow: hero.eyebrow,
          headline: hero.headline,
          subheadline: hero.subheadline,
          primaryCTA: {
            text: "📞 Call (773) 775-2588",
            href: "tel:(773)775-2588",
            variant: "phone",
          },
          secondaryCTA: {
            text: "Schedule Free Assessment",
            href: "/contact",
          },
          badge: "All staff: background checked, licensed, insured, and bonded",
        }}
      />

      <TrustBar />

      {/* Team intro */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-[800px]">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Our Commitment
              </span>
            </div>
            <h2
              className="mb-4 font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              A Team You Can Trust
            </h2>
            <p className="text-sm font-light leading-relaxed text-body md:text-base">
              {intro.body}
            </p>
          </div>
          <div className="mt-8">
            <PhoneButton variant="default" />
          </div>
        </div>
      </section>

      {/* Departments */}
      <section
        className="bg-bg py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14"
        aria-labelledby="departments-heading"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Clinical Staff
              </span>
            </div>
            <h2
              id="departments-heading"
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(26px, 6vw, 44px)" }}
            >
              Our Clinical Departments
            </h2>
          </div>

          <div
            className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
            role="list"
          >
            {departments.map((dept) => (
              <div key={dept.name} className="bg-surface p-6" role="listitem">
                <h3 className="mb-2 font-heading text-[16px] font-bold text-charcoal">{dept.name}</h3>
                <p className="text-[13px] font-light leading-relaxed text-body">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff credentials */}
      <section className="bg-surface border-y border-border py-16 px-6 md:py-[72px] md:px-8 lg:py-[88px] lg:px-10 xl:py-[100px] xl:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-electric" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
                Credentials & Standards
              </span>
            </div>
            <h2
              className="font-heading font-extrabold tracking-tight leading-[1.1] text-charcoal"
              style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
            >
              Staff Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "All clinical staff hold current Illinois licensure in their discipline",
              "All staff are background-checked, insured, and bonded",
              "Home health aides are trained and competency-tested per CMS standards",
              "Continuous education and training for all clinical staff",
              "Regular supervisory visits to ensure quality of care",
              "Joint Commission standards applied to all care delivered",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4">
                <span className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true">✓</span>
                <p className="text-[13px] font-light text-body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page phone CTA */}
      <div className="bg-bg px-6 py-8 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-base font-bold text-charcoal">
              Want to meet our team? Schedule a free consultation.
            </p>
            <p className="mt-1 text-sm font-light text-body">
              A care coordinator will answer your questions and explain what to expect.
            </p>
          </div>
          <PhoneButton variant="large" />
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
