import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+971501234567";
const WHATSAPP_NUMBER = "+971501234567";
const EMAIL = "support@mechanicuae.ae";

export function Footer() {
  const footerLinks = {
    services: [
      { href: "/services", label: "All Services" },
      { href: "/roadside", label: "Roadside Assistance" },
      { href: "/doorstep", label: "Doorstep Service" },
      { href: "/pricing", label: "Pricing" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/areas", label: "Service Areas" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund", label: "Refund Policy" },
    ],
  };

  return (
    <footer className="bg-charcoal-300 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <span className="text-xl font-bold">MechanicUAE</span>
            </div>
            <p className="text-silver-300 text-sm">
              Premium car mechanic services across UAE. Fast, reliable, and
              certified professionals at your doorstep.
            </p>
            <div className="flex space-x-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-10 h-10 rounded-full bg-charcoal-50 flex items-center justify-center hover:bg-amber-400 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-50 flex items-center justify-center hover:bg-amber-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver-300 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">24/7 Emergency</h3>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center space-x-3 text-silver-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-silver-300 hover:text-amber-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center space-x-3 text-silver-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{EMAIL}</span>
              </a>
              <div className="flex items-start space-x-3 text-silver-300">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">
                  Serving all UAE Emirates
                </span>
              </div>
            </div>
            <Link href="/book" className="block pt-2">
              <Button variant="emergency" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-silver-400 text-sm">
            © {new Date().getFullYear()} MechanicUAE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver-400 hover:text-amber-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
