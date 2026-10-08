import { Contacts as SocialLinks, Container, InViewWrapper, LetsChat } from '../atoms';
import { profile } from '../../data/profile';
import { sectionIndex } from '../../data/navigation';

function Contacts() {
  return (
    <section id='contact' className='relative overflow-hidden py-28 md:py-40'>
      <div
        className='pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]'
        aria-hidden='true'
      />
      <Container className='relative'>
        <InViewWrapper className='mx-auto flex max-w-2xl flex-col items-center gap-6 text-center'>
          <p className='font-mono text-sm text-primary'>{sectionIndex('contact')}. what&apos;s next?</p>
          <h2 className='font-display text-4xl font-bold leading-tight text-white md:text-6xl'>
            Let&apos;s build something <span className='text-stroke-primary'>together.</span>
          </h2>
          <p className='text-neutral-400 md:text-lg'>
            {profile.openToWork && "I'm currently open to work — a full-time role, a freelance project, or just a question. "}
            I&apos;d love to hear from you.
          </p>
          <LetsChat
            variant='solid'
            label={profile.email ? 'Say hello' : 'Message me on LinkedIn'}
            className='mt-2 px-6 py-3 text-base'
          />
          {profile.email && <p className='font-mono text-sm text-neutral-500'>{profile.email}</p>}
          <SocialLinks className='pt-2' />
        </InViewWrapper>
      </Container>
    </section>
  );
}

export default Contacts;
