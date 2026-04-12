// src/content/shared/testimonials-pool.ts
// All Family Health Care — Extended Testimonials Pool
//
// NOTE: The following 4 testimonials are defined in src/content/pages/home.ts
// and are intentionally NOT duplicated here. They remain the canonical homepage
// testimonials:
//   - Maria K.    — Stroke Recovery        — Daughter of patient — Sauganash
//   - James T.    — COPD & Heart Failure   — Son of patient      — Skokie
//   - Dorothy M.  — Hip Replacement        — Patient             — Park Ridge
//   - Dr. Robert S. — Physician Referral   — Internal Medicine   — Edgebrook
//
// This pool adds 10 additional testimonials tagged by service and condition
// so that service and condition pages can pull relevant social proof.

import type { TestimonialItem } from "@/types/content";

interface TaggedTestimonial extends TestimonialItem {
  serviceSlug?: string;
  conditionSlug?: string;
}

export const testimonialsPool: TaggedTestimonial[] = [
  // 1. Skilled Nursing + Diabetes
  {
    quote:
      "My mother was discharged with insulin-dependent diabetes and we had no idea how to manage her injections or her diet at home. The skilled nurse from All Family came out the very next morning and spent nearly two hours with us going over everything. She visited three times a week for the first month and we never had a dangerous blood sugar episode. That kind of hands-on teaching changed everything.",
    author: "Patricia L.",
    role: "Daughter of patient",
    location: "Evanston, IL",
    rating: 5,
    condition: "Diabetes Management",
    serviceSlug: "skilled-nursing",
    conditionSlug: "diabetes",
  },

  // 2. Physical Therapy + Parkinson's Disease
  {
    quote:
      "My husband was diagnosed with Parkinson's two years ago and his balance had gotten so bad we were afraid to let him walk to the bathroom alone. The physical therapist from All Family came twice a week for four months and taught him exercises specifically for Parkinson's — not just generic PT. He's now walking with a cane instead of a walker and we've had zero falls in six months. I didn't think that was possible.",
    author: "Carol B.",
    role: "Wife of patient",
    location: "Glenview, IL",
    rating: 5,
    condition: "Parkinson's Disease",
    serviceSlug: "physical-therapy",
    conditionSlug: "parkinsons-disease",
  },

  // 3. Occupational Therapy + Alzheimer's / Dementia
  {
    quote:
      "When my dad's Alzheimer's progressed to the point where he couldn't safely use the stove or manage his medications, I panicked. The occupational therapist didn't just assess the house — she spent three visits teaching us how to modify his environment and his daily routine to keep him safe and as independent as possible. She even helped us set up a simple pill organizer system he could actually follow. That's not something we could have figured out on our own.",
    author: "Kevin M.",
    role: "Son of patient",
    location: "Des Plaines, IL",
    rating: 5,
    condition: "Alzheimer's & Dementia",
    serviceSlug: "occupational-therapy",
    conditionSlug: "alzheimers-dementia",
  },

  // 4. Speech Therapy + Stroke Recovery (speech focus)
  {
    quote:
      "My wife had a stroke in November and came home barely able to form full sentences. She was a high school English teacher for thirty years and the loss of her words was devastating for her emotionally. The speech therapist from All Family visited twice a week for three months and was incredibly patient and methodical. By February my wife was reading aloud again. I watched her cry when she finished a full paragraph for the first time — we both did.",
    author: "Frank O.",
    role: "Husband of patient",
    location: "Rogers Park, Chicago",
    rating: 5,
    condition: "Stroke Recovery",
    serviceSlug: "speech-therapy",
    conditionSlug: "stroke-recovery",
  },

  // 5. Home Health Aide + Age-Related Decline
  {
    quote:
      "We hired a home health aide from All Family for my 91-year-old grandmother after she stopped eating regularly and started having trouble bathing safely on her own. Our aide comes five mornings a week and has become like family to her. Grandma actually looks forward to her visits now, and she's gained four pounds because someone is there to make sure she eats breakfast. The consistency of having the same aide every week made all the difference.",
    author: "Sofia R.",
    role: "Granddaughter of patient",
    location: "Lincoln Square, Chicago",
    rating: 5,
    condition: "Age-Related Decline",
    serviceSlug: "home-health-aide",
    conditionSlug: "age-related-decline",
  },

  // 6. Wound Care Management + Diabetes (wound focus)
  {
    quote:
      "My father is diabetic and developed a foot wound that his regular doctor said could lead to amputation if it didn't heal properly. I was changing the dressing myself and clearly doing it wrong. The wound care nurse from All Family came out within 48 hours and took over completely. She visited three times a week, documented everything meticulously, and communicated directly with his vascular surgeon. The wound closed in six weeks. Six weeks. I cannot overstate how scared we were going in.",
    author: "Anthony G.",
    role: "Son of patient",
    location: "Niles, IL",
    rating: 5,
    condition: "Diabetic Wound Care",
    serviceSlug: "wound-care-management",
    conditionSlug: "diabetes",
  },

  // 7. Medical Social Worker + Cancer Recovery
  {
    quote:
      "After my mom finished chemo, the physical recovery was hard but the emotional piece was something none of us were prepared for. The medical social worker All Family sent to us was the first person who actually sat down and asked how our whole family was coping — not just Mom. She connected us with a cancer support group in Evanston, helped us sort out my mom's disability paperwork, and followed up with us for months. That kind of comprehensive support was not something I expected from a home health agency.",
    author: "Diane C.",
    role: "Daughter of patient",
    location: "Wilmette, IL",
    rating: 5,
    condition: "Cancer Recovery",
    serviceSlug: "medical-social-worker",
    conditionSlug: "cancer-recovery",
  },

  // 8. Post-Surgical Care + Joint Replacement Recovery
  {
    quote:
      "I had a total knee replacement at Northwestern and was home the same day. I was nervous about recovering without a rehab facility but my surgeon recommended All Family and it was the right call. A nurse came out the day after surgery to check my incision and review my medications, and the physical therapist started working with me within 72 hours of discharge. By week six I was walking a mile a day. My surgeon said my recovery pace was in the top quarter of his patients.",
    author: "Raymond K.",
    role: "Patient",
    location: "Morton Grove, IL",
    rating: 5,
    condition: "Joint Replacement Recovery",
    serviceSlug: "post-surgical-care",
    conditionSlug: "joint-replacement-recovery",
  },

  // 9. Chronic Disease Management + COPD
  {
    quote:
      "My father has severe COPD and was cycling in and out of the ER almost every two months. After All Family started managing his care at home, his nurse would call us the moment his oxygen levels dipped or his breathing sounded off — and we'd catch the exacerbations before they became emergencies. He's been out of the hospital for fourteen months straight. We stopped dreading every winter. I can't put a number on what that peace of mind is worth.",
    author: "Sandra W.",
    role: "Daughter of patient",
    location: "Jefferson Park, Chicago",
    rating: 5,
    condition: "COPD",
    serviceSlug: "chronic-disease-management",
    conditionSlug: "copd",
  },

  // 10. Medication Management + Heart Failure
  {
    quote:
      "My husband takes eleven medications for his heart failure and the dosing schedules are genuinely complicated. He'd been hospitalized twice for fluid overload because he wasn't taking his diuretics correctly. The nurse from All Family set up a proper medication management system, reviewed every single prescription with his cardiologist, and called us every week to check his weight and symptoms. No hospitalizations in eight months. For a man with stage three heart failure, that is extraordinary.",
    author: "Helen P.",
    role: "Wife of patient",
    location: "Lincolnwood, IL",
    rating: 5,
    condition: "Heart Failure",
    serviceSlug: "medication-management",
    conditionSlug: "heart-failure",
  },
];

/**
 * Returns testimonials tagged to a specific service slug.
 * Falls back to an empty array if none match.
 */
export function getTestimonialsForService(
  serviceSlug: string,
  count: number = 1
): TestimonialItem[] {
  const matches = testimonialsPool.filter((t) => t.serviceSlug === serviceSlug);
  return matches.slice(0, count);
}

/**
 * Returns testimonials tagged to a specific condition slug.
 * Falls back to an empty array if none match.
 */
export function getTestimonialsForCondition(
  conditionSlug: string,
  count: number = 1
): TestimonialItem[] {
  const matches = testimonialsPool.filter(
    (t) => t.conditionSlug === conditionSlug
  );
  return matches.slice(0, count);
}
