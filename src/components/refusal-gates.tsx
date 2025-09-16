import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, Clock, Target, Heart, DollarSign } from "lucide-react";

export function RefusalGates() {
  const refusalReasons = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Outcome-guarantee demands",
      example: "e.g., \"1500 in 3 weeks\"",
      reason: "Unrealistic expectations undermine genuine progress"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Deadline desperation",
      example: "<2 weeks, >250-point gap",
      reason: "Insufficient time for sustainable skill building"
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Requests to cheat",
      example: "Unauthorized materials",
      reason: "Ethical boundaries are non-negotiable"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Price antagonism",
      example: "\"Same service, cheap\"",
      reason: "Governance quality requires investment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2>
            When we respectfully decline enrollment
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            We protect students and the craft by saying no when fit is wrong.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {refusalReasons.map((item, index) => (
            <Card key={index} className="p-6 border-neutral-200 hover:border-red-200 transition-all duration-200">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                      {item.title}
                    </h4>
                    {item.example && (
                      <div className="text-sm text-red-600 mt-1">
                        {item.example}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm pl-11" style={{ color: 'var(--neutral-600)' }}>
                  {item.reason}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="p-8 border-accent/20 bg-accent/5">
            <div className="text-center space-y-4">
              <h3 style={{ color: 'var(--primary-navy)' }}>
                Why this protects students
              </h3>
              <p style={{ color: 'var(--neutral-700)' }}>
                We'll redirect with dignity—resources, alternate timelines, or lighter tiers—because right timing beats wrong intensity.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-white"
              onClick={() => window.open('https://www.satinsiders.com/dailycare', '_blank')}
            >
              Resources for Alternative Paths
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}