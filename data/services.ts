export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  startingPrice: number;
  timeEstimate: string;
  included: string[];
  commonSymptoms: string[];
  category: "emergency" | "maintenance" | "diagnostic";
}

export const services: Service[] = [
  {
    id: "battery",
    name: "Battery Replacement",
    description: "Fast battery jump-start or replacement service",
    icon: "🔋",
    startingPrice: 150,
    timeEstimate: "15-20 minutes",
    included: [
      "Battery testing",
      "Jump-start service",
      "Battery replacement if needed",
      "Terminal cleaning",
    ],
    commonSymptoms: [
      "Car won't start",
      "Clicking sound when turning key",
      "Dim headlights",
      "Battery warning light",
    ],
    category: "emergency",
  },
  {
    id: "tyre",
    name: "Tyre Service",
    description: "Tyre change, repair, or replacement on the spot",
    icon: "🛞",
    startingPrice: 50,
    timeEstimate: "20-30 minutes",
    included: [
      "Tyre inspection",
      "Puncture repair",
      "Tyre replacement",
      "Wheel balancing check",
    ],
    commonSymptoms: [
      "Flat tyre",
      "Low tyre pressure",
      "Tyre damage visible",
      "TPMS warning",
    ],
    category: "emergency",
  },
  {
    id: "diagnostics",
    name: "Car Diagnostics",
    description: "Advanced OBD-II scanning and problem identification",
    icon: "🔍",
    startingPrice: 100,
    timeEstimate: "30-45 minutes",
    included: [
      "Full system scan",
      "Error code reading",
      "Problem diagnosis",
      "Detailed report",
    ],
    commonSymptoms: [
      "Check engine light",
      "Multiple warning lights",
      "Unknown issues",
      "Performance problems",
    ],
    category: "diagnostic",
  },
  {
    id: "ac",
    name: "AC Service",
    description: "AC repair, gas refill, and cooling system service",
    icon: "❄️",
    startingPrice: 200,
    timeEstimate: "45-60 minutes",
    included: [
      "AC system inspection",
      "Gas refill",
      "Filter cleaning",
      "Cooling test",
    ],
    commonSymptoms: [
      "AC not cooling",
      "Weak airflow",
      "Strange noises",
      "Bad smell from vents",
    ],
    category: "maintenance",
  },
  {
    id: "oil",
    name: "Oil Change",
    description: "Quick oil and filter change service",
    icon: "🛢️",
    startingPrice: 120,
    timeEstimate: "25-35 minutes",
    included: [
      "Engine oil change",
      "Oil filter replacement",
      "Fluid level check",
      "Basic inspection",
    ],
    commonSymptoms: [
      "Oil change due",
      "Low oil level",
      "Dark/dirty oil",
      "Oil warning light",
    ],
    category: "maintenance",
  },
  {
    id: "brakes",
    name: "Brake Service",
    description: "Brake pad replacement and brake system repair",
    icon: "🛑",
    startingPrice: 250,
    timeEstimate: "60-90 minutes",
    included: [
      "Brake pad inspection",
      "Pad replacement if needed",
      "Brake fluid check",
      "System testing",
    ],
    commonSymptoms: [
      "Squeaking brakes",
      "Grinding noise",
      "Soft brake pedal",
      "Brake warning light",
    ],
    category: "emergency",
  },
  {
    id: "starter",
    name: "Starter Motor",
    description: "Starter motor repair and replacement",
    icon: "🔧",
    startingPrice: 300,
    timeEstimate: "45-60 minutes",
    included: [
      "Starter diagnosis",
      "Motor repair/replacement",
      "Battery connection check",
      "Ignition test",
    ],
    commonSymptoms: [
      "Car won't start",
      "Clicking but no crank",
      "Starter motor noise",
      "Intermittent starting",
    ],
    category: "emergency",
  },
  {
    id: "overheat",
    name: "Overheating",
    description: "Cooling system repair and overheating fix",
    icon: "🌡️",
    startingPrice: 200,
    timeEstimate: "40-60 minutes",
    included: [
      "Coolant level check",
      "Radiator inspection",
      "Thermostat check",
      "Cooling system repair",
    ],
    commonSymptoms: [
      "Temperature gauge high",
      "Steam from engine",
      "Overheating warning",
      "Coolant leak",
    ],
    category: "emergency",
  },
  {
    id: "recovery",
    name: "Vehicle Recovery",
    description: "Towing and recovery service if repair isn't possible",
    icon: "🚛",
    startingPrice: 300,
    timeEstimate: "30-45 minutes",
    included: [
      "Safe vehicle recovery",
      "Transport to workshop",
      "24/7 availability",
      "Insurance coordination",
    ],
    commonSymptoms: [
      "Major breakdown",
      "Cannot be fixed on-site",
      "Accident recovery",
      "Vehicle immobilization",
    ],
    category: "emergency",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
