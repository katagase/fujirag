import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { proofItems, voiceItems } from "@/lib/lp-content";

export function ProofSection() {
  return (
    <section className="section-block proof-section" id="proof">
      <div className="container">
        <SectionHeader
          eyebrow="信頼性"
          title={
            <>
              現場導入を見据えた、
              <br className="title-break-desktop" />
              現実的な進め方
            </>
          }
          description="派手さではなく、運用に耐える設計と導入しやすさを重視する方針にしています。"
          tone="balanced"
        />

        <div className="proof-grid">
          {proofItems.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="voice-grid">
          {voiceItems.map((item) => (
            <blockquote key={item.quote} className="panel voice-card">
              <p className="voice-quote">&quot;{item.quote}&quot;</p>
              <cite>{item.role}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
