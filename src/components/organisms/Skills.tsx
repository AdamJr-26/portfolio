import { useState } from 'react';
import { Container, DotsBackground, InViewWrapper, SectionHeading, SkillHexagonRow } from '../atoms';
import { SkillDetail } from '../molecules';
import { skillRows } from '../../data/skills';
import { sectionIndex } from '../../data/navigation';

function Skills() {
  const [activeSkill, setActiveSkill] = useState(skillRows[2][1]);

  return (
    <section id='skills' className='relative py-24 md:py-32'>
      <DotsBackground className='left-0 top-1/2 hidden xl:block' />
      <Container>
        <SectionHeading index={sectionIndex('skills')} title='skills' kicker='Pick a hexagon to see how I have used it.' />

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <InViewWrapper>
            <div className='honeycomb' role='group' aria-label='Skills'>
              {skillRows.map((row) => (
                <SkillHexagonRow key={row[0].name} skills={row} activeSkill={activeSkill} onSelect={setActiveSkill} />
              ))}
            </div>
          </InViewWrapper>

          <InViewWrapper delay={150}>
            <SkillDetail skill={activeSkill} />
          </InViewWrapper>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
