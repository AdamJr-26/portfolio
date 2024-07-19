import React, { useEffect, useRef } from 'react';
import { ProjectCard } from '../molecules/index';
import { Icon } from '@iconify/react';

const Projects: React.FC = () => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleButtonClick = (direction: number) => {
      if (cardListRef.current && projectCardRef.current) {
        const cardWidth = projectCardRef.current.offsetWidth;
        const currentScrollLeft = cardListRef.current.scrollLeft;
        const newScrollLeft = currentScrollLeft + cardWidth * direction;

        cardListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    };

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handlePrevClick = () => handleButtonClick(-1);
    const handleNextClick = () => handleButtonClick(1);

    if (prevButton) prevButton.addEventListener('click', handlePrevClick);
    if (nextButton) nextButton.addEventListener('click', handleNextClick);

    return () => {
      if (prevButton) prevButton.removeEventListener('click', handlePrevClick);
      if (nextButton) nextButton.removeEventListener('click', handleNextClick);
    };
  }, []);

  // projects' data
  const projectsData = [
    {
      image: "",
      languages: "",
      title: "",
      description: "",
      button: "",
    }
  ]

  return (
    <section id='projects' className='flex flex-col max-h-fit min-h-screen bg-dark p-[20px] max-w-[1366px]'>
      <div className='h-fit flex items-center gap-[20px]'>
        <p className='text-[24px] md:text-[28px] lg:text-[32px]'>
          <span className='text-primary'>#</span>
          <span className='text-white'>projects</span>
        </p>
        <div className='min-h-[2px] bg-primary min-w-[80px] md:min-w-[300px]'></div>
      </div>
      <div className='grow-2 bg-dim relative px-[25px] h-full w-full border-[1px] border-red-500'>
        <button
          ref={prevButtonRef}
          className='project-slider-button text-[32px] text-white bg-dim absolute top-[50%] transform -translate-y-[50%] left-[-20px] p-[5px] border-[1px] border-white bg-transparent-50'
        >
          <Icon icon="mdi:arrow-left" />
        </button>
        <div
          ref={cardListRef}
          className='w-full grid gap-[18px] overflow-x-auto no-scrollbar'
          style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}
        >
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
          <ProjectCard projectCardRef={projectCardRef} />
        </div>
        <button
          ref={nextButtonRef}
          className='project-slider-button text-[32px] text-white bg-dim absolute top-[50%] transform -translate-y-[50%] right-[-20px] p-[5px] border-[1px] border-white bg-transparent-50'
        >
          <Icon icon="mdi:arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
