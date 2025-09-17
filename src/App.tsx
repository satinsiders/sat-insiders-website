import { useEffect, useState, useSyncExternalStore } from "react";
import { MainHeader } from "./components/main-header";
import { MainFooter } from "./components/main-footer";
import { FitCheck } from "./components/fit-check";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfService } from "./pages/terms-of-service";
import { StudentRights } from "./pages/student-rights";
import { ComplaintProcess } from "./pages/complaint-process";
import { TutoringPage } from "./pages/tutoring";
import { ProgramPage } from "./pages/program";
import { TutoringPersonaPage } from "./pages/tutoring-persona";
import { FitCheckOptions, PersonaKey } from "./types/persona";

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

function canonicalizeUrl(pathname: string, search: string): { pathname: string; search: string } {
  // If audience is present at root, canonicalize to tutoring path
  if (pathname === '/' && search.toLowerCase().includes('audience=')) {
    const params = new URLSearchParams(search);
    let raw = (params.get('audience') || '').toLowerCase().trim();
    if (!raw) {
      for (const [k, v] of params.entries()) {
        if (k.toLowerCase() === 'audience') {
          raw = (v || '').toLowerCase().trim();
          break;
        }
      }
    }
    const qs = raw ? `?audience=${encodeURIComponent(raw)}` : '';
    return { pathname: '/tutoring', search: qs };
  }
  return { pathname, search };
}

function getPageFromLocation(): PageKey {
  const { pathname: rawPath, search: rawSearch } = window.location;
  const { pathname, search } = canonicalizeUrl(rawPath, rawSearch);
  // Tutoring routes
  if (pathname === '/tutoring' || pathname.startsWith('/tutoring/')) {
    const params = new URLSearchParams(search);
    let raw = (params.get('audience') || '').toLowerCase().trim();
    if (!raw) {
      for (const [k, v] of params.entries()) {
        if (k.toLowerCase() === 'audience') {
          raw = (v || '').toLowerCase().trim();
          break;
        }
      }
    }
    const persona = raw ? personaMap[raw] : undefined;
    if (persona) return `tutoring-${persona}` as PageKey;
    return 'tutoring';
  }
  // Summit program route
  if (pathname === '/summit' || pathname.startsWith('/summit/')) {
    return 'program';
  }
  // Fit check
  if (pathname === '/fit-check') return 'fit-check';
  // Legal/info routes
  if (pathname === '/privacy') return 'privacy';
  if (pathname === '/terms') return 'terms';
  if (pathname === '/student-rights') return 'student-rights';
  if (pathname === '/complaints') return 'complaints';
  return 'home';
}

// Simple navigation + event dispatch so subscribers update synchronously
function dispatchRouteChange() {
  window.dispatchEvent(new Event('router:navigate'));
}

export function navigate(path: string) {
  const cur = window.location.pathname + window.location.search + window.location.hash;
  if (cur !== path) {
    window.history.pushState({}, '', path);
    dispatchRouteChange();
  }
}

// Subscribe to location changes
function subscribe(callback: () => void) {
  const onPop = () => callback();
  const onNav = () => callback();
  window.addEventListener('popstate', onPop);
  window.addEventListener('router:navigate', onNav);
  return () => {
    window.removeEventListener('popstate', onPop);
    window.removeEventListener('router:navigate', onNav);
  };
}

function useRoute(): PageKey {
  return useSyncExternalStore(
    subscribe,
    getPageFromLocation,
    () => 'home'
  );
}

export default function App() {
  const currentPage = useRoute();
  const [fitCheckSource, setFitCheckSource] = useState<'tutoring' | 'program'>('tutoring'); // Track fit check source

  const goToFitCheck = (source: 'tutoring' | 'program' = 'tutoring', options?: FitCheckOptions) => {
    setFitCheckSource(source);
    const search = options?.audience ? `?audience=${options.audience}` : '';
    navigate(`/fit-check${search}`);
  };
  const goToHome = () => navigate('/');
  const goToTutoring = () => navigate('/tutoring');
  const goToProgram = () => navigate('/summit');
  const goToPrivacy = () => navigate('/privacy');
  const goToTerms = () => navigate('/terms');
  const goToStudentRights = () => navigate('/student-rights');
  const goToComplaints = () => navigate('/complaints');

  useEffect(() => {
    // Normalize URL on mount (no state set here; useRoute will re-evaluate)
    const { pathname, search } = window.location;
    const { pathname: nextPath, search: nextSearch } = canonicalizeUrl(pathname, search);
    if (pathname !== nextPath || search !== nextSearch) {
      window.history.replaceState({}, '', `${nextPath}${nextSearch}`);
      dispatchRouteChange();
    }
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
        onGoToFitCheck={(opts) => goToFitCheck('tutoring', opts)}
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
