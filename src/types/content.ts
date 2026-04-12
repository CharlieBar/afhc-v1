// src/types/content.ts
// All Family Health Care — Content Type Definitions
// DO NOT MODIFY — this is the data contract for all content files

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>;
}

export interface CTA {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "phone";
  icon?: string;
  ariaLabel?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  icon?: string;
}

export interface HeroSection {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  phoneCTA?: CTA;
  badge?: string;
  image?: ImageAsset;
  stats?: Stat[];
  trustSignals?: string[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  link?: CTA;
}

export interface ServiceCard {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  image?: ImageAsset;
  highlights: string[];
  cta: CTA;
  category: "core" | "specialized";
  relatedConditions?: string[];
}

export interface ConditionCard {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  image?: ImageAsset;
  category: string;
  relatedServices: string[];
  cta: CTA;
}

export interface ConditionCategoryImage {
  category: string;
  image: ImageAsset;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating: number;
  condition?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image?: ImageAsset;
  specialties?: string[];
}

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorBio?: string;
  authorCredentials?: string;
  authorImage?: string;
  category: string;
  cluster: "skilled-nursing" | "caregiver" | "chronic-disease" | "home-safety" | "post-hospital";
  tags: string[];
  readTime: string;
  featuredImage?: ImageAsset;
  pillar?: string;
  relatedArticles?: string[];
  relatedServices?: string[];
  relatedConditions?: string[];
  seo: SEOMeta;
}

export interface LocationPage {
  slug: string;
  name: string;          // e.g., "Skokie"
  fullName: string;      // e.g., "Skokie, IL"
  type: "neighborhood" | "suburb";
  state: string;
  zip?: string[];
  description: string;
  population?: string;
  neighborhoods?: string[];   // sub-areas served
  nearbyLocations?: string[]; // slugs of nearby location pages
  seo: SEOMeta;
  hero: HeroSection;
  servicesIntro: {
    headline: string;
    body: string;
  };
  whyChooseLocal: {
    headline: string;
    points: { title: string; description: string }[];
  };
  faqs: FAQItem[];
  testimonials?: TestimonialItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface AccreditationBadge {
  name: string;
  description: string;
  icon: string;
  link?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cluster: string;
  publishDate: string;
  readTime: string;
  featuredImage?: ImageAsset;
  tags: string[];
}

export interface ServiceRichContent {
  overview: string[];
  whoNeeds: { icon: string; title: string; description: string }[];
  medicareCoverage: { headline: string; body: string; cta: CTA };
  faqs: FAQItem[];
  relatedServices: string[];
}

export interface ConditionRichContent {
  overview: string[];
  howWeHelp: { serviceSlug: string; serviceName: string; description: string }[];
  warningSigns: string[];
  careJourney: ProcessStep[];
  faqs: FAQItem[];
}
