import { useEffect } from 'react'
import {  useLocation } from 'react-router-dom';
import {  Experiences,Skills, Landing,Footer } from '../organisms/index';
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='flex gap-[0px] gap-[30px] flex-col font-body w-full bg-dark'>
      <Landing />
      <Experiences />
      {/* <Projects /> */} 
      <Skills />
      <Footer />
      {/* <About /> */}
      {/* <Contacts /> */}
    </div>
  )
}

export default Home
