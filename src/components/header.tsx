import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-all duration-200">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <motion.div 
              className="font-medium text-xl tracking-tight" 
              style={{ color: 'var(--primary-navy)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              SAT Insiders
            </motion.div>
            <nav className="hidden md:flex items-center space-x-6">
              <motion.a 
                href="#mechanism" 
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mechanism
              </motion.a>
              <motion.a 
                href="#proof" 
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Proof
              </motion.a>
              <motion.a 
                href="#governance" 
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Governance
              </motion.a>
              <motion.a 
                href="#pricing" 
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-sm hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FAQ
              </motion.a>
            </nav>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
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
        </div>
      </div>
    </header>
  );
}