
function Contacts() {
  return (
    <section id='contact' className='flex flex-row justify-center relative overflow-hidden max-h-fit min-h-dvh'>
      <div className=' max-w-[1366px] w-full flex flex-col m-auto p-[10px] lg:px-[20px]'>
        <div className='max-w-[1366px] w-full flex flex-col m-auto p-[10px] lg:px-[20px] relative'>
          <div className='h-fit flex items-center gap-[20px] absolute z-10'>
            <p className='font-medium text-[24px] md:text-[28px] lg:text-[32px]'>
              <span className='text-primary'>#</span>
              <span className='text-white'>contact</span>
            </p>
            <div className='min-h-[2px] bg-primary min-w-[80px] md:min-w-[300px]'></div>
          </div>
          <div className='hexagon-container  min-h-full'>
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default Contacts;
