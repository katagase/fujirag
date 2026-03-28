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
import { StickySectionNav } from "@/components/lp/common/StickySectionNav";
import { companyProfile, faqItems, siteMeta } from "@/lib/lp-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fujirag.voitex.biz";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: companyProfile.nameJa,
      alternateName: companyProfile.nameEn,
      url: siteUrl,
      telephone: companyProfile.phone,
      address: {
        "@type": "PostalAddress",
        postalCode: companyProfile.postalCode,
        streetAddress: companyProfile.address,
        addressCountry: "JP"
      }
    },
    {
      "@type": "Product",
      name: "FUJI RAG",
      description: siteMeta.description,
      brand: {
        "@type": "Brand",
        name: companyProfile.nameJa
      },
      category: "オンプレミスナレッジAI"
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ]
};

export default function Home() {
  return (
    <main className="lp-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StickySectionNav />
      <AnnouncementSection />
      <HeroSection />
      <ProofSection />
      <ProblemSection />
      <DemoSection />
      <FeatureGridSection />
      <BenefitSection />
      <PricingSection />
      <ExpansionSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
