import React from 'react'
import { Achievement } from './index'
import { InViewWrapper } from '../atoms';
// component's props

interface Achievement {
    imgsrcs: string[];
    title: string;
    technologies: string[];
    description: string;
}

interface Experience {
    companyName: string;
    jobTitle: string;
    dates: string;
    responsibilities?: string;
    achievements: Achievement[];
}

interface ExperienceCardProps {
    experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    const [isOpenAchievement, setIsOpenAchievement] = React.useState<boolean>(true)

    return (
        <div className='flex flex-col gap-[20px]'>
            <InViewWrapper>
                <div className='flex flex-col justify-between sm:flex-row w-full gap-[20px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-row  justify-between'>
                            <p className='text-white text-[16px] md:text-[20px]'>{experience['companyName']}</p>
                            <button onClick={() => setIsOpenAchievement(!isOpenAchievement)} className=' hover:underline text-white text-[13px] md:text-[15px]  flex sm:hidden flex-row items-center justify-center gap-[10px]'>
                                {
                                    isOpenAchievement ?
                                        <span className='-rotate-180 transition duration-600'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.9399V12.9399H0.5V10.9299H14V6.93994L19 11.9399L14 16.9399Z" fill="white" />
                                            </svg>
                                        </span> : <span className='transition duration-600'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 16.9399V12.9399H0.5V10.9299H14V6.93994L19 11.9399L14 16.9399Z" fill="white" />
                                            </svg>
                                        </span>
                                }
                            </button>
                        </div>

                        <p className='text-white text-[14px]'>{experience['jobTitle']}</p>
                        <p className='text-gray-700 text-[13px]'>{experience['dates']}</p>
                    </div>

                    <button onClick={() => setIsOpenAchievement(!isOpenAchievement)} className=' hover:underline text-white text-[13px] md:text-[15px] hidden sm:flex flex-row items-center justify-center gap-[10px]'>
                        <span className=''>{
                            isOpenAchievement ? 'Hide Achievements' : 'Show Achievements'
                        }</span>
                        {
                            isOpenAchievement ?
                                <span className='-rotate-180 transition duration-600'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.9399V12.9399H0.5V10.9299H14V6.93994L19 11.9399L14 16.9399Z" fill="white" />
                                    </svg>
                                </span> : <span className='transition duration-600'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 16.9399V12.9399H0.5V10.9299H14V6.93994L19 11.9399L14 16.9399Z" fill="white" />
                                    </svg>
                                </span>
                        }
                    </button>
                </div>
            </InViewWrapper>
            {
                isOpenAchievement ?

                    <InViewWrapper delay={400}>
                        <div className='flex flex-col gap-[40px] '>
                            <div className='flex flex-row gap-[15px] md:gap-[30px] '>
                                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                                <div>
                                    <p className='text-white text-[12px] md:text-[13px] xl:text-[15px]'>{experience['responsibilities']}</p></div>
                            </div>
                            <Achievement achievements={experience['achievements']} />
                        </div>
                    </InViewWrapper>
                    : null
            }
        </div>
    )
}

export default ExperienceCard
