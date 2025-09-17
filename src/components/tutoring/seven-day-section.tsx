import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Target, TrendingUp, CheckCircle } from "lucide-react";

export function SevenDaySection() {
  const timeline = [
    { day: "Day 1-2", activity: "Trap identification", description: "Pick your notorious pattern" },
    { day: "Day 3-4", activity: "Rule installation", description: "Install decision boundaries" },
    { day: "Day 5-6", activity: "Time rehearsal", description: "Practice under constraint" },
    { day: "Day 7", activity: "Confidence check", description: "Calibrate what you know vs. do" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Your first 7 days: The Trap Disarmament Sprint
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            By Day 7, one notorious trap that used to own you… won't.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6" style={{ color: 'var(--accent-teal)' }} />
                <h3 style={{ color: 'var(--primary-navy)' }}>What we target</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="font-medium text-sm mb-2" style={{ color: 'var(--primary-navy)' }}>
                    High-frequency traps
                  </div>
                  <div className="text-sm space-y-1" style={{ color: 'var(--neutral-600)' }}>
                    <div>• RW transitions & evidence alignment</div>
                    <div>• Math function composition & data-trap distractors</div>
                    <div>• Time management decision points</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="font-medium text-sm mb-2" style={{ color: 'var(--primary-navy)' }}>
                    What gets installed
                  </div>
                  <div className="text-sm space-y-1" style={{ color: 'var(--neutral-600)' }}>
                    <div>• Decision rule + No-Go Line</div>
                    <div>• Time-based rehearsal protocol</div>
                    <div>• Confidence slider calibration (0/25/50/75/100)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6" style={{ color: 'var(--success-emerald)' }} />
                <h4 style={{ color: 'var(--primary-navy)' }}>What you'll feel</h4>
              </div>
              <div className="space-y-2 text-sm" style={{ color: 'var(--neutral-600)' }}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Fewer "how did I miss that?" moments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Faster ethical skipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>The calm of a rule you trust</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6 border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6" style={{ color: 'var(--accent-teal)' }} />
                  <h4 style={{ color: 'var(--primary-navy)' }}>7-Day Timeline</h4>
                </div>

                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <Badge variant="outline" className="border-accent/20 text-accent text-xs">
                          {item.day}
                        </Badge>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="font-medium text-sm" style={{ color: 'var(--primary-navy)' }}>
                          {item.activity}
                        </div>
                        <div className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                          {item.description}
                        </div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute left-6 mt-6 w-px h-6 bg-neutral-200"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm font-medium" style={{ color: 'var(--accent-teal)' }}>
                        Outcome: No backslide across two sessions
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