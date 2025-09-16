import { Mail, MapPin, Clock } from "lucide-react";

interface FooterProps {
  onNavigateToPrivacy: () => void;
  onNavigateToTerms: () => void;
  onNavigateToStudentRights: () => void;
  onNavigateToComplaints: () => void;
  onScrollToSection: (sectionId: string) => void;
  onStartFitCheck: () => void;
}

export function Footer({ 
  onNavigateToPrivacy, 
  onNavigateToTerms, 
  onNavigateToStudentRights, 
  onNavigateToComplaints,
  onScrollToSection,
  onStartFitCheck
}: FooterProps) {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-medium text-xl tracking-tight">
              SAT Insiders
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Advanced tutoring for students already on the rise. Governed calm, measurable progress.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/70" />
                <div>
                  <p className="font-medium">jason@satinsiders.com</p>
                  <p className="text-sm text-white/70">Primary contact for all inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/70" />
                <div>
                  <p className="text-sm text-white/70">Response time: Within 24 hours</p>
                  <p className="text-sm text-white/70">Consultations by appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Program</h4>
            <div className="space-y-2 text-sm text-white/70">
              <button 
                onClick={onStartFitCheck}
                className="block hover:text-white transition-colors text-left"
              >
                Fit Check (3 minutes)
              </button>
              <button 
                onClick={() => onScrollToSection('proof')}
                className="block hover:text-white transition-colors text-left"
              >
                Progress Measurement
              </button>
              <button 
                onClick={() => onScrollToSection('governance')}
                className="block hover:text-white transition-colors text-left"
              >
                Quality Standards
              </button>
              <button 
                onClick={() => onScrollToSection('mechanism')}
                className="block hover:text-white transition-colors text-left"
              >
                Our Methodology
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <div className="space-y-2 text-sm text-white/70">
              <button 
                onClick={onNavigateToPrivacy}
                className="block hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onNavigateToTerms}
                className="block hover:text-white transition-colors text-left"
              >
                Terms of Service
              </button>
              <button 
                onClick={onNavigateToStudentRights}
                className="block hover:text-white transition-colors text-left"
              >
                Student Rights
              </button>
              <button 
                onClick={onNavigateToComplaints}
                className="block hover:text-white transition-colors text-left"
              >
                Complaint Process
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2024 SAT Insiders. All rights reserved.
            </div>
            <div className="text-sm text-white/70">
              Privacy-first. No PII collection. FERPA compliant.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}