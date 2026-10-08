import { Icon } from '@iconify/react';
import { socials } from '../../data/profile';

interface ContactsProps {
  showLabels?: boolean;
  className?: string;
}

/** Social profile links. */
function Contacts({ showLabels = true, className = '' }: ContactsProps) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {socials.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            aria-label={label}
            className='flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary'
          >
            <Icon icon={icon} className='text-xl' aria-hidden='true' />
            {showLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
