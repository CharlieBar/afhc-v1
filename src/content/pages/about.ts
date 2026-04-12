// src/content/pages/about.ts
// All Family Health Care — About Section Content

import type { SEOMeta, TeamMember, FAQItem } from "@/types/content";

// ─── ABOUT HUB ───────────────────────────────────────────────────────────────

export const aboutSeo: SEOMeta = {
  title: "About Us | Chicago Home Health Agency",
  description:
    "All Family Health Care is a Medicare-certified, Joint Commission-accredited home health agency based in Edgebrook, Chicago. Serving families for 20+ years.",
  keywords: [
    "about All Family Health Care",
    "Chicago home health agency",
    "Medicare certified home health Chicago",
    "Joint Commission home health Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/about",
  ogImage: "/images/og/about.jpg",
};

export const aboutHero = {
  eyebrow: "About All Family Health Care",
  headline: "20 Years of Caring for Chicago Families — Right at Home",
  subheadline:
    "We're not a national chain or a staffing agency. We're your neighbors — a locally owned, Chicago-based home health agency built on relationships, trust, and genuine clinical excellence.",
  primaryCTA: {
    text: "📞 Call (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
  },
  secondaryCTA: {
    text: "Schedule Free Assessment",
    href: "/contact",
    variant: "secondary" as const,
  },
  image: {
    src: "/images/hero/about.jpg",
    alt: "All Family Health Care team of clinicians standing confidently outside a Chicago home",
    width: 1344,
    height: 768,
  },
};

// ─── OUR STORY ───────────────────────────────────────────────────────────────

export const ourStorySeo: SEOMeta = {
  title: "Our Story | Chicago Home Health Agency",
  description:
    "The story behind All Family Health Care — a Medicare-certified home health agency founded on the belief that every patient deserves to heal at home with dignity.",
  canonical: "https://www.allfamilyhealthcare.com/about/our-story",
};

export const ourStoryContent = {
  hero: {
    eyebrow: "Our Story",
    headline: "Built in Chicago. Built for Chicago Families.",
    subheadline:
      "All Family Health Care was founded with one simple belief: that every person deserves to recover and live with dignity — in the home they love.",
  },
  sections: [
    {
      headline: "Why We Started",
      body: `All Family Health Care was founded in Chicago's Edgebrook neighborhood with a mission to fill a gap that too many families experienced: the frightening transition from hospital to home with no clinical support. Too many patients were being discharged without adequate follow-up care. Too many families were left to navigate complex medical situations on their own.\n\nWe believed — and still believe — that skilled, compassionate home health care could change that. That a registered nurse visiting a patient at home after a hospitalization could prevent a readmission. That a physical therapist working with a stroke survivor in their own living room could restore function faster than a clinical setting. That a home health aide helping an elderly man or woman with personal care could preserve dignity that institutional care sometimes strips away.`,
    },
    {
      headline: "20 Years of Community",
      body: `For over two decades, All Family Health Care has served the same communities, the same neighborhoods, and in many cases, multiple generations of the same families. We've watched children grow up, helped grandparents stay home through their final years, and built relationships that outlast any single episode of care.\n\nOur office has been at 6413 N Kinzue Ave in Edgebrook for years. We're embedded in this community in a way a national chain never can be. When our nurses drive to a patient's home, they're often driving through neighborhoods they know, past schools their kids attended, through streets they've walked for years.`,
    },
    {
      headline: "What Sets Us Apart",
      body: `We earned Joint Commission accreditation — not because it was required, but because we wanted to hold ourselves to the highest standard in home health care. We maintain Medicare certification not as a minimum requirement, but as a commitment to meeting federal quality benchmarks for every patient we serve.\n\nWe insist on care consistency — the same nurse, the same therapist, the same relationship — because we know that consistency is how you catch the subtle change in a patient's condition before it becomes an emergency. We answer our phones with people who know home health care, because families in crisis deserve real answers, not voicemail.`,
    },
  ],
  timeline: [
    { year: "Founded", event: "All Family Health Care established in Edgebrook, Chicago" },
    { year: "Medicare", event: "Achieved Medicare certification" },
    { year: "Joint Commission", event: "Earned Joint Commission Gold Seal of Approval" },
    { year: "Today", event: "Serving 30+ communities and 5,000+ patients across Chicago and the North Shore" },
  ],
};

// ─── MISSION & VALUES ─────────────────────────────────────────────────────────

export const missionValuesSeo: SEOMeta = {
  title: "Mission & Values | Chicago Home Health Agency",
  description:
    "The mission, vision, and core values that guide every decision at All Family Health Care — a Medicare-certified home health agency in Chicago.",
  canonical: "https://www.allfamilyhealthcare.com/about/mission-values",
};

export const missionValuesContent = {
  hero: {
    eyebrow: "Mission & Values",
    headline: "What We Believe About Home Health Care",
  },
  mission: {
    label: "Our Mission",
    statement:
      "To deliver high-quality, compassionate, and medically supervised care at home — so patients can recover safely while maintaining dignity and quality of life.",
  },
  vision: {
    label: "Our Vision",
    statement:
      "A Chicago where every patient who can be cared for at home receives the clinical support they need to stay there — independent, safe, and surrounded by the people they love.",
  },
  values: [
    {
      icon: "heart",
      name: "Compassion First",
      description:
        "Clinical excellence matters. But how we make patients and families feel matters just as much. We treat every patient the way we'd want our own family treated.",
    },
    {
      icon: "shield-check",
      name: "Clinical Excellence",
      description:
        "We hold ourselves to the Joint Commission standard — the highest in home health. Our nurses and therapists are experienced, licensed, and committed to continuous learning.",
    },
    {
      icon: "users",
      name: "Family-Centered Care",
      description:
        "The patient is never alone in our eyes. We work with and educate the entire family — because recovery at home is a team effort.",
    },
    {
      icon: "eye",
      name: "Dignity and Respect",
      description:
        "Every person we serve has a lifetime of experience, achievements, and relationships. We enter their homes as guests, not authorities, and we honor who they are.",
    },
    {
      icon: "message-circle",
      name: "Radical Transparency",
      description:
        "We communicate clearly and honestly — with patients, families, and physicians. No runarounds, no voicemail mazes, no surprises on bills.",
    },
    {
      icon: "home",
      name: "Home as Healer",
      description:
        "We believe deeply that people heal better at home. The familiar environment, family presence, and preserved routines of home are therapeutic in ways no clinical setting can replicate.",
    },
  ],
};

// ─── ACCREDITATIONS ──────────────────────────────────────────────────────────

export const accreditationsSeo: SEOMeta = {
  title: "Accreditations & Certifications | Chicago Home Health Agency",
  description:
    "All Family Health Care is Medicare-certified by CMS and holds the Joint Commission Gold Seal of Approval — the highest accreditation in home health care.",
  canonical: "https://www.allfamilyhealthcare.com/about/accreditations",
};

export const accreditationsContent = {
  hero: {
    eyebrow: "Credentials & Accreditations",
    headline: "The Highest Standards in Home Health Care",
    subheadline:
      "Our accreditations aren't just certificates on a wall — they're a commitment to clinical quality, patient safety, and organizational excellence that we renew continuously.",
  },
  accreditations: [
    {
      name: "Medicare Certification",
      issuer: "Centers for Medicare & Medicaid Services (CMS)",
      icon: "shield",
      description:
        "Medicare certification means All Family Health Care meets all federal requirements for quality, safety, and clinical practice standards set by the Centers for Medicare & Medicaid Services. This certification is required to receive Medicare reimbursement and is reviewed regularly through on-site surveys.",
      whatItMeans: [
        "We meet all CMS Conditions of Participation",
        "Our clinical records and processes are federally audited",
        "Patients can use their Medicare benefits for our services",
        "We meet standards for infection control, patient rights, and clinical care",
      ],
    },
    {
      name: "Joint Commission Gold Seal of Approval",
      issuer: "The Joint Commission",
      icon: "award",
      description:
        "The Joint Commission is the nation's oldest and largest health care quality accreditation organization. Their Gold Seal of Approval is earned by hospitals, home health agencies, and other healthcare organizations that demonstrate sustained adherence to rigorous performance standards. Only agencies that voluntarily pursue and pass this rigorous evaluation earn the Gold Seal.",
      whatItMeans: [
        "We voluntarily meet standards above the federal minimum",
        "Regular unannounced on-site surveys by Joint Commission surveyors",
        "Standards covering patient safety, clinical quality, and leadership",
        "The same accreditation earned by the country's top hospitals",
      ],
    },
    {
      name: "Illinois Home Health Agency License",
      issuer: "Illinois Department of Public Health",
      icon: "file-check",
      description:
        "All Family Health Care holds a current Illinois Home Health Agency license, required of all agencies providing home health services in the state of Illinois. This license requires meeting state standards for staffing, training, and clinical practice.",
      whatItMeans: [
        "Licensed by the state of Illinois",
        "Meets all state staffing and training requirements",
        "Subject to state inspection and oversight",
        "Eligible to provide services to Illinois Medicaid patients",
      ],
    },
  ],
  staffCredentials: {
    headline: "Our Clinical Staff Credentials",
    body: "Every clinician on our team holds current licensure in their discipline. Our standards go beyond state minimums:",
    items: [
      "Registered Nurses (RN) — licensed in Illinois",
      "Licensed Practical Nurses (LPN) — licensed in Illinois",
      "Physical Therapists (PT) — licensed in Illinois",
      "Occupational Therapists (OT) — licensed in Illinois",
      "Speech-Language Pathologists (SLP) — licensed in Illinois",
      "Medical Social Workers (MSW/LSW) — licensed in Illinois",
      "Home Health Aides — trained and competency-tested per CMS standards",
      "All staff: background checked, insured, and bonded",
    ],
  },
};

// ─── WHY CHOOSE US PAGE ───────────────────────────────────────────────────────

export const whyChooseSeo: SEOMeta = {
  title: "Why Choose Us | Chicago Home Health Agency",
  description:
    "What makes All Family Health Care different from other Chicago home health agencies? Medicare certified, Joint Commission accredited, locally owned, and family-focused.",
  canonical: "https://www.allfamilyhealthcare.com/about/why-choose-all-family",
};

export const whyChooseContent = {
  hero: {
    eyebrow: "Why Choose Us",
    headline: "What Makes All Family Health Care Different",
    subheadline:
      "There are other home health agencies in Chicago. Here's why thousands of families and hundreds of physicians choose us.",
    primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" as const },
  },
  comparisons: [
    {
      category: "Accreditation",
      us: "Medicare Certified AND Joint Commission Accredited (Gold Seal)",
      others: "Many agencies are only Medicare certified — the minimum required",
      icon: "award",
    },
    {
      category: "Ownership",
      us: "Locally owned and operated — based in Edgebrook, Chicago",
      others: "Many are national chains with no community roots",
      icon: "home",
    },
    {
      category: "Care Consistency",
      us: "Same nurse and therapist assigned to each patient whenever possible",
      others: "Many agencies send whoever is available — different faces every visit",
      icon: "users",
    },
    {
      category: "Communication",
      us: "Physicians and families receive regular updates; 24/7 on-call nursing",
      others: "Some agencies provide minimal communication back to referring physicians",
      icon: "message-circle",
    },
    {
      category: "Response Time",
      us: "Care begins within 24–48 hours; urgent cases handled same day",
      others: "Some agencies take 3–5 days or more to initiate care",
      icon: "clock",
    },
    {
      category: "Community",
      us: "20+ years serving the same Chicago neighborhoods and families",
      others: "High staff turnover; no long-term community relationships",
      icon: "heart",
    },
  ],
  testimonials: [
    {
      quote:
        "I've been referring patients to All Family for years. They communicate better than any other home health agency I've worked with. I know my patients are being cared for.",
      author: "Dr. Patricia W.",
      role: "Family Medicine Physician, Northwest Chicago",
      rating: 5 as const,
    },
    {
      quote:
        "After my stroke, I was terrified about coming home. My All Family nurse became like a member of the family. She helped me understand what was happening and what to watch for. I couldn't have done it without her.",
      author: "Frank D.",
      role: "Patient, Stroke Recovery",
      location: "Edgebrook, Chicago",
      rating: 5 as const,
    },
  ],
};

// ─── TEAM PAGE ────────────────────────────────────────────────────────────────

export const teamSeo: SEOMeta = {
  title: "Our Team | Chicago Home Health Agency",
  description:
    "Meet the clinical and administrative team at All Family Health Care — Chicago's trusted Medicare-certified home health agency.",
  canonical: "https://www.allfamilyhealthcare.com/about/our-team",
};

export const teamContent = {
  hero: {
    eyebrow: "Our Team",
    headline: "The People Behind Your Care",
    subheadline:
      "Our clinical team includes registered nurses, licensed therapists, and certified home health aides with decades of combined home health experience in Chicago.",
  },
  intro: {
    body: "Every member of our team — from care coordinators to field clinicians — shares one commitment: treating every patient the way we'd want our own family treated. Our team is background-checked, licensed, insured, and trained to provide the highest standard of home health care.",
  },
  departments: [
    {
      name: "Clinical Leadership",
      description: "Our Director of Nursing and clinical supervisors oversee all patient care — reviewing care plans, supporting field clinicians, and ensuring quality standards are met on every visit.",
    },
    {
      name: "Registered Nurses (RNs)",
      description: "Our RNs perform initial assessments, manage complex conditions, provide wound care and medication management, and serve as the primary clinical point of contact for patients and families.",
    },
    {
      name: "Physical Therapists (PTs)",
      description: "Our PTs specialize in post-surgical rehab, fall prevention, balance training, and strength restoration — working with patients in their own homes.",
    },
    {
      name: "Occupational Therapists (OTs)",
      description: "Our OTs help patients relearn daily activities, assess homes for safety, and recommend adaptive equipment — restoring independence and function.",
    },
    {
      name: "Speech-Language Pathologists (SLPs)",
      description: "Our SLPs treat communication disorders, swallowing difficulties, and cognitive-communication challenges — critical for stroke survivors and neurological patients.",
    },
    {
      name: "Home Health Aides",
      description: "Our certified home health aides provide compassionate personal care — bathing, grooming, dressing — with sensitivity and respect.",
    },
    {
      name: "Care Coordinators",
      description: "Your first point of contact — care coordinators manage scheduling, answer family questions, coordinate with physicians, and ensure the entire care team is aligned.",
    },
  ],
};
