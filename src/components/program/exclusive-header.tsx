import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Crown, ArrowLeft } from "lucide-react";

interface ExclusiveHeaderProps {
  onReturn: () => void;
  onStartApplication: () => void;
}

export function ExclusiveHeader({ onReturn, onStartApplication }: ExclusiveHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onReturn}
              className="hover:bg-neutral-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="h-8 w-px bg-neutral-300"></div>
            
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent-teal to-accent-violet bg-clip-text text-transparent">
                SAT Insiders
              </div>
              <Badge 
                variant="outline"
                className="border-accent-violet/30 text-accent-violet bg-accent-violet/5 hidden sm:flex"
              >
                <Crown className="w-3 h-3 mr-1" />
                Summit
              </Badge>
            </div>
          </motion.div>

          {/* Navigation - Minimal for exclusive feel */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a 
              href="#methodology" 
              className="text-sm font-medium hover:text-accent-teal transition-colors"
              style={{ color: 'var(--neutral-600)' }}
            >
              Methodology
            </a>
            <a 
              href="#investment" 
              className="text-sm font-medium hover:text-accent-teal transition-colors"
              style={{ color: 'var(--neutral-600)' }}
            >
              Investment
            </a>
            <a 
              href="#application" 
              className="text-sm font-medium hover:text-accent-teal transition-colors"
              style={{ color: 'var(--neutral-600)' }}
            >
              Apply
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={onStartApplication}
              className="bg-gradient-to-r from-accent-teal to-accent-violet hover:opacity-90 text-white px-6 py-2 rounded-full shadow-lg shadow-accent-teal/20 transition-all duration-300"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}