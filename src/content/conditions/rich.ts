// src/content/conditions/rich.ts
// All Family Health Care — Rich Condition Page Content

import type { ConditionRichContent } from "@/types/content";

export const conditionRichContent: Record<string, ConditionRichContent> = {
  // ─── CARDIOVASCULAR ─────────────────────────────────────────────────────────

  "heart-failure": {
    overview: [
      "Heart failure doesn't mean the heart has stopped — it means it's struggling to pump blood as efficiently as it should. For your loved one, that struggle shows up as daily exhaustion, swollen ankles, shortness of breath, and the constant worry of another trip to the emergency room. Managing heart failure at home is absolutely possible, and with the right nursing support, most patients can stay stable, comfortable, and out of the hospital.",
      "The key to living well with heart failure is vigilance — catching small changes before they become crises. A sudden weight gain, a new cough at night, or increasing breathlessness are all signals that need immediate attention. Our nurses visit regularly to track these changes, adjust care plans, and communicate with your loved one's cardiologist — so nothing slips through the cracks.",
      "Home is where heart failure patients do best. Familiar surroundings reduce stress, and skilled nursing care in the home means your loved one doesn't have to travel to appointments when they're already exhausted. Our goal is simple: keep your parent stable, informed, and safely at home — where they want to be.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses visit multiple times per week to weigh your loved one, check for fluid retention, listen to lung sounds, and review medications. Early detection of fluid buildup or worsening symptoms is what prevents emergency room visits. Your nurse becomes the eyes and ears between cardiology appointments — catching changes your family might not know to look for.",
      },
      {
        serviceSlug: "chronic-disease-management",
        serviceName: "Chronic Disease Management",
        description:
          "Heart failure is a long-term condition that requires a long-term plan. Our chronic disease management program sets up a daily monitoring routine — weight logs, fluid intake targets, symptom tracking — and teaches your loved one and family how to recognize danger signs. We coordinate directly with their cardiologist so everyone is working from the same playbook.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Heart failure medications are complex — diuretics, ACE inhibitors, beta-blockers — and missing doses or taking the wrong amount can trigger rapid decline. Our nurses review every medication, set up pill organizers or blister packs, and educate your family on what each drug does and why it matters. We also watch for interactions and side effects that can sneak up on patients managing multiple conditions.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "When fatigue from heart failure makes bathing, dressing, or cooking feel impossible, our home health aides step in with respectful, dignified personal care. They also observe your loved one daily and report any changes to the nursing team — giving you an extra set of eyes in the home between skilled nursing visits.",
      },
    ],
    warningSigns: [
      "Sudden weight gain of 2 to 3 pounds in a single day or 5 pounds in one week — a sign of fluid retention.",
      "Swelling in the ankles, feet, or legs that is noticeably worse than usual.",
      "Shortness of breath at rest or waking up breathless in the middle of the night.",
      "A new persistent cough, especially one that produces pink or white mucus.",
      "Increasing confusion or unusual fatigue that wasn't there the week before.",
      "Dizziness or lightheadedness when standing up, which may signal a medication issue.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Same-Day Intake Call",
        description:
          "As soon as you contact us, a care coordinator reviews your loved one's discharge paperwork and cardiologist notes. We ask targeted questions about current symptoms, medications, and living situation. We can typically begin care within 24 to 48 hours of hospital discharge.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Home Assessment and Care Plan",
        description:
          "A registered nurse visits the home to complete a thorough assessment — vital signs, weight baseline, medication review, and a walkthrough of the home environment. From this visit, we build a personalized care plan aligned with the cardiologist's orders and your family's goals.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Ongoing Monitoring and Education",
        description:
          "Regular nursing visits follow a structured protocol — weighing, lung assessment, medication check, and education on daily self-monitoring. We teach your loved one and family members to recognize warning signs so everyone becomes part of the care team.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Coordination and Discharge Planning",
        description:
          "We keep your loved one's cardiologist informed of any changes and coordinate follow-up appointments. When your loved one reaches their goals and no longer needs skilled care, we help plan the transition — including what ongoing support to keep in place at home.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How often will a nurse visit for heart failure home care?",
        answer:
          "Visit frequency depends on stability and physician orders, but most heart failure patients start with three to five nursing visits per week. As your loved one stabilizes, visits may decrease. Your care plan is adjusted at every visit based on current symptoms and vital signs.",
        category: "Care Frequency",
      },
      {
        question: "Does Medicare cover home health care for heart failure?",
        answer:
          "Yes. Medicare Part A covers home health services — including skilled nursing and aide visits — when your loved one is homebound and a physician has ordered care. Most heart failure patients qualify. Call us at (773) 775-2588 and we will verify your coverage before the first visit.",
        category: "Insurance & Coverage",
      },
      {
        question: "What is the most important thing to monitor at home with heart failure?",
        answer:
          "Daily weight is the single most important indicator. A weight gain of two to three pounds overnight or five pounds in a week almost always means fluid is building up — and that is the warning sign that prevents a hospitalization. Our nurses establish a baseline weight and teach the whole family why this daily step matters.",
        category: "Self-Management",
      },
      {
        question: "Can home health care actually keep my parent out of the hospital?",
        answer:
          "Research consistently shows that structured home health care reduces heart failure readmissions significantly. The key is early detection — our nurses catch the subtle changes that precede a crisis. Many of our patients go months without a hospitalization once they have consistent nursing support at home.",
        category: "Outcomes",
      },
      {
        question: "My parent was just discharged and is still very weak. Can you start immediately?",
        answer:
          "Yes — and starting immediately is exactly right. The first 30 days after a heart failure hospitalization are the highest-risk period for readmission. We prioritize post-discharge referrals and can typically begin care within 24 to 48 hours. Call (773) 775-2588 to start the process today.",
        category: "Getting Started",
      },
    ],
  },

  "hypertension": {
    overview: [
      "High blood pressure is called the silent killer for a reason — most people feel perfectly fine until it causes a stroke, heart attack, or kidney damage. For older adults managing hypertension at home, the challenge isn't just taking a pill every day. It's knowing whether the medications are working, catching dangerous spikes before they cause harm, and making the lifestyle changes that actually move the numbers.",
      "Your loved one's blood pressure can vary significantly throughout the day based on stress, activity, fluid intake, and medication timing. A single reading at a doctor's office every few months doesn't capture that picture. Home health nursing fills that gap — with regular monitoring, medication review, and education that helps your parent understand what their body is telling them.",
      "Getting blood pressure under control is one of the most impactful things an older adult can do for their long-term health. When it's managed well, the risk of stroke drops dramatically, the heart works less hard, and your loved one simply feels better. Our nurses make that management practical and sustainable at home.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses take accurate blood pressure readings at each visit using proper technique — seated, both arms, after rest — and trend those readings over time to give the physician a real picture of control. When readings are trending up or medications aren't working as expected, your nurse communicates directly with the prescribing physician to get orders adjusted before a crisis develops.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Antihypertensive medications only work when taken correctly — at the right time, in the right dose, and consistently. Our nurses review every medication your loved one is taking, identify any that might be raising blood pressure (including over-the-counter drugs and supplements), and set up simple systems to ensure nothing is missed. We also educate on side effects like dizziness that can lead to falls.",
      },
      {
        serviceSlug: "chronic-disease-management",
        serviceName: "Chronic Disease Management",
        description:
          "Hypertension management goes beyond pills. Our chronic disease program addresses the full picture — sodium intake, fluid management, stress, sleep, and physical activity. We work with your loved one to set realistic goals and build habits that bring blood pressure down naturally alongside medication. Progress is tracked and shared with their physician at every visit.",
      },
    ],
    warningSigns: [
      "Severe headache — especially at the back of the head — that came on suddenly.",
      "Blurred or double vision that wasn't present before, which may signal a hypertensive crisis.",
      "Nausea, vomiting, or dizziness that coincides with known high blood pressure.",
      "Chest pain or shortness of breath in someone with a history of uncontrolled hypertension.",
      "Nosebleed that won't stop, particularly in someone who skipped their blood pressure medication.",
      "Confusion or unusual drowsiness that appeared rapidly and without an obvious cause.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Initial Nursing Assessment",
        description:
          "A registered nurse visits the home to take bilateral blood pressure readings, review all medications, assess diet and activity patterns, and identify any barriers to consistent self-management. This assessment forms the foundation of a personalized hypertension management plan.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Medication and Lifestyle Review",
        description:
          "Your nurse reviews every medication — prescription, over-the-counter, and supplements — for interactions or ingredients that raise blood pressure. A clear medication schedule is set up, and practical dietary guidance is provided around sodium and fluid intake.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Ongoing Monitoring and Education",
        description:
          "Regular visits track blood pressure trends and evaluate whether the current regimen is working. Your nurse teaches your loved one and family members how to take accurate home readings, when to call the doctor, and what emergency warning signs mean.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "My parent takes their blood pressure medication every day. Why is their pressure still high?",
        answer:
          "There are several reasons blood pressure can remain elevated despite medication — the dose may be too low, the medication may not be the right fit, other drugs may be interfering, or sodium and fluid intake may be offsetting the medication's effect. Our nurses do a thorough medication and lifestyle review to identify the likely cause and communicate findings to the prescribing physician.",
        category: "Medication",
      },
      {
        question: "How do home nurses check blood pressure differently than a doctor's office?",
        answer:
          "Home readings eliminate 'white coat hypertension' — the blood pressure spike many people experience in clinical settings. Our nurses take readings after your loved one has been seated quietly, often at the same time of day, and trend results over multiple visits. This gives the physician a far more accurate picture of actual blood pressure control.",
        category: "Monitoring",
      },
      {
        question: "Does Medicare cover nursing visits for hypertension management?",
        answer:
          "Medicare covers skilled nursing visits when your loved one is homebound and a physician has ordered care. Hypertension alone may not qualify, but most patients with hypertension also have related conditions like heart disease or diabetes that do meet the threshold. Call (773) 775-2588 and we will walk through your loved one's specific situation.",
        category: "Insurance & Coverage",
      },
      {
        question: "At what blood pressure reading should I call 911?",
        answer:
          "A systolic reading above 180 mmHg or diastolic above 120 mmHg — especially with symptoms like chest pain, severe headache, or vision changes — is a hypertensive emergency requiring immediate medical attention. Our nurses give every family a clear written guide on when to call 911 versus when to call us.",
        category: "Emergency Guidance",
      },
    ],
  },

  "post-heart-surgery-recovery": {
    overview: [
      "Coming home after open heart surgery, bypass, or valve replacement is a major milestone — and also one of the most vulnerable moments in the recovery process. The hospital stay has gotten shorter over the years, which means your loved one arrives home still healing, still adjusting to new medications, and still at real risk for complications. That first month at home is when having skilled nursing support makes the biggest difference.",
      "Cardiac surgery recovery involves multiple overlapping challenges at once: a sternal or leg wound that needs careful monitoring, a complex new medication regimen, strict activity restrictions, and a body that is rebuilding its strength from a major physical trauma. Most families feel unprepared for how much their loved one needs in the first weeks — and that's completely normal. Our job is to fill that gap.",
      "The goal of our cardiac recovery program is straightforward: prevent complications, keep your loved one moving safely forward, and get them to their follow-up appointments without a detour through the emergency room. Most patients who receive skilled home health care after cardiac surgery recover faster and with fewer setbacks than those who try to manage alone.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Your nurse visits multiple times per week to assess the surgical incision for signs of infection, check vital signs, review the new cardiac medication regimen, and monitor for heart failure symptoms like fluid retention or breathing changes. If anything looks concerning, your nurse contacts the surgeon or cardiologist directly — you don't have to navigate that alone.",
      },
      {
        serviceSlug: "post-surgical-care",
        serviceName: "Post-Surgical Care",
        description:
          "Our post-surgical care protocol for cardiac patients includes sternum precautions education, incision care, drain management if needed, and activity progression guidance. We teach your loved one exactly what movements to avoid and why — protecting the healing sternum while keeping the rest of the body moving to prevent complications like blood clots.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "After cardiac surgery, structured exercise is not optional — it's essential for recovery. Our physical therapists design a safe walking and strengthening program that respects surgical restrictions while building the cardiovascular endurance your loved one needs. Therapy happens in the home, which means no exhausting trips to an outpatient clinic during the most vulnerable weeks of recovery.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Post-cardiac surgery medication regimens are notoriously complex — blood thinners, beta-blockers, statins, diuretics, pain medications — often ten or more drugs with precise timing and dosing instructions. Our nurses set up a clear, organized medication system, educate your loved one and family on every drug's purpose, and watch for the side effects and interactions that are most common after cardiac surgery.",
      },
    ],
    warningSigns: [
      "Redness, warmth, increased drainage, or a foul odor from the sternal or leg incision site.",
      "Fever above 101°F, which may indicate a wound infection or other post-surgical complication.",
      "Clicking or movement felt in the sternum — a sign that the breastbone may not be healing properly.",
      "Rapid or irregular heartbeat, especially if new or different from what was present before discharge.",
      "Sudden increase in leg swelling or calf pain, which can signal a deep vein thrombosis.",
      "Shortness of breath at rest or with minimal activity that is getting worse rather than better.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Discharge Coordination",
        description:
          "We connect with the hospital care team before your loved one even comes home. The discharge planner shares surgical notes, medication lists, and activity restrictions so our nurses arrive at the first visit fully prepared — not learning from scratch.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "First Home Visit Within 24 Hours",
        description:
          "A registered nurse visits within 24 hours of hospital discharge to assess the incision, review all medications, take vital signs, and educate the family on sternum precautions. This visit is designed to catch any discharge-day issues immediately.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Coordinated Therapy and Nursing",
        description:
          "Physical therapy begins once the physician clears it, running parallel to nursing visits on a schedule designed to maximize recovery without overloading your loved one. Therapist and nurse communicate directly to ensure the activity plan is safe given current vital signs and incision status.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Transition to Outpatient Cardiac Rehab",
        description:
          "As your loved one regains strength and the incision fully heals, we help coordinate the transition to outpatient cardiac rehabilitation. We ensure the handoff is smooth and that your loved one's physician has a complete picture of progress made at home.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How soon after heart surgery can home health care begin?",
        answer:
          "Care should begin within 24 hours of discharge — ideally the same day your loved one comes home. The first 48 hours after cardiac surgery discharge are the highest-risk period for complications. We coordinate with the hospital discharge team ahead of time so there's no gap in coverage.",
        category: "Getting Started",
      },
      {
        question: "What are the most common complications after heart surgery that home nurses watch for?",
        answer:
          "Wound infection, fluid retention from heart failure, atrial fibrillation, blood clots in the legs, and medication errors are the most common post-cardiac surgery complications. Our nurses are specifically trained to recognize the earliest signs of each — and to contact the surgical team before a complication becomes serious.",
        category: "Clinical",
      },
      {
        question: "My parent doesn't want to do therapy yet — they're too tired. Is that normal?",
        answer:
          "Completely normal. Fatigue after cardiac surgery can be profound and is not a sign of failure — it's the body healing from a massive physical event. Our physical therapists are experienced with post-surgical fatigue and will start wherever your loved one is. Even gentle walking and breathing exercises in those early weeks make a measurable difference.",
        category: "Therapy",
      },
      {
        question: "Does Medicare cover home care after heart surgery?",
        answer:
          "Yes — post-surgical home health care is one of the clearest Medicare coverage situations. Your loved one must be homebound (which most cardiac surgery patients are in the first weeks) and have a physician order. Call us at (773) 775-2588 and we will handle the verification for you.",
        category: "Insurance & Coverage",
      },
    ],
  },

  // ─── NEUROLOGICAL ────────────────────────────────────────────────────────────

  "stroke-recovery": {
    overview: [
      "A stroke changes everything — often in an instant. Your loved one may have come home from the hospital able to walk but unable to button a shirt, or speaking but with words that won't come out right. Stroke recovery is real and it is possible, but it requires the right therapy, starting as soon as possible. The brain's ability to rewire itself — what neurologists call neuroplasticity — is strongest in the first weeks and months after a stroke. That window matters enormously.",
      "Home-based stroke recovery has a distinct advantage over inpatient rehab for many patients: therapy happens in the actual spaces your loved one needs to navigate. Walking the real hallway, getting into the real shower, sitting at the real kitchen table. Practice in context builds skills that transfer to real life faster than practice in a facility gym. Our therapists bring the full rehabilitation team to your loved one's home.",
      "Family involvement is one of the most powerful predictors of stroke recovery outcomes. Our team teaches family members how to assist with exercises between therapy visits, how to communicate effectively with a loved one who has aphasia, and how to adapt the home so it supports — rather than hinders — recovery. You are part of this team, and we will show you exactly how to help.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "After a stroke, the risk of another one is highest in the first 90 days. Our nurses monitor blood pressure, assess neurological status at each visit, review the complex anti-stroke medication regimen, and watch for any signs of recurring symptoms. They also assess for post-stroke complications like aspiration pneumonia, urinary infections, and skin breakdown that can derail recovery.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy after stroke focuses on relearning movement patterns and rebuilding the strength needed to walk, dress, and move through daily life. Your therapist works with your loved one in the rooms and spaces where they actually live — making recovery practical and real. Balance training, gait retraining, and progressive strengthening are tailored to exactly where your loved one is in their recovery.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy after stroke addresses the fine motor and cognitive skills needed for daily life — dressing, grooming, cooking, managing medications. Your occupational therapist assesses how the stroke affected function and designs a plan to rebuild those specific skills. They also evaluate the home for fall hazards and recommend adaptive equipment that restores independence without requiring full physical recovery first.",
      },
      {
        serviceSlug: "speech-therapy",
        serviceName: "Speech Therapy",
        description:
          "Speech therapy after stroke treats far more than speaking difficulties. Aphasia (difficulty finding words), dysarthria (slurred speech), and dysphagia (swallowing problems) are all within the speech therapist's scope. Our therapists use evidence-based techniques to help your loved one communicate more effectively and eat safely — two things that profoundly affect quality of life and recovery motivation.",
      },
    ],
    warningSigns: [
      "Sudden new weakness or numbness in the arm, leg, or face — especially on one side — which may signal a second stroke.",
      "Worsening speech difficulty or sudden inability to find words that wasn't present the day before.",
      "A drop in participation or motivation that is out of character and may indicate post-stroke depression.",
      "Choking or coughing during meals, which can signal swallowing dysfunction and aspiration risk.",
      "A fall, even a minor one — stroke patients have significantly elevated fall risk and any fall needs clinical evaluation.",
      "Fever, confusion, or painful urination, which may signal a urinary tract infection that can temporarily worsen stroke symptoms.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Rapid Start After Discharge",
        description:
          "We aim to begin care within 24 hours of stroke discharge. A registered nurse and therapist coordinator review hospital records, physician orders, and the discharge summary before the first visit. Every day of delay in the critical recovery window costs progress.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Comprehensive Home Assessment",
        description:
          "The occupational therapist conducts a home safety evaluation while the nurse completes the clinical assessment. Together they identify fall hazards, recommend grab bars or equipment, and establish therapy and nursing baselines. The full rehabilitation team is activated based on what stroke deficits are present.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Coordinated Rehabilitation",
        description:
          "Physical therapy, occupational therapy, speech therapy, and nursing visits are scheduled on a coordinated calendar to maximize recovery without overwhelming your loved one. All disciplines communicate directly — so the whole team knows what progress is being made and where to focus next.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Family Training and Transition Planning",
        description:
          "As recovery progresses, we shift toward teaching family members how to support continued improvement. We connect your loved one to outpatient stroke rehab when they are ready and ensure no gaps in the care continuum as home health needs decrease.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How soon after a stroke should home health care begin?",
        answer:
          "As soon as possible — ideally within 24 hours of discharge. The brain's recovery window is time-sensitive. The first three months after a stroke are when neuroplasticity is highest and therapy produces the most gains. Starting home health immediately after hospital discharge maximizes that window.",
        category: "Getting Started",
      },
      {
        question: "Can speech therapy help if my parent can't speak after a stroke?",
        answer:
          "Yes. Aphasia — the loss or impairment of language — is one of the most treatable stroke deficits with the right therapy approach. Our speech therapists use proven techniques including constraint-induced language therapy and augmentative communication strategies. Even patients with severe aphasia can make meaningful gains. Progress is not always linear, but it is real.",
        category: "Speech Therapy",
      },
      {
        question: "My parent had a stroke six months ago. Is it too late for home health therapy?",
        answer:
          "No. While the fastest gains typically happen in the first three months, research shows stroke recovery continues for years with consistent effort. If your loved one has developed new deficits, has had a change in functional status, or was not able to engage in rehab during the acute phase, they may still qualify for home health therapy. Call (773) 775-2588 to discuss their specific situation.",
        category: "Recovery Timeline",
      },
      {
        question: "What is the difference between physical therapy and occupational therapy after stroke?",
        answer:
          "Physical therapy focuses on mobility — walking, balance, transfers, and strength. Occupational therapy focuses on function — the daily tasks of dressing, grooming, cooking, and managing a household. Both are essential after stroke, and most patients benefit from both running simultaneously rather than sequentially.",
        category: "Therapy",
      },
      {
        question: "Does Medicare cover all the therapies needed for stroke recovery at home?",
        answer:
          "Medicare covers skilled nursing, physical therapy, occupational therapy, and speech therapy under home health — as long as your loved one is homebound and a physician has ordered the services. Most stroke patients qualify clearly. We handle insurance verification before care begins so there are no surprises.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "parkinsons-disease": {
    overview: [
      "Parkinson's disease is progressive, but that doesn't mean your loved one has to keep losing ground. With the right therapy and support at home, many people with Parkinson's maintain meaningful independence for years longer than they would without intervention. The challenge is that Parkinson's affects multiple systems at once — movement, speech, swallowing, cognition, and mood — and managing all of them requires a coordinated team, not just a single specialist.",
      "Falls are the leading cause of serious injury in Parkinson's patients, and they're largely preventable with the right physical and occupational therapy approach. Balance training, gait retraining, and home safety modifications can significantly reduce fall risk — keeping your loved one at home and out of the hospital or nursing facility. Our therapists specialize in exactly this kind of Parkinson's-specific intervention.",
      "Caring for a parent with Parkinson's is exhausting in ways that aren't always obvious — the medication timing, the on-off fluctuations, the communication challenges. Our home health aides and therapists don't just support your loved one — they support you, the family caregiver, by being a consistent, reliable presence in the home and a resource you can call when something feels off.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Parkinson's-specific physical therapy uses evidence-based approaches like LSVT BIG — a high-amplitude movement training program that directly addresses the small, shuffling movements characteristic of Parkinson's. Your therapist also works on balance, gait, and fall prevention, teaching your loved one movement strategies that compensate for the brain's reduced ability to initiate automatic movements.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy for Parkinson's addresses the fine motor challenges that make daily tasks feel impossible — buttoning, writing, eating, and managing medications. Your occupational therapist recommends adaptive tools, modifies the home to reduce fall hazards, and teaches energy conservation strategies that help your loved one do more without exhausting themselves.",
      },
      {
        serviceSlug: "speech-therapy",
        serviceName: "Speech Therapy",
        description:
          "Parkinson's causes the voice to become soft, monotone, and difficult to understand — a frustrating symptom that leads to social withdrawal. Our speech therapists use the LSVT LOUD protocol, proven to significantly increase vocal volume and clarity. They also address swallowing difficulties, which become increasingly common as Parkinson's progresses and pose real aspiration risks.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "Parkinson's symptoms fluctuate throughout the day — your loved one may be capable and mobile in the morning and rigid and frozen by afternoon. Our home health aides work around medication schedules and symptom patterns, providing personal care during the difficult periods while encouraging independence during the good ones. They are trained in safe transfer techniques and know exactly what a Parkinson's freezing episode looks like and how to respond.",
      },
    ],
    warningSigns: [
      "A fall, near-fall, or new complaint of feeling unsteady — even if your loved one brushes it off as nothing.",
      "Coughing or choking regularly during meals, which may indicate swallowing is becoming unsafe.",
      "Voice becoming so quiet that family members consistently can't hear or understand conversations.",
      "Medication wearing off earlier than expected, causing longer or more frequent 'off' periods.",
      "Increased confusion, vivid dreams, or hallucinations — which can be medication side effects or disease progression.",
      "Significant withdrawal from social activities or depression, which affects motivation for therapy and self-care.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Parkinson's-Specific Intake",
        description:
          "Our intake process for Parkinson's patients includes detailed questions about medication timing, on-off patterns, fall history, and which symptoms are most affecting daily life. This guides which disciplines we activate first and how we schedule visits around your loved one's best periods of the day.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Multidisciplinary Home Assessment",
        description:
          "Physical therapy, occupational therapy, and speech therapy each conduct their own assessment in the home, evaluating their specific domain. The nursing assessment covers medication management and medical monitoring. From these assessments, a coordinated care plan is built with clear goals for each discipline.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Intensive Therapy During Peak Function",
        description:
          "Therapy visits are scheduled during your loved one's best medication window — typically one to two hours after their morning dose — to maximize what they can accomplish in each session. We work with your loved one's neurologist to ensure the care plan reflects current medication changes.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Caregiver Training and Long-Term Planning",
        description:
          "We teach family caregivers safe transfer techniques, how to cue movement during freezing episodes, and how to recognize symptoms that need physician attention. As needs evolve, we adjust the care plan and discuss long-term support options with the family.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "What is LSVT BIG and LSVT LOUD, and do your therapists offer them?",
        answer:
          "LSVT BIG is a physical and occupational therapy protocol using large-amplitude movements to counteract the small, bradykinetic movements of Parkinson's. LSVT LOUD is the speech therapy equivalent, targeting increased vocal volume and clarity. Both are among the most evidence-supported Parkinson's interventions available. Ask about certified therapists when you call us at (773) 775-2588.",
        category: "Therapy",
      },
      {
        question: "My parent freezes mid-step and has nearly fallen. Can therapy help with this?",
        answer:
          "Yes — freezing of gait is one of the most dangerous Parkinson's symptoms and one that physical therapy directly addresses. Therapists teach cueing strategies — rhythmic auditory cues, visual floor targets, mental imagery — that help the brain initiate movement when automatic gait breaks down. Many patients see significant improvement in freezing frequency with consistent practice.",
        category: "Safety",
      },
      {
        question: "How do we manage home health care as Parkinson's progresses?",
        answer:
          "We adjust the care plan continuously as the disease evolves. In early stages, therapy focuses on maintaining function and slowing decline. As the disease progresses, home health aide support increases and therapy shifts to compensatory strategies and caregiver training. We have conversations about long-term planning early so families aren't making decisions in crisis.",
        category: "Disease Progression",
      },
      {
        question: "Does Medicare cover Parkinson's home health care?",
        answer:
          "Yes, Medicare covers skilled therapy and nursing for Parkinson's patients who are homebound. Parkinson's often qualifies patients clearly because leaving home requires considerable effort. Coverage extends to physical therapy, occupational therapy, and speech therapy as long as skilled goals are being actively worked toward.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "alzheimers-dementia": {
    overview: [
      "Keeping a parent with Alzheimer's or dementia at home is one of the most loving and demanding things a family can do. The disease takes things gradually — memory first, then judgment, then the ability to manage daily tasks safely — and families often don't realize how much they've been compensating until a crisis forces the question. Home health care doesn't replace family caregiving. It supports it, fills the clinical gaps, and makes it sustainable for longer.",
      "Safety is the central concern with dementia care at home. Wandering, falls, medication errors, and kitchen accidents are the most common causes of injury — and all of them are addressable with the right home modifications, care structure, and monitoring. Our occupational therapists and nurses assess the home through a dementia lens, identifying risks that families have grown accustomed to not seeing.",
      "We also take seriously what this experience costs family caregivers. Caregiver burnout in dementia families is nearly universal — and it's not a sign of failure, it's a sign of how relentless the disease is. Our home health aides provide relief. Our medical social worker connects families to support groups, respite resources, and long-term planning assistance. You don't have to manage this alone.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses manage the medical complexity that often accompanies dementia — blood pressure monitoring, diabetes management, wound care, and medication administration. They also screen for delirium, urinary tract infections (a common cause of sudden cognitive worsening in dementia patients), and pain that your loved one may not be able to communicate. Each visit includes a brief cognitive status check to track changes over time.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy for dementia focuses on creating a safe, structured home environment that supports function despite cognitive decline. Your occupational therapist conducts a detailed home safety assessment, recommends modifications to prevent wandering and falls, and develops simplified daily routines that reduce confusion and agitation. They also train family caregivers in communication strategies that reduce behavioral symptoms.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "Our home health aides are trained in dementia-specific care — how to approach a person with memory loss, how to redirect agitation without escalating it, and how to support bathing and grooming in a way that preserves dignity. Consistent aides build a relationship with your loved one that reduces anxiety and resistance. They are also an early warning system, noticing behavioral changes that signal medical needs.",
      },
      {
        serviceSlug: "medical-social-worker",
        serviceName: "Medical Social Worker",
        description:
          "A medical social worker connects your family to the resources you didn't know existed — caregiver support groups, respite programs, adult day programs, legal resources for advance directives and power of attorney, and guidance on long-term care planning. They also provide emotional support to family caregivers who are often running on empty and need someone to talk to who understands what this disease actually asks of a family.",
      },
    ],
    warningSigns: [
      "Sudden and dramatic worsening of confusion or disorientation that came on over hours or days — this often signals a treatable medical cause like a UTI or medication change.",
      "New wandering behavior, especially attempts to leave the house alone at night.",
      "Significant weight loss or refusal to eat, which may indicate depression, swallowing difficulty, or forgetting to eat.",
      "Uncharacteristic aggression, agitation, or paranoia that is increasing in frequency or intensity.",
      "Evidence of medication mismanagement — finding pills scattered, hoarded, or not taken.",
      "The primary family caregiver showing signs of burnout — a risk factor for patient neglect and injury.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Family and Patient Assessment",
        description:
          "Our intake process includes a conversation with family members about behavioral patterns, daily routines, current challenges, and what matters most to your loved one. Understanding the person behind the disease is as important as understanding the clinical picture.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Home Safety and Care Planning",
        description:
          "The occupational therapist conducts a dementia-specific home safety assessment. The nurse reviews medications and medical conditions. Together they build a care plan that addresses both the clinical and safety dimensions of dementia care at home.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Consistent In-Home Support",
        description:
          "Consistency is medicine for dementia patients. We assign the same aides and therapists whenever possible, building familiarity that reduces anxiety and improves cooperation. Visit schedules align with your loved one's daily routine rather than disrupting it.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Family Support and Future Planning",
        description:
          "The medical social worker meets with the family to discuss long-term options, legal planning, and available community resources. We help families think ahead — not because the conversation is easy, but because having a plan in place makes every stage of the disease more manageable.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "My parent keeps getting urinary tract infections that seem to make the dementia worse. Is that related?",
        answer:
          "Yes — this is one of the most important things dementia families need to know. UTIs in older adults with dementia frequently cause acute delirium — a sudden, severe worsening of confusion that can look like rapid disease progression. Our nurses screen for UTIs at every visit and know the subtle signs that present differently in dementia patients than in cognitively intact adults.",
        category: "Medical",
      },
      {
        question: "How do I know when home care is no longer enough for my parent with dementia?",
        answer:
          "The conversation about placement is one of the hardest — and our medical social worker is specifically trained to help families navigate it. General indicators that home care may no longer be sufficient include unsafe wandering that cannot be managed, physical care needs exceeding what family and aides can safely provide, or caregiver health declining due to the demands. Call us at (773) 775-2588 to talk through your loved one's specific situation.",
        category: "Long-Term Planning",
      },
      {
        question: "Can home health aides stay overnight with my parent who has dementia?",
        answer:
          "Our skilled home health services are typically provided during day and evening hours. For overnight and continuous supervision needs, we can connect your family with live-in or overnight aide arrangements and community resources that address round-the-clock care requirements.",
        category: "Care Hours",
      },
      {
        question: "My parent is in early-stage Alzheimer's and still mostly independent. Is it too soon for home health?",
        answer:
          "Early-stage is actually the ideal time to start. Home health in early dementia focuses on safety assessment, medication management systems, family education, and establishing routines before behavioral symptoms emerge. Starting early means fewer crises later.",
        category: "Timing",
      },
    ],
  },

  "multiple-sclerosis": {
    overview: [
      "Multiple sclerosis presents differently for every person — and often differently from week to week. On a good day, your loved one may feel capable and energetic. On a bad day, fatigue, weakness, spasticity, or vision changes may make the simplest tasks feel impossible. Home health care for MS is built around that variability — flexible enough to meet your loved one where they are, consistent enough to keep them moving forward.",
      "Fatigue is the most common and most disabling MS symptom, affecting nearly 80 percent of people with the disease. Standard physical and occupational therapy programs aren't always designed with MS fatigue in mind — and pushing too hard can trigger a crash that sets recovery back. Our therapists understand MS-specific fatigue management and design programs that build function without burning out the nervous system.",
      "The right home health support helps MS patients stay in their homes longer, maintain the skills that matter most to them, and adapt as the disease evolves. Our team doesn't just treat the current relapse — we build the skills and home environment modifications that support long-term independence.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy for MS addresses the movement challenges most common to the disease — weakness, spasticity, balance deficits, and gait abnormalities. Your therapist designs an exercise program that improves function without triggering fatigue-related crashes. Balance and fall prevention training is central to every MS physical therapy plan given the disease's significant fall risk.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy for MS focuses on energy conservation — learning to accomplish daily tasks in ways that don't deplete limited reserves. Your occupational therapist also addresses fine motor challenges, recommends adaptive equipment for tasks that have become difficult, and modifies the home environment to reduce fatigue and fall risk. Cognitive strategies for MS-related memory and concentration challenges are also within the scope of OT.",
      },
      {
        serviceSlug: "speech-therapy",
        serviceName: "Speech Therapy",
        description:
          "MS can cause dysarthria — slurred or slow speech — as well as cognitive-communication difficulties including word-finding problems and trouble with attention and memory during conversation. Our speech therapists address both the physical and cognitive dimensions of MS communication challenges, using strategies that help your loved one communicate more clearly and manage cognitive fatigue during demanding conversations.",
      },
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses manage MS-related medical complexity — disease-modifying medication administration, monitoring for relapse warning signs, managing bladder and bowel symptoms, and wound care if skin breakdown has occurred. During an acute exacerbation, nursing visits increase in frequency to support recovery. Your nurse also serves as the communication link between your loved one and the MS specialist.",
      },
    ],
    warningSigns: [
      "New or worsening neurological symptoms lasting more than 24 hours — this may be an MS relapse requiring medical evaluation.",
      "Sudden significant increase in fatigue that is worse than the usual MS fatigue pattern.",
      "A fall, or reporting that the legs 'gave out' unexpectedly during walking.",
      "Fever or signs of infection — even a mild infection can temporarily worsen MS symptoms significantly.",
      "Urinary urgency or incontinence that has changed from the established pattern, which may indicate a UTI or bladder dysfunction change.",
      "Increased depression or withdrawal, which is more common in MS than the general population and requires attention.",
    ],
    careJourney: [
      {
        step: "01",
        title: "MS-Specific Intake",
        description:
          "Our intake for MS patients includes questions about relapse history, current disease-modifying therapy, fatigue patterns, and functional goals. Understanding the specific MS disease course — relapsing-remitting, secondary progressive, primary progressive — shapes the entire care approach.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Fatigue-Aware Assessment",
        description:
          "Assessments are scheduled at times when your loved one is typically at their best, and are designed to be thorough without being exhausting. Each discipline — PT, OT, SLP, nursing — identifies specific deficits and builds goals that are challenging but achievable given MS-related fatigue constraints.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Coordinated, Paced Rehabilitation",
        description:
          "Visit frequency and intensity are carefully calibrated to avoid triggering post-exertional malaise. Therapists and nurses coordinate their schedules so your loved one isn't receiving multiple visits on the same day during recovery phases. Progress is measured and goals are adjusted every 60 days.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Relapse Response Protocol",
        description:
          "When a relapse occurs, we have a clear protocol — increase visit frequency, coordinate with the neurologist, modify therapy intensity, and support your loved one through recovery. Families know exactly who to call and what to expect. Relapses are managed, not scrambled through.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "Can physical therapy slow the progression of MS?",
        answer:
          "While therapy cannot slow the underlying disease process, it significantly slows functional decline. Consistent physical therapy maintains strength, balance, and mobility that would otherwise decrease. It also addresses the secondary complications of MS — like deconditioning and fall injury — that often cause more immediate disability than the disease itself.",
        category: "Therapy",
      },
      {
        question: "My parent's MS seems better some weeks and worse others. How does the care plan account for that?",
        answer:
          "This variability is central to how we plan MS care. Our care plans include guidance for good days, bad days, and relapse periods — so therapy intensity adjusts to your loved one's actual capacity rather than a fixed schedule. We build flexibility into visit planning and teach your loved one and family how to modify home exercise programs based on daily function.",
        category: "Care Planning",
      },
      {
        question: "Does Medicare cover home health therapy for MS?",
        answer:
          "Yes, when your loved one is homebound and has physician orders for skilled services. MS patients frequently qualify for homebound status due to fatigue, gait, and balance limitations. Call (773) 775-2588 to discuss your loved one's specific situation and verify coverage before care begins.",
        category: "Insurance & Coverage",
      },
      {
        question: "What is the difference between an MS exacerbation and normal symptom fluctuation?",
        answer:
          "A true exacerbation involves new or worsening neurological symptoms lasting more than 24 to 48 hours, not related to heat or infection. Normal fluctuation is day-to-day variation in symptom intensity that doesn't represent new lesion activity. Our nurses are trained to make this distinction and communicate findings to the neurologist when a true relapse is suspected.",
        category: "Clinical",
      },
    ],
  },

  // ─── RESPIRATORY ─────────────────────────────────────────────────────────────

  "copd": {
    overview: [
      "COPD is the third leading cause of hospitalization in the United States, and the majority of those hospitalizations are preventable. The difference between a patient who cycles in and out of the emergency room and one who stays stable at home is usually not the severity of the disease — it's the quality of the support system around them. Our nurses are that support system, monitoring daily for the early warning signs that predict exacerbations before they become emergencies.",
      "Life with COPD centers on breathing — something most people do without thinking. For your loved one, every activity requires conscious effort and energy management. Showering can be exhausting. Walking to the mailbox can trigger breathlessness that lasts an hour. Physical therapy with a pulmonary focus helps patients use their lungs more efficiently, manage exertion, and recover faster from activity — expanding the boundaries of what's possible at home.",
      "Medication management for COPD is complex — inhalers with multiple steps, nebulizer treatments, oral steroids during exacerbations, and oxygen therapy for some patients. Our nurses ensure every medication is being used correctly, every device is being operated properly, and the physician-prescribed action plan is in place and understood. Most COPD exacerbations that end in hospitalization started with a medication that wasn't working because it wasn't being used right.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses visit regularly to assess lung sounds, oxygen saturation, breathing effort, and signs of fluid retention that can worsen COPD. They review the physician-prescribed COPD action plan — yellow zone, red zone — and make sure your loved one and family know exactly when to escalate care. Early identification of exacerbations allows for outpatient treatment rather than emergency hospitalization.",
      },
      {
        serviceSlug: "chronic-disease-management",
        serviceName: "Chronic Disease Management",
        description:
          "COPD is a lifetime condition that requires a lifetime plan. Our chronic disease management program educates your loved one on triggers, breathing techniques, energy conservation, and activity pacing. We build a structured self-management routine — daily monitoring, medication use, activity logs — that gives your loved one and family the tools to manage the disease proactively rather than reactively.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Incorrect inhaler technique is one of the most common and consequential problems in COPD management. Our nurses watch your loved one use every inhaler and nebulizer, correcting technique and ensuring the medication is actually reaching the airways. They also review all COPD medications — controller inhalers, rescue inhalers, oral medications — for proper use, timing, and refill needs.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Pulmonary physical therapy teaches breathing techniques — pursed-lip breathing, diaphragmatic breathing — that make each breath more efficient and reduce the breathlessness that limits activity. Your therapist also designs a graded exercise program that safely improves cardiovascular endurance, making daily activities less exhausting. This is the home health equivalent of pulmonary rehabilitation.",
      },
    ],
    warningSigns: [
      "Increased breathlessness that is worse than usual and not relieved by the rescue inhaler.",
      "A change in sputum color from clear or white to yellow or green — a common sign of bacterial infection.",
      "Oxygen saturation dropping below 88 percent on a home pulse oximeter.",
      "Using the rescue inhaler more than twice a day when the usual pattern is once or less.",
      "Fever or chills accompanied by increased cough — signs of respiratory infection.",
      "Increasing ankle swelling or weight gain, which may indicate worsening right heart strain from COPD.",
    ],
    careJourney: [
      {
        step: "01",
        title: "COPD Action Plan Review",
        description:
          "At the first nursing visit, we review the physician-prescribed COPD action plan — or help create one if none exists. The action plan defines what to do in the green, yellow, and red zones, making decision-making clear and reducing panic during an exacerbation. Every family member gets a copy.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Medication and Device Training",
        description:
          "The nurse reviews every inhaler, nebulizer, and oral medication — watching technique, checking expiration dates, and confirming the correct devices are being used at the correct times. Oxygen therapy equipment is reviewed if applicable. Families are taught how to help without creating dependence.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Pulmonary Physical Therapy",
        description:
          "The physical therapist begins breathing retraining and a graded exercise program. Visits are scheduled on alternate days from nursing visits to maximize contact frequency without overwhelming your loved one's limited energy reserves.",
        icon: "shield-check",
      },
      {
        step: "04",
        title: "Monitoring and Exacerbation Prevention",
        description:
          "Ongoing nursing visits track oxygen levels, breathing patterns, and early infection signs. When yellow zone symptoms appear, we increase visit frequency and contact the physician for early intervention — turning potential hospitalizations into phone calls and adjusted medication orders.",
        icon: "phone-call",
      },
    ],
    faqs: [
      {
        question: "My parent uses a rescue inhaler several times a day. Is that a sign something is wrong?",
        answer:
          "Yes — rescue inhaler use more than twice a week (not per day) suggests the condition is not well controlled. Daily use is a yellow-zone indicator that warrants medical evaluation and often a medication adjustment. Our nurses track rescue inhaler frequency at every visit because it's one of the most reliable early warning signs of an impending exacerbation.",
        category: "Monitoring",
      },
      {
        question: "Can home health care actually prevent COPD hospitalizations?",
        answer:
          "Evidence consistently shows that structured home health care significantly reduces COPD readmissions. The mechanism is early detection — catching exacerbations in the yellow zone, when outpatient treatment works, rather than the red zone, when only the ER works. Many of our COPD patients go a year or more without hospitalization once consistent nursing support is in place.",
        category: "Outcomes",
      },
      {
        question: "Does Medicare cover home health care for COPD?",
        answer:
          "Yes. COPD patients frequently qualify for Medicare home health because the breathlessness associated with the disease makes leaving home taxing. Skilled nursing and physical therapy are covered when ordered by a physician. Call (773) 775-2588 and we will verify your loved one's specific coverage.",
        category: "Insurance & Coverage",
      },
      {
        question: "My parent's doctor mentioned pulmonary rehabilitation. Is that different from home PT?",
        answer:
          "Outpatient pulmonary rehabilitation is a structured, supervised group program at a hospital or clinic — highly effective when patients can attend. Home physical therapy provides similar breathing retraining and exercise in the home for patients who are too breathless or fatigued to travel to outpatient programs. Many patients do home PT first, then transition to outpatient pulmonary rehab when their condition allows.",
        category: "Therapy",
      },
    ],
  },

  "pneumonia-recovery": {
    overview: [
      "Pneumonia hits older adults harder than most people realize. What feels like it should be a simple illness to bounce back from often leaves older patients exhausted, weak, and significantly deconditioned for weeks after the fever breaks and the antibiotics are done. Leaving the hospital doesn't mean recovery is complete — it means the acute phase is managed and the hard work of rebuilding begins.",
      "The risks after pneumonia discharge are real. Relapse is common, especially in patients who don't complete their antibiotics or who push back to activity too quickly. Dehydration, aspiration of secretions, and secondary infections are all genuine concerns in the first weeks home. Our nurses monitor for these complications at every visit so your loved one's physician has an accurate clinical picture — not just how things look to an untrained eye.",
      "Rebuilding lung capacity and physical endurance after pneumonia takes time and effort. Patients who receive physical therapy during recovery regain function significantly faster than those who simply rest. Our approach balances appropriate rest with progressive activity — gradually rebuilding the respiratory muscle strength and endurance that pneumonia depletes.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Your nurse monitors vital signs, oxygen saturation, lung sounds, and signs of returning infection at every visit. They verify antibiotic completion, watch for medication side effects, and assess hydration and nutrition — two factors that significantly affect pneumonia recovery speed. Any sign of relapse is caught early and reported to the physician before it requires another hospitalization.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "After pneumonia, patients are often significantly deconditioned — weak from days in bed, with reduced lung capacity from the infection. Physical therapy begins with gentle breathing exercises and very gradual ambulation, progressively rebuilding cardiovascular endurance and respiratory strength. The goal is to get your loved one back to their pre-pneumonia functional level as safely and quickly as possible.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Pneumonia treatment involves antibiotics that must be completed correctly — stopping early, even when symptoms improve, is a common cause of relapse. Our nurses verify medication compliance, watch for antibiotic-related side effects like GI upset or drug interactions with existing medications, and coordinate with the physician if antibiotics need to be adjusted.",
      },
    ],
    warningSigns: [
      "Fever returning after it had resolved — a clear sign of possible relapse or secondary infection.",
      "Worsening shortness of breath rather than gradual improvement after the first week home.",
      "Productive cough worsening or sputum color changing to yellow or green.",
      "Oxygen saturation dropping below 92 percent on a home pulse oximeter.",
      "Confusion or unusual drowsiness, which can signal low oxygen or worsening infection in older adults.",
      "Inability to eat or drink adequately, which slows healing and increases complication risk.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Post-Discharge Nursing Assessment",
        description:
          "A registered nurse visits within 24 to 48 hours of hospital discharge to assess lung sounds, vital signs, oxygenation, and medication compliance. Families receive clear instructions on what to watch for at home and who to call if symptoms worsen.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Antibiotic Completion and Monitoring",
        description:
          "Nursing visits continue throughout the antibiotic course, verifying compliance and watching for side effects. The nurse communicates directly with the prescribing physician if any concerns arise rather than waiting for a scheduled office visit.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Functional Recovery with Physical Therapy",
        description:
          "Once the acute infection is resolving, physical therapy begins to rebuild strength and lung capacity. Activity is progressed gradually — from breathing exercises to ambulation to functional activities — following your loved one's tolerance and oxygen saturation response.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "My parent was discharged but still seems very weak. Is that normal after pneumonia?",
        answer:
          "Completely normal — and often underestimated by families. Pneumonia depletes the body significantly, and older adults typically take four to eight weeks to recover full strength. The fatigue is real, not psychological. Physical therapy and adequate nutrition are the two factors that most reliably speed recovery.",
        category: "Recovery",
      },
      {
        question: "How do I know if my parent's pneumonia is coming back?",
        answer:
          "Watch for returning fever, worsening cough, increasing breathlessness, or a drop in energy that seemed to be improving. Any of these after initial improvement warrants immediate medical contact. Our nurses are trained to catch subtle signs of relapse that families might attribute to normal tiredness — which is why regular nursing monitoring in the first two weeks is so important.",
        category: "Relapse Prevention",
      },
      {
        question: "Does Medicare cover home nursing after a pneumonia hospitalization?",
        answer:
          "Yes. A hospitalization for pneumonia is one of the clearest pathways to Medicare home health coverage. Your loved one must be homebound and have a physician order for skilled services. We work with the hospital discharge team to ensure orders are in place before your loved one comes home. Call (773) 775-2588 if you need help with this process.",
        category: "Insurance & Coverage",
      },
      {
        question: "Should my parent get the pneumonia vaccine after recovering?",
        answer:
          "That's a question for their physician, but generally yes — especially if they haven't received the current recommended vaccines. Our nurses flag vaccination status as part of the preventive care review and can communicate this to the physician during their post-discharge follow-up appointment coordination.",
        category: "Prevention",
      },
    ],
  },

  // ─── METABOLIC ────────────────────────────────────────────────────────────────

  "diabetes": {
    overview: [
      "Diabetes is the most demanding chronic disease to manage at home — blood sugar monitoring, insulin injections, foot care, diet restrictions, and the constant awareness that any lapse can lead to serious consequences. For older adults managing diabetes at home, the complexity is compounded by other medications, declining vision, neuropathy that affects their hands, and the cognitive load of managing everything simultaneously. Our nurses take that burden off the patient and family without taking away their independence.",
      "Diabetic complications often develop quietly. A wound on the foot that doesn't hurt because of neuropathy. A kidney function change that doesn't produce symptoms. Blood sugar running consistently too high or too low without clear symptoms. Our nurses bring clinical eyes to these invisible risks — assessing feet at every visit, reviewing blood glucose logs, and communicating findings to the physician before complications progress.",
      "Diabetes education is as important as any medication. When your loved one understands why blood sugar control matters — not just that it does — adherence improves dramatically. Our nurses teach in plain language, using real numbers from your loved one's own meter, and repeat and reinforce that education across every visit until it becomes second nature for the whole family.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses provide direct diabetes management — blood glucose monitoring, insulin administration training, HbA1c trend review, and foot assessments at every visit. They identify blood sugar patterns that are out of range and communicate medication adjustment recommendations to the physician. For patients starting on insulin for the first time, nursing education is essential to safe, confident self-management.",
      },
      {
        serviceSlug: "wound-care-management",
        serviceName: "Wound Care Management",
        description:
          "Diabetic foot wounds are one of the leading causes of hospitalization and amputation in older adults — and most are preventable with early intervention. Our wound care nurses manage diabetic ulcers with evidence-based dressings, offloading recommendations, and infection surveillance. They assess the entire foot at every visit, catching pre-ulceration skin changes before a wound develops.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Diabetes medications — insulin, metformin, SGLT2 inhibitors, GLP-1 agonists — interact with each other and with the many other medications older adults typically take. Our nurses review the complete medication list, watch for hypoglycemia risk from drug interactions, set up clear medication schedules, and educate your loved one on what each medication does and how to take it correctly.",
      },
      {
        serviceSlug: "chronic-disease-management",
        serviceName: "Chronic Disease Management",
        description:
          "Long-term diabetes control requires daily habits, not just medications. Our chronic disease management program builds a sustainable routine around blood sugar monitoring, meal timing, physical activity, foot care, and knowing when to call the doctor. We teach not just what to do, but why it matters — building the understanding that sustains adherence even on difficult days.",
      },
    ],
    warningSigns: [
      "Blood sugar readings consistently above 300 mg/dL or below 70 mg/dL despite following the medication regimen.",
      "Any wound, sore, or area of redness on the feet — even a small one that doesn't hurt.",
      "Sudden confusion, sweating, shakiness, or loss of consciousness, which are signs of severe hypoglycemia requiring immediate action.",
      "Excessive thirst, frequent urination, or fruity-smelling breath — signs of significantly elevated blood sugar.",
      "Swelling in the feet or lower legs that is new or worsening, which may signal kidney or heart complications of diabetes.",
      "A foot that feels cold, numb, or has changed color — signs of vascular or neurological complications.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Diabetes Assessment and Education",
        description:
          "The initial nursing visit includes a full diabetes assessment — current blood glucose logs, HbA1c if available, complete medication review, foot assessment, and an evaluation of self-management knowledge and confidence. This establishes baselines and identifies the highest-priority education needs.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Medication Reconciliation and Insulin Training",
        description:
          "All diabetes medications are reviewed for correct use, dosing, and interactions. For patients using insulin, the nurse observes the injection technique, reviews rotation sites, and ensures the patient and family understand hypoglycemia recognition and treatment. Insulin storage and supply management are also covered.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Foot Care and Wound Surveillance",
        description:
          "Foot assessment occurs at every nursing visit — checking for blisters, calluses, cuts, color changes, and temperature differences. Patients are taught daily self-inspection with a mirror if needed. Any wound is immediately treated and the physician is notified to ensure appropriate wound care orders are in place.",
        icon: "shield-check",
      },
      {
        step: "04",
        title: "Ongoing Management and Coordination",
        description:
          "Regular nursing visits track blood sugar trends and communicate findings to the endocrinologist or primary care physician. We flag patterns that need medication adjustment and ensure your loved one's diabetes management evolves as the condition changes over time.",
        icon: "phone-call",
      },
    ],
    faqs: [
      {
        question: "My parent's blood sugar is well controlled. Do they still need home health nursing?",
        answer:
          "Good control means the current system is working — and home health nursing helps maintain that. We screen for the complications that develop even with good control (neuropathy, wound risk, kidney function), ensure medications stay optimized as health changes, and provide the education that sustains good habits. Preventive home health nursing for well-controlled diabetes has a strong evidence base for preventing hospitalizations.",
        category: "Prevention",
      },
      {
        question: "My parent had a diabetic foot wound that healed. Is their foot still at risk?",
        answer:
          "Yes — a healed diabetic wound means the underlying risk factors (neuropathy, poor circulation, elevated blood sugar) are still present. Recurrence rates for diabetic foot wounds are high without ongoing foot surveillance. Our nurses assess the feet at every visit and teach proper daily foot care that significantly reduces recurrence risk.",
        category: "Wound Care",
      },
      {
        question: "Can a home health nurse administer insulin?",
        answer:
          "Yes. Skilled nurses can administer insulin, teach injection technique, manage insulin regimens, and monitor for hypoglycemia. For patients who cannot self-inject due to vision loss, arthritis, or cognitive impairment, nurse-administered insulin is a covered skilled nursing service under Medicare.",
        category: "Clinical Services",
      },
      {
        question: "Does Medicare cover diabetes home health care?",
        answer:
          "Yes, particularly when skilled nursing is needed for insulin management, wound care, or diabetes education in a homebound patient. Call (773) 775-2588 and we will assess Medicare coverage for your loved one's specific needs before the first visit.",
        category: "Insurance & Coverage",
      },
    ],
  },

  // ─── MUSCULOSKELETAL ─────────────────────────────────────────────────────────

  "hip-fracture-recovery": {
    overview: [
      "A hip fracture is one of the most serious injuries an older adult can experience — and the weeks immediately after surgery are when the trajectory of long-term recovery gets set. Patients who receive consistent physical therapy and skilled nursing at home after hip fracture surgery recover more function, regain independence faster, and are significantly less likely to end up in long-term care than those who don't. Home is where recovery is most effective, and we make home-based recovery possible.",
      "Fear is one of the biggest obstacles after a hip fracture. Fear of falling again. Fear of putting weight on the repaired hip. Fear of pushing too hard and damaging the surgical repair. Our physical therapists know exactly how to work through that fear — building confidence one small step at a time, while keeping your loved one safe within their surgeon's weight-bearing guidelines. Movement is what heals the hip. We make movement feel safe again.",
      "The activities of daily life — bathing, dressing, getting to the bathroom — present real challenges after a hip fracture. Our occupational therapists and home health aides work together to address these practical challenges, recommending adaptive equipment, modifying routines, and providing the physical assistance that keeps your loved one dignified and safe while the hip heals.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy after hip fracture follows the surgeon's specific weight-bearing orders — partial weight bearing, toe-touch, or full — and progressively builds from there. Your therapist works on transfers (getting in and out of bed, chairs, the car), gait training with appropriate assistive devices, and hip strengthening exercises that support the healing bone. Fall prevention is built into every session given the high risk of a second fracture.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Your occupational therapist addresses the hip precautions that govern daily activities after hip surgery — hip flexion limits, rotation restrictions — and teaches your loved one how to dress, bathe, and use the toilet safely within those restrictions. They recommend and arrange adaptive equipment like long-handled reachers, sock aids, and raised toilet seats that make independent daily care possible even with mobility limitations.",
      },
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Nursing visits after hip fracture surgery monitor the surgical incision for infection, manage pain and medications, watch for post-surgical complications like blood clots and pneumonia, and track vital signs. The nurse also coordinates with the orthopedic surgeon, communicating any clinical concerns that may need follow-up before the next scheduled office visit.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "In the first weeks after hip fracture, personal care tasks require an extra set of hands — and maintaining dignity while receiving that help matters enormously. Our home health aides assist with bathing, dressing, and meal preparation while reinforcing the hip precautions the therapist has taught. They report any changes in pain level or function to the nursing team between skilled visits.",
      },
    ],
    warningSigns: [
      "Sudden increase in pain at the surgical site that is different in character from the expected post-surgical ache.",
      "Calf pain, redness, or swelling that may signal a deep vein thrombosis — a common post-hip surgery complication.",
      "Fever above 101°F, which can indicate a wound infection or other complication.",
      "The leg appearing shorter or the foot turning outward more than expected, which may signal hardware failure.",
      "Increasing confusion or delirium — a common post-surgical complication in older adults that requires urgent evaluation.",
      "Any fall, even a minor one — the risk of a second fracture is high and any fall needs immediate assessment.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Same-Day Discharge Planning",
        description:
          "We connect with the hospital orthopedic team to receive weight-bearing orders, surgical notes, and discharge restrictions before your loved one arrives home. Physical therapy and nursing are scheduled to start within 24 hours of discharge. No gap in coverage.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Home Safety and Equipment Assessment",
        description:
          "The occupational therapist conducts a home assessment focused on fall hazards and hip precaution compliance — throw rugs, low seating, narrow bathrooms, lack of grab bars. Equipment needs are identified and arranged before or immediately after discharge. The goal is a home that supports recovery rather than creates risk.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Progressive Rehabilitation",
        description:
          "Physical therapy follows a structured protocol tied to the surgeon's weight-bearing timeline — progressing from transfers and bed mobility to walking with a walker, then to more independent ambulation. Every step forward is validated against clinical measures of strength, balance, and pain.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Fall Prevention and Long-Term Independence",
        description:
          "As your loved one approaches discharge from home health, we focus on what will keep them safe going forward — home modifications, fall prevention strategies, and an ongoing exercise program they can maintain independently or with minimal assistance.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "Is it really better to recover from a hip fracture at home than in a skilled nursing facility?",
        answer:
          "For many patients, yes. Research shows that older adults who receive high-quality home health care after hip fracture often achieve equal or better functional outcomes compared to inpatient rehab, with lower risk of acquiring hospital-associated infections. The key is having the right level of skilled support at home — which is exactly what we provide.",
        category: "Setting of Care",
      },
      {
        question: "What are hip precautions and how long do they last?",
        answer:
          "Hip precautions are surgeon-specific movement restrictions designed to prevent dislocation while the repaired hip heals. Common restrictions include not bending the hip past 90 degrees, not crossing the legs, and not rotating the foot inward. Duration varies by surgical approach — typically 6 to 12 weeks. Our occupational therapist explains each precaution in practical, activity-specific terms.",
        category: "Clinical",
      },
      {
        question: "My parent is scared to put weight on their hip. How do you handle that?",
        answer:
          "Fear of re-injury is one of the most common obstacles in hip fracture recovery and our therapists are experienced in working through it gradually. We never push faster than your loved one's confidence allows — we build trust first, then build function. Call (773) 775-2588 to speak with someone about your loved one's specific concerns.",
        category: "Therapy",
      },
      {
        question: "Does Medicare cover home health after hip fracture surgery?",
        answer:
          "Yes — hip fracture recovery is one of the clearest home health Medicare coverage situations. Post-surgical patients are typically homebound and have physician orders for skilled therapy and nursing. Coverage generally begins immediately after discharge and continues as long as skilled goals are being actively worked toward.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "joint-replacement-recovery": {
    overview: [
      "Hip and knee replacements are among the most successful surgeries in modern medicine — but the outcome depends heavily on what happens after the operating room. Research consistently shows that patients who receive home-based physical therapy after joint replacement achieve functional outcomes as good as inpatient rehabilitation, with a fraction of the disruption. Your loved one can recover at home — in their own bed, their own bathroom, their own kitchen — and do it well.",
      "The timing of early therapy after joint replacement matters enormously. The window between surgery and scar tissue formation is short, and range of motion gains made in the first weeks are far easier to achieve than range of motion fought for after the joint has stiffened. Our physical therapists begin working with your loved one within 24 to 48 hours of discharge — capitalizing on that window while it's open.",
      "Most families are surprised by how much help their loved one needs in the first two weeks after a joint replacement. Getting dressed, using the bathroom, managing stairs, preparing meals — all of these involve the replaced joint. Our occupational therapists and home health aides fill that gap without judgment, helping your loved one stay comfortable and safe while the new joint integrates and strength returns.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy after joint replacement begins with managing swelling and regaining range of motion — then progressively adds strengthening and functional mobility training. Your therapist follows the surgeon's specific protocol and progresses your loved one as clinical measures allow. They also address gait, teaching your loved one to walk correctly with the new joint from the beginning rather than developing compensatory patterns that cause long-term problems.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy after joint replacement focuses on getting your loved one safely through the daily activities that require the replaced joint — dressing, bathing, stairs, car transfers. The occupational therapist recommends adaptive equipment specific to the joint replaced (knee versus hip have different challenges) and teaches movement strategies that protect the surgical repair during healing.",
      },
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Nursing visits after joint replacement monitor the incision, manage anticoagulation therapy (a standard part of joint replacement care), assess for blood clots in the legs, and review the post-surgical medication regimen including pain management. Your nurse also monitors for signs of infection that can threaten the implant — catching any concerning changes early when they are most treatable.",
      },
      {
        serviceSlug: "post-surgical-care",
        serviceName: "Post-Surgical Care",
        description:
          "Our post-surgical care protocol for joint replacement covers wound care, drain management if applicable, swelling management strategies, and activity progression guidelines from the surgeon. We ensure your loved one is following the post-surgical protocol correctly — including leg elevation, ice application, compression stocking use, and blood clot prevention measures.",
      },
    ],
    warningSigns: [
      "Increasing redness, warmth, or drainage from the incision site beyond the first few post-surgical days.",
      "Calf pain, swelling, or redness that develops during the recovery period — signs of deep vein thrombosis.",
      "Fever above 101°F — a joint replacement infection is a serious complication requiring urgent evaluation.",
      "Sudden severe pain in the replaced joint that is dramatically different from expected post-surgical pain.",
      "A clicking, locking, or giving-out sensation in the replaced joint.",
      "Significant swelling of the entire limb that is worsening rather than improving in the second week.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Pre-Discharge Coordination",
        description:
          "We connect with the hospital orthopedic team before your loved one comes home to receive surgical protocol details, weight-bearing instructions, and the anticoagulation plan. This eliminates confusion about what your loved one should and shouldn't be doing in the first critical days home.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "First Visit Within 24 Hours",
        description:
          "A physical therapist and nurse visit within 24 hours of discharge. The therapist begins the official surgical protocol exercises and assesses function. The nurse checks the incision, reviews medications, and confirms anticoagulation compliance. Early intervention produces better range of motion outcomes.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Progressive Functional Rehabilitation",
        description:
          "Therapy progresses from basic exercise and transfers to stair climbing, car transfers, and community ambulation preparation. Each progression is documented and communicated to the surgeon so the office visit is a celebration of progress rather than a catch-up on what we don't know.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Transition to Outpatient Therapy",
        description:
          "When your loved one is ready for outpatient physical therapy — typically four to six weeks post-surgery — we facilitate that transition and provide the outpatient therapist with a complete summary of progress made at home. Recovery doesn't end at home health discharge; it continues.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How soon after joint replacement surgery should physical therapy start?",
        answer:
          "Most surgeons want therapy to begin within 24 to 48 hours of discharge — and so do we. The first two weeks are the most important for range of motion recovery. Scar tissue formation begins almost immediately after surgery, and early motion is what prevents excessive stiffness. We schedule the first therapy visit before your loved one leaves the hospital.",
        category: "Timing",
      },
      {
        question: "My parent had a knee replacement. How long until they walk normally?",
        answer:
          "Most patients are walking with a cane by four to six weeks and without a cane by eight to twelve weeks, though individual timelines vary based on age, fitness level, and pre-surgical function. Our therapists set realistic week-by-week milestones at the first visit so your loved one knows what progress to expect and can celebrate each one.",
        category: "Recovery Timeline",
      },
      {
        question: "Is a blood clot common after joint replacement? How will we know if it happens?",
        answer:
          "Deep vein thrombosis is one of the most common serious complications after joint replacement, which is why all patients receive anticoagulation therapy. Warning signs include calf pain, swelling, warmth, or redness — call 911 or go to the ER immediately if these develop. Our nurses assess for DVT at every visit and reinforce anticoagulation compliance. Call us at (773) 775-2588 if you see any of these signs between visits.",
        category: "Safety",
      },
      {
        question: "Does Medicare cover home physical therapy after knee or hip replacement?",
        answer:
          "Yes. Post-joint replacement patients are typically homebound in the early weeks and have clear physician orders for skilled therapy and nursing. Medicare covers home health services for as long as skilled goals are being actively worked toward. We verify coverage before care begins.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "arthritis": {
    overview: [
      "Arthritis — whether osteoarthritis wearing down joint cartilage or rheumatoid arthritis attacking the joint lining — changes how every movement feels. For your loved one, it may mean morning stiffness that makes getting out of bed a twenty-minute ordeal, or hands that can no longer open jars, button shirts, or write clearly. The instinct is often to stop moving to avoid the pain. That instinct, though understandable, makes arthritis worse — and home health therapy is designed to break that cycle.",
      "The right kind of movement is one of the most effective treatments for arthritis pain. Therapeutic exercise maintains joint mobility, strengthens the muscles that protect joints, and reduces the inflammation that causes pain. The challenge is knowing which movements help, which hurt, and how to modify activities to protect damaged joints while staying as active as possible. Our physical and occupational therapists are experts at exactly this balance.",
      "Adaptive equipment and home modifications can restore independence that arthritis has taken away. Jar openers, built-up pen grips, grab bars, elevated toilet seats, modified door handles — small changes that make the difference between managing independently and needing help for every task. Our occupational therapist assesses your loved one's home and daily routine specifically and recommends targeted solutions rather than generic products.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy for arthritis focuses on maintaining and restoring joint range of motion, strengthening the muscles that protect arthritic joints, and improving overall functional mobility. Your therapist teaches your loved one a home exercise program specifically designed for arthritis — knowing which exercises help, which to avoid, and how to modify activities on high-pain days. Aquatic therapy referrals are available for patients with severe joint pain.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy for arthritis centers on joint protection — learning to perform daily tasks in ways that distribute load away from damaged joints and reduce long-term damage. Your occupational therapist recommends adaptive equipment specific to your loved one's most problematic joints and daily tasks, and teaches energy conservation strategies that allow your loved one to do more before pain becomes limiting.",
      },
      {
        serviceSlug: "pain-management",
        serviceName: "Pain Management",
        description:
          "Home pain management for arthritis goes beyond medication reviews. Our team teaches modalities that patients can use at home — heat application for morning stiffness, cold application for acute flares, TENS unit guidance if appropriate, and positioning strategies for sleeping and sitting that reduce overnight joint pain. Managing pain between medical appointments empowers your loved one to control arthritis rather than letting it control them.",
      },
    ],
    warningSigns: [
      "A joint that becomes suddenly hot, red, and significantly more swollen than usual — which may indicate a gout attack or joint infection.",
      "Pain that wakes your loved one from sleep consistently, rather than just following activity.",
      "Loss of ability to fully straighten or bend a joint that was previously possible.",
      "Significant muscle weakness around an arthritic joint that makes it feel unstable or likely to give out.",
      "A fall or near-fall connected to joint giving way or severe pain during movement.",
      "Signs of rheumatoid arthritis flare — widespread joint swelling, fatigue, and morning stiffness lasting more than an hour.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Joint-by-Joint Assessment",
        description:
          "The physical therapist performs a detailed assessment of affected joints — range of motion, strength, pain patterns, and functional limitations. The occupational therapist evaluates how arthritis affects daily tasks. Together they identify priorities: which limitations have the most impact on quality of life and independence.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Personalized Exercise Program",
        description:
          "A home exercise program is designed specifically for your loved one's arthritis pattern — which joints are affected, what their current function is, and what their goals are. The program balances joint protection with progressive challenge, and includes modifications for high-pain days so the program doesn't get abandoned when symptoms flare.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Equipment and Home Modification",
        description:
          "Adaptive equipment recommendations and home modification suggestions are implemented. Your loved one practices using each piece of equipment with the therapist to ensure proper technique. The goal is restoring the specific tasks that matter most to your loved one's daily independence.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "Will physical therapy make my parent's arthritis pain worse?",
        answer:
          "It's common to experience mild muscle soreness in the first week or two as joints and muscles adapt to movement they haven't done recently. This is different from joint pain that worsens significantly or persists for more than 24 hours after a session. Our therapists teach the difference and adjust the program immediately if any exercise is causing harm rather than benefit.",
        category: "Therapy",
      },
      {
        question: "Can home health help my parent with rheumatoid arthritis manage during a flare?",
        answer:
          "Yes. During a rheumatoid arthritis flare, the therapy approach shifts — exercises become gentler, joint protection takes priority, and rest is incorporated strategically. Our therapists are experienced with flare management and know how to maintain progress during high-disease-activity periods rather than simply stopping therapy until the flare resolves.",
        category: "Disease Management",
      },
      {
        question: "Does Medicare cover home health occupational and physical therapy for arthritis?",
        answer:
          "Medicare covers skilled therapy services when your loved one is homebound — meaning leaving home requires considerable effort due to arthritis pain and mobility limitations — and has physician orders for skilled services. Many arthritis patients qualify. Call (773) 775-2588 to discuss your loved one's specific situation.",
        category: "Insurance & Coverage",
      },
      {
        question: "What is joint protection, and why is it important for arthritis?",
        answer:
          "Joint protection is a set of techniques — learned through occupational therapy — for performing daily tasks in ways that reduce stress on arthritic joints. Examples include using larger joints instead of smaller ones, avoiding tight grips, and using adaptive equipment to reduce force requirements. Over years, joint protection behaviors significantly slow structural joint damage and reduce pain during activity.",
        category: "Education",
      },
    ],
  },

  "chronic-pain": {
    overview: [
      "Chronic pain is exhausting in ways that go beyond the physical. Living with pain that never fully goes away affects sleep, mood, motivation, relationships, and the ability to do the things that give life meaning. For your loved one, chronic pain may have gradually narrowed their world — fewer activities, more time in the chair, increasing dependence — and that narrowing is both a consequence of pain and a factor that makes it worse. Our team works on both.",
      "Chronic pain management at home requires more than prescriptions. Medication is one tool in a broader approach that includes physical therapy for movement-based pain relief, nursing monitoring for medication safety and side effects, education on pain neuroscience, and practical strategies for managing activity within pain limits. Our multidisciplinary approach addresses chronic pain from every angle — not just the pharmaceutical one.",
      "Families often feel helpless watching a loved one live with chronic pain. Our team includes your family in the care plan — teaching how to support your loved one without reinforcing pain-avoidance behaviors, how to recognize medication side effects worth reporting, and how to communicate effectively with the medical team when pain levels are changing. You become part of the solution.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses monitor pain levels systematically, assess medication effectiveness and side effects, and communicate trends to the prescribing physician. For patients on opioid analgesics, nurses watch for signs of over-sedation, constipation, and other serious side effects. They also screen for depression and anxiety, which are present in the majority of chronic pain patients and directly affect pain intensity and treatment response.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Movement is medicine for chronic pain — but the approach matters enormously. Graded exercise exposure is the evidence-based strategy for rebuilding function in chronic pain patients, gradually expanding the range of pain-free or tolerable movement. Your therapist also teaches manual therapy techniques, TENS unit use, and pain-specific exercise strategies that your loved one can apply independently to manage daily pain peaks.",
      },
      {
        serviceSlug: "pain-management",
        serviceName: "Pain Management",
        description:
          "Beyond exercise, our team teaches a full toolkit of non-pharmacological pain management strategies — heat and cold application protocols, positioning and seating modifications, sleep hygiene for pain-disrupted sleep, activity pacing to avoid the boom-and-bust cycle that worsens chronic pain, and breathing techniques that activate the body's natural pain-dampening pathways.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Chronic pain medications — opioids, muscle relaxants, nerve pain medications — carry significant risks when not managed carefully, particularly in older adults. Our nurses review every medication for appropriate dosing, drug interactions, fall risk (many pain medications increase fall risk significantly), and signs of dependence or misuse. They serve as a safety net between physician appointments.",
      },
    ],
    warningSigns: [
      "Pain that is significantly increasing in severity without a clear physical explanation, which may signal disease progression or a new problem.",
      "New neurological symptoms accompanying pain — weakness, numbness, or loss of bladder or bowel control — which require urgent evaluation.",
      "Signs of opioid over-sedation: excessive sleepiness, slowed breathing, confusion, or difficulty waking.",
      "Complete withdrawal from all activity and social contact due to pain — a sign of significant depression that needs treatment.",
      "Medication use inconsistent with prescription — running out early, taking more than prescribed, or seeking early refills.",
      "Falls or near-falls attributable to pain medication side effects like dizziness or sedation.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Comprehensive Pain Assessment",
        description:
          "The initial nursing visit uses validated pain assessment tools to establish a baseline — location, character, severity, what makes it better and worse, how it affects function and sleep. This detailed picture guides the care plan and gives the physician objective data beyond 'it hurts.'",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Medication Safety Review",
        description:
          "All pain medications are reviewed for appropriateness, side effects, and interactions with other drugs. Fall risk from pain medications is assessed and mitigation strategies put in place. A clear schedule and monitoring protocol is established for controlled substances.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Physical Therapy and Non-Drug Strategies",
        description:
          "Physical therapy begins with assessment of current functional capacity and pain-related avoidance behaviors. A graded activity program is developed alongside non-pharmacological pain management strategies. Progress is tracked and the program adjusted based on pain response.",
        icon: "shield-check",
      },
      {
        step: "04",
        title: "Ongoing Monitoring and Coordination",
        description:
          "Nursing visits continue to track pain levels, medication effectiveness, and function. When pain is changing or current management is insufficient, we communicate directly with the physician to advocate for medication adjustments or specialist referrals.",
        icon: "phone-call",
      },
    ],
    faqs: [
      {
        question: "My parent is already seeing a pain specialist. Does home health nursing add anything?",
        answer:
          "Yes — significantly. The pain specialist sees your loved one for an hour every few months. Our nurses see your loved one at home, observe how the medication plan is working in real life, and identify problems between appointments. We serve as the clinical eyes and ears for the specialist, giving them the information they need to optimize the treatment plan.",
        category: "Care Coordination",
      },
      {
        question: "Is my parent's pain just part of getting old, or is it treatable?",
        answer:
          "While some degree of musculoskeletal change comes with age, chronic pain is not a normal part of aging that must simply be endured. Most chronic pain in older adults is undertreated — and a combination of physical therapy, medication optimization, and non-pharmacological strategies can achieve meaningful improvement in the vast majority of patients. The first step is a thorough assessment. Call (773) 775-2588 to start that process.",
        category: "General",
      },
      {
        question: "I'm worried my parent is becoming dependent on pain medication. What should I do?",
        answer:
          "This is an important concern to address directly — not quietly hoped for improvement. Our nurses assess medication use patterns at every visit and are trained to distinguish physical dependence (a normal physiological response to opioids) from problematic misuse. If concerns are present, we communicate them to the prescribing physician and help the family navigate next steps.",
        category: "Medication Safety",
      },
      {
        question: "Does Medicare cover physical therapy and nursing for chronic pain?",
        answer:
          "Medicare covers skilled services for chronic pain when the patient is homebound and a physician has ordered care. Physical therapy is covered as long as skilled goals are being actively worked toward. Nursing visits are covered when medication management, education, or other skilled services are needed. We verify coverage before the first visit.",
        category: "Insurance & Coverage",
      },
    ],
  },

  // ─── ONCOLOGY ─────────────────────────────────────────────────────────────────

  "cancer-recovery": {
    overview: [
      "Cancer changes everything — and so does the path back. Whether your loved one is recovering from surgery, completing radiation, or transitioning to survivorship, the physical and emotional aftermath of cancer treatment is real, significant, and often underserved. Coming home from the hospital after cancer treatment doesn't mean the hard part is over — it means a different kind of hard part begins, one that happens on your loved one's couch, in their bathroom, and around their kitchen table.",
      "Cancer recovery at home involves managing multiple overlapping challenges simultaneously: fatigue more profound than most people have ever experienced, pain that may be surgical, disease-related, or treatment-related, wounds that need skilled care, medications with complex schedules and significant side effects, and the emotional weight of everything this disease has asked. Our team addresses all of it — not just the parts that show up on a discharge summary.",
      "Family caregivers carry enormous weight during cancer recovery — and most do it without adequate support or information. Our medical social workers connect families to the resources that exist but aren't well-publicized: transportation assistance, financial aid programs, caregiver support groups, respite services, and emotional support. Our nurses keep families informed and involved in clinical decisions. No one should navigate cancer recovery alone.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Cancer nursing at home encompasses everything from IV medication administration and port care to pain assessment, wound care, and infection monitoring in immunocompromised patients. Our nurses understand the specific risks of the cancer and treatment type — whether that's post-surgical monitoring, chemotherapy side effect management, or radiation skin care — and apply clinical expertise that general home nursing may not provide.",
      },
      {
        serviceSlug: "wound-care-management",
        serviceName: "Wound Care Management",
        description:
          "Cancer surgery often creates complex wounds — ostomy sites, surgical drains, radiation skin breakdown, or wounds that heal poorly due to treatment effects on tissue. Our wound care nurses are specifically trained in oncology wound management, using specialized dressings and techniques appropriate for the altered healing environment that cancer treatment creates. Wound assessment and treatment are documented and reported to the oncology team.",
      },
      {
        serviceSlug: "pain-management",
        serviceName: "Pain Management",
        description:
          "Cancer pain is complex — it can be surgical, disease-related, neuropathic from treatment, or a combination. Our nurses assess pain systematically, using validated tools to communicate severity to the oncology team in clinical language that prompts appropriate medication adjustment. We also teach non-pharmacological strategies — positioning, heat, cold, relaxation techniques — that help manage pain between medication doses.",
      },
      {
        serviceSlug: "medical-social-worker",
        serviceName: "Medical Social Worker",
        description:
          "A cancer diagnosis affects the whole family — financially, emotionally, and practically. Our medical social worker connects your family to cancer-specific resources: co-pay assistance programs, transportation services, meal delivery, legal support for disability claims, advance directive guidance, and emotional support resources. For families navigating end-of-life conversations, our social worker provides compassionate guidance that medical staff often don't have time to offer.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "Cancer treatment fatigue is unlike ordinary tiredness — it doesn't improve with rest and can make basic self-care impossible. Our home health aides provide dignified personal care assistance that preserves your loved one's energy for what matters most — spending time with family, attending treatment appointments, doing the things that bring meaning. Aides trained in oncology care understand infection risk and take appropriate precautions for immunocompromised patients.",
      },
    ],
    warningSigns: [
      "Fever above 100.4°F in a patient who has received chemotherapy in the past three weeks — this is a medical emergency that requires immediate evaluation.",
      "New or worsening pain that is significantly different from the established pain pattern.",
      "Signs of wound infection at a surgical site: increasing redness, warmth, swelling, or drainage.",
      "Severe nausea, vomiting, or inability to keep medications or fluids down for more than 24 hours.",
      "Confusion, unusual weakness, or significant change in mental status that came on rapidly.",
      "Signs of severe depression or statements suggesting hopelessness — which are medical concerns, not character issues, and deserve clinical attention.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Oncology-Informed Intake",
        description:
          "Our intake for cancer patients gathers detailed information about diagnosis, treatment received, current treatment phase, and the oncology team's specific instructions. This allows us to build a care plan that is genuinely coordinated with the cancer care team rather than parallel to it.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Clinical and Supportive Assessment",
        description:
          "The nurse completes a comprehensive clinical assessment while the social worker meets with the patient and family to understand practical needs, emotional state, and available support. Both dimensions — clinical and psychosocial — are addressed from the first visit.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Coordinated Skilled Care",
        description:
          "Nursing, wound care, aide services, and social work operate from a unified care plan with shared communication. Changes in the patient's condition are communicated to the oncology team promptly. We work alongside the oncologist, not in isolation from them.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Survivorship or End-of-Life Support",
        description:
          "For patients moving into survivorship, we help transition to the preventive monitoring and lifestyle support that reduces recurrence risk. For patients whose disease is not responding to treatment, we provide compassionate support and help connect families to palliative care and hospice resources when appropriate.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "My parent just finished chemotherapy and is exhausted. What can home health do?",
        answer:
          "Post-chemotherapy fatigue is real and often severe — it's caused by direct treatment effects on the body, anemia, nutritional depletion, and the psychological weight of treatment. Our nurses assess the medical contributors to fatigue and address them, while home health aides provide the daily personal care support that conserves your loved one's limited energy. Physical therapy, when appropriate, can begin rebuilding stamina through graded activity.",
        category: "Treatment Recovery",
      },
      {
        question: "Is a fever after chemotherapy actually an emergency?",
        answer:
          "Yes — a fever above 100.4°F within three weeks of chemotherapy is a medical emergency called febrile neutropenia and requires same-day hospital evaluation. Chemotherapy suppresses the immune system, and even a minor infection can become life-threatening rapidly. Our nurses educate every cancer patient and family on this fact and make sure they know to call 911 — not wait for a doctor's appointment.",
        category: "Safety",
      },
      {
        question: "Does Medicare cover home nursing for cancer patients?",
        answer:
          "Yes. Cancer patients frequently qualify for Medicare home health due to treatment-related fatigue and functional limitations. Covered services can include skilled nursing, wound care, and social work services. Call (773) 775-2588 and we will review your loved one's current phase of treatment and determine what services Medicare will cover.",
        category: "Insurance & Coverage",
      },
      {
        question: "Can home health help with ostomy care after cancer surgery?",
        answer:
          "Absolutely. Ostomy care is a skilled nursing service — teaching your loved one and family how to change and care for an ostomy appliance, prevent skin breakdown, manage output, and troubleshoot problems. Our nurses provide hands-on ostomy education over multiple visits until your loved one feels confident managing independently.",
        category: "Clinical",
      },
    ],
  },

  "chemotherapy-support": {
    overview: [
      "Chemotherapy is effective, and it is hard. The side effects that patients experience between treatment cycles — fatigue that makes the walk from the bedroom to the bathroom feel monumental, nausea that makes eating a battle, the constant low-grade worry about infection — these are the moments when skilled home health support makes an enormous difference. Your loved one shouldn't be navigating the space between treatment appointments alone.",
      "Infection risk during chemotherapy is the most serious ongoing concern at home. When the immune system is suppressed, ordinary exposures — a grandchild with a cold, a small cut, food not stored properly — become genuine risks. Our nurses educate patients and families on infection prevention and recognize the early signs of infection that require immediate medical escalation. Being the difference between a treatable infection and a hospitalization is one of the most important things we do.",
      "Chemotherapy side effects can also make medication management harder. Nausea affects whether anti-nausea medications are taken at the right time. Fatigue affects whether all medications get taken at all. Mouth sores affect nutrition. Our nurses see these issues in the context of daily life — not just in the clinic — and intervene practically with information, adjustments, and physician communication that keeps your loved one on track with treatment.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses visit between chemotherapy cycles to assess current side effects, monitor vital signs, check for early infection signs in immunocompromised patients, and review medication compliance. They also assess nutrition and hydration status — dehydration and malnutrition are common during chemotherapy and can affect the ability to continue treatment. Nursing findings are communicated directly to the oncology team.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Chemotherapy patients often leave the infusion center with multiple new medications — anti-nausea drugs, growth factors, steroids, and existing medications that must be timed carefully around treatment. Our nurses review every medication, set up clear schedules, and teach your loved one and family exactly what to take and when. Side effect management medications only work when taken at the right time.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "During the days after a chemotherapy infusion — when fatigue and nausea typically peak — a home health aide provides the personal care assistance that allows your loved one to rest and recover. Bathing, meal preparation, light housekeeping, and medication reminders are all within the aide's scope. Aides are trained to recognize symptom changes that need nursing escalation and to take appropriate infection precautions around immunocompromised patients.",
      },
    ],
    warningSigns: [
      "Fever above 100.4°F at any point during chemotherapy treatment — call 911 or go to the ER immediately.",
      "Inability to keep fluids down for more than 24 hours, which risks dehydration and inability to continue treatment.",
      "Mouth sores severe enough to prevent eating or drinking — a serious side effect that needs medical management.",
      "Signs of infection in a port or IV site: redness, warmth, swelling, or drainage.",
      "Extreme weakness or shortness of breath, which may signal severe anemia from treatment.",
      "Confusion, unusual drowsiness, or slurred speech, which can signal medication toxicity or other serious complications.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Treatment Schedule Integration",
        description:
          "We schedule nursing visits to align with the treatment cycle — highest-frequency visits in the days immediately following infusion, when side effects peak and infection risk is highest. The care plan is built around the treatment schedule, not the other way around.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Medication and Symptom Management",
        description:
          "The nurse reviews all chemotherapy-related medications at the first visit, teaching proper timing, storage, and administration. A symptom management plan is established — what to do for nausea, constipation, mouth sores, and fatigue — with clear thresholds for calling the oncology team.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Ongoing Monitoring and Oncology Communication",
        description:
          "Regular nursing visits track side effect patterns across treatment cycles and communicate findings to the oncology team. If side effects are interfering with the ability to continue treatment, we flag this to the oncologist so supportive medications can be adjusted before the next cycle.",
        icon: "heart",
      },
    ],
    faqs: [
      {
        question: "What chemotherapy side effects should we be most worried about at home?",
        answer:
          "Febrile neutropenia (fever in an immunocompromised patient) is the most urgent — it requires same-day emergency evaluation. Severe dehydration from vomiting or diarrhea is second — it can affect kidney function and the ability to receive the next treatment cycle. Our nurses provide every patient and family with a written guide of when to call us, when to call the oncologist, and when to call 911.",
        category: "Safety",
      },
      {
        question: "Can my parent stay on their normal diet during chemotherapy?",
        answer:
          "Diet needs during chemotherapy are complex — food safety for immunocompromised patients, nausea management strategies, eating despite taste changes, and maintaining adequate nutrition despite poor appetite. Our nurses provide specific, practical guidance for each patient's situation and can connect families with oncology-trained dietitians when nutritional needs exceed what nursing education alone can address.",
        category: "Nutrition",
      },
      {
        question: "How does home nursing stay connected with the oncology team?",
        answer:
          "We communicate directly with the oncology team through phone, fax, and shared documentation. When we see a clinical concern — an infection, a medication problem, worsening side effects — we contact the team before the next scheduled appointment. Our nursing notes are available for the oncologist to review. We function as an extension of the oncology care team at home, not a separate entity. Call (773) 775-2588 to discuss how we coordinate with your loved one's specific oncologist.",
        category: "Care Coordination",
      },
      {
        question: "Does Medicare cover home nursing during chemotherapy?",
        answer:
          "Medicare home health coverage during chemotherapy depends on homebound status — which many patients meet due to fatigue and immunosuppression-related precautions — and physician orders for skilled services. The oncologist's order is typically the gateway. We work with the oncology team to ensure proper orders are in place so care isn't delayed.",
        category: "Insurance & Coverage",
      },
    ],
  },

  // ─── GENERAL RECOVERY ─────────────────────────────────────────────────────────

  "post-hospital-recovery": {
    overview: [
      "The transition from hospital to home is one of the highest-risk moments in any health care episode. Studies consistently show that the first 30 days after hospital discharge carry the highest risk of readmission — and most of those readmissions are preventable. Not because the hospital did something wrong, but because the space between a monitored hospital bed and an unsupported home is where gaps develop. Our job is to close those gaps.",
      "Hospitals send patients home faster than ever — with more complex medication regimens, healing wounds, incomplete recovery, and discharge instructions that are comprehensive on paper and overwhelming in practice. Your loved one may nod at the nurse explaining five new medications, three sets of dietary restrictions, and two follow-up appointments — and arrive home with no idea where to start. Our nurses start there, translating hospital instructions into a daily care plan that actually works at home.",
      "Every hospitalization carries a cost beyond the illness itself — deconditioning, lost muscle strength, disrupted routines, and the anxiety that comes with having been seriously ill. Physical and occupational therapy during post-hospital recovery address that deconditioning directly, rebuilding the strength and function your loved one had before the hospitalization — and sometimes more, if the hospitalization revealed pre-existing deficits that were being ignored.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Our nurses begin care within 24 to 48 hours of hospital discharge — reviewing all new and existing medications, assessing wound or incision status, checking vital signs, and identifying any discharge instructions that weren't understood or can't be practically followed at home. Clinical findings are communicated directly to the primary care physician to ensure the post-discharge plan is working as intended.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Hospitalization causes rapid deconditioning — even a few days in bed can significantly reduce muscle strength in older adults. Physical therapy begins rebuilding that strength and functional mobility from wherever your loved one is now, not from where they were before the hospital. Safe ambulation, transfers, and progressive activity form the core of post-hospital physical recovery.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Returning to daily routines after a hospitalization — cooking, bathing, managing medications, navigating the home — may require adaptation while full function returns. Occupational therapy evaluates current functional capacity, identifies home safety concerns, and either teaches compensatory strategies or helps restore pre-hospital function. Discharge from the hospital is not the same as returning to normal, and OT bridges that gap.",
      },
      {
        serviceSlug: "medication-management",
        serviceName: "Medication Management",
        description:
          "Medication changes at hospital discharge are among the most common sources of post-discharge complications. New medications are added, doses are changed, some medications are stopped — and the complete picture is rarely reviewed carefully before discharge. Our nurses reconcile every medication, identify dangerous interactions or duplications, and set up a clear, organized system that prevents the medication errors that cause readmissions.",
      },
    ],
    warningSigns: [
      "Returning symptoms of the original illness that prompted hospitalization — these deserve immediate contact with the physician.",
      "Confusion that is new or worse than before the hospitalization, which may signal delirium or medication problems.",
      "An inability to follow the discharge dietary restrictions or medication schedule due to complexity or cost.",
      "No follow-up appointment scheduled within one week of discharge for a serious illness — this is a gap that predicts readmission.",
      "A fall in the first week home, when deconditioning and medication effects are both at their peak.",
      "Signs of wound or incision infection if applicable: increasing redness, swelling, drainage, or fever.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Discharge Coordination Before the Patient Leaves",
        description:
          "We connect with the hospital care team before discharge — receiving medication lists, wound care orders, activity restrictions, and follow-up appointment schedules. This pre-coordination means our nurses arrive at the first home visit prepared and informed rather than starting from scratch.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "First Home Visit Within 24-48 Hours",
        description:
          "A registered nurse visits within 24 to 48 hours of discharge — ideally the same day. This visit focuses on medication reconciliation, vital sign assessment, wound or incision check, and ensuring the patient and family understand the discharge plan well enough to execute it safely.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Coordinated Rehabilitation",
        description:
          "Physical and occupational therapy begin based on physician orders and functional assessment. Therapy is scheduled to build progressively toward pre-hospitalization function, with nursing visits running in parallel to manage medical needs throughout the recovery period.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Follow-Up Coordination and Safe Discharge",
        description:
          "We ensure every required follow-up appointment is scheduled and your loved one can attend. When home health needs are resolved and your loved one is stable, we provide a summary to the primary care physician and help plan what ongoing support — if any — is needed going forward.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How quickly can home health care start after my parent is discharged?",
        answer:
          "We aim to begin within 24 hours of discharge — ideally the same day. The earlier we start, the more effective we are at preventing readmission. If you contact us before the hospitalization ends, we can coordinate with the discharge planner to ensure there's no gap between hospital and home nursing. Call (773) 775-2588 as soon as you know the discharge date.",
        category: "Getting Started",
      },
      {
        question: "The hospital sent my parent home with ten new medications. How do we manage that?",
        answer:
          "This is exactly the situation home health nursing exists for. Our nurses perform a complete medication reconciliation — comparing new prescriptions to existing medications, identifying dangerous interactions, setting up an organized schedule, and teaching your loved one and family what each medication does and why it matters. Medication errors after hospitalization are one of the leading causes of readmission, and we prevent them.",
        category: "Medication",
      },
      {
        question: "My parent seems confused since coming home from the hospital. Is that normal?",
        answer:
          "Post-hospitalization confusion (post-hospital delirium) is more common than most families realize, and can persist for days to weeks after discharge — particularly in older adults. Our nurses screen for delirium at the first visit and monitor cognitive status at every subsequent visit. Certain medications, infections, dehydration, and sleep disruption are all treatable causes that our team is specifically watching for.",
        category: "Clinical",
      },
      {
        question: "Does Medicare automatically cover home health after any hospitalization?",
        answer:
          "Not automatically — your loved one must meet the homebound criterion and have a physician order for skilled services. However, most patients who have been hospitalized for a significant illness or surgery meet both criteria. We verify coverage before starting care so you know exactly what to expect. The process is straightforward and we handle it for you.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "post-surgical-recovery": {
    overview: [
      "Every surgery is different, and so is every recovery. Whether your loved one has had abdominal surgery, an orthopedic procedure, a vascular repair, or any other surgical intervention, the first weeks at home carry real risk — infection, medication errors, inadequate wound care, and activity that is either too much or too little for the specific procedure. Our nurses and therapists are skilled across surgical specialties, adapting their expertise to whatever procedure your loved one has had.",
      "Wounds heal from the inside out over weeks, but families often lose their vigilance after the first few days when the obvious drama of surgery has passed. Surgical site infections often become apparent in the second or third week post-operatively — when families have relaxed, when the surgeon's follow-up isn't for another two weeks, and when the subtle signs are easy to miss without clinical training. Our nurses provide that ongoing clinical surveillance throughout the recovery period.",
      "Returning to daily activities after surgery requires a calibrated approach — too little activity leads to deconditioning and complications like blood clots; too much risks the surgical repair. Our physical therapists understand surgical protocols and guide your loved one through a recovery arc that is both safe and appropriately progressive, getting them back to function as quickly as the surgical repair allows.",
    ],
    howWeHelp: [
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Post-surgical nursing provides clinical oversight of the full recovery process — incision assessment, vital sign monitoring, medication review including anticoagulation management if prescribed, drain care, and pain assessment. Your nurse communicates directly with the surgical team when any concern arises, ensuring the surgeon has an accurate picture of recovery at home rather than a single snapshot at an office visit.",
      },
      {
        serviceSlug: "post-surgical-care",
        serviceName: "Post-Surgical Care",
        description:
          "Our post-surgical care protocol is procedure-specific. For abdominal surgery, this includes incision care, activity restriction education, and bowel recovery monitoring. For orthopedic procedures, it includes weight-bearing protocol education and motion restriction management. We tailor care to the specific surgery rather than applying a generic post-operative protocol to every patient.",
      },
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy timing after surgery depends on the specific procedure and surgeon's protocol. When cleared, therapy rebuilds the strength, mobility, and functional capacity affected by both the underlying condition and the surgery itself. Your therapist communicates directly with the surgeon's office to ensure the therapy program respects all surgical restrictions while maximizing recovery progress.",
      },
      {
        serviceSlug: "wound-care-management",
        serviceName: "Wound Care Management",
        description:
          "Post-surgical wounds require ongoing clinical assessment beyond what a family can appropriately provide at home. Our wound care nurses assess healing progress, manage drains or packing if present, apply appropriate dressings for the wound type and stage of healing, and identify early signs of infection before they become serious. Proper wound care after surgery directly affects both recovery speed and final outcome.",
      },
    ],
    warningSigns: [
      "Increasing redness, warmth, swelling, or drainage from the surgical incision beyond the first few days.",
      "Fever above 101°F, which may signal a wound infection, pneumonia, or deep internal infection.",
      "Pain that is increasing rather than gradually improving as recovery progresses.",
      "Calf pain, redness, or swelling that develops during the post-surgical recovery period.",
      "Drainage that becomes cloudy, yellow, or has a foul odor.",
      "Incision edges that are separating or pulling apart rather than staying closed.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Surgical Protocol Review",
        description:
          "Before the first visit, we review the operative report or discharge summary to understand exactly what procedure was performed, what restrictions apply, and what the surgeon's specific post-operative protocol requires. Care is built around the surgical plan — not generic post-operative guidelines.",
        icon: "phone-call",
      },
      {
        step: "02",
        title: "Wound and Medication Assessment",
        description:
          "The first nursing visit focuses on incision assessment, drain management if applicable, medication reconciliation, and pain evaluation. Wound care orders from the surgeon are confirmed and implemented. The patient and family are educated on what normal healing looks like versus warning signs.",
        icon: "clipboard-check",
      },
      {
        step: "03",
        title: "Therapy and Progressive Activity",
        description:
          "Physical therapy begins when the surgeon clears it, following the surgical protocol. Progress is documented and shared with the surgical team. Activity is progressed based on clinical response — not a fixed timeline — ensuring your loved one moves forward as fast as safe recovery allows.",
        icon: "heart",
      },
      {
        step: "04",
        title: "Surgical Follow-Up Coordination",
        description:
          "We coordinate with the surgical office for follow-up appointments and share clinical documentation of recovery progress. When post-surgical home health needs resolve, we ensure the transition to outpatient care or independent function is smooth and no gaps exist in ongoing care.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "How long does post-surgical home health nursing typically last?",
        answer:
          "Duration depends on the specific surgery, wound status, and functional recovery pace. Simple procedures may require two to three weeks of nursing. Complex surgeries with wounds may require six to eight weeks or more. Therapy duration tracks functional recovery. Medicare covers services as long as skilled goals are actively being worked toward — there's no arbitrary cutoff date.",
        category: "Duration",
      },
      {
        question: "My parent's surgeon says the incision looks fine at the office visit. Do we still need home wound care?",
        answer:
          "An office visit wound check provides a snapshot in time. Home wound care provides daily or every-other-day surveillance of a wound that changes continuously. Infections typically develop between office visits, not during them. Many surgical infections are caught and treated by home nurses before the patient ever returns to the surgeon's office.",
        category: "Wound Care",
      },
      {
        question: "Can home health therapy start before my parent is fully off pain medication?",
        answer:
          "Yes — in fact, this is common and appropriate. Therapy in the early post-surgical period is gentle and is designed around pain levels. Your therapist adjusts exercise intensity based on pain response and coordinates with the nurse on pain medication timing to schedule sessions during the period of best pain control. Starting early — even gently — produces better long-term outcomes.",
        category: "Therapy",
      },
      {
        question: "Does Medicare cover home nursing after all types of surgery?",
        answer:
          "Medicare covers post-surgical home health when the patient is homebound and has physician orders for skilled services. The specific surgery doesn't determine coverage — homebound status and the need for skilled care do. Most patients in the first weeks after a significant surgical procedure meet both criteria. Call (773) 775-2588 and we will verify coverage before your loved one's discharge.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "fall-recovery": {
    overview: [
      "Falls are not accidents. They are clinical events with identifiable causes — muscle weakness, balance deficits, medication side effects, home hazards, and vision problems that accumulate until the fall happens. After a fall, the temptation is to treat the injury and move on, but treating the injury without addressing the causes almost always leads to another fall. Our team treats the fall as the warning it is — and gets to work on everything that led to it.",
      "Fear of falling again is often as disabling as the fall itself. After a significant fall, many older adults begin to move less to reduce their risk — and that reduced movement leads to the muscle weakness and balance deterioration that makes the next fall more likely, not less. Physical and occupational therapy after a fall is designed to interrupt this cycle: building the strength and confidence that makes movement safe again.",
      "The home environment is part of every fall story. Throw rugs, insufficient lighting, a bathroom without grab bars, furniture arranged in ways that create obstacles — these environmental factors contribute to nearly half of all home falls. Our occupational therapists conduct detailed home assessments after a fall, identifying and recommending modifications to the specific hazards in your loved one's actual home — not a generic checklist.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy after a fall begins with a thorough assessment of balance, strength, gait, and the specific physical factors that contributed to the fall. A targeted exercise program addresses those specific deficits — improving the muscle strength, reaction time, and balance that the fall revealed was insufficient. Your therapist also teaches safe movement strategies and what to do if a fall happens despite best efforts.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Your occupational therapist conducts a room-by-room home safety assessment after a fall, identifying hazards and recommending specific modifications — grab bar installation locations, lighting improvements, furniture rearrangement, removal of throw rugs. They also address the daily activities that carry the highest fall risk for your loved one specifically: getting in and out of the shower, transferring from low furniture, navigating the kitchen.",
      },
      {
        serviceSlug: "skilled-nursing",
        serviceName: "Skilled Nursing",
        description:
          "Nursing evaluation after a fall reviews all medications for fall-risk side effects — many common medications for blood pressure, sleep, anxiety, and pain significantly increase fall risk. The nurse also assesses for fall-related injuries that may not be immediately obvious: rib fractures that affect breathing, soft tissue injuries that will affect mobility, and signs of a head injury that require follow-up. Medication adjustments are recommended to the physician when appropriate.",
      },
    ],
    warningSigns: [
      "A pattern of near-misses or catching themselves before falling — these are as important as actual falls and deserve the same assessment.",
      "Increasing reluctance to get up from a chair or walk to the bathroom, which may indicate fear of falling or pain from a minor injury.",
      "Persistent dizziness or lightheadedness when standing, which may indicate orthostatic hypotension from medications.",
      "Confusion about when, where, or how a fall happened, which may suggest a brief loss of consciousness that needs investigation.",
      "Bruising that doesn't fit the described mechanism of the fall — which may indicate fall frequency is higher than reported.",
      "Difficulty getting off the floor after a fall — a sign that strength and balance deficits need immediate therapeutic intervention.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Fall Risk Assessment",
        description:
          "The initial nursing and therapy assessment uses validated fall risk tools to quantify risk level and identify the specific contributing factors — medications, muscle weakness, balance deficits, vision, home hazards. This comprehensive picture guides the entire intervention.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Home Safety Evaluation",
        description:
          "The occupational therapist conducts a room-by-room home assessment, documenting specific hazards and recommending targeted modifications. Equipment needs are identified — grab bars, shower chairs, raised toilet seats, handheld showerheads — and arrangements made for installation or delivery.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Strength and Balance Rehabilitation",
        description:
          "Physical therapy addresses the specific deficits the fall assessment identified — targeted strengthening, balance training on different surfaces, gait training with appropriate assistive devices, and reactive balance practice. The program is progressive, building confidence alongside physical capacity.",
        icon: "shield-check",
      },
    ],
    faqs: [
      {
        question: "My parent fell but says they feel fine. Do they still need an evaluation?",
        answer:
          "Yes — and we mean that for two reasons. First, injuries from falls in older adults — particularly rib fractures, pelvic fractures, and hip fractures — are sometimes minimally symptomatic initially and missed without clinical assessment. Second, the fall itself is the warning sign that needs to be taken seriously even if no injury resulted. A single fall without injury doubles the risk of a subsequent fall with injury.",
        category: "Safety",
      },
      {
        question: "Which medications cause falls?",
        answer:
          "Many common medications increase fall risk: blood pressure medications that cause dizziness when standing, sleep medications, anti-anxiety medications, some antidepressants, muscle relaxants, and certain diabetes medications that can cause low blood sugar. Our nurses conduct a complete medication review with fall risk as a specific lens — and communicate recommendations to the prescribing physician when adjustments are appropriate.",
        category: "Medication",
      },
      {
        question: "My parent has fallen twice in the last month. What should we do?",
        answer:
          "Multiple falls in a short period require urgent evaluation — not a wait-and-see approach. Call us at (773) 775-2588 and we can typically start a fall risk assessment within 24 to 48 hours. Multiple falls indicate that one or more significant risk factors are unaddressed, and the risk of a serious injury fall is high until those factors are identified and treated.",
        category: "Urgency",
      },
      {
        question: "Does Medicare cover fall prevention therapy at home?",
        answer:
          "Yes — fall prevention is a covered skilled service when your loved one is homebound and a physician orders physical and occupational therapy for balance and fall risk. The homebound criterion is often met for patients who have recently fallen, due to pain, fear of falling, or injury-related mobility limitations.",
        category: "Insurance & Coverage",
      },
    ],
  },

  "age-related-decline": {
    overview: [
      "Aging brings changes that accumulate gradually — strength that isn't what it was, a balance that feels less certain, memory that takes a moment longer, tasks that require more effort. For your loved one, these changes may have been happening quietly for years before anyone named them. The goal of home health care for age-related decline is not to reverse aging — it's to preserve independence, reduce fall risk, and ensure your loved one has the support they need to stay safely at home for as long as possible.",
      "Age-related decline is not one thing — it's a combination of physical deconditioning, sensory changes (vision, hearing), cognitive changes, social isolation, and often multiple chronic conditions that interact with each other. Our approach addresses the whole person. Physical therapy rebuilds strength and balance. Occupational therapy preserves daily function and safety. Home health aide support fills the gaps without removing the independence your loved one still has. Medical social work addresses the emotional and social dimensions that medicine often overlooks.",
      "Family members often normalize gradual decline until a crisis happens — a fall, a medication error, a hospitalization. The goal of proactive home health care is to identify and address declining function before that crisis occurs. An assessment now, when decline is gradual and manageable, produces better outcomes than reactive care after a fall or emergency. We would rather be part of the plan than part of the emergency.",
    ],
    howWeHelp: [
      {
        serviceSlug: "physical-therapy",
        serviceName: "Physical Therapy",
        description:
          "Physical therapy for age-related decline focuses on the specific strength and balance deficits that increase fall risk and limit daily function. Balance training, lower extremity strengthening, gait assessment, and progressive walking programs build the physical reserve that keeps older adults safe and capable at home. A home exercise program that your loved one can maintain between visits sustains the gains therapy produces.",
      },
      {
        serviceSlug: "occupational-therapy",
        serviceName: "Occupational Therapy",
        description:
          "Occupational therapy for age-related decline assesses how current physical and cognitive changes are affecting daily tasks and recommends adaptations that maintain independence. Home safety modifications, adaptive equipment for cooking and self-care, cognitive strategies for managing complex tasks, and energy conservation techniques all extend the period during which your loved one can manage effectively at home.",
      },
      {
        serviceSlug: "home-health-aide",
        serviceName: "Home Health Aide",
        description:
          "Home health aide services fill specific gaps in daily function without replacing overall independence. If your loved one can manage everything except bathing safely, an aide provides that one piece of support. If meals are not being prepared adequately, the aide helps with cooking while your loved one remains involved. The goal is targeted support that preserves as much independence as possible while addressing genuine safety gaps.",
      },
      {
        serviceSlug: "medical-social-worker",
        serviceName: "Medical Social Worker",
        description:
          "Age-related decline raises important questions that families often avoid until they're in crisis: What does your loved one want for their future care? Are advance directives in place? What community resources are available for transportation, meals, or socialization? Our medical social worker facilitates these conversations and connects your family to the resources that support aging in place long-term — before the point of crisis.",
      },
    ],
    warningSigns: [
      "A noticeable increase in falls or near-falls compared to six months ago, even if no injury has resulted.",
      "Significant weight loss without a clear dietary change — a red flag for multiple underlying health issues.",
      "Medications not being taken consistently due to forgetting, confusion about the regimen, or difficulty opening bottles.",
      "Increasing isolation or withdrawal from activities and relationships that were previously important.",
      "Home becoming visibly less maintained — dishes, laundry, or basic household tasks no longer being managed.",
      "Family noticing driving that seems more hesitant, confused, or close-call involving than before.",
    ],
    careJourney: [
      {
        step: "01",
        title: "Comprehensive Functional Assessment",
        description:
          "Our initial assessment for age-related decline evaluates physical function, cognitive status, medication management, nutrition, home safety, and social support. This comprehensive picture identifies where the risks are highest and where intervention will have the most impact.",
        icon: "clipboard-check",
      },
      {
        step: "02",
        title: "Individualized Care Planning",
        description:
          "The care plan is built around what matters most to your loved one — not just what their clinical numbers say. If staying in their home independently is the priority, everything we do is oriented toward that goal. If connection to family and community is what they value most, social and functional goals reflect that.",
        icon: "heart",
      },
      {
        step: "03",
        title: "Therapy and Support Services",
        description:
          "Physical and occupational therapy address the functional limitations most affecting safety and independence. Home health aide services fill specific daily care gaps. The social worker addresses the broader context of aging — resources, planning, and emotional support for both your loved one and family.",
        icon: "shield-check",
      },
      {
        step: "04",
        title: "Ongoing Monitoring and Adjustment",
        description:
          "Age-related decline is not static — needs change over time, and so does the care plan. We conduct regular reassessments and adjust services as your loved one's situation evolves. The goal is a care relationship that adapts with your loved one rather than a fixed program that becomes inappropriate as needs change.",
        icon: "phone-call",
      },
    ],
    faqs: [
      {
        question: "Is home health care just for people who are really sick? My parent is just slowing down.",
        answer:
          "Home health care is exactly right for what you're describing. Medicare covers skilled therapy and nursing for functional decline — not just acute illness. A parent who is slowing down, has increasing fall risk, or is struggling to manage daily tasks safely meets the criteria for home health evaluation. Early intervention produces significantly better long-term outcomes than waiting for a crisis.",
        category: "Eligibility",
      },
      {
        question: "My parent refuses to admit they need help. How do we get them to accept it?",
        answer:
          "This is one of the most common and most difficult situations families face — and we are experienced in navigating it. Often, framing home health as a way to stay independent longer rather than as an admission of inability makes it more acceptable. Our nurses and therapists are skilled at building rapport with reluctant patients and making the first visit feel supportive rather than intrusive. Call (773) 775-2588 to talk through your specific situation.",
        category: "Family Communication",
      },
      {
        question: "My parent lives alone and I'm worried about a fall when no one is there. What can home health do?",
        answer:
          "Physical therapy and home safety modifications directly reduce the risk of a fall occurring. We also strongly recommend a personal emergency response system (medical alert device) for patients who live alone — our social worker can help identify free or subsidized options. For patients at very high fall risk, we discuss home monitoring options and increasing aide hours to reduce time spent alone.",
        category: "Safety",
      },
      {
        question: "How do we know when it's time to consider a more supervised living situation?",
        answer:
          "This conversation is one of the most important — and hardest — for families to have. Our medical social worker is specifically trained to help families assess whether home is still a safe and sustainable option and to explore alternatives without pressure. General indicators include safety risks that cannot be adequately mitigated at home, caregiver burnout, or cognitive decline that requires continuous supervision. Call (773) 775-2588 to start that conversation with someone who understands the full picture.",
        category: "Long-Term Planning",
      },
    ],
  },
};

export function getConditionRichContent(slug: string): ConditionRichContent | undefined {
  return conditionRichContent[slug];
}
