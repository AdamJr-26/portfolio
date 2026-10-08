import { CSSProperties, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface InViewWrapperProps {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
}

/** Fades and slides its children in the first time they scroll into view. */
function InViewWrapper({ children, delay = 0, className = '' }: InViewWrapperProps) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -8% 0px' });

  return (
    <div
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default InViewWrapper;
