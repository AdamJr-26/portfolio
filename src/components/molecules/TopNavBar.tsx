import React from 'react'
import { LetsChat, Contacts } from '../atoms/index';


function TopNavBar() {
    return (
        <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-[20px]'>
            <LetsChat />
            <Contacts />
        </div>
    )
}

export default TopNavBar
