import React from 'react'
import { Icon } from '@iconify/react';
import { SkillHexagonRow, DotsBackground } from '../atoms/index';
function Skills() {

  const skills = [
    [
      {
        row: 1,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:tailwindcss" />
      }
    ],
    [
      {
        row: 2,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:sass" />
      },
      {
        row: 2,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:git" />
      },
      {
        row: 2,
        col: 3,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:typescript" />
      },
      {
        row: 2,
        col: 4,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:figma" />,
      },
    ],
    [
      {
        row: 3,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="logos:react" />
      },
      {
        row: 3,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="logos:javascript" />
      },
      {
        row: 3,
        col: 3,
        icon: <Icon className='text-[24px] w-auto' icon="logos:mysql" />
      }
    ],
    [
      {
        row: 4,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:express" />,
      },
      {
        row: 4,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:python" />
      },
      {
        row: 2,
        col: 3,
        icon: <Icon className='text-[24px] w-auto text-white' icon="tabler:brand-react-native" />
      },
      {
        row: 4,
        col: 4,
        icon: <Icon className='text-[24px] w-auto text-white' icon="devicon:mongodb" />
      },
    ],
    [
      {
        row: 5,
        col: 1,
        icon: <Icon className='text-[24px] w-auto text-white' icon="devicon:vuejs" />
      }
    ],
  ]

  return (
    <section id='skills' className='flex flex-col relative overflow-visible max-h-fit'>
      <div className='absolute right-0 top-[50%] -translate-y-[50%] hidden 2xl:flex'>
        <DotsBackground />
      </div>
      {/* <div className='absolute left-0 top-[100%] -translate-y-[50%] hidden 2xl:flex'>
        <DotsBackground />
      </div> */}
      <div className='absolute left-0 -bottom-[50px]  hidden 2xl:flex border-r-[1px] border-t-[1px] border-b-[1px] border-white min-h-[100px] min-w-[100px]'>
      </div>
      <div className='max-w-[1366px] w-full flex flex-col m-auto p-[10px] lg:px-[20px]'>

        <div className='h-fit flex items-center gap-[20px] '>
          <p className='font-medium text-[24px] md:text-[28px] lg:text-[32px]'>
            <span className='text-primary'>#</span>
            <span className='text-white'>skills</span>
          </p>
          <div className='min-h-[2px] bg-primary min-w-[80px] md:min-w-[300px]'></div>
        </div>
        {/* max-w-[1366px] w-full flex flex-col items-center justify-between relative z-10 p-[10px] lg:px-[20px] gap-[20px] */}
        <div className='flex grow relative flex-col md:flex-row md:p-[20px] justify-between items-center'>
          <div className='absolute left-0 top-[50%] -translate-y-[50%] hidden lg:flex 2xl:hidden'>
            <DotsBackground />
          </div>
          <div className='flex flex-col gap-[26px] w-full scale-75 '>
            <SkillHexagonRow skills={skills[0]} />
            <SkillHexagonRow skills={skills[1]} />
            <SkillHexagonRow skills={skills[2]} />
            <SkillHexagonRow skills={skills[3]} />
            <SkillHexagonRow skills={skills[4]} />
          </div>
          <div className='relative w-full min-h-full flex flex-col gap-[24px] justify-between '>
            <p className='z-10 text-[24px] text-white font-bold'>Expertise</p>
            {/* <div className="opacity-15 min-h-[40%] min-w-[40%] flex items-center justify-center absolute top-[50%] right-[0%] transform -translate-y-[50%]">
            <Icon className="h-full w-full " icon="logos:javascript" />
          </div> */}
            <div className='z-10 flex flex-col gap-[20px] justify-between h-full'>
              <p className='text-[16px] text-white font-bold'>JavaScript</p>
              <div className='flex gap-[20px] px-[10px]'>
                <div className='min-w-[2px] bg-gray-700 min-h-full'></div>
                <p className='text-[14px] text-white font-normal text-[13px] lg:text-[16px]'><span>&nbsp;&nbsp;&nbsp;&nbsp;</span> I love using JavaScript because it offers unparalleled versatility and efficiency in my projects. With its seamless integration across both client-side and server-side development, JavaScript allows me to create dynamic, responsive user interfaces using frameworks like ReactJS and VueJS, while also handling backend logic and APIs efficiently with NodeJS and Express. The extensive ecosystem and vibrant community support provide a wealth of libraries and tools, enhancing productivity and innovation. Additionally, the ability to work with vanilla JavaScript ensures I have a solid understanding of the language's core principles, enabling me to optimize and customize my applications effectively.</p>
              </div>
              <div className='flex gap-[10px] flex-flow'>
                <p className='text-[16px] text-white font-bold'>Duration:</p>
                <p className='text-[16px] text-white test-normal'>4 years</p>
              </div>
              <div className='flex gap-[10px] flex-flow'>
                <p className='text-[16px] text-white font-bold'>Experience:</p>
                <p className='text-[16px] text-white font-normal'>ReactJS, NodeJS, ExpressJS</p>
              </div>
              <div className='flex gap-[10px] '>
                <p className='text-white font-medium'>Projects:</p>
                <div className='flex gap-[10px] items-center underline'>
                  <span className='text-white text-[16px]'><Icon icon="mdi:source-repository" /></span>
                  <a href="#" className='text-white'>ACME</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
