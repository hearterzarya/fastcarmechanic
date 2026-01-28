"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceAreas } from "@/data/areas";
import { Badge } from "@/components/ui/badge";
import { useGsapReveal } from "@/hooks/useGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const revealRef = useGsapReveal({ delay: 0.2 });

  useEffect(() => {
    if (!chipsRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      chipsRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: chipsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-silver-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Fast response times across all UAE Emirates
          </p>
        </div>

        <div
          ref={chipsRef}
          className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
        >
          {serviceAreas.map((area) => (
            <button
              key={area.id}
              onClick={() =>
                setSelectedArea(selectedArea === area.id ? null : area.id)
              }
              className={`relative px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                selectedArea === area.id
                  ? "bg-amber-400 text-white shadow-glow-amber scale-105"
                  : "bg-white text-charcoal-200 border-2 border-silver-300 hover:border-amber-400 hover:shadow-lg"
              }`}
            >
              <div className="flex flex-col items-center space-y-1">
                <span>{area.name}</span>
                <span
                  className={`text-xs ${
                    selectedArea === area.id
                      ? "text-white/90"
                      : "text-silver-400"
                  }`}
                >
                  ETA: {area.eta}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-silver-400 text-sm">
            Click on a city to see estimated arrival time
          </p>
        </div>
      </div>
    </section>
  );
}
