import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Globe, BookOpen, Users, MonitorPlay, Clock } from "lucide-react";

interface PricingSectionProps {
  onStartFitCheck: () => void;
}

export function PricingSection({ onStartFitCheck }: PricingSectionProps) {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "10,000+ Practice Questions",
      description: "Completely mirror the SAT format and difficulty"
    },
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      title: "20+ Full-Length Tests",
      description: "Spaced, strategically timed for variance control"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Tutors",
      description: "From top universities with deep SAT specialization"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Custom Learning System",
      description: "Our proprietary LMS built for decision-boundary training"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24 Hours of Coaching",
      description: "Precisely calibrated sessions with Manager Care oversight"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Investment & Delivery
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            Comprehensive online program designed for variance control and systematic improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 style={{ color: 'var(--primary-navy)' }}>
                What's included
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                Everything you need for systematic score improvement.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-neutral-200 hover:border-accent/30 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0" style={{ color: 'var(--accent-teal)' }}>
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-sm" style={{ color: 'var(--primary-navy)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--neutral-600)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <h4 className="font-medium text-sm mb-1" style={{ color: 'var(--primary-navy)' }}>
                    Fully online delivery
                  </h4>
                  <p className="text-xs" style={{ color: 'var(--neutral-700)' }}>
                    Access from anywhere. No commute time. Technology that supports learning, not distraction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-accent/20 bg-white shadow-lg">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <Badge variant="outline" className="border-accent/20 text-accent">
                    Complete Program
                  </Badge>
                  
                  <div className="space-y-2">
                    <div className="text-4xl tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                      $2,500
                    </div>
                    <div className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                      24 hours of expert coaching
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-center" style={{ color: 'var(--primary-navy)' }}>
                    Investment covers:
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success-emerald)' }} />
                      <span style={{ color: 'var(--neutral-700)' }}>Complete diagnostic & strategy development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success-emerald)' }} />
                      <span style={{ color: 'var(--neutral-700)' }}>Manager Care oversight & intervention</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success-emerald)' }} />
                      <span style={{ color: 'var(--neutral-700)' }}>Full access to practice materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success-emerald)' }} />
                      <span style={{ color: 'var(--neutral-700)' }}>Progress tracking & calibration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success-emerald)' }} />
                      <span style={{ color: 'var(--neutral-700)' }}>Cognitive taper & test-day preparation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-white transition-all duration-200"
                    onClick={onStartFitCheck}
                  >
                    Start Fit Check
                  </Button>
                  <p className="text-xs text-center" style={{ color: 'var(--neutral-500)' }}>
                    No commitment until after your reversible on-ramp
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-center space-y-2">
                <h4 className="font-medium text-sm text-amber-800">
                  Capacity-constrained intake
                </h4>
                <p className="text-xs text-amber-700">
                  We limit enrollment to maintain Manager Care quality standards. 
                  Fit Check reserves your evaluation slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}