# All Family Health Care — Project Overview

## About the Business

**All Family Health Care** is a Medicare-certified, Joint Commission-accredited home health agency serving Chicago's North and Northwest Sides and surrounding suburbs. Based in Edgebrook (6413 N Kinzue Ave, Chicago, IL 60646), the agency has provided skilled nursing, therapy, and personal care to 5,000+ patients across 31 communities for over 20 years.

**Phone:** (773) 775-2588
**Website:** https://www.allfamilyhealthcare.com

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| UI | React 19.2.3 |
| Styling | Tailwind CSS v4 + Typography plugin |
| Language | TypeScript 5 |
| Blog | MDX with gray-matter frontmatter parsing |
| Animation | Framer Motion 12.36.0 |
| Icons | Lucide React 0.577.0 |
| Fonts | Syne (headings), IBM Plex Sans (body), IBM Plex Mono (labels) |
| Deployment | GitHub → Netlify (auto-deploy on push to `main`, Node 20) |
| Image Gen | ComfyUI with z_image_turbo model (all-family-V4 style guide) |

---

## Design System

### Color Palette (CSS Custom Properties)

| Token | Hex | Usage |
|-------|-----|-------|
| `--electric` | `#1847F0` | Primary brand blue |
| `--accent` | `#0FC4E8` | Accent teal |
| `--lime` | `#A8E000` | CTA highlight |
| `--charcoal` | `#0D1630` | Headings |
| `--body` | `#3D4966` | Body text |
| `--muted` | `#8892AA` | Secondary text |
| `--cta-red` | `#DC2626` | Urgent CTAs |
| `--bg` | `#F4F6FB` | Page background |
| `--surface` | `#FFFFFF` | Card backgrounds |
| `--surface-2` | `#EEF1F8` | Alternate surfaces |

### Typography

- **Syne** (400/600/700/800) — headings, display text
- **IBM Plex Sans** (300/400/500/600) — body copy
- **IBM Plex Mono** (400/500) — labels, tags, metadata

---

## Architecture

### Route Map (111 Static Pages)

| Section | Routes | Description |
|---------|--------|-------------|
| Homepage | 1 | Full-page composition of 13 section components |
| Services | 14 | Hub + 12 dynamic `/services/[slug]` pages + 1 hub page |
| Conditions | 22 | Hub + 20 dynamic `/conditions/[slug]` pages + 1 hub page |
| Locations | 33 | Hub + 31 dynamic `/locations/[slug]` pages + 1 hub page |
| Blog | 14 | Hub + 6 category hubs + 5 articles via `/blog/[slug]` + dynamic |
| About | 6 | Hub + our-story, our-team, mission-values, accreditations, why-choose |
| Patients | 8 | Hub + what-to-expect, how-to-start, insurance, medicare, caregiver-resources, faq, patient-rights |
| Referrals | 5 | Hub + how-to-refer, referral-form, physician-resources, contact-referral-team |
| Resources | 4 | Hub + patient-guides, caregiver-guides, home-safety-checklist |
| Contact | 1 | Contact info + free assessment form |
| Legal | 3 | Privacy policy, terms of service, accessibility |
| SEO | 2 | `sitemap.xml`, `robots.txt` |

### Content Architecture

All content lives in `src/content/` as TypeScript modules (not markdown, except blog articles):

```
src/content/
├── global/
│   ├── site.ts           # Business info, phone, address, hours, stats, service areas
│   └── navigation.ts     # Header nav items + footer columns
├── pages/
│   ├── home.ts           # Homepage sections (hero, who-we-serve, etc.)
│   ├── about.ts          # About hub
│   ├── blog.ts           # Blog hub
│   ├── contact.ts        # Contact page + form config
│   ├── patients.ts       # Patients hub
│   ├── referrals.ts      # Referrals hub
│   └── resources.ts      # Resources hub
├── services/
│   ├── index.ts          # 12 services with metadata, icons, images, CTAs
│   └── rich.ts           # Rich content (overview, whoNeeds, FAQs per service)
├── conditions/
│   ├── index.ts          # 20 conditions across 7 categories
│   └── rich.ts           # Rich content per condition
├── locations/
│   └── index.ts          # 31 location pages (20 neighborhoods + 11 suburbs)
├── articles/
│   └── *.mdx             # 5 blog articles with frontmatter
└── shared/
    └── testimonials-pool.ts  # Reusable testimonials
```

### Type System (`src/types/content.ts`)

18 core interfaces define the data contract:

- `SEOMeta` — title, description, keywords, canonical, OG image
- `CTA` — call-to-action with text, href, variant, icon
- `ImageAsset` — src, alt, width, height, priority
- `HeroSection` — eyebrow, headline, subheadline, CTAs, badge, image, stats
- `ServiceCard` — slug, tagline, highlights, category, image, related services
- `ConditionCard` — slug, tagline, category, related services, image
- `LocationPage` — hero, services intro, why choose local, FAQs
- `ArticleMeta` — author, category, cluster, tags, readTime, featured image
- `TestimonialItem` — quote, author, role, rating, condition
- Plus: `Stat`, `FeatureItem`, `ProcessStep`, `FAQItem`, `TeamMember`, `NavItem`, `FooterColumn`, `AccreditationBadge`

### Component Library

```
src/components/
├── sections/       # 13 page-section components
│   ├── Hero.tsx              # Responsive hero with optional image (2-col at lg+)
│   ├── ServiceGrid.tsx       # Service cards with optional image bands
│   ├── ConditionGrid.tsx     # Condition tag cloud
│   ├── LocationGrid.tsx      # Location card grid
│   ├── WhoWeServe.tsx        # Patient persona cards with images
│   ├── BlogTeaser.tsx        # Featured blog articles
│   ├── TestimonialSection.tsx # Patient testimonials carousel
│   ├── FAQAccordion.tsx      # Collapsible Q&A sections
│   ├── ProcessSteps.tsx      # Step-by-step process display
│   ├── MedicareSection.tsx   # Medicare coverage explainer
│   ├── WhyChooseSection.tsx  # Differentiators grid
│   ├── TrustBar.tsx          # Scrolling trust signals
│   └── CTAStrip.tsx          # Full-width CTA banner
├── layout/         # 3 layout components
│   ├── Header.tsx            # Nav header with dropdowns + mobile toggle
│   ├── Footer.tsx            # Multi-column footer
│   └── MobileNav.tsx         # Slide-out mobile navigation
├── ui/             # 3 utility components
│   ├── Breadcrumbs.tsx       # Breadcrumb navigation
│   ├── PhoneButton.tsx       # Phone CTA (multiple variants)
│   └── AccreditationBadge.tsx
├── forms/          # 4 form components (frontend only — no API routes)
│   ├── ContactForm.tsx
│   ├── FreeAssessmentForm.tsx
│   ├── ReferralForm.tsx
│   └── CaregiverForm.tsx
└── schema/         # 5 JSON-LD structured data components
    ├── LocalBusinessSchema.tsx
    ├── ServiceSchema.tsx
    ├── FAQSchema.tsx
    ├── ArticleSchema.tsx
    └── BreadcrumbSchema.tsx
```

### Utility Libraries (`src/lib/`)

| File | Purpose |
|------|---------|
| `fonts.ts` | Google Fonts configuration (Syne, IBM Plex Sans, IBM Plex Mono) |
| `utils.ts` | `cn()` — Tailwind class merging via clsx + tailwind-merge |
| `blog.ts` | Server-side MDX parsing: `getAllArticles()`, `getArticleBySlug()`, `getArticlesByCategory()` |

---

## Image Library

45 images generated with ComfyUI using the **all-family-V4 "Breakthrough Moment"** style — clean crisp clinical-homecare realism with cobalt blue scrubs, cool light backgrounds, and dynamic recovery scenes.

| Tier | Category | Count | Dimensions | Location |
|------|----------|-------|-----------|----------|
| 1 | Blog featured | 5 | 1200x800 | `public/images/blog/` |
| 2 | Page heroes | 10 | 1344x768 | `public/images/hero/` |
| 3 | Service details | 12 | 1344x768 | `public/images/services/` |
| 4 | Condition categories | 7 | 1344x768 | `public/images/conditions/` |
| 5 | Personas | 4 | 1024x1024 | `public/images/personas/` |
| 6 | OG/social | 7 | 1200x630 | `public/images/og/` |

**Total size:** ~47 MB
**Logo:** `public/logo.svg` (typographic SVG wordmark — Syne heavy + electric blue)

Full manifest with per-image details: `tasks/image-manifest.md`

---

## SEO & Accessibility

- **Per-page metadata:** Every route exports `title`, `description`, `keywords`, canonical URL, and OG tags
- **Schema markup:** LocalBusiness (global), Service, FAQ, Article, Breadcrumb JSON-LD
- **Sitemap:** Auto-generated via `src/app/sitemap.ts` covering all 111 routes
- **Robots:** Allows all crawlers, disallows `/api/`
- **Accessibility:** WCAG 2.1 AA — semantic HTML, ARIA labels, keyboard navigation, focus management
- **Local SEO:** City + service in H1/title for all service and location pages

---

## Deployment

- **Platform:** Netlify with `@netlify/plugin-nextjs`
- **Build:** `npm run build` (Turbopack, ~3s compile + ~1s static gen for 111 pages)
- **Branch:** Auto-deploys from `main`
- **Node:** v20
- **Security headers:** X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy (strict-origin-when-cross-origin)
- **Image optimization:** Next.js built-in with AVIF/WebP formats

---

## Known Gaps (Phase C — Deferred)

| Gap | Description | Priority |
|-----|-------------|----------|
| Form API routes | 4 forms render but submit nowhere — need `/api/contact`, `/api/assessment`, `/api/referral` endpoints | High |
| Icon mapper | Service/condition icon strings may need a `getIconByName()` helper if Lucide icons aren't mapping correctly | Medium |
| Team content | `/about/our-team` page exists but has no `team.ts` content file with actual staff data | Medium |
| Testimonials | 31 location pages may be pulling from a limited testimonials pool | Low |
| Rich content audit | `services/rich.ts` and `conditions/rich.ts` need line-by-line verification that every slug has complete content | Low |

---

## Quick Reference

| Resource | Location |
|----------|----------|
| Dev server | `npm run dev` → `http://localhost:3000` |
| Production build | `npm run build` |
| Content files | `src/content/` |
| Type definitions | `src/types/content.ts` |
| Design tokens | `src/app/globals.css` |
| Image style guide | `All-Family-image-style-guide.md` |
| Image manifest | `tasks/image-manifest.md` |
| Netlify config | `netlify.toml` |
