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
  indicatorSize?: number;
  isIndicators?: boolean;
  nextArrow? : JSX.Element | React.ReactElement;
  prevArrow? : JSX.Element | React.ReactElement;

}

function SliderWrapper({ children, cssClass, isIndicators = true, indicatorSize = 3, ...props }: SliderWrapperProps) {
  const [activeSlide, setActiveSlide] = useState<number | boolean>(0);

  const indicators = (index: any) => (<div
    key={index}
    className={`${index === activeSlide ? 'bg-white hover:bg-white' : 'hover:bg-dim '} p-[3px] cursor-pointer ml-[10px]  border-white border-[1px]`}>
  </div>)

  return (
    <Slide
      onChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
      indicators={isIndicators ? indicators : false}
      {...props}
      cssClass={cssClass}
    >
      {children}
    </Slide>
  )
}

export default SliderWrapper