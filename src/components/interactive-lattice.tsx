import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { 
  Search, 
  BookOpen, 
  Target, 
  Shield, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Zap,
  Brain
} from "lucide-react";

interface LatticeNode {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  connections: string[];
  status: 'pending' | 'active' | 'completed';
  color: string;
  details: string[];
}

export function InteractiveLattice() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  const nodes: LatticeNode[] = [
    {
      id: 'diagnose',
      title: 'Diagnose',
      description: 'Pattern detection with behavioral markers',
      icon: <Search className="w-5 h-5" />,
      position: { x: 80, y: 60 },
      connections: ['install'],
      status: 'completed',
      color: 'var(--accent-teal)',
      details: [
        'Two spaced baseline assessments',
        'Confidence calibration measurement', 
        'Behavioral pattern analysis',
        'Decision latency tracking'
      ]
    },
    {
      id: 'install',
      title: 'Install',
      description: 'Decision boundaries and systematic rules',
      icon: <BookOpen className="w-5 h-5" />,
      position: { x: 220, y: 60 },
      connections: ['calibrate', 'govern'],
      status: 'active',
      color: 'var(--primary-navy)',
      details: [
        'Content gap systematization',
        'Decision rule frameworks',
        'Trap pattern recognition',
        'Strategic pacing protocols'
      ]
    },
    {
      id: 'calibrate',
      title: 'Calibrate',
      description: 'Confidence-accuracy concordance',
      icon: <Target className="w-5 h-5" />,
      position: { x: 360, y: 60 },
      connections: ['validate'],
      status: 'pending',
      color: 'var(--accent-violet)',
      details: [
        'Confidence calibration training',
        'Error classification systems',
        'Productive uncertainty training',
        'Skip/flag decision protocols'
      ]
    },
    {
      id: 'govern',
      title: 'Govern',
      description: 'Manager Care continuous monitoring',
      icon: <Shield className="w-5 h-5" />,
      position: { x: 150, y: 140 },
      connections: ['validate'],
      status: 'active',
      color: 'var(--success-emerald)',
      details: [
        'Session quality audits',
        'Tutor performance tracking',
        'Progress trajectory analysis',
        'Intervention protocols'
      ]
    },
    {
      id: 'validate',
      title: 'Validate',
      description: 'Full-length consolidation checkpoints',
      icon: <BarChart3 className="w-5 h-5" />,
      position: { x: 290, y: 140 },
      connections: [],
      status: 'pending',
      color: 'var(--warning-amber)',
      details: [
        'Variance measurement',
        'Strategy validation',
        'Anxiety desensitization',
        'Performance consistency'
      ]
    }
  ];

  // Auto-cycle through animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (from: LatticeNode, to: LatticeNode) => {
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;
    const midX = from.position.x + dx / 2;
    const midY = from.position.y + dy / 2;
    
    return `M ${from.position.x} ${from.position.y} Q ${midX} ${midY - 20} ${to.position.x} ${to.position.y}`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-3 h-3 text-green-600" />;
      case 'active': return <Zap className="w-3 h-3 text-amber-600" />;
      case 'pending': return <AlertTriangle className="w-3 h-3 text-gray-400" />;
      default: return null;
    }
  };

  if (isGridView) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 style={{ color: 'var(--primary-navy)' }}>Decision Architecture</h3>
          <button
            onClick={() => setIsGridView(!isGridView)}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Flow View →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`p-4 cursor-pointer border-2 transition-all duration-200 ${
                  activeNode === node.id 
                    ? 'border-accent shadow-lg' 
                    : 'border-neutral-200 hover:border-accent/30'
                }`}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${node.color}20`, color: node.color }}
                      >
                        {node.icon}
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                          {node.title}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {node.description}
                        </div>
                      </div>
                    </div>
                    {getStatusIcon(node.status)}
                  </div>

                  <AnimatePresence>
                    {activeNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 pt-3 border-t border-neutral-100"
                      >
                        {node.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-neutral-600"
                          >
                            <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {detail}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 style={{ color: 'var(--primary-navy)' }}>Decision Flow</h3>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="text-sm text-accent hover:text-accent/80 transition-colors"
        >
          Grid View →
        </button>
      </div>
      
      <div className="relative bg-white rounded-2xl p-8 border border-neutral-200 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <pattern id="latticePattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="var(--primary-navy)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#latticePattern)" />
          </svg>
        </div>

        <div className="relative">
          <svg viewBox="0 0 440 200" className="w-full h-64">
            {/* Connection paths */}
            {nodes.map((node) => 
              node.connections.map((connId) => {
                const targetNode = nodes.find(n => n.id === connId);
                if (!targetNode) return null;
                
                const isActive = animationPhase >= nodes.findIndex(n => n.id === node.id);
                
                return (
                  <motion.path
                    key={`${node.id}-${connId}`}
                    d={getConnectionPath(node, targetNode)}
                    fill="none"
                    stroke="var(--accent-teal)"
                    strokeWidth="2"
                    strokeOpacity={isActive ? 0.6 : 0.2}
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isActive ? 1 : 0.3 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                );
              })
            )}

            {/* Arrow marker */}
            <defs>
              <marker 
                id="arrowhead" 
                markerWidth="8" 
                markerHeight="6" 
                refX="7" 
                refY="3" 
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="var(--accent-teal)" />
              </marker>
            </defs>

            {/* Nodes */}
            {nodes.map((node, index) => {
              const isActive = activeNode === node.id;
              const isAnimated = animationPhase >= index;
              
              return (
                <g key={node.id}>
                  {/* Node circle */}
                  <motion.circle
                    cx={node.position.x}
                    cy={node.position.y}
                    r={isActive ? 24 : 20}
                    fill={node.color}
                    className="cursor-pointer drop-shadow-sm"
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: isAnimated ? 1 : 0.7,
                      fill: isAnimated ? node.color : 'var(--neutral-300)'
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />

                  {/* Status indicator */}
                  <motion.circle
                    cx={node.position.x + 15}
                    cy={node.position.y - 15}
                    r="6"
                    fill={
                      node.status === 'completed' ? 'var(--success-emerald)' :
                      node.status === 'active' ? 'var(--warning-amber)' :
                      'var(--neutral-300)'
                    }
                    initial={{ scale: 0 }}
                    animate={{ scale: isAnimated ? 1 : 0 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                  />

                  {/* Pulse animation for active nodes */}
                  {node.status === 'active' && isAnimated && (
                    <motion.circle
                      cx={node.position.x}
                      cy={node.position.y}
                      r={20}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      animate={{ 
                        r: [20, 30, 20],
                        strokeOpacity: [0.4, 0, 0.4]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Node labels */}
          <div className="absolute inset-0">
            {nodes.map((node, index) => (
              <motion.div
                key={`label-${node.id}`}
                className="absolute"
                style={{
                  left: `${(node.position.x / 440) * 100}%`,
                  top: `${((node.position.y + 35) / 200) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 + 0.3 }}
              >
                <div className="text-center">
                  <div className="text-sm font-medium" style={{ color: 'var(--primary-navy)' }}>
                    {node.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {node.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active node details */}
          <AnimatePresence>
            {activeNode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-white border border-neutral-200 rounded-xl p-4 mx-4 shadow-lg"
              >
                {(() => {
                  const node = nodes.find(n => n.id === activeNode);
                  if (!node) return null;
                  
                  return (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${node.color}20`, color: node.color }}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                            {node.title}
                          </h4>
                          <p className="text-sm text-neutral-600">{node.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {node.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-neutral-600"
                          >
                            <Brain className="w-3 h-3 mt-1 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}