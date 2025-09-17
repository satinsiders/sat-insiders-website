import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import {
  Target,
  Zap,
  Brain,
  Award,
} from "lucide-react";

interface StudentDataPoint {
  session: number;
  score: number;
  confidence: number;
  accuracy: number;
  variance: number;
  date: string;
}

interface StudentProfile {
  id: string;
  name: string;
  startScore: number;
  currentScore: number;
  sessions: number;
  timeFrame: string;
  constraint: string;
  improvement: number;
  data: StudentDataPoint[];
  metrics: {
    confidenceAccuracy: number;
    varianceReduction: number;
    overconfidenceRate: number;
    decisionCompliance: number;
  };
}

export function StudentDataVisualization() {
  const [selectedStudent, setSelectedStudent] =
    useState<string>("student-1");
  const [hoveredPoint, setHoveredPoint] = useState<
    number | null
  >(null);
  const [viewMode, setViewMode] = useState<
    "absolute" | "normalized"
  >("absolute");

  const studentProfiles: StudentProfile[] = [
    {
      id: "student-1",
      name: "Alex K.",
      startScore: 1350,
      currentScore: 1490,
      sessions: 12,
      timeFrame: "6 weeks",
      constraint: "Limited prep time",
      improvement: 140,
      metrics: {
        confidenceAccuracy: 0.87,
        varianceReduction: 0.73,
        overconfidenceRate: 0.12,
        decisionCompliance: 0.94,
      },
      data: [
        {
          session: 1,
          score: 1350,
          confidence: 65,
          accuracy: 68,
          variance: 95, // Increased from 85
          date: "Week 1",
        },
        {
          session: 2,
          score: 1360,
          confidence: 68,
          accuracy: 71,
          variance: 88, // Increased from 78
          date: "Week 1",
        },
        {
          session: 3,
          score: 1380,
          confidence: 72,
          accuracy: 74,
          variance: 82, // Increased from 72
          date: "Week 2",
        },
        {
          session: 4,
          score: 1390,
          confidence: 75,
          accuracy: 78,
          variance: 78, // Increased from 65
          date: "Week 2",
        },
        {
          session: 5,
          score: 1320, // Bigger dip from 1320
          confidence: 79,
          accuracy: 82,
          variance: 95, // Much higher variance at dip
          date: "Week 3",
        },
        {
          session: 6,
          score: 1350, // More gradual recovery
          confidence: 82,
          accuracy: 84,
          variance: 72, // Gradual variance reduction
          date: "Week 4",
        },
        {
          session: 7,
          score: 1390, // More gradual recovery
          confidence: 84,
          accuracy: 86,
          variance: 58, // Gradual variance reduction
          date: "Week 4",
        },
        {
          session: 8,
          score: 1440, // More gradual recovery
          confidence: 86,
          accuracy: 87,
          variance: 48, // Gradual variance reduction
          date: "Week 5",
        },
        {
          session: 9,
          score: 1450, // More gradual recovery
          confidence: 87,
          accuracy: 88,
          variance: 42, // Gradual variance reduction
          date: "Week 5",
        },
        {
          session: 10,
          score: 1470, // More gradual recovery
          confidence: 88,
          accuracy: 89,
          variance: 38, // Gradual variance reduction
          date: "Week 6",
        },
        {
          session: 11,
          score: 1480,
          confidence: 89,
          accuracy: 90,
          variance: 32,
          date: "Week 6",
        },
        {
          session: 12,
          score: 1490,
          confidence: 90,
          accuracy: 90,
          variance: 28,
          date: "Week 6",
        },
      ],
    },
    {
      id: "student-2",
      name: "Jordan M.",
      startScore: 1420,
      currentScore: 1580,
      sessions: 12,
      timeFrame: "4 weeks",
      constraint: "Perfectionist anxiety",
      improvement: 130,
      metrics: {
        confidenceAccuracy: 0.92,
        varianceReduction: 0.68,
        overconfidenceRate: 0.08,
        decisionCompliance: 0.96,
      },
      data: [
        {
          session: 1,
          score: 1420,
          confidence: 85,
          accuracy: 78,
          variance: 65,
          date: "Week 1",
        },
        {
          session: 2,
          score: 1440,
          confidence: 86,
          accuracy: 82,
          variance: 62,
          date: "Week 1",
        },
        {
          session: 3,
          score: 1440,
          confidence: 87,
          accuracy: 84,
          variance: 58,
          date: "Week 1",
        },
        {
          session: 4,
          score: 1450,
          confidence: 88,
          accuracy: 86,
          variance: 55,
          date: "Week 2",
        },
        {
          session: 5,
          score: 1480,
          confidence: 89,
          accuracy: 88,
          variance: 52,
          date: "Week 2",
        },
        {
          session: 6,
          score: 1500,
          confidence: 90,
          accuracy: 89,
          variance: 48,
          date: "Week 2",
        },
        {
          session: 7,
          score: 1510,
          confidence: 91,
          accuracy: 90,
          variance: 45,
          date: "Week 3",
        },
        {
          session: 8,
          score: 1520,
          confidence: 91,
          accuracy: 91,
          variance: 42,
          date: "Week 3",
        },
        {
          session: 9,
          score: 1540,
          confidence: 92,
          accuracy: 92,
          variance: 38,
          date: "Week 3",
        },
        {
          session: 10,
          score: 1530,
          confidence: 92,
          accuracy: 92,
          variance: 35,
          date: "Week 4",
        },
        {
          session: 11,
          score: 1550,
          confidence: 93,
          accuracy: 93,
          variance: 32,
          date: "Week 4",
        },
        {
          session: 12,
          score: 1580,
          confidence: 94,
          accuracy: 94,
          variance: 28,
          date: "Week 4",
        },
      ],
    },
    {
      id: "student-3",
      name: "Taylor B.",
      startScore: 1180,
      currentScore: 1470,
      sessions: 30,
      timeFrame: "12 weeks",
      constraint: "Student athlete schedule",
      improvement: 290,
      metrics: {
        confidenceAccuracy: 0.84,
        varianceReduction: 0.76,
        overconfidenceRate: 0.15,
        decisionCompliance: 0.91,
      },
      data: [
        {
          session: 1,
          score: 1180,
          confidence: 62,
          accuracy: 65,
          variance: 92,
          date: "Week 1",
        },
        {
          session: 3,
          score: 1190,
          confidence: 64,
          accuracy: 67,
          variance: 88,
          date: "Week 1",
        },
        {
          session: 5,
          score: 1230,
          confidence: 66,
          accuracy: 69,
          variance: 84,
          date: "Week 2",
        },
        {
          session: 7,
          score: 1220,
          confidence: 68,
          accuracy: 72,
          variance: 80,
          date: "Week 2",
        },
        {
          session: 9,
          score: 1270,
          confidence: 71,
          accuracy: 74,
          variance: 76,
          date: "Week 3",
        },
        {
          session: 11,
          score: 1270,
          confidence: 73,
          accuracy: 76,
          variance: 72,
          date: "Week 4",
        },
        {
          session: 13,
          score: 1310,
          confidence: 75,
          accuracy: 78,
          variance: 68,
          date: "Week 5",
        },
        {
          session: 15,
          score: 1330,
          confidence: 77,
          accuracy: 80,
          variance: 64,
          date: "Week 6",
        },
        {
          session: 17,
          score: 1330,
          confidence: 79,
          accuracy: 82,
          variance: 60,
          date: "Week 7",
        },
        {
          session: 19,
          score: 1370,
          confidence: 81,
          accuracy: 84,
          variance: 56,
          date: "Week 8",
        },
        {
          session: 21,
          score: 1380,
          confidence: 83,
          accuracy: 86,
          variance: 52,
          date: "Week 9",
        },
        {
          session: 23,
          score: 1400,
          confidence: 85,
          accuracy: 87,
          variance: 48,
          date: "Week 10",
        },
        {
          session: 25,
          score: 1430,
          confidence: 86,
          accuracy: 88,
          variance: 44,
          date: "Week 10",
        },
        {
          session: 27,
          score: 1420,
          confidence: 87,
          accuracy: 89,
          variance: 40,
          date: "Week 11",
        },
        {
          session: 28,
          score: 1450,
          confidence: 88,
          accuracy: 90,
          variance: 38,
          date: "Week 11",
        },
        {
          session: 29,
          score: 1460,
          confidence: 89,
          accuracy: 91,
          variance: 35,
          date: "Week 12",
        },
        {
          session: 30,
          score: 1470,
          confidence: 90,
          accuracy: 92,
          variance: 32,
          date: "Week 12",
        },
      ],
    },
  ];

  const selectedProfile = studentProfiles.find(
    (p) => p.id === selectedStudent,
  )!;

  return (
    <div className="space-y-8">
      {/* Student Selector */}
      <div className="flex flex-wrap gap-3 justify-center">
        {studentProfiles.map((profile) => (
          <motion.button
            key={profile.id}
            onClick={() => setSelectedStudent(profile.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedStudent === profile.id
                ? "border-accent bg-accent/5 shadow-lg"
                : "border-neutral-200 hover:border-accent/30 bg-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="text-sm font-medium"
              style={{ color: "var(--primary-navy)" }}
            >
              {profile.name}
            </div>
            <div className="text-xs text-neutral-500">
              {profile.constraint}
            </div>
            <div
              className="text-lg font-medium mt-1"
              style={{ color: "var(--accent-teal)" }}
            >
              +{profile.improvement}
            </div>
          </motion.button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress Chart */}
        <Card className="col-span-2 p-8 border-neutral-200">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 style={{ color: "var(--primary-navy)" }}>
                  Score Trajectory: {selectedProfile.name}
                </h3>
                <p className="text-sm text-neutral-500">
                  SAT score improvement over{" "}
                  {selectedProfile.timeFrame} •{" "}
                  {selectedProfile.sessions} sessions
                </p>
              </div>
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="border-accent/20 text-accent"
                >
                  +{selectedProfile.improvement} points
                </Badge>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-600">
                View:
              </span>
              <div className="flex bg-neutral-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("absolute")}
                  className={`px-3 py-1 text-sm rounded transition-all ${
                    viewMode === "absolute"
                      ? "bg-white text-primary shadow-sm"
                      : "text-neutral-600 hover:text-primary"
                  }`}
                >
                  Absolute View
                </button>
                <button
                  onClick={() => setViewMode("normalized")}
                  className={`px-3 py-1 text-sm rounded transition-all ${
                    viewMode === "normalized"
                      ? "bg-white text-primary shadow-sm"
                      : "text-neutral-600 hover:text-primary"
                  }`}
                >
                  Per-Band Normalized
                </button>
              </div>
            </div>

            {/* Interactive Chart */}
            <div className="h-96 relative">
              <svg
                viewBox="0 0 600 350"
                className="w-full h-full"
              >
                {/* Grid */}
                <defs>
                  <pattern
                    id="chartGrid"
                    width="50"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 50 0 L 0 0 0 30"
                      fill="none"
                      stroke="var(--neutral-200)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect
                  x="50"
                  y="60"
                  width="450"
                  height="220"
                  fill="url(#chartGrid)"
                />

                {/* Chart title */}
                <text
                  x="275"
                  y="25"
                  textAnchor="middle"
                  className="text-sm font-medium"
                  fill="var(--primary-navy)"
                >
                  {viewMode === "absolute"
                    ? "SAT Score Progress"
                    : "Normalized Improvement (%)"}
                </text>

                {/* Y-axis labels */}
                <g>
                  {viewMode === "absolute" ? (
                    <>
                      <text
                        x="40"
                        y="70"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1600
                      </text>
                      <text
                        x="40"
                        y="110"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1500
                      </text>
                      <text
                        x="40"
                        y="150"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1400
                      </text>
                      <text
                        x="40"
                        y="190"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1300
                      </text>
                      <text
                        x="40"
                        y="230"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1200
                      </text>
                      <text
                        x="40"
                        y="270"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        1100
                      </text>
                    </>
                  ) : (
                    <>
                      <text
                        x="40"
                        y="70"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        +15%
                      </text>
                      <text
                        x="40"
                        y="110"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        +10%
                      </text>
                      <text
                        x="40"
                        y="150"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        +5%
                      </text>
                      <text
                        x="40"
                        y="190"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        +2%
                      </text>
                      <text
                        x="40"
                        y="230"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        0%
                      </text>
                      <text
                        x="40"
                        y="270"
                        className="text-xs"
                        fill="var(--neutral-500)"
                        textAnchor="end"
                      >
                        -2%
                      </text>
                    </>
                  )}
                </g>

                {/* X-axis labels */}
                <g>
                  <text
                    x="80"
                    y="300"
                    className="text-xs"
                    fill="var(--neutral-500)"
                    textAnchor="middle"
                  >
                    Start
                  </text>
                  <text
                    x="275"
                    y="300"
                    className="text-xs"
                    fill="var(--neutral-500)"
                    textAnchor="middle"
                  >
                    Mid
                  </text>
                  <text
                    x="470"
                    y="300"
                    className="text-xs"
                    fill="var(--neutral-500)"
                    textAnchor="middle"
                  >
                    End
                  </text>
                </g>

                {/* Score line */}
                <path
                  d={`M ${selectedProfile.data
                    .map((d, i) => {
                      const x =
                        80 +
                        (i * 390) /
                          (selectedProfile.data.length - 1);
                      let y;
                      if (viewMode === "absolute") {
                        y =
                          270 - ((d.score - 1100) / 500) * 200;
                      } else {
                        // Normalized view: show improvement percentage
                        const improvementPercent =
                          ((d.score -
                            selectedProfile.startScore) /
                            selectedProfile.startScore) *
                          100;
                        y =
                          270 -
                          (Math.max(-2, improvementPercent) +
                            2) *
                            12;
                      }
                      return `${x},${y}`;
                    })
                    .join(" L ")}`}
                  fill="none"
                  stroke="var(--accent-teal)"
                  strokeWidth="3"
                  className="drop-shadow-sm"
                />

                {/* Confidence area */}
                <path
                  d={`M ${selectedProfile.data
                    .map(
                      (d, i) =>
                        `${80 + (i * 390) / (selectedProfile.data.length - 1)},${270 - d.confidence * 2}`,
                    )
                    .join(" L ")} L 470,270 L 80,270 Z`}
                  fill="var(--accent-teal)"
                  fillOpacity="0.1"
                />

                {/* Data points */}
                {selectedProfile.data.map((point, index) => {
                  const x =
                    80 +
                    (index * 390) /
                      (selectedProfile.data.length - 1);
                  let y;
                  if (viewMode === "absolute") {
                    y =
                      270 - ((point.score - 1100) / 500) * 200;
                  } else {
                    const improvementPercent =
                      ((point.score -
                        selectedProfile.startScore) /
                        selectedProfile.startScore) *
                      100;
                    y =
                      270 -
                      (Math.max(-2, improvementPercent) + 2) *
                        12;
                  }

                  return (
                    <motion.circle
                      key={index}
                      cx={x}
                      cy={y}
                      r={hoveredPoint === index ? 7 : 5}
                      fill="var(--accent-teal)"
                      className="cursor-pointer drop-shadow-sm"
                      onMouseEnter={() =>
                        setHoveredPoint(index)
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
                      whileHover={{ scale: 1.2 }}
                    />
                  );
                })}

                {/* Variance envelope */}
                <path
                  d={`M ${selectedProfile.data
                    .map((d, i) => {
                      const x =
                        80 +
                        (i * 390) /
                          (selectedProfile.data.length - 1);
                      let scoreY;
                      if (viewMode === "absolute") {
                        scoreY =
                          270 - ((d.score - 1100) / 500) * 200;
                      } else {
                        const improvementPercent =
                          ((d.score -
                            selectedProfile.startScore) /
                            selectedProfile.startScore) *
                          100;
                        scoreY =
                          270 -
                          (Math.max(-2, improvementPercent) +
                            2) *
                            12;
                      }
                      const variance = d.variance * 0.5; // Reduced variance visual impact
                      return `${x},${scoreY - variance}`;
                    })
                    .join(" L ")} L ${selectedProfile.data
                    .slice()
                    .reverse()
                    .map((d, i) => {
                      const x =
                        80 +
                        ((selectedProfile.data.length - 1 - i) *
                          390) /
                          (selectedProfile.data.length - 1);
                      let scoreY;
                      if (viewMode === "absolute") {
                        scoreY =
                          270 - ((d.score - 1100) / 500) * 200;
                      } else {
                        const improvementPercent =
                          ((d.score -
                            selectedProfile.startScore) /
                            selectedProfile.startScore) *
                          100;
                        scoreY =
                          270 -
                          (Math.max(-2, improvementPercent) +
                            2) *
                            12;
                      }
                      const variance = d.variance * 0.5; // Reduced variance visual impact
                      return `${x},${scoreY + variance}`;
                    })
                    .join(" L ")} Z`}
                  fill="var(--primary-navy)"
                  fillOpacity="0.08"
                />

                {/* Legend - repositioned to bottom right */}
                <g transform="translate(380, 320)">
                  <line
                    x1="0"
                    y1="0"
                    x2="15"
                    y2="0"
                    stroke="var(--accent-teal)"
                    strokeWidth="2"
                  />
                  <text
                    x="20"
                    y="4"
                    className="text-xs"
                    fill="var(--neutral-600)"
                  >
                    Score
                  </text>

                  <rect
                    x="60"
                    y="-4"
                    width="15"
                    height="8"
                    fill="var(--accent-teal)"
                    fillOpacity="0.1"
                  />
                  <text
                    x="80"
                    y="4"
                    className="text-xs"
                    fill="var(--neutral-600)"
                  >
                    Confidence
                  </text>

                  <rect
                    x="140"
                    y="-4"
                    width="15"
                    height="8"
                    fill="var(--primary-navy)"
                    fillOpacity="0.08"
                  />
                  <text
                    x="160"
                    y="4"
                    className="text-xs"
                    fill="var(--neutral-600)"
                  >
                    Variance
                  </text>
                </g>
              </svg>

              {/* Hover tooltip */}
              {hoveredPoint !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bg-white border border-neutral-200 rounded-lg p-3 shadow-lg pointer-events-none z-10"
                  style={{
                    left: `${13 + (hoveredPoint * 65) / (selectedProfile.data.length - 1)}%`,
                    top: "10px",
                  }}
                >
                  <div className="text-sm">
                    <div
                      className="font-medium"
                      style={{ color: "var(--primary-navy)" }}
                    >
                      Session{" "}
                      {
                        selectedProfile.data[hoveredPoint]
                          .session
                      }
                    </div>
                    <div
                      style={{ color: "var(--accent-teal)" }}
                    >
                      Score:{" "}
                      {selectedProfile.data[hoveredPoint].score}
                    </div>
                    <div className="text-neutral-500">
                      Confidence:{" "}
                      {
                        selectedProfile.data[hoveredPoint]
                          .confidence
                      }
                      %
                    </div>
                    <div className="text-neutral-500">
                      Variance:{" "}
                      {
                        selectedProfile.data[hoveredPoint]
                          .variance
                      }
                    </div>
                    <div className="text-neutral-500">
                      {selectedProfile.data[hoveredPoint].date}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chart explanation */}
            <div className="text-xs text-neutral-500 space-y-1 bg-neutral-50 p-4 rounded-lg">
              <p>
                <strong>How to read this chart:</strong>
              </p>
              <p>
                •{" "}
                <span style={{ color: "var(--accent-teal)" }}>
                  Teal line
                </span>
                : SAT score progression over time
              </p>
              <p>
                •{" "}
                <span
                  style={{
                    color: "var(--accent-teal)",
                    opacity: 0.5,
                  }}
                >
                  Light teal area
                </span>
                : Student confidence levels
              </p>
              <p>
                •{" "}
                <span
                  style={{
                    color: "var(--primary-navy)",
                    opacity: 0.3,
                  }}
                >
                  Gray envelope
                </span>
                : Score variance (narrowing = more consistent
                performance)
              </p>
            </div>
          </div>
        </Card>

        {/* Metrics Panel */}
        <div className="space-y-6">
          <Card className="p-6 border-neutral-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target
                  className="w-4 h-4"
                  style={{ color: "var(--accent-teal)" }}
                />
                <span className="text-sm font-medium">
                  Confidence-Accuracy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-2xl tabular-nums"
                  style={{ color: "var(--primary-navy)" }}
                >
                  {Math.round(
                    selectedProfile.metrics.confidenceAccuracy *
                      100,
                  )}
                  %
                </div>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${selectedProfile.metrics.confidenceAccuracy * 100}%`,
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: "var(--accent-teal)",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-neutral-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain
                  className="w-4 h-4"
                  style={{ color: "var(--success-emerald)" }}
                />
                <span className="text-sm font-medium">
                  Variance Reduction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-2xl tabular-nums"
                  style={{ color: "var(--primary-navy)" }}
                >
                  {Math.round(
                    selectedProfile.metrics.varianceReduction *
                      100,
                  )}
                  %
                </div>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${selectedProfile.metrics.varianceReduction * 100}%`,
                    }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: "var(--success-emerald)",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-neutral-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap
                  className="w-4 h-4"
                  style={{ color: "var(--warning-amber)" }}
                />
                <span className="text-sm font-medium">
                  Overconfidence Rate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-2xl tabular-nums"
                  style={{ color: "var(--primary-navy)" }}
                >
                  {Math.round(
                    selectedProfile.metrics.overconfidenceRate *
                      100,
                  )}
                  %
                </div>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${selectedProfile.metrics.overconfidenceRate * 100}%`,
                    }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: "var(--warning-amber)",
                    }}
                  />
                </div>
              </div>
              <div className="text-xs text-neutral-500">
                Lower is better
              </div>
            </div>
          </Card>

          <Card className="p-6 border-neutral-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award
                  className="w-4 h-4"
                  style={{ color: "var(--accent-violet)" }}
                />
                <span className="text-sm font-medium">
                  Decision Compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-2xl tabular-nums"
                  style={{ color: "var(--primary-navy)" }}
                >
                  {Math.round(
                    selectedProfile.metrics.decisionCompliance *
                      100,
                  )}
                  %
                </div>
                <div className="flex-1 bg-neutral-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${selectedProfile.metrics.decisionCompliance * 100}%`,
                    }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: "var(--accent-violet)",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}