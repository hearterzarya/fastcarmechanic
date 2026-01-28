"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Clock, Shield } from "lucide-react";
import { animateCounter } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const mechanicsRef = useRef<HTMLSpanElement>(null);
  const citiesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate counters
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 85%",
      onEnter: () => {
        if (ratingRef.current) {
          animateCounter(ratingRef.current, 4.8, 1.5, "★");
        }
        if (mechanicsRef.current) {
          animateCounter(mechanicsRef.current, 150, 2, "+");
        }
        if (citiesRef.current) {
          animateCounter(citiesRef.current, 7, 1.5, "");
        }
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-charcoal-200 to-charcoal-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-1 text-amber-400 mb-2">
              <Star className="w-6 h-6 fill-current" />
              <span
                ref={ratingRef}
                className="text-4xl font-bold text-white"
              >
                0★
              </span>
            </div>
            <p className="text-silver-200 font-medium">Rated</p>
            <p className="text-silver-300 text-sm">Trusted in UAE</p>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-6 h-6 text-cyan-400" />
              <span
                ref={mechanicsRef}
                className="text-4xl font-bold text-white"
              >
                0+
              </span>
            </div>
            <p className="text-silver-200 font-medium">Certified Mechanics</p>
            <p className="text-silver-300 text-sm">Fast response</p>
          </div>

          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="w-6 h-6 text-amber-400" />
              <span
                ref={citiesRef}
                className="text-4xl font-bold text-white"
              >
                0
              </span>
            </div>
            <p className="text-silver-200 font-medium">Cities Covered</p>
            <p className="text-silver-300 text-sm">Across UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
