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
        // if the item in slides are changed, change also the autoplay and infinite condition.
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: achievements?.length,
                slidesToScroll: achievements?.length,
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

        <div className='flex flex-row   '>
            <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
            <div className='flex flex-col h-fit w-full md:ml-[15px]'>
                <SliderWrapper
                    easing='ease-in'
                    arrows={false}
                    transitionDuration={400}
                    duration={3000}
                    autoplay={achievements?.length > 2 ? true : false}
                    infinite={achievements?.length > 2 ? true : false}
                    responsive={responsiveSettings}
                    canSwipe={achievements?.length > 1 ? true : false}
                    indicatorSize={5}
                    isIndicators={false}
                    cssClass="grid gap-[5px] w-full"
                >
                    {
                        achievements?.map((achievement, index) => (
                            <ReactModalWrapper button={
                                <div className=''>
                                    <InViewWrapper key={index} delay={0} classname='mx-[15px]'>
                                        <div key={1} className='relative flex cursor-pointer flex-col h-full w-full items-center  justify-center  border-[1px] border-gray-700 hover:border-white '>
                                            <div className='h-fit w-full'>
                                                <SliderWrapper
                                                    easing='ease-in'
                                                    arrows={false}
                                                    autoplay={true}
                                                    duration={6000}
                                                    infinite={true}
                                                    transitionDuration={300}
                                                    canSwipe={true}
                                                    indicatorSize={2}
                                                    cssClass=''
                                                    isIndicators={false}
                                                >
                                                    {
                                                        achievement['imgsrcs'].map((img, index) => (
                                                            <img key={index} className='w-full h-[200px] md:h-[170px] object-cover ' src={`https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/${img}`} alt="" />
                                                        ))
                                                    }
                                                </SliderWrapper>
                                            </div>
                                            <div className='min-h-[1px] w-full bg-gray-700'></div>
                                            <div className='flex justify-center min-h-fit py-[5px] px-[5px]'>
                                                <p className='text-white text-[13px] sm:text-[14px] md:text-[15px] text-center'>{achievement?.technologies}</p>
                                            </div>
                                            <div className='min-h-[1px] w-full bg-gray-700'></div>
                                            <div className='flex justify-center min-h-fit py-[5px] px-[5px]'>
                                                <p className='text-white text-[13px] sm:text-[14px] md:text-[15px] text-center'>{achievement?.title}</p>
                                            </div>
                                            <div className='min-h-[1px] w-full bg-gray-700'></div>
                                            <div className='flex justify-center min-h-fit py-[5px] px-[5px]'>
                                                <p className='text-white text-[13px] sm:text-[14px] md:text-[15px] text-center'>{achievement?.description}</p>
                                            </div>

                                        </div>
                                    </InViewWrapper>
                                </div>
                            }>
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

    )
}

export default Achievement
