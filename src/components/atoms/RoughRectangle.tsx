import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';

interface RoughRectangleProps {
    svgWidthPercentage?: number;
    rectangleFill?: string;
}

function RoughRectangle({ svgWidthPercentage = 90, rectangleFill = 'white' }: RoughRectangleProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const [svgHeight, setSvgHeight] = useState(0);
    const [animatedWidth, setAnimatedWidth] = useState(0); 

    // Update SVG dimensions on resize
    useEffect(() => {
        const updateSvgDimensions = () => {
            if (svgRef.current) {
                setSvgWidth(svgRef.current.clientWidth);
                setSvgHeight(svgRef.current.clientHeight);
            }
        };

        updateSvgDimensions();
        window.addEventListener('resize', updateSvgDimensions);

        return () => {
            window.removeEventListener('resize', updateSvgDimensions);
        };
    }, []);

    // Animate the width percentage
    useEffect(() => {
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const duration = 700; 
            const targetWidth = (svgWidth * svgWidthPercentage) / 100;
            const newWidth = Math.min((progress / duration) * targetWidth, targetWidth);

            setAnimatedWidth(newWidth);

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [svgWidth, svgWidthPercentage]);

    // Draw the rough rectangle
    useEffect(() => {
        if (svgRef.current && svgWidth > 0 && svgHeight > 0) {
            const roughSvg = rough.svg(svgRef.current);
            const rectangle = roughSvg.rectangle(
                0, 
                0, 
                animatedWidth, 
                svgHeight, 
                {
                    fill: rectangleFill,
                    hachureGap: 5,
                }
            );

            svgRef.current.innerHTML = '';
            svgRef.current.appendChild(rectangle);
        }
    }, [svgWidth, svgHeight, animatedWidth, rectangleFill]);

    return (
        <svg
            width="100%"
            height="100%"
            ref={svgRef}
        ></svg>
    );
}

export default RoughRectangle;
