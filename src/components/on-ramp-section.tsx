import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

interface OnRampSectionProps {
  onStartFitCheck: () => void;
}

export function OnRampSection({ onStartFitCheck }: OnRampSectionProps) {
  const steps = [
    {
      number: 1,
      title: "Fit Check",
      duration: "3 minutes",
      description: "Goals, constraints, prior history.",
      details: "Quick assessment to understand your situation and determine program alignment."
    },
    {
      number: 2,
      title: "Initial Diagnostic",
      duration: "25 minutes",
      description: "Single exam consisting of 25 questions.",
      details: "Focused assessment to establish baseline performance and identify key patterns."
    },
    {
      number: 3,
      title: "Tutor Match Session",
      duration: "30 minutes",
      description: "Quick session with your matched tutor.",
      details: "Meet your assigned tutor and align on approach, constraints, and initial strategy."
    },
    {
      number: 4,
      title: "Commit—or don't",
      duration: "Your choice",
      description: "If the fit isn't real, we part as friends with clear next steps.",
      details: "Complete transparency about whether our approach matches your needs and constraints."
    },
    {
      number: 5,
      title: "Deeper Diagnostic & Trap Disarmament",
      duration: "7 days",
      description: "Deeper diagnostic with sessions going forward, and trap disarmament sprint.",
      details: "Experience our methodology firsthand with comprehensive evaluation and one specific improvement you can measure."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2>
            Your reversible on-ramp
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            Low-risk path to determine genuine fit before full commitment.
          </p>
        </div>

        <div className="space-y-8">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* First row: Steps 1-3 */}
            {steps.slice(0, 3).map((step, index) => (
              <Card key={step.number} className="p-6 border-neutral-200 hover:shadow-lg transition-all duration-200 relative">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-accent/20 text-accent">
                      Step {step.number}
                    </Badge>
                    <div className="text-xs text-neutral-400">
                      {step.duration}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <p className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                      {step.details}
                    </p>
                  </div>
                </div>

                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}
              </Card>
            ))}
            
            {/* Second row: Steps 4-5 centered */}
            <div className="col-span-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {steps.slice(3).map((step, index) => (
                  <Card key={step.number} className="p-6 border-neutral-200 hover:shadow-lg transition-all duration-200 relative">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-accent/20 text-accent">
                          Step {step.number}
                        </Badge>
                        <div className="text-xs text-neutral-400">
                          {step.duration}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                          {step.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-100">
                        <p className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                          {step.details}
                        </p>
                      </div>
                    </div>

                    {index === 0 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy and guarantees */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-green-200 bg-green-50">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-medium text-green-800 mb-2">
                    Privacy commitment
                  </h4>
                  <p className="text-sm text-green-700">
                    What we collect: goals, constraints, academic history. 
                    Why: program fit assessment. 
                    How long: deleted after 30 days if no enrollment.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-accent/20 bg-accent/5">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <h4 className="font-medium mb-2" style={{ color: 'var(--primary-navy)' }}>
                    Reversible commitment
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                    Exit at any step with clear next actions. No pressure, no guilt. 
                    Right timing beats wrong intensity.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTAs */}
          <div className="text-center space-y-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white transition-all duration-200"
              onClick={onStartFitCheck}
            >
              Start Fit Check
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}