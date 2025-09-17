import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Search, BookOpen, Target, Shield, BarChart3 } from "lucide-react";

export function MechanismSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const mechanismSteps = [
    {
      id: 1,
      icon: <Search className="w-6 h-6" />,
      title: "Diagnostic (with replication)",
      description: "Two spaced baselines + behavioral markers (guess rate, skip latency).",
      details: [
        "Behavioral pattern analysis beyond just scores",
        "Replication to identify consistent weak points",
        "Confidence calibration baseline measurement"
      ]
    },
    {
      id: 2,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Custom curriculum",
      description: "Dual-track design: defect repair (by question type) + variance control (pacing, stamina, decision boundaries).",
      details: [
        "Content gaps addressed systematically",
        "Decision rule installation for common traps",
        "Pacing strategies tailored to student patterns"
      ]
    },
    {
      id: 3,
      icon: <Target className="w-6 h-6" />,
      title: "Targeted tutoring (decision engineering)",
      description: "You practice rules, not vibes; failure becomes a tagged error class, not a personality trait.",
      details: [
        "Explicit decision frameworks for each question type",
        "Error categorization and systematic improvement",
        "Confidence calibration exercises"
      ]
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6" />,
      title: "Manager Care governance",
      description: "Continuous monitoring of session logs and tutor performance; bold decisions when needed.",
      details: [
        "Session quality audits and tutor calibration",
        "Student progress trajectory monitoring",
        "Proactive intervention when patterns shift"
      ]
    },
    {
      id: 5,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Monthly full-length (consolidation ritual)",
      description: "Not a grind—an orchestration checkpoint that desensitizes anxiety and validates strategy.",
      details: [
        "Strategic practice under realistic conditions",
        "Variance measurement and calibration",
        "Confidence building through controlled exposure"
      ]
    }
  ];

  return (
    <section id="mechanism" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            How our system actually works
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            A governed system, not "more explanations."
          </p>
        </div>

        <div className="space-y-6">
          {mechanismSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Card 
                className={`p-6 border-2 transition-all duration-200 cursor-pointer ${
                  activeStep === step.id 
                    ? 'border-accent shadow-lg bg-accent/5' 
                    : 'border-neutral-200 hover:border-accent/30 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="outline" className="w-8 h-8 p-0 flex items-center justify-center border-accent text-accent">
                          {step.id}
                        </Badge>
                      </motion.div>
                      <motion.div 
                        className="p-2 rounded-lg bg-accent/10" 
                        style={{ color: 'var(--accent-teal)' }}
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-teal)20' }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--neutral-600)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === step.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight 
                      className="w-5 h-5"
                      style={{ color: 'var(--accent-teal)' }}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-neutral-100"
                    >
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li 
                            key={detailIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ delay: detailIndex * 0.1 + 0.2, duration: 0.5 }}
                            ></motion.div>
                            <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                              {detail}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}</div>

        <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-start space-x-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
            </motion.div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--primary-navy)' }}>
                Your Progress, Continuously Protected
              </h4>
              <p style={{ color: 'var(--neutral-700)' }}>
                We monitor every session and tutor performance, making proactive adjustments to ensure your learning trajectory stays on track. If something isn't working, we change course immediately—no questions asked.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}