import type { SkillCategory, SkillNode } from '../types';
import { SkillTagItem } from './ui/SkillTagItem';

type SkillsSectionProps = {
  categories: SkillCategory[];
  nodes: SkillNode[];
};

export function SkillsSection({ categories, nodes }: SkillsSectionProps) {
  return (
    <>
      <div className="skills-comprehensive">
        {categories.map((category) => (
          <article key={category.title} className="skill-category">
            <div className="skill-cat-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-items">
              {category.items.map((item) => (
                <SkillTagItem key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-grid" id="skills-overview">
        {nodes.map((node) => (
          <article key={node.id} id={node.id} className="skill-node">
            <span className="tag">{node.index}</span>
            <h3>{node.title}</h3>
            <p style={{ fontSize: '0.75rem' }}>{node.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
