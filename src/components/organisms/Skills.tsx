import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { SkillHexagonRow, DotsBackground, RoughRectangle, RoughPolygon } from '../atoms/index';

function Skills() {

  const skills = [
    [
      {
        row: 1,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:tailwindcss" />,
        expertise: {
          level: 55,
          projects: ['https://github.com/AdamJr-26/ordering-web-app'],
          experience: '1+ years'
        }
      }
    ],
    [
      {
        row: 2,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:sass" />,
        expertise: {
          level: 50,
          projects: ['https://github.com/AdamJr-26/payroll_system--kono-'],
          experience: 'less than 1 year'
        }
      },
      {
        row: 2,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:git" />,
        expertise: {
          level: 80,
          projects: [],
          experience: '4+ year(s)'
        }
      },
      {
        row: 2,
        col: 3,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:typescript" />,
        expertise: {
          level: 40,
          projects: [],
          experience: 'less than 1 year'
        }
      },
      {
        row: 2,
        col: 4,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:figma" />,
        expertise: {
          level: 80,
          projects: [],
          experience: '2+ year(s)'
        }
      },
    ],
    [
      {
        row: 3,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="logos:react" />,
        expertise: {
          level: 75,
          projects: ['https://github.com/AdamJr-26/WaterRefillingStationSystem_Admin_FrontEnd', 'https://github.com/AdamJr-26/webscrape-react-frontend', 'https://github.com/AdamJr-26/artmats', 'https://github.com/AdamJr-26/basic-calculator-react-redux'],
          experience: '2+ year(s)'
        }
      },
      {
        row: 3,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="logos:javascript" />,
        expertise: {
          level: 80,
          projects: ['https://github.com/AdamJr-26/WaterRefillingStationSystem_Backend', 'https://github.com/AdamJr-26/leave-attendance-tracker-hrservices'],
          experience: '3+ year(s)'
        }
      },
      {
        row: 3,
        col: 3,
        icon: <Icon className='text-[24px] w-auto' icon="logos:mysql" />,
        expertise: {
          level: 60,
          projects: ['https://github.com/AdamJr-26/docker-mysql-master-slave'],
          experience: '1+ year(s)'
        }
      }
    ],
    [
      {
        row: 4,
        col: 1,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:express" />,
        expertise: {
          level: 60,
          projects: ['https://github.com/AdamJr-26/WaterRefillingStationSystem_Backend'],
          experience: '2+ year(s)'
        }
      },
      {
        row: 4,
        col: 2,
        icon: <Icon className='text-[24px] w-auto' icon="devicon:python" />,
        expertise: {
          level: 60,
          projects: ['https://github.com/AdamJr-26/computer-vision-face_recognition', 'https://github.com/AdamJr-26/webscrape-django-backend', 'https://github.com/AdamJr-26/Adam-22-26-AV-PLAYER_vlc_pqt5_pafy_selenium'],
          experience: '3+ year(s)'
        }
      },
      {
        row: 4,
        col: 3,
        icon: <Icon className='text-[24px] w-auto text-white' icon="tabler:brand-react-native" />,
        expertise: {
          level: 45,
          projects: ['https://github.com/AdamJr-26/WRS_DeliveryApp_Mobile',],
          experience: '1+ year(s)'
        }
      },
      {
        row: 4,
        col: 4,
        icon: <Icon className='text-[24px] w-auto text-white' icon="devicon:mongodb" />,
        expertise: {
          level: 60,
          projects: ['https://github.com/AdamJr-26/cmi-scheduling-system', 'https://github.com/AdamJr-26/WaterRefillingStationSystem_Backend',],
          experience: '1+ year(s)'
        }
      },
    ],
    [
      {
        row: 5,
        col: 1,
        icon: <Icon className='text-[24px] w-auto text-white' icon="devicon:vuejs" />,
        expertise: {
          level: 35,
          projects: ['https://github.com/AdamJr-26/leave-attendance-tracker-hrservices', 'https://github.com/AdamJr-26/Lying-in--MRS'],
          experience: 'less than 1 year'
        }
      }
    ],
  ]

  const [activePolygon, setActivePolygon] = useState<any>(null)

  console.log('activePolygon', activePolygon)
  useEffect(() => {
    setActivePolygon(skills[2][1])
  }, [])

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
          {
            activePolygon &&
            (<div className='flex flex-col gap-[26px] w-full scale-75 '>
              <SkillHexagonRow activePolygon={activePolygon} setActivePolygon={setActivePolygon} skills={skills[0]} />
              <SkillHexagonRow activePolygon={activePolygon} setActivePolygon={setActivePolygon} skills={skills[1]} />
              <SkillHexagonRow activePolygon={activePolygon} setActivePolygon={setActivePolygon} skills={skills[2]} />
              <SkillHexagonRow activePolygon={activePolygon} setActivePolygon={setActivePolygon} skills={skills[3]} />
              <SkillHexagonRow activePolygon={activePolygon} setActivePolygon={setActivePolygon} skills={skills[4]} />
            </div>)
          }

          {
            activePolygon &&
            <div className='relative w-full min-h-full flex flex-col gap-[24px] justify-between '>
              <p className=' text-white font-bold text-[18px] md:text-[20] xl:text-[22px]'>JavaScript</p>
              <div className='flex flex-col gap-[10px] '>
                <p className='text-white font-bold text-[15px] md:text-[18px] xl:text-[20px]'>Level</p>
                <div className='flex flex-col gap-[3px] '>
                  <div className="p-[5px] border-[1px] border-white h-[40px] relative
                ">
                    <RoughRectangle  svgWidthPercentage={activePolygon?.expertise?.level} />
                  </div>
                  <div className='w-full flex justify-between'>
                    <p className='text-white text-[12px] md:text-[13px] xl:text-[15px]'>Entry</p>
                    <p className='text-white text-[12px] md:text-[13px] xl:text-[15px]'>Expert</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[15px] '>
                <div className='text-white flex flex-row gap-[5px] items-center'>
                  <p className='text-white font-bold text-[15px] md:text-[18px] xl:text-[20px]'>Projects</p>
                  <Icon icon="mdi:source-repository" />
                </div>
                <div className='flex flex-flow gap-[10px]'>
                  {
                    activePolygon?.expertise?.projects.map((item:any, i:number) => (
                      <RoughPolygon project={item} key={i} />
                    ))
                  }

                </div>
              </div>
              <div className='flex flex-col gap-[15px] '>
                <div className='text-white flex flex-row gap-[5px] items-center'>
                  <p className='text-white font-bold text-[15px] md:text-[18px] xl:text-[20px]'>Year of Experience</p>
                </div>
                <p className='text-white text-[12px] md:text-[13px] xl:text-[15px'>{activePolygon?.expertise?.experience}</p>
              </div>
            </div>
          }

        </div>
      </div>

    </section>
  )
}

export default Skills
