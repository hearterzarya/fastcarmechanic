import { EmergencyPanel } from "@/components/home/EmergencyPanel";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Shield, Wrench } from "lucide-react";
import Link from "next/link";

const PHONE_NUMBER = "+971501234567";

export default function RoadsidePage() {
  return (
    <div className="pt-32 pb-24">
      <section className="py-24 bg-gradient-to-br from-charcoal-300 via-charcoal-200 to-charcoal-300 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              24/7 Emergency Roadside Assistance
            </h1>
            <p className="text-xl text-silver-200 max-w-2xl mx-auto">
              Stuck on the road? Our certified mechanics arrive fast to get you
              back on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button variant="emergency" size="lg" className="text-lg px-8 py-6">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now
                </Button>
              </a>
              <Link href="/book">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-charcoal-200"
                >
                  Book Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Clock className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  Fast Response
                </h3>
                <p className="text-silver-400 text-sm">
                  Average arrival time: 30-45 minutes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  Certified Mechanics
                </h3>
                <p className="text-silver-400 text-sm">
                  Professional, experienced, and fully equipped
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Wrench className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  On-Site Repair
                </h3>
                <p className="text-silver-400 text-sm">
                  Most issues fixed on the spot, no towing needed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  24/7 Available
                </h3>
                <p className="text-silver-400 text-sm">
                  Round-the-clock emergency assistance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-charcoal-200 text-center mb-8">
              Common Roadside Issues We Fix
            </h2>
            <div className="space-y-4">
              {[
                "Battery jump-start or replacement",
                "Flat tyre repair or replacement",
                "Engine overheating",
                "Car won't start",
                "Brake issues",
                "AC problems",
                "Diagnostic scanning",
                "Fluid leaks",
              ].map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-silver-50 rounded-2xl"
                >
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-charcoal-200 font-medium">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EmergencyPanel />
    </div>
  );
}
