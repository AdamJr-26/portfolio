import { Icon } from '@iconify/react';
import { RoughPolygon, Tag } from '../atoms';
import type { Project } from '../../data/types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, year, url } = project;

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='group flex h-full flex-col border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50'
    >
      <div className='mb-6 flex items-center justify-between'>
        <RoughPolygon size={22} />
        <span className='flex items-center gap-3 font-mono text-xs text-neutral-500'>
          {year}
          <Icon icon='mdi:github' className='text-lg text-neutral-400 transition group-hover:text-primary' aria-hidden='true' />
        </span>
      </div>
      <h3 className='font-display text-lg font-semibold text-white transition-colors group-hover:text-primary'>{title}</h3>
      <p className='mt-2 text-sm leading-relaxed text-neutral-400'>{description}</p>
      <div className='mt-auto flex flex-wrap gap-1.5 pt-5'>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
