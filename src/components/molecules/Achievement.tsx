import React, { useState, useRef } from 'react'
import { ExperienceCard, ExperienceAchievementsSlider, SliderWrapper } from '../molecules/index'
import { SliderIndicator } from '../atoms/index'
import MyProjectSample from '../../assets/images/myproject.png';
import { InViewWrapper, } from '../atoms';
import { Slide } from 'react-slideshow-image';

interface Achievements {
    imgsrcs: string[];
    title: string;
    technologies: string[];
    description: string;
}

interface AchievementProps {
    achievements: Achievements[]
}

function Achievement({ achievements }: AchievementProps) {
    const responsiveSettings = [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];

    return (
        <div className='flex flex-col gap-[40px] '>
            <div className='flex flex-row gap-[30px] '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div>
                    <p className='text-white text-[13px] md:text-[16px]'>Utilized my knowledge in UI/UX design to help the team deliver the most effective solution for the client, implementing best practices to optimize the application developed with Python, React, and Laravel.</p></div>
            </div>
            <div className='flex flex-row gap-[30px] '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div className='flex flex-col gap-[20px] h-fit w-[100%]  '>
                    <SliderWrapper
                        easing='ease-in'
                        arrows={false}
                        transitionDuration={400}
                        autoplay={false}
                        infinite={false}
                        responsive={responsiveSettings}
                        canSwipe={false}
                        indicatorSize={5}
                    >
                        {
                            achievements?.map((achievement, index) => (
                                <InViewWrapper key={index} delay={0} classname='inview-opacity'>
                                    <div key={1} className='flex flex-col  items-center justify-center h-fit border-[1px]'>
                                        <div className='h-[200px] w-[300px] '>
                                            <SliderWrapper
                                                easing='ease-in'
                                                arrows={false}
                                                autoplay={true}
                                                duration={6000}
                                                infinite={true}
                                                transitionDuration={400}
                                                canSwipe={true}
                                                indicatorSize={2}
                                            >   
                                                {
                                                    achievement['imgsrcs'].map((img, index) => (
                                                        <img key={index} className='w-full h-full object-contain ' src={`https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/${img}`} alt="" />
                                                    ))
                                                }
                                            </SliderWrapper>
                                        </div>
                                        <div className='flex justify-center'>
                                            <p className='text-white text-[13px] sm:text-[15px] md:text-[16px]'>little descriptionof the app</p>
                                        </div>
                                    </div>
                                </InViewWrapper>
                            ))
                        }
                    </SliderWrapper>
                </div>
            </div>
        </div>
    )
}

export default Achievement
