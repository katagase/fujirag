import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { pricingPlans, roiSummary } from "@/lib/lp-content";

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
          description="明確な料金体系で、スモールスタートから段階的に拡張できます。"
          tone="tight"
        />
        <div className="pricing-layout">
          {pricingPlans.map((plan, index) => (
            <article key={plan.name} className={`pricing-card panel ${index === 0 ? "starter" : "pro"}`}>
              <div className="pricing-head">
                <LineIcon name={index === 0 ? "rocket" : "link"} className="line-icon md on-dark" />
                <p className="plan-title">{plan.name.replace("プラン", "")}</p>
                <p className="plan-sub">{plan.subtitle}</p>
              </div>
              <div className="pricing-body">
                <p className="cost-label">初期費用（目安）</p>
                <p className="plan-price">{plan.initial}</p>
                <p className="cost-label monthly">月額費用（目安）</p>
                <p className="plan-price monthly">{plan.monthly}</p>
                <ul className="plan-list">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="pricing-note panel">
          <h3>費用対効果シミュレーション</h3>
          <p>{roiSummary.currentCost}</p>
          <p>{roiSummary.starterCost}</p>
          <p>{roiSummary.effect}</p>
          <ul>
            <li>価格は目安です。環境や構成により個別見積となります。</li>
            <li>まずはStarterからのスモールスタートが可能です。</li>
            <li>利用定着後にPro版（ボイテキオンプレ！連携モデル）へ拡張できます。</li>
          </ul>
        </div>
        <div className="section-cta">
          <CtaButtons compact />
        </div>
      </div>
    </section>
  );
}
