import React from 'react'
import { Icon } from '@iconify/react';




function SliderNextPrev() {
  return {
    nextArrow: (<button className='bg-dim bg-opacity-75 p-[5px] border-[1px] text-white text-[24px]'><Icon icon="mdi:keyboard-arrow-right" /></button>),
    prevArrow : (<button className='bg-dim bg-opacity-75 p-[5px] border-[1px] text-white text-[24px]'><Icon icon="mdi:keyboard-arrow-left" /></button>)
  }
}

export default SliderNextPrev