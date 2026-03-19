import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { solutionItems } from "@/lib/lp-content";

const solutionIcons = ["search", "chat", "shield", "file"];

export function SolutionSection() {
  return (
    <section className="section-block subtle" id="solution">
      <div className="container">
        <SectionHeader
          eyebrow="解決策"
          title={
            <>
              FUJI RAGなら、
              <br className="title-break-desktop" />
              質問するだけ
            </>
          }
          description="社内文書を理解したAIが、必要な情報へ最短で導く設計にしています。"
          tone="tight"
        />
        <div className="feature-cards">
          {solutionItems.map((item, index) => (
            <article key={item.title} className="panel">
              <LineIcon name={solutionIcons[index] ?? "search"} className="line-icon md" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
