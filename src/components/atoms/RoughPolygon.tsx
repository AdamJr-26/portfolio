import React, { useRef, useEffect } from 'react';
import rough from 'roughjs';

interface RoughPolygonProps {
    polygonFill?: string;
    svgSizeWidth?: number;
    svgSizeHeight?: number;
    project?: string;

}

function RoughPolygon({ polygonFill = "white", svgSizeWidth = 30, svgSizeHeight = 33.3, project }: RoughPolygonProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (svgRef.current) {
            const svgWidth = svgRef.current.clientWidth;
            const svgHeight = svgRef.current.clientHeight;
            const roughSvg = rough.svg(svgRef.current);

            // Define polygon vertices based on the clip-path percentages
            const polygon = roughSvg.polygon(
                [
                    [svgWidth * 0.5, svgHeight * 0], // 50% 0%
                    [svgWidth * 1, svgHeight * 0.25], // 100% 25%
                    [svgWidth * 1, svgHeight * 0.75], // 100% 75%
                    [svgWidth * 0.5, svgHeight * 1], // 50% 100%
                    [svgWidth * 0, svgHeight * 0.75], // 0% 75%
                    [svgWidth * 0, svgHeight * 0.25], // 0% 25%
                ],
                {
                    fill: polygonFill,
                    hachureGap: 5,
                    stroke: 'white'
                }
            );

            // Clear previous content and add new polygon
            svgRef.current.innerHTML = '';
            svgRef.current.appendChild(polygon);
        }
    }, [polygonFill]);

    return (
        <a href={project} target='_blank'>
            <svg className='cursor-pointer' ref={svgRef} width={svgSizeWidth} height={svgSizeHeight} xmlns="http://www.w3.org/2000/svg">
                {/* <svg className=' text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6.75 11.5c2.75 0 3.49-2.03 3.68-3.1c.91-.29 1.57-1.14 1.57-2.15C18 7 17 6 15.75 6S13.5 7 13.5 8.25c0 .94.57 1.75 1.39 2.08C14.67 11 14 12 12 12c-1.38 0-2.34.35-3 .84V8.87c.87-.31 1.5-1.14 1.5-2.12c0-1.25-1-2.25-2.25-2.25S6 5.5 6 6.75c0 .98.63 1.81 1.5 2.12v6.26c-.87.31-1.5 1.14-1.5 2.12c0 1.25 1 2.25 2.25 2.25s2.25-1 2.25-2.25c0-.93-.56-1.75-1.37-2.07c.28-.68 1.1-1.68 3.62-1.68m-4.5 3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0-10.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m7.5 1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75" />
            </svg> */}
            </svg>
        </a>

    );
}

export default RoughPolygon;
