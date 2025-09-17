import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { GraduationCap, Award, Target } from "lucide-react";

export function AuthoritySection() {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Our team consists of dedicated professional SAT analysts and strategists with perfect scores and deep expertise in high-stakes testing.",
      stats: "Perfect Score Team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Methodology",
      description: "Developed over 8 years of working exclusively with high-achieving students who refuse to accept anything less than excellence.",
      stats: "8+ Years Refined"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Guarantee",
      description: "We're so confident in our methodology that we guarantee meaningful score improvement or provide additional coaching at no cost.",
      stats: "100% Success Rate"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
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
              Uncompromising Standards
            </Badge>
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--primary-navy)' }}>
              Why The Summit Program <br />
              <span className="bg-gradient-to-r from-accent-teal to-accent-violet bg-clip-text text-transparent">
                Sets the Standard
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              When conventional test prep falls short, exceptional students need exceptional solutions.
            </p>
          </motion.div>
        </div>

        {/* Authority Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div 
                      className="p-4 rounded-2xl bg-gradient-to-br from-accent-teal/10 to-accent-violet/10 border border-accent-teal/20"
                      style={{ color: 'var(--accent-teal)' }}
                    >
                      {credential.icon}
                    </div>
                    <Badge 
                      variant="outline" 
                      className="border-accent-violet/30 text-accent-violet bg-accent-violet/5"
                    >
                      {credential.stats}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                      {credential.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
                      {credential.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent-teal/5 to-accent-violet/5 rounded-3xl p-12 border border-accent-teal/10">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                Trusted by Families at the Highest Levels
              </h3>
              <p className="text-lg max-w-4xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
                Our students come from families who understand that excellence requires investment in the finest resources. 
                They choose The Summit Program not because they need test prep, but because they demand the absolute best.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums mb-2" style={{ color: 'var(--primary-navy)' }}>
                    $2M+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                    Average Family Income
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums mb-2" style={{ color: 'var(--primary-navy)' }}>
                    87%
                  </div>
                  <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                    Ivy League Acceptance
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold tabular-nums mb-2" style={{ color: 'var(--primary-navy)' }}>
                    100%
                  </div>
                  <div className="text-sm" style={{ color: 'var(--neutral-500)' }}>
                    Parent Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}