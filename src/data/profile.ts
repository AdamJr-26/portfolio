import type { SocialLink } from './types';
import { GITHUB_PROFILE } from '../lib/github';

export const profile = {
  name: 'Adam Marcaida Jr.',
  initials: 'A.C.M.',
  roles: ['web developer.', 'frontend developer.', 'UI/UX designer.'],
  tagline:
    'I design and build web apps end to end — from Figma flows to React frontends and Node or Python backends.',
  openToWork: true,
  // TODO: add your email to enable the "Let's chat" mail buttons.
  // While empty, those buttons link to LinkedIn instead.
  email: '',
  codingSince: 2020,
  about: [
    "I'm passionate about IT and its endless opportunities to learn. I started out in 2020 writing Python scripts and desktop apps, and have since moved into full-stack web work — designing interfaces in Figma, then building them with React, Vue and Node.",
    'I care about the whole product: clear flows for the people using it, and clean, maintainable code for the people building it.',
  ],
  quote: {
    text: 'Learn different skills for a secure career.',
    author: 'my father',
  },
  beyondCode: ['Portrait artist', 'Computer technician', 'Network troubleshooting'],
  /** Shown in the scrolling band under the hero */
  disciplines: [
    'Web Development',
    'UI/UX Design',
    'Frontend Engineering',
    'Computer Technician',
    'Portrait Artist',
    'Network Troubleshooting',
  ],
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_PROFILE, icon: 'mdi:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adam-marcaida', icon: 'mdi:linkedin' },
];

const linkedIn = socials[1].href;

/** Where the "Let's chat" buttons point. */
export const contactHref = profile.email ? `mailto:${profile.email}` : linkedIn;
export const contactLabel = profile.email ? profile.email : 'Message me on LinkedIn';
