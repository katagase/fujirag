import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { scenarioItems } from "@/lib/lp-content";

export function DemoSection() {
  return (
    <section className="section-block" id="scenarios">
      <div className="container">
        <SectionHeader
          eyebrow="できることシナリオ"
          title={
            <>
              あなたの部署では、
              <br className="title-break-desktop" />
              こう使えます。
            </>
          }
          description="法務・品質・人事・情シス・営業・部門横断まで、代表的な6シナリオを用意しています。"
        />
        <div className="scenario-grid">
          {scenarioItems.map((item) => (
            <article key={item.title} className="panel scenario-card">
              <p className="scenario-dept">{item.title}</p>
              <h3>{item.summary}</h3>
              <div className="chat-bubble question">
                <p className="label">質問例</p>
                <p>{item.prompt}</p>
              </div>
              <div className="chat-bubble answer">
                <p className="label">回答例</p>
                <p>{item.answer}</p>
              </div>
              <div className="source-tags">
                {item.sources.map((source) => (
                  <span key={source}>出典: {source}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="panel demo-panel">
          <div className="chat-bubble answer">
            <p className="label">回答イメージ</p>
            <p>
              過去事例・規程・運用手順を横断して、必要な手順と判断ポイントを要約して返答します。
              すべての回答に出典を表示し、元資料へ遷移できます。
            </p>
            <div className="source-tags">
              <span>出典: 品質管理手順書 第6章</span>
              <span>出典: 顧客受入基準 rev.4</span>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <CtaButtons compact />
        </div>
      </div>
    </section>
  );
}
