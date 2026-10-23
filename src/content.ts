// ============================================================
//  CONTENIDO EDITABLE DE LA LANDING
//  Cambia aquí los textos, precios y datos de contacto.
//  Todo lo que diga "COMPLETAR: ..." se muestra en pantalla como
//  un recuadro dorado para que sepas qué falta por rellenar.
// ============================================================

export const negocio = {
  nombre: 'Armonía',
  por: 'por Isel',
  lema: 'Masajes relajantes',
  descripcion:
    'Un espacio íntimo para bajar el ritmo, soltar la tensión del cuerpo y volver a respirar con calma.',

  // --- Contacto (rellena lo que falte) ---
  ciudad: 'COMPLETAR: ciudad y zona donde atiende',
  direccion: 'COMPLETAR: dirección del espacio (o "a domicilio")',
  telefono: 'COMPLETAR: teléfono de contacto',
  email: 'COMPLETAR: correo de contacto',
  instagram: 'COMPLETAR: usuario de Instagram',
  horario: 'COMPLETAR: días y horarios de atención',

  // WhatsApp: solo dígitos, con código de país y sin espacios.
  // Ejemplo: '5215512345678'. Si lo dejas vacío se muestra un marcador.
  whatsappNumero: '',
  whatsappMensaje: '¡Hola Isel! Me gustaría reservar un masaje relajante.',

  // ------------------------------------------------------------
  //  FOTOS
  // ------------------------------------------------------------
  //  IMPORTANTE: las fotos que se ven ahora son de banco de
  //  imágenes (Unsplash) y son TEMPORALES. Están puestas solo
  //  para que la página se vea terminada. Cuando tengas las
  //  fotos reales de Isel y del espacio, sustitúyelas así:
  //    1) sube tus imágenes a la carpeta public/
  //    2) escribe aquí la ruta, por ejemplo '/espacio.jpg'
  //  Si dejas una cadena vacía (''), vuelve el recuadro de aviso.
  // ------------------------------------------------------------
  fotoHero:
    'https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?auto=format&fit=crop&w=1200&q=80',
  fotoIsel:
    'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?auto=format&fit=crop&w=1000&q=80',
  fotoBanda:
    'https://images.unsplash.com/photo-1745327883290-1e9c6447b938?auto=format&fit=crop&w=1800&q=80',
  galeria: [
    {
      src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80',
      alt: 'Masaje con piedras calientes',
    },
    {
      src: 'https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=900&q=80',
      alt: 'Aceites, toallas y velas encendidas',
    },
    {
      src: 'https://images.unsplash.com/photo-1772378452022-94ee7971fe80?auto=format&fit=crop&w=900&q=80',
      alt: 'Sala de masajes preparada para una sesión',
    },
  ],
  // Nota visible solo en el código: recuerda que estas fotos no son de Isel.
  creditosFotos:
    'Fotos temporales de Unsplash (banco de imágenes). Sustituir por las fotos reales de Isel y del espacio.',
}

export const enlaces = [
  { texto: 'Servicios', href: '#servicios' },
  { texto: 'Beneficios', href: '#beneficios' },
  { texto: 'Sobre Isel', href: '#sobre' },
  { texto: 'Preguntas', href: '#preguntas' },
]

export const hero = {
  etiqueta: 'Masajes relajantes · Cuerpo y mente',
  titulo: 'Regálate una hora de calma',
  tituloAcento: 'y vuelve a sentirte en armonía',
  texto:
    'Masajes relajantes con aceites tibios, luz suave y música pensada para que el cuerpo se suelte solo. Sin prisas, sin ruido, a tu ritmo.',
  botonPrincipal: 'Reservar mi masaje',
  botonSecundario: 'Ver servicios',
  sellos: ['Aceites tibios', 'Ambiente silencioso', 'Atención personalizada'],
}

export type Servicio = {
  nombre: string
  duracion: string
  precio: string
  descripcion: string
  destacado?: boolean
}

export const servicios: Servicio[] = [
  {
    nombre: 'Masaje relajante',
    duracion: '60 min',
    precio: '',
    descripcion:
      'El clásico para desconectar. Movimientos lentos y continuos con aceite tibio que aflojan la tensión acumulada de la semana.',
    destacado: true,
  },
  {
    nombre: 'Masaje descontracturante',
    duracion: '60 min',
    precio: '',
    descripcion:
      'Presión más firme sobre nudos y contracturas, ideal si pasas muchas horas sentada o con el cuerpo cargado.',
  },
  {
    nombre: 'Masaje con piedras calientes',
    duracion: '75 min',
    precio: '',
    descripcion:
      'Piedras volcánicas tibias que recorren la espalda y liberan la musculatura en profundidad. Calor que relaja de verdad.',
  },
  {
    nombre: 'Masaje de espalda y cuello',
    duracion: '30 min',
    precio: '',
    descripcion:
      'Sesión corta y efectiva para las zonas donde más se acumula el estrés. Perfecta para un hueco entre semana.',
  },
  {
    nombre: 'Masaje con aromaterapia',
    duracion: '60 min',
    precio: '',
    descripcion:
      'Aceites esenciales elegidos según lo que necesites: calma, energía o descanso profundo.',
  },
  {
    nombre: 'Ritual completo',
    duracion: '90 min',
    precio: '',
    descripcion:
      'Cuerpo entero, de los pies a la cabeza, con un cierre suave en el rostro. La experiencia más completa.',
  },
]

export const beneficios = [
  {
    icono: '❋',
    titulo: 'Menos estrés',
    texto: 'Baja el ritmo del cuerpo y de la cabeza. Una hora que se nota en el resto del día.',
  },
  {
    icono: '☾',
    titulo: 'Mejor descanso',
    texto: 'La relajación profunda ayuda a dormir mejor y a despertar con más energía.',
  },
  {
    icono: '≈',
    titulo: 'Menos dolor',
    texto: 'Alivia contracturas, tensión de cuello y espalda, y mejora la circulación.',
  },
  {
    icono: '✧',
    titulo: 'Un momento para ti',
    texto: 'Sin pantallas ni prisas. Solo tu cuerpo, tu respiración y el silencio.',
  },
]

// Franja ancha con foto de fondo (después de los beneficios).
export const banda = {
  etiqueta: 'El espacio',
  titulo: 'Un rincón pensado para desconectar',
  texto:
    'Luz cálida, silencio y todo preparado antes de que llegues. Aquí no hay prisa: el tiempo es tuyo.',
}

export const galeria = {
  etiqueta: 'Detalles',
  titulo: 'Así se siente Armonía',
  intro: 'Piedras calientes, aceites, velas y una sala lista para recibirte.',
}

export const sobreIsel = {
  etiqueta: 'Quién te atiende',
  titulo: 'Hola, soy Isel',
  parrafos: [
    'Doy masajes relajantes porque creo que parar también es cuidarse. Mi trabajo es sencillo: que entres con el cuerpo tenso y salgas sintiéndote ligera.',
    'Cada sesión la adapto a ti. Te pregunto cómo llegas, qué zona te molesta y cuánta presión prefieres, y a partir de ahí construyo el masaje. Nada de rutinas iguales para todo el mundo.',
    'COMPLETAR: añade aquí tu formación, años de experiencia y lo que quieras contar de ti.',
  ],
  datos: [
    { valor: 'COMPLETAR: años de experiencia', etiqueta: 'Experiencia' },
    { valor: 'COMPLETAR: formación o certificación', etiqueta: 'Formación' },
    { valor: 'COMPLETAR: idiomas', etiqueta: 'Idiomas' },
  ],
}

export const pasos = [
  {
    numero: '01',
    titulo: 'Escríbeme',
    texto: 'Cuéntame qué día te viene bien y qué tipo de masaje buscas. Te respondo lo antes posible.',
  },
  {
    numero: '02',
    titulo: 'Elegimos juntas',
    texto: 'Te propongo la sesión que mejor encaja con lo que necesitas y confirmamos la cita.',
  },
  {
    numero: '03',
    titulo: 'Solo relajarte',
    texto: 'Llega unos minutos antes, deja el móvil en silencio y disfruta. Del resto me encargo yo.',
  },
]

export const testimonios = [
  {
    texto:
      'Salí como nueva. Tenía el cuello y los hombros destrozados de trabajar sentada y por primera vez en meses dormí del tirón.',
    autor: 'COMPLETAR: nombre de la clienta',
  },
  {
    texto:
      'El espacio es precioso y se está en un silencio total. Isel te hace sentir cómoda desde el primer minuto.',
    autor: 'COMPLETAR: nombre de la clienta',
  },
  {
    texto:
      'Voy una vez al mes y es lo mejor que me he regalado. Las piedras calientes son una maravilla.',
    autor: 'COMPLETAR: nombre de la clienta',
  },
]

export const preguntas = [
  {
    pregunta: '¿Cómo pido una cita?',
    respuesta:
      'Por WhatsApp o por teléfono. Dime el día y la hora que te vienen bien y te confirmo disponibilidad.',
  },
  {
    pregunta: '¿Qué tengo que llevar?',
    respuesta:
      'Nada. Yo pongo todo: camilla, toallas, aceites y ropa cómoda para cambiarte. Solo trae ganas de desconectar.',
  },
  {
    pregunta: '¿Cuánto dura una sesión?',
    respuesta:
      'Depende del masaje: desde 30 minutos hasta 90. En la descripción de cada servicio tienes la duración.',
  },
  {
    pregunta: '¿Puedo pedir más o menos presión?',
    respuesta:
      'Claro. Dímelo en cualquier momento durante el masaje y lo ajusto. Lo importante es que estés cómoda.',
  },
]

export const ctaFinal = {
  etiqueta: 'Reserva tu momento',
  titulo: 'Tu cuerpo te lo va a agradecer',
  texto:
    'Escríbeme y buscamos el hueco que mejor te venga. Plazas limitadas cada semana para poder dedicarte el tiempo que mereces.',
  boton: 'Reservar por WhatsApp',
}

export const footer = {
  nota: 'Masajes relajantes con cita previa.',
  aviso: 'Las sesiones de masaje son un servicio de bienestar y no sustituyen tratamiento médico.',
}
