import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import VanillaTilt, { HTMLVanillaTiltElement } from 'vanilla-tilt';
import type { Skill } from '../../data/types';

interface SkillHexagonRowProps {
  skills: Skill[];
  activeSkill: Skill;
  onSelect: (skill: Skill) => void;
}

function SkillHexagonRow({ skills, activeSkill, onSelect }: SkillHexagonRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Tilt only this row's hexagons, and tear the effect down on unmount.
  useEffect(() => {
    const row = rowRef.current;
    if (!row || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hexagons = Array.from(row.querySelectorAll<HTMLVanillaTiltElement>('.hex'));
    VanillaTilt.init(hexagons, {
      max: 25,
      speed: 300,
      scale: 1.1,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      glare: false,
      gyroscope: false,
    });
    return () => hexagons.forEach((hexagon) => hexagon.vanillaTilt?.destroy());
  }, []);

  return (
    <div ref={rowRef} className='hex-row'>
      {skills.map((skill) => (
        <button
          key={skill.name}
          type='button'
          onClick={() => onSelect(skill)}
          aria-pressed={skill.name === activeSkill.name}
          aria-label={skill.name}
          title={skill.name}
          className='hex'
        >
          <Icon icon={skill.icon} className='relative z-10 text-[28px] text-white sm:text-[34px]' aria-hidden='true' />
        </button>
      ))}
    </div>
  );
}

export default SkillHexagonRow;
