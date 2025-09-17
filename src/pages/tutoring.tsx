import { TutoringHeaderRevamped } from "../components/tutoring/tutoring-header-revamped";
import { HeroRevamped } from "../components/tutoring/hero-revamped";
import { DoctrineSectionRevamped } from "../components/tutoring/doctrine-section-revamped";
import { MechanismSection } from "../components/tutoring/mechanism-section";
import { SevenDaySection } from "../components/tutoring/seven-day-section";
import { ProofSection } from "../components/tutoring/proof-section";
import { GovernanceSection } from "../components/tutoring/governance-section";
import { PricingSection } from "../components/tutoring/pricing-section";
import { OnRampSection } from "../components/tutoring/on-ramp-section";
import { RefusalGates } from "../components/tutoring/refusal-gates";
import { WhoThisIsFor } from "../components/tutoring/who-this-is-for";
import { ParentCommunication } from "../components/tutoring/parent-communication";
import { FAQSection } from "../components/tutoring/faq-section";
import { Footer } from "../components/footer";
import { FitCheck } from "../components/fit-check";
import { useState } from "react";

interface TutoringPageProps {
  onReturn: () => void;
  onGoToFitCheck?: () => void;
}

export function TutoringPage({ onReturn, onGoToFitCheck }: TutoringPageProps) {
  const [showFitCheck, setShowFitCheck] = useState(false);

  const goToFitCheck = () => {
    if (onGoToFitCheck) {
      onGoToFitCheck();
    } else {
      setShowFitCheck(true);
    }
  };
  const returnFromFitCheck = () => setShowFitCheck(false);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showFitCheck) {
    return <FitCheck onReturn={returnFromFitCheck} source="tutoring" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <TutoringHeaderRevamped 
        onReturn={onReturn}
        onStartFitCheck={goToFitCheck}
        onScrollToSection={scrollToSection}
      />
      
      <main>
        <HeroRevamped onStartFitCheck={goToFitCheck} />
        
        <section id="doctrine" className="relative">
          <DoctrineSectionRevamped />
        </section>
        
        <ParentCommunication />
        
        <section id="governance" className="relative bg-gradient-to-b from-accent-teal/15 to-white">
          <GovernanceSection />
        </section>
        
        <section id="mechanism" className="relative bg-gradient-to-b from-accent-teal/20 to-white">
          <MechanismSection />
        </section>
        
        <section id="pricing" className="relative bg-gradient-to-b from-accent-teal/15 via-accent/20 to-white">
          <PricingSection onStartFitCheck={goToFitCheck} />
        </section>
        <div className="bg-white">
          <OnRampSection onStartFitCheck={goToFitCheck} />
        </div>
        
        <div className="bg-white">
          <SevenDaySection />
        </div>
        <section id="proof" className="relative bg-gradient-to-b from-accent/15 to-white">
          <ProofSection />
        </section>
        <div className="bg-white">
          <WhoThisIsFor />
        </div>
        <div className="bg-gradient-to-b from-accent-violet/18 via-accent-violet/8 to-white">
          <RefusalGates />
        </div>
        <section id="faq" className="relative bg-white">
          <FAQSection />
        </section>
      </main>

      <Footer 
        onNavigateToPrivacy={() => {}}
        onNavigateToTerms={() => {}}
        onNavigateToStudentRights={() => {}}
        onNavigateToComplaints={() => {}}
        onScrollToSection={scrollToSection}
        onStartFitCheck={goToFitCheck}
      />
    </div>
  );
}