import React from 'react'
import { Icon } from '@iconify/react';

function Contacts() {
    return (
        <div className='hidden w-full  sm:flex sm:justify-between md:justify-end gap-[24px]'>
            <a href="https://github.com/AdamJr-26" target='_blank' className='flex items-center gap-[8px]'>
                <Icon className='text-white ' icon="mdi:github" />
                <span className='text-white hidden md:flex'>Github </span>
            </a>
            <a href='https://www.linkedin.com/in/adam-marcaida' target='_blank' className='flex items-center gap-[8px]'>
                <Icon className='text-white ' icon="mdi:linkedin" />
                <span className='text-white hidden md:flex'>LinkedIn</span>
            </a>
            <a href='#' target='_blank' className='flex items-center gap-[8px]'>
                <Icon className='text-white ' icon="ic:baseline-facebook" />
                <span className='text-white hidden md:flex'>Facebook</span>
            </a>
            <a  href='#' target='_blank' className='flex items-center gap-[8px]'>
                <Icon className='text-white ' icon="quill:paper" />
                <span className='text-white hidden md:flex'>CV</span>
            </a>
        </div>
    )
}

export default Contacts
