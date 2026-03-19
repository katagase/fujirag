import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { heroBadges } from "@/lib/lp-content";

export function HeroSection() {
  return (
    <section className="hero section-block" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">FUJI RAG</p>
          <h1>
            社内文書を、探す時代は終わり。
            <br className="title-break-desktop" />
            AIが&quot;答え&quot;を出す。
          </h1>
          <p className="lead">
            オンプレ対応・AD連携・出典付き。
            <br />
            企業で使えるナレッジAI「FUJI RAG」
          </p>
          <CtaButtons />
          <ul className="badge-list">
            {heroBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="product-window">
            <p className="window-title">FUJI RAG Dashboard</p>
            <div className="window-row">
              <span>質問</span>
              <p>就業規則の改定ポイントは？</p>
            </div>
            <div className="window-row answer">
              <span>回答</span>
              <p>
                2026年4月改定では、在宅勤務手当と申請フローが変更されています。関連規程の
                3章2節をご確認ください。
              </p>
            </div>
            <div className="tag-row">
              <span>出典: 就業規則 3章2節</span>
              <span>出典: 人事通達 2026-04</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="positioning-lines panel">
          <p>SaaSでもSI個別開発でもない、オンプレ前提の製品型RAG。</p>
          <p>社内データを外に出さず、短期間で導入を開始できます。</p>
          <p>個別構築に比べ、要件整理からPoCまでを進めやすい設計です。</p>
        </div>
      </div>
    </section>
  );
}
