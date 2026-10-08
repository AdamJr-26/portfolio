import Typewriter from 'typewriter-effect';
import { profile } from '../../data/profile';

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** "I'm a <role>" line that types through each role in a loop. */
function GreetingText() {
  return (
    <p className='flex min-h-[2.5rem] flex-wrap items-baseline gap-x-2 font-display text-2xl text-neutral-400 md:text-3xl'>
      <span>I&apos;m a</span>
      <span className='text-white'>
        {prefersReducedMotion ? (
          profile.roles[0]
        ) : (
          <Typewriter
            options={{
              strings: profile.roles,
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
              cursor: '_',
              cursorClassName: 'Typewriter__cursor text-primary',
            }}
          />
        )}
      </span>
    </p>
  );
}

export default GreetingText;
