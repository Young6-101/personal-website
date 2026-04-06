import type { CSSProperties } from 'react';
import { MiniBadge } from './ui/MiniBadge';

type ProjectMetaBlockProps = {
  tags: string[];
  badges: string[];
  hovered: boolean;
};

export function ProjectMetaBlock({ tags, badges, hovered }: ProjectMetaBlockProps) {
  const tagStyle: CSSProperties = {
    fontSize: '0.7rem',
    color: '#888',
    border: '1px solid #444',
    padding: '2px 8px',
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  };

  const tagsRowStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    alignItems: 'center',
  };

  const projectConnectionsStyle: CSSProperties = {
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #23272E',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    transition: 'opacity 0.3s',
  };

  const projectConnectionSpanStyle: CSSProperties = {
    fontSize: '0.65rem',
    color: '#888',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  };

  const skillBadgesStyle: CSSProperties = {
    display: 'flex',
    gap: '8px',
  };

  return (
    <>
      <div style={tagsRowStyle}>
        {tags.map((tag) => (
          <div key={tag} style={tagStyle}>
            {tag}
          </div>
        ))}
      </div>

      <div
        className="transition-all duration-300"
        style={{
          ...projectConnectionsStyle,
          opacity: hovered ? 1 : 0.7,
          transform: hovered ? 'translateX(10px)' : 'translateX(0)',
        }}
      >
        <div className="relative h-px w-[30px] bg-gradient-to-r from-[var(--cyan)] to-[var(--gold)]">
          <span className="absolute right-[-3px] top-[-2px] h-[6px] w-[6px] rounded-full bg-[var(--gold)]" />
        </div>
        <span style={projectConnectionSpanStyle}>Uses skills from</span>
        <div style={skillBadgesStyle}>
          {badges.map((badge) => (
            <MiniBadge key={badge} label={badge} />
          ))}
        </div>
      </div>
    </>
  );
}
