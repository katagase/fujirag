"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SECTION_LINKS = [
  { id: "hero", label: "ヒーロー" },
  { id: "assurance", label: "3つの安心" },
  { id: "problem", label: "課題" },
  { id: "scenarios", label: "シナリオ" },
  { id: "flow", label: "導入の流れ" },
  { id: "fit", label: "向いている会社" },
  { id: "comparison", label: "比較" },
  { id: "pricing", label: "価格" },
  { id: "faq", label: "FAQ" },
  { id: "final-cta", label: "問い合わせ" }
];

export function StickySectionNav() {
  const [activeId, setActiveId] = useState("hero");
  const sectionIds = useMemo(() => SECTION_LINKS.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="section-nav-shell">
      <nav className="section-nav" aria-label="ページ内ナビゲーション">
        {SECTION_LINKS.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`section-nav-link ${activeId === item.id ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
