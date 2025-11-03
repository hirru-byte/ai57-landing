import {
  Hero,
  FeaturesSection,
  BenefitsSection,
  CTASection,
  StatsSection,
} from "@/components/features";
import JourneySection from "@/components/features/journey-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <JourneySection />
      <CTASection />
    </>
  );
}
