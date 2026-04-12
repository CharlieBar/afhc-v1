// src/content/pages/home.ts
// All Family Health Care — Homepage Content

import type { SEOMeta, HeroSection, FAQItem, TestimonialItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "All Family Health Care | Medicare-Certified Home Health in Chicago",
  description:
    "Medicare-certified home health care in Chicago. Skilled nursing, therapy & personal care delivered to your home. Joint Commission accredited. Call (773) 775-2588.",
  keywords: [
    "home health care Chicago",
    "in-home nursing care Chicago",
    "Medicare home health Chicago",
    "skilled nursing at home Chicago",
    "home health aide Chicago",
    "home health agency Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com",
  ogImage: "/images/og/home.jpg",
};

export const hero: HeroSection = {
  eyebrow: "Medicare Certified · Joint Commission Accredited · Chicago, IL",
  headline: "Professional Home Health Care So Your Loved One Can Recover at Home",
  subheadline:
    "Skilled nursing, therapy, and personal care delivered to your front door — covered by Medicare. Serving 30+ Chicago communities for over 20 years.",
  primaryCTA: {
    text: "Call (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone",
    ariaLabel: "Call All Family Health Care at (773) 775-2588",
  },
  secondaryCTA: {
    text: "Schedule Free In-Home Assessment",
    href: "/contact",
    variant: "secondary",
  },
  image: {
    src: "/images/hero/home.jpg",
    alt: "Physical therapist helping a senior patient take their first successful step with a walker in a bright Chicago living room",
    width: 1344,
    height: 768,
    priority: true,
  },
  badge: "✅ Most services fully covered by Medicare",
  stats: [
    { value: "20+", label: "Years in Chicago", icon: "calendar" },
    { value: "30+", label: "Communities Served", icon: "map-pin" },
    { value: "5,000+", label: "Patients Helped", icon: "users" },
    { value: "24/7", label: "On-Call Support", icon: "phone" },
  ],
  trustSignals: [
    "Medicare Certified",
    "Joint Commission Accredited (Gold Seal)",
    "Licensed in Illinois",
  ],
};

export const urgencyBanner = {
  text:
    "🏥 Just discharged from the hospital? We can start care within 24–48 hours. Call now:",
  phoneCTA: { text: "(773) 775-2588", href: "tel:(773)775-2588" },
};

export const whoWeServe = {
  eyebrow: "Who We Help",
  headline: "Care for Every Stage of Recovery",
  subheadline:
    "Whether your loved one just came home from the hospital or needs ongoing support managing a chronic condition — we meet them exactly where they are.",
  personas: [
    {
      icon: "heart",
      title: "Seniors Recovering at Home",
      description:
        "Help your parent or grandparent heal after surgery, illness, or a fall — without leaving the comfort of their home.",
      cta: { text: "Learn How We Help Seniors", href: "/patients/what-to-expect" },
      image: { src: "/images/personas/seniors.jpg", alt: "Active senior at home with confidence and independence" },
    },
    {
      icon: "users",
      title: "Family Caregivers",
      description:
        "You can't be there 24/7. Our team becomes your support system — keeping your loved one safe while giving you peace of mind.",
      cta: { text: "Caregiver Resources", href: "/patients/caregiver-resources" },
      image: { src: "/images/personas/caregivers.jpg", alt: "Family caregiver supported by a home health clinician" },
    },
    {
      icon: "activity",
      title: "Patients with Chronic Conditions",
      description:
        "Managing heart failure, COPD, diabetes, or Parkinson's disease requires expert, consistent care. We bring that expertise home.",
      cta: { text: "Conditions We Treat", href: "/conditions" },
      image: { src: "/images/personas/chronic.jpg", alt: "Senior managing chronic condition with nursing support" },
    },
    {
      icon: "clipboard-plus",
      title: "Post-Surgery Recovery",
      description:
        "After joint replacement, heart surgery, or any major procedure — professional home health speeds recovery and reduces readmission risk.",
      cta: { text: "Post-Surgical Care", href: "/services/post-surgical-care" },
      image: { src: "/images/personas/post-surgery.jpg", alt: "Post-surgical patient recovering with clinician support" },
    },
  ],
};

export const servicesSection = {
  eyebrow: "Our Services",
  headline: "Everything Your Loved One Needs — At Home",
  subheadline:
    "A full team of skilled professionals working together for one patient: yours.",
  cta: { text: "See All Services", href: "/services" },
  services: [
    {
      icon: "stethoscope",
      name: "Skilled Nursing",
      slug: "skilled-nursing",
      tagline: "Registered nurses visiting your home",
      description:
        "Wound care, medication management, IV therapy, health monitoring, and chronic disease education from experienced RNs.",
      highlights: ["Medication management", "Wound care", "IV therapy", "Health teaching"],
    },
    {
      icon: "activity",
      name: "Physical Therapy",
      slug: "physical-therapy",
      tagline: "Regain strength and mobility",
      description:
        "Personalized exercises to rebuild strength, restore balance, and reduce fall risk — performed in the room where recovery matters most.",
      highlights: ["Fall prevention", "Post-surgery rehab", "Strength training", "Balance therapy"],
    },
    {
      icon: "hand",
      name: "Occupational Therapy",
      slug: "occupational-therapy",
      tagline: "Return to the life you love",
      description:
        "Helping patients relearn daily activities — cooking, dressing, bathing — safely and independently in their own home.",
      highlights: ["Daily living skills", "Home safety assessment", "Adaptive equipment", "Cognitive rehab"],
    },
    {
      icon: "mic",
      name: "Speech Therapy",
      slug: "speech-therapy",
      tagline: "Communication and swallowing care",
      description:
        "For stroke survivors, Parkinson's patients, and anyone experiencing difficulty speaking, swallowing, or communicating.",
      highlights: ["Swallowing disorders", "Stroke recovery", "Voice therapy", "Cognitive communication"],
    },
    {
      icon: "heart-handshake",
      name: "Home Health Aide",
      slug: "home-health-aide",
      tagline: "Compassionate personal care",
      description:
        "Assistance with bathing, grooming, dressing, and personal hygiene — caring for the whole person with dignity.",
      highlights: ["Personal hygiene", "Bathing assistance", "Grooming", "Companionship"],
    },
    {
      icon: "bandage",
      name: "Wound Care",
      slug: "wound-care-management",
      tagline: "Advanced healing at home",
      description:
        "Professional wound assessment, cleaning, dressing changes, and healing monitoring — preventing infection and promoting recovery.",
      highlights: ["Surgical wound care", "Diabetic ulcers", "Pressure injuries", "Infection prevention"],
    },
  ],
};

export const conditionsSection = {
  eyebrow: "Conditions We Treat",
  headline: "Expert Care for Complex Conditions",
  subheadline: "Our clinical team has deep experience managing the conditions that matter most to Chicago families.",
  cta: { text: "All Conditions We Treat", href: "/conditions" },
  featured: [
    { name: "Stroke Recovery", slug: "stroke-recovery", icon: "brain" },
    { name: "Heart Failure", slug: "heart-failure", icon: "heart-pulse" },
    { name: "COPD", slug: "copd", icon: "wind" },
    { name: "Diabetes", slug: "diabetes", icon: "droplets" },
    { name: "Alzheimer's & Dementia", slug: "alzheimers-dementia", icon: "brain-circuit" },
    { name: "Parkinson's Disease", slug: "parkinsons-disease", icon: "zap" },
    { name: "Hip Fracture Recovery", slug: "hip-fracture-recovery", icon: "bone" },
    { name: "Cancer Recovery", slug: "cancer-recovery", icon: "ribbon" },
  ],
};

export const medicareSection = {
  eyebrow: "Understanding Your Benefits",
  headline: "Most Home Health Services Are Covered by Medicare",
  subheadline:
    "If your doctor orders home health care and you're homebound, Medicare Part A or B typically covers 100% of eligible home health services. No copays, no deductibles.",
  body:
    "Many families don't realize that professional skilled nursing and therapy visits at home are a covered Medicare benefit — not a luxury. We help you understand and access every benefit you're entitled to.",
  cta: {
    text: "Learn What Medicare Covers",
    href: "/patients/medicare-home-health-benefits",
    variant: "secondary" as const,
  },
  phoneCTA: {
    text: "Call to Verify Your Benefits: (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
  },
  points: [
    { icon: "check-circle", text: "No copays or coinsurance for most services" },
    { icon: "check-circle", text: "Covers skilled nursing, therapy, and aide visits" },
    { icon: "check-circle", text: "Also covered by Medicaid and most private insurance" },
    { icon: "check-circle", text: "We handle all billing and paperwork for you" },
  ],
};

export const processSection = {
  eyebrow: "Getting Started",
  headline: "Home Health Care in 3 Simple Steps",
  subheadline: "We make it easy to get professional care started — often within 24–48 hours.",
  steps: [
    {
      step: "01",
      icon: "phone-call",
      title: "Call Us or Fill Out the Form",
      description:
        "Call (773) 775-2588 or complete our free assessment request. Our care coordinators are ready to answer all your questions — with no pressure or commitment required.",
    },
    {
      step: "02",
      icon: "clipboard-check",
      title: "Free In-Home Assessment",
      description:
        "A registered nurse visits your home to assess your loved one's needs, verify insurance coverage, and create a personalized care plan — at no charge.",
    },
    {
      step: "03",
      icon: "heart",
      title: "Care Begins",
      description:
        "Your dedicated care team starts visits — usually within 24–48 hours. We coordinate with your doctor and keep your family informed every step of the way.",
    },
  ],
  cta: {
    text: "Schedule Your Free Assessment",
    href: "/contact",
    variant: "primary" as const,
  },
  phoneCTA: {
    text: "Or Call Now: (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
  },
};

export const whyChooseSection = {
  eyebrow: "Why Choose All Family",
  headline: "Chicago Families Have Trusted Us for Over 20 Years",
  subheadline: "We're not a call center or a staffing agency. We're your neighbors — a locally owned home health agency built on relationships.",
  features: [
    {
      icon: "shield-check",
      title: "Medicare Certified & Joint Commission Accredited",
      description:
        "The highest accreditation in home health care — the same Gold Seal standard used by the country's best hospitals.",
    },
    {
      icon: "map-pin",
      title: "Local, Locally Owned, Chicago-Based",
      description:
        "We're based in Chicago's Northwest Side and have served the same families and neighborhoods for decades.",
    },
    {
      icon: "clock",
      title: "24/7 On-Call Nursing Support",
      description:
        "Questions don't wait for business hours. Our nurses are available by phone around the clock for our patients and their families.",
    },
    {
      icon: "users",
      title: "Consistent, Dedicated Care Team",
      description:
        "We assign the same nurses and therapists to each patient — building trust and catching changes in condition early.",
    },
    {
      icon: "file-check",
      title: "We Handle All Insurance & Medicare Paperwork",
      description:
        "Our billing team takes care of everything — from obtaining physician orders to filing with Medicare so your family doesn't have to.",
    },
    {
      icon: "heart",
      title: "Care Coordinator Assigned to Every Family",
      description:
        "One dedicated point of contact who knows your family's situation, answers questions, and coordinates your entire care team.",
    },
  ],
};

export const testimonialsSection = {
  eyebrow: "Patient Stories",
  headline: "What Chicago Families Say About Our Care",
  subheadline: "Real families. Real outcomes. Real peace of mind.",
  testimonials: [
    {
      quote:
        "After my father's stroke, we were terrified about bringing him home. The team from All Family made the transition completely manageable. His nurse was at our door within 24 hours of discharge. I can't thank them enough.",
      author: "Maria K.",
      role: "Daughter of patient",
      location: "Sauganash, Chicago",
      rating: 5,
      condition: "Stroke Recovery",
    },
    {
      quote:
        "My mother has COPD and heart failure. Having a skilled nurse visit twice a week has kept her out of the hospital for over a year. Before All Family, she was admitted three times in one year. The difference has been remarkable.",
      author: "James T.",
      role: "Son of patient",
      location: "Skokie, IL",
      rating: 5,
      condition: "COPD & Heart Failure",
    },
    {
      quote:
        "I was skeptical at first — I thought home health was for people who couldn't get to a clinic. But the physical therapist who came after my hip replacement was outstanding. I recovered faster at home than I would have at a rehab facility.",
      author: "Dorothy M.",
      role: "Patient",
      location: "Park Ridge, IL",
      rating: 5,
      condition: "Hip Replacement Recovery",
    },
    {
      quote:
        "As a physician, I refer patients to All Family regularly. They communicate back to me consistently, manage complex patients exceptionally well, and I've never had a concern about patient safety. They're my first call for home health.",
      author: "Dr. Robert S.",
      role: "Internal Medicine, Chicago",
      location: "Edgebrook, Chicago",
      rating: 5,
      condition: "Physician Referral",
    },
  ] satisfies TestimonialItem[],
};

export const locationsSection = {
  eyebrow: "Where We Serve",
  headline: "Home Health Care Across Chicago & the North Shore",
  subheadline: "We serve 30+ communities on Chicago's North and Northwest Sides.",
  cta: { text: "See All Service Areas", href: "/locations" },
  featured: [
    { name: "Chicago", slug: "chicago-home-health-care" },
    { name: "Skokie", slug: "skokie-home-health-care" },
    { name: "Evanston", slug: "evanston-home-health-care" },
    { name: "Park Ridge", slug: "park-ridge-home-health-care" },
    { name: "Des Plaines", slug: "des-plaines-home-health-care" },
    { name: "Glenview", slug: "glenview-home-health-care" },
    { name: "Niles", slug: "niles-home-health-care" },
    { name: "Morton Grove", slug: "morton-grove-home-health-care" },
    { name: "Lincolnwood", slug: "lincolnwood-home-health-care" },
  ],
};

export const blogTeaser = {
  eyebrow: "Resources & Education",
  headline: "Guides for Patients, Families & Caregivers",
  subheadline:
    "Whether you're caring for a parent, managing your own recovery, or trying to understand Medicare — our guides are written by clinical experts to help real families make confident decisions.",
  cta: { text: "Read All Guides & Articles", href: "/blog" },
  featured: [
    {
      title: "The Complete Guide to Home Health Care",
      slug: "ultimate-guide-home-health-care",
      category: "Getting Started",
      readTime: "12 min read",
    },
    {
      title: "What Medicare Actually Covers for Home Health",
      slug: "medicare-home-health-benefits-explained",
      category: "Medicare Guides",
      readTime: "8 min read",
    },
    {
      title: "The Family Caregiver Survival Guide",
      slug: "family-caregiver-survival-guide",
      category: "Caregiver Support",
      readTime: "15 min read",
    },
  ],
};

export const finalCTA = {
  eyebrow: "Ready to Get Started?",
  headline: "Your Loved One Deserves to Heal at Home",
  subheadline:
    "Call us today and a care coordinator will answer your questions — no pressure, no commitment. We'll help you understand your options and benefits.",
  primaryCTA: {
    text: "📞 Call (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
    ariaLabel: "Call All Family Health Care at (773) 775-2588",
  },
  secondaryCTA: {
    text: "Schedule Free In-Home Assessment",
    href: "/contact",
    variant: "secondary" as const,
  },
  trustLine: "Medicare Certified · Joint Commission Accredited · Licensed in Illinois · Serving Chicago 20+ Years",
};

export const faqs: FAQItem[] = [
  {
    question: "Does Medicare cover home health care?",
    answer:
      "Yes — if your doctor orders home health services and you qualify as homebound, Medicare Part A and Part B typically cover 100% of skilled nursing, physical therapy, occupational therapy, speech therapy, and home health aide visits. There are no copays or deductibles for most home health services under Medicare. Call us at (773) 775-2588 and we'll verify your specific coverage for free.",
    category: "Medicare",
  },
  {
    question: "How quickly can care start after a hospital discharge?",
    answer:
      "In most cases, we can have a nurse at your door within 24–48 hours of discharge. If your loved one's situation is urgent, call us directly at (773) 775-2588 and we'll do everything we can to start same-day or next-day.",
    category: "Getting Started",
  },
  {
    question: "What areas of Chicago do you serve?",
    answer:
      "We serve Chicago's North and Northwest Sides — including Edgebrook, Sauganash, Jefferson Park, Norwood Park, Lincoln Square, Rogers Park, and many more neighborhoods — as well as suburbs including Skokie, Evanston, Park Ridge, Des Plaines, Glenview, Niles, Morton Grove, and Lincolnwood. Visit our Locations page for the full list.",
    category: "Service Area",
  },
  {
    question: "Do I need a doctor's order to start home health care?",
    answer:
      "Yes, Medicare-covered home health care requires a physician's order. However, if your parent or loved one was recently hospitalized, the discharge team typically handles this. If you're calling from home, we can help coordinate with your physician to get the order placed quickly.",
    category: "Getting Started",
  },
  {
    question: "What's the difference between home health care and home care?",
    answer:
      "Home health care (what we provide) is skilled medical care — performed by licensed nurses, physical therapists, occupational therapists, and speech therapists. It requires a doctor's order and is covered by Medicare. Home care (or non-medical home care) is non-clinical assistance like companionship, cooking, and housekeeping. We provide the skilled medical side.",
    category: "About Our Services",
  },
  {
    question: "Will my parent always have the same nurse?",
    answer:
      "We make every effort to assign consistent caregivers to each patient. Familiar faces build trust and allow our clinicians to notice small changes in condition early — which can prevent hospitalizations. While scheduling sometimes requires coverage, we always prioritize consistency.",
    category: "About Our Services",
  },
];
