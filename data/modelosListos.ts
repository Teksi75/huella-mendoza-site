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
    bullets: ['Espacios integrados', 'Relación directa con el exterior', 'Pensado para 1 a 2 personas'],
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
    bullets: ['Áreas sociales amplias', 'Expansión exterior para estar y comer', 'Ideal para 3 a 4 personas'],
    images: [
      {
        src: '/images/proyectos/planta-01.jpeg',
        alt: 'Planta 01, detalle arquitectónico',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/milzoe-01.jpeg',
        alt: 'Milzoe 01, render exterior',
        type: 'render',
      },
      {
        src: '/images/proyectos/milzoe-03.jpeg',
        alt: 'Milzoe 03, render exterior',
        type: 'render',
      },
      {
        src: '/images/proyectos/diseño-4.jpeg',
        alt: 'Diseño 04, render arquitectónico',
        type: 'render',
      },
    ],
  },
  {
    id: 'modelo-725',
    title: 'Modelo 725',
    dormitorios: 3,
    label: '3 dormitorios',
    bullets: ['Circulaciones claras', 'Zonas privadas bien separadas', 'Pensado para 4 a 6 personas'],
    images: [
      {
        src: '/images/proyectos/planta_3_dor.png',
        alt: 'Planta modelo 725, 3 dormitorios',
        type: 'floorplan',
      },
      {
        src: '/images/proyectos/proyecto-externo-72.jpg',
        alt: 'Proyecto externo 72, render exterior',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-interior-72.jpg',
        alt: 'Proyecto interior 72, render arquitectónico',
        type: 'render',
      },
      {
        src: '/images/proyectos/proyecto-interior-comedor-72.png',
        alt: 'Proyecto interior comedor 72, render arquitectónico',
        type: 'render',
      },
    ],
  },
];
