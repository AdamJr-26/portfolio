import  { useEffect , useState} from 'react'
import { SliderWrapper } from './index';
import { SliderNextPrev } from '../atoms';

interface ModalAchievementContentProps {
    imgsrcs: string[];
    title: string;
    technologies: string[];
    description: string;
}
function ModalAchievementContent({ imgsrcs, title, description }: ModalAchievementContentProps) {
    const { prevArrow, nextArrow } = SliderNextPrev()

    const [viewPortWidth, setViewPortWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewPortWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log('viewPortWidth', viewPortWidth)
    return (
        <div className='flex flex-col gap-[20px] h-fit w-full p-[20px] h-full'>
            <div className='flex flex-row grow-0 w-full justify-between '>
                <div className='flex flex-col  justify-between gap-[10px]'>
                    <p className='text-white text-[24px]'>{title}</p>
                    <p className='text-white text-[14px] text-gray-700 '>{description}</p>
                </div>
                <div className='min-w-[20px] min-h-[20px] text-white '></div>  {/* added button space invisible for space of the close button */}
            </div>

            <div className='flex flex-col max-w-full grow items-center justify-center '>
                
                <div className=' m-auto w-full '>
                  {
                    viewPortWidth > 1000 ?
                    (  <SliderWrapper
                        easing='ease-in'
                        arrows={true}
                        autoplay={true}
                        duration={6000}
                        infinite={true}
                        transitionDuration={400}
                        canSwipe={true}
                        indicatorSize={5}
                        cssClass=' mx-[50px] max-h-[500px] w-full m-auto  max-w-[1000px] lg:max-w-[1366px]  m-auto rounded-md  m-auto'
                        isIndicators={true}
                        prevArrow={prevArrow}
                        nextArrow={nextArrow}
                    >
                        {
                            imgsrcs?.map((img, index) => (
                                <img key={index} className='object-contain w-full h-auto' src={`https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/${img}`} alt="" />
                            ))
                        }
                    </SliderWrapper> ) : 
                    <div className='flex flex-col gap-[10px] mb-[10px]'>
                        {
                            imgsrcs?.map((img, index) => (
                                <img key={index} className='object-contain w-full h-auto' src={`https://res.cloudinary.com/dy1od3qwx/image/upload/v1720276954/${img}`} alt="" />
                            ))
                        }
                        </div>
                  }
                </div>
            </div>
        </div>
    )
}

export default ModalAchievementContent