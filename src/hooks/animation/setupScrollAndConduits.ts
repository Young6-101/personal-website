export function setupScrollState() {
  const nav = document.querySelector('.main-nav');

  const onScroll = () => {
    if (window.scrollY > 100) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');

    const sections = document.querySelectorAll<HTMLElement>('[id]');
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) current = section.id;
    });

    document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
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
