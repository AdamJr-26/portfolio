import { Icon } from '@iconify/react';
import { RoughPolygon } from '../atoms';
import type { FeaturedProject as FeaturedProjectData, SystemPart } from '../../data/types';

interface FeaturedProjectProps {
  project: FeaturedProjectData;
}

function SystemNode({ part, highlight = false }: { part: SystemPart; highlight?: boolean }) {
  return (
    <a
      href={part.url}
      target='_blank'
      rel='noreferrer'
      className={`group block border bg-dark px-3 py-2.5 transition hover:border-primary ${
        highlight ? 'border-primary/60 shadow-glow' : 'border-line'
      }`}
    >
      <span className='flex items-center justify-between gap-2 text-sm text-white'>
        {part.name}
        <Icon icon='mdi:github' className='shrink-0 text-neutral-500 transition group-hover:text-primary' aria-hidden='true' />
      </span>
      <span className='mt-0.5 block font-mono text-[11px] leading-snug text-neutral-500'>{part.stack}</span>
    </a>
  );
}

/** The flagship project, with a live-looking diagram of how its apps connect. */
function FeaturedProject({ project }: FeaturedProjectProps) {
  const { title, description, highlights, clients, server } = project;

  return (
    <article className='grid overflow-hidden border border-line bg-surface lg:grid-cols-[1.1fr_1fr]'>
      <div className='flex flex-col gap-5 p-6 md:p-10'>
        <p className='font-mono text-xs uppercase tracking-widest text-primary'>Featured project</p>
        <h3 className='font-display text-2xl font-semibold leading-tight text-white md:text-3xl'>{title}</h3>
        <p className='leading-relaxed text-neutral-400'>{description}</p>
        <ul className='flex flex-col gap-2.5'>
          {highlights.map((item) => (
            <li key={item} className='flex items-start gap-3 text-sm text-neutral-300'>
              <span className='mt-0.5'>
                <RoughPolygon size={13} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <figure className='bg-dots relative border-t border-line p-6 md:p-10 lg:border-l lg:border-t-0'>
        <figcaption className='mb-5 grid grid-cols-[1fr_2.5rem_1fr] font-mono text-[11px] uppercase tracking-widest text-neutral-500'>
          <span>clients</span>
          <span />
          <span>server</span>
        </figcaption>
        <div className='grid grid-cols-[1fr_2.5rem_1fr]'>
          <ul className='grid grid-rows-3 gap-4'>
            {clients.map((client) => (
              <li key={client.name} className='self-center'>
                <SystemNode part={client} />
              </li>
            ))}
          </ul>
          <svg viewBox='0 0 40 300' preserveAspectRatio='none' className='h-full w-full' aria-hidden='true'>
            {[50, 150, 250].map((y) => (
              <path
                key={y}
                d={`M0 ${y} C 20 ${y}, 20 150, 40 150`}
                fill='none'
                stroke='#39FF14'
                strokeOpacity='0.7'
                strokeWidth='1.5'
                vectorEffect='non-scaling-stroke'
                className='flow-line'
              />
            ))}
          </svg>
          <div className='self-center'>
            <SystemNode part={server} highlight />
          </div>
        </div>
      </figure>
    </article>
  );
}

export default FeaturedProject;
