import { Container, InViewWrapper, SectionHeading } from '../atoms';
import { profile } from '../../data/profile';
import { experiences } from '../../data/experience';
import { featuredProject, projects } from '../../data/projects';
import { allSkills } from '../../data/skills';
import { sectionIndex } from '../../data/navigation';

const stats = [
  { value: `${new Date().getFullYear() - profile.codingSince}+`, label: 'years writing code' },
  { value: String(experiences.length), label: 'professional roles' },
  { value: String(projects.length + (featuredProject ? 1 : 0)), label: 'featured projects' },
  { value: String(allSkills.length), label: 'technologies' },
];

function About() {
  return (
    <section id='about' className='relative py-24 md:py-32'>
      <Container>
        <SectionHeading index={sectionIndex('about')} title='about-me' />

        <div className='grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16'>
          <InViewWrapper className='flex flex-col gap-5'>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className='text-lg leading-relaxed text-neutral-300'>
                {paragraph}
              </p>
            ))}

            <blockquote className='relative mt-6 border border-line bg-surface px-6 pb-6 pt-8'>
              <svg
                className='absolute -top-5 left-5'
                width='26'
                height='30'
                viewBox='3 17 21 19'
                fill='#39FF14'
                aria-hidden='true'
              >
                <path d='M3.59375 35.3125V29.5C3.59375 28.125 3.83333 26.6979 4.3125 25.2188C4.79167 23.7188 5.45833 22.2917 6.3125 20.9375C7.16667 19.5833 8.15625 18.4167 9.28125 17.4375L13.3438 19.7812C12.4479 21.2812 11.7708 22.8125 11.3125 24.375C10.8542 25.9167 10.625 27.6146 10.625 29.4688V35.3125H3.59375ZM13.9688 35.3125V29.5C13.9688 28.125 14.2083 26.6979 14.6875 25.2188C15.1667 23.7188 15.8333 22.2917 16.6875 20.9375C17.5417 19.5833 18.5312 18.4167 19.6562 17.4375L23.7188 19.7812C22.8229 21.2812 22.1458 22.8125 21.6875 24.375C21.2292 25.9167 21 27.6146 21 29.4688V35.3125H13.9688Z' />
              </svg>
              <p className='font-display text-xl text-white md:text-2xl'>{profile.quote.text}</p>
              <footer className='mt-3 font-mono text-sm text-neutral-500'>— advice from {profile.quote.author}</footer>
            </blockquote>
          </InViewWrapper>

          <InViewWrapper delay={150} className='flex flex-col gap-8'>
            <dl className='grid grid-cols-2 border-l border-t border-line'>
              {stats.map(({ value, label }) => (
                <div key={label} className='flex flex-col gap-1 border-b border-r border-line p-5'>
                  <dt className='order-2 text-sm text-neutral-400'>{label}</dt>
                  <dd className='font-display text-4xl font-bold text-white'>
                    {value.replace('+', '')}
                    {value.endsWith('+') && <span className='text-primary'>+</span>}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <p className='mb-3 font-mono text-xs uppercase tracking-widest text-neutral-500'>Beyond code</p>
              <ul className='flex flex-wrap gap-2'>
                {profile.beyondCode.map((item) => (
                  <li key={item} className='border border-line px-3 py-1.5 text-sm text-neutral-300'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </InViewWrapper>
        </div>
      </Container>
    </section>
  );
}

export default About;
