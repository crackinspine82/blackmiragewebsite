export interface VideoItem {
  id: string;
  src: string;
  clientName: string;
  serviceCategory: string;
}

export const videoItems: VideoItem[] = [
  {
    id: '1',
    src: '/videos/project-a.mp4',
    clientName: 'Castrol',
    serviceCategory: 'Digital Marketing'
  },
  {
    id: '2',
    src: '/videos/project-b.mp4',
    clientName: 'Gulf Oil', 
    serviceCategory: 'Brand Strategy'
  },
  {
    id: '3',
    src: '/videos/project-c.mp4',
    clientName: 'Johnson & Johnson',
    serviceCategory: 'Content Creation'
  },
  {
    id: '4',
    src: '/videos/project-d.mp4',
    clientName: 'Drivol',
    serviceCategory: 'Digital Marketing'
  },
  {
    id: '6',
    src: '/videos/project-f.mp4',
    clientName: 'EC',
    serviceCategory: 'Content Creation'
  },
  {
    id: '8',
    src: '/videos/project-h.mp4',
    clientName: 'GoalSeek',
    serviceCategory: 'Brand Strategy'
  },
  {
    id: '9',
    src: '/videos/project-i.mp4',
    clientName: 'Paramatix',
    serviceCategory: 'Content Creation'
  }
];
