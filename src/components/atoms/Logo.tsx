import { profile } from '../../data/profile';

function Logo() {
  return (
    <a href='#top' className='group flex items-center gap-2.5' aria-label={`${profile.name} — back to top`}>
      <svg width='26' height='26' viewBox='0 0 32 32' aria-hidden='true' className='transition-transform duration-500 group-hover:rotate-[60deg]'>
        <path d='M16 1.5 29 9v14l-13 7.5L3 23V9z' fill='none' stroke='#39FF14' strokeWidth='2' />
        <path d='M10.5 22 16 9l5.5 13M12.6 17.5h6.8' fill='none' stroke='#fff' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
      <span className='font-mono text-sm font-medium text-white'>{profile.initials}</span>
    </a>
  );
}

export default Logo;
