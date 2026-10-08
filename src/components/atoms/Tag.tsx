interface TagProps {
  children: string;
}

function Tag({ children }: TagProps) {
  return (
    <span className='inline-flex items-center border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-neutral-400'>
      {children}
    </span>
  );
}

export default Tag;
