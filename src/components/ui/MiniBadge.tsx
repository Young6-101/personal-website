import type { CSSProperties } from 'react';

type MiniBadgeProps = {
  label: string;
};

export function MiniBadge({ label }: MiniBadgeProps) {
  const miniBadgeStyle: CSSProperties = {
    background: 'rgba(212, 175, 55, 0.15)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    padding: '4px 10px',
    fontSize: '0.65rem',
    color: '#D4AF37',
    transition: 'all 0.3s',
    cursor: 'default',
    display: 'inline-block',
  };

  return (
    <span
      style={miniBadgeStyle}
      onMouseEnter={(event) => {
        event.currentTarget.style.background = 'rgba(212, 175, 55, 0.3)';
        event.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)';
        event.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {label}
    </span>
  );
}
