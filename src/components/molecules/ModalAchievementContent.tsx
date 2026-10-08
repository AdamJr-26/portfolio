import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Tag } from '../atoms';
import { cld } from '../../lib/cloudinary';
import type { Achievement } from '../../data/types';

interface ModalAchievementContentProps {
  achievement: Achievement;
  onClose: () => void;
}

const navButton =
  'absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-line bg-dark/80 text-2xl text-white backdrop-blur transition hover:border-primary hover:text-primary';

/**
 * Full-screen gallery for an achievement, built on the native <dialog> element
 * (focus trapping and Esc-to-close come for free). Arrow keys switch screens.
 */
function ModalAchievementContent({ achievement, onClose }: ModalAchievementContentProps) {
  const { title, description, technologies, images } = achievement;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = useCallback((step: number) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    dialogRef.current?.showModal();
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      // A click on the dialog element itself is a click on the backdrop.
      onClick={(event) => event.target === event.currentTarget && dialogRef.current?.close()}
      aria-labelledby={titleId}
      className='m-auto max-h-[calc(100dvh-2rem)] w-[min(72rem,calc(100%-2rem))] max-w-none overflow-y-auto border border-line bg-surface p-0 text-neutral-300'
    >
      <div className='flex items-start justify-between gap-6 border-b border-line p-5 md:p-6'>
        <div className='flex flex-col gap-2'>
          <h3 id={titleId} className='font-display text-xl font-semibold text-white md:text-2xl'>
            {title}
          </h3>
          <p className='text-sm text-neutral-400'>{description}</p>
          <div className='flex flex-wrap gap-1.5'>
            {technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
        <button
          type='button'
          onClick={() => dialogRef.current?.close()}
          aria-label='Close gallery'
          className='grid h-10 w-10 shrink-0 place-items-center border border-line text-xl text-white transition hover:border-primary hover:text-primary'
        >
          <Icon icon='mdi:close' aria-hidden='true' />
        </button>
      </div>

      <div className='relative grid min-h-[40dvh] place-items-center bg-dark'>
        <img
          key={index}
          src={cld(images[index], 'w_1600')}
          alt={`${title} — screen ${index + 1} of ${count}`}
          className='fade-in mx-auto max-h-[62dvh] w-full object-contain'
        />
        {count > 1 && (
          <>
            <button type='button' onClick={() => go(-1)} aria-label='Previous screen' className={`${navButton} left-3`}>
              <Icon icon='mdi:chevron-left' aria-hidden='true' />
            </button>
            <button type='button' onClick={() => go(1)} aria-label='Next screen' className={`${navButton} right-3`}>
              <Icon icon='mdi:chevron-right' aria-hidden='true' />
            </button>
          </>
        )}
        <span className='absolute bottom-3 left-1/2 -translate-x-1/2 border border-line bg-dark/80 px-2 py-0.5 font-mono text-xs text-neutral-300'>
          {index + 1} / {count}
        </span>
      </div>

      {count > 1 && (
        <ul className='no-scrollbar flex gap-2 overflow-x-auto p-4'>
          {images.map((image, i) => (
            <li key={image} className='shrink-0'>
              <button
                type='button'
                onClick={() => setIndex(i)}
                aria-label={`Show screen ${i + 1}`}
                aria-current={i === index}
                className={`block border-2 transition ${i === index ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={cld(image, 'c_fill,g_north,w_224,h_140')} alt='' loading='lazy' className='h-[70px] w-[112px] object-cover' />
              </button>
            </li>
          ))}
        </ul>
      )}
    </dialog>
  );
}

export default ModalAchievementContent;
