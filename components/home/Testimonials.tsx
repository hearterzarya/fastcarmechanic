"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGsapReveal } from "@/hooks/useGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    location: "Dubai, Sheikh Zayed Road",
    rating: 5,
    text: "Saved me on Sheikh Zayed Road during rush hour. Mechanic arrived in 25 minutes and fixed my battery issue on the spot. Professional and fast!",
    verified: true,
  },
  {
    name: "Sarah Johnson",
    location: "Abu Dhabi, Corniche",
    rating: 5,
    text: "AC stopped working in the middle of summer. They came to my office parking, fixed it within an hour. Excellent service and transparent pricing.",
    verified: true,
  },
  {
    name: "Mohammed Hassan",
    location: "Sharjah, Al Qasimia",
    rating: 5,
    text: "Flat tyre at midnight. Called them and they arrived quickly. Very professional team, explained everything clearly. Highly recommended!",
    verified: true,
  },
];

export function Testimonials() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const revealRef = useGsapReveal<HTMLDivElement>({ delay: 0.2 });

  useEffect(() => {
    if (!cardsRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 40, rotationY: -15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Real experiences from satisfied customers across UAE
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-glow-amber transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-silver-400 text-sm leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="pt-4 border-t border-silver-200">
                  <p className="font-semibold text-charcoal-200">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-silver-400">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
