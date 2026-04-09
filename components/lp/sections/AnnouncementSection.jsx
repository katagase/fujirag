import { LineIcon } from "@/components/lp/common/LineIcon";
import { releaseAnnouncement } from "@/lib/lp-content";

export function AnnouncementSection() {
  return (
    <section className="announcement-wrap" aria-label="お知らせ">
      <div className="container">
        <div className="announcement panel">
          <div className="announcement-main">
            <p className="announcement-label">
              <LineIcon name="bell" className="line-icon sm" />
              {releaseAnnouncement.label}
            </p>
            <p className="announcement-date">{releaseAnnouncement.dateText}</p>
            <h2>{releaseAnnouncement.title}</h2>
            <p className="announcement-description">{releaseAnnouncement.description}</p>
          </div>
          <a
            href={releaseAnnouncement.ctaHref}
            className="cta-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {releaseAnnouncement.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
