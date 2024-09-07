import React, { useRef } from 'react'
import { Icon } from '@iconify/react';
import { InViewWrapper } from '../atoms';

function About() {

    return (
        <section id='about' className='flex flex-row justify-center relative overflow-hidden max-h-fit min-h-dvh'>
            <div className=' max-w-[1366px] w-full flex flex-col mx-auto p-[10px] lg:px-[20px]'>
                <div className='h-fit flex flex-row items-center gap-[20px] '>
                    <p className='font-medium text-[24px] md:text-[28px] lg:text-[32px] text-nowrap'>
                        <span className='text-primary'>#</span>
                        <span className='text-white'>about-me</span>
                    </p>
                    <div className='cracking-bg-for-section-title min-h-[1px] xl:min-h-[2px]'></div>
                </div>
                <div className='flex grow flex-row justify-between min-h-full sm:p-[20px]'>
                    <div>
                        <p className='text-[32px] text-white font-bold'>Hi! I'm</p>
                        <p className='text-stroke font-bold text-[36px] md:text-[42px] lg:text-[52px] '>Adam Marcaida Jr</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
