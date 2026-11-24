/*
  DNT practice examiner: key points for each scenario.
  The examiner checks the student's words against these points. It does NOT mark.

  How a key point works:
    label     what the point is (shown at the end as a topic to revise if it was never mentioned)
    ask       the follow-up question the examiner asks if the point has not been said
    match     a list of groups. EVERY group must be found in what the student said.
              Each group is a list of words or phrases, and ANY ONE of them counts.
              Short words match the start of a word, so "neglect" also matches "neglected".

  To add a scenario: copy the block below, change "scenario" to the id from scenarios.js,
  and write new key points.
*/
window.DNT_EXAMINER = {
  maxFollowups: 5,
  scenarios: [
    {
      scenario: "sg-child-neglect",
      opening: "Thank you. When you are ready, talk me through what you are thinking about Amir, and what you would do.",
      points: [
        {
          label: "Recognising possible dental neglect",
          ask: "Looking at the missed appointments and the untreated decay together, what might this be a sign of?",
          match: [["neglect", "safeguarding concern", "safeguarding issue", "welfare", "at risk", "not being looked after", "not looked after", "child protection"]]
        },
        {
          label: "Not jumping to conclusions and thinking about the wider picture",
          ask: "Before deciding anything, what else might be going on for this family?",
          match: [["wider picture", "bigger picture", "jump to conclusion", "jumping to conclusion", "assume", "barrier", "struggling", "support needs", "need support", "needs support", "extra support", "circumstances", "other reasons", "reasons why", "transport", "childcare", "money", "finances", "single parent", "work commitments"]]
        },
        {
          label: "Following the safeguarding policy and telling the safeguarding lead",
          ask: "Who would you speak to in the practice, and how quickly?",
          match: [["safeguarding lead", "lead for safeguarding", "safeguarding officer", "safeguarding policy", "designated person", "designated lead", "named lead", "named person"]]
        },
        {
          label: "Using 'was not brought' rather than 'did not attend' for a child",
          ask: "How should Amir's missed appointments be recorded, and why does the wording matter for a child?",
          match: [["was not brought", "not brought", "wasn't brought", "w n b", "wnb"]]
        },
        {
          label: "Recording concerns factually, dated and signed",
          ask: "What would you write in Amir's records, and how would you write it?",
          match: [
            ["record", "notes", "document", "write", "written", "wrote"],
            ["fact", "date", "dated", "sign", "exact words", "what was said", "what mum said", "what she said", "what i saw", "what was seen", "objective", "accurate", "timed"]
          ]
        },
        {
          label: "Knowing when concerns go outside the practice",
          ask: "If the concerns carry on, who outside the practice could be involved?",
          match: [["social care", "social services", "social worker", "children's services", "childrens services", "health visitor", "school nurse", "gp", "doctor", "local authority", "mash", "multi agency", "refer"]]
        },
        {
          label: "Calling 999 if a child is in immediate danger",
          ask: "What would you do if you thought Amir was in immediate danger?",
          match: [["999", "nine nine nine", "police", "immediate danger", "immediate risk", "emergency services", "ambulance"]]
        },
        {
          label: "Naming legislation or guidance",
          ask: "Which laws or guidance support what you would do?",
          match: [["children act", "children's act", "childrens act", "working together", "gdc", "general dental council", "standards for the dental team", "keeping children safe", "safeguarding vulnerable groups"]]
        },
        {
          label: "Knowing your own role and its limits as a dental nurse",
          ask: "What is your role as a dental nurse here, and where does it stop?",
          match: [["my role", "not my role", "not investigate", "wouldn't investigate", "would not investigate", "not to investigate", "don't investigate", "do not investigate", "limit", "scope", "pass it on", "pass on my concern", "not my job", "not up to me"]]
        }
      ]
    }
  ]
};
