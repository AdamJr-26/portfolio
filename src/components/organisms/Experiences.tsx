import { Container, DotsBackground, SectionHeading } from '../atoms';
import { ExperienceCard } from '../molecules';
import { experiences } from '../../data/experience';
import { sectionIndex } from '../../data/navigation';

function Experiences() {
  return (
    <section id='experiences' className='relative py-24 md:py-32'>
      <DotsBackground className='right-0 top-28 hidden xl:block' />
      <Container>
        <SectionHeading
          index={sectionIndex('experiences')}
          title='experience'
          kicker="Where I've worked and what I shipped there — open a card to browse the screens."
        />
        <ol>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Experiences;
