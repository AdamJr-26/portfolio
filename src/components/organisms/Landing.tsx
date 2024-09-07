import  { useEffect } from 'react'
import { Background, GreetingText, Me } from '../atoms/index';
import { TopNavBar } from '../molecules/index';
import { useLocation, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Landing() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <section className='flex flex-row justify-center relative overflow-hidden max-h-fit min-h-dvh'>
            <Background />

            {/* <div className='absolute bottom-0 right-0 opacity-30 hidden lg:flex'>
                <svg width="162" height="164" viewBox="0 0 162 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="111.709" height="111.709" stroke="white" />
                    <rect x="55.791" y="55.082" width="111.709" height="111.709" stroke="white" />
                </svg>
            </div> */}

            {/* removed the z-10 here for modal */}

            <div className='max-w-[1366px] w-full flex flex-col items-center justify-between relative  p-[10px] lg:px-[20px] gap-[20px]'>
                <TopNavBar />
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col gap-[20px] w-full'>
                        <GreetingText />
                        <p className=' text-white text-[12px] md:text-[16px] xl:text-[18px]'>I’m currently into Web Development.</p>
                        <nav className='flex items-center gap-[10px]'>
                            <Link to='#experiences' className='flex items-center'><span className='text-primary '><Icon icon="mdi:arrow-down-thin" /></span><span className='text-gray-700 font-medium'>experiences</span></Link>
                            {/* <Link to='#projects' className='flex items-center'><span className='text-primary '><Icon icon="mdi:arrow-down-thin" /></span><span className='text-gray-700 font-medium'>Projects</span></Link> */}
                            <Link to="#skills" className='flex items-center'><span className='text-primary '><Icon icon="mdi:arrow-down-thin" /></span><span className='text-gray-700 font-medium'>skills</span></Link>
                            <Link to='#about' className='flex items-center'><span className='text-primary '><Icon icon="mdi:arrow-down-thin" /></span><span className='text-gray-700 font-medium'>about-me</span></Link>
                        </nav>
                    </div>
                    <div className=' hidden sm:flex items-center justify-center w-full'>
                        <Me />
                    </div>
                </div>
                <div className=' flex py-[20px] flex-col items-center justify-center  2xl:scale-[1.5]'>
                 
                        <div className=' flex flex-col xl:w-[60%]'>
                            <div className='p-[10px] border-[1px] border-white relative '>
                                <div className='absolute top-[-25px] scale-50 sm:scale-75 md:scale-1 '>
                                    <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.59375 35.3125V29.5C3.59375 28.125 3.83333 26.6979 4.3125 25.2188C4.79167 23.7188 5.45833 22.2917 6.3125 20.9375C7.16667 19.5833 8.15625 18.4167 9.28125 17.4375L13.3438 19.7812C12.4479 21.2812 11.7708 22.8125 11.3125 24.375C10.8542 25.9167 10.625 27.6146 10.625 29.4688V35.3125H3.59375ZM13.9688 35.3125V29.5C13.9688 28.125 14.2083 26.6979 14.6875 25.2188C15.1667 23.7188 15.8333 22.2917 16.6875 20.9375C17.5417 19.5833 18.5312 18.4167 19.6562 17.4375L23.7188 19.7812C22.8229 21.2812 22.1458 22.8125 21.6875 24.375C21.2292 25.9167 21 27.6146 21 29.4688V35.3125H13.9688Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='text-white text-[12px] md:text-[13px] xl:text-[15px]'>I'm passionate about IT with its endless opportunities and skills to learn. I'm eager to grow my skills, taking to heart my father's advice: 'Learn different skills for a secure career.'</p>
                                <div className='absolute bottom-[-20px] right-[20px] scale-50 sm:scale-75 md:scale-1' >
                                    <svg className='' width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.59375 35.3125V29.5C3.59375 28.125 3.83333 26.6979 4.3125 25.2188C4.79167 23.7188 5.45833 22.2917 6.3125 20.9375C7.16667 19.5833 8.15625 18.4167 9.28125 17.4375L13.3438 19.7812C12.4479 21.2812 11.7708 22.8125 11.3125 24.375C10.8542 25.9167 10.625 27.6146 10.625 29.4688V35.3125H3.59375ZM13.9688 35.3125V29.5C13.9688 28.125 14.2083 26.6979 14.6875 25.2188C15.1667 23.7188 15.8333 22.2917 16.6875 20.9375C17.5417 19.5833 18.5312 18.4167 19.6562 17.4375L23.7188 19.7812C22.8229 21.2812 22.1458 22.8125 21.6875 24.375C21.2292 25.9167 21 27.6146 21 29.4688V35.3125H13.9688Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='p-[10px] border-[1px] border-white mt-[-1px] w-fit self-end'>
                                <p className='text-white text-[12px] md:text-[13px] xl:text-[15px]'>- Adam</p>
                            </div>
                        </div>
                    

                </div>
                {/* <div className='flex md:hidden items-center justify-center self-center w-fit px-[4px] sm:px-[10px] py-[12px] sm: py-[24px] border-[1px] border-white'>
                    <Icon className='text-primary text-[16px] sm:text-[24px]' icon="mdi:arrow-down-thin" />
                </div> */}
            </div>

        </section>
    )
}

export default Landing
