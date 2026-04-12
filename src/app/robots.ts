// src/app/robots.ts
// All Family Health Care — robots.txt generation

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.allfamilyhealthcare.com/sitemap.xml",
  };
}
