import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { ConfidenceCalibrationMatrix } from "../confidence-calibration-matrix";

interface HeroRevampedProps {
  onStartFitCheck: () => void;
}

export function HeroRevamped({ onStartFitCheck }: HeroRevampedProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-neutral-50/30 pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-96 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Parent-focused Content */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Professional badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="border-accent/20 text-accent bg-accent/5 font-normal px-4 py-2"
              >
                15+ years experience • 500+ families served
              </Badge>
            </motion.div>

            {/* Results-focused headline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "var(--primary-navy)" }}>
                Your teenager's path to{" "}
                <span className="bg-gradient-to-r from-accent-teal to-primary bg-clip-text text-transparent">
                  their dream college
                </span>{" "}
                starts here
              </h1>

              <p className="text-lg leading-relaxed max-w-lg" style={{ color: "var(--neutral-600)" }}>
                Stop worrying about test prep. Our proven system delivers the score improvements your student needs for college admission and merit scholarships.
              </p>
            </motion.div>

            {/* ROI emphasis */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center p-4 bg-white/60 rounded-xl border border-white/40">
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-sm text-muted-foreground">Average Score Increase</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-xl border border-white/40">
                <div className="text-2xl font-bold text-accent">$50K+</div>
                <div className="text-sm text-muted-foreground">Average Merit Aid Earned</div>
              </div>
            </motion.div>

            {/* Clear CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent-teal to-primary hover:opacity-90 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300"
                onClick={onStartFitCheck}
              >
                See If We Can Help Your Student
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                3-minute assessment • No commitment required
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Clean Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg" style={{ color: "var(--primary-navy)" }}>
                    Student Progress Tracking
                  </h3>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Real Results
                  </Badge>
                </div>
              </div>
              <ConfidenceCalibrationMatrix />
            </div>

            {/* Success indicator */}
            <motion.div
              className="absolute -bottom-6 -left-6"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-green-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-700">Proven Results Since 2009</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}