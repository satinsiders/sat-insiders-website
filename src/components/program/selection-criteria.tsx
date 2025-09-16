import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { CheckCircle, X, TrendingUp, Clock, Target, Brain } from "lucide-react";

export function SelectionCriteria() {
  const requirements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Current SAT Score 1200+",
      description: "Demonstrated baseline competency in standardized testing",
      mandatory: true
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "8+ Week Commitment",
      description: "Sufficient time for our methodology to create lasting improvement",
      mandatory: true
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Target Score 1450+",
      description: "Ambitious goals that align with our program's capabilities",
      mandatory: true
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Willingness to embrace our systematic approach over familiar methods",
      mandatory: true
    }
  ];

  const notForYouIf = [
    "You're looking for a quick fix or miracle solution",
    "Your current score is below 1200",
    "You're not willing to invest significant time and effort",
    "You prefer traditional tutoring methods",
    "You're seeking the lowest-cost option available"
  ];

  const perfectFitIf = [
    "You're already high-achieving but want to reach the top 1%",
    "You understand that excellence requires premium resources",
    "You're willing to follow a systematic, proven methodology",
    "You value results over relationships in educational investments",
    "You seek mastery, not just score improvement"
  ];

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
              Selective Admission
            </Badge>
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--primary-navy)' }}>
              Admission Requirements
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              The Summit Program is designed for exceptional students who meet our rigorous standards. 
              We maintain selectivity to ensure program quality and peer caliber.
            </p>
          </motion.div>
        </div>

        {/* Requirements Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {requirements.map((requirement, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div 
                    className="p-3 rounded-xl bg-gradient-to-br from-accent-teal/10 to-accent-violet/10"
                    style={{ color: 'var(--accent-teal)' }}
                  >
                    {requirement.icon}
                  </div>
                  <Badge 
                    variant="outline"
                    className="border-green-200 text-green-700 bg-green-50"
                  >
                    Required
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                    {requirement.title}
                  </h3>
                  <p style={{ color: 'var(--neutral-600)' }}>
                    {requirement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Fit Assessment */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 border-2 border-red-100 bg-red-50/50 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-red-100">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-red-800">
                    Not the Right Fit If:
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {notForYouIf.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-red-200">
                  <p className="text-sm text-red-600 font-medium">
                    We respectfully decline applications that don't meet our standards.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Perfect Fit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 border-2 border-green-100 bg-green-50/50 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-800">
                    Perfect Fit If:
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {perfectFitIf.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-green-200">
                  <p className="text-sm text-green-600 font-medium">
                    If this describes you, we invite your application.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}