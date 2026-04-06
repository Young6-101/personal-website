type SkillTagItemProps = {
  label: string;
};

export function SkillTagItem({ label }: SkillTagItemProps) {
  return <span className="skill-tag">{label}</span>;
}
