"use client";

import { useState } from "react";
import { serviceAreas } from "@/data/areas";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";

export default function AreasPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white to-silver-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-charcoal-200 mb-4">
            Service Areas
          </h1>
          <p className="text-lg text-silver-400 max-w-2xl mx-auto">
            Fast response times across all UAE Emirates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceAreas.map((area) => (
            <Card
              key={area.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedArea === area.id
                  ? "border-2 border-amber-400 shadow-glow-amber"
                  : "hover:shadow-lg"
              }`}
              onClick={() =>
                setSelectedArea(selectedArea === area.id ? null : area.id)
              }
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-200">
                        {area.name}
                      </h3>
                      <p className="text-sm text-silver-400">{area.emirate}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-4 border-t border-silver-200">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-semibold text-charcoal-200">
                    ETA: {area.eta}
                  </span>
                </div>
                {selectedArea === area.id && (
                  <div className="pt-4 border-t border-silver-200 space-y-2">
                    <p className="text-sm text-silver-400">
                      Our mechanics are available 24/7 in {area.name}. Average
                      response time is {area.eta} depending on your exact
                      location and traffic conditions.
                    </p>
                    <Badge variant="default" className="mt-2">
                      Available Now
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-silver-400 text-sm">
            Click on a city to see more details. All areas covered 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
