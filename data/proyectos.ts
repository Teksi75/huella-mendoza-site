export type Proyecto = {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  galleryImages: string[];
  description?: string;
};

export const proyectos: Proyecto[] = [
  {
    title: 'Milzoe 01',
    subtitle: 'Diseño y ejecución - exterior render',
    label: 'Diseño y ejecución · render',
    image: '/images/proyectos/milzoe-01.jpeg',
    galleryImages: ['/images/proyectos/milzoe-01.jpeg'],
  },
  {
    title: 'Modelo 725',
    subtitle: '72,5 m² · 3 dormitorios · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/proyecto-externo-72.jpg',
    galleryImages: [
      '/images/proyectos/proyecto-externo-72.jpg',
      '/images/proyectos/proyecto-interior-72.jpg',
      '/images/proyectos/planta_3_dor.png',
    ],
    description:
      'Propuesta compacta pensada para maximizar luz natural y funcionalidad familiar.',
  },
  {
    title: 'Milzoe 03',
    subtitle: 'Diseño y ejecución - exterior render',
    label: 'Diseño y ejecución · render',
    image: '/images/proyectos/milzoe-03.jpeg',
    galleryImages: ['/images/proyectos/milzoe-03.jpeg'],
  },
  {
    title: 'Diseño 04',
    subtitle: 'Propuesta arquitectónica - render',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/diseño-4.jpeg',
    galleryImages: ['/images/proyectos/diseño-4.jpeg'],
  },
  {
    title: 'Diseño 05',
    subtitle: 'Propuesta arquitectónica - render',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/diseno-5.jpeg',
    galleryImages: ['/images/proyectos/diseno-5.jpeg'],
  },
  {
    title: 'Diseño 06',
    subtitle: 'Propuesta arquitectónica - render',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/proyecto-interior-72.jpg',
    galleryImages: [
      '/images/proyectos/proyecto-interior-72.jpg',
      '/images/proyectos/proyecto-externo-72.jpg',
    ],
  },
  {
    title: 'Diseño 07',
    subtitle: 'Propuesta arquitectónica - render',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/diseno-7.jpeg',
    galleryImages: ['/images/proyectos/diseno-7.jpeg'],
  },
  {
    title: 'Diseño 08',
    subtitle: 'Propuesta arquitectónica - render',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/diseno-8.jpeg',
    galleryImages: ['/images/proyectos/diseno-8.jpeg'],
  },
  {
    title: 'Planta 01',
    subtitle: 'Detalle de planta arquitectónica',
    label: 'Detalle técnico · planta',
    image: '/images/proyectos/planta-01.jpeg',
    galleryImages: ['/images/proyectos/planta-01.jpeg'],
  },
  {
    title: 'Planta 02',
    subtitle: 'Detalle de planta arquitectónica',
    label: 'Detalle técnico · planta',
    image: '/images/proyectos/planta-02.jpeg',
    galleryImages: ['/images/proyectos/planta-02.jpeg'],
  },
];
