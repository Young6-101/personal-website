import { useState } from 'react';
import type { InspirationItem } from '../types';
import { ImageGalleryModal } from './ui/ImageGalleryModal';

type InspirationSectionProps = {
  items: InspirationItem[];
};

export function InspirationSection({ items }: InspirationSectionProps) {
  const [activeItem, setActiveItem] = useState<InspirationItem | null>(null);

  const activeImages = activeItem
    ? activeItem.gallery && activeItem.gallery.length > 0
      ? activeItem.gallery
      : [{ src: activeItem.image, alt: activeItem.imageAlt, caption: activeItem.imageAlt }]
    : [];

  return (
    <>
      <div className="inspiration-grid">
        {items.map((item) => (
          <article
            key={item.title}
            className="inspiration-card"
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveItem(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActiveItem(item);
              }
            }}
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              style={{
                objectFit: item.imageFit ?? 'cover',
                objectPosition: item.imagePosition ?? 'center',
              }}
            />
            <div className="inspiration-content">
              <div className="insp-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <ImageGalleryModal
        open={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title ?? ''}
        images={activeImages}
      />
    </>
  );
}
