import React from 'react';
import MyProjectSample from '../../assets/images/myproject.png';



interface ProjectCardProps {
  projectCardRef: React.RefObject<HTMLDivElement>;

}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectCardRef }) => {
  return (
    <div ref={projectCardRef} className='border-[1px] border-white w-fit min-w-[320px]'>
      <div>
        <div className='w-fit'>
          <img className='fit-contain w-full' src={MyProjectSample} alt="project" />
        </div>
        <div>
          <p>Hello world hello world</p>
        </div>
      </div>
      <div className='min-h-[1px] w-full bg-white'></div>
      <div>
        <p className='text-white'>Title of The Description</p>
        <p className='text-white'>The Description of the application bla bla bla</p>
        <button className='text-white'>repository</button>
      </div>
    </div>
  );
};

export default ProjectCard;
