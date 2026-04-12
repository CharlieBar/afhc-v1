// src/content/pages/contact.ts
// All Family Health Care — Contact Page Content

import type { SEOMeta } from "@/types/content";

export const contactSeo: SEOMeta = {
  title: "Contact Us | Chicago Home Health | (773) 775-2588",
  description:
    "Contact All Family Health Care in Chicago. Schedule a free in-home assessment or ask questions about home health care, Medicare coverage, or our services. Call (773) 775-2588.",
  keywords: [
    "contact All Family Health Care",
    "home health care Chicago contact",
    "schedule home health assessment Chicago",
  ],
  canonical: "https://www.allfamilyhealthcare.com/contact",
  ogImage: "/images/og/contact.jpg",
};

export const contactHero = {
  eyebrow: "Get In Touch",
  headline: "We're Ready to Help — Call or Send a Message",
  subheadline:
    "No automated systems. No voicemail mazes. Real people answer our phone — and they know home health care. Call us or fill out the form and we'll respond within 24 hours.",
  primaryCTA: {
    text: "📞 Call Now: (773) 775-2588",
    href: "tel:(773)775-2588",
    variant: "phone" as const,
    ariaLabel: "Call All Family Health Care at (773) 775-2588",
  },
  badge: "Most calls answered same business day · Urgent situations handled immediately",
  image: {
    src: "/images/hero/contact.jpg",
    alt: "All Family Health Care nurse ready to take your call",
    width: 1344,
    height: 768,
  },
};

export const contactInfo = {
  phone: "(773) 775-2588",
  phoneRaw: "tel:(773)775-2588",
  email: "admin@allfhc.com",
  address: {
    street: "6413 N Kinzue Ave",
    city: "Chicago",
    state: "IL",
    zip: "60646",
    full: "6413 N Kinzue Ave, Chicago, IL 60646",
  },
  hours: [
    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
    { day: "Sunday", hours: "On-call for patients" },
    { day: "After-Hours Nursing", hours: "24/7 for active patients" },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.0!2d-87.7773!3d41.9933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zAllFamilyHealthCare!5e0!3m2!1sen!2sus!4v1",
};

export const freeAssessmentForm = {
  name: "free-assessment",
  netlifyName: "free-assessment",
  headline: "Request Your Free In-Home Assessment",
  subheadline:
    "Fill out the form below and we'll contact you within 24 hours to schedule a free in-home assessment. There's no obligation — just answers and a clear path forward.",
  fields: [
    { name: "first-name", label: "First Name", type: "text", required: true, placeholder: "First Name" },
    { name: "last-name", label: "Last Name", type: "text", required: true, placeholder: "Last Name" },
    { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "(773) 555-0000" },
    { name: "email", label: "Email Address", type: "email", required: false, placeholder: "your@email.com" },
    { name: "patient-city", label: "Patient's City / ZIP Code", type: "text", required: true, placeholder: "e.g. Skokie or 60076" },
    {
      name: "care-need",
      label: "What type of care is needed?",
      type: "select",
      required: true,
      options: [
        "Skilled Nursing",
        "Physical Therapy",
        "Occupational Therapy",
        "Speech Therapy",
        "Home Health Aide",
        "Wound Care",
        "Post-Surgical Care",
        "Multiple Services / Not Sure",
      ],
    },
    {
      name: "best-time",
      label: "Best time to call?",
      type: "select",
      required: false,
      options: ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–6pm)", "Any Time"],
    },
    {
      name: "message",
      label: "Tell us a bit about the situation",
      type: "textarea",
      required: false,
      placeholder: "Brief description of care needs, urgency, or questions...",
      rows: 4,
    },
  ],
  submitText: "Request Free Assessment",
  confirmationMessage:
    "Thank you! We received your request and will contact you within 24 hours — most requests are responded to the same business day. For immediate assistance, call (773) 775-2588.",
  trustNote: "✅ No obligation · Most services covered by Medicare · Your information is private",
};

export const contactWhyCall = {
  headline: "Why Families Call Us First",
  reasons: [
    {
      icon: "phone-call",
      title: "Real People Answer",
      description: "Our care coordinators — not a call center — answer the phone during business hours and can answer your questions immediately.",
    },
    {
      icon: "clock",
      title: "24–48 Hour Start",
      description: "In most cases, we can have a nurse at your loved one's door within 24–48 hours of your call.",
    },
    {
      icon: "dollar-sign",
      title: "Free Benefits Verification",
      description: "We verify your Medicare or insurance coverage before care begins — at no charge. No surprise bills.",
    },
    {
      icon: "heart",
      title: "No Pressure, No Obligation",
      description: "Our care coordinators are here to help you understand your options — not to make a sale. There's no commitment required.",
    },
  ],
};
