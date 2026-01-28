"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const revealRef = useGsapReveal({ delay: 0.2 });

  useEffect(() => {
    if (!cardsRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Stagger card animations
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Magnetic hover effect for cards
    const cards = cardsRef.current.children;
    Array.from(cards).forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          x: x * 0.05,
          y: y * 0.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Fast, reliable car repair services at your location
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-glow-amber transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-bold text-charcoal-200">
                  {service.name}
                </h3>
                <p className="text-silver-400 text-sm">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-silver-200">
                  <span className="text-2xl font-bold text-amber-400">
                    From AED {service.startingPrice}
                  </span>
                  <Link href={`/book?service=${service.id}`}>
                    <Button variant="outline" size="sm">
                      Book
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="secondary" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
