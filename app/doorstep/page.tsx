import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function DoorstepPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="py-24 bg-gradient-to-br from-white to-silver-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-charcoal-200 mb-4">
              Doorstep Car Service
            </h1>
            <p className="text-xl text-silver-400 max-w-2xl mx-auto">
              Schedule convenient car maintenance at your home, office, or
              parking. No need to visit a workshop.
            </p>
            <Link href="/book">
              <Button variant="default" size="lg" className="text-lg px-8 py-6">
                Schedule Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Calendar className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  Schedule Anytime
                </h3>
                <p className="text-silver-400 text-sm">
                  Book at your convenience, we work around your schedule
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  At Your Location
                </h3>
                <p className="text-silver-400 text-sm">
                  Home, office, or parking - wherever you are
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Clock className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  Time Efficient
                </h3>
                <p className="text-silver-400 text-sm">
                  No waiting at workshops, work continues while we service
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <DollarSign className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-200">
                  Same Pricing
                </h3>
                <p className="text-silver-400 text-sm">
                  No extra charges for doorstep service
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal-200 text-center mb-8">
              Popular Doorstep Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Oil change & filter replacement",
                "AC service & gas refill",
                "Battery replacement",
                "Tyre change & balancing",
                "Brake pad replacement",
                "Full car diagnostics",
                "Fluid top-ups",
                "General maintenance",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-silver-50 rounded-2xl"
                >
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-charcoal-200 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-200 to-charcoal-300 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Schedule?</h2>
          <p className="text-xl text-silver-200 mb-8 max-w-2xl mx-auto">
            Book your doorstep service now and save time
          </p>
          <Link href="/book">
            <Button variant="emergency" size="lg" className="text-lg px-8 py-6">
              Book Doorstep Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
