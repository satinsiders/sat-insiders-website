import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Crown, Shield, TrendingUp } from "lucide-react";

interface ExclusiveHeroProps {
  onStartApplication: () => void;
}

export function ExclusiveHero({ onStartApplication }: ExclusiveHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent-violet/5 py-32 lg:py-40">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,0,255,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,166,166,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        <div className="text-center space-y-12">
          
          {/* Authority Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Badge 
              variant="outline" 
              className="border-accent-violet/30 text-accent-violet bg-accent-violet/5 px-6 py-2 text-sm font-medium"
            >
              <Crown className="w-4 h-4 mr-2" />
              By Application Only
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent-teal to-accent-violet bg-clip-text text-transparent">
                The Summit Program
              </span>
            </h1>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl font-medium" style={{ color: 'var(--primary-navy)' }}>
                Where exceptional students achieve extraordinary results
              </p>
              
              <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--neutral-500)' }}>
                An invitation-only program designed for students already scoring 1200+ who demand nothing less than perfection. 
                Now accepting applications for our January 2026 cohort—limited to 24 students total.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50">
              <div className="text-3xl font-bold tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                1480+
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--neutral-600)' }}>
                Average Final Score
              </div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50">
              <div className="text-3xl font-bold tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                24
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--neutral-600)' }}>
                Students Per Cohort
              </div>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50">
              <div className="text-3xl font-bold tabular-nums" style={{ color: 'var(--primary-navy)' }}>
                &lt;3%
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--neutral-600)' }}>
                Score Variance
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent-teal via-accent-teal to-accent-violet hover:opacity-90 text-white px-12 py-4 text-lg font-medium rounded-full shadow-xl shadow-accent-teal/25 transition-all duration-300"
              onClick={onStartApplication}
            >
              Apply for Consideration
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
              Applications reviewed within 48 hours
            </p>
          </motion.div>

          {/* Confidence Indicators */}
          <motion.div
            className="flex justify-center space-x-8 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--neutral-500)' }}>
              <Shield className="w-4 h-4 text-accent-teal" />
              <span>Guaranteed Results</span>
            </div>
            <div className="flex items-center space-x-2 text-sm" style={{ color: 'var(--neutral-500)' }}>
              <TrendingUp className="w-4 h-4 text-accent-violet" />
              <span>Elite Methodology</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}