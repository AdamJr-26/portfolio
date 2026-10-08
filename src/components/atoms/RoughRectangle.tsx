import { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';

interface RoughRectangleProps {
  /** How much of the width to fill, 0–100 */
  percentage: number;
  fill?: string;
}

const DURATION = 700;

/** A hand-drawn progress bar that animates to `percentage` whenever it changes. */
function RoughRectangle({ percentage, fill = '#39FF14' }: RoughRectangleProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || size.width === 0) return;

    const roughSvg = rough.svg(svg);
    const target = (size.width * percentage) / 100;
    let frame = 0;
    let start: number | null = null;

    const draw = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const rect = roughSvg.rectangle(2, 2, Math.max(target * eased - 4, 1), size.height - 4, {
        fill,
        fillStyle: 'hachure',
        hachureGap: 5,
        stroke: fill,
        roughness: 1.2,
        seed: 7,
      });
      svg.replaceChildren(rect);
      if (progress < 1) frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [percentage, fill, size]);

  return <svg ref={svgRef} width='100%' height='100%' aria-hidden='true' />;
}

export default RoughRectangle;
