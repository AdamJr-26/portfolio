import { ReactNode } from 'react'
import { Slide } from 'react-slideshow-image';

interface ExperienceAchievementsSliderProps {
    children: ReactNode;
    indicators?: boolean;
    slidesToScroll: number;
    slidesToShow: number;
    responsiveSettings: {
        breakpoint: number; 
        settings:
        {
            slidesToShow: number;
            slidesToScroll: number
        }
    }[];
}


function ExperienceAchievementsSlider({children, indicators=false, ...props}: ExperienceAchievementsSliderProps) {
    return (
        <Slide indicators={indicators} {...props} >
            {children}
        </Slide>
    )
}

export default ExperienceAchievementsSlider

