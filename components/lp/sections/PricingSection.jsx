import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { SectionHeader } from "@/components/lp/common/SectionHeader";

export function PricingSection() {
  return (
    <section className="section-block subtle" id="pricing">
      <div className="container">
        <SectionHeader
          title={
            <>
              導入しやすい
              <br className="title-break-desktop" />
              価格設計
            </>
          }
          description="スモールスタート可能なStarterプランを中心にご案内しています。"
          tone="tight"
        />
        <div className="positioning-lines compact panel">
          <p>SaaSでもSI個別開発でもない、オンプレ前提の製品型RAG。</p>
          <p>社内データを外に出さず、短期間で導入を開始できます。</p>
          <p>個別構築に比べ、要件整理からPoCまでを進めやすい設計です。</p>
        </div>
        <div className="pricing-layout">
          <article className="pricing-card panel starter">
            <div className="pricing-head">
              <LineIcon name="rocket" className="line-icon md on-dark" />
              <p className="plan-title">Starter</p>
              <p className="plan-sub">RAG単体</p>
            </div>
            <div className="pricing-body">
              <p className="cost-label">初期費用</p>
              <p className="plan-price">~800万円</p>
              <p className="cost-label monthly">月額費用</p>
              <p className="plan-price monthly">10~15万円</p>
            </div>
          </article>

          <article className="pricing-card panel pro">
            <div className="pricing-head">
              <LineIcon name="link" className="line-icon md on-dark" />
              <p className="plan-title">Pro</p>
              <p className="plan-sub">統合プラン</p>
            </div>
            <div className="pricing-body">
              <p className="cost-label">初期費用</p>
              <p className="plan-price">~1200万円</p>
              <p className="cost-label monthly">月額費用</p>
              <p className="plan-price monthly">15~20万円</p>
            </div>
          </article>
        </div>
        <div className="pricing-note panel">
          <ul>
            <li>価格は目安です。環境や構成により個別見積となります。</li>
            <li>まずはStarterからのスモールスタートが可能です。</li>
            <li>要件に応じてPro（統合プラン）をご提案します。</li>
          </ul>
        </div>
        <div className="section-cta">
          <CtaButtons compact />
        </div>
      </div>
    </section>
  );
}
