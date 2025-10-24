import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { InnovationSection } from "@/components/ui/innovation-section";
import { ProductsSection } from "@/components/ui/products-section";
import { FeaturesBentoSection } from "@/components/ui/features-bento-section";
import { ResearchShowcase } from "@/components/ui/research-showcase";
import { SafetySection } from "@/components/ui/safety-section";
import { GlobalImpactSection } from "@/components/ui/global-impact-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { CTASection } from "@/components/ui/cta-section";

export default function Home() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="overflow-hidden">
        <HeroSection />
        <InnovationSection />
        <ProductsSection />
        <FeaturesBentoSection />
        <ResearchShowcase />
        <SafetySection />
        <GlobalImpactSection />
        <PricingSection />
        <CTASection />
      </main>
    </>
  );
}
