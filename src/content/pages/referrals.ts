// src/content/pages/referrals.ts
// All Family Health Care — Physician Referrals Section Content

import type { SEOMeta, FAQItem, ProcessStep } from "@/types/content";

// ─── REFERRALS HUB PAGE ──────────────────────────────────────────────────────

export const referralsSeo: SEOMeta = {
  title: "Physician Referrals | Home Health Care Chicago",
  description:
    "Refer patients to All Family Health Care — Medicare-certified, Joint Commission-accredited home health in Chicago. Fast referral process, 24-hour response, reliable follow-up.",
  keywords: [
    "home health referral Chicago",
    "refer patient home health Chicago",
    "Medicare home health agency referral",
    "Joint Commission home health Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/referrals",
};

export const referralsHero = {
  eyebrow: "For Physicians & Discharge Planners",
  headline: "Refer Patients with Confidence — We Respond Within 24 Hours",
  subheadline:
    "All Family Health Care is Medicare-certified and Joint Commission-accredited. We keep you informed, prevent readmissions, and treat your patients like family.",
  primaryCTA: {
    text: "📞 Call Our Referral Line: (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
    ariaLabel: "Call All Family Health Care referral line",
  },
  secondaryCTA: {
    text: "Submit Referral Online",
    href: "/referrals/referral-form",
    variant: "secondary" as const,
  },
  badge: "✅ Medicare Certified · Joint Commission Accredited · 20+ Years in Chicago",
  image: {
    src: "/images/hero/referrals.jpg",
    alt: "Two clinicians reviewing patient discharge documents on a tablet",
    width: 1344,
    height: 768,
  },
};

export const whyReferSection = {
  eyebrow: "Why Physicians Choose All Family",
  headline: "The Home Health Partner You Can Rely On",
  features: [
    {
      icon: "shield-check",
      title: "Medicare Certified & Joint Commission Accredited",
      description:
        "The Gold Seal standard — the same accreditation used by top hospitals. Your patients receive care that meets the highest federal quality and safety standards.",
    },
    {
      icon: "clock",
      title: "24-Hour Response Guarantee",
      description:
        "We confirm receipt of every referral within 24 hours and initiate a patient contact for scheduling. Urgent cases are prioritized and started same-day or next-day.",
    },
    {
      icon: "message-circle",
      title: "Consistent Physician Communication",
      description:
        "We send clinical updates after every significant visit, report changes in condition promptly, and maintain open lines of communication with your office.",
    },
    {
      icon: "trending-down",
      title: "Proven Readmission Prevention",
      description:
        "Our chronic disease management and post-discharge protocols are specifically designed to prevent hospital readmissions — protecting your patients and your metrics.",
    },
    {
      icon: "users",
      title: "Full Clinical Team Available",
      description:
        "Skilled nursing, physical therapy, occupational therapy, speech therapy, home health aide, medical social work, wound care — all under one agency.",
    },
    {
      icon: "map-pin",
      title: "Wide Service Area",
      description:
        "We serve 30+ communities across Chicago's North and Northwest Sides and nearby suburbs — covering the full catchment area of most Chicago-area hospitals.",
    },
  ],
};

export const referralProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Submit the Referral",
    description:
      "Call our referral line at (773) 775-2588, fax a referral to our office, or complete our secure online referral form. We accept referrals 7 days a week.",
  },
  {
    step: "02",
    title: "We Confirm Within 24 Hours",
    description:
      "Our intake coordinator contacts you or your office to confirm the referral, verify insurance eligibility, and flag any clinical concerns within 24 business hours.",
  },
  {
    step: "03",
    title: "Patient Contact and Scheduling",
    description:
      "We contact the patient or family directly to schedule the initial home visit — typically within 24–48 hours of receiving the referral.",
  },
  {
    step: "04",
    title: "Care Begins and You're Kept Informed",
    description:
      "The first visit occurs as scheduled. We send you a copy of the initial assessment, ongoing clinical notes, and prompt notification of any significant changes.",
  },
];

export const clinicalCapabilities = {
  eyebrow: "Clinical Capabilities",
  headline: "We Can Handle Complex Patients",
  intro:
    "All Family Health Care has the clinical depth to manage patients with complex, multi-system conditions. Our team includes nurses with specialized training in cardiac care, wound management, diabetes education, and neurological rehabilitation.",
  specialties: [
    {
      category: "Cardiac & Pulmonary",
      items: [
        "CHF monitoring and management",
        "COPD exacerbation prevention",
        "Post-cardiac surgery care",
        "Telemonitoring coordination",
      ],
    },
    {
      category: "Wound Care",
      items: [
        "Surgical wound management",
        "Diabetic wound care",
        "Pressure injury prevention and treatment",
        "Venous and arterial ulcers",
      ],
    },
    {
      category: "Neurological Rehab",
      items: [
        "Stroke rehabilitation (PT, OT, SLP)",
        "Parkinson's disease management",
        "Traumatic brain injury support",
        "Multiple sclerosis care",
      ],
    },
    {
      category: "Post-Surgical Care",
      items: [
        "Joint replacement rehabilitation",
        "Bariatric post-op care",
        "Abdominal surgery recovery",
        "Neurosurgical post-op management",
      ],
    },
    {
      category: "Medication Management",
      items: [
        "High-risk medication oversight",
        "Anticoagulation monitoring",
        "Insulin therapy education",
        "Polypharmacy review",
      ],
    },
    {
      category: "IV Therapy",
      items: [
        "IV antibiotic administration",
        "PICC line care and management",
        "IV hydration",
        "Parenteral nutrition support",
      ],
    },
  ],
};

export const referralFAQs: FAQItem[] = [
  {
    question: "How do I submit a referral?",
    answer:
      "Three options: (1) Call our referral line at (773) 775-2588, (2) Fax clinical information to our office, or (3) Complete our secure online referral form at allfamilyhealthcare.com/referrals/referral-form. We accept referrals 7 days a week.",
    category: "Referral Process",
  },
  {
    question: "How quickly can you start care after discharge?",
    answer:
      "In most cases, we can begin care within 24–48 hours of receiving a complete referral. For urgent situations, we work to start same-day or next-day. Please call our referral line directly to expedite: (773) 775-2588.",
    category: "Referral Process",
  },
  {
    question: "What information do you need to process a referral?",
    answer:
      "To process a referral, we need: patient demographics and contact information, diagnosis and relevant medical history, insurance information (Medicare ID, etc.), physician name and contact, and specific services ordered. We can work with partial information and gather the rest — please don't let incomplete information delay a referral.",
    category: "Referral Process",
  },
  {
    question: "Do you accept Medicare Advantage plans?",
    answer:
      "Yes — we work with all major Medicare Advantage plans in the Chicago area, as well as Original Medicare, Medicaid, and most private insurance plans. Our intake team will verify coverage before care begins.",
    category: "Insurance",
  },
  {
    question: "How do you communicate progress back to referring physicians?",
    answer:
      "We send clinical update notes after the initial assessment, when there are significant clinical changes, at the 30-day mark, and at each 60-day recertification. You can also call our clinical team directly at any time. We believe in keeping referring physicians fully informed.",
    category: "Communication",
  },
  {
    question: "What is your coverage area?",
    answer:
      "We serve Chicago's North and Northwest Sides — including all major neighborhoods — plus suburbs including Skokie, Evanston, Park Ridge, Des Plaines, Glenview, Niles, Morton Grove, Lincolnwood, Harwood Heights, Rosemont, and Elmwood Park. Call us to confirm coverage for a specific address.",
    category: "Service Area",
  },
  {
    question: "Can you handle clinically complex patients?",
    answer:
      "Yes — our clinical team has deep experience with complex, multi-system conditions including CHF, COPD, diabetic wounds, post-surgical care, stroke rehabilitation, and IV antibiotic therapy. We welcome the opportunity to discuss complex patients before referral. Call (773) 775-2588.",
    category: "Clinical",
  },
];

// ─── REFERRAL FORM PAGE ───────────────────────────────────────────────────────

export const referralFormSeo: SEOMeta = {
  title: "Patient Referral Form | Chicago Home Health Agency",
  description:
    "Submit a patient referral to All Family Health Care online. Medicare-certified home health in Chicago. We confirm within 24 hours.",
  keywords: ["home health referral form Chicago", "refer patient home health"],
  canonical: "https://www.allfamilyhealthcare.com/referrals/referral-form",
  noIndex: false,
};

export const referralFormContent = {
  hero: {
    eyebrow: "Patient Referral",
    headline: "Submit a Home Health Referral",
    subheadline:
      "Complete the form below or call us directly at (773) 775-2588. We confirm receipt within 24 hours and initiate care within 24–48 hours of a complete referral.",
    phoneCTA: {
      text: "📞 Call Referral Line: (773) 775-2588",
      href: "tel:(773)775-2588",
      variant: "phone" as const,
    },
  },
  form: {
    name: "referral-form",
    netlifyName: "referral-form",
    sections: [
      {
        heading: "Referring Physician / Facility",
        fields: [
          { name: "physician-name", label: "Physician / Clinician Name", type: "text", required: true },
          { name: "practice-hospital", label: "Practice / Hospital Name", type: "text", required: true },
          { name: "npi", label: "NPI Number", type: "text", required: false },
          { name: "physician-phone", label: "Office Phone", type: "tel", required: true },
          { name: "physician-fax", label: "Fax Number", type: "tel", required: false },
          { name: "contact-name", label: "Referral Contact Name", type: "text", required: false },
        ],
      },
      {
        heading: "Patient Information",
        fields: [
          { name: "patient-first", label: "Patient First Name", type: "text", required: true },
          { name: "patient-last", label: "Patient Last Name", type: "text", required: true },
          { name: "patient-dob", label: "Date of Birth", type: "date", required: true },
          { name: "patient-phone", label: "Patient / Family Phone", type: "tel", required: true },
          { name: "patient-address", label: "Home Address (where care will be provided)", type: "text", required: true },
          { name: "patient-city", label: "City", type: "text", required: true },
          { name: "patient-zip", label: "ZIP Code", type: "text", required: true },
        ],
      },
      {
        heading: "Insurance Information",
        fields: [
          { name: "insurance-type", label: "Primary Insurance", type: "select", required: true,
            options: ["Medicare Part A & B", "Medicare Advantage", "Medicaid", "Private Insurance", "Self-Pay", "Other"] },
          { name: "insurance-id", label: "Medicare / Insurance ID", type: "text", required: false },
          { name: "insurance-name", label: "Insurance Plan Name (if Advantage/Private)", type: "text", required: false },
        ],
      },
      {
        heading: "Clinical Information",
        fields: [
          { name: "primary-diagnosis", label: "Primary Diagnosis / ICD-10", type: "text", required: true },
          { name: "secondary-diagnoses", label: "Secondary Diagnoses", type: "text", required: false },
          { name: "discharge-date", label: "Hospital Discharge Date (if applicable)", type: "date", required: false },
          { name: "services-needed", label: "Services Needed (check all that apply)", type: "checkbox-group", required: true,
            options: [
              "Skilled Nursing",
              "Physical Therapy",
              "Occupational Therapy",
              "Speech Therapy",
              "Home Health Aide",
              "Wound Care",
              "IV Therapy",
              "Medication Management",
              "Medical Social Work",
            ],
          },
          { name: "urgency", label: "Urgency", type: "select", required: true,
            options: ["Standard (within 48 hours)", "Urgent (within 24 hours)", "Same-Day Start Needed"] },
          { name: "clinical-notes", label: "Additional Clinical Notes", type: "textarea", required: false },
        ],
      },
    ],
    submitText: "Submit Referral",
    confirmationMessage:
      "Thank you — your referral has been received. Our intake team will confirm within 24 hours. For urgent situations, call (773) 775-2588 directly.",
  },
};
