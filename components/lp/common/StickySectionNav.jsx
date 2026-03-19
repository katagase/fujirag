"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SECTION_LINKS = [
  { id: "hero", label: "概要" },
  { id: "proof", label: "信頼性" },
  { id: "problem", label: "課題" },
  { id: "solution", label: "解決策" },
  { id: "demo", label: "デモ" },
  { id: "pricing", label: "価格" },
  { id: "faq", label: "FAQ" },
  { id: "company", label: "運営会社" },
  { id: "contact-form", label: "問い合わせ" }
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
