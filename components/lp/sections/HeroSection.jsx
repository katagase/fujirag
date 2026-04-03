import Image from "next/image";
import { CtaButtons } from "@/components/lp/common/CtaButtons";
import { LineIcon } from "@/components/lp/common/LineIcon";
import { heroBadges } from "@/lib/lp-content";

const INTRO_VIDEO_URL = "https://youtu.be/EDPg9y5UsPo?si=mvrbaC80sU3H4osV";

export function HeroSection() {
  return (
    <section className="hero section-block" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-brand">
            <Image
              src="/fujirag_logo_hero.svg"
              alt="FUJI RAG"
              width={220}
              height={64}
              className="hero-logo"
              priority
            />
          </div>
          <p className="eyebrow">オンプレ対応・社内特化型 ナレッジAI</p>
          <h1>
            ファイルサーバーが、
            <br className="title-break-desktop" />
            答えを出す。
          </h1>
          <p className="lead">
            整理しなくていい。移行しなくていい。情報は漏れない。根拠は必ず出る。
            <br />
            社内のファイルサーバー（NAS）をそのままAIに接続できます。
          </p>
          <CtaButtons />
          <p className="hero-linkline">
            <a href={INTRO_VIDEO_URL} target="_blank" rel="noopener noreferrer">
              まず5分のデモを見る →
            </a>
          </p>
          <ul className="badge-list">
            {heroBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
          <p className="hero-note">2026年3月19日より 無料PoC受付開始</p>
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
          <div className="hero-pillars">
            <article className="panel">
              <LineIcon name="server" className="line-icon sm" />
              <h3>NASクロール</h3>
              <p>既存ファイルをそのまま活用。整理・移行コストゼロ。</p>
            </article>
            <article className="panel">
              <LineIcon name="shield" className="line-icon sm" />
              <h3>権限制御</h3>
              <p>AD連携で見せていい人だけに情報を表示。</p>
            </article>
            <article className="panel">
              <LineIcon name="file" className="line-icon sm" />
              <h3>出典表示</h3>
              <p>全回答にファイル名・ページを明示して確認可能。</p>
            </article>
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
