/*
  DNT knowledge test question bank. Written by DNT, not taken from NEBDN or any other provider.
  Format: [unit, question, [options], index of correct option (from 0), explanation]
  Please check clinical and legal content against current UK guidance before each cohort.
*/
window.DNT_UNITS = {
  1: "Unit 1: Professional practice within the dental setting",
  2: "Unit 2: Leading, managing and team working",
  3: "Unit 3: Communication in the dental setting",
  4: "Unit 4: Inclusive practice",
  5: "Unit 5: Assessment and diagnosis of patients",
  6: "Unit 6: Treatment planning and onward referring",
  7: "Unit 7: Promoting oral health",
  8: "Unit 8: Health and wellbeing",
  9: "Unit 9: Continued professional development",
  10: "Unit 10: Risks and medical emergencies"
};
window.DNT_QUESTIONS = [
  [1, "How many principles are set out in the GDC Standards for the Dental Team?", ["6", "7", "9", "12"], 2, "There are nine principles, starting with 'Put patients' interests first'."],
  [1, "When must a dental nurse have indemnity or insurance in place?", ["Only once they are fully qualified", "Before they carry out any work with patients", "Only if they work in private practice", "Only if their employer asks for it"], 1, "The GDC requires all registrants, including trainees working with patients, to have appropriate indemnity or insurance cover in place before they practise."],
  [1, "Which law protects workers who raise concerns in the public interest (whistleblowing)?", ["Public Interest Disclosure Act 1998", "Health and Safety at Work Act 1974", "Equality Act 2010", "Data Protection Act 2018"], 0, "The Public Interest Disclosure Act 1998 protects workers from being treated unfairly for raising concerns."],
  [1, "What does the professional duty of candour require?", ["Never discussing mistakes with patients", "Being open and honest with patients when something goes wrong", "Reporting all complaints to the GDC", "Keeping incident details from colleagues"], 1, "Duty of candour means telling the patient, apologising, offering a remedy where possible and explaining the effects."],
  [1, "For safeguarding purposes, who counts as a child?", ["Anyone under 16", "Anyone under 18", "Anyone still in full-time education", "Anyone under 14"], 1, "Children's safeguarding legislation and guidance applies to anyone who has not yet reached their 18th birthday."],
  [1, "Which of these is NOT one of the six principles of adult safeguarding in the Care Act 2014?", ["Empowerment", "Proportionality", "Confidentiality", "Accountability"], 2, "The six principles are empowerment, prevention, proportionality, protection, partnership and accountability."],
  [1, "A colleague posts a photo of a patient's teeth on social media without consent, with no name shown. What is the main issue?", ["None, because the patient is not named", "It may breach patient confidentiality and GDC social media guidance", "It is fine if the colleague deletes it within 24 hours", "It is only an issue if the patient complains"], 1, "Patients can still be identified from images and context. Consent is needed, and GDC guidance on social media applies."],
  [1, "Under NHS complaints regulations in England, how quickly should a complaint be acknowledged?", ["Within 3 working days", "Within 10 working days", "Within 28 days", "Within 6 months"], 0, "NHS complaints should be acknowledged within three working days."],
  [1, "Who is the first person a dental nurse should normally go to with a safeguarding concern in the practice?", ["The police", "The patient's GP", "The practice safeguarding lead", "The GDC"], 2, "Follow the practice safeguarding policy and speak to the safeguarding lead, unless someone is in immediate danger, in which case call 999."],
  [1, "A patient discloses abuse and asks you to keep it secret. What should you do?", ["Promise to keep it secret so they trust you", "Explain kindly that you cannot keep it secret and must share it to keep them safe", "Ask detailed questions to find out exactly what happened", "Tell them to speak to the police themselves"], 1, "Never promise confidentiality. Listen, don't investigate, record their words and report it."],

  [2, "Under the GDC Scope of Practice, which task can a dental nurse carry out without additional training?", ["Taking radiographs", "Applying fluoride varnish on prescription", "Recording dental charting carried out by another registrant", "Taking impressions"], 2, "Radiography, fluoride varnish and impressions are additional skills that need further training."],
  [2, "You are asked to carry out a task you have not been trained for. What should you do?", ["Do it carefully and ask for feedback afterwards", "Politely decline and explain you are not trained or competent", "Do it only if the patient agrees", "Ask another nurse to watch you"], 1, "GDC Standards say you should only carry out tasks you are trained and competent to do."],
  [2, "Which of these can a dental nurse NOT do, even with additional training?", ["Take impressions", "Diagnose disease", "Apply fluoride varnish", "Take clinical photographs"], 1, "Diagnosis is outside the dental nurse scope of practice."],
  [2, "Which register must a qualified dental nurse be on to work in the UK?", ["The NMC register", "The GDC register", "The HCPC register", "The CQC register"], 1, "Dental nurses must be registered with the General Dental Council."],

  [3, "How long does a practice normally have to respond to a subject access request for records?", ["7 days", "One month", "3 months", "6 months"], 1, "Under UK GDPR a subject access request should normally be answered within one month."],
  [3, "How should a mistake in handwritten patient records be corrected?", ["Use correction fluid and rewrite", "Scribble it out so it can't be read", "Draw a single line through it, then sign and date the correction", "Tear out the page"], 2, "The original entry must stay readable. Corrections are signed and dated."],
  [3, "Which law, alongside UK GDPR, governs how patient data is handled?", ["Data Protection Act 2018", "Freedom of Information Act 2000 only", "Mental Capacity Act 2005", "Consumer Rights Act 2015"], 0, "The Data Protection Act 2018 sits alongside UK GDPR."],
  [3, "Which type of question is best for encouraging a patient to explain their worries?", ["Closed question", "Leading question", "Open question", "Multiple questions at once"], 2, "Open questions, such as 'How are you feeling about your treatment?', invite fuller answers."],
  [3, "The Caldicott Principles relate to:", ["Infection control", "Using and sharing confidential patient information", "Radiation safety", "Waste disposal"], 1, "The Caldicott Principles guide how confidential information is used and shared."],

  [4, "How many protected characteristics are there under the Equality Act 2010?", ["5", "7", "9", "11"], 2, "There are nine protected characteristics, including age, disability, race, religion or belief, sex and sexual orientation."],
  [4, "Which of these is NOT a protected characteristic under the Equality Act 2010?", ["Pregnancy and maternity", "Social class", "Gender reassignment", "Marriage and civil partnership"], 1, "Social class is not one of the nine protected characteristics."],
  [4, "A wheelchair user cannot reach the upstairs surgery. Providing a downstairs room is an example of:", ["Positive discrimination", "A reasonable adjustment", "Indirect discrimination", "Victimisation"], 1, "The Equality Act 2010 requires reasonable adjustments for disabled people."],

  [5, "Which bacterium is most associated with the start of dental caries?", ["Streptococcus mutans", "Porphyromonas gingivalis", "Staphylococcus aureus", "Candida albicans"], 0, "Streptococcus mutans ferments sugars and produces acid."],
  [5, "At roughly what pH does enamel begin to demineralise?", ["7.0", "6.5", "5.5", "3.0"], 2, "The critical pH for enamel is about 5.5."],
  [5, "What is the key difference between gingivitis and periodontitis?", ["Gingivitis causes bone loss", "Periodontitis involves loss of attachment and bone, and is not fully reversible", "Periodontitis only affects children", "There is no difference"], 1, "Gingivitis is reversible. Periodontitis involves loss of supporting tissues."],
  [5, "How many teeth are there in a full deciduous (primary) dentition?", ["16", "20", "28", "32"], 1, "There are 20 deciduous teeth and 32 permanent teeth."],
  [5, "Which nerve supplies sensation to the lower teeth?", ["Infraorbital nerve", "Inferior alveolar nerve", "Facial nerve", "Greater palatine nerve"], 1, "The inferior alveolar nerve, a branch of the mandibular division of the trigeminal nerve."],
  [5, "Which is the largest salivary gland?", ["Submandibular", "Sublingual", "Parotid", "Minor labial glands"], 2, "The parotid gland is the largest. Its duct opens opposite the upper second molar."],
  [5, "Using FDI notation, the upper right first permanent molar is:", ["16", "26", "36", "46"], 0, "Quadrant 1 is upper right, and the first molar is tooth 6."],
  [5, "A BPE code 3 means:", ["Healthy, no bleeding", "Bleeding only", "Pocket of 3.5 to 5.5 mm", "Pocket over 5.5 mm"], 2, "Code 3 is a pocket of 3.5 to 5.5 mm. Code 4 is over 5.5 mm."],
  [5, "Which are the two biggest lifestyle risk factors for oral cancer in the UK?", ["Sugar and caffeine", "Tobacco and alcohol", "Fizzy drinks and fruit juice", "Mouthwash and whitening"], 1, "Tobacco and alcohol, especially together, greatly increase risk. HPV is also a factor."],
  [5, "When should hands be washed with soap and water rather than using alcohol rub?", ["Never, alcohol rub is always better", "When hands are visibly soiled", "Only at the end of the day", "Only before lunch"], 1, "Alcohol rub doesn't work on visibly dirty hands or against some spores."],
  [5, "Why must instruments be cleaned before sterilisation?", ["To make them shiny", "Debris can protect microorganisms from the steriliser", "It is quicker", "Cleaning is optional if a vacuum autoclave is used"], 1, "Sterilisation only works properly on clean instruments."],
  [5, "Under HTM 01-05, what is the recognised sterilising cycle for a steam autoclave?", ["121 degrees C for 1 minute", "134 to 137 degrees C for at least 3 minutes", "100 degrees C for 10 minutes", "160 degrees C for 1 hour"], 1, "134 to 137 degrees C held for a minimum of 3 minutes."],
  [5, "Which cleaning method does HTM 01-05 describe as best practice?", ["Manual scrubbing", "Ultrasonic bath only", "Validated washer disinfector", "Soaking in disinfectant overnight"], 2, "A validated washer disinfector is preferred because it is controlled and can be tested."],
  [5, "An orange-lidded sharps container is used for:", ["Sharps contaminated with medicines", "Sharps not contaminated with medicines", "Cytotoxic sharps", "Amalgam waste"], 1, "Orange lids are for sharps not contaminated with medicines. Yellow lids are for those that are, such as part-used local anaesthetic cartridges."],
  [5, "What are the first actions after a needlestick injury?", ["Suck the wound and carry on", "Encourage bleeding, wash with soap and running water, cover and report it straight away", "Scrub hard with a nail brush", "Wait until the end of the session to report it"], 1, "Don't suck or scrub. Report it straight away so the risk can be assessed promptly."],
  [5, "COSHH stands for:", ["Control of Substances Hazardous to Health", "Care of Staff Health and Hygiene", "Control of Sharps and Hazardous Hazards", "Code of Safe Hospital Handling"], 0, "The Control of Substances Hazardous to Health Regulations 2002."],
  [5, "Which regulations protect patients having X-rays?", ["IRR17", "IR(ME)R 2017", "RIDDOR 2013", "COSHH 2002"], 1, "IR(ME)R protects patients. IRR17 protects workers and the public."],
  [5, "Under IR(ME)R, who justifies a radiographic exposure?", ["The referrer", "The IR(ME)R practitioner", "The receptionist", "The patient"], 1, "The practitioner decides whether the exposure is justified."],
  [5, "Why should zinc oxide eugenol not be placed under a composite filling?", ["It is too hard", "Eugenol stops composite setting properly", "It is radiolucent", "It releases fluoride"], 1, "Eugenol interferes with the setting of resin-based materials."],
  [5, "Which restorative material releases fluoride?", ["Amalgam", "Glass ionomer", "Gold", "Porcelain"], 1, "Glass ionomer releases fluoride over time."],
  [5, "What is commonly used to acid etch enamel before bonding?", ["37% phosphoric acid", "Hydrochloric acid", "Citric acid", "Hydrogen peroxide"], 0, "Phosphoric acid at about 37% is the standard etchant."],
  [5, "Alginate impression material is:", ["A reversible hydrocolloid", "An irreversible hydrocolloid", "A silicone", "A thermoplastic"], 1, "Alginate sets by a chemical reaction that can't be reversed."],
  [5, "Why is an orange shield used with a curing light?", ["To speed up curing", "To protect eyes from the blue light", "To stop the light overheating", "To keep the tooth dry"], 1, "The blue curing light can damage the retina."],

  [6, "Roughly how much free sugar should adults have at most per day (UK guidance)?", ["10 g", "30 g", "60 g", "90 g"], 1, "No more than 30 g a day for adults, which is about 5% of daily energy."],
  [6, "An unexplained mouth ulcer that has lasted more than 3 weeks should be:", ["Reviewed in 6 months", "Referred on an urgent suspected cancer pathway", "Treated with mouthwash only", "Ignored if painless"], 1, "Persistent unexplained ulcers need urgent referral."],
  [6, "Which medication group is linked to medication-related osteonecrosis of the jaw (MRONJ)?", ["Antibiotics", "Bisphosphonates", "Statins", "Antihistamines"], 1, "Bisphosphonates and some other bone-modifying drugs carry an MRONJ risk."],
  [6, "For a patient on warfarin having an extraction, what should be checked?", ["Blood sugar", "INR", "Blood pressure only", "Cholesterol"], 1, "The INR shows how long blood takes to clot and should be checked shortly before treatment."],
  [6, "Which of these increases the risk of dental implant failure?", ["Good oral hygiene", "Smoking", "Regular check-ups", "Using fluoride toothpaste"], 1, "Smoking and poorly controlled diabetes both increase the risk."],
  [6, "Which of these is a 'hidden' sugar on a food label?", ["Sucralose", "Maltose", "Aspartame", "Xylitol"], 1, "Maltose is a sugar. Sucralose, aspartame and xylitol are sweeteners."],

  [7, "What strength of fluoride toothpaste is recommended for adults?", ["500 ppm", "1,000 ppm", "1,350 to 1,500 ppm", "5,000 ppm"], 2, "Delivering Better Oral Health recommends 1,350 to 1,500 ppm for adults and children 7 and over."],
  [7, "Fluoride varnish used in practice contains about:", ["1,450 ppm fluoride", "5,000 ppm fluoride", "22,600 ppm fluoride", "100 ppm fluoride"], 2, "2.26% sodium fluoride varnish is 22,600 ppm."],
  [7, "According to NICE, what is the longest recommended recall interval for adults?", ["6 months", "12 months", "24 months", "36 months"], 2, "NICE recommends 3 to 24 months for adults, based on risk. Under 18s should be seen at least every 12 months."],
  [7, "Water fluoridation schemes in England aim for about:", ["0.1 mg/L", "1 mg/L", "5 mg/L", "10 mg/L"], 1, "The target level is around 1 mg/L (1 ppm)."],
  [7, "Which is the best example of a population approach to oral health?", ["One-to-one brushing advice", "Supervised toothbrushing in nurseries across an area", "Fitting a crown", "A scale and polish"], 1, "Population approaches reach whole groups rather than individuals."],
  [7, "The 'common risk factor approach' means:", ["Treating all patients the same", "Tackling risks like sugar, smoking and alcohol that affect oral and general health together", "Only treating high-risk patients", "Using the same filling material for everyone"], 1, "Shared risk factors can be tackled together for wider health benefit."],
  [7, "What makes up the largest share of dentistry's carbon footprint?", ["Electricity", "Patient and staff travel", "Paper records", "Water use"], 1, "Travel is the largest share, which is one reason prevention is the most sustainable care."],

  [8, "Which organisation sets the Management Standards for work-related stress?", ["GDC", "HSE", "CQC", "NHS England"], 1, "The Health and Safety Executive Management Standards cover six areas, such as demands and support."],
  [8, "Which is a good self-care strategy for musculoskeletal health in the surgery?", ["Twisting to reach instruments", "Keeping good posture and adjusting your chair", "Working through breaks", "Standing on one leg"], 1, "Good posture and ergonomics reduce strain."],

  [9, "How many hours of verifiable CPD must a dental nurse complete in each 5-year cycle?", ["25", "50", "75", "100"], 1, "Dental nurses need at least 50 hours, with at least 10 in any 2-year period."],
  [9, "Which is one of the GDC's highly recommended CPD topics?", ["Marketing", "Disinfection and decontamination", "Business finance", "Social media design"], 1, "Others include medical emergencies, radiography, legal and ethical issues, complaints handling, oral cancer and safeguarding."],
  [9, "Under enhanced CPD, what must every registrant have?", ["A personal development plan", "A degree", "A mentor at the GDC", "A CPD certificate from NEBDN"], 0, "A PDP helps you plan CPD linked to your field of practice."],
  [9, "How many stages are there in Gibbs' reflective cycle?", ["3", "4", "6", "8"], 2, "Description, feelings, evaluation, analysis, conclusion and action plan."],

  [10, "What is the adult dose of adrenaline for anaphylaxis?", ["50 micrograms IM", "500 micrograms IM (0.5 mL of 1 mg/mL)", "1 mg IV", "5 mg IM"], 1, "Adults: 500 micrograms intramuscularly, repeated after 5 minutes if there is no improvement."],
  [10, "A conscious patient is hypoglycaemic and can swallow. What should be given?", ["Glucagon IM", "Oral glucose such as gel, tablets or a sugary drink", "Aspirin", "Nothing until the ambulance arrives"], 1, "Give oral glucose. If they can't swallow, glucagon 1 mg IM may be given."],
  [10, "Which drug is used for angina in the dental emergency kit?", ["Salbutamol", "Glyceryl trinitrate (GTN) spray", "Midazolam", "Adrenaline"], 1, "GTN is given under the tongue."],
  [10, "A patient with suspected heart attack, who is not allergic, should be given:", ["300 mg aspirin to chew", "75 mg aspirin to swallow", "Paracetamol", "Glucagon"], 0, "Aspirin 300 mg chewed, while waiting for the ambulance."],
  [10, "An adult has been fitting for 5 minutes. Which drug may be given?", ["Buccal midazolam", "GTN", "Aspirin", "Adrenaline"], 0, "Buccal midazolam 10 mg for adults with a prolonged seizure."],
  [10, "What is the correct ratio for adult CPR?", ["15 compressions to 2 breaths", "30 compressions to 2 breaths", "5 compressions to 1 breath", "Compressions only, no breaths ever"], 1, "30:2 at a rate of 100 to 120 per minute and a depth of 5 to 6 cm."],
  [10, "A patient feels faint and goes pale. What should you do first?", ["Sit them upright", "Lay them flat and raise their legs", "Give them glucose", "Give oxygen and sit them forward"], 1, "Laying flat with legs raised helps blood return to the brain."],
  [10, "Which drug is used for an acute asthma attack?", ["Salbutamol inhaler", "Midazolam", "Glucagon", "Aspirin"], 0, "Salbutamol, given through a spacer if available."],
  [10, "What approach should be used to assess a patient who is unwell?", ["SBAR", "ABCDE", "SMART", "Gibbs"], 1, "Airway, Breathing, Circulation, Disability, Exposure."],
  [10, "A conscious adult is choking and can't cough effectively. What should you do?", ["Give water", "Up to 5 back blows, then up to 5 abdominal thrusts", "Lay them flat", "Start CPR immediately"], 1, "Alternate back blows and abdominal thrusts. Start CPR if they become unresponsive."],
  [10, "At what flow rate is oxygen usually given in a medical emergency?", ["2 L/min", "5 L/min", "15 L/min", "30 L/min"], 2, "15 litres per minute through a non-rebreathe mask."]
];

/*
  Extended multiple choice questions (EMQs).
  Each set has a theme, a list of options and several questions.
  Each option may be used once, more than once, or not at all.
  items: [question, index of correct option (from 0), explanation]
*/
window.DNT_EMQS = [
  {
    unit: 10, theme: "Medical emergencies",
    lead: "For each patient, choose the most likely medical emergency.",
    options: ["Adrenal crisis", "Anaphylaxis", "Angina", "Asthma attack", "Cardiac arrest", "Epileptic seizure", "Hypoglycaemia", "Myocardial infarction", "Stroke", "Vasovagal syncope"],
    items: [
      ["A patient with type 1 diabetes skipped lunch. They are sweaty, shaky, confused and irritable.", 6, "Low blood sugar causes sweating, shaking, confusion and irritability. Give oral glucose if they can swallow."],
      ["Minutes after an injection, a patient develops an itchy rash, swollen lips and a wheeze, and feels faint.", 1, "Skin and airway signs plus low blood pressure point to anaphylaxis. Call 999 and give IM adrenaline."],
      ["A patient's face suddenly droops on one side, their speech is slurred and they cannot lift one arm.", 8, "Face, Arms, Speech: these are FAST signs of a stroke. Note the time and call 999."],
      ["A patient has crushing central chest pain spreading to the left arm that is not relieved by their GTN spray.", 7, "Chest pain not relieved by GTN suggests a heart attack. Call 999 and give 300 mg aspirin to chew if not allergic."],
      ["A nervous patient becomes pale and clammy and briefly loses consciousness, but recovers quickly when laid flat.", 9, "A simple faint. Laying flat with legs raised helps them recover."]
    ]
  },
  {
    unit: 10, theme: "Emergency drugs",
    lead: "For each situation, choose the most appropriate drug.",
    options: ["Adrenaline 1 mg/mL IM", "Aspirin 300 mg", "Glucagon 1 mg IM", "Oral glucose", "GTN spray", "Midazolam oromucosal solution", "Oxygen", "Salbutamol inhaler"],
    items: [
      ["A patient with known angina gets chest pain while in the chair.", 4, "GTN spray under the tongue relieves angina."],
      ["A hypoglycaemic patient is drowsy and can no longer swallow safely.", 2, "Glucagon IM is used when the patient cannot take glucose by mouth."],
      ["An adult has been having a seizure for over 5 minutes.", 5, "Oromucosal (buccal) midazolam is given for prolonged seizures."],
      ["A patient is wheezy and breathless and cannot finish a sentence.", 7, "Salbutamol, ideally through a spacer, for an acute asthma attack."]
    ]
  },
  {
    unit: 5, theme: "Decontamination (HTM 01-05)",
    lead: "Choose the equipment that best matches each description.",
    options: ["Illuminated magnifier", "Manual cleaning", "Non-vacuum (type N) steriliser", "Ultrasonic bath", "Vacuum (type B) steriliser", "Washer disinfector"],
    items: [
      ["The validated, automated cleaning method that HTM 01-05 describes as best practice.", 5, "A washer disinfector cleans and thermally disinfects in a controlled, testable cycle."],
      ["Used to check instruments are clean and undamaged after cleaning.", 0, "Inspection under an illuminated magnifier is an essential step before sterilisation."],
      ["Needed to sterilise wrapped or hollow instruments, such as handpieces.", 4, "The vacuum removes air so steam reaches inside hollow and wrapped items."],
      ["Suitable only for unwrapped, solid instruments.", 2, "A type N steriliser has no vacuum, so it can't reliably sterilise wrapped or hollow items."]
    ]
  },
  {
    unit: 5, theme: "Healthcare waste",
    lead: "Choose the correct place to dispose of each item.",
    options: ["Amalgam waste container", "Black domestic waste bag", "Orange-lidded sharps container", "Purple-lidded sharps container", "Yellow-lidded sharps container"],
    items: [
      ["A partly used local anaesthetic cartridge.", 4, "Sharps contaminated with medicines go in a yellow-lidded container."],
      ["A used suture needle with no medicine in it.", 2, "Sharps not contaminated with medicines go in an orange-lidded container."],
      ["An extracted tooth with an amalgam filling.", 0, "Teeth with amalgam must go in the amalgam waste container, never in sharps or clinical waste for incineration."],
      ["Packaging from new gloves, not in contact with any patient.", 1, "Clean packaging is domestic (or recycling) waste, not clinical waste."]
    ]
  },
  {
    unit: 5, theme: "Dental materials",
    lead: "Choose the material that best matches each description.",
    options: ["Alginate", "Amalgam", "Calcium hydroxide", "Composite", "Glass ionomer", "Addition-cured silicone", "Zinc oxide eugenol", "Zinc phosphate"],
    items: [
      ["A tooth-coloured filling set with a blue curing light.", 3, "Composite is light-cured."],
      ["An irreversible hydrocolloid used for study model impressions.", 0, "Alginate sets by a chemical reaction and can't be re-softened."],
      ["A sedative temporary dressing that must not be used under composite.", 6, "The eugenol in ZOE stops composite setting properly."],
      ["Bonds chemically to the tooth and releases fluoride.", 4, "Glass ionomer bonds to enamel and dentine and releases fluoride."],
      ["A very accurate impression material used for crowns and bridges.", 5, "Addition-cured silicone is accurate and stable."]
    ]
  },
  {
    unit: 5, theme: "Head and neck anatomy",
    lead: "Choose the structure that best matches each description.",
    options: ["Facial nerve", "Inferior alveolar nerve", "Lateral pterygoid", "Lingual nerve", "Masseter", "Parotid gland", "Sublingual gland", "Submandibular gland"],
    items: [
      ["Its duct opens opposite the upper second molar.", 5, "The parotid (Stensen's) duct opens on the inside of the cheek near the upper second molar."],
      ["Damage to this nerve can leave the side of the tongue numb.", 3, "The lingual nerve supplies sensation to the front two thirds of the tongue."],
      ["Supplies sensation to the lower teeth and is numbed by an inferior dental block.", 1, "The inferior alveolar nerve runs through the mandible to the lower teeth."],
      ["A strong muscle at the angle of the jaw that closes the mouth.", 4, "The masseter is one of the main muscles that elevates the mandible."],
      ["Pulls the mandible forward and helps open the mouth.", 2, "The lateral pterygoid protrudes the mandible."]
    ]
  },
  {
    unit: 1, theme: "Legislation and regulations",
    lead: "Choose the law or regulation that best applies to each situation.",
    options: ["Care Act 2014", "Children Act 1989", "Data Protection Act 2018", "Equality Act 2010", "IR(ME)R 2017", "Mental Capacity Act 2005", "Public Interest Disclosure Act 1998", "RIDDOR 2013"],
    items: [
      ["Deciding whether a patient with dementia can consent to treatment.", 5, "The MCA sets out how capacity is assessed and best interests decisions are made."],
      ["Providing a ramp so a wheelchair user can get into the practice.", 3, "The Equality Act 2010 requires reasonable adjustments."],
      ["A patient asks for a copy of their dental records.", 2, "Subject access rights come from UK GDPR and the Data Protection Act 2018."],
      ["Protecting a dental nurse who reports a colleague's unsafe practice.", 6, "PIDA protects whistleblowers."],
      ["Reporting a sharps injury from a source patient known to have a blood-borne virus.", 7, "This is a reportable dangerous occurrence under RIDDOR."],
      ["Making sure a radiograph is justified before the patient is exposed.", 4, "IR(ME)R 2017 protects patients having X-rays."]
    ]
  },
  {
    unit: 7, theme: "Preventing oral disease",
    lead: "Choose the most appropriate preventive measure for each patient.",
    options: ["Chlorhexidine mouthwash", "Fissure sealant", "Fluoride varnish", "High fluoride toothpaste (5,000 ppm)", "Interdental brushes", "Smoking cessation support", "Spit, don't rinse"],
    items: [
      ["A 7-year-old at high caries risk has deep fissures on newly erupted first permanent molars.", 1, "Sealing deep fissures on permanent molars helps prevent decay in high-risk children."],
      ["A 72-year-old has several areas of root caries and the dentist wants to prescribe a toothpaste.", 3, "5,000 ppm toothpaste can be prescribed for adults (16 and over) at high caries risk."],
      ["A patient with periodontitis has open spaces between their teeth.", 4, "Interdental brushes clean between teeth where a toothbrush can't reach."],
      ["A patient rinses with water straight after brushing.", 6, "Spitting out without rinsing leaves more fluoride on the teeth."],
      ["A 4-year-old has early signs of decay.", 2, "Fluoride varnish at least twice a year for children from age 3, more often if at higher risk."]
    ]
  },
  {
    unit: 5, theme: "Basic Periodontal Examination (BPE)",
    lead: "Choose the BPE code for each finding.",
    options: ["Code 0", "Code 1", "Code 2", "Code 3", "Code 4", "Code *"],
    items: [
      ["Bleeding on probing, but no calculus and no pockets over 3.5 mm.", 1, "Code 1 is bleeding only."],
      ["Calculus is present, with no pockets over 3.5 mm.", 2, "Code 2 is calculus or another plaque-retentive factor."],
      ["The deepest pocket in the sextant is 4.5 mm.", 3, "Code 3 is a pocket of 3.5 to 5.5 mm."],
      ["Furcation involvement is found.", 5, "The * is added for furcation involvement."]
    ]
  }
];
