import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { benefitItems } from "@/lib/lp-content";

export function BenefitSection() {
  return (
    <section className="section-block">
      <div className="container">
        <SectionHeader
          title={
            <>
              導入後に
              <br className="title-break-desktop" />
              期待できる効果
            </>
          }
          description="実数は断定せず、現場改善の方向性として整理しています。"
          tone="tight"
        />
        <div className="benefit-grid">
          {benefitItems.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
