import { useEffect } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Contacts, Experiences, Footer, Projects, Skills, Landing, About } from '../organisms/index';
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
    <div className='flex gap-[0px] flex-col font-body w-full bg-dark'>
      <Landing />
      <Experiences />
      {/* <Projects /> */} 
      <Skills />
      <About />
      <Contacts />
    </div>
  )
}

export default Home
