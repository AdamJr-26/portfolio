import React, { useEffect, useState } from 'react';

function Background() {
  const [lines, setLines] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createLines = () => {
      const spacing = 30;
      const screenWidth = document.documentElement.clientWidth;
      const screenHeight = window.innerHeight;
      const numberOfLines = Math.ceil(screenWidth / spacing);
      const newLines: JSX.Element[] = [];

      for (let i = 0; i < numberOfLines; i++) {
        const x = i * spacing + 1.5;
        for (let y = 0; y <= screenHeight; y += 30) {
          newLines.push(
            <line
              key={`${x}-${y}`}
              x1={x}
              x2={x}
              y1={y}
              y2={y + 15}
              stroke="#1E1E1E"
              strokeWidth="3"
            />
          );
        }
      }

      setLines(newLines);
    };

    createLines();

    window.addEventListener('resize', createLines);
    return () => window.removeEventListener('resize', createLines);
  }, []);

  return (
    <div className='max-h-screen bg-cover absolute inset-0 w-full h-full z-0'>
      <svg width="100%" height="100%" viewBox={`0 0 ${document.documentElement.clientWidth} ${window.innerHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {lines}
      </svg>
    </div>
  );
}

export default Background;
