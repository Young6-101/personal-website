import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setupGsapEffects } from './animation/setupGsapEffects';
import { setupAnchorSmoothScroll, setupInspirationTilt, setupProjectInteractions } from './animation/setupInteractions';
import { setupCursor, setupGears } from './animation/setupScene';
import { setupConduits, setupScrollState } from './animation/setupScrollAndConduits';

export function usePortfolioAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const { cursor, cleanup: cleanupCursor } = setupCursor();
    const cleanupGears = setupGears();

    setupGsapEffects();

    const cleanupScrollState = setupScrollState();
    const cleanupConduits = setupConduits();
    const cleanupProjectInteractions = setupProjectInteractions(cursor);
    const cleanupInspirationTilt = setupInspirationTilt();
    const cleanupAnchorScroll = setupAnchorSmoothScroll();

    return () => {
      cleanupCursor();
      cleanupGears();
      cleanupScrollState();
      cleanupConduits();
      cleanupProjectInteractions();
      cleanupInspirationTilt();
      cleanupAnchorScroll();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf('*');
    };
  }, []);
}
