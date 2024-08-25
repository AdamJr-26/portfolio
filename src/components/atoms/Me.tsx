import React from 'react';
import smallBox from '../../assets/small-box.svg';
import MeSVG from '../../assets/me.svg';

function Me() {
    return (
        <div className='flex flex-col items-center justify-center w-fit relative 2xl:scale-[1.2]'>
            {/* <div className='w-auto absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-auto'>
                <svg className="w-full h-full" width="542" height="542" viewBox="0 0 542 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.84822" y="271.883" width="380.844" height="380.844" transform="rotate(-45 0.84822 271.883)" stroke="#39FF14">
                        <animate attributeName="stroke-dasharray" from="0,1300" to="1347.308,0" dur="3s" fill="freeze" />
                    </rect>
                    <line x1="0.353553" y1="0.646447" x2="541.354" y2="541.646" stroke="#39FF14">
                        <animate attributeName="stroke-dasharray" from="0,764.96" to="764.96,0" dur="1s" fill="freeze" begin="3s" />
                    </line>
                </svg>
            </div> */}

            {/* removed the z-10 here for modal */}
            <img className=' object-contain h-[340px] w-auto' src={MeSVG} alt="" />
            <div className='flex items-center gap-2 p-1 border-[1px] border-white w-fit'>
                <div className='h-[20px] w-[20px] bg-primary'></div>
                <p className=' font-medium text-white text-[12px] md:text-[14px] xl:text-[16px]'>Currently I am working on my portfolio</p>
            </div>
        </div>
    );
}

export default Me;
