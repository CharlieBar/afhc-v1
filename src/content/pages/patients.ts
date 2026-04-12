// src/content/pages/patients.ts
// All Family Health Care — Patients & Caregivers Section Content

import type { SEOMeta, FAQItem, ProcessStep } from "@/types/content";

// ─── PATIENTS HUB PAGE ──────────────────────────────────────────────────────

export const patientsSeo: SEOMeta = {
  title: "Patients & Caregivers | Home Health Care Resources",
  description:
    "Resources for patients, families, and caregivers navigating home health care in Chicago. Understand Medicare benefits, what to expect, and how to get started.",
  keywords: ["home health care patient resources", "caregiver resources Chicago", "Medicare home health benefits"],
  canonical: "https://www.allfamilyhealthcare.com/patients",
};

export const patientsHero = {
  eyebrow: "Patients & Families",
  headline: "Everything You Need to Know About Home Health Care",
  subheadline:
    "We know this can feel overwhelming — a new diagnosis, a hospital discharge, a parent who needs more help than you can provide alone. We're here to guide you through every step.",
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
    src: "/images/hero/patients.jpg",
    alt: "Clinician gently guiding a senior patient's hand during a home health visit",
    width: 1344,
    height: 768,
  },
};

export const patientPages = [
  {
    icon: "info",
    title: "What to Expect",
    description: "Walk through your first visit and what happens during home health care — from the first nurse visit to completing your care plan.",
    href: "/patients/what-to-expect",
    cta: "Learn What to Expect →",
  },
  {
    icon: "dollar-sign",
    title: "Medicare Benefits",
    description: "Most home health services are covered 100% by Medicare. Understand exactly what's covered, who qualifies, and how to access your benefits.",
    href: "/patients/medicare-home-health-benefits",
    cta: "Understand Your Coverage →",
  },
  {
    icon: "shield",
    title: "Insurance Coverage",
    description: "Beyond Medicare, learn about Medicaid, private insurance, and other coverage options for home health care.",
    href: "/patients/insurance-coverage",
    cta: "Explore Coverage Options →",
  },
  {
    icon: "play-circle",
    title: "How to Start",
    description: "Getting started with home health care is easier than you think. Three simple steps from your first call to your first visit.",
    href: "/patients/how-to-start-home-health",
    cta: "See How to Get Started →",
  },
  {
    icon: "users",
    title: "Caregiver Resources",
    description: "You're not alone. Guides, tips, and support resources for family members caring for a loved one at home.",
    href: "/patients/caregiver-resources",
    cta: "Access Caregiver Resources →",
  },
  {
    icon: "help-circle",
    title: "Frequently Asked Questions",
    description: "Answers to the most common questions we receive from patients, families, and caregivers about home health care.",
    href: "/patients/faq",
    cta: "Browse All FAQs →",
  },
];

// ─── WHAT TO EXPECT PAGE ─────────────────────────────────────────────────────

export const whatToExpectSeo: SEOMeta = {
  title: "What to Expect with Home Health Care | Chicago Home Health",
  description:
    "Understand what happens during home health care — from the initial assessment to daily visits, care planning, and completing your recovery.",
  keywords: ["what to expect home health care", "first home health visit", "home health care process"],
  canonical: "https://www.allfamilyhealthcare.com/patients/what-to-expect",
};

export const whatToExpectContent = {
  hero: {
    eyebrow: "Understanding Home Health Care",
    headline: "What to Expect When Home Health Care Begins",
    subheadline: "No surprises. Here's exactly what the home health care process looks like — step by step.",
    primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" as const },
  },
  steps: [
    {
      step: "01",
      title: "Your Physician Writes an Order",
      description:
        "Home health care starts with a physician's order. If you were hospitalized, the discharge team typically handles this. If you're calling from home, we help coordinate with your doctor. We make this process as smooth as possible.",
      icon: "file-text",
    },
    {
      step: "02",
      title: "We Call to Schedule Your Assessment",
      description:
        "Within 24–48 hours of receiving the order, we contact you to schedule a free in-home assessment. We work around your schedule and arrive on time.",
      icon: "phone",
    },
    {
      step: "03",
      title: "A Registered Nurse Visits Your Home",
      description:
        "Your first visit is a comprehensive assessment performed by a registered nurse. They review your medical history, medications, home environment, and needs — then create a personalized care plan. This visit takes about 60–90 minutes.",
      icon: "stethoscope",
    },
    {
      step: "04",
      title: "Your Care Plan is Created and Approved",
      description:
        "We develop a detailed care plan and send it to your physician for signature. The plan outlines exactly which services you'll receive, how often, and what goals we're working toward.",
      icon: "clipboard-check",
    },
    {
      step: "05",
      title: "Regular Visits Begin",
      description:
        "Your care team — nurses, therapists, and aides as prescribed — begins visiting on a regular schedule. Visit frequency depends on your care plan, typically 2–5 times per week initially.",
      icon: "calendar",
    },
    {
      step: "06",
      title: "Ongoing Communication and Updates",
      description:
        "We keep your physician informed with regular updates. Your family receives progress reports and has access to your assigned care coordinator for any questions. We're with you every step of the way.",
      icon: "message-circle",
    },
  ] satisfies (ProcessStep & { icon: string })[],
  faqs: [
    {
      question: "Can family members be present during visits?",
      answer: "Absolutely — we encourage family participation. Caregiver education is part of what we do. Family members often learn how to assist between visits, which improves outcomes.",
    },
    {
      question: "What if I need to cancel or reschedule a visit?",
      answer: "Just call us as soon as possible at (773) 775-2588. We'll reschedule at your convenience. We understand life happens, and we're flexible.",
    },
    {
      question: "How long does home health care typically last?",
      answer: "Medicare home health care is typically provided in 60-day certification periods, renewed with a physician's order if ongoing skilled need exists. Most patients receive care for several weeks to a few months depending on their diagnosis and recovery goals.",
    },
    {
      question: "What happens when home health ends?",
      answer: "As your care concludes, your care coordinator will work with your physician and family to ensure a safe transition — whether that's returning to outpatient therapy, connecting with community services, or simply a successful independent recovery.",
    },
  ] satisfies FAQItem[],
};

// ─── MEDICARE BENEFITS PAGE ───────────────────────────────────────────────────

export const medicareSeo: SEOMeta = {
  title: "Medicare Home Health Benefits Explained | Chicago Home Health",
  description:
    "Understand exactly what Medicare covers for home health care. No copays for most services. Learn who qualifies and how to access your benefits in Chicago.",
  keywords: [
    "Medicare home health benefits",
    "what does Medicare cover home health",
    "Medicare home health eligibility",
    "home health care Medicare Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/patients/medicare-home-health-benefits",
};

export const medicareContent = {
  hero: {
    eyebrow: "Understanding Medicare Home Health",
    headline: "Medicare Covers Home Health Care — Often 100%",
    subheadline:
      "If you have Medicare and meet the eligibility criteria, skilled nursing, therapy, and home health aide visits may be covered at no cost to you. Here's everything you need to know.",
    primaryCTA: { text: "📞 Verify My Coverage: (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" as const },
    badge: "✅ We verify your benefits at no charge before care begins",
  },
  whatIsCovered: {
    headline: "What Medicare Covers for Home Health",
    body: "Medicare Part A and Part B cover home health services when your doctor certifies that you need skilled care and you meet the homebound requirement. Here's what's covered:",
    items: [
      {
        icon: "stethoscope",
        title: "Skilled Nursing Care",
        description: "Registered nurse visits for wound care, medication management, health teaching, and condition monitoring.",
        covered: true,
      },
      {
        icon: "activity",
        title: "Physical Therapy",
        description: "Therapy visits to restore strength, mobility, and function after illness, surgery, or injury.",
        covered: true,
      },
      {
        icon: "hand",
        title: "Occupational Therapy",
        description: "Therapy to help patients safely perform daily activities like bathing, dressing, and cooking.",
        covered: true,
      },
      {
        icon: "mic",
        title: "Speech-Language Pathology",
        description: "Therapy for speech, swallowing, and cognitive-communication disorders.",
        covered: true,
      },
      {
        icon: "users",
        title: "Medical Social Services",
        description: "Counseling and community resource coordination from a licensed medical social worker.",
        covered: true,
      },
      {
        icon: "heart-handshake",
        title: "Home Health Aide",
        description: "Personal care assistance (bathing, grooming, dressing) when prescribed alongside skilled care.",
        covered: true,
      },
    ],
  },
  eligibility: {
    headline: "Who Qualifies for Medicare Home Health",
    requirements: [
      {
        title: "You have Medicare Part A or Part B",
        description: "Original Medicare, Medicare Advantage plans, and many Medicare supplement plans cover home health care.",
      },
      {
        title: "Your doctor certifies the need for skilled care",
        description: "A physician, nurse practitioner, or physician assistant must order your home health services and certify your care plan.",
      },
      {
        title: "You meet the homebound requirement",
        description: "You are considered homebound if leaving your home requires considerable effort due to illness, injury, or disability. You can still leave for medical appointments, religious services, or adult day care.",
      },
      {
        title: "The care is provided by a Medicare-certified agency",
        description: "All Family Health Care is Medicare-certified — we meet all CMS standards for quality and clinical excellence.",
      },
    ],
  },
  costSection: {
    headline: "What Home Health Care Costs with Medicare",
    body: "For Medicare-approved home health services, Medicare pays 100% — there are no copays, deductibles, or coinsurance for covered services. This means skilled nursing visits, physical therapy, occupational therapy, and speech therapy are provided at zero cost to you.",
    note: "Note: Medicare does not cover 24-hour-a-day care, meals delivered to your home, or homemaker services unless they are part of a skilled care plan.",
  },
  faqs: [
    {
      question: "Does Medicare Advantage (Part C) cover home health?",
      answer: "Yes — most Medicare Advantage plans cover home health care, often with the same or better benefits than Original Medicare. We work with all major Medicare Advantage plans. Call us and we'll verify your specific plan's coverage.",
      category: "Coverage",
    },
    {
      question: "What if I have both Medicare and Medicaid?",
      answer: "If you have both Medicare and Medicaid (a 'dual eligible'), home health care is typically covered at no cost to you. Medicaid may fill in any gaps left by Medicare. We accept both programs.",
      category: "Coverage",
    },
    {
      question: "Is there a limit to how many visits Medicare covers?",
      answer: "There is no hard limit on the number of home health visits Medicare covers, as long as you continue to meet eligibility requirements (homebound status, ongoing skilled need, and physician orders). Care is reviewed every 60 days.",
      category: "Coverage",
    },
    {
      question: "Can I receive home health if I live alone?",
      answer: "Yes — living alone does not disqualify you from receiving home health care. In fact, patients who live alone often benefit most. We'll work with you to ensure your home is safe and that you have what you need between visits.",
      category: "Eligibility",
    },
  ] satisfies FAQItem[],
};

// ─── HOW TO START PAGE ────────────────────────────────────────────────────────

export const howToStartSeo: SEOMeta = {
  title: "How to Start Home Health Care in Chicago | Chicago Home Health",
  description:
    "Getting home health care started is easier than you think. Learn the 3 simple steps to start Medicare-covered skilled nursing and therapy at home in Chicago.",
  keywords: ["how to start home health care", "getting home health care Chicago", "home health care referral process"],
  canonical: "https://www.allfamilyhealthcare.com/patients/how-to-start-home-health",
};

export const howToStartContent = {
  hero: {
    eyebrow: "Getting Started",
    headline: "How to Start Home Health Care — It's Simpler Than You Think",
    subheadline: "Most families can have a nurse at their door within 24–48 hours. Here's exactly how it works.",
    primaryCTA: { text: "📞 Call Now: (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" as const },
    secondaryCTA: { text: "Request Free Assessment Online", href: "/contact", variant: "secondary" as const },
  },
  scenarios: [
    {
      title: "Starting from the Hospital",
      icon: "building",
      description:
        "If your loved one is being discharged from the hospital, the discharge planner or social worker will often recommend home health. Tell them you'd like All Family Health Care — or call us directly at (773) 775-2588 and we'll coordinate with the hospital for you.",
      steps: [
        "Ask your discharge planner to refer to All Family Health Care",
        "OR call us at (773) 775-2588 and we'll reach out to the hospital",
        "We coordinate directly with your care team and arrange the first visit",
        "A nurse arrives at your home within 24–48 hours of discharge",
      ],
    },
    {
      title: "Starting from Home",
      icon: "home",
      description:
        "If you or a loved one needs home health care but isn't currently hospitalized — perhaps due to a chronic condition, increasing care needs, or a recent fall — the process is equally straightforward.",
      steps: [
        "Call us at (773) 775-2588 — we'll discuss your situation and answer questions",
        "We help you determine if you qualify for Medicare home health",
        "We contact your physician to obtain the necessary order",
        "Once the order is received, we schedule your first visit within 24–48 hours",
      ],
    },
    {
      title: "Physician Referrals",
      icon: "clipboard-plus",
      description:
        "Are you a physician, nurse practitioner, or hospital discharge planner looking to refer a patient? We make referrals fast and simple.",
      steps: [
        "Call our referral line at (773) 775-2588",
        "Fax orders to our office",
        "Or complete our online referral form",
        "We confirm receipt and start within 24–48 hours",
      ],
      cta: { text: "Go to Referral Form →", href: "/referrals/referral-form" },
    },
  ],
  faqs: [
    {
      question: "What if my parent refuses home health care?",
      answer: "This is very common. Many seniors fear losing independence or feel it's an intrusion. We recommend framing it as temporary help to get stronger and stay home — rather than a sign of decline. Sometimes having our care coordinator speak with your parent directly can help. Call us for guidance.",
    },
    {
      question: "What information do I need when I call?",
      answer: "Don't worry about having everything ready — we'll guide you through it. Helpful to have: patient name and date of birth, Medicare or insurance information if available, physician's name and contact, and a brief description of the care needs.",
    },
    {
      question: "Can you start care the same day I call?",
      answer: "In urgent situations, we do our best to arrange same-day or next-day visits. Call (773) 775-2588 directly and explain the urgency — we'll do everything in our power to respond quickly.",
    },
  ] satisfies FAQItem[],
};

// ─── CAREGIVER RESOURCES PAGE ─────────────────────────────────────────────────

export const caregiverResourcesSeo: SEOMeta = {
  title: "Caregiver Resources | Support for Family Caregivers | Chicago Home Health",
  description:
    "Resources, guides, and support for family members caring for a loved one at home in Chicago. Learn how home health care can help you — and your loved one.",
  keywords: ["caregiver resources Chicago", "family caregiver support", "caring for aging parent Chicago"],
  canonical: "https://www.allfamilyhealthcare.com/patients/caregiver-resources",
};

export const caregiverResourcesContent = {
  hero: {
    eyebrow: "For Family Caregivers",
    headline: "You Don't Have to Do This Alone",
    subheadline:
      "Caring for a loved one is one of the most important — and demanding — things you'll ever do. Our team is here to support both your loved one and you.",
    primaryCTA: { text: "📞 Call (773) 775-2588", href: "tel:(773)775-2588", variant: "phone" as const },
    secondaryCTA: { text: "Schedule a Consultation", href: "/contact", variant: "secondary" as const },
  },
  intro: {
    headline: "The Reality of Caregiving",
    body: "More than 53 million Americans provide unpaid care to an adult family member. Many are managing full-time jobs, raising their own children, and living with the constant fear that something might happen when they're not there. Caregiver burnout is real, and it affects both the caregiver and the person receiving care. Professional home health care isn't giving up — it's getting the right help so your loved one gets the best care possible.",
  },
  howWeHelp: {
    headline: "How Home Health Care Helps Caregivers",
    items: [
      {
        icon: "shield",
        title: "Professional Clinical Oversight",
        description: "Our nurses catch early warning signs — changing vital signs, medication side effects, wound changes — before they become emergencies. You don't have to be the one to notice everything.",
      },
      {
        icon: "clock",
        title: "24/7 On-Call Support",
        description: "When something worries you at 2am, you can call our on-call nurse and get a clinical answer — not a voicemail.",
      },
      {
        icon: "book-open",
        title: "Caregiver Education and Training",
        description: "Our nurses teach you what to watch for, how to help with medications, and how to assist with mobility — so you feel confident and prepared.",
      },
      {
        icon: "users",
        title: "Care Coordinator as Your Partner",
        description: "Your assigned care coordinator is your single point of contact — answering questions, coordinating the care team, and updating you on your loved one's progress.",
      },
      {
        icon: "heart",
        title: "Respite and Relief",
        description: "Knowing a qualified nurse or therapist is there several times a week gives you time to rest, work, and take care of yourself.",
      },
      {
        icon: "info",
        title: "Guidance on Next Steps",
        description: "Our social workers help you plan for the future — whether that's long-term care planning, community resources, or navigating difficult family decisions.",
      },
    ],
  },
  guideTopics: {
    headline: "Caregiver Guides & Articles",
    articles: [
      { title: "The Family Caregiver Survival Guide", slug: "family-caregiver-survival-guide", readTime: "15 min", category: "Caregiver Support" },
      { title: "How to Care for Aging Parents at Home", slug: "how-to-care-for-aging-parents", readTime: "8 min", category: "Caregiver Support" },
      { title: "Recognizing Caregiver Burnout — Warning Signs and What to Do", slug: "caregiver-burnout-warning-signs", readTime: "6 min", category: "Caregiver Support" },
      { title: "How to Balance Work and Caregiving", slug: "how-to-balance-work-and-caregiving", readTime: "7 min", category: "Caregiver Support" },
      { title: "Talking to Elderly Parents About Getting Help at Home", slug: "communication-with-elderly-parents", readTime: "6 min", category: "Caregiver Support" },
      { title: "Legal Documents Every Caregiver Needs", slug: "legal-documents-caregivers-need", readTime: "9 min", category: "Caregiver Support" },
    ],
  },
  warningSignsSection: {
    headline: "Signs Your Loved One Needs More Help at Home",
    body: "Many families wait too long to seek home health help. These warning signs often mean it's time to call:",
    signs: [
      "Multiple falls in the past year, or fear of falling",
      "Hospital admission or ER visit in the past 90 days",
      "New diagnosis with complex medication regimen",
      "Significant weight loss or poor nutrition",
      "Confusion about medications — skipping doses or taking too many",
      "Declining personal hygiene or grooming",
      "Social withdrawal or signs of depression",
      "Difficulty walking, climbing stairs, or getting up from chairs",
      "Wounds or skin breakdown that aren't healing",
      "You're missing work or losing sleep to provide care",
    ],
    cta: {
      text: "Call to Discuss Your Situation: (773) 775-2588",
      href: "tel:(773)775-2588",
      variant: "phone" as const,
    },
  },
};

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────

export const faqSeo: SEOMeta = {
  title: "Home Health Care FAQ | Common Questions Answered | Chicago Home Health",
  description:
    "Answers to the most common questions about home health care, Medicare coverage, eligibility, and getting started in Chicago.",
  keywords: ["home health care FAQ", "home health questions answered", "Medicare home health questions"],
  canonical: "https://www.allfamilyhealthcare.com/patients/faq",
};

export const allFAQs: FAQItem[] = [
  // Getting Started
  {
    question: "What is home health care?",
    answer: "Home health care is skilled medical care provided in a patient's home by licensed professionals — registered nurses, physical therapists, occupational therapists, speech therapists, and home health aides. It is different from non-medical home care (like companionship and housekeeping). Home health care requires a physician's order and is covered by Medicare when the patient qualifies.",
    category: "Getting Started",
  },
  {
    question: "Who needs home health care?",
    answer: "Home health care is appropriate for people who: recently were discharged from a hospital or rehabilitation facility; have a chronic condition like heart failure, COPD, or diabetes that needs monitoring; are recovering from surgery, a fall, or a stroke; have a wound that requires skilled nursing care; or need physical, occupational, or speech therapy to regain function.",
    category: "Getting Started",
  },
  {
    question: "Do I need a doctor's referral to start home health care?",
    answer: "Yes — Medicare-covered home health care requires a physician's order. However, we help coordinate this for you. If you were just discharged from the hospital, the discharge team typically handles the order. If you're calling from home, we contact your physician directly to request the order after speaking with you.",
    category: "Getting Started",
  },
  {
    question: "How quickly can home health care start?",
    answer: "In most cases, we can have a nurse at your door within 24–48 hours of receiving a physician's order. For urgent situations — such as a patient just discharged from the hospital — call us directly at (773) 775-2588 and we will do our best to arrange same-day or next-day service.",
    category: "Getting Started",
  },
  // Medicare & Insurance
  {
    question: "Does Medicare cover home health care?",
    answer: "Yes — Medicare Part A and Part B cover home health care when you meet the eligibility criteria: (1) your doctor orders the care, (2) you are considered homebound, (3) you need skilled care (nursing or therapy), and (4) the agency is Medicare-certified. All Family Health Care is Medicare-certified. For most covered services, there are no copays or deductibles.",
    category: "Medicare & Insurance",
  },
  {
    question: "What does Medicare pay for home health?",
    answer: "Medicare pays 100% for covered home health services — there are no copays, coinsurance, or deductibles for Medicare-approved skilled nursing, physical therapy, occupational therapy, speech therapy, and home health aide services. Medicare does not cover 24-hour care, meals, or non-skilled homemaker services.",
    category: "Medicare & Insurance",
  },
  {
    question: "Does Medicare Advantage cover home health?",
    answer: "Yes — most Medicare Advantage (Part C) plans cover home health care, typically with the same or better benefits than Original Medicare. Benefits vary by plan. We work with all major Medicare Advantage plans in the Chicago area. Call us and we'll verify your specific plan's coverage at no charge.",
    category: "Medicare & Insurance",
  },
  {
    question: "What if I don't have Medicare?",
    answer: "We also accept Medicaid and many private insurance plans. We recommend calling us directly so we can verify your specific coverage. If you are uninsured, we can discuss payment options and help you explore any programs you may qualify for.",
    category: "Medicare & Insurance",
  },
  // About Our Services
  {
    question: "What services does All Family Health Care provide?",
    answer: "We provide the full range of Medicare home health services: skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, medical social services, wound care management, catheter care, medication management, post-surgical care, and chronic disease management.",
    category: "About Our Services",
  },
  {
    question: "How often will a nurse or therapist visit?",
    answer: "Visit frequency is determined by your care plan and physician orders. Most patients begin with 2–5 visits per week for the first few weeks, then taper as they improve. Your care coordinator will explain your specific schedule.",
    category: "About Our Services",
  },
  {
    question: "Will I always have the same caregiver?",
    answer: "We strongly believe in care consistency and make every effort to assign the same nurse and therapists to each patient. Consistent caregivers build trust and are much more likely to notice changes in condition early — which prevents hospitalizations.",
    category: "About Our Services",
  },
  {
    question: "What areas of Chicago do you serve?",
    answer: "We serve Chicago's North and Northwest Sides — including Edgebrook, Sauganash, Jefferson Park, Norwood Park, Forest Glen, Lincoln Square, Ravenswood, Rogers Park, Andersonville, Uptown, Irving Park, Portage Park, and many more neighborhoods — plus suburbs including Skokie, Evanston, Park Ridge, Des Plaines, Glenview, Niles, Morton Grove, Lincolnwood, Harwood Heights, Rosemont, and Elmwood Park. Visit our Locations page for the full list.",
    category: "Service Area",
  },
  // About All Family
  {
    question: "Is All Family Health Care Medicare certified?",
    answer: "Yes — All Family Health Care is fully certified by the Centers for Medicare & Medicaid Services (CMS). We meet all federal standards for quality, safety, and clinical excellence required for Medicare certification.",
    category: "About All Family",
  },
  {
    question: "What does Joint Commission accreditation mean?",
    answer: "The Joint Commission Gold Seal of Approval is the highest accreditation in healthcare — the same standard used by top hospitals in America. It means we meet rigorous standards for clinical quality, patient safety, and organizational excellence. Not all home health agencies carry this accreditation.",
    category: "About All Family",
  },
  {
    question: "What if there's a problem with my care?",
    answer: "We take every concern seriously. Call our office at (773) 775-2588 to speak with a supervisor. We also have a formal grievance process and you have the right to contact the Illinois Department of Public Health or Medicare directly if your concern is not resolved.",
    category: "About All Family",
  },
];

export const faqCategories = ["Getting Started", "Medicare & Insurance", "About Our Services", "Service Area", "About All Family"];
