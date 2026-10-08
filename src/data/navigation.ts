export const sections = [
  { id: 'about', label: 'about' },
  { id: 'experiences', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
] as const;

/** "01", "02", … for a section id */
export const sectionIndex = (id: (typeof sections)[number]['id']) =>
  String(sections.findIndex((section) => section.id === id) + 1).padStart(2, '0');
