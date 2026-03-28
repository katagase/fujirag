import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { proofItems } from "@/lib/lp-content";

export function ProofSection() {
  return (
    <section className="section-block proof-section" id="assurance">
      <div className="container">
        <SectionHeader
          eyebrow="3つの安心"
          title={
            <>
              社内AI導入の「怖い」を、
              <br className="title-break-desktop" />
              3つ全部消します。
            </>
          }
          description="整理負荷・情報漏えい・回答信頼性の不安を、FUJI RAGは同時に解消します。"
          tone="balanced"
        />

        <div className="proof-grid">
          {proofItems.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="proof-cta-copy">
          もっと詳しく見たい場合は、無料デモで実際の回答画面をご確認ください。
        </p>
      </div>
    </section>
  );
}
