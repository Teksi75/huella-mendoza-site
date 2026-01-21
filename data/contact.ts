export const WHATSAPP_NUMBER = '5492615010488';

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  base: 'Hola, quiero info sobre HUELLA Base y opciones de terminación.',
  baseOpciones: 'Hola, quiero conocer opciones de configuración para HUELLA Base.',
  basePresupuesto: 'Hola, quisiera pedir un presupuesto para HUELLA Base.',
  diseno: 'Hola, estoy evaluando un proyecto arquitectónico y quisiera orientación.',
  refugios: 'Hola, me interesa conocer HUELLA Refugios y disponibilidad.',
  refugiosReserva: 'Hola, quiero coordinar la reserva de HUELLA Refugios.',
  proyectos: 'Hola, quiero consultar por proyectos y alternativas según mi necesidad.',
  contacto: 'Hola, quisiera hacer una consulta sobre HUELLA.',
  contactoDirecto: 'Hola, te escribo al número directo de HUELLA.',
  home: 'Hola, quisiera conocer más sobre HUELLA y sus opciones.',
};
