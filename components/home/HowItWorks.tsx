"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Wrench, CheckCircle } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: Calendar,
    title: "Book",
    description: "Tell us your problem and location",
  },
  {
    icon: MapPin,
    title: "We Reach",
    description: "Certified mechanic arrives in 30-45 min",
  },
  {
    icon: Wrench,
    title: "Repair",
    description: "On-site diagnosis and fast repair",
  },
  {
    icon: CheckCircle,
    title: "You Drive",
    description: "Pay after service, drive away happy",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Animate timeline progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      end: "bottom 40%",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(timelineRef.current, {
          scaleX: progress,
          transformOrigin: "left",
          duration: 0.3,
        });
      },
    });

    // Stagger step animations
    if (stepsRef.current) {
      gsap.fromTo(
        stepsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const revealRef = useGsapReveal<HTMLDivElement>({ delay: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Get your car fixed in 4 simple steps
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-silver-200 hidden md:block">
            <div
              ref={timelineRef}
              className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 origin-left scale-x-0"
            />
          </div>

          {/* Steps */}
          <div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 relative z-10"
                >
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-glow-amber">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-amber-400">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-charcoal-200">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-silver-400 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
