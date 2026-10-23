// ─────────────────────────────────────────────────────────────
//  CONTENIDO DE LA PÁGINA  ·  edita aquí los textos
//  Todo lo que está entre corchetes [ ] son datos que Isel debe completar.
// ─────────────────────────────────────────────────────────────

export type IconName =
  | 'masaje'
  | 'brillo'
  | 'gota'
  | 'hoja'
  | 'corazon'
  | 'flor'

export const negocio = {
  nombre: 'Armonía',
  nombreCompleto: 'Armonía — Salud, Bienestar y Belleza',
  lema: 'Un espacio para respirar, soltar tensiones y volver a sentirte bien.',
  facebook: 'https://www.facebook.com/ArmoniaSaludBienestarYBelleza',
}

// ── DATOS POR COMPLETAR ──────────────────────────────────────
// Isel: cambia cada texto por el dato real.
// Si dejas el marcador, la página lo muestra tal cual para que no se te pase.
export const contacto = {
  // Solo números, con código de país. Ejemplo: '50688887777'
  whatsappNumero: '',
  whatsappTexto: 'COMPLETAR: número de WhatsApp',
  direccion: 'COMPLETAR: dirección del local',
  horario: 'COMPLETAR: días y horas de atención',
  // Ruta de la foto dentro de la carpeta public/. Ejemplo: '/isel.jpg'
  fotoIsel: '',
}

export const servicios: {
  icono: IconName
  titulo: string
  descripcion: string
  detalles: string[]
}[] = [
  {
    icono: 'masaje',
    titulo: 'Masajes terapéuticos',
    descripcion:
      'Sesiones pensadas para aliviar la tensión muscular, mejorar la circulación y devolverle descanso al cuerpo.',
    detalles: ['Relajante', 'Descontracturante', 'Zonas específicas'],
  },
  {
    icono: 'brillo',
    titulo: 'Estética',
    descripcion:
      'Cuidado de la piel y tratamientos faciales y corporales para realzar tu belleza natural con manos expertas.',
    detalles: ['Limpieza facial', 'Tratamientos corporales', 'Cuidado de la piel'],
  },
  {
    icono: 'gota',
    titulo: 'Cuidado personal',
    descripcion:
      'Un momento solo para ti: rituales de belleza y bienestar que combinan descanso, detalle y dedicación.',
    detalles: ['Rituales de bienestar', 'Detalles personalizados', 'Momentos de calma'],
  },
]

export const beneficios: { icono: IconName; titulo: string; texto: string }[] = [
  {
    icono: 'hoja',
    titulo: 'Ambiente tranquilo',
    texto:
      'Un espacio cálido y silencioso, pensado para que puedas desconectarte desde que entras.',
  },
  {
    icono: 'corazon',
    titulo: 'Atención personalizada',
    texto:
      'Cada sesión se adapta a lo que tu cuerpo y tu piel necesitan ese día. Nada de rutinas iguales para todos.',
  },
  {
    icono: 'flor',
    titulo: 'Productos de calidad',
    texto:
      'Trabajamos con productos suaves y cuidadosamente elegidos para tu piel y tu bienestar.',
  },
  {
    icono: 'brillo',
    titulo: 'Experiencia y calidez',
    texto:
      'Años de práctica y un trato cercano: te acompañamos con paciencia, respeto y dedicación.',
  },
]

export const testimonios: { nombre: string; texto: string }[] = [
  {
    nombre: 'María G.',
    texto:
      'Salí del masaje como nueva. El lugar es tranquilo y la atención es muy cálida. Ya tengo mi próxima cita.',
  },
  {
    nombre: 'Ana R.',
    texto:
      'Me encantó el cuidado que le dieron a mi piel. Se nota la experiencia y el cariño en cada detalle.',
  },
  {
    nombre: 'Karla M.',
    texto:
      'Es mi momento favorito de la semana. Un espacio para respirar y volver a mí misma.',
  },
]

export const sobreIsel = {
  titulo: 'Sobre Isel',
  parrafos: [
    'Hola, soy Isel Retana. Creé Armonía con la idea de ofrecer un espacio donde el cuerpo y la mente puedan descansar de verdad.',
    'Acompaño a cada persona con calma y dedicación, escuchando lo que necesita para que cada sesión sea un momento de bienestar real. Mi meta es sencilla: que salgas de aquí sintiéndote mejor de lo que entraste.',
  ],
  firma: 'Isel Retana',
}
