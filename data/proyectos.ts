export type ProyectoImage = {
  src: string;
  altKey?: string;
  type?: 'floorplan' | 'render';
};

export type Proyecto = {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  galleryImages: Array<string | ProyectoImage>;
  floorplanLabel?: '1 dormitorio' | '2 dormitorios' | '3 dormitorios';
  description?: string;
};

export const proyectos: Proyecto[] = [
  {
    title: 'Modelo 300',
    subtitle: '30 m² · 1 dormitorio · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/proyecto-externo-30.jpg',
    floorplanLabel: '1 dormitorio',
    galleryImages: [
      { src: '/images/proyectos/planta_1_dor.png', type: 'floorplan' },
      { src: '/images/proyectos/proyecto-externo-30.jpg', type: 'render' },
      {
        src: '/images/proyectos/proyecto-externo-30_frente.jpg',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-externo-30_frente_izq.jpg',
        type: 'render',
      },
    ],
  },
  {
    title: 'Modelo 550',
    subtitle: '55 m² · 2 dormitorios · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/milzoe-01.jpeg',
    floorplanLabel: '2 dormitorios',
    galleryImages: [
      { src: '/images/proyectos/planta-01.jpeg', type: 'floorplan' },
      { src: '/images/proyectos/planta-02.jpeg', type: 'floorplan' },
      { src: '/images/proyectos/milzoe-01.jpeg', type: 'render' },
      { src: '/images/proyectos/milzoe-03.jpeg', type: 'render' },
      { src: '/images/proyectos/diseño-4.jpeg', type: 'render' },
      { src: '/images/proyectos/diseno-5.jpeg', type: 'render' },
      { src: '/images/proyectos/diseno-7.jpeg', type: 'render' },
      { src: '/images/proyectos/diseno-8.jpeg', type: 'render' },
    ],
  },
  {
    title: 'Modelo 725',
    subtitle: '72,5 m² · 3 dormitorios · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/proyecto-externo-72.jpg',
    floorplanLabel: '3 dormitorios',
    galleryImages: [
      { src: '/images/proyectos/planta_3_dor.png', type: 'floorplan' },
      { src: '/images/proyectos/proyecto-externo-72.jpg', type: 'render' },
      { src: '/images/proyectos/proyecto-interior-72.jpg', type: 'render' },
      {
        src: '/images/proyectos/proyecto-interior-comedor-72.png',
        type: 'render',
      },
    ],
  },
];
