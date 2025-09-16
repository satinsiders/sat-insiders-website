import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onReturn: () => void;
}

export function PrivacyPolicy({ onReturn }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onReturn}
                className="hover:bg-neutral-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            <div className="font-medium text-xl tracking-tight" style={{ color: 'var(--primary-navy)' }}>
              SAT Insiders
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 style={{ color: 'var(--primary-navy)' }}>Privacy Policy</h1>
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                Last updated: December 2024
              </p>
            </div>

            <Card className="p-8 space-y-8">
              <section className="space-y-4">
                <h2>Our Commitment to Privacy</h2>
                <p>
                  SAT Insiders is committed to protecting your privacy and maintaining the confidentiality of your personal information. 
                  This policy explains what information we collect, how we use it, and your rights regarding your data.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3>During Fit Check (Pre-enrollment)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Academic goals and target scores</li>
                      <li>Current SAT performance level</li>
                      <li>Available study time and constraints</li>
                      <li>Previous test prep experience</li>
                      <li>Parent/student contact preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3>During Program Enrollment</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Student name and contact information</li>
                      <li>Parent/guardian contact information</li>
                      <li>Academic history relevant to SAT preparation</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                  </div>

                  <div>
                    <h3>During Program Delivery</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Practice test scores and question-level performance</li>
                      <li>Session attendance and engagement metrics</li>
                      <li>Learning progress and confidence calibration data</li>
                      <li>Communication logs between tutors and students</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Program Fit Assessment:</strong> To determine if our methodology aligns with your needs</li>
                  <li><strong>Personalized Instruction:</strong> To customize tutoring approaches and track progress</li>
                  <li><strong>Quality Assurance:</strong> To maintain our Manager Care oversight standards</li>
                  <li><strong>Communication:</strong> To coordinate sessions and provide progress updates</li>
                  <li><strong>Program Improvement:</strong> To refine our teaching methods (using anonymized data only)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2>Data Retention and Deletion</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Pre-enrollment Data</h3>
                    <p>If you do not enroll after the Fit Check, all collected information is automatically deleted after 30 days.</p>
                  </div>
                  
                  <div>
                    <h3>Student Data</h3>
                    <p>Active student data is retained during program enrollment plus 2 years for progress tracking and support purposes. 
                    Data can be deleted upon request at any time.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Data Sharing and Disclosure</h2>
                <p>We do not sell, rent, or share your personal information with third parties except:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To process payments (through encrypted, secure payment processors)</li>
                  <li>When required by law or to protect legal rights</li>
                  <li>With service providers who assist in program delivery (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2>Your Rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request removal of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                </ul>
                <p>To exercise these rights, contact us at <strong>jason@satinsiders.com</strong></p>
              </section>

              <section className="space-y-4">
                <h2>FERPA Compliance</h2>
                <p>
                  As an educational service provider, we comply with the Family Educational Rights and Privacy Act (FERPA). 
                  Student educational records are protected and access is limited to authorized personnel directly involved in the student's education.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Security Measures</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Secure, encrypted storage of all personal information</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication for all systems</li>
                  <li>Staff training on data protection and privacy</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2>Contact Information</h2>
                <p>
                  For questions about this Privacy Policy or to exercise your privacy rights, contact:
                </p>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <p><strong>Email:</strong> jason@satinsiders.com</p>
                  <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Policy Updates</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
                  We will notify active students and families of material changes via email at least 30 days before implementation.
                </p>
              </section>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}