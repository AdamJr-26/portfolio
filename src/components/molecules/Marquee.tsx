interface MarqueeProps {
  items: string[];
}

/** An endlessly scrolling band of words. */
function Marquee({ items }: MarqueeProps) {
  // Two identical halves; the track slides by exactly one half, then loops.
  const half = [...items, ...items];

  return (
    <div className='relative overflow-hidden border-y border-line bg-surface/50 py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]'>
      <p className='sr-only'>{items.join(', ')}</p>
      <div className='marquee-track flex w-max' aria-hidden='true'>
        {[0, 1].map((copy) => (
          <ul key={copy} className='flex shrink-0 items-center'>
            {half.map((item, i) => (
              <li key={i} className='flex items-center gap-8 pr-8 font-display text-lg text-neutral-400 md:text-xl'>
                <span>{item}</span>
                <span className='text-sm text-primary'>✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
