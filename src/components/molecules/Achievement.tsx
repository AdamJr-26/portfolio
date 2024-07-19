import React, { useState, useRef } from 'react'
import { ExperienceCard, ExperienceAchievementsSlider } from '../molecules/index'
import { SliderIndicator } from '../atoms/index'
import MyProjectSample from '../../assets/images/myproject.png';
import { InViewWrapper } from '../atoms';
import { Slide } from 'react-slideshow-image';

function Achievement() {
    const responsiveSettings = [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1024,
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
        }
    ];
    const [activeSlide, setActiveSlide] = useState<number | boolean>(0);
    // const indicators = (index: any) => (<SliderIndicator  activeSlide={activeSlide} index={index} />)
    const indicators = (index: any) => (<div
        key={index}
        className={`${index === activeSlide ? 'bg-white hover:bg-white' : 'hover:bg-dim '}  cursor-pointer ml-[10px] p-[5px] border-white border-[1px]`}>
    </div>);
    return (
        <div className='flex flex-col gap-[40px]  '>
            <div className='flex flex-row gap-[30px] '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div>
                    <p className='text-white text-[13px] md:text-[16px]'>Utilized my knowledge in UI/UX design to help the team deliver the most effective solution for the client, implementing best practices to optimize the application developed with Python, React, and Laravel.</p></div>
            </div>
            <div className='flex flex-row gap-[30px] '>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <div className='gap-[20px] h-fit w-full '>
                    <Slide
                        onChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
                        easing='ease-in'
                        indicators={indicators}
                        arrows={false}
                        transitionDuration={400}
                        autoplay={false}
                        infinite={false}
                        responsive={responsiveSettings}
                        cssClass=' position-relative; overflow:hidden'
                        >
                        <InViewWrapper delay={400} classname='inview-slide'>
                            <div key={1} className='flex flex-col gap-[1px] items-center justify-center h-fit'>
                                <div className='h-[200px] w-[300px] '>
                                    <img className='object-cover h-full w-full' src={MyProjectSample} alt="" />
                                </div>
                                <div className='flex justify-center'>
                                    <p className='text-white text-[13px] sm:text-[15px] md:text-[16px]'>little descriptionof the app</p>
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper delay={200} classname='inview-slide'>
                            <div key={2} className='flex flex-col gap-[10px] items-center justify-center h-fit'>
                                <div className='h-[200px] w-[300px] '>
                                    <img className='object-cover h-full w-full' src={MyProjectSample} alt="" />
                                </div>
                                <div className='flex justify-center'><p className='text-white text-[13px] sm:text-[15px] md:text-[16px]'>little descriptionof the app</p>
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper delay={0} classname='inview-slide'>
                            <div key={3} className='flex flex-col gap-[10px] items-center justify-center h-fit'>
                                <div className='h-[200px] w-[300px] '>
                                    <img className='object-cover h-full w-full' src={MyProjectSample} alt="" />
                                </div>
                                <div className='flex justify-center'>
                                    <p className='text-white text-[13px] sm:text-[15px] md:text-[16px]'>little descriptionof the app</p>
                                </div>
                            </div>
                        </InViewWrapper>

                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default Achievement
