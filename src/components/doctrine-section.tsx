import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Brain, X, Target } from "lucide-react";

export function DoctrineSection() {
  const beliefs = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Our approach",
      belief: "Teaching the 'why' isn't enough—we train you to make the right decision quickly under pressure.",
      color: "accent"
    },
    {
      icon: <X className="w-6 h-6" />,
      title: "What doesn't work",
      belief: "\"Just do more questions and read the explanations.\"",
      color: "critical"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "What we build",
      belief: "Clear decision rules, time management skills, and strategies you can use when you're stressed.",
      color: "success"
    }
  ];

  const flankingTruths = [
    "More practice hours don't always mean higher scores (after ~1200). What matters is focused practice with good feedback.",
    "Starting with the hardest problems isn't smart. We start at the right level and build up systematically."
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="relative" style={{ color: 'var(--primary-navy)' }}>
              How we think about test prep
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-violet mx-auto rounded-full"></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              We focus on smart decision-making instead of just doing more practice problems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-8 border-neutral-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-neutral-50/50 h-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-4 rounded-xl shadow-sm ${
                        belief.color === 'accent' ? 'bg-accent/10 text-accent' :
                        belief.color === 'critical' ? 'bg-red-50 text-red-600' :
                        'bg-green-50 text-green-600'
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {belief.icon}
                    </motion.div>
                    <Badge 
                      variant="outline" 
                      className={`font-medium ${
                        belief.color === 'accent' ? 'border-accent/30 text-accent bg-accent/5' :
                        belief.color === 'critical' ? 'border-red-200 text-red-600 bg-red-50' :
                        'border-green-200 text-green-600 bg-green-50'
                      }`}
                    >
                      {belief.title}
                    </Badge>
                  </div>
                  
                  <p className="leading-relaxed text-lg" style={{ color: 'var(--neutral-700)' }}>
                    {belief.belief}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: 'var(--primary-navy)' }}>
              Two foundational principles
            </h3>
            <div className="w-12 h-0.5 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
              These core beliefs shape every decision we make about curriculum, pacing, and measurement.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {flankingTruths.map((truth, index) => (
              <motion.div 
                key={index} 
                className="relative p-10 bg-white rounded-3xl border-2 border-neutral-100 shadow-lg hover:shadow-xl hover:border-accent/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-violet rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-accent/30 to-accent-violet/30 rounded-full"></div>
                  <blockquote className="text-xl font-medium leading-relaxed" style={{ color: 'var(--neutral-800)' }}>
                    "{truth}"
                  </blockquote>
                  <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--accent-teal)' }}>
                    Principle {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}