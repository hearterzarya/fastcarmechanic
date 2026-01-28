import { EmergencyStrip } from "@/components/home/EmergencyStrip";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { EmergencyPanel } from "@/components/home/EmergencyPanel";
import { PricingPreview } from "@/components/home/PricingPreview";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <div className="pt-20">
      <EmergencyStrip />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <ServicesGrid />
      <EmergencyPanel />
      <PricingPreview />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
    </div>
  );
}
