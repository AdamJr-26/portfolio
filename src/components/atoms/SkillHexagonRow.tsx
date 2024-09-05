import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';

interface Skill {
  row: number;
  col: number;
  icon: React.ReactNode;
}

interface SkillHexagonRowProps {
  skills: Skill[];
  setActivePolygon: React.Dispatch<React.SetStateAction<Skill | null>>;
  activePolygon: Skill | null;
}


function SkillHexagonRow({ skills, setActivePolygon, activePolygon }: SkillHexagonRowProps) {
  useEffect(() => {
    const elements = Array.from(document.getElementsByClassName('hexagon-item')) as HTMLElement[];
    VanillaTilt.init(elements, {
      max: 25,
      speed: 300,
      scale: 1.1,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      glare: false,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, []);

  return (
    <div className='flex flex-row items-center justify-center gap-[8px] my-[-24px]'>
      {skills.map((item, key) => (
        <div
          onClick={() => setActivePolygon(item)}
          key={key}
          className={`${activePolygon &&
              (item.col === activePolygon.col && item.row === activePolygon.row)
              ? 'hexagon-item-active'
              : ''
            } cursor-pointer hexagon-item flex items-center justify-center min-w-[100px] min-h-[115px]`}
        >
          <span className='hexagon-icon z-10'>{item.icon}</span>
        </div>
      ))}
    </div>

  )
}

export default SkillHexagonRow
