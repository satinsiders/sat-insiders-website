import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ConfidenceCalibrationMatrix } from "./confidence-calibration-matrix";
import { motion } from "motion/react";

interface HeroProps {
  onStartFitCheck: () => void;
}

export function Hero({ onStartFitCheck }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="border-accent/20 text-accent"
              >
                We only take students we can actually help
              </Badge>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                style={{ color: "var(--primary-navy)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                The Complete SAT Education System for Those Who
                Refuse to Settle for Average.
              </motion.h1>

              <div className="space-y-4">
                <motion.p
                  className="text-xl"
                  style={{ color: "var(--neutral-700)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Win by decision, not by doing more worksheets.
                </motion.p>
                <motion.p
                  style={{ color: "var(--neutral-500)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  For students who need to perform consistently under pressure, we teach smart decision-making, improve test-taking confidence, and help you get your best score when it counts.
                </motion.p>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-200 group"
                onClick={onStartFitCheck}
              >
                Start a 3-minute Fit Check
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neutral-300 hover:bg-neutral-50 hover:border-accent transition-all duration-200"
                onClick={() => {
                  const proofSection = document.getElementById('proof');
                  if (proofSection) {
                    proofSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See How We Measure Progress
              </Button>
            </motion.div>

            <motion.div
              className="text-sm text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="inline-flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                Confidence training included
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">
              <ConfidenceCalibrationMatrix />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}