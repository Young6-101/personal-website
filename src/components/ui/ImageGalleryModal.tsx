import { useState, useEffect, useCallback, useRef } from 'react';
import type { CSSProperties } from 'react';
import type { GalleryImage } from '../../types';

type ImageGalleryModalProps = {
  open: boolean;
  title: string;
  images: GalleryImage[];
  onClose: () => void;
  variant?: 'vertical' | 'landscape';
};

/** Duration of each bounce-in animation in ms */
const BOUNCE_DURATION = 500;

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(5, 7, 10, 0.88)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  closeButton: {
    position: 'fixed',
    top: '20px',
    right: '24px',
    zIndex: 1010,
    border: 'none',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(8px)',
    color: '#d4d7dc',
    padding: '6px 14px',
    fontSize: '1.6rem',
    lineHeight: 1,
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'background 0.2s, color 0.2s',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100vw',
    overflow: 'hidden', // hidden viewport for marquee
    padding: '24px 0',
  },
  card: {
    position: 'relative',
    margin: 0,
    overflow: 'hidden',
    borderRadius: '12px',
    border: '1px solid rgba(0, 245, 255, 0.4)',
    boxShadow: '0 0 15px rgba(0, 245, 255, 0.3), inset 0 0 10px rgba(0, 245, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(5, 7, 10, 0.6)',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'contain' as const,
  },
  caption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    padding: '8px 12px',
    fontSize: '0.78rem',
    lineHeight: 1.5,
    color: '#c7ccd4',
    background: 'rgba(0, 22, 33, 0.75)',
    backdropFilter: 'blur(4px)',
  },
};

/** Compute a responsive width for each card based on image count and variant */
function getCardWidth(count: number, variant: 'vertical' | 'landscape'): string {
  if (variant === 'landscape') {
    if (count <= 2) return 'min(900px, 90vw)';
    if (count <= 4) return 'min(640px, 44vw)';
    return 'min(500px, 40vw)';
  }
  // Vertical handling
  if (count <= 2) return 'min(480px, 90vw)';
  if (count <= 4) return 'min(360px, 44vw)';
  return 'min(300px, 44vw)';
}

function BounceImage({
  image,
  index,
  visibleCount,
  cardWidth,
  imagesLength,
  variant,
}: {
  image: GalleryImage;
  index: number;
  visibleCount: number;
  cardWidth: string;
  imagesLength: number;
  variant: 'vertical' | 'landscape';
}) {
  const isVisible = (index % Math.max(1, imagesLength)) < visibleCount;

  return (
    <figure
      style={{
        ...styles.card,
        width: cardWidth,
        aspectRatio: variant === 'landscape' ? '16 / 9' : '3 / 4',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        transition: `transform ${BOUNCE_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${BOUNCE_DURATION * 0.4}ms ease`,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow =
          '0 0 25px rgba(0, 245, 255, 0.6), 0 0 40px rgba(0, 245, 255, 0.3), inset 0 0 20px rgba(0, 245, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 245, 255, 0.3), inset 0 0 10px rgba(0, 245, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.4)';
      }}
    >
      <img src={image.src} alt={image.alt} style={styles.image} />
      {image.caption && (
        <figcaption style={styles.caption}>{image.caption}</figcaption>
      )}
    </figure>
  );
}

export function ImageGalleryModal({
  open,
  images,
  onClose,
  variant = 'vertical',
}: ImageGalleryModalProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [needsScroll, setNeedsScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const allAppeared = visibleCount >= images.length;

  // After all items appear or window resizes, check if we need to scroll
  useEffect(() => {
    if (!open || !allAppeared || !containerRef.current || !trackRef.current) return;

    const checkOverflow = () => {
      // If the track is wider than the container, we need to scroll
      if (containerRef.current && trackRef.current) {
        // Measure just the first set of images by calculating width
        // Wait, trackRef contains flex gap. 
        // Best way: check if first child is overflowing, or just let CSS gap and scrollWidth do it.
        const trackScroll = trackRef.current.scrollWidth / (needsScroll ? 2 : 1);
        const containerWidth = containerRef.current.clientWidth;
        setNeedsScroll(trackScroll > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [open, allAppeared, needsScroll]);

  // Sequentially reveal images one by one
  useEffect(() => {
    if (!open) {
      setVisibleCount(0);
      return;
    }

    // Start the first image after a short delay for the overlay to settle
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < images.length; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleCount(i + 1);
        }, 100 + i * (BOUNCE_DURATION + 100))
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [open, images.length]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  const cardWidth = getCardWidth(images.length, variant);

  return (
    <div
      style={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        style={styles.closeButton}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.color = '#d4d7dc';
        }}
      >
        ✕
      </button>

      <style>{`
        @keyframes marqueeLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 8px)); } /* 16px gap, half is 8px */
        }
        .gallery-track {
          display: flex;
          gap: 16px;
          width: max-content;
          margin: 0 auto;
        }
        .marquee-active {
          animation: marqueeLoop ${images.length * 6}s linear infinite;
        }
        .marquee-active:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div style={styles.grid} onClick={(e) => e.stopPropagation()} ref={containerRef}>
        <div className={`gallery-track ${needsScroll ? 'marquee-active' : ''}`} ref={trackRef}>
          {(needsScroll ? [...images, ...images] : images).map((image, index) => (
            <BounceImage
              key={`${image.src}-${index}`}
              image={image}
              index={index}
              visibleCount={visibleCount}
              cardWidth={cardWidth}
              imagesLength={images.length}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
