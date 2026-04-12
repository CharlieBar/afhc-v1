// src/content/services/index.ts
// All Family Health Care — All Services Content

import type { ServiceCard, FAQItem } from "@/types/content";

export const allServices: ServiceCard[] = [
  // ─── CORE SERVICES ──────────────────────────────────────────────────────

  {
    name: "Skilled Nursing",
    slug: "skilled-nursing",
    tagline: "Registered nurses bringing hospital-level care to your home",
    description:
      "Our registered nurses provide expert medical care in your home — monitoring vital signs, managing medications, treating wounds, administering IV therapy, and educating patients and families about managing their conditions safely.",
    icon: "stethoscope",
    image: { src: "/images/services/skilled-nursing.jpg", alt: "Registered nurse showing improved vital signs on a tablet to a senior patient", width: 1344, height: 768 },
    highlights: [
      "Medication administration & management",
      "Wound assessment and dressing changes",
      "IV therapy and injections",
      "Vital signs monitoring",
      "Chronic disease education",
      "Health status assessment",
      "Care coordination with physicians",
      "Fall risk assessment",
    ],
    cta: { text: "Learn About Skilled Nursing", href: "/services/skilled-nursing" },
    category: "core",
    relatedConditions: [
      "heart-failure", "copd", "diabetes", "stroke-recovery", 
      "wound-care-management", "post-surgical-recovery"
    ],
  },

  {
    name: "Physical Therapy",
    slug: "physical-therapy",
    tagline: "Rebuild strength, restore mobility, reduce fall risk",
    description:
      "Our licensed physical therapists design personalized exercise programs to restore your strength, improve balance, increase mobility, and reduce pain — performed in the rooms and spaces where you actually live and move.",
    icon: "activity",
    image: { src: "/images/services/physical-therapy.jpg", alt: "Senior patient taking first successful step with walker guided by physical therapist", width: 1344, height: 768 },
    highlights: [
      "Post-surgical rehabilitation",
      "Strength and balance training",
      "Gait training and walking assistance",
      "Fall prevention programs",
      "Pain management through exercise",
      "Home environment safety assessment",
      "Assistive device training",
      "Stroke rehabilitation",
    ],
    cta: { text: "Learn About Physical Therapy", href: "/services/physical-therapy" },
    category: "core",
    relatedConditions: [
      "stroke-recovery", "hip-fracture-recovery", "joint-replacement-recovery",
      "parkinsons-disease", "arthritis", "fall-recovery"
    ],
  },

  {
    name: "Occupational Therapy",
    slug: "occupational-therapy",
    tagline: "Return to the everyday activities that matter most",
    description:
      "Occupational therapists help patients relearn how to perform daily activities — cooking, dressing, bathing, grooming — safely and independently in their own home environment. We also assess the home for safety hazards and recommend adaptive equipment.",
    icon: "hand",
    image: { src: "/images/services/occupational-therapy.jpg", alt: "Occupational therapist guiding senior patient through fine motor skill exercise", width: 1344, height: 768 },
    highlights: [
      "Activities of daily living training",
      "Home safety evaluation and recommendations",
      "Adaptive equipment instruction",
      "Cognitive rehabilitation",
      "Fine motor skill training",
      "Energy conservation techniques",
      "Bathing and grooming independence",
      "Kitchen and home safety",
    ],
    cta: { text: "Learn About Occupational Therapy", href: "/services/occupational-therapy" },
    category: "core",
    relatedConditions: [
      "stroke-recovery", "alzheimers-dementia", "parkinsons-disease",
      "joint-replacement-recovery", "age-related-decline"
    ],
  },

  {
    name: "Speech Therapy",
    slug: "speech-therapy",
    tagline: "Restore communication, swallowing, and cognitive function",
    description:
      "Our speech-language pathologists treat disorders of communication, voice, cognition, and swallowing — conditions that often result from stroke, neurological disease, head and neck cancer, or aging.",
    icon: "mic",
    image: { src: "/images/services/speech-therapy.jpg", alt: "Speech therapist working with senior stroke patient on speech exercises", width: 1344, height: 768 },
    highlights: [
      "Swallowing disorder (dysphagia) treatment",
      "Aphasia and speech therapy after stroke",
      "Voice disorders and therapy",
      "Cognitive-communication rehabilitation",
      "Memory and problem-solving exercises",
      "Parkinson's voice therapy (LSVT)",
      "Feeding evaluations",
      "Caregiver training and education",
    ],
    cta: { text: "Learn About Speech Therapy", href: "/services/speech-therapy" },
    category: "core",
    relatedConditions: [
      "stroke-recovery", "parkinsons-disease", "alzheimers-dementia",
      "multiple-sclerosis", "cancer-recovery"
    ],
  },

  {
    name: "Medical Social Worker",
    slug: "medical-social-worker",
    tagline: "Connecting patients and families to essential resources",
    description:
      "Our medical social workers provide counseling, resource coordination, and practical help — assisting patients and families in navigating the healthcare system, identifying community resources, and addressing the emotional challenges of illness and recovery.",
    icon: "users",
    image: { src: "/images/services/medical-social-worker.jpg", alt: "Medical social worker reviewing resources with patient and family member", width: 1344, height: 768 },
    highlights: [
      "Counseling and emotional support",
      "Community resource referrals",
      "Long-term care planning",
      "Insurance and benefit navigation",
      "Family and caregiver support",
      "Advance directive guidance",
      "Caregiver burnout assessment",
      "Crisis intervention",
    ],
    cta: { text: "Learn About Medical Social Work", href: "/services/medical-social-worker" },
    category: "core",
    relatedConditions: [
      "alzheimers-dementia", "cancer-recovery", "parkinsons-disease", "age-related-decline"
    ],
  },

  {
    name: "Home Health Aide",
    slug: "home-health-aide",
    tagline: "Compassionate personal care preserving dignity and independence",
    description:
      "Our trained home health aides provide personal care assistance — helping with bathing, grooming, dressing, and hygiene — with the warmth and respect every person deserves. Aide services are prescribed as part of a skilled care plan.",
    icon: "heart-handshake",
    image: { src: "/images/services/home-health-aide.jpg", alt: "Home health aide helping senior patient with grooming and personal care", width: 1344, height: 768 },
    highlights: [
      "Bathing and personal hygiene assistance",
      "Grooming and dressing help",
      "Ambulation and mobility assistance",
      "Meal preparation assistance",
      "Light housekeeping",
      "Medication reminders",
      "Companionship and emotional support",
      "Vital signs monitoring (trained aides)",
    ],
    cta: { text: "Learn About Home Health Aide", href: "/services/home-health-aide" },
    category: "core",
    relatedConditions: [
      "alzheimers-dementia", "parkinsons-disease", "age-related-decline",
      "stroke-recovery", "cancer-recovery"
    ],
  },

  // ─── SPECIALIZED SERVICES ────────────────────────────────────────────────

  {
    name: "Wound Care Management",
    slug: "wound-care-management",
    tagline: "Advanced wound healing, infection prevention, and recovery",
    description:
      "Our wound care-trained nurses provide expert assessment, cleaning, debridement guidance, and dressing changes for complex wounds — preventing infection, promoting healing, and monitoring progress with each visit.",
    icon: "bandage",
    image: { src: "/images/services/wound-care-management.jpg", alt: "Nurse applying sterile wound dressing with focused precision", width: 1344, height: 768 },
    highlights: [
      "Surgical wound care and dressing changes",
      "Diabetic foot ulcer treatment",
      "Pressure injury (bedsore) management",
      "Venous and arterial ulcer care",
      "Infection monitoring and prevention",
      "Wound measurement and documentation",
      "Wound photography and tracking",
      "Physician communication and updates",
    ],
    cta: { text: "Learn About Wound Care", href: "/services/wound-care-management" },
    category: "specialized",
    relatedConditions: [
      "diabetes", "post-surgical-recovery", "cancer-recovery",
      "obesity-related-care", "post-heart-surgery-recovery"
    ],
  },

  {
    name: "Catheter Care",
    slug: "catheter-care",
    tagline: "Safe, skilled catheter management at home",
    description:
      "Our registered nurses provide skilled care for urinary and suprapubic catheters — including insertion when ordered, irrigation, routine changes, and patient and caregiver education to prevent urinary tract infections.",
    icon: "droplets",
    image: { src: "/images/services/catheter-care.jpg", alt: "Registered nurse managing catheter care with professional attention", width: 1344, height: 768 },
    highlights: [
      "Urinary catheter maintenance",
      "Suprapubic catheter care",
      "Patient and family education",
      "UTI prevention protocols",
      "Catheter change when ordered",
      "Complication monitoring",
    ],
    cta: { text: "Learn About Catheter Care", href: "/services/catheter-care" },
    category: "specialized",
    relatedConditions: [
      "post-surgical-recovery", "stroke-recovery", "multiple-sclerosis"
    ],
  },

  {
    name: "Pain Management",
    slug: "pain-management",
    tagline: "Expert pain assessment and management in your home",
    description:
      "Our nurses work closely with your physician to assess and manage pain — including medication administration, non-pharmacological techniques, and regular pain monitoring to improve comfort and quality of life at home.",
    icon: "shield",
    image: { src: "/images/services/pain-management.jpg", alt: "Nurse reviewing pain assessment with relieved senior patient", width: 1344, height: 768 },
    highlights: [
      "Pain level assessment and tracking",
      "Medication administration as ordered",
      "Non-pharmacological pain techniques",
      "Physician communication and adjustments",
      "Comfort-focused care planning",
      "Patient and family pain education",
    ],
    cta: { text: "Learn About Pain Management", href: "/services/pain-management" },
    category: "specialized",
    relatedConditions: [
      "cancer-recovery", "arthritis", "chronic-pain", "joint-replacement-recovery"
    ],
  },

  {
    name: "Post-Surgical Care",
    slug: "post-surgical-care",
    tagline: "Speed recovery after surgery — safely at home",
    description:
      "After major surgery, professional home health care dramatically improves outcomes and reduces hospital readmission risk. Our nurses and therapists provide expert post-surgical wound care, medication management, and rehabilitation starting within 24–48 hours of discharge.",
    icon: "clipboard-plus",
    image: { src: "/images/services/post-surgical-care.jpg", alt: "Nurse reviewing post-surgical healing progress with senior patient", width: 1344, height: 768 },
    highlights: [
      "Surgical wound monitoring and dressing changes",
      "Medication management and education",
      "Physical therapy for mobility and strength",
      "Occupational therapy for daily living",
      "Fall prevention and home safety",
      "Vital signs monitoring",
      "Physician communication and updates",
      "Readmission prevention protocols",
    ],
    cta: { text: "Learn About Post-Surgical Care", href: "/services/post-surgical-care" },
    category: "specialized",
    relatedConditions: [
      "post-surgical-recovery", "joint-replacement-recovery", "hip-fracture-recovery",
      "post-heart-surgery-recovery", "cancer-recovery"
    ],
  },

  {
    name: "Chronic Disease Management",
    slug: "chronic-disease-management",
    tagline: "Expert home care for complex, ongoing conditions",
    description:
      "Living well with a chronic condition requires consistent clinical monitoring, medication management, and education. Our nurses and therapists specialize in managing heart failure, COPD, diabetes, and other complex conditions — reducing flare-ups and preventing hospitalizations.",
    icon: "heart-pulse",
    image: { src: "/images/services/chronic-disease-management.jpg", alt: "Nurse reviewing health improvement charts with senior patient", width: 1344, height: 768 },
    highlights: [
      "Condition-specific monitoring and assessment",
      "Medication management and education",
      "Diet and lifestyle guidance",
      "Early warning sign identification",
      "Hospitalization prevention protocols",
      "Physician reporting and coordination",
      "Patient and family self-management education",
      "Care plan updates as condition changes",
    ],
    cta: { text: "Learn About Chronic Disease Management", href: "/services/chronic-disease-management" },
    category: "specialized",
    relatedConditions: [
      "heart-failure", "copd", "diabetes", "parkinsons-disease",
      "hypertension", "arthritis", "multiple-sclerosis"
    ],
  },

  {
    name: "Medication Management",
    slug: "medication-management",
    tagline: "Safe, accurate medication oversight by registered nurses",
    description:
      "Medication errors are one of the leading causes of hospital readmission among older adults. Our nurses perform thorough medication reviews, administer medications as ordered, educate patients and families, and monitor for side effects — preventing dangerous mistakes at home.",
    icon: "pill",
    image: { src: "/images/services/medication-management.jpg", alt: "Nurse organizing weekly pill planner with senior patient", width: 1344, height: 768 },
    highlights: [
      "Complete medication reconciliation",
      "Medication administration (IV, injectable, oral)",
      "Side effect monitoring",
      "Patient and caregiver education",
      "Polypharmacy review",
      "Medication compliance support",
      "Physician communication",
      "Pharmacy coordination",
    ],
    cta: { text: "Learn About Medication Management", href: "/services/medication-management" },
    category: "specialized",
    relatedConditions: [
      "heart-failure", "diabetes", "hypertension", "alzheimers-dementia",
      "parkinsons-disease", "copd"
    ],
  },
];

export const coreServices = allServices.filter((s) => s.category === "core");
export const specializedServices = allServices.filter((s) => s.category === "specialized");

export function getServiceBySlug(slug: string) {
  return allServices.find((s) => s.slug === slug);
}

export const allServiceSlugs = allServices.map((s) => s.slug);

// Shared FAQs for services pages
export const sharedServiceFAQs: FAQItem[] = [
  {
    question: "Does Medicare cover this service?",
    answer:
      "Most skilled home health services are covered under Medicare Part A and Part B when ordered by a physician and the patient meets homebound criteria. We will verify your specific coverage at no charge before services begin. Call (773) 775-2588.",
    category: "Coverage",
  },
  {
    question: "How do I start home health services?",
    answer:
      "You need a physician's order to begin Medicare-covered home health. If you were recently hospitalized, the discharge team can arrange this. If you're calling from home, we can help coordinate with your doctor. Call (773) 775-2588 and we'll walk you through every step.",
    category: "Getting Started",
  },
  {
    question: "How soon can services start after I call?",
    answer:
      "In most cases, we can begin care within 24–48 hours of receiving a physician's order. For urgent situations, we do our best to arrange same-day or next-day service.",
    category: "Getting Started",
  },
  {
    question: "Will I have the same nurse or therapist every visit?",
    answer:
      "We make every effort to assign consistent caregivers to each patient. Consistency builds trust and helps our clinicians detect changes in condition early — which can prevent hospitalizations and emergency room visits.",
    category: "About Our Services",
  },
];
