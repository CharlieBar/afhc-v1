// src/app/sitemap.ts
// All Family Health Care — XML Sitemap
// Next.js App Router sitemap generation

import type { MetadataRoute } from "next";
import { allServiceSlugs } from "@/content/services/index";
import { allConditionSlugs } from "@/content/conditions/index";
import { getAllArticles } from "@/lib/blog";

// Location slugs — all 31 location pages
const locationSlugs = [
  "chicago-home-health-care",
  "edgebrook-home-health-care",
  "sauganash-home-health-care",
  "jefferson-park-home-health-care",
  "norwood-park-home-health-care",
  "forest-glen-home-health-care",
  "lincoln-square-home-health-care",
  "ravenswood-home-health-care",
  "rogers-park-home-health-care",
  "andersonville-home-health-care",
  "uptown-home-health-care",
  "lincoln-park-home-health-care",
  "lakeview-home-health-care",
  "irving-park-home-health-care",
  "portage-park-home-health-care",
  "dunning-home-health-care",
  "montclare-home-health-care",
  "belmont-cragin-home-health-care",
  "hermosa-home-health-care",
  "humboldt-park-home-health-care",
  "park-ridge-home-health-care",
  "skokie-home-health-care",
  "des-plaines-home-health-care",
  "evanston-home-health-care",
  "glenview-home-health-care",
  "niles-home-health-care",
  "morton-grove-home-health-care",
  "lincolnwood-home-health-care",
  "rosemont-home-health-care",
  "harwood-heights-home-health-care",
  "elmwood-park-home-health-care",
];

const BASE_URL = "https://www.allfamilyhealthcare.com";

function url(path: string): string {
  return `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // ── Homepage ──────────────────────────────────────────────────────────────
  entries.push({
    url: url("/"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  });

  // ── About hub + sub-pages ────────────────────────────────────────────────
  entries.push({
    url: url("/about"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  });

  for (const slug of [
    "our-story",
    "our-team",
    "mission-values",
    "accreditations",
    "why-choose-all-family",
  ]) {
    entries.push({
      url: url(`/about/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Services hub + detail pages ──────────────────────────────────────────
  entries.push({
    url: url("/services"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  });

  for (const slug of allServiceSlugs) {
    entries.push({
      url: url(`/services/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // ── Conditions hub + detail pages ────────────────────────────────────────
  entries.push({
    url: url("/conditions"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  });

  for (const slug of allConditionSlugs) {
    entries.push({
      url: url(`/conditions/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // ── Locations hub + detail pages ─────────────────────────────────────────
  entries.push({
    url: url("/locations"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  });

  for (const slug of locationSlugs) {
    entries.push({
      url: url(`/locations/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // ── Patients hub + sub-pages ─────────────────────────────────────────────
  entries.push({
    url: url("/patients"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  });

  for (const slug of [
    "what-to-expect",
    "medicare-home-health-benefits",
    "insurance-coverage",
    "how-to-start-home-health",
    "caregiver-resources",
    "faq",
    "patient-rights",
  ]) {
    entries.push({
      url: url(`/patients/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Referrals hub + sub-pages ────────────────────────────────────────────
  entries.push({
    url: url("/referrals"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  });

  for (const slug of [
    "how-to-refer",
    "referral-form",
    "physician-resources",
    "contact-referral-team",
  ]) {
    entries.push({
      url: url(`/referrals/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Blog hub + category pages ────────────────────────────────────────────
  entries.push({
    url: url("/blog"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  });

  for (const category of [
    "senior-health",
    "caregiver-support",
    "home-recovery",
    "chronic-conditions",
    "home-safety",
    "medicare-guides",
  ]) {
    entries.push({
      url: url(`/blog/${category}`),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // ── Blog articles (dynamic) ─────────────────────────────────────────────
  const articles = getAllArticles();
  for (const article of articles) {
    entries.push({
      url: url(`/blog/${article.slug}`),
      lastModified: new Date(article.frontmatter.publishDate ?? new Date()),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // ── Resources hub + sub-pages ────────────────────────────────────────────
  entries.push({
    url: url("/resources"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  });

  for (const slug of [
    "patient-guides",
    "caregiver-guides",
    "home-safety-checklist",
  ]) {
    entries.push({
      url: url(`/resources/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // ── Contact ───────────────────────────────────────────────────────────────
  entries.push({
    url: url("/contact"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  });

  // ── Legal pages ───────────────────────────────────────────────────────────
  for (const slug of ["privacy-policy", "terms-of-service", "accessibility"]) {
    entries.push({
      url: url(`/${slug}`),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  return entries;
}
