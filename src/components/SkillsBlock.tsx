import type { SkillCategory, SkillNode } from '../types';
import { SectionHeader } from './SectionHeader';
import { SkillsSection } from './SkillsSection';

type SkillsBlockProps = {
  categories: SkillCategory[];
  nodes: SkillNode[];
};

export function SkillsBlock({ categories, nodes }: SkillsBlockProps) {
  return (
    <>
      <SectionHeader id="skills" label="TECHNICAL ARSENAL" title="Skills & Expertise" />
      <SkillsSection categories={categories} nodes={nodes} />
    </>
  );
}
