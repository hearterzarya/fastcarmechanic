"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { magneticHover } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PHONE_NUMBER = "+971501234567";

export function EmergencyPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const revealRef = useGsapReveal<HTMLDivElement>({ delay: 0.2 });

  useEffect(() => {
    if (!panelRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Animate route line
    if (routeRef.current) {
      const path = routeRef.current;
      const pathLength = path.getTotalLength();
      
      // Set initial dash array and offset
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      
      gsap.fromTo(
        path,
        { 
          strokeDashoffset: pathLength,
          opacity: 0 
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Magnetic hover for CTA
    if (ctaRef.current) {
      const cleanup = magneticHover(ctaRef.current, 0.2);
      return cleanup;
    }
  }, []);

  return (
    <section ref={panelRef} className="py-24 bg-charcoal-300 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={revealRef} className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            24/7 Roadside Assistance
          </h2>
          <p className="text-xl text-silver-200 max-w-2xl mx-auto">
            Stuck on the road? Our certified mechanics are ready to help you
            anytime, anywhere across UAE.
          </p>

          {/* Route animation placeholder */}
          <div className="relative h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 400 100"
              className="w-full h-full opacity-30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={routeRef}
                d="M50 50 Q200 20 350 50"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-cyan-400"
              />
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="currentColor"
                className="text-amber-400"
              />
              <circle
                cx="350"
                cy="50"
                r="8"
                fill="currentColor"
                className="text-cyan-400"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Navigation className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>

          <a href={`tel:${PHONE_NUMBER}`} ref={ctaRef}>
            <Button
              variant="emergency"
              size="lg"
              className="text-xl px-12 py-6"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
