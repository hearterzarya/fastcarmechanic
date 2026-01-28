import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <section className="py-24 bg-gradient-to-br from-charcoal-300 via-charcoal-200 to-charcoal-300 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              About MechanicUAE
            </h1>
            <p className="text-xl text-silver-200 max-w-2xl mx-auto">
              Premium car mechanic services across UAE. Fast, reliable, and
              certified professionals at your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal-200 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-silver-400 leading-relaxed">
                We're on a mission to revolutionize car repair services in the
                UAE by bringing certified mechanics directly to you. Whether
                you're stuck on the road or need scheduled maintenance, we make
                car care convenient, transparent, and fast.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-200 mb-4">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Shield className="w-10 h-10 text-amber-400" />
                    <h3 className="text-xl font-bold text-charcoal-200">
                      Certified Professionals
                    </h3>
                    <p className="text-silver-400 text-sm">
                      All our mechanics are certified and undergo regular
                      training to stay updated with the latest automotive
                      technology.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Clock className="w-10 h-10 text-cyan-400" />
                    <h3 className="text-xl font-bold text-charcoal-200">
                      Fast Response
                    </h3>
                    <p className="text-silver-400 text-sm">
                      Average arrival time of 30-45 minutes across major UAE
                      cities. Emergency cases prioritized.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Users className="w-10 h-10 text-amber-400" />
                    <h3 className="text-xl font-bold text-charcoal-200">
                      Customer First
                    </h3>
                    <p className="text-silver-400 text-sm">
                      Transparent pricing, pay after service, and 100%
                      satisfaction guarantee. Your trust is our priority.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Award className="w-10 h-10 text-cyan-400" />
                    <h3 className="text-xl font-bold text-charcoal-200">
                      Quality Service
                    </h3>
                    <p className="text-silver-400 text-sm">
                      Premium parts, latest diagnostic tools, and comprehensive
                      warranties on all repairs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal-200 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-silver-400 leading-relaxed">
                Founded with a vision to make car repair services accessible and
                convenient, MechanicUAE has grown to serve thousands of customers
                across all UAE Emirates. We understand the frustration of car
                breakdowns and the inconvenience of traditional workshop visits.
                That's why we bring the workshop to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
