import type { CSSProperties } from 'react';

const heroStyles: Record<string, CSSProperties> = {
  hero: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroRing: {
    position: 'absolute',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    zIndex: 10,
    textAlign: 'center',
    background: 'radial-gradient(circle, #0A0C0E 40%, transparent 100%)',
    padding: '100px',
  },
  heroH1: {
    fontFamily: 'var(--font-display)',
    fontSize: '6rem',
    color: 'var(--gold)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5em',
    color: 'var(--cyan)',
    opacity: 0.8,
  },
  heroDescription: {
    position: 'absolute',
    bottom: '100px',
    maxWidth: '600px',
    textAlign: 'center',
    padding: '0 20px',
    zIndex: 10,
  },
  heroDescP: {
    fontSize: '0.9rem',
    color: '#999',
    lineHeight: '1.8',
    opacity: 0,
  },
};

export function HeroSection() {
  return (
    <div className="hero" id="about" style={heroStyles.hero}>
      <div className="hero-ring" style={{ ...heroStyles.heroRing, width: 500, height: 500, borderWidth: 2 }} />
      <div className="hero-ring" style={{ ...heroStyles.heroRing, width: 650, height: 650, borderStyle: 'dashed' }} />
      <div className="hero-ring" style={{ ...heroStyles.heroRing, width: 800, height: 800, opacity: 0.1 }} />

      <div className="hero-content" style={heroStyles.heroContent}>
        <div className="subtitle" style={heroStyles.subtitle}>
          Creative Technologist & Designer
        </div>
        <h1 style={heroStyles.heroH1}>YAN LIU</h1>
        <div className="subtitle" style={{ ...heroStyles.subtitle, fontSize: '0.7rem' }}>
          Building bridges between code, design, and human experience
        </div>
      </div>

      <div className="hero-description" style={heroStyles.heroDescription}>
        <p className="hero-desc-text" style={heroStyles.heroDescP}>
          I craft digital experiences that merge technical precision with artistic vision. From immersive web
          environments to data-driven visualizations, my work explores the intersection of technology and storytelling.
        </p>
      </div>
    </div>
  );
}
