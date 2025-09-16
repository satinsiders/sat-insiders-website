import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "./ui/badge";
import { TrendingUp, Target } from "lucide-react";

interface DataPoint {
  id: string;
  confidence: number;
  accuracy: number;
  phase: 'before' | 'after';
  student: string;
  type: 'underconfident' | 'overconfident' | 'calibrated';
}

export function ConfidenceCalibrationMatrix() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  // More varied and realistic data points
  const dataPoints: DataPoint[] = [
    // Before - overconfident students (below diagonal)
    { id: 'b1', confidence: 90, accuracy: 62, phase: 'before', student: 'Alex', type: 'overconfident' },
    { id: 'b2', confidence: 85, accuracy: 58, phase: 'before', student: 'Sam', type: 'overconfident' },
    { id: 'b3', confidence: 78, accuracy: 45, phase: 'before', student: 'Jordan', type: 'overconfident' },
    { id: 'b4', confidence: 95, accuracy: 68, phase: 'before', student: 'Casey', type: 'overconfident' },
    { id: 'b5', confidence: 82, accuracy: 51, phase: 'before', student: 'Riley', type: 'overconfident' },
    
    // Before - underconfident students (above diagonal)
    { id: 'b6', confidence: 45, accuracy: 72, phase: 'before', student: 'Morgan', type: 'underconfident' },
    { id: 'b7', confidence: 38, accuracy: 65, phase: 'before', student: 'Taylor', type: 'underconfident' },
    { id: 'b8', confidence: 52, accuracy: 78, phase: 'before', student: 'Avery', type: 'underconfident' },
    { id: 'b9', confidence: 41, accuracy: 69, phase: 'before', student: 'Drew', type: 'underconfident' },
    
    // After - well-calibrated students (near diagonal)
    { id: 'a1', confidence: 88, accuracy: 85, phase: 'after', student: 'Alex', type: 'calibrated' },
    { id: 'a2', confidence: 82, accuracy: 84, phase: 'after', student: 'Sam', type: 'calibrated' },
    { id: 'a3', confidence: 75, accuracy: 78, phase: 'after', student: 'Jordan', type: 'calibrated' },
    { id: 'a4', confidence: 91, accuracy: 89, phase: 'after', student: 'Casey', type: 'calibrated' },
    { id: 'a5', confidence: 79, accuracy: 81, phase: 'after', student: 'Riley', type: 'calibrated' },
    { id: 'a6', confidence: 74, accuracy: 76, phase: 'after', student: 'Morgan', type: 'calibrated' },
    { id: 'a7', confidence: 68, accuracy: 71, phase: 'after', student: 'Taylor', type: 'calibrated' },
    { id: 'a8', confidence: 77, accuracy: 79, phase: 'after', student: 'Avery', type: 'calibrated' },
    { id: 'a9', confidence: 71, accuracy: 73, phase: 'after', student: 'Drew', type: 'calibrated' },
  ];

  const getPointColor = (point: DataPoint) => {
    return point.phase === 'before' ? 'var(--warning-amber)' : 'var(--success-emerald)';
  };

  const calculateCalibrationScore = (confidence: number, accuracy: number) => {
    return Math.max(0, 100 - Math.abs(confidence - accuracy));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 style={{ color: 'var(--primary-navy)' }}>Confidence Calibration Matrix</h3>
          <p className="text-sm text-neutral-500 mt-1">
            Tracking the alignment between student confidence and actual performance
          </p>
        </div>
      </div>

      <div className="relative bg-white rounded-2xl p-6 border border-neutral-200 overflow-hidden">
        {/* Key insights badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            Avg Calibration: +47%
          </Badge>
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-xs">
            <Target className="w-3 h-3 mr-1" />
            Variance Reduction: 73%
          </Badge>
        </div>

        <div className="relative">
          <svg viewBox="0 0 500 400" className="w-full h-96">
            {/* Grid lines */}
            {[...Array(6)].map((_, i) => (
              <g key={i}>
                {/* Vertical grid lines */}
                <line
                  x1={50 + i * 80}
                  y1="50"
                  x2={50 + i * 80}
                  y2="350"
                  stroke="var(--neutral-200)"
                  strokeWidth="1"
                  opacity="0.6"
                />
                {/* Horizontal grid lines */}
                <line
                  x1="50"
                  y1={50 + i * 60}
                  x2="450"
                  y2={50 + i * 60}
                  stroke="var(--neutral-200)"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>
            ))}

            {/* Axes */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="var(--neutral-400)" />
              </marker>
            </defs>
            
            {/* X-axis (Confidence) */}
            <line x1="50" y1="350" x2="460" y2="350" 
                  stroke="var(--neutral-400)" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Y-axis (Accuracy) */}
            <line x1="50" y1="350" x2="50" y2="40" 
                  stroke="var(--neutral-400)" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Perfect calibration line (diagonal) */}
            <motion.line
              x1="50" y1="350" x2="450" y2="50"
              stroke="var(--accent-teal)"
              strokeWidth="2"
              strokeDasharray="8,4"
              strokeOpacity="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Data points */}
            {dataPoints.map((point, index) => {
              const x = 50 + (point.confidence / 100) * 400;
              const y = 350 - (point.accuracy / 100) * 300;
              const isActive = activePoint === point.id;
              
              return (
                <motion.g key={point.id}>
                  {/* Connection lines for same student */}
                  {point.phase === 'after' && (
                    <motion.line
                      x1={50 + (dataPoints.find(p => p.student === point.student && p.phase === 'before')?.confidence || 0) / 100 * 400}
                      y1={350 - (dataPoints.find(p => p.student === point.student && p.phase === 'before')?.accuracy || 0) / 100 * 300}
                      x2={x}
                      y2={y}
                      stroke="var(--accent-teal)"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      strokeDasharray="2,2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.05 }}
                    />
                  )}
                  
                  {/* Data point */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isActive ? 7 : 5}
                    fill={getPointColor(point)}
                    fillOpacity="0.9"
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer drop-shadow-sm"
                    onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: point.phase === 'before' ? index * 0.05 : 1.2 + index * 0.05,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />

                  {/* Point tooltip */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.g
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <rect
                          x={x - 50}
                          y={y - 45}
                          width="100"
                          height="30"
                          fill="white"
                          stroke="var(--neutral-300)"
                          strokeWidth="1"
                          rx="6"
                          className="drop-shadow-lg"
                        />
                        <text
                          x={x}
                          y={y - 32}
                          textAnchor="middle"
                          className="text-xs font-medium"
                          fill="var(--primary-navy)"
                        >
                          {point.student}
                        </text>
                        <text
                          x={x}
                          y={y - 20}
                          textAnchor="middle"
                          className="text-xs"
                          fill="var(--neutral-600)"
                        >
                          {point.confidence}% → {point.accuracy}%
                        </text>
                      </motion.g>
                    )}
                  </AnimatePresence>
                </motion.g>
              );
            })}

            {/* Axis labels */}
            <text x="250" y="385" textAnchor="middle" className="text-sm font-medium" fill="var(--neutral-600)">
              Student Confidence (%)
            </text>
            <text x="15" y="200" textAnchor="middle" className="text-sm font-medium" fill="var(--neutral-600)" transform="rotate(-90, 15, 200)">
              Actual Accuracy (%)
            </text>

            {/* Scale labels */}
            {[0, 25, 50, 75, 100].map((value, i) => (
              <g key={value}>
                <text x={50 + i * 100} y="370" textAnchor="middle" className="text-xs" fill="var(--neutral-500)">
                  {value}
                </text>
                <text x="35" y={355 - i * 75} textAnchor="middle" className="text-xs" fill="var(--neutral-500)">
                  {value}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: 'var(--warning-amber)' }}></div>
            <span className="text-neutral-600">Before Training</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: 'var(--success-emerald)' }}></div>
            <span className="text-neutral-600">After Training</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 border-t-2 border-dashed" style={{ borderColor: 'var(--accent-teal)' }}></div>
            <span className="text-neutral-600">Perfect Calibration</span>
          </div>
        </div>
      </div>

      {/* Explanation text */}
      <div className="text-center text-sm text-neutral-600 space-y-1">
        <p>
          <strong>The closer to the diagonal line, the better calibrated the student.</strong>
        </p>
        <p>
          Points above the line indicate underconfidence, points below indicate overconfidence.
        </p>
      </div>
    </div>
  );
}