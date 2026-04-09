import type { CSSProperties } from 'react';
import type { EducationItem } from '../types';

type EducationTimelineProps = {
  items: EducationItem[];
};

const educationTimelineStyles: Record<string, CSSProperties> = {
  educationTimeline: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    paddingLeft: '40px',
  },
  timelineLine: {
    position: 'absolute',
    left: '15px',
    top: 0,
    bottom: 0,
    width: '1px',
    background: 'linear-gradient(to bottom, #00F5FF, #D4AF37)',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '60px',
  },
  timelineMarker: {
    position: 'absolute',
    left: '-33px',
    top: '5px',
    width: '12px',
    height: '12px',
    background: '#0A0C0E',
    border: '2px solid #00F5FF',
    borderRadius: '50%',
  },
  timelineContent: {
    background: 'rgba(35, 39, 46, 0.5)',
    border: '1px solid #23272E',
    padding: '30px',
    transition: 'all 0.4s',
    cursor: 'default',
  },
  timelineYear: {
    fontSize: '0.7rem',
    color: '#00F5FF',
    letterSpacing: '0.2em',
  },
  timelineH3: {
    fontFamily: "'Cinzel', serif",
    fontSize: '1.5rem',
    color: 'var(--gold)',
    margin: '10px 0 5px',
    fontWeight: 700,
  },
  timelineP: {
    fontSize: '0.85rem',
    color: '#AAA',
    fontWeight: 400,
  },
  timelineDesc: {
    marginTop: '15px',
    fontSize: '0.8rem',
    color: '#777',
    lineHeight: '1.7',
    fontWeight: 500,
  },
};

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="timeline-line" style={educationTimelineStyles.educationTimeline}>
      <div aria-hidden="true" style={educationTimelineStyles.timelineLine} />
      {items.map((item) => (
        <div key={`${item.year}-${item.school}`} className="timeline-item" style={educationTimelineStyles.timelineItem}>
          <div style={educationTimelineStyles.timelineMarker} />
          <div
            style={educationTimelineStyles.timelineContent}
            onMouseEnter={(event) => {
              event.currentTarget.style.borderColor = '#00F5FF';
              event.currentTarget.style.boxShadow = 'inset 0 0 30px rgba(0, 245, 255, 0.3)';
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.borderColor = '#23272E';
              event.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={educationTimelineStyles.timelineYear}>{item.year}</span>
            <h3 style={educationTimelineStyles.timelineH3}>{item.school}</h3>
            <p style={educationTimelineStyles.timelineP}>{item.degree}</p>
            <p style={educationTimelineStyles.timelineDesc}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
