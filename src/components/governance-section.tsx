import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, BarChart3, AlertCircle } from "lucide-react";

export function GovernanceSection() {
  const scenarios = [
    { action: "Switch tutors", reason: "Tutor and student aren't a good match" },
    { action: "Change the plan", reason: "Progress isn't happening as expected" },
    { action: "Pause the program", reason: "Life circumstances change" },
    { action: "Add extra support", reason: "Complex issues need more attention" }
  ];

  return (
    <section id="governance" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Quality control & our capacity limits
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            We limit how many students we take so we can properly supervise every tutor and monitor every student's progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-8 border-2 border-accent/20 bg-accent/5">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8" style={{ color: 'var(--accent-teal)' }} />
                  <div>
                    <h3 style={{ color: 'var(--primary-navy)' }}>Quality Promise</h3>
                    <p className="text-sm text-accent">What we guarantee</p>
                  </div>
                </div>
                
                <p style={{ color: 'var(--neutral-700)' }}>
                  We watch every tutoring session and track your progress carefully. If something isn't working, we make changes quickly to keep you on track.
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm" style={{ color: 'var(--primary-navy)' }}>
                    What we monitor:
                  </h4>
                  <div className="space-y-2 text-sm" style={{ color: 'var(--neutral-600)' }}>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>How well each tutoring session goes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>Your score trends and improvement patterns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>How confident you feel vs how you actually perform</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>Whether you're using the strategies we teach</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 bg-gradient-to-r from-neutral-50 to-white rounded-2xl border border-neutral-200">
              <div className="flex items-start space-x-4">
                <BarChart3 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <h4 className="font-medium mb-2" style={{ color: 'var(--primary-navy)' }}>
                    Why we limit students
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                    Our pricing reflects the cost of quality oversight, not marketing. We only take as many students as we can properly monitor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 style={{ color: 'var(--primary-navy)' }}>
                Changes we make when needed
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                When we see something isn't working, we act quickly to fix it.
              </p>
            </div>

            <div className="grid gap-4">
              {scenarios.map((scenario, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-accent/30 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline" className="border-accent/20 text-accent text-xs">
                        {scenario.action}
                      </Badge>
                    </div>
                    <div className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                      {scenario.reason}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-600" />
                <div>
                  <h4 className="font-medium text-sm text-amber-800 mb-1">
                    We fix problems early
                  </h4>
                  <p className="text-xs text-amber-700">
                    We step in before small issues become big problems. Quick adjustments protect your progress and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}