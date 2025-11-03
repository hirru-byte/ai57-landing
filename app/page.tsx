import {
  Hero,
  FeaturesSection,
  BenefitsSection,
  CTASection,
  StatsSection,
} from "@/components/features";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
