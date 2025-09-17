import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Target, TrendingUp, CheckCircle } from "lucide-react";

type TimelineItem = {
  day: string;
  activity: string;
  description: string;
};

type FocusGroup = {
  heading: string;
  items: string[];
};

type SevenDaySectionContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  focusHeading: string;
  focusGroups: FocusGroup[];
  experienceHeading: string;
  experienceItems: string[];
  timelineTitle: string;
  timeline: TimelineItem[];
  timelineOutcome: string;
};

interface SevenDaySectionProps {
  content?: Partial<Omit<SevenDaySectionContent, "focusGroups" | "experienceItems" | "timeline">> & {
    focusGroups?: FocusGroup[];
    experienceItems?: string[];
    timeline?: TimelineItem[];
  };
}

const defaultContent: SevenDaySectionContent = {
  sectionTitle: "Your first 7 days: The Trap Disarmament Sprint",
  sectionSubtitle: "By Day 7, one notorious trap that used to own you… won't.",
  focusHeading: "What we target",
  focusGroups: [
    {
      heading: "High-frequency traps",
      items: [
        "• RW transitions & evidence alignment",
        "• Math function composition & data-trap distractors",
        "• Time management decision points",
      ],
    },
    {
      heading: "What gets installed",
      items: [
        "• Decision rule + No-Go Line",
        "• Time-based rehearsal protocol",
        "• Confidence slider calibration (0/25/50/75/100)",
      ],
    },
  ],
  experienceHeading: "What you'll feel",
  experienceItems: [
    "Fewer \"how did I miss that?\" moments",
    "Faster ethical skipping",
    "The calm of a rule you trust",
  ],
  timelineTitle: "7-Day Timeline",
  timeline: [
    { day: "Day 1-2", activity: "Trap identification", description: "Pick your notorious pattern" },
    { day: "Day 3-4", activity: "Rule installation", description: "Install decision boundaries" },
    { day: "Day 5-6", activity: "Time rehearsal", description: "Practice under constraint" },
    { day: "Day 7", activity: "Confidence check", description: "Calibrate what you know vs. do" },
  ],
  timelineOutcome: "Outcome: No backslide across two sessions",
};

export function SevenDaySection({ content }: SevenDaySectionProps) {
  const sectionContent: SevenDaySectionContent = {
    ...defaultContent,
    ...content,
    focusGroups: content?.focusGroups ?? defaultContent.focusGroups,
    experienceItems: content?.experienceItems ?? defaultContent.experienceItems,
    timeline: content?.timeline ?? defaultContent.timeline,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: "var(--primary-navy)" }}>{sectionContent.sectionTitle}</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--neutral-600)" }}>
            {sectionContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6" style={{ color: "var(--accent-teal)" }} />
                <h3 style={{ color: "var(--primary-navy)" }}>{sectionContent.focusHeading}</h3>
              </div>
              <div className="space-y-4">
                {sectionContent.focusGroups.map((group, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-neutral-200">
                    <div className="font-medium text-sm mb-2" style={{ color: "var(--primary-navy)" }}>
                      {group.heading}
                    </div>
                    <div className="text-sm space-y-1" style={{ color: "var(--neutral-600)" }}>
                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex}>{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6" style={{ color: "var(--success-emerald)" }} />
                <h4 style={{ color: "var(--primary-navy)" }}>{sectionContent.experienceHeading}</h4>
              </div>
              <div className="space-y-2 text-sm" style={{ color: "var(--neutral-600)" }}>
                {sectionContent.experienceItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6 border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6" style={{ color: "var(--accent-teal)" }} />
                  <h4 style={{ color: "var(--primary-navy)" }}>{sectionContent.timelineTitle}</h4>
                </div>

                <div className="space-y-4">
                  {sectionContent.timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <Badge variant="outline" className="border-accent/20 text-accent text-xs">
                          {item.day}
                        </Badge>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="font-medium text-sm" style={{ color: "var(--primary-navy)" }}>
                          {item.activity}
                        </div>
                        <div className="text-sm" style={{ color: "var(--neutral-600)" }}>
                          {item.description}
                        </div>
                      </div>
                      {index < sectionContent.timeline.length - 1 && (
                        <div className="absolute left-6 mt-6 w-px h-6 bg-neutral-200"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm font-medium" style={{ color: "var(--accent-teal)" }}>
                        {sectionContent.timelineOutcome}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
