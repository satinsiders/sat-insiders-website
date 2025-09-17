import { useState } from "react";
import { Card } from "../ui/card";
import { User, Users, Home, TrendingUp } from "lucide-react";

export function WhoThisIsFor() {
  const [selectedIdentity, setSelectedIdentity] = useState<string | null>(null);

  const identities = [
    {
      id: "student",
      icon: <User className="w-5 h-5" />,
      title: "Student",
      statement: "\"I want clean decisions under time and I'm coachable.\"",
      details: "You're self-aware about your patterns and ready to implement systematic improvements. You value clarity over comfort."
    },
    {
      id: "parent",
      icon: <Users className="w-5 h-5" />,
      title: "Parent",
      statement: "\"I want predictable progress without chaos—with transparent reporting.\"",
      details: "You seek evidence-based approaches and clear communication about what's working. No guesswork, no drama."
    },
    {
      id: "family",
      icon: <Home className="w-5 h-5" />,
      title: "Family",
      statement: "\"We value sanity and standards; this program respects both.\"",
      details: "You want high standards without burnout. Success through systematic improvement, not brute force hours."
    },
    {
      id: "performer",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "High performer",
      statement: "\"I'm buying variance control and calibration, not worksheets.\"",
      details: "You understand that your challenge isn't content knowledge—it's consistency, decision-making, and confidence calibration."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Who this is for
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            Clear fit indicators that respect your autonomy and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {identities.map((identity) => (
            <Card 
              key={identity.id}
              className={`p-6 border-2 transition-all duration-200 cursor-pointer ${
                selectedIdentity === identity.id 
                  ? 'border-accent bg-accent/5 shadow-lg' 
                  : 'border-neutral-200 hover:border-accent/30'
              }`}
              onClick={() => setSelectedIdentity(
                selectedIdentity === identity.id ? null : identity.id
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-accent/10" style={{ color: 'var(--accent-teal)' }}>
                    {identity.icon}
                  </div>
                  <h3 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                    {identity.title}
                  </h3>
                </div>

                <blockquote className="italic text-lg" style={{ color: 'var(--neutral-700)' }}>
                  {identity.statement}
                </blockquote>

                {selectedIdentity === identity.id && (
                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                      {identity.details}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className={`text-xs ${
                    selectedIdentity === identity.id ? 'text-accent' : 'text-neutral-400'
                  }`}>
                    {selectedIdentity === identity.id ? 'Click to collapse' : 'Click to expand'}
                  </div>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    selectedIdentity === identity.id ? 'bg-accent' : 'bg-neutral-300'
                  }`}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 border-accent/20 bg-accent/5 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                The quiet promise
              </h4>
              <p style={{ color: 'var(--neutral-700)' }}>
                If you value measurable truth, ethical coaching, and calm excellence, you'll feel at home here. 
                If you want shortcuts or panic-grind, we're not your people—and that's by design.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}