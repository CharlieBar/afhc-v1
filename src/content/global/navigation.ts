// src/content/global/navigation.ts
// All Family Health Care — Navigation Structure

export const navigation = {
  primary: [
    {
      label: "Services",
      children: [
        {
          label: "Skilled Nursing",
          href: "/services/skilled-nursing",
          description: "Expert nursing care in your home",
          icon: "stethoscope",
        },
        {
          label: "Physical Therapy",
          href: "/services/physical-therapy",
          description: "Regain strength and mobility",
          icon: "activity",
        },
        {
          label: "Occupational Therapy",
          href: "/services/occupational-therapy",
          description: "Return to daily activities safely",
          icon: "hand",
        },
        {
          label: "Speech Therapy",
          href: "/services/speech-therapy",
          description: "Communication and swallowing care",
          icon: "mic",
        },
        {
          label: "Home Health Aide",
          href: "/services/home-health-aide",
          description: "Personal care and daily assistance",
          icon: "heart",
        },
        {
          label: "Wound Care",
          href: "/services/wound-care-management",
          description: "Advanced wound healing at home",
          icon: "bandage",
        },
        {
          label: "Post-Surgical Care",
          href: "/services/post-surgical-care",
          description: "Recover safely at home after surgery",
          icon: "clipboard-plus",
        },
        {
          label: "All Services",
          href: "/services",
          description: "View our complete service list",
          icon: "grid",
        },
      ],
    },
    {
      label: "Conditions",
      children: [
        {
          label: "Stroke Recovery",
          href: "/conditions/stroke-recovery",
          description: "Comprehensive stroke rehab at home",
          icon: "brain",
        },
        {
          label: "Heart Failure",
          href: "/conditions/heart-failure",
          description: "Cardiac care and monitoring",
          icon: "heart-pulse",
        },
        {
          label: "COPD",
          href: "/conditions/copd",
          description: "Breathing and respiratory care",
          icon: "wind",
        },
        {
          label: "Diabetes",
          href: "/conditions/diabetes",
          description: "Diabetes management and education",
          icon: "droplets",
        },
        {
          label: "Alzheimer's & Dementia",
          href: "/conditions/alzheimers-dementia",
          description: "Memory care support at home",
          icon: "brain-circuit",
        },
        {
          label: "Joint Replacement Recovery",
          href: "/conditions/joint-replacement-recovery",
          description: "Hip and knee replacement rehab",
          icon: "bone",
        },
        {
          label: "All Conditions",
          href: "/conditions",
          description: "See all conditions we treat",
          icon: "list",
        },
      ],
    },
    {
      label: "Patients & Families",
      children: [
        {
          label: "What to Expect",
          href: "/patients/what-to-expect",
          description: "Your first visit and beyond",
          icon: "info",
        },
        {
          label: "Medicare Benefits",
          href: "/patients/medicare-home-health-benefits",
          description: "What Medicare covers for home health",
          icon: "dollar-sign",
        },
        {
          label: "How to Start",
          href: "/patients/how-to-start-home-health",
          description: "3 easy steps to get started",
          icon: "play-circle",
        },
        {
          label: "Caregiver Resources",
          href: "/patients/caregiver-resources",
          description: "Support for family caregivers",
          icon: "users",
        },
        {
          label: "FAQ",
          href: "/patients/faq",
          description: "Common questions answered",
          icon: "help-circle",
        },
      ],
    },
    {
      label: "For Physicians",
      href: "/referrals",
    },
    {
      label: "Locations",
      href: "/locations",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  cta: {
    text: "Call (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
    ariaLabel: "Call All Family Health Care",
  },
  secondaryCTA: {
    text: "Free Assessment",
    href: "/contact",
    variant: "primary" as const,
  },
};

export const footer = {
  tagline: "Quality Care for Every Family, Right at Home",
  description:
    "Medicare-certified and Joint Commission-accredited home health care serving Chicago and 30+ surrounding communities.",
  columns: [
    {
      heading: "Our Services",
      links: [
        { label: "Skilled Nursing", href: "/services/skilled-nursing" },
        { label: "Physical Therapy", href: "/services/physical-therapy" },
        { label: "Occupational Therapy", href: "/services/occupational-therapy" },
        { label: "Speech Therapy", href: "/services/speech-therapy" },
        { label: "Home Health Aide", href: "/services/home-health-aide" },
        { label: "Wound Care", href: "/services/wound-care-management" },
        { label: "Post-Surgical Care", href: "/services/post-surgical-care" },
        { label: "All Services →", href: "/services" },
      ],
    },
    {
      heading: "Conditions We Treat",
      links: [
        { label: "Stroke Recovery", href: "/conditions/stroke-recovery" },
        { label: "Heart Failure", href: "/conditions/heart-failure" },
        { label: "COPD", href: "/conditions/copd" },
        { label: "Diabetes", href: "/conditions/diabetes" },
        { label: "Alzheimer's & Dementia", href: "/conditions/alzheimers-dementia" },
        { label: "Parkinson's Disease", href: "/conditions/parkinsons-disease" },
        { label: "Joint Replacement", href: "/conditions/joint-replacement-recovery" },
        { label: "All Conditions →", href: "/conditions" },
      ],
    },
    {
      heading: "Patients & Families",
      links: [
        { label: "What to Expect", href: "/patients/what-to-expect" },
        { label: "Medicare Benefits", href: "/patients/medicare-home-health-benefits" },
        { label: "Insurance Coverage", href: "/patients/insurance-coverage" },
        { label: "How to Start", href: "/patients/how-to-start-home-health" },
        { label: "Caregiver Resources", href: "/patients/caregiver-resources" },
        { label: "Patient Rights", href: "/patients/patient-rights" },
        { label: "FAQ", href: "/patients/faq" },
      ],
    },
    {
      heading: "Locations",
      links: [
        { label: "Chicago", href: "/locations/chicago-home-health-care" },
        { label: "Skokie", href: "/locations/skokie-home-health-care" },
        { label: "Evanston", href: "/locations/evanston-home-health-care" },
        { label: "Park Ridge", href: "/locations/park-ridge-home-health-care" },
        { label: "Glenview", href: "/locations/glenview-home-health-care" },
        { label: "Des Plaines", href: "/locations/des-plaines-home-health-care" },
        { label: "Niles", href: "/locations/niles-home-health-care" },
        { label: "All Locations →", href: "/locations" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about/our-team" },
        { label: "Mission & Values", href: "/about/mission-values" },
        { label: "Accreditations", href: "/about/accreditations" },
        { label: "For Physicians", href: "/referrals" },
        { label: "Referral Form", href: "/referrals/referral-form" },
        { label: "Blog & Resources", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],
  bottomBar: {
    copyright: "© 2025 All Family Health Care. All rights reserved.",
    accreditations: ["Medicare Certified", "Joint Commission Accredited"],
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Patient Rights", href: "/patients/patient-rights" },
    ],
  },
};
