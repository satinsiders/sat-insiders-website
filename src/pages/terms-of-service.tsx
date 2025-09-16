import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";

interface TermsOfServiceProps {
  onReturn: () => void;
}

export function TermsOfService({ onReturn }: TermsOfServiceProps) {
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
              <h1 style={{ color: 'var(--primary-navy)' }}>Terms of Service</h1>
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                Last updated: December 2024
              </p>
            </div>

            <Card className="p-8 space-y-8">
              <section className="space-y-4">
                <h2>Agreement Overview</h2>
                <p>
                  These Terms of Service govern your use of SAT Insiders tutoring services. By engaging with our Fit Check process 
                  or enrolling in our program, you agree to these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Service Description</h2>
                <div className="space-y-4">
                  <p>SAT Insiders provides:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Individualized SAT tutoring using decision-boundary training methodology</li>
                    <li>Progress measurement through confidence-accuracy calibration</li>
                    <li>Manager Care oversight and quality assurance</li>
                    <li>Access to proprietary practice materials and diagnostic tools</li>
                    <li>24 hours of expert coaching delivered online</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Enrollment Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Reversible On-Ramp</h3>
                    <p>Our enrollment follows a structured process:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Fit Check (3 minutes):</strong> Initial assessment of program alignment</li>
                      <li><strong>Initial Diagnostic (25 minutes):</strong> Baseline performance evaluation</li>
                      <li><strong>Tutor Match Session (30 minutes):</strong> Meeting with assigned tutor</li>
                      <li><strong>Commitment Decision:</strong> Option to proceed or withdraw with clear next steps</li>
                      <li><strong>Full Program:</strong> 7-day deeper diagnostic and ongoing coaching</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3>Right to Withdraw</h3>
                    <p>
                      You may withdraw from the process at any step before full program enrollment. 
                      No obligation exists until explicit agreement to proceed with the complete program.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Program Investment and Payment</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Program Fee</h3>
                    <p>The complete program investment is <strong>$2,500</strong> for 24 hours of expert coaching.</p>
                  </div>
                  
                  <div>
                    <h3>Payment Terms</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payment is due upon enrollment in the full program</li>
                      <li>We accept major credit cards and electronic bank transfers</li>
                      <li>All payments are processed through secure, encrypted systems</li>
                      <li>Receipts and invoices are provided electronically</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3>Refund Policy</h3>
                    <p>
                      Given our reversible on-ramp process, refunds are evaluated on a case-by-case basis. 
                      Requests must be made within 7 days of full program enrollment and will be reviewed based on 
                      program utilization and individual circumstances.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Student and Family Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Attendance:</strong> Consistent participation in scheduled sessions</li>
                  <li><strong>Preparation:</strong> Completion of assigned practice work between sessions</li>
                  <li><strong>Communication:</strong> Prompt notification of scheduling conflicts or concerns</li>
                  <li><strong>Environment:</strong> Providing a suitable space for online learning sessions</li>
                  <li><strong>Technology:</strong> Ensuring reliable internet connection and appropriate devices</li>
                  <li><strong>Honesty:</strong> Providing accurate information during assessments and progress tracking</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2>Our Service Standards</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Tutor Quality:</strong> All tutors are experts from top universities with deep SAT specialization</li>
                  <li><strong>Manager Care:</strong> Ongoing oversight and intervention to ensure program effectiveness</li>
                  <li><strong>Progress Measurement:</strong> Regular tracking of confidence-accuracy calibration and variance reduction</li>
                  <li><strong>Communication:</strong> Clear, timely updates on student progress and program adjustments</li>
                  <li><strong>Flexibility:</strong> Reasonable accommodation of scheduling needs within program structure</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2>Refusal Gates and Program Boundaries</h2>
                <p>We maintain quality standards by declining enrollment when fit is inappropriate. We do not accept students with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unrealistic timeline expectations (less than 2 weeks with &gt;250-point gaps)</li>
                  <li>Demands for score guarantees</li>
                  <li>Patterns of tutor-hopping or blame transfer</li>
                  <li>Requests for unauthorized materials or assistance</li>
                  <li>Acute mental health crises without parallel clinical support</li>
                  <li>Unresolved parent-student goal conflicts</li>
                </ul>
                <p>In such cases, we provide dignified redirections to appropriate alternative resources.</p>
              </section>

              <section className="space-y-4">
                <h2>Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Our Materials</h3>
                    <p>
                      All practice questions, diagnostic tools, teaching methodologies, and progress measurement systems 
                      are proprietary to SAT Insiders and protected by copyright.
                    </p>
                  </div>
                  
                  <div>
                    <h3>Usage Rights</h3>
                    <p>
                      Enrolled students receive limited, non-transferable rights to use our materials for personal SAT preparation only. 
                      Sharing, copying, or distributing materials is prohibited.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Limitation of Liability</h2>
                <p>
                  While we are committed to helping students achieve their SAT goals, we cannot guarantee specific score improvements. 
                  Individual results depend on many factors including student effort, baseline ability, and external circumstances.
                </p>
                
                <p>
                  Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, 
                  or consequential damages arising from program participation.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3>By Student/Family</h3>
                    <p>You may terminate services at any time with written notice. Refunds will be evaluated based on our refund policy.</p>
                  </div>
                  
                  <div>
                    <h3>By SAT Insiders</h3>
                    <p>We may terminate services for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Violation of these terms</li>
                      <li>Inappropriate behavior toward staff</li>
                      <li>Failure to meet payment obligations</li>
                      <li>Circumstances that prevent effective service delivery</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Modifications to Terms</h2>
                <p>
                  We may update these Terms of Service to reflect changes in our services or legal requirements. 
                  Active students will be notified of material changes with 30 days advance notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Governing Law</h2>
                <p>
                  These terms are governed by the laws of the jurisdiction where SAT Insiders operates. 
                  Any disputes will be resolved through binding arbitration.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Contact Information</h2>
                <p>Questions about these Terms of Service should be directed to:</p>
                <div className="bg-accent/5 p-4 rounded-lg">
                  <p><strong>Email:</strong> jason@satinsiders.com</p>
                  <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}