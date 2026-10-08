import { Contacts, Container, Logo } from '../atoms';
import { profile } from '../../data/profile';

function Footer() {
  return (
    <footer className='border-t border-line'>
      <Container className='flex flex-col items-center justify-between gap-5 py-8 sm:flex-row'>
        <Logo />
        <p className='text-center font-mono text-xs text-neutral-500'>
          © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript &amp; Tailwind
        </p>
        <Contacts showLabels={false} />
      </Container>
    </footer>
  );
}

export default Footer;
