import { useState } from "react";
import { TutoringHeaderRevamped } from "../components/tutoring/tutoring-header-revamped";
import { HeroRevamped } from "../components/tutoring/hero-revamped";
import { DoctrineSectionRevamped } from "../components/tutoring/doctrine-section-revamped";
import { MechanismSection } from "../components/tutoring/mechanism-section";
import { ParentCommunication } from "../components/tutoring/parent-communication";
import { GovernanceSection } from "../components/tutoring/governance-section";
import { PricingSection } from "../components/tutoring/pricing-section";
import { OnRampSection } from "../components/tutoring/on-ramp-section";
import { SevenDaySection } from "../components/tutoring/seven-day-section";
import { ProofSection } from "../components/tutoring/proof-section";
import { WhoThisIsFor } from "../components/tutoring/who-this-is-for";
import { RefusalGates } from "../components/tutoring/refusal-gates";
import { FAQSection } from "../components/tutoring/faq-section";
import { Footer } from "../components/footer";
import { FitCheck } from "../components/fit-check";
import {
  Calendar,
  MessageCircle,
  Shield,
  Clock,
  Target,
  Sparkles,
  Brain,
  Home,
  Users,
  Palette,
  Compass,
  BookOpenCheck,
  Search,
  BarChart3,
  Globe,
} from "lucide-react";

type HeroContent = NonNullable<Parameters<typeof HeroRevamped>[0]["content"]>;
type DoctrineContent = NonNullable<Parameters<typeof DoctrineSectionRevamped>[0]["content"]>;
type MechanismContent = Parameters<typeof MechanismSection>[0] extends { content?: infer C }
  ? NonNullable<C>
  : never;
type ParentCommunicationContent = Parameters<typeof ParentCommunication>[0] extends { content?: infer C }
  ? NonNullable<C>
  : never;
type WhoContent = Parameters<typeof WhoThisIsFor>[0] extends { content?: infer C }
  ? NonNullable<C>
  : never;
type FAQContent = Parameters<typeof FAQSection>[0] extends { content?: infer C }
  ? NonNullable<C>
  : never;
type SevenDayContent = Parameters<typeof SevenDaySection>[0] extends { content?: infer C }
  ? NonNullable<C>
  : never;

export type PersonaKey = "athlete" | "adhd" | "immigrant" | "artist";

interface PersonaConfig {
  label: string;
  hero: HeroContent;
  doctrine: DoctrineContent;
  mechanism?: MechanismContent;
  parentCommunication?: ParentCommunicationContent;
  who?: WhoContent;
  faq?: FAQContent;
  sevenDay?: SevenDayContent;
}

const PERSONA_CONFIGS: Record<PersonaKey, PersonaConfig> = {
  athlete: {
    label: "Boarding-school athlete",
    hero: {
      badge: "Boarding-school athlete track",
      headline: {
        pre: "Tournament weeks won't derail ",
        highlight: "your athlete's SAT gains",
        post: "",
      },
      subheadline:
        "We translate travel and late practices into a data-driven plan that packs high-yield prep into recoverable 45-minute slots.",
      stats: [
        { value: "45m × 2", label: "Away-week coaching bursts" },
        { value: "92%", label: "Assignments finished on travel weeks" },
      ],
      ctaLabel: "Share travel schedule for a custom plan",
      ctaHelper: "3-minute Fit Check • Share coach schedule",
      progressTitle: "Travel Week Monitoring",
      progressBadge: "Schedule Proof",
      floatingLabel: "Coach + Manager pod on call",
    },
    doctrine: {
      badge: "Athlete Scheduling Doctrine",
      headline: {
        pre: "We engineer scores around ",
        highlight: "travel-heavy seasons",
        post: "",
      },
      description:
        "Your student can't drop the season for the SAT. We build the SAT around the season—with governance, not guilt.",
      beliefs: [
        {
          title: "Our approach",
          belief:
            "Recovery windows are sacred. We slot high-leverage drills when your athlete is neurologically fresh.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief:
            '"Catch up after lights-out" packets that ignore fatigue and lead to missed reps the next day.',
          color: "critical",
        },
        {
          title: "What we build",
          belief:
            "Micro scripts, async reviews, and contingency plans for every rain delay, overtime, or travel snag.",
          color: "success",
        },
      ],
      principlesTitle: {
        pre: "Two promises to protect the ",
        highlight: "jersey and the score",
        post: "",
      },
      principlesDescription:
        "Every protocol honors the athletic calendar first, then amplifies academic output inside it.",
      principles: [
        {
          number: "01",
          title: "Respect the athletic calendar",
          description:
            "We collect practice, travel, and sleep data every Sunday before designing the academic sprint.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Redundancy beats perfection",
          description:
            "Every deliverable has a mobile fallback and accountability summary so momentum survives missed sessions.",
          accent: "accent-violet",
        },
      ],
    },
    mechanism: {
      sectionTitle: "How we operationalize an athlete's week",
      sectionSubtitle: "Strategic micro-bursts replace exhausted cram blocks.",
      steps: [
        {
          id: 1,
          icon: <Target className="w-6 h-6" />,
          title: "Performance mapping",
          description: "We map academic baselines against practice and travel rhythms.",
          details: [
            "Audit school workload, lifts, sleep, and travel windows",
            "Tag decision-making errors from two diagnostic rounds",
            "Identify prime 45-minute and 15-minute study pockets",
          ],
        },
        {
          id: 2,
          icon: <Calendar className="w-6 h-6" />,
          title: "Travel-week scripts",
          description: "We build mobile-ready assignments that flex around buses and hotel wifi.",
          details: [
            "Sunday logistics sync locks firm + backup slots",
            "Async video briefs replace live sessions on game days",
            "Manager monitors completion via travel-safe check-ins",
          ],
        },
        {
          id: 3,
          icon: <Sparkles className="w-6 h-6" />,
          title: "On-the-bus decision reps",
          description: "Athletes rehearse SAT choices the same way they visualize plays.",
          details: [
            "Scenario drills tied to the week's biggest scoring opportunities",
            "Confidence calibration anchored to familiar pre-game routines",
            "Gamified streaks rewarding execution despite fatigue",
          ],
        },
        {
          id: 4,
          icon: <Shield className="w-6 h-6" />,
          title: "Manager coverage",
          description: "Our manager liaises with parents, dorm staff, and coaches to keep the plan intact.",
          details: [
            "30-minute response window for schedule disruptions",
            "Health & fatigue checkpoints before each session",
            "Escalation protocol when progress dips two data points",
          ],
        },
        {
          id: 5,
          icon: <Clock className="w-6 h-6" />,
          title: "Post-competition review",
          description: "We debrief, reset, and pre-load the next week's tasks within 24 hours.",
          details: [
            "Scorecard review with the student and family",
            "Highlight reels of decisions that held under pressure",
            "Fresh assignments queued before travel resumes",
          ],
        },
      ],
      closingTitle: "No more choosing between the roster and the score",
      closingDescription:
        "We flex every schedule change within hours and keep coaches in the loop so the athlete protects scholarships and standards simultaneously.",
    },
    parentCommunication: {
      badge: "For Parents & Coaches",
      title: "Stay in lockstep with the season",
      description:
        "We keep parents, coaches, and students aligned with a simple weekly rhythm.",
      features: [
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Sunday logistics sync",
          description: "15-minute video to confirm travel, fatigue risks, and study slots.",
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Coach-friendly snapshot",
          description:
            "Forwardable summary so coaches and dorm staff see the same plan.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Travel alert system",
          description: "If games run long or flights delay, we rebalance tasks within 30 minutes.",
        },
      ],
      timeItems: [
        {
          phase: "Sunday plan call",
          time: "15 min",
          description: "Roster update + routes + study slots confirmed",
        },
        {
          phase: "Live check-ins",
          time: "2×5 min",
          description: "Voice notes after practice to check energy",
        },
        {
          phase: "Guided practice",
          time: "30-35 min",
          description: "Mobile-friendly assignments matched to fatigue",
        },
        {
          phase: "Parent digest",
          time: "10 min",
          description: "Weekly video summary + risk signals",
        },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "A routine that protects the athlete’s energy curve",
      totalCommitmentTitle: "Total weekly load: ~1 hour for you, two micro sessions",
      totalCommitmentSubtitle: "Covers tournaments, doubleheaders, and dorm curfews.",
    },
    who: {
      sectionTitle: "Who this is for",
      sectionDescription: "A track for families, coaches, and students who want performance and scores at the same time.",
      identities: [
        {
          id: "athlete",
          icon: <Target className="w-5 h-5" />,
          title: "Boarding-school athlete",
          statement: '"I need a coach who respects my season and my sleep."',
          details:
            "We analyze practice, travel, and recovery first and embed jump-in study scripts inside it.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent-coach ally",
          statement: '"I want visibility without nagging from 3,000 miles away."',
          details:
            "Forwardable summaries and alerts keep coaches, parents, and dorm staff aligned.",
        },
        {
          id: "dorm",
          icon: <Home className="w-5 h-5" />,
          title: "Dorm support system",
          statement: '"Give me clear instructions so I can protect study hall."',
          details: "Clear checklists and schedules dorm staff can act on.",
        },
        {
          id: "scholarship",
          icon: <Sparkles className="w-5 h-5" />,
          title: "Scholarship seeker",
          statement: '"I refuse to sacrifice offers because of logistics."',
          details: "We monitor GPA and SAT thresholds tied to scholarships.",
        },
      ],
      calloutTitle: "Why parents choose this lane",
      calloutBody:
        "A dedicated manager team keeps momentum during travel weeks so progress doesn’t dip.",
    },
    faq: {
      sectionTitle: "Athlete family questions",
      description: "Designed around scheduling and NCAA considerations.",
      items: [
        {
          question: "Can you manage frequent flights and jet lag?",
          answer:
            "We collect the season schedule in Fit Check and design weekly/daily blocks. If time zones change, the manager proposes new tasks and async/live options within 30 minutes.",
        },
        {
          question: "What if evening practices leave us exhausted?",
          answer:
            "On high‑intensity days we assign 15‑minute blended tasks and shift longer sessions to recovery days, adjusting intensity based on sleep and HRV when available.",
        },
        {
          question: "How do you coordinate with school tutors or coaches?",
          answer:
            "With permission, we share concise summaries to coaches and dorm staff to avoid duplication.",
        },
        {
          question: "Any conflict with NCAA amateurism rules?",
          answer:
            "We operate as an educational service and comply with NCAA rules; we’ll coordinate with compliance officers when needed.",
        },
        {
          question: "Can we work from buses and hotels?",
          answer:
            "We provide downloadable materials and audio guides for low‑connectivity situations.",
        },
      ],
      footerText: "Share your next travel date and we’ll pre‑build that week’s plan.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: travel-proof launch",
      sectionSubtitle: "By Day 7, a routine that works between travel and practice is in place.",
      focusHeading: "What we align",
      focusGroups: [
        {
          heading: "High-leverage windows",
          items: [
            "• Recovery morning slots",
            "• Bus/flight micro-study time",
            "• Dorm check-in routines",
          ],
        },
        {
          heading: "Systems installed",
          items: [
            "• Travel-safe assignment library",
            "• Manager escalation tree",
            "• Parent + coach summary loop",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "SAT tasks naturally embedded in the practice planner",
        "Travel weeks finish on time without backlog",
        "Coaches, parents, and students view the same data",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        {
          day: "Day 1",
          activity: "Season intake",
          description: "Fit Check + collect travel/practice schedule",
        },
        {
          day: "Day 2",
          activity: "Diagnostics",
          description: "SAT baseline + decision pattern analysis",
        },
        {
          day: "Day 3-4",
          activity: "Micro script build",
          description: "Build 45/15‑minute tasks + fallbacks",
        },
        {
          day: "Day 5",
          activity: "Travel rehearsal",
          description: "On‑bus/hotel decision drills",
        },
        {
          day: "Day 6-7",
          activity: "Manager sync",
          description: "Finalize parent/coach summary + first report",
        },
      ],
      timelineOutcome: "Outcome: 100% of planned reps delivered despite the sports schedule",
    },
  },
  adhd: {
    label: "ADHD-focused learner",
    hero: {
      badge: "ADHD-tailored SAT system",
      headline: {
        pre: "Structure the score your ",
        highlight: "neurodivergent learner",
        post: " can own",
      },
      subheadline:
        "Short sprints, visual feedback, and accountable coaching that respect attention span.",
      stats: [
        { value: "32m", label: "Live body-doubling sessions" },
        { value: "3x/week", label: "Momentum nudges & wins" },
      ],
      ctaLabel: "Start the ADHD Fit Check",
      ctaHelper: "3 minutes • Bring meds/schedule notes",
      progressTitle: "Focus & Regulation Dashboard",
      progressBadge: "Momentum Data",
      floatingLabel: "Coach + Manager watching signal loss",
    },
    doctrine: {
      badge: "Neurodiversity doctrine",
      headline: {
        pre: "We design for ",
        highlight: "brains that sprint",
        post: "",
      },
      description:
        "Structure, not willpower, drives results. We build a visible win loop.",
      beliefs: [
        {
          title: "Our approach",
          belief:
            "Motivation follows measurable wins. We engineer a success experience in the first 48 hours.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief: '"Sit still and try harder" packets or guilt-driven assignments are excluded.',
          color: "critical",
        },
        {
          title: "What we build",
          belief:
            "Timeboxed sprints, gamified dashboards, and managers who adjust when meds, sleep, or mood shift.",
          color: "success",
        },
      ],
      principlesTitle: {
        pre: "Two principles of ",
        highlight: "sustainable momentum",
        post: "",
      },
      principlesDescription:
        "Success comes from recoverable structure and immediate feedback, not raw focus.",
      principles: [
        {
          number: "01",
          title: "Momentum over willpower",
          description:
            "We design every task as a 25–35 minute sprint and deliver immediate reward feedback when finished.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Regulate before rigor",
          description:
            "We check meds, sleep, and mood first and adjust difficulty accordingly.",
          accent: "accent-violet",
        },
      ],
    },
    mechanism: {
      sectionTitle: "How we coach ADHD brains",
      sectionSubtitle: "Short, engineered wins replace open-ended grind.",
      steps: [
        {
          id: 1,
          icon: <Brain className="w-6 h-6" />,
          title: "Focus diagnostics",
          description: "We identify triggers, supports, and regulation curves.",
          details: [
            "Interview on meds, sleep, and school routines",
            "Dual diagnostic to capture decision errors + attention drift",
            "Baseline dopamine triggers that we can replicate",
          ],
        },
        {
          id: 2,
          icon: <Clock className="w-6 h-6" />,
          title: "Sprint scheduling",
          description: "We stack 25-35 minute gamified blocks with built-in breaks.",
          details: [
            "Visual timers + checklists for each sprint",
            "Clear start-finish cues and reward scripts",
            "Parent notified only if a sprint stalls twice",
          ],
        },
        {
          id: 3,
          icon: <MessageCircle className="w-6 h-6" />,
          title: "Body-doubling coaching",
          description: "Live co-working + micro-feedback keeps the brain anchored.",
          details: [
            "Coach keeps cadence, student verbalizes decisions",
            "Immediate reframes when attention slips",
            "Shared scoreboard with color-coded wins",
          ],
        },
        {
          id: 4,
          icon: <Shield className="w-6 h-6" />,
          title: "Executive guardrails",
          description: "Manager tracks friction logs and adjusts playbooks weekly.",
          details: [
            "If two tasks stall, manager deploys alternative modality",
            "Weekly reset call to tune environment + tech",
            "Escalation to mental health pros if red flags persist",
          ],
        },
        {
          id: 5,
          icon: <Sparkles className="w-6 h-6" />,
          title: "Celebrate & reset",
          description: "Wins are documented, setbacks are neutralized and reframed.",
          details: [
            "Friday momentum recap video",
            "Progress badges tied to scholarship goals",
            "Next-week preview with student-chosen incentives",
          ],
        },
      ],
      closingTitle: "We protect attention so effort actually counts",
      closingDescription:
        "Parents receive calm, data-backed updates. Students get dopamine-leveling scoreboards instead of nagging.",
    },
    parentCommunication: {
      badge: "For parents managing ADHD",
      title: "Concise information, immediate support",
      description:
        "We manage executive function and deliver only the essentials to parents.",
      features: [
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Daily momentum texts",
          description: "Two-line summary and next win point so you can cheer without nagging.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Executive function dashboard",
          description:
            "Transparent board with color‑coded incompletes, focus logs, and mood.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Focus rescue plan",
          description: "Alternative plan ready when meds, sleep, or environment change.",
        },
      ],
      timeItems: [
        {
          phase: "Kickoff intake",
          time: "35 min",
          description: "Student + parent interview; collect focus triggers",
        },
        {
          phase: "Live coaching",
          time: "2×32 min",
          description: "Body-doubling sessions for core strategies",
        },
        {
          phase: "Guided solo sprint",
          time: "20 min",
          description: "Gamified homework with instant feedback",
        },
        {
          phase: "Parent loop",
          time: "8 min",
          description: "Video recap and next-week signals",
        },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "About 2.5 hours invested in protecting focus",
      totalCommitmentTitle: "Total weekly load: ~2.5 hours of focused work",
      totalCommitmentSubtitle: "We prioritize energy and medication cycles.",
    },
    who: {
      sectionTitle: "Who is this for?",
      sectionDescription: "Families who want to turn ADHD into a strategy, not a liability",
      identities: [
        {
          id: "student",
          icon: <Brain className="w-5 h-5" />,
          title: "ADHD-honest student",
          statement: '"I need a coach who gets my brain and won\'t shame me."',
          details: "We build structure and language that helps the moment focus slips.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent seeking proof",
          statement: '"I want evidence of progress without becoming the enforcer."',
          details: "Data‑driven reports reduce the monitoring burden.",
        },
        {
          id: "family",
          icon: <Home className="w-5 h-5" />,
          title: "Family system",
          statement: '"We want evenings back, not another fight."',
          details: "Closed‑loop routines and rewards prevent homework battles.",
        },
        {
          id: "creative",
          icon: <Sparkles className="w-5 h-5" />,
          title: "High-potential creative",
          statement: '"Give me structure and I\'ll bring the spark."',
          details: "Structure that preserves creativity while producing dependable output.",
        },
      ],
      calloutTitle: "We coach the nervous system first",
      calloutBody:
        "Because we stabilize the nervous system and create early wins, students regain internal motivation.",
    },
    faq: {
      sectionTitle: "ADHD family FAQ",
      items: [
        {
          question: "What if medication times change frequently?",
          answer:
            "We capture changes in weekly check‑ins and adjust session timing and difficulty immediately.",
        },
        {
          question: "What if we keep forgetting sessions?",
          answer:
            "We send SMS/app reminders an hour before plus a coach nudge; if two misses in a row we rebuild the plan.",
        },
        {
          question: "Do you offer body‑doubling/co‑working?",
          answer:
            "Yes—camera‑on co‑working with immediate feedback is available.",
        },
        {
          question: "Do you collaborate with IEPs or therapists?",
          answer:
            "With consent we align to IEP goals and therapy plans and use a shared language.",
        },
        {
          question: "What should parents do when focus collapses?",
          answer:
            "Follow our 3‑step recovery guide. Parents focus on encouragement and environment, not enforcement.",
        },
      ],
      footerText: "Share your current routine in the Fit Check and we\'ll design a focus strategy.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: momentum installation",
      sectionSubtitle: "We design three success experiences in the first week.",
      focusHeading: "What we wire in",
      focusGroups: [
        {
          heading: "Baseline signals",
          items: [
            "• Meds/sleep/mood log",
            "• Focus on/off triggers",
            "• Environment adjustment checklist",
          ],
        },
        {
          heading: "Systems installed",
          items: [
            "• 32-minute sprint timer",
            "• Focus rescue protocol",
            "• Dopamine rewards board",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "Student initiates sessions",
        "Completed work is visualized instantly",
        "Evening conflicts drop noticeably",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "Intake", description: "Focus triggers + diagnostics" },
        { day: "Day 2", activity: "First sprint", description: "First 32-minute sprint win" },
        { day: "Day 3-4", activity: "Gamified homework", description: "Short assignments to reinforce reward loop" },
        { day: "Day 5", activity: "Body-doubling lab", description: "Coached co‑working on hard items" },
        { day: "Day 6-7", activity: "Momentum recap", description: "Weekly report + next‑week plan" },
      ],
      timelineOutcome: "Outcome: 3 consecutive completions + first focus log",
    },
  },
  immigrant: {
    label: "Bilingual/immigrant family",
    hero: {
      badge: "Immigrant families • Bilingual SAT strategy",
      headline: {
        pre: "Bridge the SAT gap for ",
        highlight: "bilingual thinkers",
        post: "",
      },
      subheadline:
        "We capture meaning first in both languages, then build background knowledge to remove reading barriers.",
      stats: [
        { value: "2×", label: "Faster passage breakdown with dual notes" },
        { value: "120+", label: "Background context capsules" },
      ],
      ctaLabel: "Start the bilingual Fit Check",
      ctaHelper: "3 minutes • Share the passages that feel hardest",
      progressTitle: "Reading Confidence Tracker",
      progressBadge: "Meaning First",
      floatingLabel: "Bilingual coach + cultural analyst",
    },
    doctrine: {
      badge: "Language-switching doctrine",
      headline: {
        pre: "We convert language gaps into ",
        highlight: "strategic clarity",
        post: "",
      },
      description:
        "Language barriers are translation lag, not lack of ability. When meaning comes first, scores follow.",
      beliefs: [
        {
          title: "Our approach",
          belief: "We explain key sentences in plain language in both directions and give the brain time to lock meaning.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief: '"Just read more" without context is empty advice.',
          color: "critical",
        },
        {
          title: "What we build",
          belief:
            "Layered vocabulary loops, cultural context modules, and note systems that make US-centric passages feel familiar.",
          color: "success",
        },
      ],
      principlesTitle: {
        pre: "Two rules for ",
        highlight: "bilingual mastery",
        post: "",
      },
      principlesDescription:
        "Grab meaning first, then layer cultural context and vocabulary on top.",
      principles: [
        {
          number: "01",
          title: "Meaning before mechanics",
          description: "Translate author intent and structure before grammar or vocabulary.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Context creates confidence",
          description: "Short U.S. history/science capsules make unfamiliar passages feel familiar.",
          accent: "accent-violet",
        },
      ],
    },
    mechanism: {
      sectionTitle: "How we grow bilingual readers",
      sectionSubtitle: "Meaning-led instruction replaces word-by-word guessing.",
      steps: [
        {
          id: 1,
          icon: <Search className="w-6 h-6" />,
          title: "Comprehension mapping",
          description: "We diagnose where meaning breaks in both languages.",
          details: [
            "Passage think-aloud in Korean/English",
            "Identify inference vs vocabulary vs context gaps",
            "Score emotional confidence alongside accuracy",
          ],
        },
        {
          id: 2,
          icon: <BookOpenCheck className="w-6 h-6" />,
          title: "Dual-language scaffolds",
          description: "We co-create notes that translate structure, not just words.",
          details: [
            "Sentence frames and transition cues in both languages",
            "Question stem decoding with bilingual glossaries",
            "Annotation templates for meaning + evidence",
          ],
        },
        {
          id: 3,
          icon: <Globe className="w-6 h-6" />,
          title: "Context capsules",
          description: "We fill background knowledge with short cultural explainers.",
          details: [
            "US civics, literature, science capsule videos",
            "Cross‑cultural prompts to expand understanding",
            "Confidence prompts to apply context on new passages",
          ],
        },
        {
          id: 4,
          icon: <Shield className="w-6 h-6" />,
          title: "Manager oversight",
          description: "Parents receive Korean/English recaps; students get gentle accountability.",
          details: [
            "Weekly bilingual summary",
            "Vocabulary mastery checkpoints",
            "Escalation plan if comprehension slips",
          ],
        },
        {
          id: 5,
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Full-length rehearsal",
          description: "Strategic practice builds stamina once meaning sticks.",
          details: [
            "Passage sets with mixed difficulty",
            "Review sessions focusing on nuance + tone",
            "Confidence scoring to reduce anxiety",
          ],
        },
      ],
      closingTitle: "We prove that language is not the ceiling",
      closingDescription:
        "We provide family‑readable reports and progress data so students regain confidence.",
    },
    parentCommunication: {
      badge: "For Parents",
      title: "We cross the language barrier together",
      description:
        "All reports and feedback are available in both languages so parents can follow every step.",
      features: [
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Bilingual weekly digest",
          description: "We summarize key wins and next‑week goals in both languages.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Context homework plan",
          description: "Short background videos and discussion prompts for at‑home learning.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Vocabulary audio packs",
          description: "MP3s and scripts that pair pronunciation with meaning.",
        },
      ],
      timeItems: [
        { phase: "Kickoff interview", time: "30 min", description: "Bilingual consultation with student and parent" },
        { phase: "Live reading lab", time: "2×45 min", description: "Meaning‑first reading practice" },
        { phase: "Context capsules", time: "20 min", description: "Watch short background videos and summarize" },
        { phase: "Parent recap", time: "10 min", description: "Weekly report + at‑home activities" },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "Focused time that closes the language gap",
      totalCommitmentTitle: "Total weekly load: about 2h 30m",
      totalCommitmentSubtitle: "Support available in both languages.",
    },
    who: {
      sectionTitle: "Who this is for",
      sectionDescription: "Families who want to cross the language gap with a meaning‑first strategy",
      identities: [
        {
          id: "student",
          icon: <Target className="w-5 h-5" />,
          title: "Bilingual student",
          statement: '"English passages make my mind go blank."',
          details: "We translate key sentences into plain language first, then restate in English to build confidence.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent",
          statement: '"I want to see my child\'s real ability."',
          details: "Bilingual reports and video recaps make progress clear.",
        },
        {
          id: "family",
          icon: <Home className="w-5 h-5" />,
          title: "Immigrant family",
          statement: '"Can we keep up without a lot of U.S. background knowledge?"',
          details: "Context explainers and culture comparisons make passages feel familiar.",
        },
        {
          id: "mentor",
          icon: <Compass className="w-5 h-5" />,
          title: "Guidance counselor ally",
          statement: '"I need transparent data I can trust."',
          details: "With permission we share progress data with school counselors.",
        },
      ],
      calloutTitle: "Language is not a barrier—it's an asset",
      calloutBody:
        "When we lock meaning using both languages, timing control and scores rise together.",
    },
    faq: {
      sectionTitle: "Bilingual family FAQ",
      items: [
        {
          question: "Are sessions only in English?",
          answer:
            "Core explanations use both languages; final practice is in English.",
        },
        {
          question: "We lack background knowledge. Can we still improve?",
          answer:
            "We pre‑teach topic context with short capsules before tackling passages.",
        },
        {
          question: "We want parents to understand the process.",
          answer:
            "We provide bilingual reports and video summaries; interpretation is available.",
        },
        {
          question: "Do you cover grammar and vocabulary?",
          answer:
            "Yes—after meaning is secure, we connect grammar and vocabulary naturally.",
        },
        {
          question: "Do you help with American‑style essays?",
          answer:
            "Yes, we can add essay structure and expression coaching.",
        },
      ],
      footerText: "Share language concerns in the Fit Check and we\'ll design a response strategy.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: bilingual launch",
      sectionSubtitle: "We launch meaning and vocabulary routines at the same time.",
      focusHeading: "What we build",
      focusGroups: [
        {
          heading: "Meaning anchors",
          items: [
            "• Key sentence translation notes",
            "• Passage structure template",
            "• Keywords by question type",
          ],
        },
        {
          heading: "Context boosters",
          items: [
            "• Background knowledge capsules",
            "• Cross‑culture comparison prompts",
            "• Vocabulary repetition loops",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "Can explain a passage in both languages",
        "See full‑sentence meaning, not just isolated words",
        "Comprehension rises before speed",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "Language diagnostics", description: "Bilingual think‑aloud" },
        { day: "Day 2", activity: "Scaffold build", description: "Sentence/structure note templates" },
        { day: "Day 3-4", activity: "Context capsule", description: "Fill background knowledge" },
        { day: "Day 5", activity: "Dual passage lab", description: "Summarize in both languages" },
        { day: "Day 6-7", activity: "Confidence check", description: "Apply to fresh passages + feedback" },
      ],
      timelineOutcome: "Outcome: Can explain new passages in both languages",
    },
  },
  artist: {
    label: "Creative/art-focused student",
    hero: {
      badge: "For art‑school applicants",
      headline: {
        pre: "Channel your creative discipline into ",
        highlight: "SAT certainty",
        post: "",
      },
      subheadline:
        "We translate studio workflows into exam strategy so portfolio and score rise together.",
      stats: [
        { value: "3 labs", label: "Visual strategy remixes per week" },
        { value: "180+ pt", label: "Creative-track average lift" },
      ],
      ctaLabel: "See how to secure both portfolio and SAT",
      ctaHelper: "3-minute Fit Check • Share your studio schedule",
      progressTitle: "Creative Strategy Dashboard",
      progressBadge: "Design Meets Data",
      floatingLabel: "Artist-first coaching pod",
    },
    doctrine: {
      badge: "Creative discipline doctrine",
      headline: {
        pre: "We convert ",
        highlight: "studio skills",
        post: " into test skills",
      },
      description:
        "Instead of rote drills that kill creativity, we move your design process into test strategy.",
      beliefs: [
        {
          title: "Our approach",
          belief: "Pattern recognition, critique loops, and revisions already live in your studio—we mirror them for SAT.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief:
            'Mindless drills that ignore creativity and leave students exhausted before studio time.',
          color: "critical",
        },
        {
          title: "What we build",
          belief: "Visual organizers, narrative framing, and timed rehearsals that feel like design critiques, not worksheets.",
          color: "success",
        },
      ],
      principlesTitle: {
        pre: "Two rules to protect ",
        highlight: "artistic identity",
        post: "",
      },
      principlesDescription:
        "We don’t suppress creativity; we channel it into score gains.",
      principles: [
        {
          number: "01",
          title: "Design thinking for data",
          description: "Analytical reasoning becomes a storyboard: observe, hypothesize, iterate.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Protect studio flow",
          description: "SAT work folds into existing creative blocks so you never sacrifice portfolio time.",
          accent: "accent-violet",
        },
      ],
    },
    mechanism: {
      sectionTitle: "How we coach creative performers",
      sectionSubtitle: "We translate studio rituals into exam rituals.",
      steps: [
        {
          id: 1,
          icon: <Palette className="w-6 h-6" />,
          title: "Portfolio audit",
          description: "We learn how you create so we can mirror that structure in prep.",
          details: [
            "Studio schedule + energy map",
            "Creative strengths & friction points",
            "SAT baseline tied to design habits",
          ],
        },
        {
          id: 2,
          icon: <Sparkles className="w-6 h-6" />,
          title: "Visual frameworks",
          description: "We build sketchbook-style organizers for reading, writing, and math.",
          details: [
            "Color-coded passage storyboards",
            "Design critique rubric for writing",
            "Math as composition: shapes, rhythm, balance",
          ],
        },
        {
          id: 3,
          icon: <Clock className="w-6 h-6" />,
          title: "Timed studio sprints",
          description: "We convert Pomodoro art sessions into test pacing rehearsals.",
          details: [
            "30-40 min design-to-data labs",
            "Reflection notes mirrored after critiques",
            "Timing tools that feel like metronomes, not stopwatches",
          ],
        },
        {
          id: 4,
          icon: <Shield className="w-6 h-6" />,
          title: "Manager calibration",
          description: "Weekly check-ins ensure studio deadlines and test prep stay balanced.",
          details: [
            "If portfolio crunch hits, we adjust workload",
            "Communication loop with art mentors (with permission)",
            "Scholarship + audition requirements tracked",
          ],
        },
        {
          id: 5,
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Showcase & scholarship prep",
          description: "We connect SAT gains with merit aid and program expectations.",
          details: [
            "Data storytelling for applications",
            "Score trajectories matched to target schools",
            "Confidence rehearsals before test day",
          ],
        },
      ],
      closingTitle: "Art and score rise together",
      closingDescription:
        "Achieve SAT goals without harming the portfolio, maximizing art‑school scholarships and admissions odds.",
    },
    parentCommunication: {
      badge: "For creative families",
      title: "Manage the studio and the SAT together",
      description:
        "We provide concise reports that show portfolio deadlines and SAT progress at a glance.",
      features: [
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Studio-synced calendar",
          description: "Combine portfolio deadlines, rehearsals, and exam dates into one routine.",
        },
        {
          icon: <Sparkles className="w-6 h-6 text-accent" />,
          title: "Creative progress reels",
          description: "Share strategy sketches and outcomes via short videos or images.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Scholarship tracker",
          description: "Manager tracks target schools and scholarship requirements.",
        },
      ],
      timeItems: [
        { phase: "Studio briefing", time: "30 min", description: "Map portfolio/audition timeline" },
        { phase: "Design labs", time: "3×30 min", description: "Visual strategy + problem solving" },
        { phase: "Solo rehearsal", time: "40 min", description: "Test‑prep sprints" },
        { phase: "Parent showcase", time: "10 min", description: "Weekly video recap + next goal" },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "An SAT routine that protects creative energy",
      totalCommitmentTitle: "Total weekly load: 3h studio + 2h SAT",
      totalCommitmentSubtitle: "Adjusted flexibly to studio deadlines.",
    },
    who: {
      sectionTitle: "Who this lane serves",
      sectionDescription: "Creatives who refuse to choose between art and scores",
      identities: [
        {
          id: "artist",
          icon: <Palette className="w-5 h-5" />,
          title: "Portfolio-ready artist",
          statement: '"I think in images. Help me see the test."',
          details:
            "We use visual frameworks to make reading and math problems intuitive.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent investor",
          statement: '"I need proof this will protect auditions."',
          details: "We protect portfolio time while showing data‑backed score gains.",
        },
        {
          id: "mentor",
          icon: <Compass className="w-5 h-5" />,
          title: "Art mentor",
          statement: '"Keep them in flow but ready for the SAT."',
          details: "With permission we coordinate directly with mentors to align schedules.",
        },
        {
          id: "scholar",
          icon: <Sparkles className="w-5 h-5" />,
          title: "Scholarship hunter",
          statement: '"I want the score that unlocks funding."',
          details: "We align strategy and data storytelling to scholarship targets.",
        },
      ],
      calloutTitle: "Creativity is your advantage",
      calloutBody:
        "We connect creative process to exam strategy so students score high in their own way.",
    },
    faq: {
      sectionTitle: "Creative family FAQ",
      items: [
        {
          question: "Will SAT prep eat portfolio time?",
          answer:
            "We design 30–40 minute sprints aligned to studio blocks so art time stays protected.",
        },
        {
          question: "How do you connect creative strengths to test strategy?",
          answer:
            "We use visual storyboards, pattern recognition exercises, and metaphors to aid understanding and memory.",
        },
        {
          question: "Do you track target schools and scholarships?",
          answer:
            "Yes—we manage score and portfolio checklists against your target list.",
        },
        {
          question: "What about performance season?",
          answer:
            "We switch to async tasks and short recaps during shows or exhibits.",
        },
        {
          question: "Do you cover math/science weaknesses?",
          answer:
            "We leverage visualization and pattern analysis to make quantitative items approachable.",
        },
      ],
      footerText: "Share your studio deadlines and target schools in the Fit Check.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: creative alignment",
      sectionSubtitle: "We embed an SAT routine inside the studio routine.",
      focusHeading: "What we create",
      focusGroups: [
        {
          heading: "Design-driven tools",
          items: [
            "• Visual passage boards",
            "• Sketchbook problem notes",
            "• Timer rhythm guide",
          ],
        },
        {
          heading: "Confidence loops",
          items: [
            "• Critique‑style feedback",
            "• Small‑wins gallery",
            "• KPIs tied to scholarship goals",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "Student shows off strategy sketches",
        "Portfolio and SAT live in the same notebook",
        "Anxiety down, execution up",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "Studio intake", description: "Studio routine + test goals" },
        { day: "Day 2", activity: "Visual toolkit", description: "Build strategy boards" },
        { day: "Day 3-4", activity: "Design labs", description: "Apply visual strategies" },
        { day: "Day 5", activity: "Timed rehearsal", description: "Sprint + feedback" },
        { day: "Day 6-7", activity: "Showcase recap", description: "Connect data to portfolio" },
      ],
      timelineOutcome: "Outcome: SAT routine anchored to the studio schedule",
    },
  },
};

interface TutoringPersonaPageProps {
  persona: PersonaKey;
  onReturn: () => void;
  onGoToFitCheck?: () => void;
}

export function TutoringPersonaPage({ persona, onReturn, onGoToFitCheck }: TutoringPersonaPageProps) {
  const [showFitCheck, setShowFitCheck] = useState(false);
  const config = PERSONA_CONFIGS[persona];

  const goToFitCheck = () => {
    if (onGoToFitCheck) {
      onGoToFitCheck();
    } else {
      setShowFitCheck(true);
    }
  };
  const returnFromFitCheck = () => setShowFitCheck(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showFitCheck) {
    return <FitCheck onReturn={returnFromFitCheck} source="tutoring" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <TutoringHeaderRevamped
        onReturn={onReturn}
        onStartFitCheck={goToFitCheck}
        onScrollToSection={scrollToSection}
      />

      <main>
        <HeroRevamped onStartFitCheck={goToFitCheck} content={config.hero} />

        <section id="doctrine" className="relative">
          <DoctrineSectionRevamped content={config.doctrine} />
        </section>

        <section id="mechanism" className="relative bg-gradient-to-b from-accent-teal/20 to-white">
          <MechanismSection content={config.mechanism} />
        </section>

        <ParentCommunication content={config.parentCommunication} />

        <section id="governance" className="relative bg-gradient-to-b from-accent-teal/15 to-white">
          <GovernanceSection />
        </section>

        <section id="pricing" className="relative bg-gradient-to-b from-accent-teal/15 via-accent/20 to-white">
          <PricingSection onStartFitCheck={goToFitCheck} />
        </section>

        <div className="bg-white">
          <OnRampSection onStartFitCheck={goToFitCheck} />
        </div>

        <SevenDaySection content={config.sevenDay} />

        <section id="proof" className="relative bg-gradient-to-b from-accent/15 to-white">
          <ProofSection />
        </section>

        <div className="bg-white">
          <WhoThisIsFor content={config.who} />
        </div>

        <div className="bg-gradient-to-b from-accent-violet/18 via-accent-violet/8 to-white">
          <RefusalGates />
        </div>

        <section id="faq" className="relative bg-white">
          <FAQSection content={config.faq} />
        </section>
      </main>

      <Footer
        onNavigateToPrivacy={() => {}}
        onNavigateToTerms={() => {}}
        onNavigateToStudentRights={() => {}}
        onNavigateToComplaints={() => {}}
        onScrollToSection={scrollToSection}
        onStartFitCheck={goToFitCheck}
      />
    </div>
  );
}
