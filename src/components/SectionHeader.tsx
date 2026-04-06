type SectionHeaderProps = {
  id?: string;
  label: string;
  title: string;
  className?: string;
};

export function SectionHeader({ id, label, title, className }: SectionHeaderProps) {
  return (
    <div id={id} className={`section-header ${className ?? ''}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
