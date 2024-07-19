import React from 'react'
import { Icon } from '@iconify/react';

function LetsChat() {
  return (
    <div className='flex items-center justify-between text-white border-[1px] p-[8px] w-full max-w-[640px]'>
      <p className='text-white'>Adam.</p>
      <div>
        <address>
          <a href="mailto:adamcompiomarcaida@example.com" className='flex items-center justify-center px-[8px] py-[4px] gap-[7px] border-[1px] border-white'>
            <span className='text-white'>Let's Chat</span>
            <span className='text-white'>
              <Icon className='text-primary' icon="mdi:email-plus-outline" />
            </span>
          </a>
        </address>
      </div>
    </div>
  )
}

export default LetsChat
