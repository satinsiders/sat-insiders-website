import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How do I know if this program will work for my student?",
      answer: "Our 3-minute Fit Check evaluates your student's current score, goals, and learning style. We only accept students we're confident we can help improve by 150+ points. If we can't help, we'll tell you honestly upfront."
    },
    {
      question: "What if my teenager resists the program or doesn't do the work?",
      answer: "We've worked with hundreds of reluctant students. Our approach focuses on building intrinsic motivation through early wins and clear progress tracking. Parents receive weekly updates so you can support without nagging."
    },
    {
      question: "How much time will this require from my student each week?",
      answer: "6-7 hours total: 2 hours of coaching sessions + 3-4 hours of guided practice. We provide a structured schedule that fits around school and extracurriculars. Everything is designed to be efficient, not time-consuming."
    },
    {
      question: "What's your track record with college admissions and scholarships?",
      answer: "Our students average 200+ point improvements, with 89% reaching their target scores. This translates to significantly better college options and an average of $50,000+ in additional merit aid eligibility."
    },
    {
      question: "Do you guarantee results?",
      answer: "We guarantee our proven methodology, weekly progress tracking, and full transparency. While we can't control student effort, we monitor engagement closely and adjust our approach as needed. If a student isn't making progress, we'll discuss alternative strategies."
    },
    {
      question: "How is this different from other SAT prep programs?",
      answer: "Most programs focus on content review. We focus on smart decision-making under pressure. Our students learn to maximize their existing knowledge rather than memorizing endless material. It's more efficient and more effective."
    },
    {
      question: "Can you work with students who are already scoring 1400+?",
      answer: "Absolutely. High scorers need precision training, not more content. We focus on eliminating careless errors, managing test anxiety, and perfecting timing strategies to achieve consistent 1500+ performance."
    },
    {
      question: "What happens if we need to pause or stop the program?",
      answer: "Life happens. We offer flexible scheduling and can pause the program if needed. Our goal is to work with your family's needs, not against them. We'll always prioritize your student's well-being over rigid adherence to schedules."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 style={{ color: 'var(--primary-navy)' }}>
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
              >
                <span className="font-medium" style={{ color: 'var(--primary-navy)' }}>
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent-teal)' }} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-neutral-100">
                    <p style={{ color: 'var(--neutral-700)' }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm bg-white rounded-full px-6 py-3 border border-neutral-200">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span style={{ color: 'var(--neutral-600)' }}>
              More questions? We're here to help you understand the fit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}