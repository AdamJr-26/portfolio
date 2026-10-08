import { About, Contacts, Experiences, Footer, Landing, Projects, Skills } from '../organisms';
import { Marquee, TopNavBar } from '../molecules';
import { profile } from '../../data/profile';

function Home() {
  return (
    <>
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-dark'
      >
        Skip to content
      </a>
      <TopNavBar />
      <main id='main'>
        <Landing />
        <Marquee items={profile.disciplines} />
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default Home;
