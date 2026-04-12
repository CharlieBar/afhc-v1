// src/content/global/site.ts
// All Family Health Care — Global Business Information
// DO NOT MODIFY — source of truth for all business data

export const site = {
  name: "All Family Health Care",
  shortName: "All Family",
  tagline: "Quality Care for Every Family, Right at Home",
  description:
    "Medicare-certified, Joint Commission-accredited home health care in Chicago. Skilled nursing, therapy, and personal care for 30+ communities. Call (773) 775-2588.",
  url: "https://www.allfamilyhealthcare.com",
  phone: "(773) 775-2588",
  phoneRaw: "tel:(773)775-2588",
  phoneDisplay: "(773) 775-2588",
  email: "admin@allfhc.com",
  address: {
    street: "6413 N Kinzue Ave, Suite 2",
    city: "Chicago",
    state: "IL",
    zip: "60646",
    full: "6413 N Kinzue Ave, Suite 2, Chicago, IL 60646",
  },
  hours: [
    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
    { day: "Sunday", hours: "On-call for emergencies" },
    { day: "24/7 On-Call Nursing", hours: "Always available for patients" },
  ],
  social: {
    facebook: "https://facebook.com/allfamilyhealthcare",
    linkedin: "https://linkedin.com/company/all-family-health-care",
    google: "https://g.page/allfamilyhealthcare",
  },
  accreditations: [
    {
      name: "Medicare Certified",
      description:
        "Fully certified by the Centers for Medicare & Medicaid Services (CMS)",
      icon: "shield-check",
    },
    {
      name: "Joint Commission Accredited",
      description: "Gold Seal of Approval from The Joint Commission",
      icon: "award",
    },
  ],
  stats: [
    { value: "20+", label: "Years Serving Chicago" },
    { value: "30+", label: "Communities Served" },
    { value: "5,000+", label: "Patients Cared For" },
    { value: "100%", label: "Medicare Certified" },
  ],
  serviceAreas: [
    // Chicago Neighborhoods
    "Edgebrook",
    "Sauganash",
    "Jefferson Park",
    "Norwood Park",
    "Forest Glen",
    "Lincoln Square",
    "Ravenswood",
    "Rogers Park",
    "Andersonville",
    "Uptown",
    "Lincoln Park",
    "Lakeview",
    "Irving Park",
    "Portage Park",
    "Dunning",
    "Montclare",
    "Belmont Cragin",
    "Hermosa",
    "Humboldt Park",
    // Suburbs
    "Park Ridge",
    "Skokie",
    "Des Plaines",
    "Evanston",
    "Glenview",
    "Niles",
    "Morton Grove",
    "Lincolnwood",
    "Rosemont",
    "Harwood Heights",
    "Elmwood Park",
  ],
};

export const phoneCTA = {
  text: "Call (773) 775-2588",
  href: "tel:(773)775-2588",
  variant: "phone" as const,
  ariaLabel: "Call All Family Health Care at (773) 775-2588",
};

export const primaryCTA = {
  text: "Schedule Free Assessment",
  href: "/contact",
  variant: "primary" as const,
};

export const referralCTA = {
  text: "Refer a Patient",
  href: "/referrals/referral-form",
  variant: "secondary" as const,
};
