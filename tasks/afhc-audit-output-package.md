# AFHC Audit Output Package

## 1. Corrected `src/content/global/site.ts` NAP block

```ts
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
};
```

## 2. `generateMetadata` templates

### `/services/[slug]`

```ts
import type { Metadata } from "next";
import { allServiceSlugs, getServiceBySlug } from "@/content/services";
import { getServiceRichContent } from "@/content/services/rich";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const rich = getServiceRichContent(slug);

  if (!service) {
    return {
      title: "Service Not Found | All Family Health Care Chicago",
      description:
        "The requested home health service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/services/${service.slug}`;
  const title = `${service.name} at Home in Chicago | All Family Health Care`;
  const description =
    rich?.medicareCoverage?.body
      ? `${service.name} at home in Chicago. ${rich.medicareCoverage.body} Call (773) 775-2588.`
      : `${service.name} at home in Chicago from All Family Health Care. Medicare-covered home health services. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: [
      service.name,
      `${service.name} Chicago`,
      "Chicago home health",
      "Medicare home health Chicago",
      ...service.highlights.slice(0, 4),
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [
        {
          url: `${service.image?.src ?? "/images/og/services.jpg"}`,
          width: 1200,
          height: 630,
          alt: service.image?.alt ?? `${service.name} home health care in Chicago`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image?.src ?? "/images/og/services.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

### `/conditions/[slug]`

```ts
import type { Metadata } from "next";
import { allConditionSlugs, getConditionBySlug } from "@/content/conditions";
import { getConditionRichContent } from "@/content/conditions/rich";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allConditionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  const rich = getConditionRichContent(slug);

  if (!condition) {
    return {
      title: "Condition Not Found | All Family Health Care Chicago",
      description:
        "The requested condition page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/conditions/${condition.slug}`;
  const title = `Home Health Care for ${condition.name} in Chicago | All Family Health Care`;
  const description =
    rich?.overview?.[0]
      ? `Home health care for ${condition.name} in Chicago. ${rich.overview[0]} Call (773) 775-2588.`
      : `${condition.name} home health care in Chicago from All Family Health Care. Skilled nursing and therapy at home. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: [
      condition.name,
      `${condition.name} Chicago`,
      "Chicago home health",
      "Medicare home health Chicago",
      ...condition.relatedServices,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [
        {
          url: "/images/og/conditions.jpg",
          width: 1200,
          height: 630,
          alt: `${condition.name} home health care in Chicago`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/conditions.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

### `/locations/[slug]`

```ts
import type { Metadata } from "next";
import { allLocationSlugs, locations, type LocationSlug } from "@/content/locations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allLocationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations[slug as LocationSlug];

  if (!location) {
    return {
      title: "Location Not Found | All Family Health Care Chicago",
      description:
        "The requested location page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical =
    location.seo.canonical ??
    `https://www.allfamilyhealthcare.com/locations/${location.slug}`;

  const title =
    location.seo.title ||
    `Home Health Care in ${location.name}, Chicago | All Family Health Care`;

  const description =
    location.seo.description ||
    `Home health care in ${location.name}, Chicago from All Family Health Care. Skilled nursing, therapy, and personal care at home. Call (773) 775-2588.`;

  return {
    title,
    description,
    keywords: location.seo.keywords ?? [
      `home health care ${location.name}`,
      `${location.name} home health`,
      "Chicago home health",
      "Medicare home health Chicago",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [
        {
          url: "/images/og/locations.jpg",
          width: 1200,
          height: 630,
          alt: `Home health care in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/locations.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

### `/blog/[slug]`

```ts
import type { Metadata } from "next";
import { getAllArticles, getArticleBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | All Family Health Care Blog",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://www.allfamilyhealthcare.com/blog/${article.slug}`;
  const title =
    article.frontmatter.seo?.title ??
    `${article.frontmatter.title} | All Family Health Care Blog`;

  const description =
    article.frontmatter.seo?.description ?? article.frontmatter.description;

  const image =
    article.frontmatter.featuredImage?.src ?? "/images/og/blog.jpg";

  return {
    title,
    description,
    keywords:
      article.frontmatter.seo?.keywords ??
      [
        article.frontmatter.category,
        article.frontmatter.cluster,
        "Chicago home health",
        ...article.frontmatter.tags,
      ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: "All Family Health Care",
      url: canonical,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.frontmatter.title,
        },
      ],
      publishedTime: article.frontmatter.publishDate,
      modifiedTime:
        article.frontmatter.updatedDate ?? article.frontmatter.publishDate,
      authors: [article.frontmatter.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

## 3. Complete redirect map for `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      {
        source: "/skilled-nursing-chicago",
        destination: "/services/skilled-nursing",
        permanent: true,
      },
      {
        source: "/skilled-nursing-chicago/",
        destination: "/services/skilled-nursing",
        permanent: true,
      },
      {
        source: "/physical-therapy-at-home",
        destination: "/services/physical-therapy",
        permanent: true,
      },
      {
        source: "/physical-therapy-at-home/",
        destination: "/services/physical-therapy",
        permanent: true,
      },
      {
        source: "/physician-resources",
        destination: "/referrals/physician-resources",
        permanent: true,
      },
      {
        source: "/physician-resources/",
        destination: "/referrals/physician-resources",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/patients/faq",
        permanent: true,
      },
      {
        source: "/faqs/",
        destination: "/patients/faq",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about/why-choose",
        destination: "/about/why-choose-all-family",
        permanent: true,
      },
      {
        source: "/about/why-choose/",
        destination: "/about/why-choose-all-family",
        permanent: true,
      },
      {
        source: "/patients/how-to-start",
        destination: "/patients/how-to-start-home-health",
        permanent: true,
      },
      {
        source: "/patients/how-to-start/",
        destination: "/patients/how-to-start-home-health",
        permanent: true,
      },
      {
        source: "/patients/insurance",
        destination: "/patients/insurance-coverage",
        permanent: true,
      },
      {
        source: "/patients/insurance/",
        destination: "/patients/insurance-coverage",
        permanent: true,
      },
      {
        source: "/patients/medicare",
        destination: "/patients/medicare-home-health-benefits",
        permanent: true,
      },
      {
        source: "/patients/medicare/",
        destination: "/patients/medicare-home-health-benefits",
        permanent: true,
      },
      {
        source: "/services/wound-care",
        destination: "/services/wound-care-management",
        permanent: true,
      },
      {
        source: "/services/wound-care/",
        destination: "/services/wound-care-management",
        permanent: true,
      },
      {
        source: "/services/",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/conditions/",
        destination: "/conditions",
        permanent: true,
      },
      {
        source: "/locations/",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/patients/",
        destination: "/patients",
        permanent: true,
      },
      {
        source: "/referrals/",
        destination: "/referrals",
        permanent: true,
      },
      {
        source: "/resources/",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service/",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/accessibility/",
        destination: "/accessibility",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

## 4. Exact schema mount points and props

### `ServiceSchema`

- File: `src/app/services/[slug]/page.tsx`
- Props:

```tsx
<ServiceSchema
  name={service.name}
  description={service.description}
  url={`https://www.allfamilyhealthcare.com/services/${service.slug}`}
/>
```

### `FAQSchema`

- File: `src/app/services/[slug]/page.tsx`

```tsx
<FAQSchema items={[...(richContent?.faqs ?? []), ...sharedServiceFAQs]} />
```

- File: `src/app/conditions/[slug]/page.tsx`

```tsx
<FAQSchema items={richContent?.faqs ?? []} />
```

- File: `src/app/locations/[slug]/page.tsx`

```tsx
<FAQSchema items={location.faqs} />
```

- File: `src/app/patients/faq/page.tsx`

```tsx
<FAQSchema items={allFAQs} />
```

### `ArticleSchema`

- File: `src/app/blog/[slug]/page.tsx`

```tsx
<ArticleSchema
  title={frontmatter.title}
  description={frontmatter.description}
  publishDate={frontmatter.publishDate}
  author={`${frontmatter.author}${frontmatter.authorCredentials ? `, ${frontmatter.authorCredentials}` : ""}`}
  url={`https://www.allfamilyhealthcare.com/blog/${article.slug}`}
  image={frontmatter.featuredImage?.src}
/>
```

### `BreadcrumbSchema`

- File: `src/app/services/[slug]/page.tsx`

```tsx
<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
    { name: "Services", url: "https://www.allfamilyhealthcare.com/services" },
    { name: service.name, url: `https://www.allfamilyhealthcare.com/services/${service.slug}` },
  ]}
/>
```

- File: `src/app/conditions/[slug]/page.tsx`

```tsx
<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
    { name: "Conditions", url: "https://www.allfamilyhealthcare.com/conditions" },
    { name: condition.name, url: `https://www.allfamilyhealthcare.com/conditions/${condition.slug}` },
  ]}
/>
```

- File: `src/app/locations/[slug]/page.tsx`

```tsx
<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
    { name: "Locations", url: "https://www.allfamilyhealthcare.com/locations" },
    { name: location.name, url: `https://www.allfamilyhealthcare.com/locations/${location.slug}` },
  ]}
/>
```

- File: `src/app/blog/[slug]/page.tsx`

```tsx
<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://www.allfamilyhealthcare.com/" },
    { name: "Blog", url: "https://www.allfamilyhealthcare.com/blog" },
    { name: frontmatter.title, url: `https://www.allfamilyhealthcare.com/blog/${article.slug}` },
  ]}
/>
```

## 5. Corrected `LocalBusinessSchema.tsx` JSON-LD object

```ts
const schema = {
  "@context": "https://schema.org",
  "@id": "https://www.allfamilyhealthcare.com/#organization",
  "@type": ["LocalBusiness", "MedicalBusiness", "HomeHealthCare"],
  name: "All Family Health Care",
  url: "https://www.allfamilyhealthcare.com",
  telephone: "(773) 775-2588",
  email: "admin@allfhc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6413 N Kinzue Ave, Suite 2",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60646",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9967,
    longitude: -87.7476,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  hasCredential: [
    "Joint Commission Accreditation",
    "Medicare Certification",
  ],
  areaServed: [
    { "@type": "City", name: "Edgebrook" },
    { "@type": "City", name: "Sauganash" },
    { "@type": "City", name: "Jefferson Park" },
    { "@type": "City", name: "Norwood Park" },
    { "@type": "City", name: "Forest Glen" },
    { "@type": "City", name: "Lincoln Square" },
    { "@type": "City", name: "Ravenswood" },
    { "@type": "City", name: "Rogers Park" },
    { "@type": "City", name: "Andersonville" },
    { "@type": "City", name: "Uptown" },
    { "@type": "City", name: "Lincoln Park" },
    { "@type": "City", name: "Lakeview" },
    { "@type": "City", name: "Irving Park" },
    { "@type": "City", name: "Portage Park" },
    { "@type": "City", name: "Dunning" },
    { "@type": "City", name: "Montclare" },
    { "@type": "City", name: "Belmont Cragin" },
    { "@type": "City", name: "Hermosa" },
    { "@type": "City", name: "Humboldt Park" },
    { "@type": "City", name: "Park Ridge" },
    { "@type": "City", name: "Skokie" },
    { "@type": "City", name: "Des Plaines" },
    { "@type": "City", name: "Evanston" },
    { "@type": "City", name: "Glenview" },
    { "@type": "City", name: "Niles" },
    { "@type": "City", name: "Morton Grove" },
    { "@type": "City", name: "Lincolnwood" },
    { "@type": "City", name: "Rosemont" },
    { "@type": "City", name: "Harwood Heights" },
    { "@type": "City", name: "Elmwood Park" },
    { "@type": "City", name: "Chicago" },
  ],
  sameAs: [
    "https://www.google.com/maps/",
  ],
};
```
