import { motion } from "motion/react";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent-teal to-accent-violet bg-clip-text text-transparent">
              SAT Insiders
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a 
              href="#tutoring" 
              className="text-sm font-medium hover:text-accent-teal transition-colors"
              style={{ color: 'var(--neutral-600)' }}
            >
              SAT Tutoring
            </a>
            <a 
              href="#program" 
              className="text-sm font-medium hover:text-accent-violet transition-colors"
              style={{ color: 'var(--neutral-600)' }}
            >
              Summit Program
            </a>
          </motion.nav>

          {/* Tagline */}
          <motion.div
            className="hidden lg:block text-sm font-medium"
            style={{ color: 'var(--neutral-500)' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose Your Experience
          </motion.div>
        </div>
      </div>
    </header>
  );
}