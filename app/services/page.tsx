"use client";

import { useState, useEffect, useRef } from "react";
import { services, Service } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const revealRef = useGsapReveal({ delay: 0.2 });

  const categories = [
    { id: "all", label: "All Services" },
    { id: "emergency", label: "Emergency" },
    { id: "maintenance", label: "Maintenance" },
    { id: "diagnostic", label: "Diagnostic" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  useEffect(() => {
    if (!cardsRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [selectedCategory]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-charcoal-200 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Professional car repair services at your location
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-2xl font-semibold text-sm transition-all ${
                selectedCategory === category.id
                  ? "bg-amber-400 text-white shadow-glow-amber"
                  : "bg-white text-charcoal-200 border-2 border-silver-300 hover:border-amber-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-glow-amber transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{service.icon}</div>
                  <Badge variant="outline">{service.category}</Badge>
                </div>
                <h3 className="text-xl font-bold text-charcoal-200">
                  {service.name}
                </h3>
                <p className="text-silver-400 text-sm">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-silver-200">
                  <span className="text-2xl font-bold text-amber-400">
                    From AED {service.startingPrice}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedService(service)}
                      >
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center space-x-3">
                          <span className="text-4xl">{service.icon}</span>
                          <span>{service.name}</span>
                        </DialogTitle>
                        <DialogDescription>{service.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        <div>
                          <h4 className="font-semibold text-charcoal-200 mb-2">
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {service.included.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2 text-silver-400"
                              >
                                <span className="text-amber-400 mt-1">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal-200 mb-2">
                            Time Estimate
                          </h4>
                          <p className="text-silver-400">{service.timeEstimate}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal-200 mb-2">
                            Common Symptoms
                          </h4>
                          <ul className="space-y-2">
                            {service.commonSymptoms.map((symptom, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2 text-silver-400"
                              >
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-silver-200">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl font-bold text-amber-400">
                              Starting at AED {service.startingPrice}
                            </span>
                          </div>
                          <Link href={`/book?service=${service.id}`}>
                            <Button variant="default" className="w-full">
                              Book This Service
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Link href={`/book?service=${service.id}`} className="flex-1">
                    <Button variant="default" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sticky CTA */}
        <div className="sticky bottom-4 lg:hidden bg-white border-2 border-amber-400 rounded-2xl shadow-glow-amber p-4">
          <Link href="/book">
            <Button variant="emergency" className="w-full">
              Book Service Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
