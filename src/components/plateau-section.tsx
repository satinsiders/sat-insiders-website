import { Card } from "./ui/card";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
} from "lucide-react";

export function PlateauSection() {
  const signals = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      text: 'You "know it all," yet stray on traps you\'ve "seen before."',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Your practice peaks don't show up on test day.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "You finish sections but can't defend the decisions you rushed or skipped.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Explanations make sense after the fact, but don't change what you do next time.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2>Why strong students still plateau</h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--neutral-600)" }}
          >
            You already know the content. What costs points is
            variance: shaky decision rules, mistimed effort, and
            confidence that's misaligned with reality. We fix
            that ethically, measurably, and fast.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-center">
            Common signals you're in the right place
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {signals.map((signal, index) => (
              <Card
                key={index}
                className="p-6 border-neutral-200 hover:border-accent/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 p-2 rounded-lg bg-accent/10"
                    style={{ color: "var(--accent-teal)" }}
                  >
                    {signal.icon}
                  </div>
                  <p
                    className="flex-1"
                    style={{ color: "var(--neutral-700)" }}
                  >
                    {signal.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <div className="inline-flex items-center space-x-2 text-sm bg-white rounded-full px-6 py-3 border border-neutral-200">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span style={{ color: "var(--neutral-600)" }}>
                Variance control begins with honest diagnosis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}