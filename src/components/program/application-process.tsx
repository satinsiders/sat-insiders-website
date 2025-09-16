import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { FileText, Users, Star, Crown, Clock, CheckCircle, ArrowRight } from "lucide-react";

interface ApplicationProcessProps {
  onStartApplication: () => void;
}

export function ApplicationProcess({ onStartApplication }: ApplicationProcessProps) {
  const steps = [
    {
      number: 1,
      icon: <FileText className="w-6 h-6" />,
      title: "Initial Application",
      duration: "5 minutes",
      description: "Submit your academic profile and goals",
      details: "Complete our streamlined application form with your current SAT score, target goals, and academic background. This helps us determine initial fit."
    },
    {
      number: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Strategy Consultation",
      duration: "30 minutes",
      description: "Video call with our Strategy Architect",
      details: "A personalized discussion about your goals, learning style, and how The Summit Program can accelerate your progress."
    },
    {
      number: 3,
      icon: <Star className="w-6 h-6" />,
      title: "Cognitive Assessment",
      duration: "45 minutes",
      description: "Proprietary diagnostic evaluation",
      details: "Our advanced assessment measures not just knowledge gaps, but cognitive patterns and decision-making under pressure."
    },
    {
      number: 4,
      icon: <Crown className="w-6 h-6" />,
      title: "Admission Decision",
      duration: "24 hours",
      description: "Program acceptance notification",
      details: "We'll inform you of our decision and, if accepted, provide your personalized program roadmap and next steps."
    }
  ];

  const expectations = [
    {
      title: "Response Time",
      description: "Initial application review within 24 hours"
    },
    {
      title: "Acceptance Rate",
      description: "Approximately 35% of qualified applicants"
    },
    {
      title: "Cohort Start",
      description: "January 2026 cohort (2.5 months to March 14th SAT)"
    },
    {
      title: "Communication",
      description: "Direct contact with senior leadership throughout"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
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
              <Crown className="w-4 h-4 mr-2" />
              Selective Admission Process
            </Badge>
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--primary-navy)' }}>
              Your Path to <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">Membership</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              Our application process is designed to ensure mutual fit. We're selective not for exclusivity's sake, 
              but to guarantee that every student receives the full value of our methodology.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-teal to-accent-violet text-white flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div 
                        className="p-2 rounded-lg bg-accent-teal/10"
                        style={{ color: 'var(--accent-teal)' }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <Badge 
                      variant="outline"
                      className="border-neutral-300 text-neutral-600 text-xs"
                    >
                      {step.duration}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--primary-navy)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent-teal)' }}>
                      {step.description}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
                      {step.details}
                    </p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-accent-teal/30" />
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expectations Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {expectations.map((expectation, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg bg-gradient-to-br from-white to-neutral-50/50">
              <div className="space-y-3">
                <h4 className="font-semibold" style={{ color: 'var(--primary-navy)' }}>
                  {expectation.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                  {expectation.description}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-12 border-0 shadow-xl bg-gradient-to-br from-primary/5 via-white to-accent-violet/5">
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold" style={{ color: 'var(--primary-navy)' }}>
                  Ready to Begin Your Application?
                </h3>
                <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                  Take the first step toward joining an exclusive community of high-achieving students 
                  who refuse to settle for anything less than extraordinary results.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent-teal via-accent-teal to-accent-violet hover:opacity-90 text-white px-12 py-4 text-lg font-medium rounded-full shadow-xl shadow-accent-teal/25"
                  onClick={onStartApplication}
                >
                  Start Your Application
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.div>
                </Button>
                
                <p className="text-sm" style={{ color: 'var(--neutral-400)' }}>
                  No obligation • Decisions within 48 hours • Join the top 1%
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                    Secure application process
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent-teal flex-shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                    Fast decision timeline
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="w-5 h-5 text-accent-violet flex-shrink-0" />
                  <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                    Elite community access
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}