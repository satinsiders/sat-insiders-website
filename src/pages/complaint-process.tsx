import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, AlertTriangle, MessageSquare, Search, CheckCircle } from "lucide-react";

interface ComplaintProcessProps {
  onReturn: () => void;
}

export function ComplaintProcess({ onReturn }: ComplaintProcessProps) {
  const processSteps = [
    {
      step: 1,
      title: "Initial Contact",
      duration: "Immediate",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Submit your concern through any of our communication channels",
      details: "We accept complaints via email, during sessions, or through direct communication with management."
    },
    {
      step: 2,
      title: "Acknowledgment",
      duration: "Within 24 hours",
      icon: <CheckCircle className="w-5 h-5" />,
      description: "Receive confirmation that your complaint has been received and is being reviewed",
      details: "You'll get a reference number and initial timeline for resolution."
    },
    {
      step: 3,
      title: "Investigation",
      duration: "2-7 days",
      icon: <Search className="w-5 h-5" />,
      description: "Thorough review of your concern with all relevant parties",
      details: "We gather information, review records, and conduct interviews as needed."
    },
    {
      step: 4,
      title: "Resolution",
      duration: "Within 10 days",
      icon: <CheckCircle className="w-5 h-5" />,
      description: "Implementation of solution and follow-up communication",
      details: "Clear explanation of actions taken and ongoing monitoring as appropriate."
    }
  ];

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
              <h1 style={{ color: 'var(--primary-navy)' }}>Complaint Process</h1>
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                How we handle concerns and ensure student satisfaction
              </p>
            </div>

            {/* Quick Contact Alert */}
            <Card className="p-6 border-accent/20 bg-accent/5">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2" style={{ color: 'var(--primary-navy)' }}>
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--neutral-700)' }}>
                    For urgent concerns requiring immediate attention, contact us directly:
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">jason@satinsiders.com</p>
                    <p className="text-sm text-neutral-600">Subject: Urgent - Student Concern</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Process Overview */}
            <Card className="p-8 space-y-8">
              <section className="space-y-4">
                <h2>Our Commitment to Resolution</h2>
                <p>
                  At SAT Insiders, we believe every concern deserves prompt, fair, and thorough attention. 
                  Our complaint process is designed to address issues quickly while ensuring all parties are heard 
                  and appropriate solutions are implemented.
                </p>
              </section>

              <section className="space-y-6">
                <h2>Resolution Process</h2>
                <div className="grid gap-6">
                  {processSteps.map((step) => (
                    <Card key={step.step} className="p-6 border-neutral-200 hover:shadow-lg transition-all duration-200">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <div className="text-accent">
                              {step.icon}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                              Step {step.step}: {step.title}
                            </h4>
                            <Badge variant="outline" className="border-accent/20 text-accent">
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                            {step.description}
                          </p>
                          <div className="pt-2 border-t border-neutral-100">
                            <p className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2>Types of Concerns We Address</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3>Academic Concerns</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Teaching methodology questions</li>
                      <li>Progress measurement concerns</li>
                      <li>Tutor-student fit issues</li>
                      <li>Pacing or difficulty adjustments</li>
                      <li>Resource access problems</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3>Service Concerns</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Scheduling conflicts or issues</li>
                      <li>Communication problems</li>
                      <li>Technology difficulties</li>
                      <li>Billing or payment questions</li>
                      <li>Policy clarifications</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3>Interpersonal Concerns</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Staff interaction issues</li>
                      <li>Communication style concerns</li>
                      <li>Respect or professionalism questions</li>
                      <li>Accommodation requests</li>
                      <li>Cultural sensitivity matters</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3>Program Structure</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Program expectations clarification</li>
                      <li>Goal alignment discussions</li>
                      <li>Methodology questions</li>
                      <li>Family coordination issues</li>
                      <li>Exit process assistance</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>How to Submit a Complaint</h2>
                <div className="space-y-6">
                  <div>
                    <h3>Primary Method: Email</h3>
                    <div className="bg-neutral-50 p-4 rounded-lg space-y-2">
                      <p><strong>Email:</strong> jason@satinsiders.com</p>
                      <p><strong>Subject Line:</strong> Student Complaint - [Brief Description]</p>
                      <p><strong>Include:</strong></p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Your name and contact information</li>
                        <li>Date(s) the issue occurred</li>
                        <li>Detailed description of the concern</li>
                        <li>Any relevant documentation or evidence</li>
                        <li>Your preferred resolution or outcome</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3>Alternative Methods</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>During Sessions:</strong> Speak directly with your tutor or request management contact</li>
                      <li><strong>Phone Discussion:</strong> Request a callback for verbal complaint submission</li>
                      <li><strong>Written Letter:</strong> For formal documentation (address provided upon request)</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Anonymous Complaints</h3>
                    <p className="text-sm">
                      While we prefer direct communication for faster resolution, anonymous complaints are accepted. 
                      However, our ability to follow up and provide specific remedies may be limited without contact information.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>What to Expect During Resolution</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Communication Standards</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Regular updates on investigation progress</li>
                      <li>Clear explanation of any delays</li>
                      <li>Direct communication from decision-makers when appropriate</li>
                      <li>Written summary of resolution and any ongoing actions</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Investigation Principles</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Impartiality:</strong> Fair consideration of all perspectives</li>
                      <li><strong>Thoroughness:</strong> Complete review of relevant information</li>
                      <li><strong>Confidentiality:</strong> Information shared only with those who need to know</li>
                      <li><strong>Documentation:</strong> Proper records maintained for accountability</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Possible Outcomes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Program modifications or adjustments</li>
                      <li>Staff coaching or additional training</li>
                      <li>Policy clarifications or changes</li>
                      <li>Service credits or financial adjustments</li>
                      <li>Alternative arrangements or accommodations</li>
                      <li>In extreme cases, program transfer or termination with dignity</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Escalation Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3>If You're Not Satisfied</h3>
                    <p>If you're not satisfied with the initial resolution:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Request escalation to senior management</li>
                      <li>Provide specific reasons for dissatisfaction</li>
                      <li>Allow additional time for comprehensive review</li>
                      <li>Consider external mediation if appropriate</li>
                    </ol>
                  </div>

                  <div>
                    <h3>External Resources</h3>
                    <p>If internal resolution isn't satisfactory, you may contact:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Local consumer protection agencies</li>
                      <li>Educational oversight authorities</li>
                      <li>Better Business Bureau</li>
                      <li>Professional mediation services</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>Prevention and Continuous Improvement</h2>
                <div className="space-y-4">
                  <div>
                    <h3>Proactive Measures</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Regular check-ins with students and families</li>
                      <li>Ongoing staff training and development</li>
                      <li>Clear communication of expectations and processes</li>
                      <li>Systematic review of complaints for pattern identification</li>
                    </ul>
                  </div>

                  <div>
                    <h3>Learning from Feedback</h3>
                    <p>
                      Every complaint helps us improve our services. We analyze complaint patterns, update our procedures, 
                      and implement changes to prevent similar issues in the future.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2>No Retaliation Policy</h2>
                <p>
                  SAT Insiders strictly prohibits retaliation against students or families who submit complaints in good faith. 
                  Your program quality, tutor assignments, and treatment will not be negatively affected by raising legitimate concerns.
                </p>
              </section>

              <section className="space-y-4">
                <h2>Contact Information</h2>
                <div className="bg-accent/5 p-6 rounded-lg">
                  <h3 className="font-medium mb-4" style={{ color: 'var(--primary-navy)' }}>
                    Complaint Submission
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> jason@satinsiders.com</p>
                    <p><strong>Subject Line:</strong> Student Complaint - [Your Concern]</p>
                    <p><strong>Response Time:</strong> Within 24 hours for acknowledgment</p>
                    <p><strong>Full Resolution:</strong> Within 10 business days for most issues</p>
                  </div>
                </div>
              </section>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}