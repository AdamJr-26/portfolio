import { ExperienceCard, } from '../molecules/index';
import { DotsBackground } from '../atoms/index';

function Experiences() {

  // API
  // https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/
  const jobExperiences = [
    {
      companyName: 'Alfamart Trading Philippines Inc.',
      jobTitle: 'Information Technology Assistant',
      dates: '09/2023 - 03/2024',
      responsibilities: 'Utilized my knowledge in UI/UX design to help the team deliver the most effective solution for the client, implementing best practices to optimize the application developed with Python, React, and Laravel.',
      achievements: [
        {
          imgsrcs: [
            'my-portoflio/businessdev/xvdjqdqgxuxqss14pvhe',
            'my-portoflio/businessdev/erjiwoceqkvltqr1zpwo',
            'my-portoflio/businessdev/inbifhtqlqgx9kxx7fpk',
            'my-portoflio/businessdev/aum9hj16gdser5qxws3b',
            'my-portoflio/businessdev/xl7yifmdrrzuxjnjk7h8',
            'my-portoflio/businessdev/q55wt7zllzwjds7nlcmq',
            'my-portoflio/businessdev/nvwjsl9qocyxhbhnc0yp',
          ],
          title: 'Business Development Application',
          technologies: ['Figma'],
          description: 'Digitizing and consolidating business processes, from surveying to opening the store.'
        },
        {
          imgsrcs: [
            'my-portoflio/myhelp/meliumsnt79b9059sd3s',
            'my-portoflio/myhelp/smx89zplnfn9wrb1br6g',
            'my-portoflio/myhelp/rnry3cm0rgi9y1kn2btn',
            'my-portoflio/myhelp/x3x8cqflg1r4zjxbvwuy',
          ],
          title: 'MyHelp - Helpdesk Enhancement',
          technologies: ['Figma'],
          description: 'To provide support, get assistance from different departments.'
        },
        {
          imgsrcs: [
            'my-portoflio/chatbot-webchatbot/ylkizbdp1c6uwamb4g3m',
            'my-portoflio/chatbot-webchatbot/y70dcdk5rspf75rp990d',

          ],
          title: 'Goole Chat Bot - Alfie',
          technologies: ['Python, Flask, React'],
          description: 'A knowledge base chatbot to provide quick assistance with concerns'
        },
      ]
    },
    {
      companyName: 'Top Bliss',
      jobTitle: 'Frontend Web Developer',
      dates: '06/2022 - 07/2022',
      responsibilities: 'At Top Bliss, I served as a Frontend Web Developer, where I collaborated on the development of an attendance monitoring system and collaborated with UI/UX designers and backend developers to ensure its success. My proficiency in React, JavaScript, HTML, CSS, and other technologies aligns well with the requirements of the role.',
      achievements: [
        {
          imgsrcs: [
            'my-portoflio/hr-services/amsbx5iwitpiyvv1obsr',
            'my-portoflio/hr-services/t1ifg1uw2mrcp3xy8n46',
            'my-portoflio/hr-services/bsuktnkevmh715wyh6np',
            'my-portoflio/hr-services/vv23cjumjleih40ehnm5',
            'my-portoflio/hr-services/g4dbljtnudx2mdgo2bnq',
            'my-portoflio/hr-services/yhmnm3yiohspiryoqsj8',
            'my-portoflio/hr-services/tpg4rnq0u34pv4xrocmp',
            'my-portoflio/hr-services/l63mmtltuvcozcs7igq2'
          ],
          title: 'HR Services',
          technologies: ['PostgreSQL, VueJS, ExpressJS'],
          description: 'Leave - Attendance Tracker'
        }
      ]
    },
  ]
  return (
    <section id='experiences' className='flex flex-col relative overflow-visible min-h-dvh max-h-fit'>
      <div className='absolute left-0 top-[50%] -translate-y-[50%] hidden 2xl:flex'>
        <DotsBackground />
      </div>
      <div className='absolute right-0 -top-[100px]  hidden xl:flex  border-l-[1px] border-t-[1px] border-b-[1px] border-white min-h-[100px] min-w-[150px]'>
      </div>
      <div className=' max-w-[1366px] w-full flex flex-col gap-[20px] m-auto p-[10px] lg:px-[20px]'>
        <div className='h-fit flex items-center gap-[20px] '>
          <p className='font-medium text-[24px] md:text-[28px] lg:text-[32px]'>
            <span className='text-primary'>#</span>
            <span className='text-white'>experiences</span>
          </p>
          <div className='cracking-bg-for-section-title min-h-[1px] xl:min-h-[2px]'></div>
        </div>
        {/* max-w-[1366px] w-full flex flex-col items-center justify-between relative z-10 p-[10px] lg:px-[20px] gap-[20px] */}
        <div className='flex flex-col gap-[30px] sm:px-[20px]  '>
          {
            jobExperiences?.map((experience, i): any => (
              <ExperienceCard key={i} experience={experience} />
            ))
          }
        </div>
      </div>
    </section >
  )
}

export default Experiences
