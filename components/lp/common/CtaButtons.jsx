import Link from "next/link";
import { ctaItems } from "@/lib/lp-content";

export function CtaButtons({ compact = false }) {
  return (
    <div className={`cta-group ${compact ? "compact" : ""}`}>
      {ctaItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`cta-button ${item.variant}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
