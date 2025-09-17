import { ReactNode } from "react";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Brain, X, Target } from "lucide-react";

type DoctrineBelief = {
  icon?: ReactNode;
  title: string;
  belief: string;
  color?: "accent" | "critical" | "success";
  bgGradient?: string;
};

type DoctrinePrinciple = {
  number: string;
  title: string;
  description: string;
  accent?: "accent-teal" | "accent-violet";
};

type DoctrineHeadline = {
  pre: string;
  highlight: string;
  post: string;
};

type DoctrineSectionContent = {
  badge: string;
  headline: DoctrineHeadline;
  description: string;
  beliefs: DoctrineBelief[];
  principlesTitle: DoctrineHeadline;
  principlesDescription: string;
  principles: DoctrinePrinciple[];
};

interface DoctrineSectionRevampedProps {
  content?: Partial<Omit<DoctrineSectionContent, "headline" | "principlesTitle" | "beliefs" | "principles">> & {
    headline?: Partial<DoctrineHeadline>;
    principlesTitle?: Partial<DoctrineHeadline>;
    beliefs?: DoctrineBelief[];
    principles?: DoctrinePrinciple[];
  };
}

const defaultBeliefs: DoctrineBelief[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Our approach",
    belief:
      "Teaching the 'why' isn't enough—we train you to make the right decision quickly under pressure.",
    color: "accent",
    bgGradient: "from-accent/5 to-accent/10",
  },
  {
    icon: <X className="w-8 h-8" />,
    title: "What doesn't work",
    belief: '"Just do more questions and read the explanations."',
    color: "critical",
    bgGradient: "from-red-50 to-red-100/50",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "What we build",
    belief:
      "Clear decision rules, time management skills, and strategies you can use when you're stressed.",
    color: "success",
    bgGradient: "from-green-50 to-green-100/50",
  },
];

const defaultPrinciples: DoctrinePrinciple[] = [
  {
    number: "01",
    title: "Quality over Quantity",
    description:
      "More practice hours don't always mean higher scores (after ~1200). What matters is focused practice with good feedback.",
    accent: "accent-teal",
  },
  {
    number: "02",
    title: "Progressive Difficulty",
    description:
      "Starting with the hardest problems isn't smart. We start at the right level and build up systematically.",
    accent: "accent-violet",
  },
];

const defaultContent: DoctrineSectionContent = {
  badge: "Our Philosophy",
  headline: {
    pre: "How we think about ",
    highlight: "test prep",
    post: "",
  },
  description: "We focus on smart decision-making instead of just doing more practice problems.",
  beliefs: defaultBeliefs,
  principlesTitle: {
    pre: "Two foundational ",
    highlight: "principles",
    post: "",
  },
  principlesDescription:
    "These core beliefs shape every decision we make about curriculum, pacing, and measurement.",
  principles: defaultPrinciples,
};

const beliefColorClasses = {
  accent: {
    bgGradient: "from-accent/5 to-accent/10",
    badge: "border-accent/30 text-accent bg-white/80",
    iconWrap: "bg-white text-accent shadow-accent/20",
  },
  critical: {
    bgGradient: "from-red-50 to-red-100/50",
    badge: "border-red-300 text-red-700 bg-white/80",
    iconWrap: "bg-white text-red-600 shadow-red-200",
  },
  success: {
    bgGradient: "from-green-50 to-green-100/50",
    badge: "border-green-300 text-green-700 bg-white/80",
    iconWrap: "bg-white text-green-600 shadow-green-200",
  },
} as const;

const defaultIcons: Record<"accent" | "critical" | "success", ReactNode> = {
  accent: <Brain className="w-8 h-8" />,
  critical: <X className="w-8 h-8" />,
  success: <Target className="w-8 h-8" />,
};

export function DoctrineSectionRevamped({ content }: DoctrineSectionRevampedProps) {
  const doctrineContent: DoctrineSectionContent = {
    ...defaultContent,
    ...content,
    headline: {
      ...defaultContent.headline,
      ...content?.headline,
    },
    principlesTitle: {
      ...defaultContent.principlesTitle,
      ...content?.principlesTitle,
    },
    beliefs: content?.beliefs ?? defaultContent.beliefs,
    principles: content?.principles ?? defaultContent.principles,
  };

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-white to-neutral-50/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-br from-accent-violet/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Section Header - More spacing */}
        <div className="text-center space-y-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5 font-normal">
              {doctrineContent.badge}
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "var(--primary-navy)" }}>
              {doctrineContent.headline.pre}
              <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">
                {doctrineContent.headline.highlight}
              </span>
              {doctrineContent.headline.post}
            </h2>

            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--neutral-600)" }}>
              {doctrineContent.description}
            </p>
          </motion.div>
        </div>

        {/* Three Core Beliefs - More spacing */}
        <div className="grid lg:grid-cols-3 gap-12 mb-40">
          {doctrineContent.beliefs.map((belief, index) => {
            const color = belief.color ?? "accent";
            const visuals = beliefColorClasses[color];
            const icon = belief.icon ?? defaultIcons[color];
            const bgGradient = belief.bgGradient ?? visuals.bgGradient;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div
                  className={`p-10 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${bgGradient} backdrop-blur-sm h-full relative overflow-hidden rounded-3xl`}
                >
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>

                  <div className="relative space-y-8">
                    <motion.div
                      className={`p-4 rounded-2xl shadow-lg w-fit ${visuals.iconWrap}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {icon}
                    </motion.div>

                    <div className="space-y-4">
                      <Badge variant="outline" className={`font-medium backdrop-blur-sm ${visuals.badge}`}>
                        {belief.title}
                      </Badge>
                      <p className="text-lg leading-relaxed" style={{ color: "var(--neutral-700)" }}>
                        {belief.belief}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Two Foundational Principles - More spacing */}
        <div className="space-y-20">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold" style={{ color: "var(--primary-navy)" }}>
              {doctrineContent.principlesTitle.pre}
              <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">
                {doctrineContent.principlesTitle.highlight}
              </span>
              {doctrineContent.principlesTitle.post}
            </h3>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--neutral-600)" }}>
              {doctrineContent.principlesDescription}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {doctrineContent.principles.map((principle, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-visible">
                  {/* Number badge */}
                  <div className="absolute -top-6 -left-6 z-20">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br ${
                        principle.accent === "accent-teal"
                          ? "from-accent-teal to-accent"
                          : "from-accent-violet to-purple-600"
                      }`}
                    >
                      <span className="text-white font-bold text-lg">{principle.number}</span>
                    </div>
                  </div>

                  <div className="relative p-12 bg-gradient-to-br from-white via-white to-neutral-50/30 border border-neutral-100 shadow-xl hover:shadow-2xl hover:border-accent/20 transition-all duration-500 overflow-hidden rounded-3xl">
                    {/* Background decoration */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${
                        principle.accent === "accent-teal"
                          ? "from-accent-teal/10 to-accent-teal/5"
                        : "from-accent-violet/10 to-accent-violet/5"
                    } rounded-full blur-3xl transition-all duration-500 group-hover:scale-150`}
                  ></div>

                    <div className="relative pt-12 space-y-6">
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold" style={{ color: "var(--primary-navy)" }}>
                          {principle.title}
                        </h4>
                        <p className="text-lg leading-relaxed font-medium" style={{ color: "var(--neutral-700)" }}>
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
