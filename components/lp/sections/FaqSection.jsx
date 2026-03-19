import { SectionHeader } from "@/components/lp/common/SectionHeader";
import { faqItems } from "@/lib/lp-content";

export function FaqSection() {
  return (
    <section className="section-block subtle" id="faq">
      <div className="container">
        <SectionHeader title="よくあるご質問" />
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="panel faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
