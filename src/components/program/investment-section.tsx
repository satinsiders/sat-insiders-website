import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import {
  Crown,
  Diamond,
  Gem,
  CheckCircle,
  Star,
} from "lucide-react";

interface InvestmentSectionProps {
  onStartApplication: () => void;
}

export function InvestmentSection({
  onStartApplication,
}: InvestmentSectionProps) {
  const inclusions = [
    "Personal Strategy Architect (dedicated throughout program)",
    "Neuroplasticity training sessions (48 hours total)",
    "Real-time performance analytics and optimization",
    "Confidence calibration and variance control protocols",
    "White-glove family communication and progress reports",
    "Direct access to program leadership",
    "Guaranteed 150+ point improvement",
    "Post-program performance monitoring (3 months)",
  ];

  const valueComparison = [
    {
      item: "Elite Private Tutoring (48 hours)",
      amount: "$6,000",
      description:
        "Comprehensive one-on-one instruction with elite educators",
    },
    {
      item: "Neuroplasticity Assessment & Training",
      amount: "$2,500",
      description: "Proprietary cognitive optimization",
    },
    {
      item: "Performance Analytics Platform",
      amount: "$600",
      description: "Custom-built for every student",
    },
    {
      item: "Strategy Architect Dedication",
      amount: "$2,000",
      description:
        "Executive-level mentorship and strategic oversight",
    },
    {
      item: "Family Communication & Reporting",
      amount: "$800",
      description: "White-glove service standards",
    },
  ];

  const totalValue = valueComparison.reduce(
    (sum, item) =>
      sum +
      parseInt(item.amount.replace("$", "").replace(",", "")),
    0,
  );

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50/50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="border-accent-violet/30 text-accent-violet bg-accent-violet/5 mb-4"
            >
              <Diamond className="w-4 h-4 mr-2" />
              Premium Investment
            </Badge>
            <h2
              className="text-5xl font-bold mb-6"
              style={{ color: "var(--primary-navy)" }}
            >
              Investment in{" "}
              <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--neutral-600)" }}
            >
              When you're accustomed to the finest things in
              life, compromise isn't an option. The Summit
              Program represents the pinnacle of SAT
              preparation.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Value Breakdown */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-0 shadow-lg bg-white/90">
              <div className="space-y-6">
                <h3
                  className="text-2xl font-bold flex items-center space-x-3"
                  style={{ color: "var(--primary-navy)" }}
                >
                  <Gem className="w-6 h-6 text-accent-violet" />
                  <span>Program Value Analysis</span>
                </h3>

                <div className="space-y-4">
                  {valueComparison.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start py-4 border-b border-neutral-100 last:border-0"
                    >
                      <div className="flex-1">
                        <div
                          className="font-medium"
                          style={{
                            color: "var(--primary-navy)",
                          }}
                        >
                          {item.item}
                        </div>
                        <div
                          className="text-sm mt-1"
                          style={{
                            color: "var(--neutral-500)",
                          }}
                        >
                          {item.description}
                        </div>
                      </div>
                      <div
                        className="font-bold tabular-nums"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        {item.amount}
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t-2 border-primary/20">
                    <div className="flex justify-between items-center">
                      <div
                        className="font-bold text-lg"
                        style={{ color: "var(--primary-navy)" }}
                      >
                        Individual Component Value
                      </div>
                      <div
                        className="font-bold text-lg tabular-nums"
                        style={{ color: "var(--primary-navy)" }}
                      >
                        ${totalValue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* What's Included */}
            <Card className="p-8 border-0 shadow-lg bg-white/90">
              <div className="space-y-6">
                <h3
                  className="text-2xl font-bold flex items-center space-x-3"
                  style={{ color: "var(--primary-navy)" }}
                >
                  <Crown className="w-6 h-6 text-accent-teal" />
                  <span>Complete Program Includes</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {inclusions.map((inclusion, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span
                        style={{ color: "var(--neutral-600)" }}
                      >
                        {inclusion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Investment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 border-2 border-accent-violet/20 bg-gradient-to-br from-white via-accent-violet/5 to-white shadow-2xl">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <Badge
                    variant="outline"
                    className="border-accent-violet/30 text-accent-violet bg-accent-violet/10"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    The Summit Program
                  </Badge>

                  <div className="space-y-2">
                    <div
                      className="text-sm"
                      style={{ color: "var(--neutral-500)" }}
                    >
                      Exceptional Value
                    </div>
                    <div
                      className="text-5xl font-bold tabular-nums"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      $10,500
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--neutral-500)" }}
                    >
                      Complete transformation program
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-sm font-medium text-green-800 mb-1">
                      You Save $1400
                    </div>
                    <div className="text-xs text-green-600">
                      Compared to individual component value
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent-teal via-accent-teal to-accent-violet hover:opacity-90 text-white py-4 text-lg font-medium rounded-xl shadow-lg shadow-accent-teal/25"
                    onClick={onStartApplication}
                  >
                    Begin Application
                  </Button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--neutral-400)" }}
                  >
                    Applications reviewed within 48 hours • No
                    commitment until accepted
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-neutral-200">
                  <div className="text-center space-y-3">
                    <h4
                      className="font-semibold"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      Flexible Investment Options
                    </h4>
                    <div
                      className="space-y-2 text-sm"
                      style={{ color: "var(--neutral-600)" }}
                    >
                      <div>
                        • Payment in full: 5% courtesy discount
                      </div>
                      <div>• Two installments available</div>
                      <div>
                        • Family office billing accommodated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Investment Philosophy */}
        <motion.div
          className="text-center space-y-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent-teal/5 to-accent-violet/5 rounded-3xl p-12 border border-accent-teal/10">
            <div className="space-y-6 max-w-4xl mx-auto">
              <h3
                className="text-3xl font-bold"
                style={{ color: "var(--primary-navy)" }}
              >
                An Investment in Your Future
              </h3>

              <p
                className="text-lg"
                style={{ color: "var(--neutral-600)" }}
              >
                Families who choose The Summit Program
                understand that true education is an investment,
                not an expense. When you consider the lifetime
                value of elite college admission—access to
                networks, opportunities, and experiences that
                shape the trajectory of success—the choice
                becomes clear.
              </p>

              <div
                className="text-base"
                style={{ color: "var(--neutral-500)" }}
              >
                "The best investment you can make is in your own
                abilities. Anything you invest in yourself, you
                get back ten-fold." — Warren Buffett
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}