"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, formatWhatsAppMessage } from "@/lib/utils";

const PHONE_NUMBER = "+971501234567";
const WHATSAPP_NUMBER = "+971501234567";

export function EmergencyStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      stripRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Subtle glow animation
    gsap.to(stripRef.current, {
      boxShadow: "0 0 20px rgba(255, 107, 53, 0.3)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const whatsappMessage = formatWhatsAppMessage({
    location: "UAE",
    issue: "Emergency breakdown",
  });

  return (
    <div
      ref={stripRef}
      className="bg-amber-400 text-white py-3 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
        <p className="text-sm sm:text-base font-semibold text-center sm:text-left">
          Breakdown? We reach you in 30–45 minutes across UAE.
        </p>
        <div className="flex items-center space-x-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl font-medium text-sm transition-colors backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
          <a
            href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl font-medium text-sm transition-colors backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
