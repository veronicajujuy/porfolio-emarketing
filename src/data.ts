/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MarketerProfile, BrandBrief, CampaignCopy } from './types';

export const marketerProfile: MarketerProfile = {
  name: 'Verónica',
  title: 'Especialista en Marketing Digital & Copywriting',
  location: 'San Salvador de Jujuy, Argentina',
  bio: 'Ayudo a marcas de alimentos, emprendimientos gastronómicos y negocios locales en el NOA a contar su historia sin poses corporativas. Creo estrategias digitales honestas que generan confianza, alivio y conversiones reales, conectando con el ritmo cotidiano de las personas.',
  skills: [
    'Estrategia Digital',
    'Branding con Propósito',
    'Copywriting Empático',
    'Gestión de Redes Sociales',
    'Pauta en Meta (Instagram & Facebook)',
    'Planificación de Meal Preps Gastronómicos'
  ],
  metrics: [
    {
      label: 'Negocios Impulsados',
      value: '+15',
      description: 'Emprendimientos en Jujuy y Salta que encontraron su voz digital'
    },
    {
      label: 'ROAS Promedio Meta Ads',
      value: '3.8x',
      description: 'Retorno de inversión en campañas de mensajería y conversión'
    },
    {
      label: 'Alcance Local Segmentado',
      value: '150K+',
      description: 'Impresiones mensuales dirigidas a audiencias de alta conversión'
    },
    {
      label: 'Estilo de Copywriting',
      value: '100% Humano',
      description: 'Cero clichés de fitness extremo, cero promesas milagrosas'
    }
  ]
};

export const raizBrief: BrandBrief = {
  name: 'Raíz',
  tagline: 'Comida real, semana organizada',
  channels: ['Instagram', 'Facebook'],
  rubro: 'Meal prep y viandas caseras',
  location: 'Jujuy, Argentina',
  valueProposition: 'Comidas caseras listas para consumir que ayudan a resolver la alimentación de la semana de personas con poco tiempo para cocinar. Raíz permite comer rico y de forma práctica, sin dedicar horas a planificar, comprar o cocinar.',
  targetAudience: {
    description: 'Profesionales y personas con jornadas laborales exigentes en Jujuy que valoran comer bien pero no disponen de tiempo para cocinar todos los días.',
    details: [
      'Hombres y mujeres de 25 a 45 años.',
      'Profesionales independientes, empleados del sector corporativo, judicial, salud y comercial con horarios ajustados.',
      'Personas cansadas del delivery rápido de baja calidad y de la culpa por comer mal.',
      'Buscan practicidad extrema: abrir la heladera, calentar y disfrutar de un sabor casero real.'
    ]
  },
  communicationTone: {
    voice: 'Cercano, honesto y cotidiano',
    description: 'Conversacional, humano y sin exageraciones publicitarias. Habla como una persona real, transmitiendo tranquilidad, confianza y alivio frente al problema de no tener tiempo para cocinar.',
    dos: [
      'Enfocarse en el alivio del tiempo libre recuperado.',
      'Resaltar el sabor de la comida casera y la calidad de los ingredientes.',
      'Mantener un lenguaje claro, fresco y amigable, con modismos locales sutiles del NOA.',
      'Mostrar empatía frente a la rutina exigente.'
    ],
    donts: [
      'No usar jerga fitness de conteo de calorías o pérdida de grasa.',
      'No usar discursos de dietas restrictivas o desintoxicaciones.',
      'No sonar como una multinacional corporativa o industrial.',
      'No prometer transformaciones milagrosas de vida.',
      'No exagerar las descripciones con adjetivos sobre-publicitarios.'
    ]
  }
};

export const raizCampaignCopies: CampaignCopy[] = [
  {
    id: 'copy-1',
    title: 'Post de Presentación (Institucional)',
    copyText: 'En Raíz creemos que comer bien no debería ser una preocupación más en tu día.\n\nPreparamos comidas caseras listas para acompañarte durante la semana, para que tengas más tiempo para vos y menos tiempo pensando qué cocinar.\n\nComida rica, práctica y lista cuando la necesitás.',
    justification: 'Comunica los principales atributos de Raíz: practicidad, comida casera y ahorro de tiempo. Habla desde una necesidad real del público objetivo y utiliza un tono cercano y humano, sin exageraciones ni promesas poco realistas. Además, pone el foco en el beneficio emocional de tener las comidas resueltas.',
    alternativeSuggestion: 'Podría incorporar una llamada a la acción si el objetivo fuera generar consultas o ventas directas. Para una pieza institucional o de presentación funciona correctamente porque prioriza la construcción de marca.',
    channel: 'Ambos',
    likesCount: 142,
    commentsCount: 28,
    sharesCount: 19
  },
  {
    id: 'copy-2',
    title: 'Post de Producto (Orientado a Rutina)',
    copyText: '¿Semana ocupada?\n\nNosotros nos ocupamos de la comida.\n\nElegí tus viandas, organizá tu semana y encontrá en la heladera una comida lista cuando más la necesitás.\n\nPorque comer bien también puede ser simple.',
    justification: 'El copy refleja la propuesta de valor de Raíz como una ayuda concreta para personas con poco tiempo. Destaca la organización semanal, la practicidad y la tranquilidad de tener la comida lista, conceptos que aparecen de forma consistente en la identidad de la marca.',
    alternativeSuggestion: 'Podría sumarse información específica sobre el servicio, como modalidades de pedido o variedad de menús, si la pieza estuviera orientada a conversión. Como mensaje de awareness, mantiene claridad y simplicidad.',
    channel: 'Instagram',
    likesCount: 215,
    commentsCount: 43,
    sharesCount: 37
  }
];

export const imageAssets = {
  cover: '/src/assets/images/raiz_brand_cover_1782999167651.jpg',
  profile: '/src/assets/images/veronica_profile_new_1783019107024.jpg',
  socialTile: '/src/assets/images/raiz_social_tile_1782999193330.jpg'
};
