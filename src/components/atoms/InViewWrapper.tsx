import { FC, ReactElement, useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

interface InViewWrapperProps {
    delay?: number;
    threshold?: number;
    classname?: string;
    style?: string;
    children: ReactElement;
}

const InViewWrapper: FC<InViewWrapperProps> = ({ delay = 0, threshold = 0, classname = 'inview-fade', style, children }) => {
    const { ref, inView } = useInView({
        threshold: threshold,
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
            // const timer = setTimeout(() => {
            //     setIsVisible(true);
            // }, delay);
            // return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [inView, delay]);

    return (
        <div ref={ref} className={`${isVisible ? classname : 'hide-element '} ${style}`}>
            {children}
        </div>
    );
}

export default InViewWrapper;
