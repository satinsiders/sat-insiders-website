import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { StudentDataVisualization } from "./student-data-visualization";
import { motion } from "motion/react";
import { BarChart3, TrendingUp, Info } from "lucide-react";

export function ProofSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const metrics = [
    {
      id: "cac",
      title: "Confidence-Accuracy Match",
      description: "Are you right when you feel confident?",
      trend: "improves",
      chartType: "scatter",
      tooltip: "Tracks how well your confidence matches your actual performance. Better alignment means you know when you're right."
    },
    {
      id: "overconfidence",
      title: "Overconfidence Rate",
      description: "Feeling sure but getting it wrong",
      trend: "decreases",
      chartType: "bar",
      tooltip: "Measures how often you're very confident but incorrect. Lower numbers mean better self-awareness."
    },
    {
      id: "uncertainty",
      title: "Smart Uncertainty",
      description: "Knowing when to skip or flag questions",
      trend: "rises, then stabilizes",
      chartType: "stacked",
      tooltip: "Shows your ability to recognize when you're unsure and make smart decisions instead of random guessing."
    },
    {
      id: "compliance",
      title: "Strategy Following",
      description: "Using our methods when it matters",
      trend: "improves",
      chartType: "donut",
      tooltip: "Tracks how consistently you apply the strategies we teach during practice and tests."
    },
    {
      id: "variance",
      title: "Score Consistency",
      description: "How much your scores vary between tests",
      trend: "becomes more consistent",
      chartType: "area",
      tooltip: "Shows how consistent your performance becomes over time. Less variation means more predictable results."
    },
    {
      id: "roc",
      title: "Score Band Progress",
      description: "Your improvement rate at your level",
      trend: "clarifies trajectory",
      chartType: "sparkline",
      tooltip: "Analyzes your improvement rate within your current score range, accounting for your effort and strategy use."
    }
  ];

  return (
    <section id="proof" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2>
            How we track your progress
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
            We measure real improvement, not just test scores.
          </p>
        </div>

        <div className="space-y-12">
          {/* Student Data Visualization */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Student Progress Trajectories
              </motion.h3>
              <motion.p 
                style={{ color: 'var(--neutral-600)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Real student data showing how our methods work
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <StudentDataVisualization />
            </motion.div>
          </div>

          {/* Metrics Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 border-neutral-200 hover:shadow-lg transition-all duration-200 group hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                          {metric.title}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                          {metric.description}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-200">
                        <BarChart3 className="w-4 h-4" style={{ color: 'var(--accent-teal)' }} />
                      </div>
                    </div>

                    {/* Mini Chart Visualization */}
                    <div className="h-16 bg-neutral-50 rounded-lg p-2 flex items-end justify-center">
                      {metric.chartType === 'scatter' && (
                        <div className="w-full h-full relative">
                          <svg viewBox="0 0 80 40" className="w-full h-full">
                            <line x1="10" y1="35" x2="70" y2="5" stroke="var(--accent-teal)" strokeWidth="1.5" />
                            <circle cx="15" cy="30" r="1.5" fill="var(--accent-teal)" />
                            <circle cx="25" cy="25" r="1.5" fill="var(--accent-teal)" />
                            <circle cx="35" cy="20" r="1.5" fill="var(--accent-teal)" />
                            <circle cx="45" cy="15" r="1.5" fill="var(--accent-teal)" />
                            <circle cx="55" cy="10" r="1.5" fill="var(--accent-teal)" />
                          </svg>
                        </div>
                      )}
                      {metric.chartType === 'bar' && (
                        <div className="flex items-end justify-center space-x-1 h-full">
                          <div className="w-3 bg-red-200 rounded-t" style={{ height: '80%' }}></div>
                          <div className="w-3 bg-red-200 rounded-t" style={{ height: '60%' }}></div>
                          <div className="w-3 bg-red-200 rounded-t" style={{ height: '40%' }}></div>
                          <div className="w-3 bg-red-200 rounded-t" style={{ height: '20%' }}></div>
                        </div>
                      )}
                      {metric.chartType === 'area' && (
                        <div className="w-full h-full relative">
                          <svg viewBox="0 0 80 40" className="w-full h-full">
                            <path 
                              d="M 10 25 Q 30 15 50 20 Q 60 18 70 15" 
                              fill="none" 
                              stroke="var(--accent-teal)" 
                              strokeWidth="1.5"
                            />
                            <path 
                              d="M 10 30 Q 30 25 50 28 Q 60 25 70 25 L 70 35 L 10 35 Z" 
                              fill="var(--accent-teal)" 
                              fillOpacity="0.2"
                            />
                          </svg>
                        </div>
                      )}
                      {(metric.chartType === 'stacked' || metric.chartType === 'donut' || metric.chartType === 'sparkline') && (
                        <div className="flex items-center justify-center h-full">
                          <TrendingUp className="w-6 h-6" style={{ color: 'var(--accent-teal)' }} />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          metric.trend.includes('rises') || metric.trend.includes('clarifies') 
                            ? 'border-green-200 text-green-700' 
                            : metric.trend.includes('falls') 
                            ? 'border-blue-200 text-blue-700'
                            : 'border-amber-200 text-amber-700'
                        }`}
                      >
                        {metric.trend}
                      </Badge>
                      <div className="relative">
                        <button 
                          className="flex items-center gap-1 text-xs text-neutral-400 hover:text-accent transition-colors"
                          onClick={() => setActiveTooltip(activeTooltip === metric.id ? null : metric.id)}
                        >
                          <Info className="w-3 h-3" />
                          How to read
                        </button>
                        {activeTooltip === metric.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-white border border-neutral-200 rounded-lg shadow-lg z-10"
                          >
                            <div className="space-y-2">
                              <div className="font-medium text-sm" style={{ color: 'var(--primary-navy)' }}>
                                Understanding this metric:
                              </div>
                              <p className="text-xs text-neutral-600 leading-relaxed">
                                {metric.tooltip}
                              </p>
                              {metric.chartType === 'scatter' && (
                                <div className="text-xs text-neutral-500 bg-neutral-50 p-2 rounded">
                                  <strong>Chart shows:</strong> Each dot represents a test session. The upward line shows improving confidence-accuracy alignment over time.
                                </div>
                              )}
                              {metric.chartType === 'bar' && (
                                <div className="text-xs text-neutral-500 bg-neutral-50 p-2 rounded">
                                  <strong>Chart shows:</strong> Decreasing bar heights represent fewer instances of overconfidence over successive practice sessions.
                                </div>
                              )}
                              {metric.chartType === 'area' && (
                                <div className="text-xs text-neutral-500 bg-neutral-50 p-2 rounded">
                                  <strong>Chart shows:</strong> The narrowing band illustrates how score variance decreases, indicating more consistent performance.
                                </div>
                              )}
                            </div>
                            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neutral-200"></div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-6 text-sm bg-neutral-50 rounded-full px-6 py-3">
              <span style={{ color: 'var(--neutral-600)' }}>
                All data includes real context and timing—we show the complete picture, not just the wins.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}