import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { SectionHeader } from "@/components/lp/common/SectionHeader";

export function DemoSection() {
  return (
    <section className="section-block" id="demo">
      <div className="container">
        <SectionHeader
          eyebrow="デモイメージ"
          title="実際の使い方"
          description="質問から回答、出典確認までを一画面で確認できる構成にしています。"
        />
        <div className="demo-panel">
          <div className="chat-bubble question">
            <p className="label">質問</p>
            <p>クレーム対応の手順は？</p>
          </div>
          <div className="chat-bubble answer">
            <p className="label">回答</p>
            <p>
              クレーム一次対応では、まず事実確認を行い、感情的な反論を避け、所定の受付票に記録してください。
              重大案件は責任者へ即時エスカレーションします。
            </p>
            <div className="source-tags">
              <span>クレーム対応マニュアル 第2章</span>
              <span>顧客対応手順書 4.1節</span>
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
