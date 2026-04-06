import gsap from 'gsap';

export function setupProjectInteractions(cursor: HTMLElement | null) {
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

  const onEnter = () => {
    if (cursor) gsap.to(cursor, { width: 80, height: 80, duration: 0.3 });
  };

  const onLeave = () => {
    if (cursor) gsap.to(cursor, { width: 40, height: 40, duration: 0.3 });
  };

  const handlers: Array<{ card: HTMLElement; enter: () => void; leave: () => void }> = [];

  projectCards.forEach((card) => {
    const enter = () => onEnter();
    const leave = () => onLeave();
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);
    handlers.push({ card, enter, leave });
  });

  return () => {
    handlers.forEach(({ card, enter, leave }) => {
      card.removeEventListener('mouseenter', enter);
      card.removeEventListener('mouseleave', leave);
    });
  };
}

export function setupInspirationTilt() {
  const cards = document.querySelectorAll<HTMLElement>('.inspiration-card');
  const handlers: Array<{ card: HTMLElement; move: (event: MouseEvent) => void; leave: () => void }> = [];

  cards.forEach((card) => {
    const move = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 12;
      const rotateY = (rect.width / 2 - x) / 12;
      gsap.to(card, { rotateX, rotateY, transformPerspective: 1000, duration: 0.3 });
    };

    const leave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.45, ease: 'power2.out' });
    };

    card.addEventListener('mousemove', move);
    card.addEventListener('mouseleave', leave);
    handlers.push({ card, move, leave });
  });

  return () => {
    handlers.forEach(({ card, move, leave }) => {
      card.removeEventListener('mousemove', move);
      card.removeEventListener('mouseleave', leave);
    });
  };
}

export function setupAnchorSmoothScroll() {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  const listeners: Array<{ anchor: HTMLAnchorElement; handler: (event: Event) => void }> = [];

  anchors.forEach((anchor) => {
    const handler = (event: Event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (!targetId) return;
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    anchor.addEventListener('click', handler);
    listeners.push({ anchor, handler });
  });

  return () => {
    listeners.forEach(({ anchor, handler }) => anchor.removeEventListener('click', handler));
  };
}
