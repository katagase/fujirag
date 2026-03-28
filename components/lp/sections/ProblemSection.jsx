import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { problemItems } from "@/lib/lp-content";

export function ProblemSection() {
  return (
    <section className="section-block" id="problem">
      <div className="container">
        <SectionHeader
          title={
            <>
              あなたの会社、
              <br className="title-break-desktop" />
              こんなことが起きていませんか？
            </>
          }
          description="情報を探す時間、属人化、セキュリティ不安が積み重なると、意思決定速度に差が出ます。"
          tone="tight"
        />
        <ul className="problem-grid">
          {problemItems.map((item) => (
            <li key={item} className="panel problem-item">
              <LineIcon name="alert" className="line-icon sm" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="panel checklist-panel">
          <p className="check-title">3つ以上当てはまる場合、FUJI RAGの適用余地があります。</p>
          <ul>
            <li>情報を探すのに毎日時間を使っている</li>
            <li>「担当者に聞かないと分からない」が多発している</li>
            <li>クラウドAIをセキュリティ理由で採用できない</li>
            <li>文書整理・移行の工数が確保できない</li>
          </ul>
        </div>
        <div className="panel cost-panel">
          <h3>情報探索コストの試算（例）</h3>
          <p>
            社員50名 × 1時間/日 × 250日 × 時給3,000円 = 年間 約3,750万円。
            <br />
            Starter月額10〜15万円と比較しても、探索工数削減の効果が導入価値に直結します。
          </p>
        </div>
      </div>
    </section>
  );
}
