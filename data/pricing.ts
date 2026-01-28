export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starting",
    name: "Starting",
    price: 50,
    description: "Basic roadside assistance",
    features: [
      "On-site arrival",
      "Basic diagnosis",
      "Simple repairs",
      "Transparent pricing",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 150,
    description: "Comprehensive service package",
    features: [
      "Everything in Starting",
      "Advanced diagnostics",
      "Parts replacement",
      "6-month warranty",
      "Priority support",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 300,
    description: "Full-service premium care",
    features: [
      "Everything in Standard",
      "Premium parts",
      "12-month warranty",
      "24/7 priority line",
      "Annual service discount",
      "Dedicated mechanic",
    ],
  },
];
