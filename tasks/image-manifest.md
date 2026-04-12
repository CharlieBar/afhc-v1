# All Family Health Care — Image Manifest

Generated 2026-04-11 using ComfyUI z_image_turbo model (6 steps, er_sde sampler).
All images follow the **all-family-V4 "Breakthrough Moment"** style guide.

---

## Tier 1 — Blog Featured Images (5)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 1 | `public/images/blog/home-health-guide.jpg` | 1200x800 | 1.0 MB |
| 2 | `public/images/blog/caregiver-burnout.jpg` | 1200x800 | 1.0 MB |
| 3 | `public/images/blog/family-conversation.jpg` | 1200x800 | 1.0 MB |
| 4 | `public/images/blog/fall-prevention.jpg` | 1200x800 | 1.0 MB |
| 5 | `public/images/blog/heart-failure-care.jpg` | 1200x800 | 1.1 MB |

## Tier 2 — Page Hero Images (10)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 6 | `public/images/hero/home.jpg` | 1344x768 | 1.2 MB |
| 7 | `public/images/hero/services.jpg` | 1344x768 | 1.0 MB |
| 8 | `public/images/hero/conditions.jpg` | 1344x768 | 1.1 MB |
| 9 | `public/images/hero/about.jpg` | 1344x768 | 1.1 MB |
| 10 | `public/images/hero/contact.jpg` | 1344x768 | 1.0 MB |
| 11 | `public/images/hero/blog.jpg` | 1344x768 | 1.1 MB |
| 12 | `public/images/hero/locations.jpg` | 1344x768 | 1.3 MB |
| 13 | `public/images/hero/patients.jpg` | 1344x768 | 0.9 MB |
| 14 | `public/images/hero/referrals.jpg` | 1344x768 | 1.1 MB |
| 15 | `public/images/hero/resources.jpg` | 1344x768 | 1.1 MB |

## Tier 3 — Service Detail Images (12)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 16 | `public/images/services/skilled-nursing.jpg` | 1344x768 | 1.2 MB |
| 17 | `public/images/services/physical-therapy.jpg` | 1344x768 | 1.2 MB |
| 18 | `public/images/services/occupational-therapy.jpg` | 1344x768 | 1.1 MB |
| 19 | `public/images/services/speech-therapy.jpg` | 1344x768 | 1.2 MB |
| 20 | `public/images/services/medical-social-worker.jpg` | 1344x768 | 1.1 MB |
| 21 | `public/images/services/home-health-aide.jpg` | 1344x768 | 1.1 MB |
| 22 | `public/images/services/wound-care-management.jpg` | 1344x768 | 1.0 MB |
| 23 | `public/images/services/catheter-care.jpg` | 1344x768 | 1.0 MB |
| 24 | `public/images/services/pain-management.jpg` | 1344x768 | 1.1 MB |
| 25 | `public/images/services/post-surgical-care.jpg` | 1344x768 | 1.1 MB |
| 26 | `public/images/services/chronic-disease-management.jpg` | 1344x768 | 1.1 MB |
| 27 | `public/images/services/medication-management.jpg` | 1344x768 | 1.0 MB |

## Tier 4 — Condition Category Images (7)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 28 | `public/images/conditions/cardiovascular.jpg` | 1344x768 | 1.2 MB |
| 29 | `public/images/conditions/neurological.jpg` | 1344x768 | 1.0 MB |
| 30 | `public/images/conditions/respiratory.jpg` | 1344x768 | 1.2 MB |
| 31 | `public/images/conditions/metabolic.jpg` | 1344x768 | 1.0 MB |
| 32 | `public/images/conditions/musculoskeletal.jpg` | 1344x768 | 1.1 MB |
| 33 | `public/images/conditions/oncology.jpg` | 1344x768 | 1.1 MB |
| 34 | `public/images/conditions/general-recovery.jpg` | 1344x768 | 1.0 MB |

## Tier 5 — Persona Images (4)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 35 | `public/images/personas/seniors.jpg` | 1024x1024 | 1.0 MB |
| 36 | `public/images/personas/caregivers.jpg` | 1024x1024 | 1.0 MB |
| 37 | `public/images/personas/chronic.jpg` | 1024x1024 | 1.0 MB |
| 38 | `public/images/personas/post-surgery.jpg` | 1024x1024 | 1.0 MB |

## Tier 6 — OG / Social Images (7)

| # | Path | Dimensions | Size |
|---|------|-----------|------|
| 39 | `public/images/og/home.jpg` | 1200x630 | 0.9 MB |
| 40 | `public/images/og/services.jpg` | 1200x630 | 0.8 MB |
| 41 | `public/images/og/conditions.jpg` | 1200x630 | 0.8 MB |
| 42 | `public/images/og/about.jpg` | 1200x630 | 0.8 MB |
| 43 | `public/images/og/blog.jpg` | 1200x630 | 0.8 MB |
| 44 | `public/images/og/contact.jpg` | 1200x630 | 0.7 MB |
| 45 | `public/images/og/locations.jpg` | 1200x630 | 0.9 MB |

## Other Assets

| # | Path | Type | Notes |
|---|------|------|-------|
| 46 | `public/logo.svg` | SVG | Typographic wordmark (Syne heavy + electric blue) |

---

## Totals

- **45 JPG images** + 1 SVG logo = **46 assets**
- **Total size**: ~47 MB
- **Generation model**: z_image_turbo_bf16 (6 steps, er_sde sampler, CFG 1)
- **Style**: all-family-V4 — clean crisp clinical-homecare realism, cobalt blue scrubs, cool light backgrounds, breakthrough moments

## Regeneration

To regenerate any image, use:

```bash
python "C:/Users/islam/.claude/skills/comfyui-image-gen/generate.py" \
  --prompt "[original prompt]" \
  --output "public/images/[tier]/[filename].jpg" \
  --width [W] --height [H] --steps 6
```

Seeds were random (not captured). For deterministic regeneration, add `--seed [N]` to pin a specific output.
