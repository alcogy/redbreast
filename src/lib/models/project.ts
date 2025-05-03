export interface Project {
  id: string;
  title: string;
  desc: string;
  phase: 'unset' | 'progress' | 'complete' | 'canceled' | 'pending';
  customer: string,
  representative: string;
}

export const sampleProjects: Project[] = [
  {
    id: '2',
    title: 'The project',
    desc: 'It is new project',
    phase: 'pending',
    customer: 'Guinness corp.',
    representative: 'Mathew Gorble',
  },
  {
    id: '3',
    title: 'Owr project',
    desc: 'This is a project',
    phase: 'progress',
    customer: 'The company',
    representative: 'Scott Liath',
  },
  {
    id: '8',
    title: '2025 GW Events',
    desc: 'In May 2025, we have to deal huge vacation.',
    phase: 'progress',
    customer: 'Guinness corp.',
    representative: 'Sara Erden',
  },
  {
    id: '19',
    title: 'Guinness',
    desc: 'Summer guinness',
    phase: 'canceled',
    customer: 'The company',
    representative: 'Don Sloat',
  },
  {
    id: '21',
    title: 'Project 21',
    desc: 'This is a 21th project.',
    phase: 'complete',
    customer: 'Guinness corp.',
    representative: 'Vun Don Greek.',
  },
  {
    id: '63',
    title: 'Opening envent',
    desc: 'the book store will open.',
    phase: 'unset',
    customer: 'Guinness corp.',
    representative: 'Lisa month',
  },
  
]