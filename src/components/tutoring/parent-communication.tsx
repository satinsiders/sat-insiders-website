import { ReactNode } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { MessageCircle, Calendar, Shield, Clock } from "lucide-react";

type CommunicationFeature = {
  icon?: ReactNode;
  title: string;
  description: string;
};

type TimeCommitmentItem = {
  phase: string;
  time: string;
  description: string;
};

type ParentCommunicationContent = {
  badge: string;
  title: string;
  description: string;
  features: CommunicationFeature[];
  timeHeadline: string;
  timeSubtitle: string;
  timeItems: TimeCommitmentItem[];
  totalCommitmentTitle: string;
  totalCommitmentSubtitle: string;
};

interface ParentCommunicationProps {
  content?: Partial<Omit<ParentCommunicationContent, "features" | "timeItems">> & {
    features?: CommunicationFeature[];
    timeItems?: TimeCommitmentItem[];
  };
}

const defaultFeatures: CommunicationFeature[] = [
  {
    icon: <MessageCircle className="w-6 h-6 text-accent" />,
    title: "Weekly Progress Reports",
    description:
      "Detailed insights into your student's improvements, areas of focus, and upcoming goals.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-accent" />,
    title: "Flexible Scheduling",
    description: "Sessions tailored to fit every child and parent's unique needs and schedule constraints.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "100% Transparency",
    description:
      "No hidden fees, clear methodology, and honest assessments of your student's potential.",
  },
];

const defaultTimeItems: TimeCommitmentItem[] = [
  { phase: "Initial Assessment", time: "30 minutes", description: "Diagnostic test for initial diagnosis" },
  {
    phase: "Flexible Sessions",
    time: "Customized",
    description: "Tailored to fit your child and family's needs",
  },
  {
    phase: "Home Practice",
    time: "As needed",
    description: "Complimentary daily vocab curriculum + customized homework",
  },
  {
    phase: "Parent-Manager Check-ins",
    time: "Monthly",
    description: "Dedicated parent-manager progress discussions",
  },
];

const defaultContent: ParentCommunicationContent = {
  badge: "For Parents",
  title: "Stay Informed, Stay Confident",
  description:
    "We know you're busy. Our communication system keeps you updated on progress without requiring you to become a test prep expert yourself.",
  features: defaultFeatures,
  timeHeadline: "Weekly Time Investment",
  timeSubtitle: "Clear expectations for your family's schedule",
  timeItems: defaultTimeItems,
  totalCommitmentTitle: "Total Weekly Commitment: Customized to Your Family",
  totalCommitmentSubtitle: "Every family has different needs - we adapt our approach accordingly",
};

const featureIconFallbacks = [
  <MessageCircle className="w-6 h-6 text-accent" />,
  <Calendar className="w-6 h-6 text-accent" />,
  <Shield className="w-6 h-6 text-accent" />,
];

export function ParentCommunication({ content }: ParentCommunicationProps) {
  const communicationContent: ParentCommunicationContent = {
    ...defaultContent,
    ...content,
    features: content?.features ?? defaultContent.features,
    timeItems: content?.timeItems ?? defaultContent.timeItems,
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-accent/20 text-accent bg-accent/5">
            {communicationContent.badge}
          </Badge>
          <h2 className="mb-6" style={{ color: "var(--primary-navy)" }}>
            {communicationContent.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--neutral-600)" }}>
            {communicationContent.description}
          </p>
        </motion.div>

        {/* Communication Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {communicationContent.features.map((feature, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                    {feature.icon ?? featureIconFallbacks[index % featureIconFallbacks.length]}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--primary-navy)" }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: "var(--neutral-600)" }}>{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Time Commitment Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="mb-4 flex items-center justify-center gap-2" style={{ color: "var(--primary-navy)" }}>
              <Clock className="w-6 h-6 text-accent" />
              {communicationContent.timeHeadline}
            </h3>
            <p style={{ color: "var(--neutral-600)" }}>{communicationContent.timeSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationContent.timeItems.map((item, index) => (
              <Card key={index} className="text-center border-accent/20">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">{item.time}</div>
                  <h4 className="font-semibold mb-2" style={{ color: "var(--primary-navy)" }}>
                    {item.phase}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--neutral-600)" }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-medium" style={{ color: "var(--primary-navy)" }}>
              {communicationContent.totalCommitmentTitle}
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--neutral-600)" }}>
              {communicationContent.totalCommitmentSubtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
