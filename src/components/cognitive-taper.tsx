import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, CheckCircle, Target, Moon, Zap } from "lucide-react";

export function CognitiveTaper() {
  const taperPhases = [
    {
      phase: "T-7 → T-4",
      title: "Consolidation",
      icon: <Target className="w-5 h-5" />,
      activities: "Consolidate known item types; rehearse rules, not novelty.",
      focus: "Strengthen established patterns"
    },
    {
      phase: "T-3",
      title: "Familiarity",
      icon: <CheckCircle className="w-5 h-5" />,
      activities: "Familiar reps; emphasize skip/salvage.",
      focus: "Build decision confidence"
    },
    {
      phase: "T-2",
      title: "Light Pass",
      icon: <Calendar className="w-5 h-5" />,
      activities: "One clean light pass; end on a win.",
      focus: "Maintain momentum"
    },
    {
      phase: "T-1",
      title: "Rest & Recall",
      icon: <Moon className="w-5 h-5" />,
      activities: "Sleep routine + 15-minute rule recall; no new difficulty.",
      focus: "Prime for performance"
    },
    {
      phase: "T-0",
      title: "Execute",
      icon: <Zap className="w-5 h-5" />,
      activities: "Calm competence: pace cues + commitment to the No-Go Lines.",
      focus: "Trust the system"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Cognitive taper (how we peak on the right week)
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            Strategic preparation phases designed to optimize performance exactly when it matters.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {taperPhases.map((phase, index) => (
              <div key={index} className="relative">
                <Card className="p-6 border-neutral-200 hover:border-accent/30 hover:shadow-lg transition-all duration-200">
                  <div className="space-y-4">
                    {/* Phase indicator */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-accent/20 text-accent text-xs">
                        {phase.phase}
                      </Badge>
                      <div className="p-2 rounded-lg bg-accent/10" style={{ color: 'var(--accent-teal)' }}>
                        {phase.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                      {phase.title}
                    </h3>

                    {/* Activities */}
                    <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                      {phase.activities}
                    </p>

                    {/* Focus */}
                    <div className="pt-2 border-t border-neutral-100">
                      <div className="text-xs font-medium text-accent">
                        {phase.focus}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm"></div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 border-accent/20 bg-accent/5 max-w-2xl mx-auto">
            <div className="space-y-3">
              <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                The taper principle
              </h4>
              <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                Peak performance requires strategic rest and consolidation. We time cognitive load reduction 
                to maximize both confidence and execution on test day.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}