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
    title: 'Modelo 725',
    subtitle: '72,5 m² · 3 dormitorios · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/proyecto-externo-72.jpg',
    galleryImages: [
      '/images/proyectos/proyecto-externo-72.jpg',
      '/images/proyectos/proyecto-interior-72.jpg',
      '/images/proyectos/proyecto-interior-72.jpg',
      '/images/proyectos/planta_3_dor.png',
    ],
  },
  {
    title: 'Modelo 550',
    subtitle: '55 m² · 2 dormitorios · 1 baño',
    label: 'Propuesta arquitectónica · render',
    image: '/images/proyectos/milzoe-01.jpeg',
    galleryImages: [
      '/images/proyectos/milzoe-01.jpeg',
      '/images/proyectos/milzoe-03.jpeg',
      '/images/proyectos/diseño-4.jpeg',
      '/images/proyectos/diseno-5.jpeg',
      '/images/proyectos/diseno-7.jpeg',
      '/images/proyectos/diseno-8.jpeg',
      '/images/proyectos/planta-01.jpeg',
      '/images/proyectos/planta-02.jpeg',
    ],
  },
];
