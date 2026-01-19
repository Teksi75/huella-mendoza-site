export type ModeloListoImage = {
  src: string;
  alt: string;
  type: 'floorplan' | 'render';
};

export type ModeloListo = {
  id: string;
  title: string;
  dormitorios: 1 | 2 | 3;
  label: string;
  bullets: string[];
  images: ModeloListoImage[];
};

export const modelosListos: ModeloListo[] = [
  {
    id: 'modelo-300',
    title: 'Modelo 300',
    dormitorios: 1,
    label: '1 dormitorio',
    bullets: ['Espacios integrados para una vida simple.', 'Expansión exterior para sumar aire libre.', 'Pensado para 1 a 2 personas.'],
    images: [
      {
        src: '/images/proyectos/planta_1_dor.png',
        alt: 'Planta Modelo 300, 1 dormitorio',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/proyecto-externo-30.jpg',
        alt: 'Modelo 300, vista exterior principal',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-externo-30_frente.jpg',
        alt: 'Modelo 300, vista exterior frente',
        type: 'render',
      },
    ],
  },
  {
    id: 'modelo-550',
    title: 'Modelo 550',
    dormitorios: 2,
    label: '2 dormitorios',
    bullets: ['Living y comedor conectados al exterior.', 'Dormitorios bien definidos para descanso cómodo.', 'Pensado para familias pequeñas.'],
    images: [
      {
        src: '/images/proyectos/planta-01.jpeg',
        alt: 'Planta Modelo 550, 2 dormitorios',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/milzoe-01.jpeg',
        alt: 'Modelo 550, render exterior',
        type: 'render',
      },
      {
        src: '/images/proyectos/milzoe-03.jpeg',
        alt: 'Modelo 550, render exterior alternativo',
        type: 'render',
      },
      {
        src: '/images/proyectos/diseno-7.jpeg',
        alt: 'Modelo 550, render interior',
        type: 'render',
      },
    ],
  },
  {
    id: 'modelo-725',
    title: 'Modelo 725',
    dormitorios: 3,
    label: '3 dormitorios',
    bullets: ['Áreas sociales amplias para compartir.', 'Dormitorios versátiles para familia o visitas.', 'Pensado para 4 a 5 personas.'],
    images: [
      {
        src: '/images/proyectos/planta_3_dor.png',
        alt: 'Planta Modelo 725, 3 dormitorios',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/proyecto-externo-72.jpg',
        alt: 'Modelo 725, vista exterior',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-interior-72.jpg',
        alt: 'Modelo 725, interior',
        type: 'render',
      },
    ],
  },
];
