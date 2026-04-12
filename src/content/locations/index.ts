// src/content/locations/index.ts
// All Family Health Care — All Location Pages Data
// 31 location pages: 20 Chicago neighborhoods + 11 suburbs

import type { LocationPage } from "@/types/content";

// ─── LOCATION PAGE GENERATOR TEMPLATE ──────────────────────────────────────
// Each location page follows this structure.
// Import this in src/app/locations/[slug]/page.tsx

export type LocationSlug =
  | "chicago-home-health-care"
  | "edgebrook-home-health-care"
  | "sauganash-home-health-care"
  | "jefferson-park-home-health-care"
  | "norwood-park-home-health-care"
  | "forest-glen-home-health-care"
  | "lincoln-square-home-health-care"
  | "ravenswood-home-health-care"
  | "rogers-park-home-health-care"
  | "andersonville-home-health-care"
  | "uptown-home-health-care"
  | "lincoln-park-home-health-care"
  | "lakeview-home-health-care"
  | "irving-park-home-health-care"
  | "portage-park-home-health-care"
  | "dunning-home-health-care"
  | "montclare-home-health-care"
  | "belmont-cragin-home-health-care"
  | "hermosa-home-health-care"
  | "humboldt-park-home-health-care"
  | "park-ridge-home-health-care"
  | "skokie-home-health-care"
  | "des-plaines-home-health-care"
  | "evanston-home-health-care"
  | "glenview-home-health-care"
  | "niles-home-health-care"
  | "morton-grove-home-health-care"
  | "lincolnwood-home-health-care"
  | "rosemont-home-health-care"
  | "harwood-heights-home-health-care"
  | "elmwood-park-home-health-care";

// ─── SHARED CONTENT ACROSS ALL LOCATION PAGES ──────────────────────────────

export const sharedServices = [
  { name: "Skilled Nursing", slug: "skilled-nursing" },
  { name: "Physical Therapy", slug: "physical-therapy" },
  { name: "Occupational Therapy", slug: "occupational-therapy" },
  { name: "Speech Therapy", slug: "speech-therapy" },
  { name: "Home Health Aide", slug: "home-health-aide" },
  { name: "Wound Care", slug: "wound-care-management" },
  { name: "Post-Surgical Care", slug: "post-surgical-care" },
  { name: "Medication Management", slug: "medication-management" },
];

export const sharedWhyChoose = {
  headline: "Why Families Choose All Family Health Care",
  points: [
    {
      title: "Medicare Certified & Joint Commission Accredited",
      description: "The Gold Seal standard — the same accreditation used by top hospitals.",
    },
    {
      title: "Local Team That Knows Your Community",
      description: "Our nurses and therapists live and work in these neighborhoods.",
    },
    {
      title: "24/7 On-Call Nursing Support",
      description: "Questions don't wait. Our nurses are reachable day and night.",
    },
    {
      title: "Consistent Care Team",
      description: "Same nurse, same therapist — building trust and catching changes early.",
    },
    {
      title: "We Handle All Medicare Paperwork",
      description: "We coordinate with your physician and handle all insurance billing.",
    },
  ],
};

export const sharedFAQTemplate = (locationName: string) => [
  {
    question: `Does Medicare cover home health care in ${locationName}?`,
    answer: `Yes — if your doctor orders home health services and you qualify as homebound, Medicare typically covers 100% of skilled nursing, physical therapy, occupational therapy, speech therapy, and home health aide visits in ${locationName}. Call us at (773) 775-2588 and we'll verify your specific coverage at no charge.`,
  },
  {
    question: `How quickly can home health care start in ${locationName}?`,
    answer: `In most cases, we can begin care within 24–48 hours of your call or hospital discharge. For urgent situations, call (773) 775-2588 directly and we'll do our best to arrange same-day or next-day service.`,
  },
  {
    question: `What services does All Family Health Care provide in ${locationName}?`,
    answer: `We provide the full range of Medicare home health services in ${locationName}: skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, wound care, medication management, post-surgical care, and chronic disease management.`,
  },
  {
    question: `Do you need a doctor's referral for home health in ${locationName}?`,
    answer: `Medicare-covered home health care requires a physician's order. If you're calling after a hospitalization, we coordinate directly with the discharge team. If you're calling from home, we can help reach your physician to request the order.`,
  },
];

export const sharedTestimonials = [
  {
    quote: "The nurse who came to our home was professional, kind, and incredibly knowledgeable. My father's recovery after his hip surgery was faster than any of us expected. All Family is exceptional.",
    author: "Linda G.",
    role: "Daughter of patient",
    rating: 5 as const,
  },
  {
    quote: "I was managing my mother's COPD completely on my own until a friend referred me to All Family. Having a skilled nurse visit twice a week has been life-changing for our family.",
    author: "Michael R.",
    role: "Son of patient",
    rating: 5 as const,
  },
];

// ─── ALL 31 LOCATION PAGES ──────────────────────────────────────────────────

export const locations: Record<LocationSlug, LocationPage> = {

  "chicago-home-health-care": {
    slug: "chicago-home-health-care",
    name: "Chicago",
    fullName: "Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60646", "60630", "60659", "60625", "60660", "60626"],
    description: "All Family Health Care provides Medicare-certified home health services across Chicago, IL — including skilled nursing, therapy, wound care, and personal care delivered directly to patients' homes.",
    nearbyLocations: ["edgebrook-home-health-care", "sauganash-home-health-care", "skokie-home-health-care", "lincolnwood-home-health-care"],
    seo: {
      title: "Home Health Care Chicago, IL | (773) 775-2588",
      description: "Medicare-certified home health care in Chicago. Skilled nursing, physical therapy & personal care delivered to your home. Joint Commission accredited. Call (773) 775-2588.",
      keywords: ["home health care Chicago", "Chicago home health agency", "in-home nursing Chicago", "Medicare home health Chicago", "skilled nursing Chicago IL"],
      canonical: "https://www.allfamilyhealthcare.com/locations/chicago-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Chicago, IL",
      headline: "Expert Home Health Care for Chicago Families",
      subheadline: "Medicare-certified skilled nursing, therapy, and personal care delivered to every Chicago neighborhood — so your loved one can recover safely at home.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone", ariaLabel: "Call All Family Health Care" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Chicago for 20+ Years · Medicare Certified",
    },
    servicesIntro: {
      headline: "Complete Home Health Services in Chicago",
      body: "All Family Health Care has served Chicago patients and families for over 20 years. Our team of registered nurses, licensed therapists, and home health aides brings clinical expertise directly to your home — across Chicago's North Side, Northwest Side, and surrounding neighborhoods. We are Medicare-certified and Joint Commission-accredited, meaning you receive the same high standard of care as the best hospitals, but in the comfort of your own home.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Chicago"),
    testimonials: sharedTestimonials,
  },

  "edgebrook-home-health-care": {
    slug: "edgebrook-home-health-care",
    name: "Edgebrook",
    fullName: "Edgebrook, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60646"],
    description: "All Family Health Care is headquartered in Chicago's Edgebrook neighborhood and has served Edgebrook families for over 20 years with Medicare-certified home health services.",
    nearbyLocations: ["sauganash-home-health-care", "norwood-park-home-health-care", "forest-glen-home-health-care", "park-ridge-home-health-care"],
    seo: {
      title: "Home Health Care Edgebrook Chicago | (773) 775-2588",
      description: "Edgebrook's trusted home health agency. Skilled nursing, therapy & personal care for Edgebrook families. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Edgebrook", "Edgebrook home health agency", "in-home nursing Edgebrook Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/edgebrook-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Edgebrook, Chicago",
      headline: "Edgebrook's Trusted Home Health Care Team",
      subheadline: "We're your neighbors — our office is right here in Edgebrook. Medicare-certified skilled nursing, therapy, and personal care for Edgebrook families.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Your Edgebrook Neighbors · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Edgebrook Residents",
      body: "All Family Health Care has been based in Edgebrook for over 20 years. Our office at 6413 N Kinzue Ave puts us minutes away from every patient we serve in this neighborhood. We provide the full spectrum of Medicare home health services — including skilled nursing visits, physical and occupational therapy, speech therapy, home health aide services, and wound care — to Edgebrook residents recovering from surgery, illness, or managing chronic conditions.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Edgebrook"),
    testimonials: sharedTestimonials,
  },

  "sauganash-home-health-care": {
    slug: "sauganash-home-health-care",
    name: "Sauganash",
    fullName: "Sauganash, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60646", "60625"],
    description: "Medicare-certified home health care for Sauganash, Chicago families — skilled nursing, therapy, and personal care delivered to your home.",
    nearbyLocations: ["edgebrook-home-health-care", "forest-glen-home-health-care", "lincoln-square-home-health-care", "norwood-park-home-health-care"],
    seo: {
      title: "Home Health Care Sauganash Chicago | (773) 775-2588",
      description: "Trusted home health care in Sauganash, Chicago. Skilled nurses & therapists serving Sauganash families. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Sauganash", "Sauganash home nurse", "in-home care Sauganash Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/sauganash-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Sauganash, Chicago",
      headline: "Professional Home Health Care for Sauganash Families",
      subheadline: "Expert nursing and therapy delivered to your Sauganash home. Medicare-certified care to help your loved one recover and stay independent.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Sauganash · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Sauganash Residents",
      body: "Sauganash families trust All Family Health Care for skilled medical care at home. Our clinical team serves Sauganash residents with registered nursing visits, physical and occupational therapy, speech therapy, home health aide services, wound care, medication management, and chronic disease support. Whether your loved one is recovering from surgery or managing a chronic condition like heart failure or COPD, we provide hospital-quality care without leaving home.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Sauganash"),
    testimonials: sharedTestimonials,
  },

  "jefferson-park-home-health-care": {
    slug: "jefferson-park-home-health-care",
    name: "Jefferson Park",
    fullName: "Jefferson Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60630"],
    description: "Home health care for Jefferson Park, Chicago — skilled nursing, therapy, and personal care delivered to your home. Medicare certified.",
    nearbyLocations: ["norwood-park-home-health-care", "portage-park-home-health-care", "edgebrook-home-health-care", "des-plaines-home-health-care"],
    seo: {
      title: "Home Health Care Jefferson Park Chicago | (773) 775-2588",
      description: "Medicare home health care in Jefferson Park, Chicago. Skilled nursing & therapy at home. Joint Commission accredited. Call (773) 775-2588.",
      keywords: ["home health care Jefferson Park", "Jefferson Park home nurse Chicago", "in-home care Jefferson Park"],
      canonical: "https://www.allfamilyhealthcare.com/locations/jefferson-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Jefferson Park, Chicago",
      headline: "Expert Home Health Care for Jefferson Park Residents",
      subheadline: "Bringing skilled nursing, therapy, and compassionate personal care directly to Jefferson Park homes. Medicare-certified and Joint Commission accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Jefferson Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Jefferson Park Patients",
      body: "All Family Health Care provides comprehensive Medicare home health services to Jefferson Park residents. Our experienced nurses and therapists come directly to your home — providing skilled nursing visits, physical therapy for post-surgical recovery, occupational therapy for daily living skills, speech therapy, home health aide personal care, and wound care management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Jefferson Park"),
    testimonials: sharedTestimonials,
  },

  "norwood-park-home-health-care": {
    slug: "norwood-park-home-health-care",
    name: "Norwood Park",
    fullName: "Norwood Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60631", "60656"],
    description: "Norwood Park home health care — Medicare-certified skilled nursing, therapy, and personal care for Norwood Park, Chicago families.",
    nearbyLocations: ["jefferson-park-home-health-care", "edgebrook-home-health-care", "park-ridge-home-health-care", "rosemont-home-health-care"],
    seo: {
      title: "Home Health Care Norwood Park Chicago | (773) 775-2588",
      description: "Professional home health care in Norwood Park, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Norwood Park", "Norwood Park home health Chicago", "in-home nursing Norwood Park"],
      canonical: "https://www.allfamilyhealthcare.com/locations/norwood-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Norwood Park, Chicago",
      headline: "Quality Home Health Care for Norwood Park Families",
      subheadline: "Skilled nursing and therapy delivered to your Norwood Park home. Helping your loved one recover and thrive — without leaving the neighborhood they love.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Norwood Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Norwood Park Residents",
      body: "Norwood Park residents rely on All Family Health Care for expert home-based medical care. Our team of registered nurses and licensed therapists serves patients across Norwood Park with the full range of Medicare home health services — from post-surgical skilled nursing and physical therapy to chronic disease management and personal care.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Norwood Park"),
    testimonials: sharedTestimonials,
  },

  "forest-glen-home-health-care": {
    slug: "forest-glen-home-health-care",
    name: "Forest Glen",
    fullName: "Forest Glen, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60630", "60646"],
    description: "Home health care for Forest Glen, Chicago — skilled nursing, therapy, and personal care for recovering patients and seniors.",
    nearbyLocations: ["edgebrook-home-health-care", "sauganash-home-health-care", "norwood-park-home-health-care"],
    seo: {
      title: "Home Health Care Forest Glen Chicago | (773) 775-2588",
      description: "Expert home health care in Forest Glen, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Forest Glen", "Forest Glen home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/forest-glen-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Forest Glen, Chicago",
      headline: "Trusted Home Health Care for Forest Glen Families",
      subheadline: "Expert skilled nursing and therapy right at your Forest Glen doorstep. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Forest Glen · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Forest Glen Patients",
      body: "Forest Glen patients and families choose All Family Health Care for skilled, compassionate care at home. We serve Forest Glen with registered nursing visits, physical and occupational therapy, home health aide services, wound care, and chronic disease support — all covered by Medicare for eligible patients.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Forest Glen"),
    testimonials: sharedTestimonials,
  },

  "lincoln-square-home-health-care": {
    slug: "lincoln-square-home-health-care",
    name: "Lincoln Square",
    fullName: "Lincoln Square, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60625"],
    description: "Medicare-certified home health care for Lincoln Square, Chicago — skilled nursing, therapy, and personal care at home.",
    nearbyLocations: ["ravenswood-home-health-care", "sauganash-home-health-care", "andersonville-home-health-care", "lincoln-park-home-health-care"],
    seo: {
      title: "Home Health Care Lincoln Square Chicago | (773) 775-2588",
      description: "Trusted home health care in Lincoln Square, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Lincoln Square", "Lincoln Square home nurse Chicago", "in-home care Lincoln Square"],
      canonical: "https://www.allfamilyhealthcare.com/locations/lincoln-square-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Lincoln Square, Chicago",
      headline: "Professional Home Health Care for Lincoln Square Residents",
      subheadline: "Skilled nursing and therapy delivered to your Lincoln Square home. Medicare-certified care from a team that knows your community.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Lincoln Square · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Lincoln Square Patients",
      body: "All Family Health Care serves Lincoln Square with expert home-based medical care. Our nurses and therapists are experienced in serving the Lincoln Square community's diverse patient population — providing skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, and wound care.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Lincoln Square"),
    testimonials: sharedTestimonials,
  },

  "ravenswood-home-health-care": {
    slug: "ravenswood-home-health-care",
    name: "Ravenswood",
    fullName: "Ravenswood, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60625", "60640"],
    description: "Home health care for Ravenswood, Chicago — skilled nursing, therapy, and personal care for seniors and recovering patients.",
    nearbyLocations: ["lincoln-square-home-health-care", "andersonville-home-health-care", "uptown-home-health-care"],
    seo: {
      title: "Home Health Care Ravenswood Chicago | (773) 775-2588",
      description: "Expert home health care in Ravenswood, Chicago. Skilled nursing & therapy at home for seniors and patients. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Ravenswood", "Ravenswood home health Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/ravenswood-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Ravenswood, Chicago",
      headline: "Expert Home Health Care for Ravenswood Families",
      subheadline: "Skilled nursing and therapy brought directly to Ravenswood homes — helping seniors and patients recover with dignity.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Ravenswood · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Ravenswood",
      body: "Ravenswood's active senior community and families recovering from surgery or illness count on All Family Health Care for skilled medical care at home. Our team provides registered nursing visits, physical therapy, occupational therapy, speech therapy, home health aide services, and chronic disease management — helping patients stay home and stay well.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Ravenswood"),
    testimonials: sharedTestimonials,
  },

  "rogers-park-home-health-care": {
    slug: "rogers-park-home-health-care",
    name: "Rogers Park",
    fullName: "Rogers Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60626"],
    description: "Medicare-certified home health care for Rogers Park, Chicago — skilled nursing, therapy, and personal care delivered to your home.",
    nearbyLocations: ["andersonville-home-health-care", "evanston-home-health-care", "uptown-home-health-care"],
    seo: {
      title: "Home Health Care Rogers Park Chicago | (773) 775-2588",
      description: "Trusted home health care in Rogers Park, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Rogers Park", "Rogers Park home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/rogers-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Rogers Park, Chicago",
      headline: "Quality Home Health Care for Rogers Park Residents",
      subheadline: "Skilled nursing, therapy, and personal care brought to your Rogers Park home. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Rogers Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Rogers Park Patients",
      body: "All Family Health Care brings skilled medical care to Rogers Park residents who need professional nursing and therapy at home. Our diverse clinical team is experienced in serving Rogers Park's vibrant community — providing skilled nursing, physical and occupational therapy, home health aide, wound care, and chronic disease management, all covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Rogers Park"),
    testimonials: sharedTestimonials,
  },

  "andersonville-home-health-care": {
    slug: "andersonville-home-health-care",
    name: "Andersonville",
    fullName: "Andersonville, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60640"],
    description: "Home health care in Andersonville, Chicago — skilled nursing, therapy, and personal care for seniors and patients recovering at home.",
    nearbyLocations: ["rogers-park-home-health-care", "ravenswood-home-health-care", "uptown-home-health-care", "lincoln-square-home-health-care"],
    seo: {
      title: "Home Health Care Andersonville Chicago | (773) 775-2588",
      description: "Expert home health care in Andersonville, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Andersonville", "Andersonville home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/andersonville-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Andersonville, Chicago",
      headline: "Trusted Home Health Care for Andersonville Families",
      subheadline: "Compassionate skilled nursing and therapy delivered to your Andersonville home — helping your loved one recover in the place they call home.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Andersonville · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Andersonville",
      body: "Andersonville families trust All Family Health Care for expert home-based medical care. We serve Andersonville patients with skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and comprehensive chronic disease management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Andersonville"),
    testimonials: sharedTestimonials,
  },

  "uptown-home-health-care": {
    slug: "uptown-home-health-care",
    name: "Uptown",
    fullName: "Uptown, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60640"],
    description: "Medicare-certified home health care for Uptown, Chicago — skilled nursing, therapy, and home health aide services.",
    nearbyLocations: ["andersonville-home-health-care", "ravenswood-home-health-care", "lakeview-home-health-care"],
    seo: {
      title: "Home Health Care Uptown Chicago | (773) 775-2588",
      description: "Professional home health care in Uptown, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Uptown Chicago", "Uptown home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/uptown-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Uptown, Chicago",
      headline: "Expert Home Health Care for Uptown Chicago Residents",
      subheadline: "Skilled nursing, therapy, and personal care delivered to your Uptown home. Medicare-certified and Joint Commission accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Uptown · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Uptown Patients",
      body: "All Family Health Care serves Uptown residents with expert Medicare home health services — skilled nursing visits, physical and occupational therapy, speech therapy, home health aide services, wound care, and medication management — all delivered by a consistent, experienced care team.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Uptown"),
    testimonials: sharedTestimonials,
  },

  "lincoln-park-home-health-care": {
    slug: "lincoln-park-home-health-care",
    name: "Lincoln Park",
    fullName: "Lincoln Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60614"],
    description: "Home health care in Lincoln Park, Chicago — skilled nursing, therapy, and personal care for seniors and patients recovering at home.",
    nearbyLocations: ["lakeview-home-health-care", "lincoln-square-home-health-care"],
    seo: {
      title: "Home Health Care Lincoln Park Chicago | (773) 775-2588",
      description: "Trusted home health care in Lincoln Park, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Lincoln Park Chicago", "Lincoln Park home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/lincoln-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Lincoln Park, Chicago",
      headline: "Professional Home Health Care for Lincoln Park Residents",
      subheadline: "Expert nursing and therapy brought directly to Lincoln Park homes — Medicare-certified care for recovery and chronic condition management.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Lincoln Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Lincoln Park Patients",
      body: "Lincoln Park families choose All Family Health Care for professional, compassionate home-based medical care. We provide skilled nursing, physical and occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management — serving Lincoln Park patients with the same clinical excellence found in top Chicago hospitals.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Lincoln Park"),
    testimonials: sharedTestimonials,
  },

  "lakeview-home-health-care": {
    slug: "lakeview-home-health-care",
    name: "Lakeview",
    fullName: "Lakeview, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60657", "60613"],
    description: "Medicare-certified home health care in Lakeview, Chicago — skilled nursing, therapy, and personal care delivered to your home.",
    nearbyLocations: ["lincoln-park-home-health-care", "uptown-home-health-care", "andersonville-home-health-care"],
    seo: {
      title: "Home Health Care Lakeview Chicago | (773) 775-2588",
      description: "Expert home health care in Lakeview, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Lakeview Chicago", "Lakeview home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/lakeview-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Lakeview, Chicago",
      headline: "Quality Home Health Care for Lakeview Families",
      subheadline: "Skilled nursing, therapy, and compassionate personal care delivered to your Lakeview home. Medicare-certified and accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Lakeview · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Lakeview",
      body: "All Family Health Care brings expert skilled medical care to Lakeview residents recovering from surgery, illness, or managing chronic conditions. Our team serves Lakeview patients with skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and medication management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Lakeview"),
    testimonials: sharedTestimonials,
  },

  "irving-park-home-health-care": {
    slug: "irving-park-home-health-care",
    name: "Irving Park",
    fullName: "Irving Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60641", "60618"],
    description: "Home health care in Irving Park, Chicago — skilled nursing, therapy, and personal care for Irving Park seniors and patients.",
    nearbyLocations: ["portage-park-home-health-care", "hermosa-home-health-care", "belmont-cragin-home-health-care", "dunning-home-health-care"],
    seo: {
      title: "Home Health Care Irving Park Chicago | (773) 775-2588",
      description: "Professional home health care in Irving Park, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Irving Park", "Irving Park home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/irving-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Irving Park, Chicago",
      headline: "Trusted Home Health Care for Irving Park Residents",
      subheadline: "Expert nursing and therapy delivered to your Irving Park home. Helping seniors and patients recover safely and independently.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Irving Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Irving Park Patients",
      body: "Irving Park residents count on All Family Health Care for skilled home-based medical care. We serve Irving Park patients with the full spectrum of Medicare home health services — skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide personal care, wound care, and chronic disease management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Irving Park"),
    testimonials: sharedTestimonials,
  },

  "portage-park-home-health-care": {
    slug: "portage-park-home-health-care",
    name: "Portage Park",
    fullName: "Portage Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60641"],
    description: "Medicare-certified home health care in Portage Park, Chicago — skilled nursing, therapy, and personal care at home.",
    nearbyLocations: ["jefferson-park-home-health-care", "irving-park-home-health-care", "dunning-home-health-care", "elmwood-park-home-health-care"],
    seo: {
      title: "Home Health Care Portage Park Chicago | (773) 775-2588",
      description: "Expert home health care in Portage Park, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Portage Park", "Portage Park home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/portage-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Portage Park, Chicago",
      headline: "Quality Home Health Care for Portage Park Families",
      subheadline: "Skilled nursing, therapy, and personal care delivered to your Portage Park home. Medicare-certified with 20+ years serving Chicago.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Portage Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Portage Park",
      body: "Portage Park families trust All Family Health Care for professional home-based medical care. Our experienced nurses and therapists serve Portage Park patients with skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and medication management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Portage Park"),
    testimonials: sharedTestimonials,
  },

  "dunning-home-health-care": {
    slug: "dunning-home-health-care",
    name: "Dunning",
    fullName: "Dunning, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60634"],
    description: "Home health care for Dunning, Chicago — skilled nursing, therapy, and personal care for seniors and patients at home.",
    nearbyLocations: ["portage-park-home-health-care", "montclare-home-health-care", "belmont-cragin-home-health-care", "harwood-heights-home-health-care"],
    seo: {
      title: "Home Health Care Dunning Chicago | (773) 775-2588",
      description: "Trusted home health care in Dunning, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Dunning Chicago", "Dunning home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/dunning-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Dunning, Chicago",
      headline: "Expert Home Health Care for Dunning Residents",
      subheadline: "Skilled nursing and therapy brought to your Dunning home — helping seniors and patients stay independent and well.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Dunning · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Dunning Patients",
      body: "All Family Health Care serves Dunning residents with expert skilled medical care at home — including skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease support, all covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Dunning"),
    testimonials: sharedTestimonials,
  },

  "montclare-home-health-care": {
    slug: "montclare-home-health-care",
    name: "Montclare",
    fullName: "Montclare, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60634"],
    description: "Medicare-certified home health care for Montclare, Chicago — skilled nursing, therapy, and personal care.",
    nearbyLocations: ["dunning-home-health-care", "belmont-cragin-home-health-care", "elmwood-park-home-health-care"],
    seo: {
      title: "Home Health Care Montclare Chicago | (773) 775-2588",
      description: "Professional home health care in Montclare, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Montclare Chicago", "Montclare home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/montclare-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Montclare, Chicago",
      headline: "Trusted Home Health Care for Montclare Families",
      subheadline: "Bringing skilled nursing and therapy directly to Montclare homes. Medicare-certified care for seniors and those recovering.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Montclare · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Montclare",
      body: "Montclare families choose All Family Health Care for compassionate, expert home-based care. We provide skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, wound care, and medication management for Montclare patients.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Montclare"),
    testimonials: sharedTestimonials,
  },

  "belmont-cragin-home-health-care": {
    slug: "belmont-cragin-home-health-care",
    name: "Belmont Cragin",
    fullName: "Belmont Cragin, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60634", "60639"],
    description: "Home health care for Belmont Cragin, Chicago — skilled nursing, therapy, and personal care at home.",
    nearbyLocations: ["dunning-home-health-care", "montclare-home-health-care", "hermosa-home-health-care", "irving-park-home-health-care"],
    seo: {
      title: "Home Health Care Belmont Cragin Chicago | (773) 775-2588",
      description: "Expert home health care in Belmont Cragin, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Belmont Cragin", "Belmont Cragin home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/belmont-cragin-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Belmont Cragin, Chicago",
      headline: "Professional Home Health Care for Belmont Cragin Residents",
      subheadline: "Skilled nursing and therapy brought to your Belmont Cragin home. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Belmont Cragin · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Belmont Cragin",
      body: "All Family Health Care serves Belmont Cragin residents with the full range of Medicare home health services — skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, wound care, and chronic disease management. We serve the community in English and Spanish.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Belmont Cragin"),
    testimonials: sharedTestimonials,
  },

  "hermosa-home-health-care": {
    slug: "hermosa-home-health-care",
    name: "Hermosa",
    fullName: "Hermosa, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60639"],
    description: "Home health care in Hermosa, Chicago — Medicare-certified skilled nursing, therapy, and personal care.",
    nearbyLocations: ["belmont-cragin-home-health-care", "humboldt-park-home-health-care", "irving-park-home-health-care"],
    seo: {
      title: "Home Health Care Hermosa Chicago | (773) 775-2588",
      description: "Trusted home health care in Hermosa, Chicago. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Hermosa Chicago", "Hermosa home nurse"],
      canonical: "https://www.allfamilyhealthcare.com/locations/hermosa-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Hermosa, Chicago",
      headline: "Quality Home Health Care for Hermosa Families",
      subheadline: "Skilled nursing and therapy delivered to your Hermosa home. Medicare-certified and bilingual care available.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Hermosa · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Hermosa Patients",
      body: "All Family Health Care serves Hermosa patients with expert skilled medical care at home. Our bilingual team provides skilled nursing, physical and occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management for Hermosa families.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Hermosa"),
    testimonials: sharedTestimonials,
  },

  "humboldt-park-home-health-care": {
    slug: "humboldt-park-home-health-care",
    name: "Humboldt Park",
    fullName: "Humboldt Park, Chicago, IL",
    type: "neighborhood",
    state: "IL",
    zip: ["60647", "60651"],
    description: "Medicare-certified home health care for Humboldt Park, Chicago — skilled nursing, therapy, and personal care at home.",
    nearbyLocations: ["hermosa-home-health-care", "belmont-cragin-home-health-care"],
    seo: {
      title: "Home Health Care Humboldt Park Chicago | (773) 775-2588",
      description: "Professional home health care in Humboldt Park, Chicago. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Humboldt Park", "Humboldt Park home nurse Chicago"],
      canonical: "https://www.allfamilyhealthcare.com/locations/humboldt-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Humboldt Park, Chicago",
      headline: "Expert Home Health Care for Humboldt Park Residents",
      subheadline: "Skilled nursing and therapy delivered to your Humboldt Park home. Medicare-certified care for recovery and chronic disease management.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Humboldt Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Humboldt Park",
      body: "All Family Health Care provides skilled medical home care to Humboldt Park residents — including skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, wound care, and medication management — with bilingual staff available.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Humboldt Park"),
    testimonials: sharedTestimonials,
  },

  // ─── SUBURBS ──────────────────────────────────────────────────────────────

  "park-ridge-home-health-care": {
    slug: "park-ridge-home-health-care",
    name: "Park Ridge",
    fullName: "Park Ridge, IL",
    type: "suburb",
    state: "IL",
    zip: ["60068"],
    description: "Medicare-certified home health care in Park Ridge, IL — skilled nursing, therapy, and personal care for Park Ridge families.",
    nearbyLocations: ["norwood-park-home-health-care", "rosemont-home-health-care", "des-plaines-home-health-care", "niles-home-health-care"],
    seo: {
      title: "Home Health Care Park Ridge, IL | (773) 775-2588",
      description: "Expert home health care in Park Ridge, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Park Ridge IL", "Park Ridge home health agency", "in-home nursing Park Ridge", "Medicare home health Park Ridge"],
      canonical: "https://www.allfamilyhealthcare.com/locations/park-ridge-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Park Ridge, IL",
      headline: "Professional Home Health Care for Park Ridge Families",
      subheadline: "Skilled nursing, therapy, and personal care delivered to Park Ridge homes. Medicare-certified and Joint Commission accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Park Ridge · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Park Ridge Residents",
      body: "Park Ridge families trust All Family Health Care for skilled, compassionate home-based medical care. We serve Park Ridge patients with registered nursing visits, physical and occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management — all covered by Medicare for eligible patients. Our agency is based just minutes from Park Ridge in Chicago's Edgebrook neighborhood.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Park Ridge"),
    testimonials: sharedTestimonials,
  },

  "skokie-home-health-care": {
    slug: "skokie-home-health-care",
    name: "Skokie",
    fullName: "Skokie, IL",
    type: "suburb",
    state: "IL",
    zip: ["60076", "60077"],
    description: "Medicare-certified home health care in Skokie, IL — skilled nursing, physical therapy, and personal care delivered to Skokie homes.",
    nearbyLocations: ["lincolnwood-home-health-care", "evanston-home-health-care", "morton-grove-home-health-care", "niles-home-health-care"],
    seo: {
      title: "Home Health Care Skokie, IL | (773) 775-2588",
      description: "Trusted home health care in Skokie, IL. Skilled nurses & therapists at your door. Medicare certified. Joint Commission accredited. Call (773) 775-2588.",
      keywords: ["home health care Skokie IL", "Skokie home health agency", "in-home nursing Skokie", "Medicare home health Skokie"],
      canonical: "https://www.allfamilyhealthcare.com/locations/skokie-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Skokie, IL",
      headline: "Trusted Home Health Care for Skokie Families",
      subheadline: "Expert skilled nursing, therapy, and personal care delivered to your Skokie home. Medicare-certified care from a team that has served the North Shore for 20+ years.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Skokie · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Skokie Residents",
      body: "All Family Health Care has served Skokie families for over 20 years. Our clinical team provides the full range of Medicare home health services — skilled nursing visits, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management — to Skokie patients recovering from surgery, illness, or managing ongoing health conditions.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Skokie"),
    testimonials: sharedTestimonials,
  },

  "des-plaines-home-health-care": {
    slug: "des-plaines-home-health-care",
    name: "Des Plaines",
    fullName: "Des Plaines, IL",
    type: "suburb",
    state: "IL",
    zip: ["60016", "60018"],
    description: "Medicare-certified home health care in Des Plaines, IL — skilled nursing, therapy, and personal care for Des Plaines patients.",
    nearbyLocations: ["park-ridge-home-health-care", "niles-home-health-care", "glenview-home-health-care", "rosemont-home-health-care"],
    seo: {
      title: "Home Health Care Des Plaines, IL | (773) 775-2588",
      description: "Expert home health care in Des Plaines, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Des Plaines IL", "Des Plaines home health agency", "in-home nursing Des Plaines"],
      canonical: "https://www.allfamilyhealthcare.com/locations/des-plaines-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Des Plaines, IL",
      headline: "Quality Home Health Care for Des Plaines Families",
      subheadline: "Skilled nursing, therapy, and personal care delivered to Des Plaines homes. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Des Plaines · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Des Plaines Patients",
      body: "Des Plaines residents and families rely on All Family Health Care for skilled medical care at home. Our team provides skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and medication management for Des Plaines patients covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Des Plaines"),
    testimonials: sharedTestimonials,
  },

  "evanston-home-health-care": {
    slug: "evanston-home-health-care",
    name: "Evanston",
    fullName: "Evanston, IL",
    type: "suburb",
    state: "IL",
    zip: ["60201", "60202", "60203"],
    description: "Medicare-certified home health care in Evanston, IL — skilled nursing, therapy, and personal care for Evanston patients and families.",
    nearbyLocations: ["skokie-home-health-care", "rogers-park-home-health-care", "lincolnwood-home-health-care"],
    seo: {
      title: "Home Health Care Evanston, IL | (773) 775-2588",
      description: "Trusted home health care in Evanston, IL. Skilled nurses & therapists at your door. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Evanston IL", "Evanston home health agency", "in-home nursing Evanston"],
      canonical: "https://www.allfamilyhealthcare.com/locations/evanston-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Evanston, IL",
      headline: "Expert Home Health Care for Evanston Families",
      subheadline: "Skilled nursing, therapy, and personal care brought to your Evanston home. Medicare-certified and Joint Commission accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Evanston · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Evanston Residents",
      body: "Evanston patients and families choose All Family Health Care for expert home-based medical care. We serve Evanston with skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, medication management, and chronic disease support — all covered by Medicare for qualifying patients.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Evanston"),
    testimonials: sharedTestimonials,
  },

  "glenview-home-health-care": {
    slug: "glenview-home-health-care",
    name: "Glenview",
    fullName: "Glenview, IL",
    type: "suburb",
    state: "IL",
    zip: ["60025", "60026"],
    description: "Home health care in Glenview, IL — Medicare-certified skilled nursing, therapy, and personal care for Glenview families.",
    nearbyLocations: ["niles-home-health-care", "morton-grove-home-health-care", "skokie-home-health-care", "des-plaines-home-health-care"],
    seo: {
      title: "Home Health Care Glenview, IL | (773) 775-2588",
      description: "Professional home health care in Glenview, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Glenview IL", "Glenview home health agency", "in-home nursing Glenview"],
      canonical: "https://www.allfamilyhealthcare.com/locations/glenview-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Glenview, IL",
      headline: "Professional Home Health Care for Glenview Families",
      subheadline: "Skilled nursing, therapy, and personal care delivered to Glenview homes. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Glenview · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Glenview Patients",
      body: "All Family Health Care serves Glenview residents with expert skilled medical care at home — skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management. We are based just south of Glenview and can start care quickly after a hospital discharge.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Glenview"),
    testimonials: sharedTestimonials,
  },

  "niles-home-health-care": {
    slug: "niles-home-health-care",
    name: "Niles",
    fullName: "Niles, IL",
    type: "suburb",
    state: "IL",
    zip: ["60714"],
    description: "Medicare-certified home health care in Niles, IL — skilled nursing, therapy, and personal care for Niles patients at home.",
    nearbyLocations: ["skokie-home-health-care", "morton-grove-home-health-care", "lincolnwood-home-health-care", "park-ridge-home-health-care"],
    seo: {
      title: "Home Health Care Niles, IL | (773) 775-2588",
      description: "Expert home health care in Niles, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Niles IL", "Niles home health agency", "in-home nursing Niles"],
      canonical: "https://www.allfamilyhealthcare.com/locations/niles-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Niles, IL",
      headline: "Trusted Home Health Care for Niles Families",
      subheadline: "Skilled nursing and therapy brought to your Niles home. Medicare-certified care from a team that has served the North Shore for decades.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Niles · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Niles Residents",
      body: "Niles patients and families trust All Family Health Care for expert home-based medical care. Our clinical team provides skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, wound care, medication management, and chronic disease support to Niles residents.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Niles"),
    testimonials: sharedTestimonials,
  },

  "morton-grove-home-health-care": {
    slug: "morton-grove-home-health-care",
    name: "Morton Grove",
    fullName: "Morton Grove, IL",
    type: "suburb",
    state: "IL",
    zip: ["60053"],
    description: "Home health care in Morton Grove, IL — Medicare-certified skilled nursing, therapy, and personal care delivered to your home.",
    nearbyLocations: ["niles-home-health-care", "skokie-home-health-care", "glenview-home-health-care", "lincolnwood-home-health-care"],
    seo: {
      title: "Home Health Care Morton Grove, IL | (773) 775-2588",
      description: "Trusted home health care in Morton Grove, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Morton Grove IL", "Morton Grove home health agency"],
      canonical: "https://www.allfamilyhealthcare.com/locations/morton-grove-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Morton Grove, IL",
      headline: "Quality Home Health Care for Morton Grove Families",
      subheadline: "Skilled nursing, therapy, and personal care delivered to Morton Grove homes. Medicare-certified and accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Morton Grove · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Morton Grove",
      body: "Morton Grove families choose All Family Health Care for skilled medical care at home. We provide skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management to Morton Grove patients covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Morton Grove"),
    testimonials: sharedTestimonials,
  },

  "lincolnwood-home-health-care": {
    slug: "lincolnwood-home-health-care",
    name: "Lincolnwood",
    fullName: "Lincolnwood, IL",
    type: "suburb",
    state: "IL",
    zip: ["60712"],
    description: "Medicare-certified home health care in Lincolnwood, IL — skilled nursing, therapy, and personal care for Lincolnwood patients.",
    nearbyLocations: ["skokie-home-health-care", "morton-grove-home-health-care", "niles-home-health-care", "chicago-home-health-care"],
    seo: {
      title: "Home Health Care Lincolnwood, IL | (773) 775-2588",
      description: "Expert home health care in Lincolnwood, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Lincolnwood IL", "Lincolnwood home health agency"],
      canonical: "https://www.allfamilyhealthcare.com/locations/lincolnwood-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Lincolnwood, IL",
      headline: "Expert Home Health Care for Lincolnwood Families",
      subheadline: "Skilled nursing and therapy delivered to your Lincolnwood home. Medicare-certified care from an established, local home health agency.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Lincolnwood · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Lincolnwood Patients",
      body: "All Family Health Care serves Lincolnwood residents with skilled medical care at home — skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and medication management, all covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Lincolnwood"),
    testimonials: sharedTestimonials,
  },

  "rosemont-home-health-care": {
    slug: "rosemont-home-health-care",
    name: "Rosemont",
    fullName: "Rosemont, IL",
    type: "suburb",
    state: "IL",
    zip: ["60018"],
    description: "Home health care in Rosemont, IL — Medicare-certified skilled nursing, therapy, and personal care at home.",
    nearbyLocations: ["des-plaines-home-health-care", "park-ridge-home-health-care", "norwood-park-home-health-care", "harwood-heights-home-health-care"],
    seo: {
      title: "Home Health Care Rosemont, IL | (773) 775-2588",
      description: "Trusted home health care in Rosemont, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Rosemont IL", "Rosemont home health agency"],
      canonical: "https://www.allfamilyhealthcare.com/locations/rosemont-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Rosemont, IL",
      headline: "Trusted Home Health Care for Rosemont Families",
      subheadline: "Expert skilled nursing, therapy, and personal care brought to Rosemont homes. Medicare-certified and compassionate.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Rosemont · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services for Rosemont Patients",
      body: "All Family Health Care provides skilled medical care at home to Rosemont residents — skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Rosemont"),
    testimonials: sharedTestimonials,
  },

  "harwood-heights-home-health-care": {
    slug: "harwood-heights-home-health-care",
    name: "Harwood Heights",
    fullName: "Harwood Heights, IL",
    type: "suburb",
    state: "IL",
    zip: ["60706"],
    description: "Medicare-certified home health care in Harwood Heights, IL — skilled nursing, therapy, and personal care for families.",
    nearbyLocations: ["rosemont-home-health-care", "dunning-home-health-care", "elmwood-park-home-health-care", "norwood-park-home-health-care"],
    seo: {
      title: "Home Health Care Harwood Heights, IL | (773) 775-2588",
      description: "Expert home health care in Harwood Heights, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Harwood Heights IL", "Harwood Heights home health agency"],
      canonical: "https://www.allfamilyhealthcare.com/locations/harwood-heights-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Harwood Heights, IL",
      headline: "Quality Home Health Care for Harwood Heights Families",
      subheadline: "Skilled nursing and therapy delivered to your Harwood Heights home. Medicare-certified care to help your loved one recover at home.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Harwood Heights · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Harwood Heights",
      body: "All Family Health Care serves Harwood Heights residents with skilled medical care at home — including skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and medication management, covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Harwood Heights"),
    testimonials: sharedTestimonials,
  },

  "elmwood-park-home-health-care": {
    slug: "elmwood-park-home-health-care",
    name: "Elmwood Park",
    fullName: "Elmwood Park, IL",
    type: "suburb",
    state: "IL",
    zip: ["60707"],
    description: "Home health care in Elmwood Park, IL — Medicare-certified skilled nursing, therapy, and personal care for Elmwood Park families.",
    nearbyLocations: ["harwood-heights-home-health-care", "montclare-home-health-care", "dunning-home-health-care", "portage-park-home-health-care"],
    seo: {
      title: "Home Health Care Elmwood Park, IL | (773) 775-2588",
      description: "Trusted home health care in Elmwood Park, IL. Skilled nursing & therapy at home. Medicare certified. Call (773) 775-2588.",
      keywords: ["home health care Elmwood Park IL", "Elmwood Park home health agency"],
      canonical: "https://www.allfamilyhealthcare.com/locations/elmwood-park-home-health-care",
    },
    hero: {
      eyebrow: "Home Health Care in Elmwood Park, IL",
      headline: "Trusted Home Health Care for Elmwood Park Families",
      subheadline: "Expert skilled nursing and therapy brought to your Elmwood Park home. Medicare-certified and Joint Commission accredited.",
      primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" },
      secondaryCTA: { text: "Schedule Free Assessment", href: "/contact", variant: "secondary" },
      badge: "Serving Elmwood Park · Medicare Certified",
    },
    servicesIntro: {
      headline: "Home Health Services in Elmwood Park",
      body: "Elmwood Park families choose All Family Health Care for expert home-based medical care. We provide skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide services, wound care, and chronic disease management for Elmwood Park patients covered by Medicare.",
    },
    whyChooseLocal: sharedWhyChoose,
    faqs: sharedFAQTemplate("Elmwood Park"),
    testimonials: sharedTestimonials,
  },
};

// Helper to get all location slugs for static generation
export const allLocationSlugs = Object.keys(locations) as LocationSlug[];

// Helper to get nearby locations data
export function getNearbyLocations(slug: LocationSlug) {
  const location = locations[slug];
  return (location.nearbyLocations ?? [])
    .filter((s) => s in locations)
    .map((s) => ({
      name: locations[s as LocationSlug].name,
      slug: s,
      href: `/locations/${s}`,
    }));
}
