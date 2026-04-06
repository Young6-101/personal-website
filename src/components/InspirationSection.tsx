import type { InspirationItem } from '../types';

type InspirationSectionProps = {
  items: InspirationItem[];
};

export function InspirationSection({ items }: InspirationSectionProps) {
  return (
    <div className="inspiration-grid">
      {items.map((item) => (
        <article key={item.title} className="inspiration-card">
          <img src={item.image} alt={item.imageAlt} loading="lazy" />
          <div className="inspiration-content">
            <div className="insp-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
