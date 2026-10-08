/** Dashed-line grid with a soft green glow, used behind the hero. */
function Background() {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
      <div className='bg-dashes absolute inset-0' />
      <div className='absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]' />
      <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-dark' />
    </div>
  );
}

export default Background;
