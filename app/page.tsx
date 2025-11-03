import { BenefitsSection, FeaturesSection, Hero } from "@/components/features";
import JourneySection from "@/components/features/journey-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <JourneySection />
    </>
  );
}
