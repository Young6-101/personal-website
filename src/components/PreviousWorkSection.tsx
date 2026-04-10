const items = Array.from({ length: 25 }, (_, i) => {
  const num = i + 3;
  return {
    id: `previous-work-${num}`,
    images: [
      `/images/previous%20work/${num}.jpg`,
      `/images/previous%20work/${num}.png`,
      `/previous%20work/${num}.jpg`,
      `/previous%20work/${num}.png`,
    ],
    imageAlt: `Previous work ${num}`,
  };
});

export function PreviousWorkSection() {
  const loopItems = [...items, ...items];

  return (
    <section className="previous-work-section" id="previous-work-cards" aria-label="Previous work gallery">
      <div className="previous-work-marquee">
        <div className="previous-work-track">
          {loopItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="skill-node previous-work-node"
              aria-label={item.imageAlt}
            >
              <img
                src={item.images[0]}
                alt={item.imageAlt}
                loading="lazy"
                className="previous-work-image"
                onError={(event) => {
                  const target = event.currentTarget;
                  const currentIndex = Number(target.dataset.sourceIndex ?? '0');
                  const nextIndex = currentIndex + 1;
                  if (nextIndex < item.images.length) {
                    target.dataset.sourceIndex = String(nextIndex);
                    target.src = item.images[nextIndex];
                  } else {
                    target.style.visibility = 'hidden';
                  }
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
