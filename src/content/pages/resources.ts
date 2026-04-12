// src/content/pages/resources.ts
// All Family Health Care — Resources Section Content

import type { SEOMeta } from "@/types/content";

// ─── RESOURCES HUB ────────────────────────────────────────────────────────────

export const resourcesSeo: SEOMeta = {
  title: "Patient & Caregiver Resources | Chicago Home Health",
  description:
    "Guides, checklists, and educational resources for home health care patients and family caregivers in Chicago. Written by clinical professionals.",
  keywords: [
    "home health care resources Chicago",
    "caregiver guides",
    "home safety checklist",
    "patient guides Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/resources",
};

export const resourcesHero = {
  eyebrow: "Patient & Caregiver Resources",
  headline: "Practical Tools for Real Situations",
  subheadline:
    "Guides, checklists, and resources written by our clinical team to help patients and families navigate home health care, manage conditions, and keep loved ones safe.",
  primaryCTA: {
    text: "📞 Call (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
  },
  image: {
    src: "/images/hero/resources.jpg",
    alt: "Family caregiver reading a healthcare guide with senior parent at a bright kitchen table",
    width: 1344,
    height: 768,
  },
};

export const resourceCategories = [
  {
    slug: "patient-guides",
    name: "Patient Guides",
    icon: "file-text",
    description: "Guides to help patients understand their care, rights, and recovery.",
    resources: [
      {
        title: "What to Expect from Home Health Care",
        description: "A step-by-step overview of the home health care process — from first assessment to completing your care plan.",
        href: "/patients/what-to-expect",
        type: "guide",
      },
      {
        title: "Medicare Home Health Benefits Explained",
        description: "Plain-language breakdown of what Medicare covers, who qualifies, and how to access your benefits.",
        href: "/patients/medicare-home-health-benefits",
        type: "guide",
      },
      {
        title: "How to Start Home Health Care",
        description: "Three simple steps from your first call to your first visit.",
        href: "/patients/how-to-start-home-health",
        type: "guide",
      },
      {
        title: "Your Patient Rights",
        description: "Every home health patient has important rights — here's what they are.",
        href: "/patients/patient-rights",
        type: "guide",
      },
      {
        title: "Complete Guide to Home Health Care",
        description: "A comprehensive 14-minute read covering everything Chicago families need to know.",
        href: "/blog/ultimate-guide-home-health-care",
        type: "article",
      },
    ],
  },
  {
    slug: "caregiver-guides",
    name: "Caregiver Guides",
    icon: "users",
    description: "Resources for family members managing care for a loved one at home.",
    resources: [
      {
        title: "The Family Caregiver Survival Guide",
        description: "A comprehensive guide for adult children and spouses managing a loved one's care — covering burnout, legal planning, and getting help.",
        href: "/blog/family-caregiver-survival-guide",
        type: "article",
      },
      {
        title: "How to Care for Aging Parents at Home",
        description: "Practical guidance for adult children stepping into a caregiving role.",
        href: "/blog/how-to-care-for-aging-parents",
        type: "article",
      },
      {
        title: "Caregiver Burnout: Warning Signs and Solutions",
        description: "Recognizing the signs of caregiver burnout — and what to do about it.",
        href: "/blog/caregiver-burnout-warning-signs",
        type: "article",
      },
      {
        title: "How to Talk to Your Parent About Getting Help",
        description: "Practical strategies for the difficult conversation about home health care.",
        href: "/blog/communication-with-elderly-parents",
        type: "article",
      },
      {
        title: "Legal Documents Every Caregiver Needs",
        description: "Power of attorney, healthcare proxy, and POLST — explained in plain language.",
        href: "/blog/legal-documents-caregivers-need",
        type: "article",
      },
      {
        title: "Caregiver Resources",
        description: "Community and professional support resources for Chicago caregivers.",
        href: "/patients/caregiver-resources",
        type: "guide",
      },
    ],
  },
  {
    slug: "home-safety-checklist",
    name: "Home Safety Checklist",
    icon: "shield-check",
    description: "Assess your home's safety and identify the changes that matter most.",
    resources: [
      {
        title: "Room-by-Room Fall Prevention Guide",
        description: "The modifications that matter most — bathroom, bedroom, stairs, and more.",
        href: "/blog/fall-prevention-for-seniors",
        type: "article",
      },
      {
        title: "Bathroom Safety for Seniors",
        description: "The most dangerous room in the home — and how to make it safer.",
        href: "/blog/bathroom-safety-for-seniors",
        type: "article",
      },
      {
        title: "Bedroom Safety and Nighttime Fall Prevention",
        description: "How to reduce the risk of falls during nighttime trips to the bathroom.",
        href: "/blog/bedroom-safety-for-seniors",
        type: "article",
      },
      {
        title: "Complete Home Safety Guide for Elderly",
        description: "A comprehensive assessment checklist for every area of the home.",
        href: "/blog/how-to-make-home-safe-for-elderly",
        type: "article",
      },
    ],
  },
];

// ─── HOME SAFETY CHECKLIST PAGE ───────────────────────────────────────────────

export const homeSafetyChecklistSeo: SEOMeta = {
  title: "Home Safety Checklist for Seniors | Chicago Home Health",
  description:
    "A comprehensive room-by-room home safety checklist for seniors — identify fall hazards and safety risks in every area of the home.",
  keywords: [
    "home safety checklist seniors",
    "fall prevention checklist",
    "senior home safety assessment",
    "aging in place safety Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/resources/home-safety-checklist",
};

export const homeSafetyChecklist = {
  hero: {
    eyebrow: "Home Safety Checklist",
    headline: "Is Your Home Safe for Your Loved One?",
    subheadline:
      "Use this checklist to identify fall hazards and safety risks in every room — then take action on the items that matter most.",
    primaryCTA: {
      text: "Schedule a Professional Home Safety Assessment",
      href: "/contact",
      variant: "secondary" as const,
    },
    phoneCTA: {
      text: "📞 Call (773) 775-2588",
      href: "tel:(773)775-2588",
      variant: "phone" as const,
    },
  },
  note: "Our occupational therapists perform professional home safety assessments as part of home health care — covered by Medicare. Call (773) 775-2588 to learn more.",
  rooms: [
    {
      room: "Bathroom",
      priority: "highest",
      items: [
        { text: "Grab bars installed in shower/tub (wall-anchored, not suction)", critical: true },
        { text: "Grab bar installed beside toilet", critical: true },
        { text: "Non-slip mat inside tub or shower", critical: true },
        { text: "Non-slip bath mat outside tub (not a throw rug)", critical: true },
        { text: "Night light that turns on automatically", critical: true },
        { text: "Shower chair or bench available", critical: false },
        { text: "Raised toilet seat if needed", critical: false },
        { text: "Handheld showerhead installed", critical: false },
        { text: "Lever-style faucet handles (not knobs)", critical: false },
        { text: "Hot water heater set to 120°F or below to prevent scalding", critical: false },
        { text: "Medications stored safely (not accessible to confused patients)", critical: false },
      ],
    },
    {
      room: "Bedroom",
      priority: "high",
      items: [
        { text: "Clear path from bed to bathroom with no obstacles", critical: true },
        { text: "Night light or motion-activated light on path to bathroom", critical: true },
        { text: "All area rugs removed or secured with non-slip backing", critical: true },
        { text: "Bed at correct height (feet flat on floor when sitting on edge)", critical: false },
        { text: "Phone accessible from bed (within arm's reach)", critical: true },
        { text: "Glasses accessible from bed immediately upon waking", critical: false },
        { text: "Walking aids (cane, walker) kept beside bed", critical: false },
        { text: "Bed rail or grab bar if needed for rising", critical: false },
        { text: "Adequate lighting (not just nightlights)", critical: false },
        { text: "Emergency call device or Life Alert button nearby", critical: false },
      ],
    },
    {
      room: "Living Areas",
      priority: "medium",
      items: [
        { text: "All throw rugs removed or secured (non-slip backing and taped edges)", critical: true },
        { text: "Electrical cords not crossing walking paths", critical: true },
        { text: "Clear, unobstructed paths between all seating and destinations", critical: true },
        { text: "Adequate lighting (especially in reading areas and hallways)", critical: false },
        { text: "Furniture arranged to provide support when moving through room", critical: false },
        { text: "Phone accessible from primary seating area", critical: false },
        { text: "Frequently used items within reach (no stretching or bending needed)", critical: false },
        { text: "Stable, armored chairs (arms to push up from)", critical: false },
      ],
    },
    {
      room: "Kitchen",
      priority: "medium",
      items: [
        { text: "Frequently used items stored at accessible heights (shoulder to hip)", critical: false },
        { text: "Non-slip mat in front of sink and stove", critical: false },
        { text: "Good lighting over work surfaces", critical: false },
        { text: "Step stool with handle if upper storage must be accessed", critical: false },
        { text: "Fire extinguisher accessible and patient knows how to use it", critical: false },
        { text: "Smoke detector working and tested recently", critical: true },
        { text: "Stove knobs covered or stove modified if cognitive impairment present", critical: false },
        { text: "Spills cleaned immediately to prevent slipping", critical: false },
      ],
    },
    {
      room: "Stairs & Hallways",
      priority: "high",
      items: [
        { text: "Handrails on BOTH sides of all stairs", critical: true },
        { text: "All handrails secure (test each one — no wobble)", critical: true },
        { text: "Non-slip treads on all steps", critical: true },
        { text: "Light switches at both top and bottom of stairs", critical: true },
        { text: "All steps clearly visible (no shadows)", critical: false },
        { text: "Nothing stored on stairs", critical: true },
        { text: "Hallways clear and well-lit", critical: false },
        { text: "Stairlift assessed if climbing stairs is difficult", critical: false },
      ],
    },
    {
      room: "Exterior & Entryways",
      priority: "medium",
      items: [
        { text: "Motion-activated exterior lighting at all entrances", critical: false },
        { text: "Handrail at all exterior steps", critical: true },
        { text: "Non-slip surface on porch/steps (especially important in Chicago winters)", critical: true },
        { text: "Uneven or cracked walkways repaired", critical: false },
        { text: "Plan for ice and snow removal (or arrangements made)", critical: true },
        { text: "Threshold ramps for any raised door thresholds", critical: false },
        { text: "Doorbell or intercom accessible without rushing", critical: false },
      ],
    },
  ],
  professionalAssessmentCTA: {
    headline: "Not Sure Where to Start?",
    body: "Our occupational therapists perform comprehensive professional home safety assessments as part of Medicare home health care — at no cost to qualifying patients. They identify specific hazards, make concrete recommendations, and can often arrange modifications through community resources.",
    primaryCTA: {
      text: "📞 Call (773) 775-2588",
      href: "tel:(773)775-2588",
      variant: "phone" as const,
    },
    secondaryCTA: {
      text: "Request a Home Safety Assessment",
      href: "/contact",
      variant: "secondary" as const,
    },
  },
};
