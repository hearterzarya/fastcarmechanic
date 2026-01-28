"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, formatWhatsAppMessage } from "@/lib/utils";

const PHONE_NUMBER = "+971501234567";
const WHATSAPP_NUMBER = "+971501234567";

export function MobileStickyBar() {
  const whatsappMessage = formatWhatsAppMessage({
    location: "UAE",
    issue: "Car breakdown",
  });

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-amber-400 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center space-y-1 py-2 px-3 bg-charcoal-200 text-white rounded-2xl font-semibold text-sm active:scale-95 transition-transform"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" />
          <span>Call</span>
        </a>
        <a
          href={getWhatsAppUrl(WHATSAPP_NUMBER, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 py-2 px-3 bg-green-500 text-white rounded-2xl font-semibold text-sm active:scale-95 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <Link
          href="/book"
          className="flex flex-col items-center justify-center space-y-1 py-2 px-3 bg-amber-400 text-white rounded-2xl font-semibold text-sm active:scale-95 transition-transform shadow-glow-amber"
          aria-label="Book Now"
        >
          <Calendar className="w-5 h-5" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );
}
