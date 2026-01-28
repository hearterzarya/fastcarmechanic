"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How quickly can you reach me?",
    answer:
      "We typically arrive within 30-45 minutes across major UAE cities. In Dubai and Abu Dhabi, we often reach within 25-35 minutes. Emergency cases are prioritized.",
  },
  {
    question: "Do you charge for the visit if you can't fix the issue?",
    answer:
      "We charge a small diagnostic fee (AED 50-100) if the issue cannot be fixed on-site. However, if we can fix it, this fee is included in the service cost. All charges are transparent and discussed before work begins.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and digital payment methods (Apple Pay, Google Pay). Payment is made after service completion, and we provide a detailed invoice.",
  },
  {
    question: "Are your mechanics certified?",
    answer:
      "Yes, all our mechanics are certified professionals with years of experience. They undergo regular training and are equipped with the latest diagnostic tools.",
  },
  {
    question: "Can you fix all car brands?",
    answer:
      "We service all major car brands including Toyota, Honda, BMW, Mercedes, Audi, Nissan, Ford, and more. If we cannot fix a specific issue on-site, we'll arrange towing to our partner workshop.",
  },
  {
    question: "What if my car needs parts that aren't available?",
    answer:
      "We carry common parts in our service vehicles. For specialized parts, we can source them quickly from our network of suppliers. We'll inform you of the timeline and cost before proceeding.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const revealRef = useGsapReveal({ delay: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-silver-200 shadow-premium overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-silver-50 transition-colors"
              >
                <span className="font-semibold text-charcoal-200 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-silver-400 transition-transform flex-shrink-0",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-silver-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-silver-400 text-sm">
            Still have questions?{" "}
            <a href="/contact" className="text-amber-400 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
