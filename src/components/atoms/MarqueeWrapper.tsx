import React from 'react'
import Marquee from 'react-fast-marquee';
interface MarqueeWrapperProps {
    style?: string;
    className?: "";
    autoFill?: boolean;
    play?: boolean;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    direction?: string;
    speed?: number;
    delay?: number;
    loop?: number;
    gradient?: boolean;
    gradientColor?: string;
    gradientWidth?: number;
    onFinish?: Function;
    onCycleComplete?: Function;
    onMount?: Function;
    children: React.ReactNode;


}

function MarqueeWrapper() {
    return (
        <div>MarqueeWrapper</div>
    )
}

export default MarqueeWrapper