interface StatusBadgeProps {
  label: string;
}

function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <span className='inline-flex items-center gap-2.5 border border-line bg-dark/90 px-3 py-1.5 font-mono text-xs text-neutral-200 backdrop-blur'>
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full animate-ping bg-primary opacity-75' />
        <span className='relative inline-flex h-2 w-2 bg-primary' />
      </span>
      {label}
    </span>
  );
}

export default StatusBadge;
