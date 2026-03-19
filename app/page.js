import { BenefitSection } from "@/components/lp/sections/BenefitSection";
import { AnnouncementSection } from "@/components/lp/sections/AnnouncementSection";
import { CtaSection } from "@/components/lp/sections/CtaSection";
import { DemoSection } from "@/components/lp/sections/DemoSection";
import { ExpansionSection } from "@/components/lp/sections/ExpansionSection";
import { FaqSection } from "@/components/lp/sections/FaqSection";
import { FeatureGridSection } from "@/components/lp/sections/FeatureGridSection";
import { HeroSection } from "@/components/lp/sections/HeroSection";
import { PricingSection } from "@/components/lp/sections/PricingSection";
import { ProblemSection } from "@/components/lp/sections/ProblemSection";
import { ProofSection } from "@/components/lp/sections/ProofSection";
import { SolutionSection } from "@/components/lp/sections/SolutionSection";
import { StickySectionNav } from "@/components/lp/common/StickySectionNav";
import { CompanySection } from "@/components/lp/sections/CompanySection";

export default function Home() {
  return (
    <main className="lp-root">
      <StickySectionNav />
      <AnnouncementSection />
      <HeroSection />
      <ProofSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <FeatureGridSection />
      <BenefitSection />
      <PricingSection />
      <ExpansionSection />
      <FaqSection />
      <CompanySection />
      <CtaSection />
    </main>
  );
}
