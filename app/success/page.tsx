"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useBookingStore } from "@/store/bookingStore";
import { gsap } from "gsap";

const PHONE_NUMBER = "+971501234567";
const WHATSAPP_NUMBER = "+971501234567";

export default function SuccessPage() {
  const router = useRouter();
  const { contactPhone, reset } = useBookingStore();

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".success-content",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".success-icon",
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
  }, []);

  const handleReset = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <div className="success-content">
          <div className="success-icon inline-flex items-center justify-center w-24 h-24 bg-amber-400 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-silver-400 mb-8">
            Your mechanic is being dispatched. You&apos;ll receive a confirmation
            call shortly.
          </p>

          <div className="bg-white rounded-2xl border border-silver-200 shadow-premium p-6 mb-8 space-y-4">
            <div>
              <p className="text-sm text-silver-400 mb-1">Expected Arrival</p>
              <p className="text-2xl font-bold text-charcoal-200">30-45 minutes</p>
            </div>
            {contactPhone && (
              <div>
                <p className="text-sm text-silver-400 mb-1">Contact Number</p>
                <p className="text-lg font-semibold text-charcoal-200">
                  {contactPhone}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="space-y-3">
            <Button onClick={handleReset} variant="ghost">
              Book Another Service
            </Button>
            <Link href="/" className="block text-sm text-silver-400 hover:text-amber-400">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
