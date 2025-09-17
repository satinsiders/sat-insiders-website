import { ExclusiveHeader } from "../components/program/exclusive-header";
import { ExclusiveHero } from "../components/program/exclusive-hero";
import { AuthoritySection } from "../components/program/authority-section";
import { SelectionCriteria } from "../components/program/selection-criteria";
import { ExclusiveMethodology } from "../components/program/exclusive-methodology";
import { InvestmentSection } from "../components/program/investment-section";
import { ApplicationProcess } from "../components/program/application-process";
import { Footer } from "../components/footer";
import { FitCheck } from "../components/fit-check";
import { useState } from "react";
import { FitCheckOptions } from "../types/persona";

interface ProgramPageProps {
  onReturn: () => void;
  onGoToFitCheck?: (options?: FitCheckOptions) => void;
}

export function ProgramPage({ onReturn, onGoToFitCheck }: ProgramPageProps) {
  const [showApplication, setShowApplication] = useState(false);

  // Use the parent's onGoToFitCheck function instead of local state
  const startApplication = () => {
    if (onGoToFitCheck) {
      onGoToFitCheck(); // This will call goToFitCheck('program') from App.tsx
    } else {
      setShowApplication(true); // Fallback for local state
    }
  };
  const returnFromApplication = () => setShowApplication(false);

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Remove the local FitCheck component since we're using parent navigation
  if (showApplication) {
    return <FitCheck onReturn={returnFromApplication} source="program" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ExclusiveHeader onReturn={onReturn} onStartApplication={startApplication} />
      
      <main>
        <ExclusiveHero onStartApplication={startApplication} />
        <AuthoritySection />
        <SelectionCriteria />
        <section id="methodology">
          <ExclusiveMethodology />
        </section>
        <section id="investment">
          <InvestmentSection onStartApplication={startApplication} />
        </section>
        <section id="application">
          <ApplicationProcess onStartApplication={startApplication} />
        </section>
      </main>

      <Footer 
        onNavigateToPrivacy={() => {}}
        onNavigateToTerms={() => {}}
        onNavigateToStudentRights={() => {}}
        onNavigateToComplaints={() => {}}
        onScrollToSection={scrollToSection}
        onStartFitCheck={startApplication}
      />
    </div>
  );
}
