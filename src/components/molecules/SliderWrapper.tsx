import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';


interface SliderWrapperProps {
  children: React.ReactNode;
  easing?: string;
  arrows?: boolean;
  autoplay?: boolean;
  duration?: number;
  infinite?: boolean;
  transitionDuration?: number;
  canSwipe?: boolean;
  responsive?: any;
  cssClass?: string;
  indicatorSize?: 2 | 5;
  
}

function SliderWrapper({ children, indicatorSize = 2, ...props }: SliderWrapperProps) {
  const [activeSlide, setActiveSlide] = useState<number | boolean>(0);

  const indicators = (index: any) => (<div
    key={index}
    className={`${index === activeSlide ? 'bg-white hover:bg-white' : 'hover:bg-dim '}  cursor-pointer ml-[10px] p-[${indicatorSize}px] border-white border-[1px]`}>
  </div>)

  return (
    <Slide
      onChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
      indicators={indicators}
      {...props}
      cssClass=' position-relative;'
    >
      {children}
    </Slide>
  )
}

export default SliderWrapper