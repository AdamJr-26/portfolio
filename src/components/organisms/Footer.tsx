import { Icon } from '@iconify/react';

function Footer() {
  return (
    <section id='footer' className='flex flex-col mx-auto w-full gap-[10px] items-center justify-center max-w-[1366px] p-[10px] lg:p-[20px] h-fit border-t-[2px] border-dim'>
      <div className='w-full flex flex-row justify-between  items-start '>
        <p className='text-24px] text-white font-bold'>A.C.M</p>
        <div className="flex flex-col gap-[10px]">
          <p className='font-bold text-white text-[15px] md:text-[18px] xl:text-[20px]'>Media</p>
          <div className='flex flex-row gap-[10px]'>
            <a href="https://github.com/AdamJr-26" target='_blank' className='flex items-center gap-[8px]'>
              <Icon className='text-white ' icon="mdi:github" />
              <span className='hidden text-white md:flex'>Github </span>
            </a>
            <a href='https://www.linkedin.com/in/adam-marcaida' target='_blank' className='flex items-center gap-[8px]'>
              <Icon className='text-white ' icon="mdi:linkedin" />
              <span className='hidden text-white md:flex'>LinkedIn</span>
            </a>
            <a href='#' target='_blank' className='flex items-center gap-[8px]'>
              <Icon className='text-white ' icon="ic:baseline-facebook" />
              <span className='hidden text-white md:flex'>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <p className='text-center w-full text-white text-[13px]'>© copyright 2024. Made by Adam Marcaida Jr.</p>
    </section>
  )
}

export default Footer
