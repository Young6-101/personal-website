import gsap from 'gsap';

function createGearPath(cx: number, cy: number, r: number, teeth: number) {
  let path = '';
  for (let i = 0; i < teeth * 2; i += 1) {
    const angle = (i * Math.PI) / teeth;
    const radius = i % 2 === 0 ? r : r * 0.8;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    path += `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }
  return `${path}Z`;
}

export function setupCursor() {
  const cursor = document.getElementById('custom-cursor');
  const onMouseMove = (event: MouseEvent) => {
    if (!cursor) return;
    gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.1 });
  };

  document.addEventListener('mousemove', onMouseMove);

  return {
    cursor,
    cleanup: () => document.removeEventListener('mousemove', onMouseMove),
  };
}

export function setupGears() {
  const gearsGroup = document.getElementById('gears-group');
  if (!gearsGroup) return () => undefined;

  for (let i = 0; i < 8; i += 1) {
    const gear = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const r = 50 + Math.random() * 100;
    const cx = Math.random() * 1000;
    const cy = Math.random() * 1000;

    gear.setAttribute('d', createGearPath(cx, cy, r, 12));
    gear.setAttribute('fill', 'none');
    gear.setAttribute('stroke', '#D4AF37');
    gear.setAttribute('stroke-width', '0.5');
    gear.setAttribute('opacity', '0.3');
    gearsGroup.appendChild(gear);

    gsap.to(gear, {
      rotation: 360,
      transformOrigin: `${cx}px ${cy}px`,
      duration: 20 + Math.random() * 40,
      repeat: -1,
      ease: 'none',
    });
  }

  return () => {
    gearsGroup.innerHTML = '';
  };
}
