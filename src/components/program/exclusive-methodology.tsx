import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Brain, Zap, Crown, Target } from "lucide-react";

export function ExclusiveMethodology() {
  const pillars = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cognitive Architecture",
      description: "We don't teach test-taking tricks. We rebuild how you think about problems, creating neural pathways optimized for the SAT's specific cognitive demands.",
      details: [
        "Pattern recognition training at the neurological level",
        "Decision-tree optimization for each question type",
        "Cognitive load management under time pressure"
      ],
      color: "from-accent-teal to-accent-teal/70"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Precision Calibration",
      description: "Our proprietary system measures not just accuracy, but confidence calibration—ensuring you know what you know and trust your instincts.",
      details: [
        "Real-time confidence tracking algorithms",
        "Variance control across multiple test administrations",
        "Personalized risk/reward optimization"
      ],
      color: "from-accent-violet to-accent-violet/70"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Elite Execution",
      description: "Every element of our program is designed to match the standards expected by families accustomed to excellence in all areas of life.",
      details: [
        "White-glove service and communication",
        "Flexible scheduling around demanding lifestyles",
        "Direct access to senior leadership"
      ],
      color: "from-primary to-primary/70"
    }
  ];

  const differentiators = [
    {
      traditional: "Mass-market test prep with generic strategies",
      summit: "Bespoke methodology calibrated to high-achieving students"
    },
    {
      traditional: "Focus on content review and practice tests",
      summit: "Neuroplasticity training and cognitive optimization"
    },
    {
      traditional: "Standard tutoring with rotating instructors",
      summit: "Dedicated team of specialized SAT analysts and strategists"
    },
    {
      traditional: "Price-competitive with basic guarantees",
      summit: "Premium investment with transformation guarantee"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50/30 to-white">
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
              className="border-primary/20 text-primary bg-primary/5 mb-4"
            >
              Proprietary Methodology
            </Badge>
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--primary-navy)' }}>
              The Summit <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              What separates exceptional students from extraordinary results isn't more practice—it's access to methods that simply don't exist elsewhere.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <div className="space-y-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.color} text-white w-fit`}>
                    {pillar.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--primary-navy)' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
                      {pillar.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    {pillar.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0"></div>
                        <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-12 border-0 shadow-xl bg-gradient-to-br from-white via-white to-neutral-50/50">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: 'var(--primary-navy)' }}>
                  Why Traditional Test Prep Falls Short
                </h3>
                <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                  A direct comparison reveals why high-achieving students need a fundamentally different approach.
                </p>
              </div>
              
              <div className="space-y-1 overflow-hidden rounded-2xl border border-neutral-200">
                {/* Header */}
                <div className="grid grid-cols-2 bg-gradient-to-r from-primary to-accent-teal text-white">
                  <div className="p-6 font-semibold text-lg">
                    Traditional Test Prep
                  </div>
                  <div className="p-6 font-semibold text-lg border-l border-white/20">
                    The Summit Program
                  </div>
                </div>
                
                {/* Rows */}
                {differentiators.map((diff, index) => (
                  <div key={index} className="grid grid-cols-2 bg-white hover:bg-neutral-50/50 transition-colors">
                    <div className="p-6 text-neutral-600 border-r border-neutral-100">
                      {diff.traditional}
                    </div>
                    <div className="p-6 font-medium" style={{ color: 'var(--primary-navy)' }}>
                      {diff.summit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Results Promise */}
        <motion.div
          className="text-center space-y-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent-teal/5 to-accent-violet/5 rounded-3xl p-12 border border-accent-teal/10">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-r from-accent-teal to-accent-violet">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold" style={{ color: 'var(--primary-navy)' }}>
                The Summit Guarantee
              </h3>
              
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
                We're so confident in our methodology that we guarantee a minimum 150-point improvement 
                or provide additional coaching at no cost. This isn't just confidence—it's proof that when 
                you invest in true excellence, results are inevitable.
              </p>
              
              <div className="flex justify-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                    150+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                    Point Guarantee
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                    0%
                  </div>
                  <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                    Failure Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}