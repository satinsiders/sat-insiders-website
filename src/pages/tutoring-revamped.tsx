import { TutoringHeader } from "../components/tutoring/tutoring-header-revamped";
import { HeroRevamped } from "../components/tutoring/hero-revamped";
import { DoctrineSectionRevamped } from "../components/tutoring/doctrine-section-revamped";
import { MechanismSectionRevamped } from "../components/tutoring/mechanism-section-revamped";
import { ProofSectionRevamped } from "../components/tutoring/proof-section-revamped";
import { WhoThisIsForRevamped } from "../components/tutoring/who-this-is-for-revamped";
import { GovernanceSectionRevamped } from "../components/tutoring/governance-section-revamped";
import { PricingSectionRevamped } from "../components/tutoring/pricing-section-revamped";
import { FAQSectionRevamped } from "../components/tutoring/faq-section-revamped";
import { FooterRevamped } from "../components/tutoring/footer-revamped";
import { FitCheck } from "../components/fit-check";
import { useState } from "react";

interface TutoringPageProps {
  onReturn: () => void;
  onGoToFitCheck?: () => void;
}

export function TutoringPageRevamped({ onReturn, onGoToFitCheck }: TutoringPageProps) {
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
      <TutoringHeader 
        onReturn={onReturn}
        onStartFitCheck={goToFitCheck}
        onScrollToSection={scrollToSection}
      />
      
      <main>
        <HeroRevamped onStartFitCheck={goToFitCheck} />
        
        <section id="doctrine" className="relative">
          <DoctrineSectionRevamped />
        </section>
        
        <section id="mechanism" className="relative">
          <MechanismSectionRevamped />
        </section>
        
        <section id="proof" className="relative">
          <ProofSectionRevamped />
        </section>
        
        <WhoThisIsForRevamped onStartFitCheck={goToFitCheck} />
        
        <section id="governance" className="relative">
          <GovernanceSectionRevamped />
        </section>
        
        <section id="pricing" className="relative">
          <PricingSectionRevamped onStartFitCheck={goToFitCheck} />
        </section>
        
        <section id="faq" className="relative">
          <FAQSectionRevamped />
        </section>
      </main>

      <FooterRevamped 
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