// src/lib/blog.ts
// All Family Health Care — Blog Article Utility (Server-Side Only)

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorBio?: string;
  authorCredentials?: string;
  category: string;
  cluster: string;
  tags: string[];
  readTime: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  pillar?: string;
  relatedArticles?: string[];
  relatedServices?: string[];
  relatedConditions?: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  const fileNames = fs
    .readdirSync(articlesDirectory)
    .filter((f) => f.endsWith(".mdx"));
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug, frontmatter: data as ArticleFrontmatter, content };
  });
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, frontmatter: data as ArticleFrontmatter, content };
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

export function getArticlesByCluster(cluster: string): Article[] {
  return getAllArticles().filter((a) => a.frontmatter.cluster === cluster);
}
