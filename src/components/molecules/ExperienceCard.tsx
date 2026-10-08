import { InViewWrapper } from '../atoms';
import Achievement from './Achievement';
import type { Experience } from '../../data/types';

interface ExperienceCardProps {
  experience: Experience;
}

/** One entry on the experience timeline. */
function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, role, start, end, summary, achievements } = experience;
  const dates = `${start} — ${end}`;

  return (
    <li className='grid gap-x-10 md:grid-cols-[10rem_1fr]'>
      <InViewWrapper className='hidden md:block'>
        <p className='sticky top-24 pt-0.5 font-mono text-sm text-neutral-500'>{dates}</p>
      </InViewWrapper>

      <div className='relative border-l border-line pb-16 pl-7 md:pl-10'>
        <span className='clip-hex absolute -left-[7px] top-1 h-4 w-3.5 bg-primary' aria-hidden='true' />

        <InViewWrapper>
          <p className='mb-1 font-mono text-xs text-neutral-500 md:hidden'>{dates}</p>
          <h3 className='font-display text-xl font-semibold text-white md:text-2xl'>{role}</h3>
          <p className='mt-1 text-neutral-300'>
            <span className='text-primary'>@</span> {company}
          </p>
          <p className='mt-4 max-w-3xl leading-relaxed text-neutral-400'>{summary}</p>
        </InViewWrapper>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {achievements.map((achievement, i) => (
            <li key={achievement.title}>
              <InViewWrapper delay={i * 120} className='h-full'>
                <Achievement achievement={achievement} />
              </InViewWrapper>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceCard;
