/*
  DNT Professional Discussion practice scenarios.
  Two parts: DNT internal Professional Discussions (KE 1.1.9, PE 1.2.10, KE 7.1.2, 7.1.3, 7.1.4, 7.1.11,
  PE 7.2.1, 7.2.2, 7.2.3), and End-point practice for the NEBDN Professional Discussion (one scenario per unit).
  To add a scenario, copy one object and change the fields.
*/
window.DNT_SCENARIOS = [
  {
    id: "sg-child-neglect",
    group: "Safeguarding",
    title: "Missed appointments and untreated decay",
    acs: ["KE 1.1.9", "PE 1.2.10"],
    prompt: "Amir is 6. He has been booked four times in the last year but has only been brought once. Today his mum brings him in because he has been in pain for two weeks. The dentist finds several large untreated cavities and a dental abscess. When the dentist explains the treatment plan, mum says she is too busy to keep coming back and that baby teeth fall out anyway.",
    followups: [
      "What are you worried about here, and why?",
      "Who would you speak to in the practice, and when?",
      "What would you write in the records?",
      "If mum does not bring Amir back for treatment, what happens next?",
      "Which legislation and guidance support what you would do?"
    ],
    checklist: [
      "Recognises that repeated missed appointments and untreated disease can be a sign of dental neglect",
      "Avoids jumping to conclusions and considers the wider picture (support needs, barriers, other concerns)",
      "Explains the practice safeguarding policy and names the safeguarding lead as the first contact",
      "Describes the 'was not brought' approach rather than 'did not attend' for children",
      "Records concerns factually, dated and signed, using what was seen and said",
      "Knows when concerns go beyond the practice (GP, health visitor or school nurse, children's social care)",
      "Knows to call 999 if a child is in immediate danger",
      "Names relevant legislation or guidance (for example Children Act 1989 and 2004, Working Together to Safeguard Children, GDC Standards)",
      "Describes their own role and limits as a dental nurse"
    ]
  },
  {
    id: "sg-adult-carer",
    group: "Safeguarding",
    title: "Bruising and a controlling carer",
    acs: ["KE 1.1.9", "PE 1.2.10"],
    prompt: "Mrs Patel is 82 and comes in with a carer for a denture review. While you seat her you notice bruising on both upper arms. She seems withdrawn, her clothes are unclean and her dentures look like they have not been taken out for a long time. Every time the dentist asks her a question, the carer answers for her.",
    followups: [
      "What types of abuse might this suggest?",
      "How could you give Mrs Patel a chance to speak for herself?",
      "Do you need her consent before sharing your concerns? Are there exceptions?",
      "Talk me through who you would report to and how.",
      "What are the principles of adult safeguarding?"
    ],
    checklist: [
      "Identifies possible physical abuse and neglect, and considers other types (for example financial or psychological)",
      "Suggests finding a safe way to speak to Mrs Patel alone, without putting her at risk",
      "Raises concerns with the dentist and the practice safeguarding lead promptly",
      "Explains consent to share information, and when sharing without consent is justified (risk of serious harm, risk to others, lacks capacity)",
      "Mentions mental capacity and the Mental Capacity Act 2005 where relevant",
      "Knows the route for referral to local authority adult social care",
      "Knows to call 999 if there is immediate danger",
      "Records concerns factually, using the patient's own words where possible",
      "Refers to the Care Act 2014 and/or its six safeguarding principles",
      "Does not investigate or confront the carer"
    ]
  },
  {
    id: "sg-disclosure",
    group: "Safeguarding",
    title: "A teenager tells you something",
    acs: ["KE 1.1.9", "PE 1.2.10"],
    prompt: "Jess is 15 and attends on her own for a check-up. While you are waiting for the dentist she tells you she doesn't want to go home because her mum's new partner 'loses it' and she is scared of him. She asks you not to tell anyone.",
    followups: [
      "What do you say to Jess straight away?",
      "Can you keep what she has told you confidential?",
      "What exactly would you record?",
      "What happens after Jess leaves the surgery?",
      "How would you look after yourself after a conversation like this?"
    ],
    checklist: [
      "Stays calm, listens, and takes Jess seriously",
      "Does not promise to keep it secret, and explains kindly why it must be shared",
      "Does not ask leading questions or investigate",
      "Records Jess's exact words, the date, time and who was present",
      "Reports to the safeguarding lead the same day (immediately if Jess is at risk of going home to harm)",
      "Knows the referral route to children's social care and the police if in immediate danger",
      "Understands that a 15-year-old is still a child for safeguarding purposes",
      "Mentions the support available for staff after a disclosure"
    ]
  },
  {
    id: "u7-population",
    group: "Unit 7: Health promotion",
    title: "High decay rates in local under-5s",
    acs: ["KE 7.1.2", "KE 7.1.3", "PE 7.2.2"],
    prompt: "Your practice is in an area where tooth decay in children under 5 is much higher than the national average. The local authority has asked practices to help improve children's oral health. Your principal dentist asks you to come up with ideas.",
    followups: [
      "What is the difference between a population approach and treating individual patients?",
      "Why might decay be higher in some areas than others?",
      "Give examples of population-level measures that reduce decay.",
      "What is health promotion, and what part can a dental nurse play in it?",
      "How useful is oral health education on its own? What are its limits?"
    ],
    checklist: [
      "Explains a population approach (shifting risk across a whole group) versus a high-risk individual approach",
      "Links decay levels to social factors and health inequalities, such as deprivation and access",
      "Gives population measures (for example water fluoridation, supervised toothbrushing in nurseries, sugar reduction policies)",
      "Mentions the common risk factor approach (sugar, smoking and alcohol affect general and oral health)",
      "Defines health promotion as more than education (policy, environment, community action, individual skills)",
      "Describes the dental nurse role: oral health advice, signposting, community sessions, Making Every Contact Count",
      "Evaluates the limits of education alone (knowledge does not always change behaviour)"
    ]
  },
  {
    id: "u7-prevention",
    group: "Unit 7: Health promotion",
    title: "Preventing decay in a high-risk child",
    acs: ["KE 7.1.4", "PE 7.2.1"],
    prompt: "Lily is 4. She already has two fillings and the dentist has assessed her as high caries risk. Her dad says she has juice in a bottle at bedtime and brushes 'when she remembers'. The dentist asks you to give preventive advice and then talk the plan through with him.",
    followups: [
      "Which evidence-based guidance would you use, and why?",
      "What toothbrushing advice would you give for a child of Lily's age?",
      "What would the dentist offer in the surgery to protect Lily's teeth?",
      "How strong is the evidence for these measures?",
      "What might stop the family following the advice, and how would you help?"
    ],
    checklist: [
      "Names Delivering Better Oral Health as the evidence-based toolkit",
      "Twice daily brushing, last thing at night and one other time, supervised by an adult",
      "Correct amount of fluoride toothpaste for age (pea-sized at 3 to 6) and spit, don't rinse",
      "Reduces how often and how much sugar is taken; water or milk only at bedtime",
      "Mentions professional measures such as fluoride varnish at least twice a year, and fissure sealants on permanent molars where appropriate",
      "Evaluates the evidence (for example systematic reviews support fluoride varnish and fluoride toothpaste)",
      "Recognises barriers (habit, cost, time, health literacy) and suggests realistic small steps",
      "Tailors advice to the family rather than giving a lecture"
    ]
  },
  {
    id: "u7-evaluate-session",
    group: "Unit 7: Health promotion",
    title: "Evaluating your oral health session",
    acs: ["KE 7.1.3", "PE 7.2.2", "PE 7.2.1"],
    prompt: "You have been asked to run an oral health session for staff at a local care home, because many residents have poor oral hygiene and denture problems. Afterwards your manager wants to know whether it worked.",
    followups: [
      "How would you plan the session so it can be evaluated?",
      "What could you measure straight after, and what could you measure later?",
      "How would you know if residents' oral health actually improved?",
      "What would you change next time, and why?"
    ],
    checklist: [
      "Sets clear aims and SMART objectives before the session",
      "Plans content around care home needs (mouth care, denture care, recognising problems, when to refer)",
      "Uses short-term evaluation (feedback forms, questions, quizzes)",
      "Uses longer-term evaluation (mouth care records, plaque or denture hygiene checks, follow-up visit)",
      "Explains the difference between changes in knowledge, behaviour and health outcomes",
      "Considers barriers (staff time, turnover, residents with dementia) and how to overcome them",
      "Reflects on what worked and what they would improve"
    ]
  },
  {
    id: "u7-sustainability",
    group: "Unit 7: Health promotion",
    title: "Making the practice more sustainable",
    acs: ["KE 7.1.11", "PE 7.2.3"],
    prompt: "Your practice manager wants the team to reduce the practice's environmental impact. At the team meeting someone says the answer is simply to stop using single-use items. You are asked for your view.",
    followups: [
      "What makes up most of dentistry's environmental impact?",
      "Why is prevention described as the most sustainable care?",
      "Is replacing single-use items always the right answer? What are the trade-offs?",
      "Give examples of changes the practice could make, and evaluate them.",
      "How would you evaluate the environmental impact of a common treatment?"
    ],
    checklist: [
      "Knows that patient and staff travel makes up the largest share of dentistry's carbon footprint, followed by what is bought in",
      "Explains that prevention reduces the need for treatment, visits and materials",
      "Balances single-use versus reusable items against infection control requirements (HTM 01-05)",
      "Gives practical changes (risk-based recall intervals, combining appointments, running autoclaves and washer disinfectors full, energy saving, digital records)",
      "Mentions correct waste segregation (HTM 07-01) and amalgam phase-down",
      "Evaluates each change, including cost, patient safety and practicality",
      "Considers the impact of a treatment across its whole life (materials, energy, waste, travel)"
    ]
  }
  /* ---------- End-point Professional Discussion practice (NEBDN, all units) ---------- */
  ,{
    id: "ep-u1-concern",
    group: "End-point practice",
    title: "A colleague who may be unfit to work",
    acs: ["Unit 1"],
    prompt: "You arrive for the morning session and notice that the dental nurse you are working alongside smells strongly of alcohol, is slurring slightly and has dropped two instruments. The first patient is due in ten minutes and the dentist hasn't arrived yet.",
    followups: [
      "What is your first priority, and why?",
      "Who would you tell, and what would you say?",
      "What if the practice doesn't act on your concern?",
      "Which standards and laws support you in raising this?",
      "How would you support your colleague as well as protecting patients?"
    ],
    checklist: [
      "Puts patient safety first and stops the colleague treating patients",
      "Raises the concern straight away with the dentist, practice manager or most senior person available",
      "Follows the practice raising concerns (whistleblowing) policy",
      "Refers to GDC Standards, Principle 8: raise concerns if patients are at risk",
      "Knows the routes to escalate if not acted on (for example the GDC, CQC or NHS)",
      "Mentions protection for whistleblowers under the Public Interest Disclosure Act 1998",
      "Records what was seen factually",
      "Treats the colleague with respect and suggests support (occupational health, GP)"
    ]
  },
  {
    id: "ep-u2-delegation",
    group: "End-point practice",
    title: "A trainee asked to work outside their scope",
    acs: ["Unit 2"],
    prompt: "You are the senior dental nurse. A dentist who is running late asks a trainee dental nurse to take an alginate impression for a patient while they finish writing up notes. The trainee has not been trained to take impressions and looks worried.",
    followups: [
      "Is this an appropriate task to delegate? Why?",
      "What would you say to the trainee, and to the dentist?",
      "What makes delegation safe?",
      "How could the team stop this happening again?"
    ],
    checklist: [
      "Recognises that taking impressions is an additional skill needing training and competence",
      "Refers to the GDC Scope of Practice and the principle of only working within your competence",
      "Explains that the person delegating and the person accepting both have responsibilities",
      "Supports the trainee to decline politely and safely",
      "Speaks to the dentist professionally, focusing on patient safety",
      "Suggests a team solution (training plan, clear roles, better scheduling)",
      "Shows leadership: protects the trainee and keeps the team working together",
      "Mentions recording or reporting if it happens again"
    ]
  },
  {
    id: "ep-u3-consent",
    group: "End-point practice",
    title: "An anxious patient and consent",
    acs: ["Unit 3"],
    prompt: "A very anxious adult patient is booked for an extraction. While you are preparing the surgery they tell you they don't really understand what is going to happen and only said yes because they felt rushed. The dentist is about to come in.",
    followups: [
      "Is this patient's consent valid? Why or why not?",
      "What would you do before treatment starts?",
      "How would you communicate with this patient to reduce their anxiety?",
      "What would be recorded in the notes?"
    ],
    checklist: [
      "Explains valid consent: informed, voluntary, and given by someone with capacity",
      "Recognises that this consent may not be valid and tells the dentist before treatment",
      "Knows consent is an ongoing process and the patient can change their mind",
      "Uses good communication: calm tone, plain language, open questions, active listening",
      "Checks understanding (for example asking the patient to explain it back)",
      "Gives time and options, including information to take away",
      "Records the discussion, the patient's concerns and the outcome",
      "Mentions confidentiality and respecting the patient's dignity"
    ]
  },
  {
    id: "ep-u4-inclusion",
    group: "End-point practice",
    title: "A patient with a learning disability",
    acs: ["Unit 4"],
    prompt: "Sam is 24, has a learning disability and comes with a support worker. Sam becomes very distressed by the noise of the suction and the bright light, and covers their ears. The support worker starts answering all of the dentist's questions for Sam.",
    followups: [
      "How would you make sure Sam is involved in their own care?",
      "What reasonable adjustments could the practice make?",
      "How would you decide whether Sam can consent?",
      "Which laws and standards apply?"
    ],
    checklist: [
      "Speaks to Sam directly and doesn't assume they can't understand",
      "Starts from the presumption of capacity under the Mental Capacity Act 2005",
      "Suggests reasonable adjustments (quiet time slot, longer appointment, dimmed light, breaks, familiarisation visits)",
      "Mentions the Equality Act 2010 duty to make reasonable adjustments",
      "Uses accessible information, such as easy read, pictures or showing equipment first",
      "Works with the support worker without letting them take over",
      "Records Sam's communication needs and adjustments so the whole team knows",
      "Avoids stereotypes and treats Sam with dignity and respect"
    ]
  },
  {
    id: "ep-u5-exam",
    group: "End-point practice",
    title: "Assisting at a new patient examination",
    acs: ["Unit 5"],
    prompt: "You are assisting the dentist with a new patient examination. The patient is 58, smokes and takes several medicines. The dentist will carry out a full examination, including a BPE and two bitewing radiographs.",
    followups: [
      "Talk me through your role before the patient arrives and during the examination.",
      "Why is the medical history so important here?",
      "How would you record the charting and BPE?",
      "What is your role when radiographs are taken?",
      "What would you do if the dentist mentions a white patch on the tongue?"
    ],
    checklist: [
      "Prepares the surgery with infection control in mind (PPE, clean surfaces, correct instruments)",
      "Makes sure the medical history is completed, checked and signed, including medicines and smoking",
      "Explains why medicines and conditions matter (for example bleeding risk, MRONJ, allergies)",
      "Records charting accurately using the practice's notation",
      "Records BPE codes for each sextant correctly",
      "Knows IR(ME)R roles and stays out of the controlled area during exposure",
      "Accurately records findings, including any soft tissue findings the dentist notes",
      "Understands that a suspicious lesion may need referral and supports the patient"
    ]
  },
  {
    id: "ep-u6-referral",
    group: "End-point practice",
    title: "Referring a suspicious ulcer",
    acs: ["Unit 6"],
    prompt: "A 62-year-old patient who smokes and drinks heavily has an ulcer on the side of their tongue that has not healed for four weeks. The dentist decides to refer them urgently and asks you to help with the referral.",
    followups: [
      "Which referral pathway would be used, and why?",
      "What information should go in the referral?",
      "How would you support the patient, who is worried it might be cancer?",
      "How would the practice make sure the referral isn't lost?"
    ],
    checklist: [
      "Recognises an unexplained ulcer lasting more than 3 weeks as a red flag",
      "Knows it goes on the urgent suspected cancer pathway",
      "Lists key referral content (patient details, history, findings, medical history, risk factors, urgency)",
      "Knows referrals are sent promptly by the agreed secure route",
      "Tracks the referral and follows up to check the patient has been seen",
      "Supports the patient honestly and sensitively, without guessing the diagnosis",
      "Records the referral in the patient's notes",
      "Mentions prevention, such as smoking and alcohol support"
    ]
  },
  {
    id: "ep-u7-ortho",
    group: "End-point practice",
    title: "Oral health advice for a patient with a brace",
    acs: ["Unit 7"],
    prompt: "Ella is 14 and has fixed orthodontic braces. At her check-up there is plaque around the brackets and white marks starting to appear on her teeth. She drinks fizzy drinks most days and says brushing around the brace is 'too much hassle'.",
    followups: [
      "What are the white marks, and why have they appeared?",
      "What evidence-based advice would you give?",
      "How would you help Ella actually change her habits?",
      "How would you know if your advice had worked?"
    ],
    checklist: [
      "Identifies early demineralisation caused by plaque and sugar around the brackets",
      "Gives Delivering Better Oral Health advice: twice daily brushing with 1,350 to 1,500 ppm toothpaste, spit don't rinse",
      "Suggests cleaning aids for braces, such as interdental or single tufted brushes",
      "Advises reducing how often she has sugary and acidic drinks",
      "Mentions daily fluoride mouthwash at a different time to brushing, if advised by the dentist",
      "Uses behaviour change skills: involving Ella, small realistic goals, positive feedback",
      "Records the advice given and plans to review it",
      "Suggests a way to measure progress (plaque scores, photos, review appointment)"
    ]
  },
  {
    id: "ep-u8-wellbeing",
    group: "End-point practice",
    title: "A colleague who is struggling",
    acs: ["Unit 8"],
    prompt: "A dental nurse colleague has seemed tired and tearful for weeks. Today she mixed up two patients' notes and then cried in the staff room. She tells you she is working extra shifts to cover staff shortages and isn't sleeping.",
    followups: [
      "What signs of stress can you see here?",
      "How would you approach her?",
      "Where could she get support?",
      "What about the mix-up with the notes?",
      "How do you look after your own wellbeing at work?"
    ],
    checklist: [
      "Recognises signs of stress and possible burnout",
      "Approaches privately and kindly, and listens without judging",
      "Signposts support (manager, occupational health, employee assistance programme, GP)",
      "Mentions workload and the HSE Management Standards (for example demands and support)",
      "Deals with the records mix-up as a patient safety issue and reports it",
      "Respects her confidentiality where it is safe to do so",
      "Describes their own self-care (breaks, sleep, talking to someone, boundaries)"
    ]
  },
  {
    id: "ep-u9-cpd",
    group: "End-point practice",
    title: "Planning your CPD after an appraisal",
    acs: ["Unit 9"],
    prompt: "At your appraisal your manager says you have done well this year but you need to improve your knowledge of radiography and radiation protection. You also realise you haven't logged any CPD for months.",
    followups: [
      "What are the GDC's CPD requirements for dental nurses?",
      "How would you plan your CPD for the next year?",
      "How would you use the appraisal feedback?",
      "How would you reflect on your learning?"
    ],
    checklist: [
      "Knows the requirement: at least 50 hours of verifiable CPD over 5 years, with at least 10 hours in any 2-year period",
      "Knows every registrant needs a personal development plan (PDP)",
      "Links CPD to their field of practice and the GDC development outcomes",
      "Names GDC recommended topics, such as radiography and radiation protection",
      "Uses feedback from appraisal to set specific learning goals",
      "Keeps records and makes an annual CPD statement to the GDC",
      "Describes a reflective model (for example Gibbs) and how reflection changes practice"
    ]
  },
  {
    id: "ep-u10-arrest",
    group: "End-point practice",
    title: "A patient collapses in the waiting room",
    acs: ["Unit 10"],
    prompt: "You hear a shout from reception. An older patient has collapsed in the waiting room. When you reach them, they are not responding and are not breathing normally.",
    followups: [
      "Talk me through exactly what you would do, in order.",
      "What would each member of the team be doing?",
      "Which equipment would you need, and how do you make sure it is ready?",
      "What happens after the emergency is over?"
    ],
    checklist: [
      "Checks for danger, then response, then airway and breathing",
      "Calls for help, asks someone to call 999 and fetch the AED and emergency kit",
      "Starts CPR at 30 compressions to 2 breaths, 100 to 120 per minute, 5 to 6 cm deep",
      "Attaches the AED as soon as it arrives and follows its prompts",
      "Describes clear team roles (CPR, AED, calling 999, meeting the ambulance, recording times)",
      "Mentions oxygen and airway adjuncts in line with training",
      "Knows the emergency kit, drugs and AED are checked regularly and recorded",
      "Records the event and takes part in a team debrief and support afterwards"
    ]
  }
];
