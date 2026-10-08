import { useEffect, useRef } from 'react';
import rough from 'roughjs';

interface RoughPolygonProps {
  size?: number;
  color?: string;
}

/** A small hand-drawn hexagon, used as a bullet. */
function RoughPolygon({ size = 16, color = '#39FF14' }: RoughPolygonProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const height = size * 1.1547;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const w = size - 2;
    const h = height - 2;
    const hexagon = rough.svg(svg).polygon(
      [
        [1 + w * 0.5, 1],
        [1 + w, 1 + h * 0.25],
        [1 + w, 1 + h * 0.75],
        [1 + w * 0.5, 1 + h],
        [1, 1 + h * 0.75],
        [1, 1 + h * 0.25],
      ],
      { stroke: color, roughness: 0.8, seed: 3 },
    );
    svg.replaceChildren(hexagon);
  }, [size, height, color]);

  return <svg ref={svgRef} width={size} height={height} className='shrink-0' aria-hidden='true' />;
}

export default RoughPolygon;
