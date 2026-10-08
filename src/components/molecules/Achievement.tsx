import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Tag } from '../atoms';
import ModalAchievementContent from './ModalAchievementContent';
import { cld } from '../../lib/cloudinary';
import type { Achievement as AchievementData } from '../../data/types';

interface AchievementProps {
  achievement: AchievementData;
}

const CYCLE_MS = 1100;

/** Achievement card. Hovering flips through its screens; clicking opens the gallery. */
function Achievement({ achievement }: AchievementProps) {
  const { title, description, technologies, images } = achievement;
  const [open, setOpen] = useState(false);
  const [frame, setFrame] = useState(0);
  const timer = useRef<number>();

  const startCycle = () => {
    if (images.length < 2 || timer.current) return;
    timer.current = window.setInterval(() => setFrame((f) => (f + 1) % images.length), CYCLE_MS);
  };
  const stopCycle = () => {
    window.clearInterval(timer.current);
    timer.current = undefined;
    setFrame(0);
  };

  useEffect(() => () => window.clearInterval(timer.current), []);

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        onMouseEnter={startCycle}
        onMouseLeave={stopCycle}
        className='group flex h-full w-full flex-col border border-line bg-surface text-left transition duration-300 hover:-translate-y-1 hover:border-primary/50'
      >
        <span className='relative block aspect-[16/10] overflow-hidden border-b border-line bg-dim'>
          <img
            key={frame}
            src={cld(images[frame], 'c_fill,g_north,w_640,h_400')}
            alt=''
            loading='lazy'
            className='fade-in h-full w-full object-cover object-top'
          />
          <span className='absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-dark/90 to-transparent px-3 pb-2 pt-8 font-mono text-[11px] text-neutral-300'>
            <span className='flex items-center gap-1.5'>
              <Icon icon='mdi:image-multiple-outline' aria-hidden='true' />
              {images.length} {images.length === 1 ? 'screen' : 'screens'}
            </span>
            <span className='flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100'>
              view <Icon icon='mdi:arrow-top-right' aria-hidden='true' />
            </span>
          </span>
        </span>
        <span className='flex flex-1 flex-col gap-2 p-4'>
          <span className='font-display text-lg font-semibold text-white'>{title}</span>
          <span className='text-sm leading-relaxed text-neutral-400'>{description}</span>
          <span className='mt-auto flex flex-wrap gap-1.5 pt-3'>
            {technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </span>
        </span>
      </button>

      {open && <ModalAchievementContent achievement={achievement} onClose={() => setOpen(false)} />}
    </>
  );
}

export default Achievement;
