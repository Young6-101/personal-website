import gsap from 'gsap';

export function setupGsapEffects() {
  gsap.utils.toArray<HTMLElement>('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      y: 24,
      autoAlpha: 0.85,
      duration: 0.75,
      ease: 'power2.out',
      immediateRender: false,
    });
  });

  gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      x: -20,
      autoAlpha: 0.85,
      duration: 0.7,
      delay: i * 0.08,
      ease: 'power2.out',
      immediateRender: false,
    });
  });

  gsap.from('.skill-node', {
    scrollTrigger: { trigger: '#skills-overview', start: 'top 80%' },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power4.out',
    immediateRender: false,
  });

  gsap.to('.hero-ring', {
    scrollTrigger: { trigger: '#about', start: 'top top', end: 'bottom top', scrub: true },
    scale: 1.5,
    rotation: 180,
    opacity: 0,
    stagger: 0.1,
  });

  gsap.fromTo(
    '.hero-desc-text',
    { autoAlpha: 0, y: 20 },
    {
      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: '+=180',
        scrub: true,
      },
      autoAlpha: 1,
      y: 0,
      ease: 'none',
    },
  );

  gsap.from('.skill-category', {
    scrollTrigger: { trigger: '.skills-comprehensive', start: 'top 75%' },
    y: 80,
    opacity: 0,
    rotateX: 15,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power4.out',
    immediateRender: false,
  });

  gsap.from('.inspiration-card', {
    scrollTrigger: { trigger: '.inspiration-grid', start: 'top 75%' },
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    immediateRender: false,
  });

  gsap.from('.contact-link', {
    scrollTrigger: { trigger: '.contact-section', start: 'top 80%' },
    x: -30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power3.out',
    immediateRender: false,
  });

  gsap.to('.skill-icon', {
    y: -5,
    duration: 2,
    stagger: { each: 0.3, from: 'random', repeat: -1, yoyo: true },
    ease: 'sine.inOut',
  });

  gsap.utils.toArray<HTMLElement>('.skill-category').forEach((container) => {
    const tags = container.querySelectorAll('.skill-tag');
    gsap.from(tags, {
      scrollTrigger: { trigger: container, start: 'top 85%' },
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.38,
      ease: 'back.out(1.7)',
      immediateRender: false,
    });
  });
}
