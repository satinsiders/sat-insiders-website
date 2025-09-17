import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { resolvePersona } from "../types/persona";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Calendar,
  BookOpen,
} from "lucide-react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSf8_SySv9tWKlUS98lwirO_SRiJjnISRE8JRO5tIOrKmuM2mQ/formResponse";

const ENTRY = {
  studentName: "entry.1044685915",
  phoneNumber: "entry.2043673781", 
  currentScore: "entry.228786782",
  targetScore: "entry.635688719",
  testDate: "entry.1038868072",
  previousTutoring: "entry.1390470085",
  mainChallenges: "entry.1892411933",
  timeline: "entry.1822549910",
  studyConstraints: "entry.1080207754",
  specificGoals: "entry.1157345934",
  source: "entry.1782156686",
  audience: "entry.846870769",
};

const PREV_TUTORING_LABEL: Record<string, string> = {
  none: "No previous tutoring",
  some: "Some tutoring (didn't reach goals)",
  extensive: "Extensive tutoring experience",
};

const TIMELINE_LABEL: Record<string, string> = {
  urgent: "Less than 6 weeks",
  moderate: "6 weeks to 4 months",
  extended: "4+ months",
  flexible: "Flexible timeline",
};

interface FitCheckProps {
  onReturn: () => void;
  source?: 'tutoring' | 'program';
}

export function FitCheck({ onReturn, source = 'tutoring' }: FitCheckProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    currentScore: "",
    targetScore: "",
    testDate: "",

    // Step 2: Current Situation
    previousTutoring: "",
    mainChallenges: [] as string[],

    // Step 3: Goals & Constraints
    timeline: "",
    studyConstraints: [] as string[],

    // Step 4: Final Details
    specificGoals: "",
    studentName: "",
    phoneNumber: "",
  });

  const totalSteps = 4;

  // Capture persona audience from URL if present (e.g., /tutoring?audience=athlete)
  const audienceParam = (() => {
    try {
      return new URLSearchParams(window.location.search).get('audience') || '';
    } catch {
      return '';
    }
  })();
  const trimmedAudienceParam = audienceParam.trim();
  const resolvedAudience = resolvePersona(trimmedAudienceParam);
  const audienceValue = resolvedAudience ?? (trimmedAudienceParam || 'general');

  const challenges = [
    "Time management during sections",
    "Confidence vs accuracy alignment",
    "Careless mistakes under pressure",
    "Strategic guessing/skipping",
    "Content gaps in specific areas",
    "Test anxiety/stress management",
    "Plateau despite practice",
    "Inconsistent performance",
    "I'm not sure",
  ];

  const constraints = [
    "Limited study time (busy schedule)",
    "Multiple test dates to consider",
    "College application deadlines",
    "Other standardized tests (APs, etc.)",
    "Extracurricular commitments",
    "Family/parental expectations",
    "Budget considerations",
    "Geographic/scheduling limitations",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      mainChallenges: prev.mainChallenges.includes(challenge)
        ? prev.mainChallenges.filter((c) => c !== challenge)
        : [...prev.mainChallenges, challenge],
    }));
  };

  const handleConstraintToggle = (constraint: string) => {
    setFormData((prev) => ({
      ...prev,
      studyConstraints: prev.studyConstraints.includes(
        constraint,
      )
        ? prev.studyConstraints.filter((c) => c !== constraint)
        : [...prev.studyConstraints, constraint],
    }));
  };

  // ⬇️ CSP-COMPLIANT SUBMISSION (No iframe blocking)
  const handleSubmit = async () => {
    try {
      if (!formData.studentName || !formData.phoneNumber) {
        alert("Please fill in all required fields (Student Name and Phone Number)");
        return;
      }

      // Build form data for submission
      const params = new URLSearchParams();
      
      // Required fields
      params.append(ENTRY.studentName, formData.studentName);
      params.append(ENTRY.phoneNumber, formData.phoneNumber);
      params.append(ENTRY.source, source === 'tutoring' ? 'Tutoring' : 'Program');
      if (ENTRY.audience && !ENTRY.audience.endsWith('__REPLACE_WITH_AUDIENCE_ENTRY_ID__')) {
        params.append(ENTRY.audience, audienceValue);
      }

      // Optional fields
      if (formData.currentScore) {
        params.append(ENTRY.currentScore, formData.currentScore);
      }

      if (formData.targetScore) {
        params.append(ENTRY.targetScore, formData.targetScore);
      }

      // Handle date field properly
      if (formData.testDate) {
        const [year, month, day] = formData.testDate.split('-');
        if (year && month && day) {
          params.append(`${ENTRY.testDate}_year`, year);
          params.append(`${ENTRY.testDate}_month`, month);
          params.append(`${ENTRY.testDate}_day`, day);
        }
      }

      if (formData.previousTutoring) {
        const tutoringLabel = PREV_TUTORING_LABEL[formData.previousTutoring] || formData.previousTutoring;
        params.append(ENTRY.previousTutoring, tutoringLabel);
      }

      if (formData.timeline) {
        const timelineLabel = TIMELINE_LABEL[formData.timeline] || formData.timeline;
        params.append(ENTRY.timeline, timelineLabel);
      }

      if (formData.specificGoals) {
        params.append(ENTRY.specificGoals, formData.specificGoals);
      }

      // Handle multiple choice fields
      if (formData.mainChallenges.length > 0) {
        formData.mainChallenges.forEach(challenge => {
          params.append(ENTRY.mainChallenges, challenge);
        });
      }

      if (formData.studyConstraints.length > 0) {
        formData.studyConstraints.forEach(constraint => {
          params.append(ENTRY.studyConstraints, constraint);
        });
      }

      // Submit to Google Forms using fetch (background submission)
      try {
        await fetch(FORM_ACTION, {
          method: 'POST',
          body: params,
          mode: 'no-cors'
        });
      } catch {
        // Expected to fail due to CORS, but submission still works
      }

      // Show success message and return to main page
      alert(
        "Thank you! We've received your fit check. A senior manager will reach out to you within 12 hours to discuss next steps."
      );
      onReturn();

    } catch (error) {
      alert(
        "We're sorry, there was an issue submitting your fit check. Please try again or contact us directly."
      );
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Target className="w-8 h-8 mx-auto text-accent" />
              <h3>Current Position & Goals</h3>
              <p className="text-sm text-neutral-600">
                Help us understand where you are and where you
                want to go
              </p>
            </div>

            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentScore">
                    Current Score Range
                  </Label>
                  <Input
                    id="currentScore"
                    placeholder="e.g., 1240-1280"
                    value={formData.currentScore}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        currentScore: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetScore">
                    Target Score
                  </Label>
                  <Input
                    id="targetScore"
                    placeholder="e.g., 1450+"
                    value={formData.targetScore}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        targetScore: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="testDate">
                  Target Test Date
                </Label>
                <Input
                  id="testDate"
                  type="date"
                  value={formData.testDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      testDate: e.target.value,
                    }))
                  }
                />
                <p className="text-xs text-neutral-500">
                  If uncertain, choose your preferred timeline
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-accent" />
              <h3>Current Study Situation</h3>
              <p className="text-sm text-neutral-600">
                Tell us about your current prep approach and
                challenges
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Previous tutoring experience?</Label>
                <RadioGroup
                  value={formData.previousTutoring}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({
                      ...prev,
                      previousTutoring: value,
                    }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">
                      No previous tutoring
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="some" id="some" />
                    <Label htmlFor="some">
                      Some tutoring (didn't reach goals)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="extensive"
                      id="extensive"
                    />
                    <Label htmlFor="extensive">
                      Extensive tutoring experience
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>
                  Main challenges (select all that apply)
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={challenge}
                        checked={formData.mainChallenges.includes(
                          challenge,
                        )}
                        onCheckedChange={() =>
                          handleChallengeToggle(challenge)
                        }
                      />
                      <Label
                        htmlFor={challenge}
                        className="text-sm"
                      >
                        {challenge}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Calendar className="w-8 h-8 mx-auto text-accent" />
              <h3>Timeline & Constraints</h3>
              <p className="text-sm text-neutral-600">
                Help us understand your situation and
                limitations
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label>
                  How much time until your target test date?
                </Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({
                      ...prev,
                      timeline: value,
                    }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="urgent"
                      id="urgent"
                    />
                    <Label htmlFor="urgent">
                      Less than 6 weeks
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="moderate"
                      id="moderate-time"
                    />
                    <Label htmlFor="moderate-time">
                      6 weeks to 4 months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="extended"
                      id="extended"
                    />
                    <Label htmlFor="extended">4+ months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="flexible"
                      id="flexible"
                    />
                    <Label htmlFor="flexible">
                      Flexible timeline
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>
                  Study constraints (select all that apply)
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {constraints.map((constraint) => (
                    <div
                      key={constraint}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={constraint}
                        checked={formData.studyConstraints.includes(
                          constraint,
                        )}
                        onCheckedChange={() =>
                          handleConstraintToggle(constraint)
                        }
                      />
                      <Label
                        htmlFor={constraint}
                        className="text-sm"
                      >
                        {constraint}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <CheckCircle className="w-8 h-8 mx-auto text-accent" />
              <h3>Final Details</h3>
              <p className="text-sm text-neutral-600">
                Almost done! One of our managers will reach out
                within 12 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentName">
                    Student Name *
                  </Label>
                  <Input
                    id="studentName"
                    placeholder="e.g., John Doe"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        studentName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="e.g., (555) 123-4567"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificGoals">
                  Specific goals beyond score improvement
                  (optional)
                </Label>
                <Textarea
                  id="specificGoals"
                  placeholder="e.g., 'Build confidence for test day', 'Learn to manage time better', 'Reduce careless errors'"
                  value={formData.specificGoals}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      specificGoals: e.target.value,
                    }))
                  }
                  rows={3}
                />
              </div>

              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <div className="text-sm">
                    <p className="font-medium text-accent mb-1">
                      What happens next
                    </p>
                    <p className="text-neutral-600">
                      A senior manager will reach out to you
                      within 12 hours to discuss your fit check
                      results and potential next steps. No
                      pressure—just honest conversation about
                      whether we're the right match.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="h-16 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onReturn}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to SAT Insiders
            </Button>
            <Badge
              variant="outline"
              className="border-accent/20 text-accent"
            >
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-700">
                Progress
              </span>
              <span className="text-sm text-neutral-500">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-accent-teal to-accent-violet h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(currentStep / totalSteps) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="p-8 border-neutral-200">
            {renderStep()}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-neutral-100">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
                >
                  Submit Fit Check
                  <CheckCircle className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>

          {/* Time Estimate */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-neutral-500 bg-neutral-50 rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              Estimated time remaining:{" "}
              {Math.max(4 - currentStep, 1)} minutes
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
