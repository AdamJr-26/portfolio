interface DotsBackgroundProps {
  className?: string;
}

/** Decorative dot-grid patch. */
function DotsBackground({ className = '' }: DotsBackgroundProps) {
  return <div className={`bg-dots pointer-events-none absolute h-32 w-32 opacity-70 ${className}`} aria-hidden='true' />;
}

export default DotsBackground;
