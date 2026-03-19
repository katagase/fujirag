import { SectionHeader } from "@/components/lp/common/SectionHeader";

export function ExpansionSection() {
  return (
    <section className="section-block">
      <div className="container">
        <SectionHeader
          title={
            <>
              さらに、
              <br className="title-break-desktop" />
              業務改善へ
            </>
          }
          tone="tight"
        />
        <div className="panel">
          <p>
            FUJI RAGは、通話分析AI「ボイテキ2！」と連携することで、通話の要点・感情変化・リスク兆候の分析結果をもとに、
            関連ナレッジ提示や改善支援まで拡張できます。オンプレ運用やSSO連携にも対応し、業務導線を分断せずに活用できます。
          </p>
          <p className="note">まずはFUJI RAGの導入を起点に、将来的な統合をご検討いただけます。</p>
        </div>
      </div>
    </section>
  );
}
