"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Phone, Shield, DollarSign, Wrench } from "lucide-react";
import Link from "next/link";
import { stagger } from "@/lib/animations";

const PHONE_NUMBER = "+971501234567";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    if (badgesRef.current?.children) {
      tl.fromTo(
        badgesRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      );
    }
  }, []);

  const trustBadges = [
    { icon: DollarSign, text: "Pay after service" },
    { icon: Shield, text: "Transparent pricing" },
    { icon: Wrench, text: "No towing needed" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-300 via-charcoal-200 to-charcoal-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Abstract car line art placeholder */}
      <div className="absolute inset-0 opacity-5">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 300 Q300 200 500 300 T900 300"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="450" y="250" width="100" height="60" rx="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="480" cy="310" r="20" stroke="currentColor" strokeWidth="2" />
          <circle cx="520" cy="310" r="20" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Stuck on the Road?
            <br />
            <span className="text-amber-400">We Arrive Fast.</span>
          </h1>

          <p
            ref={subtextRef}
            className="text-xl sm:text-2xl text-silver-200 max-w-2xl mx-auto"
          >
            Roadside repair • Doorstep service • Certified mechanics
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book">
              <Button variant="emergency" size="lg" className="text-lg px-8 py-6">
                Book Mechanic
              </Button>
            </Link>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-charcoal-200">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <div
            ref={badgesRef}
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-silver-200"
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
