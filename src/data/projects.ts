import type { FeaturedProject, Project } from './types';
import { repo } from '../lib/github';

export const featuredProject: FeaturedProject = {
  title: 'Neptune — Water Refilling Station Management System',
  description:
    'An end-to-end platform for running a water refilling station: customers order online, riders handle deliveries from a mobile app, and the owner manages everything from a real-time dashboard.',
  highlights: [
    'Real-time updates between the dashboard, riders and API over Socket.IO',
    'Maps for orders and deliveries with Leaflet',
    'Auth with Passport (local, JWT and Google OAuth)',
    'Sales and operations charts with Chart.js',
  ],
  clients: [
    { name: 'Ordering web app', stack: 'React · Leaflet', url: repo('ordering-web-app') },
    { name: 'Rider delivery app', stack: 'React Native · Expo', url: repo('WRS_DeliveryApp_Mobile') },
    { name: 'Admin dashboard', stack: 'React · Redux · Chart.js', url: repo('WaterRefillingStationSystem_Admin_FrontEnd') },
  ],
  server: {
    name: 'REST + real-time API',
    stack: 'Express · MongoDB · Socket.IO',
    url: repo('WaterRefillingStationSystem_Backend'),
  },
};

export const projects: Project[] = [
  {
    title: 'Lying-in Clinic System',
    description: 'Full-stack system for a lying-in clinic, with a Vue client and a Node server backed by MongoDB.',
    tags: ['Vue', 'Node.js', 'MongoDB', 'Tailwind'],
    year: 2022,
    url: repo('Lying-in--MRS'),
  },
  {
    title: 'Face Recognition',
    description: 'A practical application of computer vision: detecting faces in images and recognizing who they are.',
    tags: ['Python', 'Computer Vision'],
    year: 2023,
    url: repo('computer-vision-face_recognition'),
  },
  {
    title: 'CMI Scheduling System',
    description: 'A team-built scheduling system for CMI, written in JavaScript on top of MongoDB.',
    tags: ['JavaScript', 'MongoDB'],
    year: 2023,
    url: repo('cmi-scheduling-system'),
  },
  {
    title: 'MySQL Master–Slave on Docker',
    description: 'Scripts to spin up MySQL master–slave replication with Docker containers.',
    tags: ['Docker', 'MySQL', 'Shell'],
    year: 2023,
    url: repo('docker-mysql-master-slave'),
  },
  {
    title: 'AV Player',
    description: 'A desktop audio/video player built with PyQt5 and VLC, able to stream online media.',
    tags: ['Python', 'PyQt5', 'VLC', 'Selenium'],
    year: 2020,
    url: repo('Adam-22-26-AV-PLAYER_vlc_pqt5_pafy_selenium'),
  },
  {
    title: 'COVID-19 Cases PH',
    description: 'A desktop GUI showing positive, PUI and PUM COVID-19 cases in the Philippines.',
    tags: ['Python', 'GUI'],
    year: 2020,
    url: repo('CovidCases_PH'),
  },
];
