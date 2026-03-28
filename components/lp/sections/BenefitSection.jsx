import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { flowSteps } from "@/lib/lp-content";

export function BenefitSection() {
  return (
    <section className="section-block subtle" id="flow">
      <div className="container">
        <SectionHeader
          eyebrow="導入の流れ"
          title={
            <>
              PoC開始までは
              <br className="title-break-desktop" />
              最短2週間。
            </>
          }
          description="始めやすい、広げやすい、止められる。段階導入を前提に進めます。"
          tone="tight"
        />
        <div className="flow-list">
          {flowSteps.map((step) => (
            <article key={step.title} className="panel flow-item">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
        <p className="note">まずはSTEP 1の無料相談から。費用・契約は一切不要です。</p>
      </div>
    </section>
  );
}
