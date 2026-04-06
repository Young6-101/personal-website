import type { CSSProperties } from 'react';
import type { EducationItem } from '../types';
import { EducationTimeline } from './EducationTimeline';

type EducationSectionProps = {
  items: EducationItem[];
};

const educationHeaderStyles: Record<string, CSSProperties> = {
  sectionHeader: {
    margin: '150px 0 60px',
    textAlign: 'center',
  },
  sectionLabel: {
    display: 'block',
    fontSize: '0.7rem',
    letterSpacing: '0.4em',
    color: '#00F5FF',
    marginBottom: '15px',
  },
  sectionTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: '3rem',
    color: '#D4AF37',
  },
};

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <>
      <div id="education" className="section-header" style={educationHeaderStyles.sectionHeader}>
        <span style={educationHeaderStyles.sectionLabel}>ACADEMIC FOUNDATION</span>
        <h2 style={educationHeaderStyles.sectionTitle}>Education & Background</h2>
      </div>
      <EducationTimeline items={items} />
    </>
  );
}
