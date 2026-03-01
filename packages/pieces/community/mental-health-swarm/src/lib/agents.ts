export const agentSwarmData: Record<string, any[]> = {
            management: [
                {
                    name: "Chief Mental Health Orchestrator",
                    role: "Manager",
                    description: "Coordinates the mental health swarm's activities, aligning them with clinical objectives and ethical standards, and oversees the personalized care of each user.",
                    tools: [
                        "Access to all agent activities and performance metrics",
                        "Prioritization algorithms for urgent mental health needs",
                        "Clinical guidelines database for ethical decision making",
                        "User progress dashboard for personalized case management"
                    ]
                },
                {
                    name: "Therapy Program Planner",
                    role: "Strategist",
                    description: "Designs structured therapy programs (e.g., CBT, mindfulness plans) tailored to each user's goals and adjusts them over time based on progress and feedback.",
                    tools: [
                        "Evidence-based therapy protocol templates",
                        "Personalization algorithms for adapting therapy paths",
                        "Progress tracking tools for treatment effectiveness",
                        "Clinical research database on therapeutic approaches"
                    ]
                },
                {
                    name: "Progress Strategist Agent",
                    role: "Analyst",
                    description: "Analyzes overall user progress and engagement trends, suggesting strategy adjustments or additional resources for users who aren't improving as expected.",
                    tools: [
                        "Progress analytics dashboard",
                        "Pattern recognition algorithms for identifying stalled progress",
                        "Intervention recommendation engine",
                        "Resource allocation prioritization tools"
                    ]
                },
                {
                    name: "Multi-Agency Liaison Agent",
                    role: "Coordinator",
                    description: "Coordinates with other domain swarms or external systems (like a healthcare swarm for medication info or an education swarm if academic stress is an issue) to integrate mental health support holistically.",
                    tools: [
                        "Secure API connections to other health systems",
                        "Cross-domain knowledge integration tools",
                        "Data translation interfaces for medical to psychological contexts",
                        "HIPAA-compliant information exchange protocols"
                    ]
                },
                {
                    name: "Session Scheduler Agent",
                    role: "Logistics",
                    description: "Manages scheduling of therapy-related interactions (e.g., daily check-ins, weekly summary reports to a clinician) and ensures they occur at times convenient and therapeutically optimal for the user.",
                    tools: [
                        "Calendar optimization algorithms",
                        "User preference learning for optimal timing",
                        "Therapeutic timing research database",
                        "Notification management system"
                    ]
                },
                {
                    name: "Consent & Preferences Agent",
                    role: "Privacy Manager",
                    description: "Manages user consents for data use and sharing (with human therapists or caregivers) and records therapy modality preferences (like preferring chat vs. voice sessions).",
                    tools: [
                        "Digitized consent management platform",
                        "Preference tracking database",
                        "Privacy regulation compliance checking tools",
                        "User communication templates for privacy updates"
                    ]
                },
                {
                    name: "Outcome Goal Agent",
                    role: "Goal Tracker",
                    description: "Tracks each user's personal mental health goals (e.g., \"reduce anxiety attacks to <1/week\") and ensures therapy plans remain aligned to achieving these outcomes, highlighting when goals are met or need revision.",
                    tools: [
                        "Goal setting framework based on SMART principles",
                        "Progress tracking visualization tools",
                        "Milestone celebration notification system",
                        "Goal revision recommendation algorithms"
                    ]
                },
                {
                    name: "Resource Allocation Agent",
                    role: "Resource Manager",
                    description: "Allocates computational and informational resources to various support agents, especially during peak times (for example, if many users need crisis support simultaneously, it prioritizes appropriately).",
                    tools: [
                        "Load balancing algorithms for compute resources",
                        "Crisis prioritization matrix",
                        "Usage pattern analytics",
                        "Resource optimization dashboard"
                    ]
                },
                {
                    name: "Ethical Compliance Agent",
                    role: "Ethics Guardian",
                    description: "Ensures the swarm's suggestions and actions adhere to psychological ethical guidelines (maintaining confidentiality, avoiding undue influence) and flags anything that might require human ethical review.",
                    tools: [
                        "Ethical guidelines database (APA, WHO standards)",
                        "Interaction scanning algorithms for ethical compliance",
                        "Escalation protocols for ethical concerns",
                        "Audit logging system for accountability"
                    ]
                },
                {
                    name: "Quality Assurance Agent",
                    role: "Quality Controller",
                    description: "Regularly reviews interactions and outcomes for quality and consistency, ensuring the advice given across the swarm is evidence-based and identifying any deviations or issues for correction.",
                    tools: [
                        "Interaction quality scoring algorithms",
                        "Evidence-based practice alignment checker",
                        "Random sampling system for quality audits",
                        "Feedback collection and analysis tools"
                    ]
                }
            ],
            data: [
                {
                    name: "Patient Data Manager",
                    role: "Manager",
                    description: "Oversees the collection and updating of user mental health profiles, including history, assessments, and ongoing mood tracking, ensuring data completeness and privacy.",
                    tools: [
                        "Secure health data vault",
                        "Profile completion tracking tools",
                        "Data verification algorithms",
                        "Privacy compliance checking tools"
                    ]
                },
                {
                    name: "Intake Interview Agent",
                    role: "Assessor",
                    description: "Guides new users through a digital intake process, asking standardized questions to gather mental health history, current concerns, and baseline assessments (e.g., PHQ-9 for depression).",
                    tools: [
                        "Adaptive interview protocol system",
                        "Standardized assessment instruments (PHQ-9, GAD-7, etc.)",
                        "Conversational UI for clinical interviewing",
                        "Risk flag detection for urgent concerns"
                    ]
                },
                {
                    name: "Mood Tracker Agent",
                    role: "Monitor",
                    description: "Collects daily mood and sleep inputs from users via prompts or wearable integration, logging trends over time and detecting significant changes or patterns.",
                    tools: [
                        "Longitudinal mood visualization tools",
                        "Pattern detection algorithms",
                        "Anomaly detection for mood shifts",
                        "Wearable data integration APIs"
                    ]
                },
                {
                    name: "Journal Analysis Agent",
                    role: "Content Analyzer",
                    description: "Allows users to input free-form journal entries and uses sentiment analysis to detect underlying emotions or topics, summarizing any concerns (while respecting privacy settings).",
                    tools: [
                        "NLP sentiment analysis engine",
                        "Emotional content classification",
                        "Theme extraction algorithms",
                        "Private journal storage system"
                    ]
                },
                {
                    name: "Social Signals Agent",
                    role: "Behavioral Monitor",
                    description: "With user consent, monitors indirect mental health indicators (social media sentiment, communication patterns) for drastic changes that might indicate shifts in mental state.",
                    tools: [
                        "Social media API integrations (with consent)",
                        "Behavioral baseline comparison tools",
                        "Communication pattern analysis",
                        "Digital phenotyping algorithms"
                    ]
                },
                {
                    name: "Psychometric Test Agent",
                    role: "Assessment Specialist",
                    description: "Administers psychological questionnaires and scales (anxiety scales, stress tests) at appropriate intervals and scores them to quantify changes in mental health status.",
                    tools: [
                        "Digital psychometric test library",
                        "Automated scoring algorithms",
                        "Test result interpretation guides",
                        "Longitudinal comparison tools"
                    ]
                },
                {
                    name: "Medical History Agent",
                    role: "Health Integrator",
                    description: "Imports relevant medical data (e.g., known conditions, medications from a healthcare swarm) that might affect mental health, to provide context like identifying medication side effects that resemble mental symptoms.",
                    tools: [
                        "Medical-psychiatric database integration",
                        "Medication side effect reference",
                        "Condition interaction mapping",
                        "Health record parsing tools"
                    ]
                },
                {
                    name: "Lifestyle Data Agent",
                    role: "Contextual Data Gatherer",
                    description: "Gathers data on lifestyle factors (exercise, diet, screen time) through integrations or self-report, recognizing their influence on mental well-being and providing context for interventions.",
                    tools: [
                        "Activity tracker integrations",
                        "Sleep quality monitoring tools",
                        "Nutrition and mental health correlation database",
                        "Screen time monitoring integration"
                    ]
                },
                {
                    name: "Data Privacy Agent",
                    role: "Privacy Guardian",
                    description: "Monitors and enforces user data privacy choices, ensuring sensitive journal or assessment data is stored and accessed in compliance with privacy rules (similar to HIPAA for mental health info).",
                    tools: [
                        "Consent management system",
                        "Data access logging and auditing",
                        "Anonymization tools for research use",
                        "Regulatory compliance checkers"
                    ]
                },
                {
                    name: "Profile Synthesis Agent",
                    role: "Information Integrator",
                    description: "Synthesizes all collected data into a coherent user profile that can be quickly understood by therapy agents – including key themes in their life, triggers, strengths, and growth areas.",
                    tools: [
                        "Multi-source data integration engine",
                        "Clinical relevance ranking algorithms",
                        "User profile visualization tools",
                        "Theme extraction and summarization"
                    ]
                }
            ],
            knowledge: [
                {
                    name: "Psychology Knowledge Base Manager",
                    role: "Manager",
                    description: "Manages a repository of psychological knowledge (therapy techniques, research findings, clinical guidelines) and makes it accessible to other agents for reference.",
                    tools: [
                        "Clinical psychology knowledge graph",
                        "Research paper integration system",
                        "Clinical guideline versioning",
                        "Knowledge retrieval optimization"
                    ]
                },
                {
                    name: "Therapeutic Techniques Agent",
                    role: "Intervention Librarian",
                    description: "Stores a library of therapy exercises and interventions (CBT worksheets, grounding techniques, guided meditations) and provides them to therapy agents to assign when appropriate.",
                    tools: [
                        "Therapeutic exercise database",
                        "Intervention matching algorithms",
                        "Effectiveness rating system",
                        "Exercise adaptation tools"
                    ]
                },
                {
                    name: "Research Updates Agent",
                    role: "Clinical Researcher",
                    description: "Monitors new research in mental health (journal articles, meta-analyses, emerging digital therapeutics) and updates the swarm on advances (like a new effective treatment for PTSD).",
                    tools: [
                        "Research paper scraping tools",
                        "Clinical trial monitoring",
                        "Evidence evaluation frameworks",
                        "Knowledge update distribution system"
                    ]
                },
                {
                    name: "Medication Reference Agent",
                    role: "Psychopharmacology Specialist",
                    description: "Provides information on psychiatric medications (usage, side effects, interactions) to contextualize user reports (e.g., flagging that a new symptom may be a side effect of a med).",
                    tools: [
                        "Medication database with psychiatric focus",
                        "Drug interaction checker",
                        "Side effect probability calculator",
                        "Medication timeline integration with mood data"
                    ]
                },
                {
                    name: "Case Library Agent",
                    role: "Case Study Manager",
                    description: "References anonymized case studies or past user scenarios (with consent) to help tailor suggestions, e.g., \"Users with similar anxiety triggers found success with technique X.\"",
                    tools: [
                        "Anonymized case repository",
                        "Pattern matching for similar presentation",
                        "Outcome tracking for interventions",
                        "Ethical use guidelines for case examples"
                    ]
                },
                {
                    name: "Symptom Knowledge Agent",
                    role: "Clinical Symptomatology Expert",
                    description: "Maintains detailed info on mental health symptoms and disorders (DSM-5 criteria, typical presentations) to help in assessment and ensuring that nothing is overlooked in evaluation.",
                    tools: [
                        "DSM-5/ICD-10/ICD-11 diagnostic criteria database",
                        "Symptom checklist completeness verifier",
                        "Differential diagnosis suggestion tools",
                        "Symptom overlap mapping"
                    ]
                },
                {
                    name: "Cultural Context Agent",
                    role: "Cultural Competence Guide",
                    description: "Provides knowledge on cultural factors and practices that may influence mental health or appropriate interventions (ensuring advice is culturally sensitive and relevant).",
                    tools: [
                        "Cultural practices and mental health database",
                        "Cultural identity factor analysis",
                        "Culturally adapted intervention library",
                        "Language and concept translation guides"
                    ]
                },
                {
                    name: "Legal/Ethical Reference Agent",
                    role: "Ethics and Compliance Guide",
                    description: "Stores guidelines on legal/ethical issues (duty to warn, mandatory reporting thresholds, confidentiality limits) and alerts the swarm if any situation approaches those boundaries.",
                    tools: [
                        "Legal requirement database by jurisdiction",
                        "Ethical boundary detection algorithms",
                        "Mandatory reporting threshold checkers",
                        "Documentation templates for legal compliance"
                    ]
                },
                {
                    name: "Success Stories Agent",
                    role: "Hope and Motivation Provider",
                    description: "Maintains a collection of motivational recovery stories or positive coping narratives that can be shared (with permission) to inspire and encourage users going through similar struggles.",
                    tools: [
                        "Anonymized recovery narrative database",
                        "Situation matching for relevant stories",
                        "Inspiration timing algorithms",
                        "Hope-centered intervention framework"
                    ]
                },
                {
                    name: "Language Tone Agent",
                    role: "Communication Specialist",
                    description: "Advises other agents on communication tone, encouraging the use of empathetic and non-judgmental language. It might adjust phrasing of responses to ensure they are supportive and clear.",
                    tools: [
                        "Therapeutic communication style guides",
                        "Empathetic language reframing tools",
                        "Clarity optimization for cognitive states",
                        "Trauma-informed communication framework"
                    ]
                }
            ],
            assessment: [
                {
                    name: "Assessment Lead Agent",
                    role: "Manager",
                    description: "Oversees initial and ongoing mental health assessments, ensuring they are comprehensive and updated as the user's situation evolves.",
                    tools: [
                        "Assessment protocol management system",
                        "Assessment quality metrics dashboard",
                        "Longitudinal assessment tracking",
                        "Comprehensive assessment completeness verification"
                    ]
                },
                {
                    name: "Symptom Assessment Agent",
                    role: "Clinical Evaluator",
                    description: "Interprets self-reported symptoms and questionnaire results to gauge severity of issues like depression or anxiety, providing a preliminary status (mild, moderate, severe) for each.",
                    tools: [
                        "Symptom severity scaling algorithms",
                        "Validated assessment instrument scoring",
                        "Cross-symptom pattern analysis",
                        "Temporal symptom progression tracking"
                    ]
                },
                {
                    name: "Behavior Analysis Agent",
                    role: "Behavioral Analyst",
                    description: "Looks at user behavior data (like routine changes, activity levels from wearables, social withdrawal signals) to identify patterns or red flags that might not be explicit in self-reports.",
                    tools: [
                        "Behavioral baseline comparison",
                        "Activity pattern analytics",
                        "Behavioral anomaly detection",
                        "Wearable and app usage data integration"
                    ]
                },
                {
                    name: "Cognitive Distortion Detector",
                    role: "Cognitive Pattern Analyst",
                    description: "Identifies negative thought patterns in user inputs (like catastrophizing, black-and-white thinking) which are key targets in cognitive-behavioral therapy, highlighting them for therapy work.",
                    tools: [
                        "Cognitive distortion classification models",
                        "Thought pattern tracking over time",
                        "CBT framework integration",
                        "Linguistic pattern recognition for thinking styles"
                    ]
                },
                {
                    name: "Risk Assessment Agent",
                    role: "Safety Evaluator",
                    description: "Evaluates risk of self-harm or harm to others by analyzing user messages (for keywords or despair indicators) and context, triggering immediate escalation protocols if risk is high.",
                    tools: [
                        "Crisis keyword detection algorithms",
                        "Risk severity scoring models",
                        "Contextual risk factor analysis",
                        "Temporal urgency assessment"
                    ]
                },
                {
                    name: "Progress Assessment Agent",
                    role: "Improvement Tracker",
                    description: "Periodically reassesses the user's mental health status using prior metrics and current inputs to measure improvement or worsening, ensuring therapy plans adjust accordingly.",
                    tools: [
                        "Longitudinal symptom comparison",
                        "Statistically significant change calculators",
                        "Functional improvement metrics",
                        "Goal attainment scaling"
                    ]
                },
                {
                    name: "Anomaly Detector Agent",
                    role: "Pattern Deviation Monitor",
                    description: "Notifies if there's a sudden, uncharacteristic change in the user's behavior or responses (e.g., a usually responsive user goes silent or a usually calm user starts expressing intense anger frequently).",
                    tools: [
                        "Behavioral baseline modeling",
                        "Deviation significance testing",
                        "Communication pattern analysis",
                        "Emotional expression tracking"
                    ]
                },
                {
                    name: "Diagnosis Suggestion Agent",
                    role: "Clinical Diagnostic Aide",
                    description: "Suggests possible clinical diagnoses to a supervising therapist based on aggregated data (aligned with DSM criteria) – e.g., flagging that patterns fit major depressive disorder vs. an adjustment disorder – while leaving final diagnosis to a human.",
                    tools: [
                        "DSM-5/ICD diagnostic criteria matching",
                        "Symptom cluster analysis",
                        "Differential diagnosis suggestion",
                        "Confidence scoring for diagnostic hypotheses"
                    ]
                },
                {
                    name: "Second Opinion Agent",
                    role: "Verification Specialist",
                    description: "Reaches out to external mental health resources or databases when uncertain (like querying a specialized model or knowledge base) to ensure no potential condition is missed in assessment.",
                    tools: [
                        "External clinical database connections",
                        "Rare condition checking algorithms",
                        "Confidence thresholds for seeking verification",
                        "Multi-source clinical information integration"
                    ]
                },
                {
                    name: "Assessment Report Agent",
                    role: "Clinical Documentation Specialist",
                    description: "Compiles findings into a structured report for human clinicians: including test scores, symptom evolution, and any suggested diagnostic considerations, as a briefing before a therapy session.",
                    tools: [
                        "Clinical report templating system",
                        "Data visualization for clinical patterns",
                        "Priority highlighting for clinical attention",
                        "Assessment history comparison tools"
                    ]
                }
            ],
            therapy: [
                {
                    name: "Therapy Coordinator Agent",
                    role: "Manager",
                    description: "Leads the creation and adjustment of individualized therapy plans, ensuring consistency and that multiple therapeutic approaches are well integrated for the user.",
                    tools: [
                        "Treatment plan management system",
                        "Therapeutic modality integration framework",
                        "Intervention consistency verification",
                        "Personalized therapy roadmap creation"
                    ]
                },
                {
                    name: "Intervention Selector Agent",
                    role: "Clinical Strategist",
                    description: "Chooses appropriate interventions for the moment – for example, if a user is panicking, selects a grounding technique or breathing exercise; if a user is ruminating, suggests a CBT reframing exercise.",
                    tools: [
                        "Context-sensitive intervention matching",
                        "Emotional state assessment tools",
                        "Intervention effectiveness database",
                        "User preference incorporation"
                    ]
                },
                {
                    name: "Session Guide Agent",
                    role: "Therapy Session Director",
                    description: "Structures what will be covered in a given digital therapy session or check-in, e.g., \"Today we will reflect on last week's mood journal and practice a new anxiety coping skill,\" ensuring continuity from previous sessions.",
                    tools: [
                        "Session planning templates",
                        "Progress-based session adaptation",
                        "Continuity management between sessions",
                        "Session evaluation and feedback collection"
                    ]
                },
                {
                    name: "Motivational Agent",
                    role: "Encouragement Specialist",
                    description: "Provides encouragement and motivation, reinforcing any positive progress (\"You've completed 5 journaling days in a row, great job!\") and gently encouraging continued effort or re-engagement if user is lapsing.",
                    tools: [
                        "Positive reinforcement scheduling",
                        "Achievement recognition system",
                        "Motivational interviewing techniques",
                        "Re-engagement messaging optimization"
                    ]
                },
                {
                    name: "Personalization Agent",
                    role: "Treatment Customizer",
                    description: "Tailors therapeutic content to user's interests and preferences (e.g., using a user's hobby in metaphors, choosing language that resonates – formal vs. casual – depending on the user).",
                    tools: [
                        "User preference learning system",
                        "Content adaptation algorithms",
                        "Personalized metaphor generation",
                        "Communication style matching"
                    ]
                },
                {
                    name: "Goal Tracker Agent",
                    role: "Progress Monitor",
                    description: "Monitors the user's progress towards their personal therapy goals and provides both user and therapist with updates; for instance, noting \"You've reported 50% fewer bad days this month, moving closer to your goal of managing daily anxiety.\"",
                    tools: [
                        "Goal achievement metrics",
                        "Visual progress representation",
                        "Milestone notification system",
                        "Goal-aligned data aggregation"
                    ]
                },
                {
                    name: "Relapse Prevention Agent",
                    role: "Stability Maintainer",
                    description: "For users in later stages of therapy or post-therapy, helps craft a relapse prevention plan, reminding them of early warning signs and coping strategies, and scheduling periodic check-ins to maintain gains.",
                    tools: [
                        "Relapse signature identification",
                        "Warning sign monitoring system",
                        "Coping strategy reinforcement",
                        "Maintenance scheduling optimization"
                    ]
                },
                {
                    name: "Family Involvement Agent",
                    role: "Support Network Integrator",
                    description: "If appropriate and consented, helps involve family or a support network by suggesting family therapy exercises, or educating family members on how to support the user (without breaching confidentiality).",
                    tools: [
                        "Support network education materials",
                        "Family exercise guidelines",
                        "Boundary-respecting information sharing",
                        "Support coordination tools"
                    ]
                },
                {
                    name: "Therapy Efficacy Analyzer",
                    role: "Treatment Response Evaluator",
                    description: "Evaluates which parts of the therapy plan are working (maybe noticing user engages more with mindfulness than journaling) and which are not, suggesting to amplify successful methods or swap out less effective ones.",
                    tools: [
                        "Intervention engagement analytics",
                        "Outcome correlation analysis",
                        "Component efficacy comparison",
                        "Treatment plan optimization algorithms"
                    ]
                },
                {
                    name: "Plan Revision Agent",
                    role: "Treatment Adjuster",
                    description: "Reviews all data every few weeks to determine if the therapy plan should be revised – e.g., step up to more advanced exercises, introduce a new technique, or refer to a human therapist/psychiatrist for additional treatment like medication evaluation.",
                    tools: [
                        "Comprehensive progress review framework",
                        "Treatment adaptation decision trees",
                        "Stepped care progression guidelines",
                        "Human clinician referral criteria"
                    ]
                }
            ],
            engagement: [
                {
                    name: "Lead Support Chatbot",
                    role: "Manager",
                    description: "The primary conversational agent interacting with the user on a daily basis, ensuring all communication is empathetic and context-aware, and coordinating behind the scenes with other agents for information.",
                    tools: [
                        "Conversational context management",
                        "Multi-agent coordination interface",
                        "Empathetic response generation",
                        "User interaction history access"
                    ]
                },
                {
                    name: "Counselor Bot",
                    role: "Therapeutic Conversationalist",
                    description: "Engages in therapeutic conversations with the user, using active listening and validated therapeutic techniques (like reflecting feelings, Socratic questioning) to help users process emotions in between human therapy sessions.",
                    tools: [
                        "Active listening modeling",
                        "Emotional reflection techniques",
                        "Socratic questioning frameworks",
                        "Therapeutic dialogue management"
                    ]
                },
                {
                    name: "Crisis Contact Agent",
                    role: "Emergency Response Specialist",
                    description: "Watches for signs of crisis (explicit messages about hopelessness or harm) and if detected, immediately shifts tone and protocol: e.g., stays with the user in a supportive dialogue, guides them through a de-escalation technique, and alerts emergency services or a human crisis counselor if needed according to predefined safety rules.",
                    tools: [
                        "Crisis keyword detection",
                        "De-escalation dialogue protocols",
                        "Emergency service contact system",
                        "Crisis counselor alert mechanism"
                    ]
                },
                {
                    name: "Daily Check-in Agent",
                    role: "Regular Engagement Specialist",
                    description: "Reaches out at a set time each day to ask the user brief questions about their mood, what they accomplished, or challenges faced, keeping them in a routine and gathering data for the mood tracker.",
                    tools: [
                        "Intelligent scheduling system",
                        "Brief assessment question sets",
                        "Engagement optimization algorithms",
                        "Mood data collection interface"
                    ]
                },
                {
                    name: "Exercise Coach Agent",
                    role: "Therapeutic Activity Guide",
                    description: "Guides the user through therapeutic exercises in real-time as needed: for example, a breathing exercise for anxiety (counting breaths, giving feedback) or a guided visualization for stress relief.",
                    tools: [
                        "Step-by-step exercise guidance protocols",
                        "Real-time feedback mechanisms",
                        "Exercise customization tools",
                        "Effectiveness tracking for exercises"
                    ]
                },
                {
                    name: "Positive Reinforcement Agent",
                    role: "Encouragement Specialist",
                    description: "Delivers genuine praise and positive reinforcement when the user makes progress or engages in healthy behaviors, reinforcing those patterns (e.g., \"I notice you reached out to a friend when feeling down – that's a big step in using your support network!\").",
                    tools: [
                        "Progress recognition algorithms",
                        "Positive behavior identification",
                        "Reinforcement scheduling optimization",
                        "Personalized encouragement generation"
                    ]
                },
                {
                    name: "Chat Reflection Agent",
                    role: "Active Listening Specialist",
                    description: "Summarizes and reflects the user's statements to ensure they feel heard (e.g., \"It sounds like today was overwhelming and you felt underappreciated at work.\") and to clarify the user's feelings for both the user and the system.",
                    tools: [
                        "Emotional content summarization",
                        "Reflection statement generation",
                        "User validation techniques",
                        "Emotional clarification dialogue"
                    ]
                },
                {
                    name: "Boundaries Guard Agent",
                    role: "Scope Limitation Enforcer",
                    description: "Monitors that the support system stays within appropriate boundaries – for instance, it ensures the AI does not give out-of-scope advice (legal, medical beyond first aid, etc.) and encourages seeking human help when an issue is beyond its scope or when the user has exceeded healthy reliance on the system.",
                    tools: [
                        "Scope boundary detection algorithms",
                        "Appropriate referral suggestion system",
                        "Over-reliance pattern recognition",
                        "Professional boundary educational content"
                    ]
                },
                {
                    name: "Session Transcription Agent",
                    role: "Clinical Documentation Specialist",
                    description: "Keeps a confidential log of all interactions (with user permission), summarizing key points from each chat session so that human therapists can review them to stay informed of what's happening between sessions. Sensitive details are flagged for privacy, and this agent ensures logs are securely stored.",
                    tools: [
                        "Conversation summarization algorithms",
                        "Clinical highlight extraction",
                        "Privacy sensitivity detection",
                        "Secure documentation storage"
                    ]
                },
                {
                    name: "Referral Agent",
                    role: "Human Support Connector",
                    description: "If the user's needs exceed what the digital agents can provide (e.g., the user might benefit from medication or specialized therapy), this agent gently suggests a referral to a human professional and helps set that up – locating resources, providing psychoeducation about what to expect, and following up on that process.",
                    tools: [
                        "Mental health provider database",
                        "Geographic-based resource matching",
                        "Referral process guidance",
                        "Follow-up scheduling system"
                    ]
                }
            ],
            crisis: [
                {
                    name: "Crisis Manager Agent",
                    role: "Manager",
                    description: "Special oversight agent focusing on high-risk situations. It ensures any indication of a mental health crisis triggers the swarm's highest-priority protocols and coordinates with emergency responders or human therapists as needed.",
                    tools: [
                        "Cross-agent crisis alert system",
                        "Crisis protocol activation dashboard",
                        "Emergency services coordination interface",
                        "Real-time crisis response monitoring"
                    ]
                },
                {
                    name: "Suicide Watch Agent",
                    role: "Risk Detection Specialist",
                    description: "Continuously (and discreetly) analyzes user content for signs of suicidal ideation or severe self-harm risk (specific phrases, withdrawal patterns, sudden goodbyes). When triggers hit a threshold, it alerts the Crisis Manager and puts the system in emergency mode.",
                    tools: [
                        "Suicidal ideation detection algorithms",
                        "Risk pattern recognition",
                        "Linguistic analysis for emotional distress",
                        "Crisis severity scoring framework"
                    ]
                },
                {
                    name: "Emergency Response Agent",
                    role: "Crisis Intervention Coordinator",
                    description: "Upon a confirmed crisis (e.g., user expresses intent to self-harm imminently), this agent can contact emergency services with location info if available, provide them with context, and stay engaged with the user, encouraging them to hold on and that help is on the way (following established protocols like duty to warn).",
                    tools: [
                        "Emergency services contact protocols",
                        "Location information retrieval (with consent)",
                        "Crisis information summarization",
                        "Continuous engagement dialogue management"
                    ]
                },
                {
                    name: "Calm Intervention Agent",
                    role: "De-escalation Specialist",
                    description: "Uses de-escalation techniques in crisis chats: speaks in a calm, grounding manner, encourages the user to focus on breathing, employs crisis intervention best practices (like \"let's take it minute by minute\" or reminding them of reasons to hold on) while waiting for human intervention or as first-line immediate help.",
                    tools: [
                        "De-escalation dialogue frameworks",
                        "Grounding technique library",
                        "Crisis-specific coping strategies",
                        "Emotional regulation guidance protocols"
                    ]
                },
                {
                    name: "Alert Notification Agent",
                    role: "Emergency Contact Coordinator",
                    description: "Notifies pre-designated emergency contacts or on-call human counselors when a crisis is detected (if the user has set that up), sending them critical info so they can reach out.",
                    tools: [
                        "Secure contact notification system",
                        "Privacy-respecting information sharing",
                        "Situation severity communication",
                        "Contact confirmation tracking"
                    ]
                },
                {
                    name: "Resource Locator Agent",
                    role: "Crisis Support Finder",
                    description: "Finds emergency resources for the user based on location (hotlines, nearest psychiatric emergency services, mobile crisis units) and provides that information instantly during a crisis.",
                    tools: [
                        "Geolocated mental health resource database",
                        "24/7 service availability verification",
                        "Crisis service specialization matching",
                        "Direct contact facilitation"
                    ]
                },
                {
                    name: "Post-Crisis Follow-up Agent",
                    role: "Recovery Support Specialist",
                    description: "After a crisis has passed, ensures intensive follow-up: more frequent check-ins, creating a safety plan with the user, scheduling an urgent appointment with a human therapist, and monitoring closely for any recurrence.",
                    tools: [
                        "Post-crisis care protocol management",
                        "Targeted check-in scheduling",
                        "Safety plan development framework",
                        "Recurrence risk monitoring"
                    ]
                },
                {
                    name: "Anonymized Reporting Agent",
                    role: "System Improvement Analyst",
                    description: "Logs crisis incidents in an anonymized way (for system improvement purposes) to analyze how crises were handled and if any early signals were missed, without compromising user identity.",
                    tools: [
                        "Privacy-preserving data anonymization",
                        "Crisis response quality metrics",
                        "Early warning sign analysis",
                        "Intervention effectiveness evaluation"
                    ]
                },
                {
                    name: "Safety Plan Agent",
                    role: "Preventive Planning Specialist",
                    description: "Works with the user during a stable period to create a personalized safety plan (warning signs, coping strategies, people to contact, making environment safe) and stores it. In moments of crisis, this agent reminds the user of their own plan steps (\"Remember you wanted to try listening to your favorite music now\" or \"You wrote that calling your sister could help\").",
                    tools: [
                        "Collaborative safety plan builder",
                        "Personal coping strategy library",
                        "Warning sign identification framework",
                        "Crisis plan retrieval and application"
                    ]
                },
                {
                    name: "Therapist Alert Agent",
                    role: "Professional Liaison",
                    description: "If the user has a human therapist or psychiatrist, this agent compiles a concise alert about the crisis event (timeline, triggers, actions taken) and sends it to them (with user consent or as per safety agreements) so the human provider is immediately in the loop and can take over follow-up care.",
                    tools: [
                        "Clinician communication protocols",
                        "Clinical incident summarization",
                        "HIPAA-compliant information sharing",
                        "Urgent appointment request system"
                    ]
                }
            ],
            privacy: [
                {
                    name: "Privacy Guardian Agent",
                    role: "Manager",
                    description: "Ensures that all user data and interactions are handled with strict confidentiality and in line with privacy regulations and ethical norms specific to mental health services.",
                    tools: [
                        "Privacy compliance verification system",
                        "Data access control management",
                        "Privacy policy implementation framework",
                        "Confidentiality breach detection"
                    ]
                },
                {
                    name: "Consent Verification Agent",
                    role: "Permissions Manager",
                    description: "Checks that the user's consent covers any data access or action being taken by the swarm (for example, sharing a summary with a human therapist or contacting an emergency contact) and prompts for updated consent if not.",
                    tools: [
                        "Dynamic consent management system",
                        "Action-specific permission verification",
                        "Consent expiration tracking",
                        "Clear consent request generation"
                    ]
                },
                {
                    name: "Data Anonymization Agent",
                    role: "Privacy Technician",
                    description: "When data from the swarm is used for research or improvement, this agent strips personal identifiers and uses techniques to anonymize the content, protecting user identity while allowing aggregate learning.",
                    tools: [
                        "Advanced anonymization algorithms",
                        "De-identification verification checks",
                        "Reversibility prevention mechanisms",
                        "Statistical disclosure control techniques"
                    ]
                },
                {
                    name: "Bias Auditing Agent",
                    role: "Fairness Monitor",
                    description: "Monitors the swarm's suggestions and interactions for any unintended bias (cultural, gender, etc.). For instance, ensuring that advice is culturally sensitive and that the swarm doesn't pathologize behavior that is normal in the user's cultural context. Flags or adjusts responses that might carry bias.",
                    tools: [
                        "NLP bias detection algorithms",
                        "Cultural sensitivity verification",
                        "Demographic response comparison",
                        "Bias correction suggestion framework"
                    ]
                },
                {
                    name: "Regulatory Compliance Agent",
                    role: "Legal Compliance Officer",
                    description: "Ensures the service complies with laws like HIPAA and GDPR: e.g., handling data encryption, giving users access/correction rights to their data, and proper record-keeping for any mandated reporting events.",
                    tools: [
                        "Regulatory requirement database",
                        "Jurisdictional compliance verification",
                        "Data security standard enforcement",
                        "Compliance documentation management"
                    ]
                },
                {
                    name: "Therapeutic Ethics Agent",
                    role: "Ethical Guidelines Enforcer",
                    description: "Reviews the AI's behavior for alignment with therapeutic ethics (maintaining boundaries, avoiding giving advice it shouldn't, not fostering undue dependency). If the user starts asking for advice outside mental health scope (legal, medical), it steers them appropriately (perhaps to another swarm or human professional).",
                    tools: [
                        "Clinical ethics framework implementation",
                        "Boundary violation detection",
                        "Scope limitation enforcement",
                        "Appropriate referral suggestion"
                    ]
                },
                {
                    name: "Redaction Agent",
                    role: "Data Removal Specialist",
                    description: "If a user requests certain entries or data be deleted (right to be forgotten) or redacted (like a particularly sensitive journal entry they regret logging), this agent handles secure deletion and updates the system's memory accordingly.",
                    tools: [
                        "Secure data deletion protocols",
                        "Selective content redaction",
                        "Memory update propagation",
                        "Deletion verification systems"
                    ]
                },
                {
                    name: "Security Monitor Agent",
                    role: "Data Protection Officer",
                    description: "Protects against unauthorized access or data breaches within the system; monitors for unusual access patterns to user data and ensures robust authentication for anyone (including integrated human therapists) accessing the system.",
                    tools: [
                        "Access pattern anomaly detection",
                        "Authentication strength verification",
                        "Security incident response protocols",
                        "Encryption implementation monitoring"
                    ]
                },
                {
                    name: "Audit Trail Agent",
                    role: "Accountability Monitor",
                    description: "Keeps an immutable log of which agents accessed what information and when (without logging the content of private conversations), for accountability. In case of any dispute or investigation, it provides a transparent activity trail without exposing content unnecessarily.",
                    tools: [
                        "Immutable logging infrastructure",
                        "Privacy-preserving auditing",
                        "Access justification verification",
                        "Compliance reporting generation"
                    ]
                },
                {
                    name: "Compliance Training Agent",
                    role: "Privacy Education Manager",
                    description: "Continuously educates and updates the swarm (and indirectly the developers/human overseers) on changes in ethical guidelines or laws. For instance, if a new teletherapy regulation comes out, it ensures the system adapts and all agents operate under the new rules.",
                    tools: [
                        "Regulatory update monitoring",
                        "System-wide policy distribution",
                        "Compliance verification testing",
                        "Educational content generation for developers"
                    ]
                }
            ],
            progress: [
                {
                    name: "Progress Analyst Agent",
                    role: "Manager",
                    description: "Tracks each user's journey through the mental health program and overall program effectiveness, making sense of data to inform both the user and therapists about progress.",
                    tools: [
                        "Multi-dimensional progress analytics",
                        "Therapeutic outcome measurement",
                        "Interactive progress visualization",
                        "Treatment effectiveness evaluation"
                    ]
                },
                {
                    name: "Milestone Tracking Agent",
                    role: "Achievement Monitor",
                    description: "Identifies key milestones or improvements for each user (e.g., \"30 days journaling streak\", \"panic attacks reduced by half\") and notifies both user and care team when milestones are achieved or if they are overdue (motivating the user and informing therapy focus).",
                    tools: [
                        "Personalized milestone definition",
                        "Achievement recognition system",
                        "Progress notification scheduling",
                        "Milestone visualization for motivation"
                    ]
                },
                {
                    name: "Setback Analyzer Agent",
                    role: "Regression Investigator",
                    description: "Detects when a user has a setback (like increased scores on anxiety scale, or they report \"feeling worse\") and flags it so the therapy plan can be adjusted quickly. It analyzes possible causes (seasonal effect, recent life event mentioned) to help tweak the approach.",
                    tools: [
                        "Regression detection algorithms",
                        "Causal factor analysis",
                        "Contextual trigger identification",
                        "Adaptive intervention recommendation"
                    ]
                },
                {
                    name: "Patient Feedback Agent",
                    role: "User Experience Researcher",
                    description: "Solicits regular feedback from the user about what parts of the system are helpful or not (e.g., \"Did you find the relaxation exercise helpful? [Yes/No]\") and uses that to personalize future interactions. Summarizes qualitative feedback for clinicians to review as well.",
                    tools: [
                        "Targeted feedback collection",
                        "Preference learning algorithms",
                        "Qualitative response analysis",
                        "Experience improvement recommendations"
                    ]
                },
                {
                    name: "Therapist Feedback Agent",
                    role: "Clinical Improvement Specialist",
                    description: "If a human therapist is involved, collects their feedback or ratings on the AI's usefulness and accuracy after reviewing logs or reports, and integrates that into system improvements (for example, adjusting if a therapist notes \"this risk alert was a false alarm\").",
                    tools: [
                        "Clinician rating collection",
                        "Clinical validation tracking",
                        "False positive/negative analysis",
                        "Therapeutic alignment verification"
                    ]
                },
                {
                    name: "Outcome Metrics Agent",
                    role: "Results Measurement Specialist",
                    description: "Compiles quantitative outcomes for each user (assessment score changes, goal attainment, session engagement) and for the program as a whole, producing metrics like improvement rates or drop-out rates for internal evaluation.",
                    tools: [
                        "Standardized outcome measure tracking",
                        "Statistical significance calculation",
                        "Engagement-outcome correlation analysis",
                        "Comparative effectiveness reporting"
                    ]
                },
                {
                    name: "Comparative Analysis Agent",
                    role: "Benchmarking Analyst",
                    description: "Compares each user's progress against aggregate data of similar profiles (anonymously) to identify if someone is lagging behind typical improvement curves, prompting earlier intervention or a different approach for them.",
                    tools: [
                        "User cohort matching algorithms",
                        "Expected progress modeling",
                        "Comparative trajectory visualization",
                        "Early intervention threshold detection"
                    ]
                },
                {
                    name: "Satisfaction Monitor Agent",
                    role: "Engagement Analyst",
                    description: "Monitors user satisfaction indicators (like continued use, positive feedback statements, etc.) and alerts if a user seems dissatisfied or disengaging, so the system or a human can reach out to address concerns.",
                    tools: [
                        "Engagement pattern tracking",
                        "Sentiment analysis in user feedback",
                        "Disengagement early warning system",
                        "Satisfaction trend monitoring"
                    ]
                },
                {
                    name: "Adjustments Recommender Agent",
                    role: "Treatment Optimization Specialist",
                    description: "Based on progress and feedback, suggests specific adjustments to the therapy plan (e.g., \"User isn't engaging with journaling, maybe try a different technique like voice diary\" or \"Progress plateaued, consider introducing a live therapist session\").",
                    tools: [
                        "Progress plateau detection",
                        "Alternative intervention matching",
                        "Engagement optimization algorithms",
                        "Stepped care progression recommendations"
                    ]
                },
                {
                    name: "Report Generator Agent",
                    role: "Clinical Documentation Specialist",
                    description: "Generates periodic progress reports for the user and their therapist. For the user, it might highlight improvements and remaining challenges in a friendly way. For the therapist, it provides detailed analytics and observations to enrich their sessions. These reports help ensure everyone is informed and align on the treatment direction.",
                    tools: [
                        "Dual audience report templating",
                        "Clinical data visualization",
                        "Progress narrative generation",
                        "Key insight highlighting"
                    ]
                }
            ],
            learning: [
                {
                    name: "Continuous Improvement Lead",
                    role: "Manager",
                    description: "Ensures that the swarm learns from its experiences and from new knowledge to constantly refine its support quality.",
                    tools: [
                        "System-wide learning coordination",
                        "Improvement priority identification",
                        "Learning objective setting",
                        "Knowledge integration management"
                    ]
                },
                {
                    name: "Model Refinement Agent",
                    role: "AI Enhancement Engineer",
                    description: "Regularly fine-tunes the language models or other ML components of the swarm using the growing dataset of anonymized interactions and outcomes, to improve empathy, contextual understanding, and appropriateness of responses.",
                    tools: [
                        "Model fine-tuning pipelines",
                        "Training data curation",
                        "Model performance evaluation metrics",
                        "Targeted capability enhancement"
                    ]
                },
                {
                    name: "Therapy Outcome Analyzer",
                    role: "Effectiveness Researcher",
                    description: "Analyzes long-term outcomes of users (who improved, who relapsed, who dropped out) to identify which approaches correlate with success or failure, providing insight that leads to refinements in the therapy algorithms or content emphasis.",
                    tools: [
                        "Longitudinal outcome tracking",
                        "Multivariate success factor analysis",
                        "Predictive outcome modeling",
                        "Treatment component evaluation"
                    ]
                },
                {
                    name: "New Technique Scout",
                    role: "Innovation Researcher",
                    description: "Monitors external sources for new therapy techniques, self-help apps, or clinical trial results (for example, a new digital therapy approach for PTSD) that the swarm could incorporate or learn from. It pilots these new techniques with a small set of users to evaluate effectiveness.",
                    tools: [
                        "Research literature monitoring",
                        "Novel therapy evaluation framework",
                        "Controlled technique piloting",
                        "Innovation integration protocols"
                    ]
                },
                {
                    name: "A/B Testing Agent",
                    role: "Experimental Design Specialist",
                    description: "Runs controlled experiments within the system: e.g., tries two different encouragement styles or two scheduling strategies with different user groups to see which yields better engagement or outcomes, then standardizes on the better approach (with ethical oversight to ensure no harm).",
                    tools: [
                        "Experimental design frameworks",
                        "Randomized trial management",
                        "Statistical significance analysis",
                        "Ethical implementation verification"
                    ]
                },
                {
                    name: "Knowledge Base Updater",
                    role: "Information Currency Manager",
                    description: "Continuously updates the knowledge base with new psychological research and also retires any interventions found to be outdated or less effective. For example, if studies show a certain form of therapy messaging is counterproductive, it phases that out of the system's repertoire.",
                    tools: [
                        "Research integration pipeline",
                        "Obsolete content identification",
                        "Evidence quality assessment",
                        "Knowledge base version control"
                    ]
                },
                {
                    name: "Performance Dashboard Agent",
                    role: "System Analytics Manager",
                    description: "Provides the team (developers/clinicians overseeing the swarm) with a dashboard of key performance metrics and any alerts about anomalies, ensuring transparency in how the swarm is doing and where it might need human attention or retraining.",
                    tools: [
                        "Real-time performance visualization",
                        "Anomaly detection algorithms",
                        "Key performance indicator tracking",
                        "Human attention routing"
                    ]
                },
                {
                    name: "Inter-Agent Learning Agent",
                    role: "Collaborative Optimization Specialist",
                    description: "Observes how different agents interact and share information, optimizing those communication protocols for speed and clarity. For instance, ensuring the Crisis Agent instantly notifies the Progress Analyst after an event so progress evaluations account for it, thereby tightening the feedback loops.",
                    tools: [
                        "Agent-to-agent communication analysis",
                        "Information flow optimization",
                        "Communication protocol refinement",
                        "Cross-functional integration enhancement"
                    ]
                },
                {
                    name: "User Experience Agent",
                    role: "Interface Improvement Specialist",
                    description: "Evaluates the user's overall experience with the system (combining satisfaction, engagement, qualitative feedback) and suggests improvements to the interface or interaction style that could make the experience more human, comforting, or easier to use.",
                    tools: [
                        "Usability assessment frameworks",
                        "Human-centered design principles",
                        "Interface friction detection",
                        "Engagement optimization testing"
                    ]
                },
                {
                    name: "Ethical Review Agent",
                    role: "Ethical Oversight Specialist",
                    description: "Periodically performs an ethical audit of the system's operations: it reviews randomly selected anonymized interactions to ensure ethical standards are maintained, checks that emergency interventions were appropriate, and that the system remains within its intended scope. It then recommends any necessary policy changes or additional training for the AI on sensitive matters.",
                    tools: [
                        "Ethical interaction sampling",
                        "Clinical appropriateness verification",
                        "Crisis response audit protocols",
                        "Ethical boundary reinforcement"
                    ]
                }
            ]
        };