import { pricingTiers } from "@/data/pricing";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-charcoal-200 mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            No hidden charges. Final cost determined after on-site inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative ${
                tier.popular
                  ? "border-2 border-amber-400 shadow-glow-amber scale-105"
                  : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-charcoal-200">
                    AED {tier.price}
                  </span>
                  <span className="text-silver-400 ml-2">starting</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-silver-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="block pt-4">
                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal-200 mb-2">
                    Important Pricing Information
                  </h3>
                  <ul className="space-y-2 text-sm text-silver-400">
                    <li>
                      • Starting prices are estimates. Final cost depends on
                      actual diagnosis and parts needed.
                    </li>
                    <li>
                      • All prices are discussed and approved before work begins.
                    </li>
                    <li>
                      • Payment is made after service completion. We accept cash,
                      cards, and digital payments.
                    </li>
                    <li>
                      • No hidden charges. Transparent pricing with detailed
                      invoice.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
