import React, { useRef } from 'react'
import { Icon } from '@iconify/react';
import { InViewWrapper } from '../atoms';

function About() {

    return (
        <section id='about' className='flex flex-row justify-center relative overflow-hidden max-h-fit min-h-dvh'>
            <div className=' max-w-[1366px] w-full flex flex-col m-auto p-[10px] lg:px-[20px]'>
                <div className='h-fit flex items-center gap-[20px] '>
                    <p className='font-medium text-[16px] md:text-[20px] lg:text-[28px]'>
                        <span className='text-primary'>#</span>
                        <span className='text-white'>about-me</span>
                    </p>
                    <div className='min-h-[2px] bg-primary min-w-[80px] md:min-w-[300px]'></div>
                </div>
                <div
                    // className={`${inViewport ?'opacity-100 blur-0 translate-x-0 transition-all duration-1000': 'opacity-0 blur-[5px] -translate-x-full transition-all duration-100'} flex grow flex-row justify-between min-h-full sm:p-[20px]`}>
                    className='flex grow flex-row justify-between min-h-full sm:p-[20px]'>
                    <div className='w-full flex flex-col gap-[20px] '>
                        <InViewWrapper threshold={0}>
                            <p className='text-white text-[13px] '>Hello, i'm Adam</p>
                        </InViewWrapper>
                        <InViewWrapper delay={200}>
                            <p className='text-white text-[13px] delay-100'>I’m a web developer passionate about building dynamic and responsive websites. With a background in Computer Science, I’ve worked with technologies like ReactJS, JavaScript, and CSS. I enjoy writing clean, readable code and creating great user experiences. My past roles have taught me how to juggle multiple tasks and optimize performance effectively.</p>
                        </InViewWrapper>
                        <InViewWrapper delay={300}>
                            <p className='text-white text-[13px] delay-200'>I'm dedicated to continuously expanding my skill set and staying current with industry trends. Inspired by my father's advice, I believe in diversifying my abilities to ensure a secure and versatile career. I thrive on tackling new challenges and enjoy contributing to meaningful projects as part of a collaborative team.</p>
                        </InViewWrapper>
                        <InViewWrapper delay={600}>
                            <button className='w-fit flex gap-[5px] delay-300 items-center border-[1px] border-primary py-[8px] px-[12px]'><span className='text-white'>Resume</span><span className='text-primary'><Icon icon="mdi:tray-download" /></span> </button>
                        </InViewWrapper>
                    </div>
                    <div className='w-full hidden sm:flex'></div>
                </div>
            </div>
        </section>
    )
}

export default About
