import { useEffect, useState } from "react";
import { MainHeader } from "./components/main-header";
import { MainFooter } from "./components/main-footer";
import { FitCheck } from "./components/fit-check";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfService } from "./pages/terms-of-service";
import { StudentRights } from "./pages/student-rights";
import { ComplaintProcess } from "./pages/complaint-process";
import { TutoringPage } from "./pages/tutoring";
import { ProgramPage } from "./pages/program";
import { PersonaKey, TutoringPersonaPage } from "./pages/tutoring-persona";

type PersonaPageKey = `tutoring-${PersonaKey}`;

type PageKey =
  | "home"
  | "tutoring"
  | "program"
  | "fit-check"
  | "privacy"
  | "terms"
  | "student-rights"
  | "complaints"
  | PersonaPageKey;

const personaMap: Partial<Record<string, PersonaKey>> = {
  athlete: 'athlete',
  adhd: 'adhd',
  immigrant: 'immigrant',
  artist: 'artist',
};

function getPageFromLocation(): PageKey {
  const { pathname, search } = window.location;
  // Tutoring routes
  if (pathname === '/tutoring' || pathname.startsWith('/tutoring/')) {
    const params = new URLSearchParams(search);
    const raw = (params.get('audience') || '').toLowerCase();
    const persona = raw ? personaMap[raw] : undefined;
    if (persona) return `tutoring-${persona}` as PageKey;
    return 'tutoring';
  }
  // Summit program route
  if (pathname === '/summit' || pathname.startsWith('/summit/')) {
    return 'program';
  }
  // Legal/info routes
  if (pathname === '/privacy') return 'privacy';
  if (pathname === '/terms') return 'terms';
  if (pathname === '/student-rights') return 'student-rights';
  if (pathname === '/complaints') return 'complaints';
  return 'home';
}

function navigate(path: string, page: PageKey) {
  if (typeof window !== 'undefined') {
    const cur = window.location.pathname + window.location.search + window.location.hash;
    if (cur !== path) {
      window.history.pushState({}, '', path);
    }
  }
  return page;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(getPageFromLocation());
  const [fitCheckSource, setFitCheckSource] = useState<'tutoring' | 'program'>('tutoring'); // Track fit check source

  const goToFitCheck = (source: 'tutoring' | 'program' = 'tutoring') => {
    setFitCheckSource(source);
    setCurrentPage('fit-check');
  };
  const goToHome = () => setCurrentPage(navigate('/', 'home'));
  const goToTutoring = () => setCurrentPage(navigate('/tutoring', 'tutoring'));
  const goToProgram = () => setCurrentPage(navigate('/summit', 'program'));
  const goToPrivacy = () => setCurrentPage(navigate('/privacy', 'privacy'));
  const goToTerms = () => setCurrentPage(navigate('/terms', 'terms'));
  const goToStudentRights = () => setCurrentPage(navigate('/student-rights', 'student-rights'));
  const goToComplaints = () => setCurrentPage(navigate('/complaints', 'complaints'));

  useEffect(() => {
    const onPop = () => setCurrentPage(getPageFromLocation());
    window.addEventListener('popstate', onPop);
    // Sync once on mount as well
    setCurrentPage(getPageFromLocation());
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (currentPage === 'tutoring') {
    return <TutoringPage onReturn={goToHome} onGoToFitCheck={() => goToFitCheck('tutoring')} />;
  }

  if (currentPage.startsWith('tutoring-')) {
    const persona = currentPage.replace('tutoring-', '') as PersonaKey;
    return (
      <TutoringPersonaPage
        persona={persona}
        onReturn={goToHome}
        onGoToFitCheck={() => goToFitCheck('tutoring')}
      />
    );
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
