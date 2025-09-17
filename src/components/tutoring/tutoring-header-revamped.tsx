import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Menu, X } from "lucide-react";

interface TutoringHeaderRevampedProps {
  onReturn: () => void;
  onStartFitCheck: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export function TutoringHeaderRevamped({ 
  onReturn, 
  onStartFitCheck, 
  onScrollToSection 
}: TutoringHeaderRevampedProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Doctrine", id: "doctrine" },
    { label: "Mechanism", id: "mechanism" },
    { label: "Governance", id: "governance" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" }
  ];

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            
            {/* Left - Back Button */}
            <Button
              variant="ghost"
              onClick={onReturn}
              className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-3 py-2 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>

            {/* Center - Logo (Single Line) */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SI</span>
              </div>
              <span className="font-semibold text-lg" style={{ color: 'var(--primary-navy)' }}>
                SAT Insiders
              </span>
            </div>

            {/* Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => onScrollToSection(item.id)}
                  className="px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent transition-all duration-200 font-medium"
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Right - CTA Only */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={onStartFitCheck}
                className="bg-gradient-to-r from-accent-teal to-primary hover:opacity-90 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute top-16 left-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onScrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full justify-start px-3 py-2.5 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 font-medium"
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}