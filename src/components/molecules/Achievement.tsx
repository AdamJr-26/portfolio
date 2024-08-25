import React, { useState, useRef } from 'react'
import { SliderWrapper, ModalAchievementContent } from '../molecules/index'

import { InViewWrapper, ReactModalWrapper, } from '../atoms';



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
            <div className='flex flex-row gap-[15px] md:gap-[30px] '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div>
                    <p className='text-white text-[13px] md:text-[16px]'>Utilized my knowledge in UI/UX design to help the team deliver the most effective solution for the client, implementing best practices to optimize the application developed with Python, React, and Laravel.</p></div>
            </div>
            <div className='flex flex-row   '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div className='flex flex-col h-fit w-full md:ml-[15px]'>
                    <SliderWrapper
                        easing='ease-in'
                        arrows={false}
                        transitionDuration={400}
                        autoplay={false}
                        infinite={false}
                        responsive={responsiveSettings}
                        canSwipe={false}
                        indicatorSize={5}
                        cssClass="grid gap-[5px] w-full"
                    >
                        {
                            achievements?.map((achievement, index) => (
                                <ReactModalWrapper button={<div>
                                    <InViewWrapper key={index} delay={0} classname='inview-opacity mx-[15px]'>
                                        <div key={1} className='relative flex cursor-pointer flex-col w-full items-center justify-center h-fit border-[1px] border-gray-700 hover:border-white transition ease-in-out duration-400 '>
                                            <div className='h-full w-full'>
                                                <SliderWrapper
                                                    easing='ease-in'
                                                    arrows={false}
                                                    autoplay={true}
                                                    duration={6000}
                                                    infinite={true}
                                                    transitionDuration={100}
                                                    canSwipe={true}
                                                    indicatorSize={2}
                                                    cssClass='h-full w-full'
                                                    isIndicators={false}
                                                >
                                                    {
                                                        achievement['imgsrcs'].map((img, index) => (
                                                            <img key={index} className='w-full h-[200px] object-cover ' src={`https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/${img}`} alt="" />
                                                        ))
                                                    }
                                                </SliderWrapper>
                                            </div>
                                            <div className='min-h-[1px] w-full bg-gray-700'></div>
                                            <div className='flex justify-center min-h-fit py-[10px]'>
                                                <p className='text-white text-[13px] sm:text-[15px] md:text-[16px]'>little descriptionof the app</p>
                                            </div>

                                        </div>
                                    </InViewWrapper></div>}>
                                    <ModalAchievementContent
                                        imgsrcs={achievement['imgsrcs']}
                                        title={achievement['title']}
                                        technologies={achievement['technologies']}
                                        description={achievement['description']} />
                                </ReactModalWrapper>

                            ))
                        }
                    </SliderWrapper>
                </div>
            </div>
        </div>
    )
}

export default Achievement
