import { Icon } from '@iconify/react';
import { RoughPolygon, RoughRectangle } from '../atoms';
import type { Skill } from '../../data/types';

interface SkillDetailProps {
  skill: Skill;
}

/** Details for the skill selected in the honeycomb. */
function SkillDetail({ skill }: SkillDetailProps) {
  const { name, icon, category, level, experience, repos } = skill;

  return (
    <div className='border border-line bg-surface p-6 md:p-8' aria-live='polite'>
      <div className='flex items-center gap-4'>
        <div className='clip-hex grid h-[3.75rem] w-[3.25rem] shrink-0 place-items-center bg-primary/80'>
          <div className='clip-hex grid h-[3.6rem] w-[3.1rem] place-items-center bg-[#10200c]'>
            <Icon icon={icon} className='text-2xl text-white' aria-hidden='true' />
          </div>
        </div>
        <div>
          <p className='font-mono text-xs uppercase tracking-widest text-primary'>{category}</p>
          <h3 className='font-display text-2xl font-semibold text-white'>{name}</h3>
        </div>
      </div>

      <div className='mt-8 flex flex-col gap-8'>
        <div>
          <div className='flex items-baseline justify-between gap-4'>
            <p className='text-sm font-medium text-white'>Proficiency</p>
            <div className='font-mono text-xs text-neutral-500'>{experience}</div>
          </div>
          <div className='mt-3 h-10 border border-line p-1' role='img' aria-label={`${level} out of 100`}>
            <RoughRectangle percentage={level} />
          </div>
          <div className='mt-1.5 flex justify-between font-mono text-[11px] text-neutral-500'>
            <span>entry</span>
            <span>expert</span>
          </div>
        </div>

        <div>
          <p className='flex items-center gap-2 text-sm font-medium text-white'>
            Public projects <Icon icon='mdi:source-repository' className='text-neutral-500' aria-hidden='true' />
          </p>
          <div className='mt-2'>
            {repos.length > 0 ? (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.url}>
                    <a
                      href={repo.url}
                      target='_blank'
                      rel='noreferrer'
                      className='group flex items-center gap-3 border-b border-line py-2.5 text-sm text-neutral-300 transition-colors hover:text-primary'
                    >
                      <RoughPolygon size={12} />
                      {repo.label}
                      <Icon
                        icon='mdi:arrow-top-right'
                        className='ml-auto text-neutral-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary'
                        aria-hidden='true'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-sm text-neutral-500'>Used in work and private projects — no public repo to show yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
