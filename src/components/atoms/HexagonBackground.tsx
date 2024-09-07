import { useEffect, useState, useCallback } from 'react';

function HexagonBackground() {
  const [hexagons, setHexagons] = useState<JSX.Element[]>([]);
  const hexWidth = 100;
  const hexHeight = 110;
  const hexSpacing = 2;

  const createHexagons = useCallback(() => {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = window.innerHeight;
    const hexPerRow = Math.ceil(screenWidth / (hexWidth + hexSpacing));
    const rows = Math.ceil(screenHeight / (hexHeight * 0.75 + hexSpacing));
    const newHexagons: JSX.Element[] = [];

    for (let row = 0; row < rows; row++) {
      const hexagonRow: JSX.Element[] = [];
      for (let col = 0; col < hexPerRow; col++) {
        hexagonRow.push(<div className="item-hexagon" key={`hex-${row}-${col}`}></div>);
      }
      newHexagons.push(
        <div className="hexagon-row" key={`row-${row}`}>
          {hexagonRow}
        </div>
      );
    }

    setHexagons(newHexagons);
  }, []);

  useEffect(() => {
    createHexagons();

    const handleResize = () => {
      createHexagons();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createHexagons]);

  return (
    <div className="hexagon-container">
      {hexagons}
    </div>
  );
}

export default HexagonBackground;
