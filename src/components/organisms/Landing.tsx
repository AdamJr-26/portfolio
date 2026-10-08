import { Icon } from '@iconify/react';
import { Background, Contacts, Container, GreetingText, LetsChat, Me } from '../atoms';
import { profile } from '../../data/profile';

function Landing() {
  const [first, last, ...rest] = profile.name.split(' ');

  return (
    <section id='top' className='relative flex min-h-dvh items-center overflow-hidden pb-16 pt-28 lg:pt-20'>
      <Background />

      <Container className='relative grid items-center gap-14 lg:grid-cols-[1.5fr_1fr]'>
        <div className='flex flex-col gap-6'>
          <p className='font-mono text-sm text-neutral-500'>
            <span className='text-primary'>$</span> whoami
          </p>
          <h1 className='font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-[4rem]'>
            {first} <span className='text-stroke-primary'>{last}</span> {rest.join(' ')}
          </h1>
          <GreetingText />
          <p className='max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg'>{profile.tagline}</p>

          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <a
              href='#projects'
              className='inline-flex items-center gap-2 bg-primary px-4 py-2 font-mono text-sm font-medium text-dark transition hover:shadow-glow'
            >
              View my work
              <Icon icon='mdi:arrow-down' aria-hidden='true' />
            </a>
            <LetsChat />
          </div>

          <Contacts className='pt-3' />
        </div>

        <div className='mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-none'>
          <Me />
        </div>
      </Container>

      <a
        href='#about'
        className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] text-neutral-500 transition-colors hover:text-primary md:flex'
      >
        scroll
        <span className='relative h-10 w-px overflow-hidden bg-line'>
          <span className='absolute inset-x-0 top-0 h-3 animate-[scroll-cue_1.8s_ease-in-out_infinite] bg-primary' />
        </span>
      </a>
    </section>
  );
}

export default Landing;
