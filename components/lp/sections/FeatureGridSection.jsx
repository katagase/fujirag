import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { fitItems, notFitItems } from "@/lib/lp-content";

export function FeatureGridSection() {
  return (
    <section className="section-block" id="fit">
      <div className="container">
        <SectionHeader
          title="FUJI RAGが向いている会社"
          description="インフラ要件・組織課題の観点で、適合度を確認できます。"
        />
        <div className="fit-grid">
          <article className="panel">
            <h3>向いている条件</h3>
            <ul className="fit-list">
              {fitItems.map((item) => (
                <li key={item}>
                  <LineIcon name="shield" className="line-icon sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <h3>向かないケース</h3>
            <ul className="fit-list caution">
              {notFitItems.map((item) => (
                <li key={item}>
                  <LineIcon name="alert" className="line-icon sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
