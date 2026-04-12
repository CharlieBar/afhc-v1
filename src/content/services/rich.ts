// src/content/services/rich.ts
// All Family Health Care — Rich Service Page Content

import type { ServiceRichContent } from "@/types/content";

export const serviceRichContent: Record<string, ServiceRichContent> = {
  // ─── SKILLED NURSING ──────────────────────────────────────────────────────
  "skilled-nursing": {
    overview: [
      "When your parent comes home from the hospital, the fear is real — will they be okay without the nurses and monitors? Skilled nursing brings that same clinical oversight directly into your home. A registered nurse visits on a physician-ordered schedule to assess your loved one's condition, manage medications, treat wounds, and catch warning signs before they become emergencies.",
      "Skilled nurses do far more than check blood pressure. They review every medication for dangerous interactions, perform wound assessments and dressing changes, administer IV therapy and injections, and educate your family on what to watch for between visits. They're also the direct line of communication to your parent's physician — updating the care team and adjusting the plan when things change.",
      "The goal is simple: keep your loved one safe at home and out of the hospital. Research consistently shows that patients receiving skilled nursing at home have significantly lower rates of readmission. For families managing complex conditions like heart failure, diabetes, or recovery from surgery, having a nurse in the home is often the difference between a successful recovery and a frightening setback.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "After Hospital Discharge",
        description:
          "Your parent was just discharged after a serious hospitalization and the transition home feels overwhelming. A skilled nurse bridges the gap — ensuring the hospital plan carries forward safely into the home environment.",
      },
      {
        icon: "heart",
        title: "Managing Heart Failure or COPD",
        description:
          "Chronic conditions like heart failure and COPD require daily monitoring to catch dangerous fluid changes or breathing decline early. A nurse can detect these warning signs days before they become emergencies.",
      },
      {
        icon: "activity",
        title: "Complex Wound Treatment",
        description:
          "Surgical wounds, diabetic ulcers, and pressure injuries need skilled hands and trained eyes at every dressing change. Home nursing prevents infections that would otherwise send your loved one back to the ER.",
      },
      {
        icon: "stethoscope",
        title: "IV Therapy or Injections at Home",
        description:
          "When a physician orders IV antibiotics, fluids, or injectable medications, a skilled nurse administers them safely at home — eliminating the need for daily clinic or infusion center trips.",
      },
      {
        icon: "shield",
        title: "High Medication Complexity",
        description:
          "A parent on ten or more medications after a hospitalization is at serious risk for dangerous errors. A skilled nurse reconciles the medication list, educates the family, and monitors for side effects at every visit.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Skilled Nursing",
      body:
        "Medicare Part A and Part B cover skilled nursing visits at home when ordered by a physician and your loved one meets homebound status criteria. Covered services include assessment, wound care, medication management, and IV therapy — with no copays required for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "What does a skilled nursing visit actually look like?",
        answer:
          "A typical visit lasts 45 to 90 minutes. The nurse begins with a head-to-toe clinical assessment — vital signs, lung sounds, skin integrity, and mental status. They then perform any ordered treatments such as wound care or injections, review medications, address any new symptoms, and document everything for the physician. They'll also take time to answer your questions and educate family members who are involved in care.",
        category: "About Our Services",
      },
      {
        question: "How often will a nurse visit?",
        answer:
          "Visit frequency depends on your loved one's condition and the physician's order. After a hospitalization, visits are often daily or every other day, then taper to weekly as the patient stabilizes. For wound care or IV therapy, the nurse may come every day. Your care plan is reviewed regularly and adjusted based on how recovery is progressing.",
        category: "About Our Services",
      },
      {
        question: "Can the nurse communicate directly with our doctor?",
        answer:
          "Yes — and this is one of the most important parts of the service. Our nurses document every visit in detail and relay changes in condition to your physician promptly. If something concerning is discovered during a visit, we contact the physician the same day rather than waiting for a scheduled appointment.",
        category: "About Our Services",
      },
      {
        question: "What if my parent's condition changes between visits?",
        answer:
          "Call us at (773) 775-2588 any time you notice a significant change — new symptoms, increasing pain, confusion, or anything that worries you. We can arrange an additional visit or help you determine whether emergency care is needed. You are never left alone to figure it out.",
        category: "Getting Support",
      },
      {
        question: "Does a skilled nurse provide hands-on personal care like bathing?",
        answer:
          "Skilled nurses focus on clinical care — assessment, treatments, medications, and education. When personal care is also medically necessary, a home health aide is often added to the care plan alongside nursing visits. Your nurse will evaluate this need and include it in your loved one's plan if appropriate.",
        category: "About Our Services",
      },
    ],
    relatedServices: [
      "wound-care-management",
      "medication-management",
      "chronic-disease-management",
    ],
  },

  // ─── PHYSICAL THERAPY ────────────────────────────────────────────────────
  "physical-therapy": {
    overview: [
      "After a fall, surgery, or stroke, getting back on your feet isn't just about strength — it's about confidence. Home physical therapy meets your loved one exactly where they are, in the rooms and hallways where they actually need to move. The therapist doesn't just work muscles; they rebuild the trust that every step is safe.",
      "A licensed physical therapist designs a completely individualized program based on your loved one's specific deficits, medical history, and goals. Sessions focus on strength training, balance retraining, gait correction, and pain reduction — using the actual furniture, stairs, and surfaces of the home. This approach is more effective than gym-based therapy for most older adults because it directly addresses real-world function.",
      "Home PT also includes a thorough home safety evaluation. The therapist identifies fall hazards, recommends grab bar placement, evaluates whether assistive devices like canes or walkers are appropriate, and trains your loved one to use them correctly. Families often tell us that a few weeks of home PT gave their parent more independence than they'd had in years.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "After Hip or Knee Replacement",
        description:
          "Joint replacement recovery demands consistent, progressive exercise to restore full mobility. A home physical therapist ensures your loved one follows the surgeon's protocol safely without the logistical challenge of clinic trips while still limited in mobility.",
      },
      {
        icon: "activity",
        title: "After a Stroke",
        description:
          "Stroke can affect movement, balance, and coordination on one or both sides of the body. Physical therapy at home begins rebuilding motor pathways and functional movement as soon as the patient is medically stable — the sooner, the better for long-term recovery.",
      },
      {
        icon: "shield",
        title: "High Fall Risk",
        description:
          "A patient who has fallen — or who family members worry will fall — needs targeted balance and strength work in their own environment. Home PT directly addresses the conditions that caused the fall and the specific home hazards that increase that risk.",
      },
      {
        icon: "heart",
        title: "Parkinson's Disease",
        description:
          "Parkinson's affects gait, balance, and movement initiation in ways that make falls a constant danger. Physical therapy — including specialized Parkinson's exercise protocols — can significantly slow functional decline and maintain independence longer.",
      },
      {
        icon: "stethoscope",
        title: "Deconditioning After Illness",
        description:
          "A hospital stay of even a few days can cause significant muscle loss and deconditioning, especially in older adults. Physical therapy rebuilds strength and endurance before weakness becomes a permanent loss of function.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Physical Therapy",
      body:
        "Medicare covers home physical therapy visits when ordered by a physician and your loved one qualifies as homebound. There are no copays for Medicare-covered home health visits, and therapy services are covered as long as your loved one is making measurable functional progress. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How is home physical therapy different from outpatient PT?",
        answer:
          "Outpatient PT happens in a clinic with gym equipment. Home PT happens in your living room, bathroom, and on your actual stairs. This is a critical advantage for older adults — the exercises translate directly to real-life function, and the therapist can identify and fix home hazards that clinic therapists never see. For patients who are homebound, it's also simply safer and less exhausting than traveling.",
        category: "About Our Services",
      },
      {
        question: "How many visits will my parent need?",
        answer:
          "The number of visits depends on the diagnosis, starting functional level, and the goals of care. Post-surgical patients often receive 2–3 visits per week for 4–6 weeks. Patients with neurological conditions may have longer plans. The therapist sets measurable goals and tracks progress at every visit, adjusting the plan as your loved one improves.",
        category: "About Our Services",
      },
      {
        question: "Will the physical therapist teach us exercises to do between visits?",
        answer:
          "Absolutely — and this is one of the most important parts of recovery. The therapist creates a written home exercise program tailored to your loved one's abilities and safety level. Family members and caregivers are included in the teaching so they can safely support practice between visits.",
        category: "Family Involvement",
      },
      {
        question: "Can physical therapy help prevent a second fall after my parent has already fallen?",
        answer:
          "Yes, and this is one of the most evidence-backed uses of home physical therapy. The therapist conducts a thorough fall risk assessment, identifies the specific factors that contributed to the first fall, and designs an intervention — both exercise and home modification — to address each one. Call (773) 775-2588 to arrange an evaluation right away after a fall.",
        category: "Fall Prevention",
      },
    ],
    relatedServices: [
      "occupational-therapy",
      "post-surgical-care",
      "skilled-nursing",
    ],
  },

  // ─── OCCUPATIONAL THERAPY ────────────────────────────────────────────────
  "occupational-therapy": {
    overview: [
      "Your parent might be able to walk with help — but can they make their own breakfast? Button their shirt? Get in and out of the shower safely? These daily tasks define independence, and after a health event, they're often the first things to go. Occupational therapy focuses on exactly this: getting your loved one back to the activities that give their day meaning and dignity.",
      "A licensed occupational therapist evaluates your loved one's ability to perform activities of daily living — bathing, dressing, grooming, cooking, and managing the home — and then designs practical interventions to restore those abilities. This often involves retraining movements, introducing adaptive equipment, and modifying the home environment to make tasks safer and more manageable.",
      "For families caring for a parent with dementia, stroke, or Parkinson's, OT is especially valuable. The therapist teaches techniques that compensate for cognitive and physical deficits, trains family caregivers in safe assistance methods, and identifies home modifications that significantly reduce injury risk. The outcome isn't just safety — it's a parent who can do more for themselves, which matters enormously to their sense of self.",
    ],
    whoNeeds: [
      {
        icon: "home",
        title: "Difficulty with Bathing and Dressing",
        description:
          "When bathing and dressing become dangerous or exhausting, an occupational therapist identifies the specific barriers — physical, cognitive, or environmental — and introduces techniques, equipment, and modifications that restore safe independence.",
      },
      {
        icon: "brain",
        title: "Cognitive Changes After Stroke or Dementia",
        description:
          "Cognitive impairment affects the ability to sequence tasks, remember safety steps, and make decisions during daily activities. OT teaches compensatory strategies and simplifies routines to match your loved one's current cognitive level.",
      },
      {
        icon: "activity",
        title: "After Joint Replacement Surgery",
        description:
          "Hip and knee replacement recovery comes with strict precautions — certain movements are forbidden during healing. An OT teaches your loved one exactly how to perform every daily task within those restrictions so recovery doesn't mean helplessness.",
      },
      {
        icon: "shield",
        title: "High Fall Risk in the Home",
        description:
          "OT home safety evaluations identify hazards most families overlook — slippery rugs, poor lighting, bathroom layout, and furniture placement. The therapist recommends specific modifications and adaptive equipment proven to reduce fall risk.",
      },
      {
        icon: "users",
        title: "Caregiver Needing Safe Technique Training",
        description:
          "Family caregivers often injure themselves or their loved one by using unsafe transfer or bathing techniques. An occupational therapist trains both the patient and caregiver in methods that protect everyone's safety and reduce physical strain.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Occupational Therapy",
      body:
        "Medicare covers home occupational therapy visits when a physician orders the service and the patient meets homebound criteria. OT is covered as long as there are measurable functional goals being worked toward — with no copays for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "What is the difference between occupational therapy and physical therapy?",
        answer:
          "Physical therapy focuses primarily on movement, strength, balance, and mobility — helping your loved one move safely. Occupational therapy focuses on function — helping your loved one actually perform the tasks of daily life: bathing, dressing, cooking, and managing the home. Both are often ordered together because they complement each other powerfully.",
        category: "About Our Services",
      },
      {
        question: "Will the OT recommend equipment we need to buy?",
        answer:
          "The therapist will identify adaptive equipment that would meaningfully help your loved one — things like grab bars, shower chairs, long-handled dressing aids, and non-slip mats. Some items are covered by Medicare. The therapist focuses only on what is truly useful, not a generic list of products.",
        category: "Equipment",
      },
      {
        question: "Can OT help my parent who has dementia?",
        answer:
          "Absolutely. OT is one of the most effective interventions for maintaining function and safety in patients with Alzheimer's and other dementias. Therapists are trained to work within cognitive limitations — simplifying routines, establishing cues, and training caregivers in techniques that reduce agitation and maximize safe independence.",
        category: "Dementia Care",
      },
      {
        question: "How do I arrange an occupational therapy evaluation?",
        answer:
          "An OT evaluation requires a physician's order. If your loved one was recently hospitalized, the discharge team can arrange this. If you're calling from home, contact us at (773) 775-2588 and we can help coordinate with the physician to get services started quickly.",
        category: "Getting Started",
      },
    ],
    relatedServices: [
      "physical-therapy",
      "home-health-aide",
      "post-surgical-care",
    ],
  },

  // ─── SPEECH THERAPY ───────────────────────────────────────────────────────
  "speech-therapy": {
    overview: [
      "Watching a parent struggle to find words, or choking on food and liquids, is one of the most distressing things a family can face. Speech therapy addresses these exact challenges — restoring communication, treating swallowing disorders, and rebuilding the cognitive-communication skills that strokes and neurological diseases can take away. And it happens in your home, where the therapist can see the real-world demands your loved one faces every day.",
      "Our speech-language pathologists treat far more than just speech. Dysphagia — the medical term for swallowing difficulty — is a serious and underrecognized danger. Aspiration of food or liquid into the lungs causes pneumonia that sends thousands of older adults back to the hospital every year. A speech therapist identifies exactly what's going wrong with swallowing and designs specific exercises and diet modifications to make eating safe again.",
      "For patients recovering from stroke or managing Parkinson's disease, speech therapy works on voice strength, word retrieval, and the cognitive processes that underlie communication. Family members are trained as active participants — learning strategies to reduce communication frustration and support their loved one's progress between visits. The result is a more connected, safer, and more dignified daily life.",
    ],
    whoNeeds: [
      {
        icon: "brain",
        title: "Stroke Survivors with Speech or Language Loss",
        description:
          "Stroke can cause aphasia — the loss of ability to speak, understand, read, or write. A speech-language pathologist works systematically to rebuild these pathways, starting where the patient is and setting meaningful, measurable goals for recovery.",
      },
      {
        icon: "activity",
        title: "Difficulty Swallowing Food or Liquids",
        description:
          "Coughing, choking, or a wet-sounding voice after eating are warning signs of dysphagia. A speech therapist evaluates exactly how swallowing is impaired and prescribes specific exercises, diet texture modifications, and positioning strategies to make eating safe.",
      },
      {
        icon: "stethoscope",
        title: "Parkinson's Disease Affecting Voice",
        description:
          "Parkinson's often causes voice to become soft, monotone, and difficult to understand. Specialized voice therapy — including LSVT LOUD, the evidence-based Parkinson's protocol — can dramatically improve speech volume and clarity.",
      },
      {
        icon: "brain",
        title: "Memory and Cognitive-Communication Problems",
        description:
          "After brain injury, stroke, or with Alzheimer's disease, patients often struggle with organizing thoughts, following conversations, or remembering what was just said. Speech therapy targets these cognitive-communication deficits directly.",
      },
      {
        icon: "users",
        title: "Families Struggling to Communicate with a Loved One",
        description:
          "When communication breaks down, frustration rises on both sides. The speech therapist teaches family members specific techniques — how to frame questions, reduce environmental noise, give the patient time — that make interactions calmer and more successful for everyone.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Speech Therapy",
      body:
        "Medicare covers home speech-language pathology services when a physician orders the service and the patient meets homebound criteria. Dysphagia treatment, aphasia therapy, and cognitive-communication rehabilitation are all covered when medically necessary — with no copays for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How do I know if my parent has a swallowing problem?",
        answer:
          "Common signs include coughing or choking during or after meals, a wet or gurgling voice quality, frequent throat clearing, food or liquid coming out of the nose, weight loss, or recurring pneumonia. If you notice any of these, contact us at (773) 775-2588 — a swallowing evaluation can be arranged quickly and may prevent a serious hospitalization.",
        category: "Swallowing",
      },
      {
        question: "Can speech therapy really help someone with severe aphasia after stroke?",
        answer:
          "Yes — even patients with severe aphasia can make meaningful gains with consistent therapy. Progress varies depending on the location and size of the stroke, but research consistently shows that early, intensive speech therapy improves outcomes significantly. The therapist sets goals that match your loved one's current level and celebrates every gain, however small.",
        category: "Stroke Recovery",
      },
      {
        question: "What happens during a speech therapy session at home?",
        answer:
          "Sessions typically run 45 to 60 minutes. The therapist may use exercises, cards, technology tools, and real-life tasks — such as reading mail, having a conversation, or eating a meal together — to work on targeted goals. Between visits, the therapist provides practice exercises and trains family members to incorporate them naturally into daily interaction.",
        category: "About Our Services",
      },
      {
        question: "Will my parent be embarrassed or frustrated during sessions?",
        answer:
          "Speech therapists are trained to move at the patient's pace and build trust before pushing for progress. Sessions are designed to produce success experiences — tasks the patient can accomplish — before increasing difficulty. Frustration is normal and expected, and therapists are skilled at managing it with patience and humor.",
        category: "About Our Services",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "occupational-therapy",
      "chronic-disease-management",
    ],
  },

  // ─── MEDICAL SOCIAL WORKER ───────────────────────────────────────────────
  "medical-social-worker": {
    overview: [
      "A serious illness or disability doesn't just affect the body — it upends the entire family. The emotional weight, the logistical confusion, the financial pressure, the fear about what comes next. A medical social worker addresses all of this. They meet with your loved one and your family at home, listen without judgment, and then help you find a clear path through an overwhelming situation.",
      "Medical social workers connect families to real resources — Medicaid planning, community programs, transportation assistance, caregiver respite, adult day programs, and long-term care options. They help interpret what doctors have said, assist with advance directive conversations, and support families facing the hardest decisions that come with serious illness. For families in crisis, a social worker can be the steadiest voice in the room.",
      "Caregiver burnout is one of the most common and least-addressed problems in home health. A medical social worker identifies when a family caregiver is struggling — physically, emotionally, or financially — and works to build a sustainable support system. Your parent's recovery depends on the whole family's wellbeing, and this is a service that explicitly addresses that.",
    ],
    whoNeeds: [
      {
        icon: "users",
        title: "Families Overwhelmed by Caregiving",
        description:
          "When a family caregiver is exhausted, isolated, or burning out, the entire care situation becomes unstable. A medical social worker assesses the caregiver's needs alongside the patient's and builds a support plan that protects both.",
      },
      {
        icon: "clipboard-plus",
        title: "Navigating Insurance, Benefits, and Long-Term Care",
        description:
          "Medicare, Medicaid, supplemental insurance, and community programs form a confusing web. A medical social worker helps families understand what they're entitled to, apply for benefits, and plan financially for ongoing care needs.",
      },
      {
        icon: "brain",
        title: "Facing a Serious Diagnosis",
        description:
          "When a parent receives a diagnosis of dementia, cancer, or a serious neurological condition, the emotional impact on the family is immediate and profound. Social work provides counseling, helps the family process the news, and begins planning for the road ahead.",
      },
      {
        icon: "heart",
        title: "Advance Directive and End-of-Life Planning",
        description:
          "Many families avoid conversations about advance directives, DNR orders, and care wishes until a crisis forces the issue. A social worker facilitates these conversations with care and clarity, ensuring your loved one's wishes are documented and understood.",
      },
      {
        icon: "shield",
        title: "Safety Concerns and At-Risk Situations",
        description:
          "When a patient's home situation involves safety risks — inadequate support, unsafe environment, or self-neglect — a medical social worker assesses the situation and coordinates appropriate interventions to ensure the patient's wellbeing.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Medical Social Work",
      body:
        "Medicare covers medical social work visits when ordered by a physician as part of a home health plan of care. Social work services are covered when the patient's social, emotional, or community needs are affecting their health outcomes — with no copays for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "What can a medical social worker actually help us with?",
        answer:
          "The list is longer than most families expect: Medicare and Medicaid navigation, benefits applications, community resource referrals, caregiver support, advance directive facilitation, long-term care planning, counseling for adjustment to illness, crisis intervention, and coordination with the rest of the care team. If you're not sure whether a social worker can help with your specific situation, call (773) 775-2588 and we'll talk it through.",
        category: "About Our Services",
      },
      {
        question: "Is a medical social worker a therapist or counselor?",
        answer:
          "A medical social worker holds a master's degree in social work (MSW) with specialized training in healthcare settings. They provide counseling and emotional support, but their role is broader — they also handle practical coordination, resource navigation, and care planning. For patients who need longer-term mental health treatment, the social worker can provide referrals to appropriate therapists.",
        category: "About Our Services",
      },
      {
        question: "My parent is resistant to having a social worker. What should I do?",
        answer:
          "Resistance is very common, especially among older adults who associate social workers with crisis or loss of independence. A skilled medical social worker knows how to build rapport slowly and meet patients where they are — often beginning with practical help rather than emotional conversations, and earning trust over time.",
        category: "Family Dynamics",
      },
      {
        question: "How do I request a medical social work visit?",
        answer:
          "Social work is included as part of a home health plan of care and requires a physician's order. If your loved one is already receiving home health services, speak with the supervising nurse about adding social work. If services haven't started yet, call us at (773) 775-2588 and we'll help coordinate everything.",
        category: "Getting Started",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "home-health-aide",
      "chronic-disease-management",
    ],
  },

  // ─── HOME HEALTH AIDE ────────────────────────────────────────────────────
  "home-health-aide": {
    overview: [
      "There's a particular kind of vulnerability in needing help with bathing or getting dressed. A great home health aide understands this — they provide personal care with the kind of warmth, patience, and respect that preserves your parent's dignity even on the hardest days. This isn't just assistance; it's the difference between a loved one who feels cared for and one who feels like a burden.",
      "Our home health aides are trained, supervised, and integrated into the clinical care team. They don't work in isolation — they operate under a registered nurse's supervision as part of your loved one's comprehensive care plan. This means the aide's observations matter clinically. When they notice a change — a new bruise, an untouched meal, unusual confusion — that information flows back to the nurse and physician.",
      "Home health aide services under Medicare are available when they are medically necessary as part of a skilled care plan — meaning your loved one is also receiving nursing, physical therapy, or another skilled service. For families managing care for a parent with dementia, Parkinson's, or significant physical limitations, the aide often becomes the most consistent presence in the care system and the person who knows your parent best.",
    ],
    whoNeeds: [
      {
        icon: "heart",
        title: "Parents Who Need Help with Bathing and Grooming",
        description:
          "When physical limitations make bathing and grooming unsafe or exhausting, a home health aide provides dignified, skilled assistance that keeps your loved one clean, comfortable, and at lower risk for skin breakdown and infection.",
      },
      {
        icon: "brain",
        title: "Dementia Patients Needing Consistent Support",
        description:
          "Consistency is critical for patients with Alzheimer's or other dementias. A familiar aide who knows your parent's routines, preferences, and calming strategies can make daily personal care dramatically less distressing for everyone involved.",
      },
      {
        icon: "activity",
        title: "Recovering from Surgery or Illness",
        description:
          "During recovery, even simple hygiene tasks can feel impossible. A home health aide handles personal care while your loved one conserves energy for therapy and healing — making recovery both safer and more comfortable.",
      },
      {
        icon: "users",
        title: "Family Caregivers Who Need Respite",
        description:
          "Family caregivers who are handling all personal care without help are at high risk for burnout. A trained aide gives family members a real break — time to sleep, work, or simply breathe — while knowing their parent is in good hands.",
      },
      {
        icon: "home",
        title: "Patients with Mobility Limitations",
        description:
          "For patients who need help transferring from bed to chair, walking safely, or getting to the bathroom, an aide provides safe mobility assistance — reducing fall risk and enabling more movement than the patient could safely manage alone.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Home Health Aide Services",
      body:
        "Medicare covers home health aide visits when they are part of a physician-ordered care plan that also includes skilled services such as nursing or therapy. Aide services must be medically necessary — not just convenient — to qualify. When covered, there are no copays required. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "What is the difference between a home health aide and a personal care aide?",
        answer:
          "A home health aide (HHA) is a trained, certified paraprofessional who works under the supervision of a registered nurse within a Medicare-certified home health agency. A personal care aide or companion typically works independently without clinical supervision. Our aides are HHAs — which means their observations feed into your loved one's clinical care plan and are reviewed by a supervising nurse.",
        category: "About Our Services",
      },
      {
        question: "Can a home health aide stay overnight or provide round-the-clock care?",
        answer:
          "Medicare-covered aide visits are intermittent — typically a few hours at a time, several times per week. They are not intended to replace continuous 24-hour caregiving. If your loved one needs around-the-clock supervision, call us at (773) 775-2588 and we can help you understand what options are available.",
        category: "Coverage",
      },
      {
        question: "Will my parent have the same aide for every visit?",
        answer:
          "We make every effort to assign consistent aides because familiarity is especially important for personal care. A consistent aide learns your parent's preferences, routines, and personality — making each visit smoother and more comfortable than starting fresh with a stranger every time.",
        category: "About Our Services",
      },
      {
        question: "Can the aide help with meals and housekeeping?",
        answer:
          "Our aides can assist with light meal preparation and incidental housekeeping that directly supports the patient's care — such as tidying the immediate environment or helping with hygiene-related laundry. Extensive housekeeping or cooking services beyond what's needed for medical care are outside the scope of the Medicare home health benefit.",
        category: "Scope of Services",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "occupational-therapy",
      "medical-social-worker",
    ],
  },

  // ─── WOUND CARE MANAGEMENT ───────────────────────────────────────────────
  "wound-care-management": {
    overview: [
      "A wound that isn't healing properly isn't just a medical concern — it's a source of constant anxiety for families. Surgical sites that look wrong, diabetic foot ulcers that won't close, pressure sores that are getting worse: these situations demand skilled clinical eyes at regular intervals. Our wound care-trained nurses bring that expertise directly to your loved one's home, so you don't have to make daily trips to a clinic while the wound progresses.",
      "Wound care nursing involves far more than changing bandages. At every visit, the nurse measures and photographs the wound to track healing progress, assesses for signs of infection — redness, warmth, increasing drainage, odor, fever — and communicates findings directly to the physician. They perform debridement of necrotic tissue when ordered, select the appropriate dressing for the specific wound type, and educate the patient and family on wound care between visits.",
      "For patients with diabetes, the stakes are especially high. Diabetic foot ulcers are the leading cause of non-traumatic lower limb amputation, and infection can progress from concerning to life-threatening in days. Regular, expert wound monitoring doesn't just promote healing — it can prevent outcomes that would permanently change your loved one's life. The sooner professional wound care begins, the better.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "Surgical Wounds After Hospitalization",
        description:
          "Post-surgical wounds require careful monitoring during the first weeks at home. A wound care nurse ensures the incision is healing correctly, identifies early signs of infection, and performs dressing changes with the skill and sterility that prevents complications.",
      },
      {
        icon: "heart",
        title: "Diabetic Foot Ulcers",
        description:
          "Foot ulcers in diabetic patients heal slowly and are at very high risk for infection and amputation. Specialized wound care nursing — combined with offloading guidance and blood sugar education — gives these wounds the best possible chance of closing.",
      },
      {
        icon: "activity",
        title: "Pressure Injuries (Bedsores)",
        description:
          "Patients who are bedbound or spend extended time in a wheelchair are at risk for pressure injuries that can develop rapidly and become severe. Wound care nursing addresses existing injuries while also teaching family caregivers repositioning and skin care techniques that prevent new ones.",
      },
      {
        icon: "stethoscope",
        title: "Venous and Arterial Leg Ulcers",
        description:
          "Leg ulcers related to vascular conditions require specific treatment approaches — compression therapy, appropriate dressing selection, and careful monitoring of circulation. A wound care nurse selects and applies the correct treatment based on the wound's vascular origin.",
      },
      {
        icon: "shield",
        title: "Wounds Showing Signs of Infection",
        description:
          "A wound that is increasingly red, warm, painful, draining, or has developed an odor needs professional assessment immediately. A wound care nurse can evaluate severity, collect specimens for culture when ordered, and communicate findings to the physician the same day.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Wound Care Management",
      body:
        "Medicare covers skilled wound care nursing at home when a physician orders the service and the patient meets homebound criteria. Covered services include wound assessment, dressing changes, debridement guidance, and patient education — with no copays required for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How often does a wound care nurse need to visit?",
        answer:
          "Visit frequency depends on the wound type, severity, and healing trajectory. Acute post-surgical wounds or infected wounds may require daily nursing visits. Chronic wounds that are stable but need monitoring may be visited two to three times per week. The physician's order specifies the frequency, and the nurse requests order changes when the wound's condition warrants it.",
        category: "About Our Services",
      },
      {
        question: "What does the nurse do at each wound care visit?",
        answer:
          "The nurse measures the wound dimensions, assesses the wound bed and surrounding tissue, photographs and documents the current status, removes the old dressing, cleans the wound per the ordered protocol, selects and applies the appropriate new dressing, and assesses for signs of infection. All findings are documented and communicated to the physician, especially if there are concerning changes.",
        category: "About Our Services",
      },
      {
        question: "My parent's wound has a bad smell. Is that serious?",
        answer:
          "Wound odor can indicate infection, necrotic tissue, or biofilm — all of which require prompt clinical evaluation. Call (773) 775-2588 right away if you notice a wound that smells bad, is producing thick or discolored drainage, looks increasingly red or swollen, or if your parent develops a fever. These are signs that warrant same-day or next-day nursing assessment.",
        category: "Warning Signs",
      },
      {
        question: "Can family members learn how to change the dressing between visits?",
        answer:
          "Yes — caregiver education is a core part of wound care nursing. The nurse teaches family members the specific technique for each wound type, including how to recognize warning signs that require a nurse visit or physician call. This empowers families to manage between visits safely and confidently.",
        category: "Family Involvement",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "post-surgical-care",
      "chronic-disease-management",
    ],
  },

  // ─── CATHETER CARE ────────────────────────────────────────────────────────
  "catheter-care": {
    overview: [
      "Managing a urinary catheter at home is intimidating for families — and for good reason. Improper catheter care is one of the leading causes of urinary tract infections, which in older adults can quickly escalate to sepsis. Skilled nursing for catheter management removes that burden from family caregivers and ensures that every aspect of catheter maintenance follows clinical protocols designed to prevent dangerous complications.",
      "Our registered nurses perform all ordered catheter care tasks: routine catheter changes on the physician's prescribed schedule, irrigation when ordered, assessment of catheter function and patient comfort, and monitoring for early signs of infection. They also teach patients and family members the daily maintenance practices that significantly reduce infection risk between nursing visits — including proper hygiene, fluid intake, bag positioning, and what to watch for.",
      "For patients who require long-term catheter management — after spinal cord injury, neurological disease, urological surgery, or severe urinary retention — consistency of nursing oversight is critical. Our nurses document each visit thoroughly and communicate changes in the catheter, drainage, or patient comfort directly to the physician. The goal is to keep your loved one comfortable, infection-free, and as independent as possible.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "After Urological or Pelvic Surgery",
        description:
          "Many urological, prostate, and pelvic surgeries require a catheter during recovery. Skilled nursing ensures the catheter is managed correctly during healing, the scheduled change is performed safely, and complications are identified early.",
      },
      {
        icon: "stethoscope",
        title: "Patients with Neurogenic Bladder",
        description:
          "Neurological conditions — including spinal cord injury, multiple sclerosis, and stroke — often affect bladder control and require long-term catheterization. Regular nursing oversight maintains catheter function and prevents the infections that can cause serious setbacks in these patients.",
      },
      {
        icon: "activity",
        title: "Urinary Retention Not Managed with Surgery",
        description:
          "Some patients with chronic urinary retention require ongoing catheterization without a surgical solution. A skilled nurse manages the catheter maintenance schedule, monitors for infection, and ensures the patient's comfort and dignity.",
      },
      {
        icon: "shield",
        title: "History of Recurrent Urinary Tract Infections",
        description:
          "Patients with a catheter who have a history of frequent UTIs require heightened surveillance. A nurse monitors for early infection signs at every visit and educates the family on prevention practices that reduce recurrence risk.",
      },
      {
        icon: "users",
        title: "Family Caregivers Managing a Catheter",
        description:
          "When a family member is managing catheter care without professional support, the risk of improper technique — and subsequent infection — is significant. Nursing visits provide hands-on education, supervised practice, and ongoing support for caregivers handling this responsibility.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Catheter Care",
      body:
        "Medicare covers skilled nursing for catheter care and management when ordered by a physician and the patient meets homebound criteria. Covered services include catheter insertion when ordered, irrigation, routine changes, patient education, and infection monitoring — with no copays required for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "What are the warning signs of a catheter-related infection?",
        answer:
          "Watch for cloudy or foul-smelling urine, decreased urine output, urine that appears bloody or pink, fever or chills, increased pain or pressure in the lower abdomen, or your parent seeming suddenly more confused or agitated than usual. Call us at (773) 775-2588 immediately if you notice any of these signs — catheter-related infections need prompt evaluation and can escalate quickly in older adults.",
        category: "Warning Signs",
      },
      {
        question: "How often does the catheter need to be changed?",
        answer:
          "Catheter change frequency depends on the type of catheter and the physician's order. Indwelling urinary catheters (Foley catheters) are typically changed every four to six weeks for patients who need long-term management, though this varies based on individual factors. The physician determines the schedule, and our nurses perform the change at the ordered interval.",
        category: "About Our Services",
      },
      {
        question: "Can my parent stay comfortable with a catheter long-term?",
        answer:
          "Yes — with proper management, most patients adapt to long-term catheterization and live comfortably. Our nurses focus on minimizing infection risk, managing any discomfort, ensuring the catheter is secured properly to prevent pulling, and addressing any issues that arise between visits. Caregiver education significantly improves long-term comfort outcomes.",
        category: "Patient Comfort",
      },
      {
        question: "What if the catheter comes out or stops draining at home?",
        answer:
          "A catheter that is not draining, has come out, or is causing your parent significant pain needs a nursing assessment the same day. Contact us at (773) 775-2588 and we will arrange a visit promptly. Do not attempt to reinsert a catheter at home without proper training — this can cause injury and introduce bacteria.",
        category: "Emergencies",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "post-surgical-care",
      "medication-management",
    ],
  },

  // ─── PAIN MANAGEMENT ─────────────────────────────────────────────────────
  "pain-management": {
    overview: [
      "Chronic or post-operative pain doesn't just cause physical suffering — it disrupts sleep, diminishes appetite, increases fall risk, and robs your loved one of the quality of life they deserve. Managing pain well at home requires more than prescriptions. It requires someone who can accurately assess pain levels at every visit, ensure medications are taken correctly and on schedule, monitor for side effects, and communicate with the physician when the current approach isn't working.",
      "Our nurses work as an extension of your loved one's medical team, translating the physician's pain management plan into safe, consistent action in the home. They administer medications as ordered — including oral, injectable, and IV pain medications when required — teach patients and families how to communicate about pain effectively, and introduce non-pharmacological techniques that complement medication: positioning, heat and cold therapy, relaxation strategies, and activity pacing.",
      "For patients with cancer, advanced illness, or severe arthritis, pain management is often the most important factor in their daily experience. Our goal isn't just to reduce a number on a pain scale. It's to give your loved one enough comfort to sleep through the night, eat a meal, have a conversation, or take a short walk — the things that make life worth living, even on difficult days.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "After Major Surgery",
        description:
          "Post-operative pain at home is often undertreated because patients and families fear medications or don't know how to report pain effectively. A skilled nurse ensures the pain management plan is followed, adjusts positioning and comfort measures, and communicates with the surgeon's team when pain control is inadequate.",
      },
      {
        icon: "heart",
        title: "Cancer and Serious Illness",
        description:
          "Pain from cancer and advanced illness requires careful, expert management. A nurse with experience in comfort-focused care ensures medications are effective, side effects are managed, and the physician is contacted promptly when the current regimen needs adjustment.",
      },
      {
        icon: "activity",
        title: "Severe Arthritis or Chronic Pain Conditions",
        description:
          "Patients with debilitating arthritis or chronic pain conditions often live with poorly managed pain that limits mobility and independence. A nurse can monitor pain patterns, ensure medications are taken consistently, and introduce complementary strategies that improve daily function.",
      },
      {
        icon: "stethoscope",
        title: "Complex Medication Regimens for Pain",
        description:
          "When pain management involves multiple medications — opioids, nerve pain medications, anti-inflammatories, and adjuncts — the risk of dangerous interactions and errors is high. A skilled nurse oversees the full regimen and monitors for side effects that require physician attention.",
      },
      {
        icon: "shield",
        title: "Patients Whose Pain Is Not Being Adequately Controlled",
        description:
          "If your loved one is telling you the pain is not under control, or you can see that it isn't, professional nursing assessment can identify why. The nurse communicates specific clinical findings to the physician — not just 'my parent says it hurts,' but documented pain levels, timing, triggers, and response to current medications.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Pain Management",
      body:
        "Medicare covers skilled nursing for pain assessment and management when ordered by a physician as part of a home health plan of care. Covered services include pain evaluation, medication administration as ordered, non-pharmacological interventions, and patient education — with no copays required for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How does the nurse accurately assess pain if my parent has trouble communicating?",
        answer:
          "Our nurses are trained in multiple pain assessment tools, including observational scales designed for patients with dementia or communication difficulties. They assess behavioral indicators — facial expressions, guarding, restlessness, and refusal of activity — that indicate pain even when a patient cannot verbally report it. This ensures pain isn't undertreated because your loved one can't articulate how they feel.",
        category: "Pain Assessment",
      },
      {
        question: "I'm worried about my parent becoming dependent on pain medication. What should I know?",
        answer:
          "This is one of the most common and understandable concerns families raise. Our nurses have frank conversations about the difference between physical dependence, tolerance, and addiction in the context of medically supervised pain management. For patients with serious illness, adequately treated pain leads to better overall outcomes — including less anxiety, better sleep, more mobility, and improved quality of life. If this is a concern, call (773) 775-2588 and let's talk through the specific situation.",
        category: "Medications",
      },
      {
        question: "What non-medication approaches does the nurse use for pain?",
        answer:
          "Depending on the type and source of pain, nurses may teach and assist with positioning strategies, application of heat or cold therapy, relaxation breathing, activity pacing, and distraction techniques. These are used alongside medication — not instead of it — to achieve better overall pain control than medication alone.",
        category: "Non-Pharmacological Care",
      },
      {
        question: "How quickly can you start pain management services?",
        answer:
          "In most cases, we can begin within 24–48 hours of receiving a physician's order. For patients in significant uncontrolled pain following hospital discharge, we prioritize rapid initiation and can often arrange a same-day or next-day first visit. Call (773) 775-2588 to begin the process immediately.",
        category: "Getting Started",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "post-surgical-care",
      "medication-management",
    ],
  },

  // ─── POST-SURGICAL CARE ───────────────────────────────────────────────────
  "post-surgical-care": {
    overview: [
      "The first two weeks home after major surgery are when most complications happen. Wound infections, medication errors, dangerous blood clots, and preventable falls — these aren't rare tragedies, they're predictable risks that skilled post-surgical home care is specifically designed to prevent. When professional care starts within 24 to 48 hours of discharge, the risk of returning to the hospital drops dramatically.",
      "Our post-surgical care team brings together nurses, physical therapists, and occupational therapists based on your loved one's specific surgery and recovery needs. The nurse monitors the surgical wound, manages medications, assesses for infection or complications, and communicates daily progress to the surgeon's office. Physical therapy begins rebuilding strength and mobility. Occupational therapy helps with the practical daily tasks that suddenly feel impossible.",
      "For families watching a parent come home from a joint replacement, cardiac surgery, abdominal procedure, or cancer operation, the transition can feel terrifying. Having a clinical professional in the home changes that equation. Your loved one has someone watching for the specific warning signs of their particular surgery. Your family has someone to call when something looks wrong at 10 PM. That peace of mind is part of the care.",
    ],
    whoNeeds: [
      {
        icon: "activity",
        title: "After Hip or Knee Replacement",
        description:
          "Joint replacement recovery is highly protocol-driven and falls-sensitive. A nurse manages the surgical wound and pain, while a physical therapist begins the rehabilitation program that determines long-term function. This combination prevents the complications that lead to a second hospitalization.",
      },
      {
        icon: "heart",
        title: "After Cardiac Surgery or Heart Procedure",
        description:
          "Post-cardiac surgery recovery requires careful vital signs monitoring, fluid balance assessment, and medication management — including anticoagulants that carry serious bleeding risks. A skilled nurse provides the daily monitoring your loved one's cardiologist ordered.",
      },
      {
        icon: "clipboard-plus",
        title: "After Abdominal or Colorectal Surgery",
        description:
          "Abdominal surgeries leave patients managing incision care, new dietary restrictions, ostomies, or drains at home. A nurse teaches and monitors all of these, identifies infection early, and supports the transition to independent self-care as recovery progresses.",
      },
      {
        icon: "stethoscope",
        title: "After Cancer Surgery",
        description:
          "Cancer surgery recovery often involves complex wound care, drain management, lymphedema monitoring, and coordination with oncology follow-up. Our nurses are experienced in the specific recovery demands of oncological procedures.",
      },
      {
        icon: "shield",
        title: "High Risk for Hospital Readmission",
        description:
          "Older adults, patients with multiple chronic conditions, and those with limited social support are at the highest risk for 30-day readmission after surgery. Post-surgical home care is specifically designed to address each readmission risk factor during the most vulnerable window.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Post-Surgical Care",
      body:
        "Medicare covers post-surgical home health services — including skilled nursing, physical therapy, occupational therapy, and speech therapy — when ordered by the surgeon or physician and the patient meets homebound criteria. All covered services are provided with no copays. A physician's order is required to begin services, and this is typically arranged by the hospital discharge team.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How quickly can post-surgical care begin after my parent is discharged?",
        answer:
          "Our goal is to have a nurse in the home within 24 hours of discharge for post-surgical patients. The hospital discharge team typically arranges the physician's order and referral before your loved one leaves the facility. If services were not arranged by the hospital, call (773) 775-2588 immediately after discharge and we will expedite the intake process.",
        category: "Getting Started",
      },
      {
        question: "What surgical warning signs should family members watch for between visits?",
        answer:
          "Contact the nurse or physician immediately if you see: increasing redness, swelling, or warmth around the incision; drainage that is increasing, smells bad, or has changed color; the wound edges separating; fever above 101°F; new or worsening pain; shortness of breath or chest pain; or significant confusion or agitation. Your nurse will review surgery-specific warning signs with your family during the first visit.",
        category: "Warning Signs",
      },
      {
        question: "Will the home care team talk to my parent's surgeon?",
        answer:
          "Yes — direct communication with the surgeon's office is a core part of post-surgical home care. Our nurses document clinical findings at every visit and proactively contact the surgical team when they identify something that warrants a call. You don't have to be the go-between.",
        category: "Care Coordination",
      },
      {
        question: "My parent was told to limit activity after surgery. Can physical therapy still happen?",
        answer:
          "Absolutely — the physical therapist works within the specific activity restrictions ordered by the surgeon. They start with what's safe and progress systematically as healing allows. Knowing the restrictions and designing therapy around them is exactly what post-surgical physical therapy does.",
        category: "Physical Therapy",
      },
    ],
    relatedServices: [
      "wound-care-management",
      "physical-therapy",
      "medication-management",
    ],
  },

  // ─── CHRONIC DISEASE MANAGEMENT ───────────────────────────────────────────
  "chronic-disease-management": {
    overview: [
      "Living with heart failure, COPD, diabetes, or another serious chronic condition means living with the constant threat of a flare-up that sends your loved one back to the hospital. The difference between a stable chronic condition and a hospital readmission often comes down to monitoring — catching the early warning signs before they become crises. That's what chronic disease management nursing does, in your loved one's home, on a regular schedule.",
      "Our nurses don't just take vital signs. They know your loved one's baseline, recognize what 'different' looks like for this specific person, and understand the clinical significance of small changes. Two pounds of overnight weight gain in a heart failure patient isn't a footnote — it's a critical finding that needs a physician call today. Oxygen saturation trending down in a COPD patient isn't something to note for the next visit — it's something to act on now.",
      "Education is equally central to chronic disease management. Patients and families who understand the condition — what causes flare-ups, what dietary factors matter, how to recognize warning signs, and what to do when they appear — have dramatically better outcomes than those navigating by feel. Our nurses invest time in teaching, using language that makes sense for real life, not just medical textbooks.",
    ],
    whoNeeds: [
      {
        icon: "heart",
        title: "Heart Failure Requiring Daily Monitoring",
        description:
          "Heart failure management depends on catching fluid retention early — before weight gain, swelling, and breathlessness escalate into a hospitalization. A nurse monitors weight, blood pressure, and symptoms on a regular schedule and acts immediately when findings are concerning.",
      },
      {
        icon: "activity",
        title: "COPD with Frequent Exacerbations",
        description:
          "COPD patients who have been hospitalized for exacerbations need close monitoring in the periods following discharge. A nurse assesses breathing status, oxygen levels, and medication adherence — and initiates the physician contact that can prevent the next admission.",
      },
      {
        icon: "stethoscope",
        title: "Diabetes with Complex Management",
        description:
          "Uncontrolled blood sugar causes damage to the kidneys, nerves, and eyes — and drives wound complications, infections, and hospitalizations. A skilled nurse monitors glucose patterns, reinforces medication and diet education, and identifies complications early when they're still reversible.",
      },
      {
        icon: "brain",
        title: "Multiple Chronic Conditions",
        description:
          "Managing two or three serious conditions simultaneously is extraordinarily complex. Medications for one condition affect another; dietary restrictions conflict; treatment decisions require balancing competing priorities. A skilled nurse coordinates across the conditions and maintains a clear picture of the whole person.",
      },
      {
        icon: "shield",
        title: "Recent Hospitalization for a Chronic Condition",
        description:
          "The 30 days following a hospitalization for a chronic disease are the highest-risk window for readmission. Home nursing during this period provides the close monitoring that bridges the gap between hospital-level care and stable outpatient management.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Chronic Disease Management",
      body:
        "Medicare covers skilled nursing for chronic disease management when a physician orders visits and the patient meets homebound criteria. Monitoring, medication management, and patient education for conditions like heart failure, COPD, and diabetes are all covered services — with no copays for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "How is home nursing different from regular doctor's visits for chronic disease?",
        answer:
          "Physician appointments happen every few weeks or months, in a clinical setting, for 15 to 20 minutes. Home nursing happens weekly or more frequently, in the actual environment where your loved one lives and manages their condition. The nurse sees how they're actually eating, whether they're taking medications correctly, what the home situation looks like — and can intervene before a crisis rather than responding to one.",
        category: "About Our Services",
      },
      {
        question: "What does the nurse do specifically for a heart failure patient?",
        answer:
          "At every visit, the heart failure nurse assesses weight trend, blood pressure, pulse, oxygen saturation, lung sounds, and degree of edema in the legs and ankles. They review medication adherence, reinforce fluid and sodium restrictions, assess activity tolerance, and ask about symptoms like nighttime breathlessness or sudden fatigue. Any significant change triggers a same-day physician contact.",
        category: "Heart Failure",
      },
      {
        question: "Can home nursing help keep my parent out of the hospital?",
        answer:
          "This is the central purpose of chronic disease management nursing — and the evidence strongly supports its effectiveness. Patients receiving regular skilled nursing visits have significantly lower 30-day readmission rates than those without. Call (773) 775-2588 to discuss how we can set up a monitoring plan for your loved one's specific condition.",
        category: "Hospitalization Prevention",
      },
      {
        question: "Does Medicare cover chronic disease management nursing long-term?",
        answer:
          "Medicare covers skilled nursing as long as the patient continues to meet homebound criteria and the nursing visits continue to require skilled clinical judgment — not just routine monitoring. For stable chronic conditions, this can be a challenge; your nurse will help you understand the coverage status and plan accordingly. We verify coverage before services begin so there are no surprises.",
        category: "Coverage",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "medication-management",
      "medical-social-worker",
    ],
  },

  // ─── MEDICATION MANAGEMENT ───────────────────────────────────────────────
  "medication-management": {
    overview: [
      "Older adults take an average of five to seven medications — and many take far more. After a hospitalization, discharge instructions often add new medications to an already complex list, modify doses, or discontinue drugs in ways that are difficult for patients and families to track. Medication errors in this period are one of the leading preventable causes of hospital readmission. Having a skilled nurse review, reconcile, and manage the medication regimen at home is one of the most protective things you can do for your loved one.",
      "Medication management nursing involves a thorough review of every drug your parent takes — prescription, over-the-counter, and supplements. The nurse checks for dangerous interactions, verifies that doses match the current physician orders, assesses whether medications are being taken correctly and at the right times, and monitors for side effects that require a physician call. For patients taking anticoagulants, insulin, diuretics, or other high-risk medications, this oversight is especially critical.",
      "Beyond the clinical check, our nurses spend real time teaching. Many older adults and family caregivers don't fully understand what each medication does, why the dosing instructions matter, or what side effects should prompt a call to the doctor. When patients understand their medications, they take them correctly — and the outcomes are measurably better. That education is a core part of every medication management visit.",
    ],
    whoNeeds: [
      {
        icon: "clipboard-plus",
        title: "After Hospital Discharge with New Medications",
        description:
          "Hospital discharge routinely changes a patient's medication list — new prescriptions, dose changes, and discontinued drugs must all be reconciled correctly. A skilled nurse performs a complete medication review in the first 48 hours at home, catching errors before they cause harm.",
      },
      {
        icon: "brain",
        title: "Patients with Memory or Cognitive Impairment",
        description:
          "A patient with dementia or cognitive decline cannot reliably self-manage a complex medication regimen. Nursing oversight ensures medications are actually taken as ordered — not skipped, doubled, or confused with other pills.",
      },
      {
        icon: "stethoscope",
        title: "Complex Polypharmacy",
        description:
          "When a patient takes ten or more medications, the risk of dangerous interactions, cumulative side effects, and prescribing errors rises significantly. A skilled nurse conducts a polypharmacy review and flags concerns for the prescribing physician.",
      },
      {
        icon: "shield",
        title: "High-Risk Medications",
        description:
          "Anticoagulants, insulin, diuretics, opioids, and antiepileptic drugs require close monitoring because their margin of error is narrow. A nurse monitors for the specific signs of toxicity or under-treatment for each high-risk drug and responds before serious harm occurs.",
      },
      {
        icon: "heart",
        title: "Patients Who Are Not Improving as Expected",
        description:
          "When a patient isn't recovering or stabilizing the way the physician expects, medication non-adherence is frequently the hidden cause. A skilled nurse assesses actual medication-taking behavior — not just what the patient reports — and brings honest findings back to the care team.",
      },
    ],
    medicareCoverage: {
      headline: "How Medicare Covers Medication Management",
      body:
        "Medicare covers skilled nursing for medication management when a physician orders the service and the patient meets homebound criteria. Covered services include medication reconciliation, administration of ordered medications, patient and family education, and monitoring for adverse effects — with no copays for qualifying patients. A physician's order is required to begin services.",
      cta: {
        text: "Call to Verify Your Coverage: (773) 775-2588",
        href: "tel:(773)775-2588",
        variant: "phone" as const,
      },
    },
    faqs: [
      {
        question: "My parent says they take all their medications. Why does nursing oversight still matter?",
        answer:
          "Self-reported medication adherence is often inaccurate — not because patients are being dishonest, but because memory, confusion, and routine disruption mean they genuinely don't know what they've taken and when. A skilled nurse observes the actual medication-taking process, reviews the pill bottles, checks refill dates, and assesses pill counts. This gives a true picture that self-reporting simply cannot.",
        category: "About Our Services",
      },
      {
        question: "What is polypharmacy, and why is it dangerous?",
        answer:
          "Polypharmacy refers to taking multiple medications — typically defined as five or more, though the risks rise sharply with each additional drug. The danger lies in interactions: a medication that is safe alone may become dangerous when combined with several others. Side effects can compound, and a drug prescribed for one condition can worsen another. Our nurses are trained to identify polypharmacy risks and escalate concerns to the physician.",
        category: "Polypharmacy",
      },
      {
        question: "Can the nurse help organize my parent's medications so they're easier to manage?",
        answer:
          "Yes — organizing the medication regimen into a clear, manageable system is a core part of medication management nursing. This may involve pill organizers, medication schedules with clear instructions, and caregiver education on the daily routine. For patients with complex regimens, the nurse may also coordinate with the pharmacy on packaging solutions like blister packs that reduce error risk.",
        category: "Organization",
      },
      {
        question: "What happens if the nurse discovers a medication error?",
        answer:
          "The nurse documents the finding and contacts the prescribing physician the same day — not the next visit, not the next appointment, but immediately. If the error represents a safety risk, the response is urgent. Our nurses are trained to communicate clinical concerns clearly and advocate for prompt physician action when your loved one's safety is at stake. Call us any time at (773) 775-2588 if you have concerns about a medication situation.",
        category: "Errors and Safety",
      },
    ],
    relatedServices: [
      "skilled-nursing",
      "chronic-disease-management",
      "post-surgical-care",
    ],
  },
};

export function getServiceRichContent(slug: string): ServiceRichContent | undefined {
  return serviceRichContent[slug];
}
