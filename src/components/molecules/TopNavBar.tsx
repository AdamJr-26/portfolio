import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Container, LetsChat, Logo } from '../atoms';
import { sections } from '../../data/navigation';
import { useActiveSection } from '../../hooks';

// 'top' is the hero: while it is in view, no section link is highlighted.
const sectionIds = ['top', ...sections.map((section) => section.id)];

function TopNavBar() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = sections.map(({ id, label }, i) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={() => setMenuOpen(false)}
        aria-current={active === id ? 'location' : undefined}
        className={`group flex items-baseline gap-1.5 py-2 font-mono text-sm transition-colors ${
          active === id ? 'text-white' : 'text-neutral-400 hover:text-white'
        }`}
      >
        <span className='text-xs text-primary'>0{i + 1}</span>
        <span className={active === id ? 'underline decoration-primary decoration-2 underline-offset-8' : ''}>{label}</span>
      </a>
    </li>
  ));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-line bg-dark/80 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <Container className='flex h-16 items-center justify-between'>
        <Logo />

        <nav aria-label='Sections' className='hidden md:block'>
          <ul className='flex items-center gap-7'>{links}</ul>
        </nav>

        <div className='flex items-center gap-3'>
          <LetsChat className='hidden sm:inline-flex' />
          <button
            type='button'
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className='grid h-10 w-10 place-items-center border border-line text-2xl text-white md:hidden'
          >
            <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} aria-hidden='true' />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav id='mobile-menu' aria-label='Sections' className='border-t border-line md:hidden'>
          <Container className='py-4'>
            <ul className='flex flex-col'>{links}</ul>
            <LetsChat variant='solid' className='mt-4 w-full sm:hidden' />
          </Container>
        </nav>
      )}
    </header>
  );
}

export default TopNavBar;
