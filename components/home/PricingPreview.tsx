"use client";

import { pricingTiers } from "@/data/pricing";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export function PricingPreview() {
  const revealRef = useGsapReveal({ delay: 0.2 });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal-200 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            No hidden charges. Final cost after inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      <span className="text-amber-400 mt-1">✓</span>
                      <span className="text-sm text-silver-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="block pt-4">
                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-silver-400 text-sm mt-8">
          * Final cost determined after on-site inspection. No hidden charges.
        </p>
      </div>
    </section>
  );
}
