import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { reasonItems } from "@/lib/lp-content";

const reasonIcons = ["server", "users", "shield", "doc", "search", "link"];

export function FeatureGridSection() {
  return (
    <section className="section-block subtle">
      <div className="container">
        <SectionHeader title="企業で使える理由" />
        <ul className="icon-grid">
          {reasonItems.map((item, index) => (
            <li key={item} className="panel icon-item">
              <LineIcon name={reasonIcons[index] ?? "shield"} className="line-icon sm" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
