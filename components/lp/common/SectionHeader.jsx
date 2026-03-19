export function SectionHeader({ eyebrow, title, description, center = false, tone = "default" }) {
  return (
    <header className={`section-header ${center ? "center" : ""} ${tone}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}
