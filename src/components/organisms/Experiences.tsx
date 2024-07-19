import React, { useState, useRef } from 'react'
import { ExperienceCard, ExperienceAchievementsSlider, Achievement } from '../molecules/index';
import { DotsBackground } from '../atoms/index';
import { InViewWrapper } from '../atoms';

function Experiences() {

// API
const jobExperiences = [
  {
    companyName: '',
    jobTitle: '',
    dates: '',
  },
  {
    companyName: '',
    jobTitle: '',
    dates: '',
  },
]
  return (
    <section id='experiences' className='flex flex-col relative overflow-visible max-h-fit'>
      <div className='absolute left-0 top-[50%] -translate-y-[50%] hidden 2xl:flex'>
        <DotsBackground />
      </div>
      <div className='absolute right-0 -top-[50px]  hidden 2xl:flex border-l-[1px] border-t-[1px] border-b-[1px] border-white min-h-[100px] min-w-[150px]'>
      </div>
      <div className=' max-w-[1366px] w-full flex flex-col m-auto p-[10px] lg:px-[20px]'>
        <div className='h-fit flex items-center gap-[20px] '>
          <p className='font-medium text-[24px] md:text-[28px] lg:text-[32px]'>
            <span className='text-primary'>#</span>
            <span className='text-white'>experiences</span>
          </p>
          <div className='min-h-[2px] bg-primary min-w-[80px] md:min-w-[300px]'></div>
        </div>
        {/* max-w-[1366px] w-full flex flex-col items-center justify-between relative z-10 p-[10px] lg:px-[20px] gap-[20px] */}
        <div className='flex flex-col gap-[30px] sm:p-[20px]  '>
            <ExperienceCard companyName="Alfamart Trading Philippines Inc." jobTitle="Information Technology Assistant" dates="09/2023 - 03/2024" />
            <ExperienceCard companyName="Top Bliss" jobTitle="Frontend Web Developer" dates="06/2022 - 07/2022" />
         
          {/* <div className='bg-gray-700 min-h-[2px] w-full sm:hidden'></div> */}
        </div>
      </div>
    </section >
  )
}

export default Experiences
