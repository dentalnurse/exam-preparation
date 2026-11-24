/*
  DNT Professional Discussion practice scenarios.
  Scope: only the ACs DNT assesses by Professional Discussion
  (KE 1.1.9, PE 1.2.10, KE 7.1.2, 7.1.3, 7.1.4, 7.1.11, PE 7.2.1, 7.2.2, 7.2.3).
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
];
