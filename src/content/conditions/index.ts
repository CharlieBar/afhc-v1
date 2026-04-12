// src/content/conditions/index.ts
// All Family Health Care — All Conditions Content

import type { ConditionCard } from "@/types/content";

export const allConditions: ConditionCard[] = [
  // ─── CARDIOVASCULAR ─────────────────────────────────────────────────────
  {
    name: "Heart Failure",
    slug: "heart-failure",
    tagline: "Manage CHF safely at home with expert nursing support",
    description:
      "Congestive heart failure requires careful daily monitoring of fluid retention, weight, and medications. Our nurses help patients stay stable at home and catch early warning signs before they become hospitalizations.",
    icon: "heart-pulse",
    category: "Cardiovascular",
    relatedServices: ["skilled-nursing", "chronic-disease-management", "medication-management", "home-health-aide"],
    cta: { text: "Heart Failure Home Care", href: "/conditions/heart-failure" },
  },
  {
    name: "Hypertension",
    slug: "hypertension",
    tagline: "Blood pressure monitoring and management at home",
    description:
      "Uncontrolled high blood pressure is a leading cause of stroke and heart disease. Our nurses monitor blood pressure, manage medications, and provide education to help patients control hypertension safely at home.",
    icon: "activity",
    category: "Cardiovascular",
    relatedServices: ["skilled-nursing", "medication-management", "chronic-disease-management"],
    cta: { text: "Hypertension Home Care", href: "/conditions/hypertension" },
  },
  {
    name: "Post-Heart Surgery Recovery",
    slug: "post-heart-surgery-recovery",
    tagline: "Safe, expert recovery after cardiac surgery at home",
    description:
      "Recovering from open heart surgery, valve replacement, or bypass surgery requires careful wound care, activity management, and medication oversight. Our team bridges the gap between hospital and full recovery.",
    icon: "heart",
    category: "Cardiovascular",
    relatedServices: ["skilled-nursing", "post-surgical-care", "physical-therapy", "medication-management"],
    cta: { text: "Cardiac Surgery Recovery", href: "/conditions/post-heart-surgery-recovery" },
  },

  // ─── NEUROLOGICAL ────────────────────────────────────────────────────────
  {
    name: "Stroke Recovery",
    slug: "stroke-recovery",
    tagline: "Comprehensive stroke rehab delivered to your home",
    description:
      "Stroke recovery requires a coordinated team — nursing, physical therapy, occupational therapy, and speech therapy working together. We bring that full team to your home, where recovery matters most.",
    icon: "brain",
    category: "Neurological",
    relatedServices: ["skilled-nursing", "physical-therapy", "occupational-therapy", "speech-therapy"],
    cta: { text: "Stroke Recovery Home Care", href: "/conditions/stroke-recovery" },
  },
  {
    name: "Parkinson's Disease",
    slug: "parkinsons-disease",
    tagline: "Expert Parkinson's home care — mobility, safety, and dignity",
    description:
      "Parkinson's disease presents unique home care challenges — tremors, rigidity, balance issues, and speech difficulties. Our specialized team helps Parkinson's patients stay safe, independent, and mobile at home.",
    icon: "zap",
    category: "Neurological",
    relatedServices: ["physical-therapy", "occupational-therapy", "speech-therapy", "home-health-aide"],
    cta: { text: "Parkinson's Home Care", href: "/conditions/parkinsons-disease" },
  },
  {
    name: "Alzheimer's & Dementia",
    slug: "alzheimers-dementia",
    tagline: "Compassionate memory care in the comfort of home",
    description:
      "Keeping loved ones with Alzheimer's or dementia safely at home requires specialized training and patience. Our team works with both patients and family caregivers to create a safe, supportive home environment.",
    icon: "brain-circuit",
    category: "Neurological",
    relatedServices: ["skilled-nursing", "occupational-therapy", "home-health-aide", "medical-social-worker"],
    cta: { text: "Dementia Home Care", href: "/conditions/alzheimers-dementia" },
  },
  {
    name: "Multiple Sclerosis",
    slug: "multiple-sclerosis",
    tagline: "MS home care — maintaining function and independence",
    description:
      "Multiple sclerosis can present differently day to day. Our therapists and nurses help MS patients manage fatigue, maintain mobility, and adapt to changing symptoms — all from home.",
    icon: "zap-off",
    category: "Neurological",
    relatedServices: ["physical-therapy", "occupational-therapy", "speech-therapy", "skilled-nursing"],
    cta: { text: "MS Home Care", href: "/conditions/multiple-sclerosis" },
  },

  // ─── RESPIRATORY ─────────────────────────────────────────────────────────
  {
    name: "COPD",
    slug: "copd",
    tagline: "Breathing easier with expert COPD management at home",
    description:
      "COPD is a leading cause of hospital readmission. Our nurses monitor oxygen levels, teach breathing techniques, manage medications, and help patients recognize exacerbation warning signs — keeping them home and out of the hospital.",
    icon: "wind",
    category: "Respiratory",
    relatedServices: ["skilled-nursing", "chronic-disease-management", "medication-management", "physical-therapy"],
    cta: { text: "COPD Home Care", href: "/conditions/copd" },
  },
  {
    name: "Pneumonia Recovery",
    slug: "pneumonia-recovery",
    tagline: "Safe recovery from pneumonia at home",
    description:
      "After hospitalization for pneumonia, ongoing nursing monitoring helps prevent relapse and ensures medication compliance. Our nurses help patients recover completely and safely at home.",
    icon: "lungs",
    category: "Respiratory",
    relatedServices: ["skilled-nursing", "physical-therapy", "medication-management"],
    cta: { text: "Pneumonia Recovery Care", href: "/conditions/pneumonia-recovery" },
  },

  // ─── METABOLIC ────────────────────────────────────────────────────────────
  {
    name: "Diabetes",
    slug: "diabetes",
    tagline: "Diabetes management, wound care, and insulin education at home",
    description:
      "Diabetes management at home requires blood sugar monitoring, insulin administration, wound care for diabetic ulcers, and detailed self-management education. Our nurses provide all of this and more.",
    icon: "droplets",
    category: "Metabolic",
    relatedServices: ["skilled-nursing", "wound-care-management", "medication-management", "chronic-disease-management"],
    cta: { text: "Diabetes Home Care", href: "/conditions/diabetes" },
  },

  // ─── MUSCULOSKELETAL ─────────────────────────────────────────────────────
  {
    name: "Hip Fracture Recovery",
    slug: "hip-fracture-recovery",
    tagline: "Recover from a hip fracture safely at home",
    description:
      "Hip fractures are a leading cause of nursing home placement — but with the right home health support, many patients can recover at home successfully. Our physical therapists specialize in hip fracture rehabilitation.",
    icon: "bone",
    category: "Musculoskeletal",
    relatedServices: ["physical-therapy", "occupational-therapy", "skilled-nursing", "home-health-aide"],
    cta: { text: "Hip Fracture Recovery Care", href: "/conditions/hip-fracture-recovery" },
  },
  {
    name: "Joint Replacement Recovery",
    slug: "joint-replacement-recovery",
    tagline: "Faster, safer recovery after hip or knee replacement",
    description:
      "After joint replacement surgery, home-based physical therapy and nursing care leads to better outcomes than inpatient rehab for many patients. We get you moving and independent faster.",
    icon: "bone",
    category: "Musculoskeletal",
    relatedServices: ["physical-therapy", "occupational-therapy", "skilled-nursing", "post-surgical-care"],
    cta: { text: "Joint Replacement Recovery", href: "/conditions/joint-replacement-recovery" },
  },
  {
    name: "Arthritis",
    slug: "arthritis",
    tagline: "Pain management and function restoration for arthritis patients",
    description:
      "Arthritis doesn't have to mean giving up independence. Our occupational and physical therapists teach joint protection techniques, provide adaptive equipment guidance, and help patients stay active and mobile.",
    icon: "hand",
    category: "Musculoskeletal",
    relatedServices: ["physical-therapy", "occupational-therapy", "pain-management"],
    cta: { text: "Arthritis Home Care", href: "/conditions/arthritis" },
  },
  {
    name: "Chronic Pain",
    slug: "chronic-pain",
    tagline: "Managing complex pain at home",
    description:
      "Chronic pain requires a multidisciplinary approach — nursing assessment, medication management, physical therapy, and education. Our team helps patients manage pain more effectively at home.",
    icon: "shield",
    category: "Musculoskeletal",
    relatedServices: ["skilled-nursing", "physical-therapy", "pain-management", "medication-management"],
    cta: { text: "Chronic Pain Home Care", href: "/conditions/chronic-pain" },
  },

  // ─── ONCOLOGY ─────────────────────────────────────────────────────────────
  {
    name: "Cancer Recovery",
    slug: "cancer-recovery",
    tagline: "Comprehensive home care during and after cancer treatment",
    description:
      "Cancer patients face complex home care needs — wound care, IV therapy, medication management, fatigue management, and emotional support. Our team brings comprehensive cancer care home.",
    icon: "ribbon",
    category: "Oncology",
    relatedServices: ["skilled-nursing", "wound-care-management", "pain-management", "medical-social-worker", "home-health-aide"],
    cta: { text: "Cancer Recovery Home Care", href: "/conditions/cancer-recovery" },
  },
  {
    name: "Chemotherapy Support",
    slug: "chemotherapy-support",
    tagline: "Home care support during chemotherapy treatment",
    description:
      "Chemotherapy can cause side effects that make home management challenging — fatigue, nausea, infection risk, and more. Our nurses monitor for complications and provide skilled support between treatments.",
    icon: "pill",
    category: "Oncology",
    relatedServices: ["skilled-nursing", "medication-management", "home-health-aide"],
    cta: { text: "Chemo Support Home Care", href: "/conditions/chemotherapy-support" },
  },

  // ─── GENERAL RECOVERY ─────────────────────────────────────────────────────
  {
    name: "Post-Hospital Recovery",
    slug: "post-hospital-recovery",
    tagline: "The critical link between hospital discharge and full recovery",
    description:
      "The transition home from the hospital is one of the highest-risk periods for complications and readmission. Our team starts care within 24–48 hours of discharge to ensure a safe, successful recovery.",
    icon: "building",
    category: "General Recovery",
    relatedServices: ["skilled-nursing", "physical-therapy", "occupational-therapy", "medication-management"],
    cta: { text: "Post-Hospital Recovery Care", href: "/conditions/post-hospital-recovery" },
  },
  {
    name: "Post-Surgical Recovery",
    slug: "post-surgical-recovery",
    tagline: "Expert home care after any surgical procedure",
    description:
      "Whatever surgery your loved one has undergone, our nurses and therapists are skilled in post-surgical care — wound management, activity progression, medication management, and complication prevention.",
    icon: "clipboard-plus",
    category: "General Recovery",
    relatedServices: ["skilled-nursing", "post-surgical-care", "physical-therapy", "wound-care-management"],
    cta: { text: "Post-Surgical Home Care", href: "/conditions/post-surgical-recovery" },
  },
  {
    name: "Fall Recovery",
    slug: "fall-recovery",
    tagline: "Recover from a fall — and prevent the next one",
    description:
      "Falls are the leading cause of injury in older adults. Our team helps patients recover from a fall while addressing the underlying causes — weakness, balance, medication side effects, home hazards — to prevent future falls.",
    icon: "triangle-alert",
    category: "General Recovery",
    relatedServices: ["physical-therapy", "occupational-therapy", "skilled-nursing"],
    cta: { text: "Fall Recovery Home Care", href: "/conditions/fall-recovery" },
  },
  {
    name: "Age-Related Decline",
    slug: "age-related-decline",
    tagline: "Maintain independence as needs change with age",
    description:
      "As we age, strength, balance, and cognitive function can decline gradually. Home health care helps older adults stay safe and independent at home — with therapy, education, and personal care support.",
    icon: "users",
    category: "General Recovery",
    relatedServices: ["physical-therapy", "occupational-therapy", "home-health-aide", "medical-social-worker"],
    cta: { text: "Senior Care at Home", href: "/conditions/age-related-decline" },
  },
];

export const conditionCategories = [
  "Cardiovascular",
  "Neurological",
  "Respiratory",
  "Metabolic",
  "Musculoskeletal",
  "Oncology",
  "General Recovery",
];

export const allConditionSlugs = allConditions.map((c) => c.slug);

export function getConditionBySlug(slug: string) {
  return allConditions.find((c) => c.slug === slug);
}

export function getConditionsByCategory(category: string) {
  return allConditions.filter((c) => c.category === category);
}
