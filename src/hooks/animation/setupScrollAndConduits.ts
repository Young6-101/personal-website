export function setupScrollState() {
  const nav = document.querySelector('.main-nav');
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));

  const getSectionTargets = () =>
    navLinks
      .map((link) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return null;
        const section = document.querySelector<HTMLElement>(href);
        if (!section) return null;
        return { href, section };
      })
      .filter((item): item is { href: string; section: HTMLElement } => item !== null);

  const onScroll = () => {
    if (window.scrollY > 100) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');

    const sectionTargets = getSectionTargets();
    if (sectionTargets.length === 0) return;

    const marker = window.innerHeight * 0.35;
    let currentHref = sectionTargets[0].href;

    sectionTargets.forEach(({ href, section }) => {
      const top = section.getBoundingClientRect().top;
      if (top <= marker) currentHref = href;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === currentHref);
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}

export function setupConduits() {
  return () => undefined;
}
