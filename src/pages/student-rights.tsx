import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, Shield, Eye, MessageCircle, Clock } from "lucide-react";

interface StudentRightsProps {
  onReturn: () => void;
}

export function StudentRights({ onReturn }: StudentRightsProps) {
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
              <h1 style={{ color: 'var(--primary-navy)' }}>Student Rights</h1>
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                Your rights and protections as a SAT Insiders student
              </p>
            </div>

            {/* Core Rights Overview */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border-accent/20 bg-accent/5">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2" style={{ color: 'var(--primary-navy)' }}>
                      Privacy Protection
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                      Your educational records and personal information are protected under FERPA and our privacy standards.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-green-200 bg-green-50">
                <div className="flex items-start space-x-3">
                  <Eye className="w-6 h-6 mt-1 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-green-800">
                      Transparency Rights
                    </h3>
                    <p className="text-sm text-green-700">
                      Access to your progress data, teaching methodology, and clear communication about program structure.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-blue-200 bg-blue-50">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-6 h-6 mt-1 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-blue-800">
                      Voice and Feedback
                    </h3>
                    <p className="text-sm text-blue-700">
                      Right to provide feedback, request changes, and have your concerns addressed promptly.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-amber-200 bg-amber-50">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 mt-1 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-amber-800">
                      Flexible Engagement
                    </h3>
                    <p className="text-sm text-amber-700">
                      Right to reasonable accommodations and the ability to exit the program with dignity.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 space-y-8">
              <section className="space-y-4">
                <h2>Academic Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Right to Quality Instruction</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to expert tutors with demonstrated SAT specialization</li>
                      <li>Instruction based on proven decision-boundary training methodology</li>
                      <li>Manager Care oversight to ensure teaching quality</li>
                      <li>Regular progress measurement using calibrated metrics</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Personalized Learning</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Individualized assessment of learning needs and constraints</li>
                      <li>Customized pacing based on your availability and goals</li>
                      <li>Adaptation of teaching methods to your learning style</li>
                      <li>Focus on your specific areas of improvement</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Academic Honesty</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All instruction and materials comply with College Board guidelines</li>
                      <li>No unauthorized assistance or materials</li>
                      <li>Honest assessment of your progress and realistic goal-setting</li>
                      <li>Ethical coaching that prepares you for legitimate test success</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Communication Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Right to Clear Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Transparent explanation of our teaching methodology</li>
                      <li>Clear communication about program structure and expectations</li>
                      <li>Regular progress updates with specific, measurable data</li>
                      <li>Honest discussion of challenges and recommended adjustments</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Direct Communication</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Direct access to your assigned tutor</li>
                      <li>Ability to communicate concerns to management</li>
                      <li>Prompt responses to questions and scheduling requests</li>
                      <li>Regular check-ins on program satisfaction</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Feedback Channels</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Multiple ways to provide feedback about your experience</li>
                      <li>Anonymous feedback options when appropriate</li>
                      <li>Regular program evaluation opportunities</li>
                      <li>Assurance that feedback will be taken seriously</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Privacy and Data Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Educational Record Privacy (FERPA)</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Control over who has access to your educational records</li>
                      <li>Right to inspect and review your educational records</li>
                      <li>Right to request amendment of inaccurate records</li>
                      <li>Right to consent before disclosure of personally identifiable information</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Data Access and Control</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to all data collected about your performance</li>
                      <li>Explanation of how your data is used for instruction</li>
                      <li>Right to request corrections to inaccurate data</li>
                      <li>Right to request deletion of your data upon program completion</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Confidentiality Protection</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your progress and challenges remain confidential</li>
                      <li>No sharing of personal information without consent</li>
                      <li>Secure storage and transmission of all data</li>
                      <li>Limited access to authorized personnel only</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Procedural Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Right to Fair Treatment</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Respectful treatment from all staff members</li>
                      <li>Non-discriminatory practices in all program aspects</li>
                      <li>Equal access to program resources and support</li>
                      <li>Consideration of individual circumstances and needs</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Due Process</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fair hearing of any complaints or concerns</li>
                      <li>Opportunity to respond to any program issues</li>
                      <li>Clear procedures for addressing disputes</li>
                      <li>Impartial review of any program decisions affecting you</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Program Modification</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Request reasonable adjustments to program structure</li>
                      <li>Accommodation of scheduling constraints when possible</li>
                      <li>Modification of teaching approaches based on your needs</li>
                      <li>Discussion of alternative strategies if current approach isn't working</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Exit Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Right to Voluntary Withdrawal</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Exit the program at any time with appropriate notice</li>
                      <li>Clear explanation of any financial implications</li>
                      <li>Assistance with transition planning if desired</li>
                      <li>No penalties or negative treatment for withdrawal</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Right to Alternative Resources</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Referral to appropriate alternative resources if we're not the right fit</li>
                      <li>Honest assessment of other approaches that might work better</li>
                      <li>Support in transitioning to alternative preparation methods</li>
                      <li>Maintaining professional relationships regardless of program outcome</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>How to Exercise Your Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Primary Contact</h3>
                    <p>For most rights-related requests or concerns:</p>
                    <div className="bg-accent/5 p-4 rounded-lg">
                      <p><strong>Email:</strong> jason@satinsiders.com</p>
                      <p><strong>Subject Line:</strong> Student Rights - [Your Specific Request]</p>
                    </div>
                  </div>

                  <div>
                    <h3>Response Timeline</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Urgent matters:</strong> Response within 24 hours</li>
                      <li><strong>Standard requests:</strong> Response within 48 hours</li>
                      <li><strong>Complex issues:</strong> Acknowledgment within 48 hours, resolution within 7 days</li>
                      <li><strong>Data requests:</strong> Fulfillment within 30 days as required by law</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Documentation</h3>
                    <p>
                      We recommend keeping records of your communications with us, including emails, progress reports, 
                      and any agreements or changes to your program. This helps ensure clarity and accountability.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Rights Violations</h2>
                <p>
                  If you believe any of your rights have been violated, please contact us immediately. 
                  We take rights violations seriously and will investigate promptly and fairly.
                </p>
                
                <p>
                  If you are not satisfied with our response, you may also contact relevant educational authorities 
                  or consumer protection agencies in your jurisdiction.
                </p>
              </section>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}