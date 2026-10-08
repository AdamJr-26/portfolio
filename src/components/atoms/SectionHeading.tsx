import InViewWrapper from './InViewWrapper';

interface SectionHeadingProps {
  index: string;
  title: string;
  kicker?: string;
}

function SectionHeading({ index, title, kicker }: SectionHeadingProps) {
  return (
    <InViewWrapper className='mb-10 md:mb-14'>
      <div className='flex items-center gap-5'>
        <h2 className='whitespace-nowrap font-display text-2xl font-semibold text-white md:text-4xl'>
          <span className='mr-3 align-middle font-mono text-sm font-normal text-primary md:text-base'>{index}.</span>
          <span className='text-primary'>#</span>
          {title}
        </h2>
        <div className='section-line h-px w-full max-w-md' aria-hidden='true' />
      </div>
      {kicker && <p className='mt-4 max-w-2xl text-neutral-400'>{kicker}</p>}
    </InViewWrapper>
  );
}

export default SectionHeading;
