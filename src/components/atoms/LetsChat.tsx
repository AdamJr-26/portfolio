import { Icon } from '@iconify/react';
import { contactHref } from '../../data/profile';

interface LetsChatProps {
  variant?: 'solid' | 'outline';
  label?: string;
  className?: string;
}

function LetsChat({ variant = 'outline', label = "Let's chat", className = '' }: LetsChatProps) {
  const isMail = contactHref.startsWith('mailto:');
  const styles =
    variant === 'solid'
      ? 'bg-primary text-dark hover:shadow-glow'
      : 'border border-primary/60 text-white hover:border-primary hover:bg-primary/10';

  return (
    <a
      href={contactHref}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noreferrer'}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm font-medium transition ${styles} ${className}`}
    >
      {label}
      <Icon icon='mdi:email-plus-outline' className={variant === 'solid' ? '' : 'text-primary'} aria-hidden='true' />
    </a>
  );
}

export default LetsChat;
