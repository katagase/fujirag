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
              その検索、
              <br className="title-break-desktop" />
              本当に使えていますか？
            </>
          }
          description="検索が機能していても、業務で使える状態とは限らないケースがあります。"
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
      </div>
    </section>
  );
}
