import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Project } from '../types';
import { ProjectMetaBlock } from './ProjectMetaBlock';

const projectStyles: Record<string, CSSProperties> = {
  projectCard: {
    display: 'flex',
    gap: '60px',
    marginBottom: '200px',
    alignItems: 'center',
    position: 'relative',
  },
  projectCardEven: {
    flexDirection: 'row-reverse',
  },
  projectImage: {
    flex: '1.2',
    height: '600px',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid var(--slate)',
  },
  projectInfo: {
    flex: '0.8',
    padding: '40px',
    position: 'relative',
  },
  projectSkillsOverlay: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    display: 'flex',
    gap: '8px',
    transition: 'all 0.4s',
  },
  projectSkillTag: {
    background: 'rgba(10, 12, 14, 0.9)',
    border: '1px solid #00F5FF',
    color: '#00F5FF',
    padding: '6px 12px',
    fontSize: '0.7rem',
    letterSpacing: '0.05em',
    fontWeight: 400,
    lineHeight: 1.2,
    textTransform: 'none',
  },
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 1;

  return (
    <article
      id={project.id}
      className="project-card max-[1024px]:!flex-col"
      data-skills={project.skillKeys.join(',')}
      style={{ ...projectStyles.projectCard, ...(isEven ? projectStyles.projectCardEven : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-image" style={projectStyles.projectImage}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-[transform,filter] duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
          style={{
            filter: hovered ? 'grayscale(0) contrast(1.2)' : 'grayscale(0.5) contrast(1.2)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5] border-[20px] border-transparent"
          style={{
            borderImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0V10H0' stroke='%23D4AF37'/%3E%3Cpath d='M90 0V10H100' stroke='%23D4AF37'/%3E%3Cpath d='M10 100V90H0' stroke='%23D4AF37'/%3E%3Cpath d='M90 100V90H100' stroke='%23D4AF37'/%3E%3C/svg%3E\") 20",
          }}
        />
        <div
          className="gear-indicator"
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            border: `2px ${hovered ? 'solid' : 'dashed'} ${hovered ? 'var(--gold)' : 'var(--cyan)'}`,
            borderRadius: '50%',
            animation: 'rotateGear 10s linear infinite',
            scale: hovered ? '1.5' : '1',
            transition: 'border-style 0.4s, border-color 0.4s, scale 0.4s',
          }}
        />
        <div
          className="project-skills-overlay"
          style={{
            ...projectStyles.projectSkillsOverlay,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {project.overlayTags.map((tag) => (
            <div
              key={tag}
              className="project-skill-tag"
              style={projectStyles.projectSkillTag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="project-info" style={projectStyles.projectInfo}>
        <span className="project-id mb-2.5 block font-[var(--font-display)] text-[0.8rem] text-[var(--cyan)]">
          {project.sequence}
        </span>
        <h2
          className="project-title mb-5 font-[var(--font-display)] text-[3.5rem] leading-none text-[var(--gold)] font-bold"
          style={{ fontFamily: 'var(--font-display)' }}
          dangerouslySetInnerHTML={{ __html: project.title }}
        />
        <p className="project-desc mb-[30px] text-[0.9rem] text-[#bbb]">{project.description}</p>
        <ProjectMetaBlock tags={project.tags} badges={project.badges} hovered={hovered} />
      </div>
    </article>
  );
}
