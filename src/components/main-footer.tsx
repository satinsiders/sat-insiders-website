import { motion } from "motion/react";

interface MainFooterProps {
  onNavigateToPrivacy: () => void;
  onNavigateToTerms: () => void;
  onNavigateToStudentRights: () => void;
  onNavigateToComplaints: () => void;
}

export function MainFooter({ 
  onNavigateToPrivacy, 
  onNavigateToTerms, 
  onNavigateToStudentRights, 
  onNavigateToComplaints 
}: MainFooterProps) {
  return (
    <footer className="bg-gradient-to-b from-neutral-50/50 to-white border-t border-neutral-200/50 py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent-teal to-accent-violet bg-clip-text text-transparent">
              SAT Insiders
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-600)' }}>
              Transform your SAT performance through our proven methodology. 
              Choose between comprehensive tutoring or our exclusive Summit Program.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold" style={{ color: 'var(--primary-navy)' }}>
              Our Services
            </h3>
            <div className="space-y-3">
              <div className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                <strong>SAT Tutoring</strong><br />
                Comprehensive preparation focused on smart decision-making and variance control
              </div>
              <div className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                <strong>Summit Program</strong><br />
                Exclusive application-only program for high-achieving students
              </div>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold" style={{ color: 'var(--primary-navy)' }}>
              Information
            </h3>
            <div className="space-y-2">
              <button 
                onClick={onNavigateToPrivacy}
                className="block text-sm hover:text-accent-teal transition-colors text-left"
                style={{ color: 'var(--neutral-600)' }}
              >
                Privacy Policy
              </button>
              <button 
                onClick={onNavigateToTerms}
                className="block text-sm hover:text-accent-teal transition-colors text-left"
                style={{ color: 'var(--neutral-600)' }}
              >
                Terms of Service
              </button>
              <button 
                onClick={onNavigateToStudentRights}
                className="block text-sm hover:text-accent-teal transition-colors text-left"
                style={{ color: 'var(--neutral-600)' }}
              >
                Student Rights
              </button>
              <button 
                onClick={onNavigateToComplaints}
                className="block text-sm hover:text-accent-teal transition-colors text-left"
                style={{ color: 'var(--neutral-600)' }}
              >
                Complaint Process
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-12 mt-12 border-t border-neutral-200/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm" style={{ color: 'var(--neutral-500)' }}>
            © 2024 SAT Insiders. Dedicated to exceptional SAT preparation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}