import { Icon } from '@iconify/react';
import { Container, InViewWrapper, SectionHeading } from '../atoms';
import { FeaturedProject, ProjectCard } from '../molecules';
import { featuredProject, projects } from '../../data/projects';
import { sectionIndex } from '../../data/navigation';
import { GITHUB_PROFILE } from '../../lib/github';

function Projects() {
  return (
    <section id='projects' className='relative py-24 md:py-32'>
      <Container>
        <SectionHeading
          index={sectionIndex('projects')}
          title='projects'
          kicker="Things I've built on my own and with teams, from full-stack systems to desktop tools."
        />

        <InViewWrapper>
          <FeaturedProject project={featuredProject} />
        </InViewWrapper>

        <ul className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, i) => (
            <li key={project.url}>
              <InViewWrapper delay={(i % 3) * 100} className='h-full'>
                <ProjectCard project={project} />
              </InViewWrapper>
            </li>
          ))}
        </ul>

        <div className='mt-10 flex justify-center'>
          <a
            href={GITHUB_PROFILE}
            target='_blank'
            rel='noreferrer'
            className='group inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-primary'
          >
            <Icon icon='mdi:github' className='text-lg' aria-hidden='true' />
            See everything on GitHub
            <Icon icon='mdi:arrow-right' className='transition-transform group-hover:translate-x-1' aria-hidden='true' />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
