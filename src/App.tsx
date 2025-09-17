import { useState } from "react";
import { MainHeader } from "./components/main-header";
import { MainFooter } from "./components/main-footer";
import { FitCheck } from "./components/fit-check";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfService } from "./pages/terms-of-service";
import { StudentRights } from "./pages/student-rights";
import { ComplaintProcess } from "./pages/complaint-process";
import { TutoringPage } from "./pages/tutoring";
import { ProgramPage } from "./pages/program";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tutoring' | 'program' | 'fit-check' | 'privacy' | 'terms' | 'student-rights' | 'complaints'>('home');
  const [fitCheckSource, setFitCheckSource] = useState<'tutoring' | 'program'>('tutoring'); // Track fit check source

  const goToFitCheck = (source: 'tutoring' | 'program' = 'tutoring') => {
    setFitCheckSource(source);
    setCurrentPage('fit-check');
  };
  const goToHome = () => setCurrentPage('home');
  const goToTutoring = () => setCurrentPage('tutoring');
  const goToProgram = () => setCurrentPage('program');
  const goToPrivacy = () => setCurrentPage('privacy');
  const goToTerms = () => setCurrentPage('terms');
  const goToStudentRights = () => setCurrentPage('student-rights');
  const goToComplaints = () => setCurrentPage('complaints');

  if (currentPage === 'tutoring') {
    return <TutoringPage onReturn={goToHome} onGoToFitCheck={() => goToFitCheck('tutoring')} />;
  }

  if (currentPage === 'program') {
    return <ProgramPage onReturn={goToHome} onGoToFitCheck={() => goToFitCheck('program')} />;
  }

  if (currentPage === 'fit-check') {
    return <FitCheck onReturn={goToHome} source={fitCheckSource} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onReturn={goToHome} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onReturn={goToHome} />;
  }

  if (currentPage === 'student-rights') {
    return <StudentRights onReturn={goToHome} />;
  }

  if (currentPage === 'complaints') {
    return <ComplaintProcess onReturn={goToHome} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h1 style={{ color: 'var(--primary-navy)' }}>
            SAT Insiders
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--neutral-600)' }}>
            Choose your experience:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div 
              className="p-8 bg-white rounded-2xl border-2 border-neutral-200 hover:border-accent cursor-pointer transition-all duration-200 hover:shadow-lg"
              onClick={goToTutoring}
            >
              <h2 className="text-xl mb-4" style={{ color: 'var(--primary-navy)' }}>
                SAT Tutoring
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--neutral-600)' }}>
                Our comprehensive SAT preparation approach focused on smart decision-making and variance control.
              </p>
              <div className="inline-flex items-center space-x-2 text-accent">
                <span>View Tutoring →</span>
              </div>
            </div>
            
            <div 
              className="p-8 bg-white rounded-2xl border-2 border-accent hover:border-accent-violet cursor-pointer transition-all duration-200 hover:shadow-lg"
              onClick={goToProgram}
            >
              <h2 className="text-xl mb-4" style={{ color: 'var(--primary-navy)' }}>
                Exclusive Program
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--neutral-600)' }}>
                Application-only program for high-achieving students who demand excellence and exclusivity.
              </p>
              <div className="inline-flex items-center space-x-2 text-accent-violet">
                <span>View Program →</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MainFooter 
        onNavigateToPrivacy={goToPrivacy}
        onNavigateToTerms={goToTerms}
        onNavigateToStudentRights={goToStudentRights}
        onNavigateToComplaints={goToComplaints}
      />
    </div>
  );
}