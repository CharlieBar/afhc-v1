// src/components/schema/ArticleSchema.tsx
// All Family Health Care — Article JSON-LD Schema with Speakable

import { site } from "@/content/global/site";

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  url: string;
  image?: string;
}

export default function ArticleSchema({
  title,
  description,
  publishDate,
  author,
  url,
  image,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: publishDate,
    url,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.svg`,
      },
    },
    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: image,
          },
        }
      : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-summary", ".article-body p:first-of-type"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
