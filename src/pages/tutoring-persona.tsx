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
      badge: "보딩스쿨 운동선수 전용 트랙",
      headline: {
        pre: "Tournament weeks won't derail ",
        highlight: "your athlete's SAT gains",
        post: "",
      },
      subheadline:
        "원정과 야간 연습이 반복되는 일정을 데이터화해 회복 가능한 45분 슬롯 안에 고득점 훈련을 꽉 채웁니다.",
      stats: [
        { value: "45분 × 2", label: "Away-week coaching bursts" },
        { value: "92%", label: "Assignments finished on travel weeks" },
      ],
      ctaLabel: "여행 일정 공유하고 맞춤 플랜 받아보기",
      ctaHelper: "3분 Fit Check • 코치 일정만 알려주세요",
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
        "우리는 부모, 코치, 학생이 같은 경기력을 향해 움직이도록 주간 체계를 제공합니다.",
      features: [
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Sunday logistics sync",
          description: "15분 화상으로 주간 원정 일정, 피로 위험, 학습 슬롯을 확정합니다.",
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Coach-friendly snapshot",
          description:
            "Forward-ready 요약본으로 감독, 기숙사 사감과도 동일한 정보를 공유할 수 있습니다.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Travel alert system",
          description: "경기 연장·비행 지연이 생기면 30분 내 대체 과제와 시간표를 재배치합니다.",
        },
      ],
      timeItems: [
        {
          phase: "Sunday plan call",
          time: "15 min",
          description: "Roster 업데이트 + 이동 경로 + 학습 슬롯 확정",
        },
        {
          phase: "Live check-ins",
          time: "2×5 min",
          description: "연습 후 음성 노트로 에너지 상태 확인",
        },
        {
          phase: "Guided practice",
          time: "30-35 min",
          description: "피로도에 맞춘 모바일 학습 세트",
        },
        {
          phase: "Parent digest",
          time: "10 min",
          description: "주간 비디오 요약 + 위험 신호 알림",
        },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "선수의 에너지 곡선을 지키는 루틴",
      totalCommitmentTitle: "Total weekly load: ~1 hour for you, 두 번의 마이크로 세션",
      totalCommitmentSubtitle: "토너먼트, 더블헤더, 기숙사 통금까지 모두 반영합니다.",
    },
    who: {
      sectionTitle: "이런 가족에게 맞습니다",
      sectionDescription: "경기력과 점수를 동시에 지키려는 부모님, 코치, 학생을 위한 전용 트랙입니다.",
      identities: [
        {
          id: "athlete",
          icon: <Target className="w-5 h-5" />,
          title: "Boarding-school athlete",
          statement: '"I need a coach who respects my season and my sleep."',
          details:
            "우리는 연습·원정·회복 루틴을 먼저 분석하고, 그 안에 점프 가능한 학습 스크립트를 심습니다.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent-coach ally",
          statement: '"I want visibility without nagging from 3,000 miles away."',
          details:
            "Forward 가능한 요약본과 알림으로 코치·부모·기숙사 스태프가 같은 정보를 공유합니다.",
        },
        {
          id: "dorm",
          icon: <Home className="w-5 h-5" />,
          title: "Dorm support system",
          statement: '"Give me clear instructions so I can protect study hall."',
          details: "도미토리 직원에게 전달 가능한 체크리스트와 스케줄을 제공합니다.",
        },
        {
          id: "scholarship",
          icon: <Sparkles className="w-5 h-5" />,
          title: "Scholarship seeker",
          statement: '"I refuse to sacrifice offers because of logistics."',
          details: "우리는 스포츠 장학생이 요구하는 GPA·SAT 기준을 실시간으로 모니터링합니다.",
        },
      ],
      calloutTitle: "Why parents choose this lane",
      calloutBody:
        "경기력과 학업을 동시에 관리하는 전담 매니저팀이 배치되어, 원정주간에도 진행률이 떨어지지 않습니다.",
    },
    faq: {
      sectionTitle: "Athlete family questions",
      description: "스케줄 관리와 NCAA 규정을 모두 고려했습니다.",
      items: [
        {
          question: "비행과 시차가 잦은데도 관리가 되나요?",
          answer:
            "Fit Check 단계에서 시즌 일정을 받아 주간·일별 블록을 설계합니다. 시차가 생기면 매니저가 30분 내 새 과제와 라이브/비동기 옵션을 제안합니다.",
        },
        {
          question: "저녁 훈련 후 너무 피곤하면요?",
          answer:
            "고강도 날에는 15분 결합형 과제를 배치하고, 회복일에 긴 세션을 배치합니다. 선수의 HRV·수면 기록을 참고해 강도를 조절합니다.",
        },
        {
          question: "학교 튜터나 코치와 어떻게 협업하나요?",
          answer:
            "부모님이 허락하면 요약 리포트를 코치·기숙사 담당자에게 공유해 중복 없이 지원합니다.",
        },
        {
          question: "NCAA 아마추어 규정과 충돌하지 않나요?",
          answer:
            "학습 서비스로 분류되어 NCAA 규정을 준수합니다. 필요 시 compliance officer와 바로 소통합니다.",
        },
        {
          question: "버스나 호텔에서도 수업이 가능한가요?",
          answer:
            "Wi-Fi가 불안정한 상황을 대비해 다운로드 가능한 자료와 음성 해설을 제공합니다.",
        },
      ],
      footerText: "다음 원정 날짜를 알려주시면 그 주간 플랜을 먼저 설계해드립니다.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: travel-proof launch",
      sectionSubtitle: "Day 7에는 여행과 연습 사이에서 작동하는 학습 루틴이 완성됩니다.",
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
        "Practice planner에 SAT 미션이 자연스럽게 포함",
        "원정 중에도 진도 차질 없이 완료",
        "코치·부모·학생이 같은 데이터를 본다",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        {
          day: "Day 1",
          activity: "Season intake",
          description: "Fit Check + 원정/연습 일정 수집",
        },
        {
          day: "Day 2",
          activity: "Diagnostics",
          description: "SAT 베이스라인 + 결정 패턴 분석",
        },
        {
          day: "Day 3-4",
          activity: "Micro script build",
          description: "45분/15분 과제와 대체 옵션 설계",
        },
        {
          day: "Day 5",
          activity: "Travel rehearsal",
          description: "버스/호텔용 의사결정 드릴 실행",
        },
        {
          day: "Day 6-7",
          activity: "Manager sync",
          description: "코치·부모 공유본 확정 + 첫 리포트 발송",
        },
      ],
      timelineOutcome: "Outcome: 100% of planned reps delivered despite the sports schedule",
    },
  },
  adhd: {
    label: "ADHD-focused learner",
    hero: {
      badge: "ADHD 맞춤 SAT 시스템",
      headline: {
        pre: "Structure the score your ",
        highlight: "neurodivergent learner",
        post: " can own",
      },
      subheadline:
        "짧은 스프린트, 시각 피드백, 책임 코칭으로 ADHD 학생의 집중 지속 시간을 설계합니다.",
      stats: [
        { value: "32분", label: "Live body-doubling sessions" },
        { value: "3x/week", label: "Momentum nudges & wins" },
      ],
      ctaLabel: "ADHD 전용 Fit Check 시작하기",
      ctaHelper: "3분 • 약물/스케줄 메모만 준비하세요",
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
        "의지나 훈육이 아니라 구조가 성과를 만듭니다. 우리는 수치로 보이는 승리 루프를 만듭니다.",
      beliefs: [
        {
          title: "Our approach",
          belief:
            "Motivation follows measurable wins. 첫 48시간 안에 성공 경험을 설계해 도파민을 확보합니다.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief: '"Sit still and try harder"식 과제 폭탄이나 죄책감 유발 과제는 즉시 배제합니다.',
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
        "ADHD 학생의 성공은 집중이 아니라 회복 가능한 구조와 즉각 피드백에서 나옵니다.",
      principles: [
        {
          number: "01",
          title: "Momentum over willpower",
          description:
            "모든 과제를 25-35분 스프린트로 설계하고, 완수 즉시 보상 피드백을 제공합니다.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Regulate before rigor",
          description:
            "약물, 수면, 감정 상태를 먼저 체크하고 그에 맞춰 난이도를 조정합니다.",
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
      title: "정보는 간결하게, 지원은 즉각적으로",
      description:
        "우리는 학생의 실행 기능을 대신 관리하고, 부모님께는 필요한 핵심만 전달합니다.",
      features: [
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Daily momentum texts",
          description: "두 줄 요약과 다음 승리 포인트를 전송해 잔소리 없이 응원할 수 있게 합니다.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Executive function dashboard",
          description:
            "미완료 항목, 집중도 로그, 감정 상태를 색상으로 보여주는 투명한 보드 제공.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Focus rescue plan",
          description: "약물, 수면, 환경 변화에 따라 즉시 적용 가능한 대체 플랜을 제공합니다.",
        },
      ],
      timeItems: [
        {
          phase: "Kickoff intake",
          time: "35 min",
          description: "학생·부모 인터뷰 + 집중 트리거 수집",
        },
        {
          phase: "Live coaching",
          time: "2×32 min",
          description: "바디더블링 세션으로 주요 전략 훈련",
        },
        {
          phase: "Guided solo sprint",
          time: "20 min",
          description: "Gamified homework with instant feedback",
        },
        {
          phase: "Parent loop",
          time: "8 min",
          description: "비디오 요약과 다음 주 위험 신호",
        },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "집중 유지 장치에 투자하는 2.5시간",
      totalCommitmentTitle: "Total weekly load: 약 2.5시간 집중",
      totalCommitmentSubtitle: "학생의 에너지와 약물 사이클을 우선시합니다.",
    },
    who: {
      sectionTitle: "누구를 위한 프로그램인가요?",
      sectionDescription: "ADHD를 약점이 아닌 전략으로 바꾸고 싶은 가족",
      identities: [
        {
          id: "student",
          icon: <Brain className="w-5 h-5" />,
          title: "ADHD-honest student",
          statement: '"I need a coach who gets my brain and won't shame me."',
          details: "집중이 흔들릴 때 즉시 도와줄 구조와 언어를 만듭니다.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent seeking proof",
          statement: '"I want evidence of progress without becoming the enforcer."',
          details: "데이터 기반 리포트로 부모님의 감시 부담을 덜어드립니다.",
        },
        {
          id: "family",
          icon: <Home className="w-5 h-5" />,
          title: "Family system",
          statement: '"We want evenings back, not another fight."',
          details: "과제 완료 여부로 싸우지 않도록 완결된 루틴과 보상을 제공합니다.",
        },
        {
          id: "creative",
          icon: <Sparkles className="w-5 h-5" />,
          title: "High-potential creative",
          statement: '"Give me structure and I\'ll bring the spark."',
          details: "창의성을 죽이지 않는 범위에서 구조화된 전략을 제공합니다.",
        },
      ],
      calloutTitle: "We coach the nervous system first",
      calloutBody:
        "집중력 자체보다 신경계 안정과 성공 경험을 먼저 만들기 때문에, 학생이 스스로 의욕을 회복합니다.",
    },
    faq: {
      sectionTitle: "ADHD 가족이 가장 궁금해하는 질문",
      items: [
        {
          question: "약물 복용 시간이 자주 바뀌어도 괜찮나요?",
          answer:
            "주간 체크인에서 약물/수면 변화를 공유받고, 세션 시간과 난이도를 즉시 재조정합니다.",
        },
        {
          question: "수업을 자꾸 잊어버리면 어떻게 하나요?",
          answer:
            "세션 1시간 전 SMS/앱 알림과 코치의 개인 영상으로 리마인드합니다. 두 번 연속 놓치면 맞춤 플랜을 다시 짭니다.",
        },
        {
          question: "바디더블링이나 코워킹 공간이 있나요?",
          answer:
            "있습니다. 학생이 요청하면 카메라를 켜고 함께 문제를 풀며 실시간 피드백을 줍니다.",
        },
        {
          question: "IEP, 상담사와도 협업하나요?",
          answer:
            "보호자 동의 시 IEP 목표와 치료 계획을 반영해 같은 언어로 코칭합니다.",
        },
        {
          question: "집중이 무너질 때 부모가 해야 할 일은?",
          answer:
            "우리가 보내는 3단계 리커버리 가이드를 따라 주세요. 부모님 역할은 응원과 환경 조정뿐입니다.",
        },
      ],
      footerText: "Fit Check에서 현재 루틴을 공유하면 맞춤 집중 전략을 설계해드립니다.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: momentum installation",
      sectionSubtitle: "일주일 안에 세 번의 성공 경험을 설계합니다.",
      focusHeading: "What we wire in",
      focusGroups: [
        {
          heading: "Baseline signals",
          items: [
            "• 약물/수면/기분 로그",
            "• 집중 온·오프 트리거",
            "• 학습 환경 조정 체크리스트",
          ],
        },
        {
          heading: "Systems installed",
          items: [
            "• 32분 스프린트 타이머",
            "• 포커스 레스큐 프로토콜",
            "• 도파민 보상 보드",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "학생이 먼저 세션을 요청",
        "완료된 과제가 즉시 시각화",
        "저녁 갈등이 눈에 띄게 줄어듦",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "Intake", description: "집중 트리거 + 진단" },
        { day: "Day 2", activity: "First sprint", description: "32분 세션으로 첫 승리" },
        { day: "Day 3-4", activity: "Gamified homework", description: "짧은 과제로 보상 루프 강화" },
        { day: "Day 5", activity: "Body-doubling lab", description: "코치와 함께 대형 문항 해결" },
        { day: "Day 6-7", activity: "Momentum recap", description: "주간 리포트 + 다음 주 계획" },
      ],
      timelineOutcome: "Outcome: 학생이 3회 연속 완주 + 첫 집중 로그 확보",
    },
  },
  immigrant: {
    label: "Bilingual/immigrant family",
    hero: {
      badge: "이민 가정 • Bilingual SAT 전략",
      headline: {
        pre: "Bridge the SAT gap for ",
        highlight: "bilingual thinkers",
        post: "",
      },
      subheadline:
        "한국어와 영어를 오가며 의미를 먼저 잡고, 배경지식을 확장해 독해 장벽을 허무는 커리큘럼입니다.",
      stats: [
        { value: "2×", label: "Faster passage breakdown with dual notes" },
        { value: "120+", label: "Background context capsules" },
      ],
      ctaLabel: "이중언어 Fit Check 시작하기",
      ctaHelper: "3분 • 지금 어려운 지문만 공유하세요",
      progressTitle: "Reading Confidence Tracker",
      progressBadge: "Meaning First",
      floatingLabel: "Bilingual coach + cultural analyst",
    },
    doctrine: {
      badge: "언어 전환 철학",
      headline: {
        pre: "We convert language gaps into ",
        highlight: "strategic clarity",
        post: "",
      },
      description:
        "언어 장벽은 실력 부족이 아니라 번역 지연입니다. 의미를 먼저 이해하게 만들면 성적은 자연스럽게 올라갑니다.",
      beliefs: [
        {
          title: "Our approach",
          belief: "핵심 문장을 한국어/영어로 모두 설명하고, 뇌가 내용을 잡을 시간을 줍니다.",
          color: "accent",
        },
        {
          title: "What doesn't work",
          belief: '"그냥 더 많이 읽어"라는 말은 배경지식과 맥락이 없는 학생에게는 공허합니다.',
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
        "의미를 먼저 잡고, 문화적 맥락과 어휘를 그 위에 쌓습니다.",
      principles: [
        {
          number: "01",
          title: "Meaning before mechanics",
          description: "문법·어휘보다 글의 의도와 구조부터 번역합니다.",
          accent: "accent-teal",
        },
        {
          number: "02",
          title: "Context creates confidence",
          description: "미국 역사·과학 배경을 짧은 캡슐로 보충해 낯선 지문을 익숙하게 만듭니다.",
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
            "Sentence frames and transition cues in 두 언어",
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
            "비교 문화 질문으로 이해 확장",
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
        "가족 모두가 이해할 수 있는 리포트와 실력 향상 데이터를 제공해, 학생이 자신감을 회복하도록 돕습니다.",
    },
    parentCommunication: {
      badge: "For 부모님",
      title: "언어 장벽을 함께 넘어갑니다",
      description:
        "모든 리포트와 피드백을 한국어/영어로 제공해 부모님도 전체 과정을 이해하실 수 있습니다.",
      features: [
        {
          icon: <MessageCircle className="w-6 h-6 text-accent" />,
          title: "Bilingual weekly digest",
          description: "주요 성과와 다음 주 목표를 두 언어로 요약해 드립니다.",
        },
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Context homework plan",
          description: "가정에서 함께 볼 수 있는 배경지식 영상과 토론 질문을 제공합니다.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Vocabulary audio packs",
          description: "발음·의미를 함께 익힐 수 있는 MP3 파일과 스크립트를 드립니다.",
        },
      ],
      timeItems: [
        { phase: "Kickoff 인터뷰", time: "30 min", description: "학생·부모 이중 언어 상담" },
        { phase: "Live reading lab", time: "2×45 min", description: "의미 중심 독해 훈련" },
        { phase: "Context capsules", time: "20 min", description: "배경지식 영상 시청 및 요약" },
        { phase: "Parent recap", time: "10 min", description: "주간 리포트 + 홈 활동 안내" },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "언어 격차를 메우는 집중 시간",
      totalCommitmentTitle: "Total weekly load: 2시간 30분 내외",
      totalCommitmentSubtitle: "한국어/영어 모두 지원합니다.",
    },
    who: {
      sectionTitle: "이런 학생에게 맞습니다",
      sectionDescription: "Meaning-first 전략으로 언어 장벽을 넘고 싶은 가정",
      identities: [
        {
          id: "student",
          icon: <Target className="w-5 h-5" />,
          title: "Bilingual student",
          statement: '"영어로 읽으면 머리가 하얘져요."',
          details: "핵심 문장을 한국어로 이해한 뒤 영어로 다시 표현하며 자신감을 회복합니다.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "부모님",
          statement: '"아이의 진짜 실력을 보고 싶어요."',
          details: "한국어 리포트와 영상 요약으로 진행 상황을 분명히 확인할 수 있습니다.",
        },
        {
          id: "family",
          icon: <Home className="w-5 h-5" />,
          title: "Immigrant family",
          statement: '"미국식 배경지식이 부족해도 따라갈 수 있을까요?"',
          details: "맥락 설명과 문화 비교 질문으로 지문이 낯설지 않게 만들어 드립니다.",
        },
        {
          id: "mentor",
          icon: <Compass className="w-5 h-5" />,
          title: "Guidance counselor ally",
          statement: '"I need transparent data I can trust."',
          details: "허가 시 학교 카운슬러와도 진도 데이터를 공유합니다.",
        },
      ],
      calloutTitle: "언어는 장벽이 아니라 자산입니다",
      calloutBody:
        "두 언어를 모두 활용한 전략으로 의미를 먼저 붙잡으면, 시간 관리와 점수 상승이 동시에 이루어집니다.",
    },
    faq: {
      sectionTitle: "이민 가정 FAQ",
      items: [
        {
          question: "수업은 영어로만 진행되나요?",
          answer:
            "핵심 설명은 한국어·영어를 섞어 진행하고, 최종 실전 연습은 영어로 연습하도록 돕습니다.",
        },
        {
          question: "배경지식이 없어서 지문이 이해되지 않아요.",
          answer:
            "지문 주제별로 필요한 역사·과학 맥락을 짧은 영상과 노트로 먼저 학습합니다.",
        },
        {
          question: "부모도 내용을 이해하고 싶어요.",
          answer:
            "모든 리포트를 두 언어로 제공하고, 필요 시 통역이 포함된 상담을 잡아 드립니다.",
        },
        {
          question: "문법과 어휘도 다뤄주나요?",
          answer:
            "물론입니다. 다만 의미 이해를 먼저 잡은 뒤, 문법/어휘를 연결해 자연스럽게 정리합니다.",
        },
        {
          question: "미국식 에세이 작성도 도와주나요?",
          answer:
            "희망 시 영어 에세이 구조와 표현도 병행 지도합니다.",
        },
      ],
      footerText: "언어 고민을 Fit Check에 적어주시면 바로 대응 전략을 설계합니다.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: bilingual launch",
      sectionSubtitle: "의미 파악과 어휘 루틴을 동시에 시작합니다.",
      focusHeading: "What we build",
      focusGroups: [
        {
          heading: "Meaning anchors",
          items: [
            "• 핵심 문장 번역 노트",
            "• 지문 구조 템플릿",
            "• 질문 유형별 키워드",
          ],
        },
        {
          heading: "Context boosters",
          items: [
            "• 배경지식 캡슐",
            "• 문화 비교 질문",
            "• 어휘 반복 루틴",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "지문을 한국어로 설명할 수 있게 됨",
        "단어 뜻이 아닌 문장 전체 의미가 보임",
        "속도보다 이해도가 먼저 올라감",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "언어 진단", description: "한/영 think-aloud" },
        { day: "Day 2", activity: "Scaffold 제작", description: "문장/구조 노트 설계" },
        { day: "Day 3-4", activity: "Context capsule", description: "배경지식 채우기" },
        { day: "Day 5", activity: "Dual passage lab", description: "이중 언어 요약" },
        { day: "Day 6-7", activity: "Confidence check", description: "실전 지문 적용 + 피드백" },
      ],
      timelineOutcome: "Outcome: 새로운 지문도 두 언어로 설명 가능",
    },
  },
  artist: {
    label: "Creative/art-focused student",
    hero: {
      badge: "예술 전공 준비생 전용",
      headline: {
        pre: "Channel your creative discipline into ",
        highlight: "SAT certainty",
        post: "",
      },
      subheadline:
        "스튜디오 워크플로우를 시험 전략으로 번역해 포트폴리오와 점수를 동시에 끌어올립니다.",
      stats: [
        { value: "3 labs", label: "Visual strategy remixes per week" },
        { value: "180+ pt", label: "Creative-track average lift" },
      ],
      ctaLabel: "포트폴리오와 SAT 둘 다 잡는 방법 보기",
      ctaHelper: "3분 Fit Check • 현재 스튜디오 일정 공유",
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
        "창작력을 죽이는 주입식 대신, 디자인 프로세스를 시험 전략으로 옮겨 놓습니다.",
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
        "우리는 창의성을 억압하지 않고, 그 힘을 점수 향상에 연결합니다.",
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
        "포트폴리오 손상 없이 SAT 목표를 달성해, 예술대 장학금과 합격 가능성을 극대화합니다.",
    },
    parentCommunication: {
      badge: "For creative families",
      title: "스튜디오와 시험을 동시에 관리",
      description:
        "포트폴리오 일정과 SAT 진행 상황을 한 눈에 볼 수 있도록 맞춤 리포트를 제공합니다.",
      features: [
        {
          icon: <Calendar className="w-6 h-6 text-accent" />,
          title: "Studio-synced calendar",
          description: "포트폴리오 마감, 리허설, 시험 일정을 하나의 루틴으로 통합.",
        },
        {
          icon: <Sparkles className="w-6 h-6 text-accent" />,
          title: "Creative progress reels",
          description: "학생의 전략 스케치와 결과물을 영상/이미지로 공유해 진짜 성장을 보여줍니다.",
        },
        {
          icon: <Shield className="w-6 h-6 text-accent" />,
          title: "Scholarship tracker",
          description: "지원하려는 학교와 장학금 요건을 매니저가 직접 모니터링합니다.",
        },
      ],
      timeItems: [
        { phase: "Studio briefing", time: "30 min", description: "포트폴리오/오디션 일정 파악" },
        { phase: "Design labs", time: "3×30 min", description: "비주얼 전략 + 문제 해결" },
        { phase: "Solo rehearsal", time: "40 min", description: "시험 대비 스프린트" },
        { phase: "Parent showcase", time: "10 min", description: "주간 영상 리포트 + 다음 목표" },
      ],
      timeHeadline: "Weekly time investment",
      timeSubtitle: "창작 에너지를 지키는 SAT 루틴",
      totalCommitmentTitle: "Total weekly load: 창작 3h + SAT 2h",
      totalCommitmentSubtitle: "스튜디오 일정에 맞춰 유연하게 조정됩니다.",
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
            "시각적 프레임워크로 독해와 수학 문제를 이해하게 도와드립니다.",
        },
        {
          id: "parent",
          icon: <Users className="w-5 h-5" />,
          title: "Parent investor",
          statement: '"I need proof this will protect auditions."',
          details: "포트폴리오 시간을 보장하면서 점수 상승 데이터를 제공합니다.",
        },
        {
          id: "mentor",
          icon: <Compass className="w-5 h-5" />,
          title: "Art mentor",
          statement: '"Keep them in flow but ready for the SAT."',
          details: "요청 시 멘토와도 커뮤니케이션하여 일정을 조율합니다.",
        },
        {
          id: "scholar",
          icon: <Sparkles className="w-5 h-5" />,
          title: "Scholarship hunter",
          statement: '"I want the score that unlocks funding."',
          details: "장학금 컷라인에 맞춘 전략과 데이터 스토리텔링을 제공합니다.",
        },
      ],
      calloutTitle: "Creativity is your advantage",
      calloutBody:
        "우리는 창작 프로세스를 시험 전략으로 연결해, 학생이 자신만의 방식으로 고득점을 달성하게 합니다.",
    },
    faq: {
      sectionTitle: "Creative family FAQ",
      items: [
        {
          question: "SAT 준비가 포트폴리오 시간을 잡아먹지 않을까요?",
          answer:
            "스튜디오 일정에 맞춘 30-40분 스프린트로 설계해 창작 시간을 지키면서 점수를 올립니다.",
        },
        {
          question: "예술적 강점을 어떻게 시험 전략으로 연결하나요?",
          answer:
            "시각적 스토리보드, 패턴 인식 훈련, 메타포를 활용해 이해와 기억을 돕습니다.",
        },
        {
          question: "지원 학교와 장학금 요건도 관리해 주나요?",
          answer:
            "목표 학교 정보를 받아 점수·포트폴리오 체크리스트를 함께 관리합니다.",
        },
        {
          question: "팀 프로젝트나 공연 시즌에도 유연하게 조정되나요?",
          answer:
            "물론입니다. 공연/전시 기간에는 비동기 과제와 짧은 리캡으로 전환합니다.",
        },
        {
          question: "수학/과학 약점도 커버되나요?",
          answer:
            "시각화와 패턴 분석을 활용해 수학, 데이터 분석 문제도 쉽게 이해하도록 돕습니다.",
        },
      ],
      footerText: "Fit Check에서 포트폴리오 일정과 목표 학교를 알려주세요.",
    },
    sevenDay: {
      sectionTitle: "First 7 days: creative alignment",
      sectionSubtitle: "스튜디오 루틴 속에 SAT 루틴을 심습니다.",
      focusHeading: "What we create",
      focusGroups: [
        {
          heading: "Design-driven tools",
          items: [
            "• 비주얼 패시지 보드",
            "• 스케치북 문제 노트",
            "• 타이머 리듬 가이드",
          ],
        },
        {
          heading: "Confidence loops",
          items: [
            "• Critique-style 피드백",
            "• 스몰 윈 갤러리",
            "• 장학금 목표와 연결된 KPI",
          ],
        },
      ],
      experienceHeading: "What you'll notice",
      experienceItems: [
        "학생이 전략 스케치를 자랑",
        "포트폴리오와 SAT가 같은 노트에 기록",
        "불안이 줄고 실행력이 올라감",
      ],
      timelineTitle: "7-day rollout",
      timeline: [
        { day: "Day 1", activity: "Studio intake", description: "창작 루틴 + 시험 목표" },
        { day: "Day 2", activity: "Visual toolkit", description: "전략 보드 제작" },
        { day: "Day 3-4", activity: "Design labs", description: "비주얼 전략 적용" },
        { day: "Day 5", activity: "Timed rehearsal", description: "스프린트 + 피드백" },
        { day: "Day 6-7", activity: "Showcase recap", description: "데이터 + 포트폴리오 연결" },
      ],
      timelineOutcome: "Outcome: 스튜디오 일정 안에서 SAT 루틴 정착",
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
