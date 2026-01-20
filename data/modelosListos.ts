export type ModeloImage = {
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
  images: ModeloImage[];
};

export const modelosListos: ModeloListo[] = [
  {
    id: 'modelo-300',
    title: 'Modelo 300',
    dormitorios: 1,
    label: '1 dormitorio',
    bullets: ['Espacios integrados', 'Expansión exterior', 'Pensado para 1-2 personas'],
    images: [
      {
        src: '/images/proyectos/planta_1_dor.png',
        alt: 'Modelo 300 – planta 1 dormitorio',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/proyecto-externo-30.jpg',
        alt: 'Modelo 300 – vista exterior principal',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-externo-30_frente.jpg',
        alt: 'Modelo 300 – vista exterior frente',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-externo-30_frente_izq.jpg',
        alt: 'Modelo 300 – vista exterior frente izquierda',
        type: 'render',
      },
    ],
  },
  {
    id: 'modelo-550',
    title: 'Modelo 550',
    dormitorios: 2,
    label: '2 dormitorios',
    bullets: ['Convivencia flexible', 'Expansión al jardín', 'Pensado para 3-4 personas'],
    images: [
      {
        src: '/images/proyectos/planta_2_dor_1.png',
        alt: 'Modelo 550 – planta 2 dormitorios',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/milzoe-01.jpeg',
        alt: 'Modelo 550 – render exterior principal',
        type: 'render',
      },
      {
        src: '/images/proyectos/milzoe-03.jpeg',
        alt: 'Modelo 550 – render exterior alternativo',
        type: 'render',
      },
      {
        src: '/images/proyectos/diseno-5.jpeg',
        alt: 'Modelo 550 – render interior',
        type: 'render',
      },
    ],
  },
  {
    id: 'modelo-725',
    title: 'Modelo 725',
    dormitorios: 3,
    label: '3 dormitorios',
    bullets: ['Áreas sociales amplias', 'Salida al exterior', 'Pensado para 4-6 personas'],
    images: [
      {
        src: '/images/proyectos/planta_3_dor.png',
        alt: 'Modelo 725 – planta 3 dormitorios',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/proyecto-externo-72.jpg',
        alt: 'Modelo 725 – vista exterior principal',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-interior-72.jpg',
        alt: 'Modelo 725 – vista interior',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-interior-comedor-72.png',
        alt: 'Modelo 725 – comedor integrado',
        type: 'render',
      },
    ],
  },
];
