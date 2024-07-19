import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';

interface SkillHexagonRowProps {
  skills: {
    row: number;
    col: number;
    icon: React.ReactNode;
  }[]
}

function SkillHexagonRow({ skills }: SkillHexagonRowProps) {
  useEffect(() => {
    const elements = Array.from(document.getElementsByClassName('hexagon-item')) as HTMLElement[];
    VanillaTilt.init(elements, {
      max: 25,
      speed: 300,
      scale: 1.1,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      glare: false,
      "max-glare": 0.2,
      gyroscope:false,
    });
  }, []);

  return (
    <div className='flex flex-row items-center justify-center gap-[8px] my-[-24px]'>
      {
        skills.map((item, key) => (
          <div key={key} style={{
            // animation:'animation 4s linear infinite',
            // clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }} className=' cursor-pointer hexagon-item flex items-center justify-center min-w-[100px] min-h-[115px]
          '>
            <span className='hexagon-icon z-10'>
              {item['icon']}
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default SkillHexagonRow
