import type { Skill } from './types';
import { repo } from '../lib/github';

/**
 * Rows of the skill honeycomb, top to bottom. Row lengths alternate so the
 * hexagons interlock (1 · 4 · 3 · 4 · 1).
 */
export const skillRows: Skill[][] = [
  [
    {
      name: 'Tailwind CSS',
      icon: 'devicon:tailwindcss',
      category: 'Styling',
      level: 55,
      experience: '1+ year',
      repos: [{ label: 'Neptune ordering app', url: repo('ordering-web-app') }],
    },
  ],
  [
    {
      name: 'Sass',
      icon: 'devicon:sass',
      category: 'Styling',
      level: 50,
      experience: 'Less than 1 year',
      repos: [
        { label: 'Neptune admin dashboard', url: repo('WaterRefillingStationSystem_Admin_FrontEnd') },
        { label: 'Artmats', url: repo('artmats') },
      ],
    },
    {
      name: 'Git',
      icon: 'devicon:git',
      category: 'Tooling',
      level: 80,
      experience: '4+ years',
      repos: [],
    },
    {
      name: 'TypeScript',
      icon: 'devicon:typescript',
      category: 'Language',
      level: 40,
      experience: 'Less than 1 year',
      repos: [],
    },
    {
      name: 'Figma',
      icon: 'devicon:figma',
      category: 'Design',
      level: 80,
      experience: '2+ years',
      repos: [],
    },
  ],
  [
    {
      name: 'React',
      icon: 'logos:react',
      category: 'Frontend',
      level: 75,
      experience: '2+ years',
      repos: [
        { label: 'Neptune admin dashboard', url: repo('WaterRefillingStationSystem_Admin_FrontEnd') },
        { label: 'Artmats', url: repo('artmats') },
        { label: 'React-Redux calculator', url: repo('basic-calculator-react-redux') },
      ],
    },
    {
      name: 'JavaScript',
      icon: 'logos:javascript',
      category: 'Language',
      level: 80,
      experience: '3+ years',
      repos: [{ label: 'Neptune API', url: repo('WaterRefillingStationSystem_Backend') }],
    },
    {
      name: 'MySQL',
      icon: 'logos:mysql',
      category: 'Database',
      level: 60,
      experience: '1+ year',
      repos: [{ label: 'MySQL master–slave on Docker', url: repo('docker-mysql-master-slave') }],
    },
  ],
  [
    {
      name: 'Express.js',
      icon: 'devicon:express',
      category: 'Backend',
      level: 60,
      experience: '2+ years',
      repos: [{ label: 'Neptune API', url: repo('WaterRefillingStationSystem_Backend') }],
    },
    {
      name: 'Python',
      icon: 'devicon:python',
      category: 'Language',
      level: 60,
      experience: '3+ years',
      repos: [
        { label: 'Face recognition', url: repo('computer-vision-face_recognition') },
        { label: 'AV Player', url: repo('Adam-22-26-AV-PLAYER_vlc_pqt5_pafy_selenium') },
      ],
    },
    {
      name: 'React Native',
      icon: 'tabler:brand-react-native',
      category: 'Mobile',
      level: 45,
      experience: '1+ year',
      repos: [{ label: 'Neptune rider app', url: repo('WRS_DeliveryApp_Mobile') }],
    },
    {
      name: 'MongoDB',
      icon: 'devicon:mongodb',
      category: 'Database',
      level: 60,
      experience: '1+ year',
      repos: [
        { label: 'Neptune API', url: repo('WaterRefillingStationSystem_Backend') },
        { label: 'CMI scheduling system', url: repo('cmi-scheduling-system') },
      ],
    },
  ],
  [
    {
      name: 'Vue.js',
      icon: 'devicon:vuejs',
      category: 'Frontend',
      level: 35,
      experience: 'Less than 1 year',
      repos: [{ label: 'Lying-in clinic system', url: repo('Lying-in--MRS') }],
    },
  ],
];

export const allSkills = skillRows.flat();
