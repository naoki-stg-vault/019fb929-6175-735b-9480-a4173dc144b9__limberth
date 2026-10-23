import React, { useState } from 'react';
import './App.css';

// Types
interface Service {
  id: string;
  name: string;
  category: 'relajantes' | 'terapeuticos' | 'holisticos' | 'duo';
  duration: string;
  price: string;
  badge?: string;
  description: string;
  tags: string[];
  image: string;
  benefits: string;
}

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  initials: string;
}

interface Faq {
  question: string;
  answer: string;
}

const SERVICES: Service[] = [
  {
    id: 'ritual-armonia',
    name: 'Ritual Masaje Relajante Armonía',
    category: 'relajantes',
    duration: '75 min',
    price: '55 €',
    badge: 'Más Solicitado',
    description: 'Nuestra experiencia insignia creada por Isel. Maniobras largas, lentas y envolventes combinadas con aceite vegetal tibio de almendras y esencia botánica de lavanda francesa pura para desconectar cuerpo y mente.',
    tags: ['Aromaterapia', 'Toallas Calientes', 'Cuerpo Completo', 'Infusión Final'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    benefits: 'Calma el sistema nervioso, disuelve el estrés y promueve un sueño profundo y reparador.'
  },
  {
    id: 'espalda-cuello',
    name: 'Descontracturante Suave Espalda & Cervical',
    category: 'terapeuticos',
    duration: '50 min',
    price: '45 €',
    badge: 'Alivio Inmediato',
    description: 'Enfoque preciso en trapecios, cuello, escápulas y zona lumbar. Combina presiones graduales, calor localizado y aceite de romero y árnica para liberar nudos musculares sin dolor punzante.',
    tags: ['Tensión Cervical', 'Lumbalgia Leve', 'Presión Gradual', 'Miotensivo'],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    benefits: 'Libera la rigidez acumulada por teletrabajo, malas posturas o fatiga física diaria.'
  },
  {
    id: 'piedras-volcanicas',
    name: 'Terapia con Piedras Volcánicas Calientes',
    category: 'holisticos',
    duration: '80 min',
    price: '65 €',
    badge: 'Calor Terapéutico',
    description: 'Piedras basálticas pulidas calentadas a temperatura reconfortante colocadas estratégicamente a lo largo de la columna y articulaciones para fundir la tensión profunda.',
    tags: ['Termoterapia', 'Basalto Natural', 'Sedante Muscular', 'Alineación Zen'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
    benefits: 'Mejora la circulación periférica y descontractura mediante el flujo continuo de calor profundo.'
  },
  {
    id: 'craneofacial-podal',
    name: 'Serenidad Craneofacial & Reflexo-Relax',
    category: 'holisticos',
    duration: '60 min',
    price: '48 €',
    badge: 'Antiestrés Mental',
    description: 'Tratamiento enfocado en cuero cabelludo, sienes, mandíbula, cuello y puntos reflejos de los pies. Ideal para quienes sufren de jaquecas tensionales, bruxismo o insomnio recurrente.',
    tags: ['Bruxismo', 'Jaquecas', 'Pies y Cabeza', 'Calma Mental'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f486981df54?auto=format&fit=crop&w=800&q=80',
    benefits: 'Induce un estado meditativo inmediato y alivia la saturación cognitiva del día a día.'
  },
  {
    id: 'piernas-circulatorio',
    name: 'Drenaje Circulatorio & Piernas Ligeras',
    category: 'terapeuticos',
    duration: '50 min',
    price: '42 €',
    badge: 'Sensación Ligera',
    description: 'Técnica de bombeo suave y maniobras ascendentes con bálsamo mentolado refrescante que favorece el retorno venoso y linfático, eliminando la pesadez y retención de líquidos.',
    tags: ['Retorno Venoso', 'Efecto Frío / Calor', 'Pies y Gemelos', 'Ligereza'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    benefits: 'Alivia al instante la sensación de piernas sobrecargadas por estar mucho de pie o sentada.'
  },
  {
    id: 'experiencia-duo',
    name: 'Experiencia Armonía Dúo (Parejas o Amigas)',
    category: 'duo',
    duration: '75 min',
    price: '105 €',
    badge: 'Sesión Compartida',
    description: 'Dos camillas en un mismo espacio sereno con velas aromáticas, música ambiental relajante y dos terapeutas sincronizadas. Al finalizar se ofrece copa de cava o té aromático con fruta desecada.',
    tags: ['Sesión Doble', 'Ambiente Romántico/Relax', 'Cava o Té', 'Detalle Especial'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    benefits: 'El plan perfecto para celebrar un aniversario, cumpleaños o una tarde de desconexión mutua.'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Morales',
    service: 'Ritual Masaje Relajante Armonía',
    rating: 5,
    comment: 'Llegué con un nivel de estrés laboral altísimo y salí sintiendo que flotaba. Isel tiene una energía preciosa y unas manos que transmiten una paz infinita. El detalle de los aceites tibios y el té final es un 10.',
    initials: 'EM'
  },
  {
    id: '2',
    name: 'Carlos Benítez',
    service: 'Descontracturante Espalda & Cervical',
    rating: 5,
    comment: 'Paso 9 horas diarias frente a la pantalla y tenía el cuello como una piedra. Isel supo trabajar los puntos exactos con la presión perfecta sin causar dolor. Repito seguro cada 3 semanas.',
    initials: 'CB'
  },
  {
    id: '3',
    name: 'Lucía V. & Andrea',
    service: 'Experiencia Armonía Dúo',
    rating: 5,
    comment: 'Se lo regalé a mi madre por su cumpleaños y fue una experiencia inolvidable. La cabina huele delicioso, la música te transporta y la delicadeza con la que te atienden no se encuentra en cualquier spa.',
    initials: 'LA'
  }
];

const FAQS: Faq[] = [
  {
    question: '¿Cómo debo prepararme para mi sesión con Isel?',
    answer: 'Te recomendamos llegar unos 5 o 10 minutos antes de la hora acordada para poder cambiarte tranquilamente y charlar unos minutos con Isel sobre cómo te sientes y tus zonas de mayor molestia. Ven con ropa cómoda y déjate llevar.'
  },
  {
    question: '¿Qué tipo de aceites y productos se utilizan?',
    answer: 'Utilizamos únicamente aceites vegetales puros de primera presión en frío (como almendras dulces y jojoba) enriquecidos con aceites esenciales botánicos de grado terapéutico (lavanda, cedro, naranja dulce, romero o eucalipto). Si tienes alergias o piel muy sensible, disponemos de bases neutras hipoalergénicas.'
  },
  {
    question: '¿Puedo elegir o ajustar la presión durante el masaje?',
    answer: '¡Por supuesto! Para Isel la comunicación y tu confort son primordiales. Al inicio ajustamos la intensidad y en cualquier momento de la sesión puedes indicarle si prefieres una presión más suave, media o más profunda.'
  },
  {
    question: '¿Ofrecen servicio a domicilio o es en cabina privada?',
    answer: 'Nuestra sede principal es una cabina privada diseñada como oasis zen, completamente insonorizada, climatizada y con luz tenue. También disponemos de servicio a domicilio o villas con reserva previa para eventos especiales o comodidad absoluta.'
  },
  {
    question: '¿Cómo funcionan los bonos y tarjetas de regalo?',
    answer: 'Puedes adquirir una Tarjeta de Regalo digital o en elegante formato físico para cualquiera de nuestros tratamientos o un importe libre. Tienen una validez de 6 meses y se pueden canjear en la fecha que elija la persona homenajeada.'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'relajantes' | 'terapeuticos' | 'holisticos' | 'duo'>('todos');
  const [quizNeed, setQuizNeed] = useState<string>('estres');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: 'ritual-armonia',
    date: '',
    timeSlot: '11:00 - 13:00 (Mañana)',
    pressure: 'media',
    notes: ''
  });

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const selectedServiceObj = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  const handleSelectServiceToBook = (serviceId: string) => {
    setFormData(prev => ({ ...prev, serviceId }));
    const bookingElement = document.getElementById('reservar');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateWhatsAppLink = () => {
    const phone = '34612345678'; // Número de contacto spa
    const text = `¡Hola Isel! Me gustaría reservar una cita en Armonía Masajes Relajantes 🌿✨%0A%0A` +
      `👤 *Nombre:* ${formData.name || 'No especificado'}%0A` +
      `💆‍♀️ *Tratamiento:* ${selectedServiceObj.name} (${selectedServiceObj.duration} - ${selectedServiceObj.price})%0A` +
      `📅 *Fecha deseada:* ${formData.date || 'Por convenir'}%0A` +
      `⏰ *Franja horaria:* ${formData.timeSlot}%0A` +
      `🤲 *Presión preferida:* ${formData.pressure.toUpperCase()}%0A` +
      (formData.notes ? `📝 *Nota / Puntos de dolor:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0A¿Tendrías disponibilidad para confirmar la sesión? ¡Muchas gracias!`;
    return `https://wa.me/${phone}?text=${text}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="app-container">
      {/* Top Banner */}
      <div style={{ background: '#344C38', color: '#E8EFE8', padding: '0.45rem 1rem', fontSize: '0.82rem', textAlign: 'center', fontWeight: 500, letterSpacing: '0.04em' }}>
        🌿 <span>Primera visita: <strong>10% de descuento de bienvenida</strong> y ritual aromático de cortesía</span>
      </div>

      {/* Navigation */}
      <header className="navbar">
        <div className="nav-inner">
          <a href="#" className="brand-logo">
            <span className="brand-title">Armonía</span>
            <span className="brand-subtitle">Masajes Relajantes por Isel</span>
          </a>

          <ul className="nav-links">
            <li><a href="#tratamientos" className="nav-link">Tratamientos</a></li>
            <li><a href="#recomendador" className="nav-link">Tu Masaje Ideal</a></li>
            <li><a href="#experiencia" className="nav-link">La Experiencia</a></li>
            <li><a href="#sobre-isel" className="nav-link">Conoce a Isel</a></li>
            <li><a href="#testimonios" className="nav-link">Opiniones</a></li>
            <li><a href="#faq" className="nav-link">Preguntas</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#reservar" className="nav-cta-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Reservar Cita</span>
            </a>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir Menú"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-panel">
            <a href="#tratamientos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tratamientos</a>
            <a href="#recomendador" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Recomendador</a>
            <a href="#experiencia" className="nav-link" onClick={() => setMobileMenuOpen(false)}>La Experiencia</a>
            <a href="#sobre-isel" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Conoce a Isel</a>
            <a href="#testimonios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Opiniones</a>
            <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Preguntas Frecuentes</a>
            <a href="#reservar" className="nav-cta-btn" onClick={() => setMobileMenuOpen(false)}>Reservar Cita</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>Tu santuario personal de calma y desconexión</span>
            </div>

            <h1 className="hero-title">
              El arte de soltar tensiones y <em>reconectar contigo</em>
            </h1>

            <p className="hero-description">
              En <strong>Armonía</strong>, cada sesión es un ritual personalizado creado por Isel.
              Combinamos técnicas manuales fluidas, aceites botánicos templados y una atmósfera
              de silencio y respeto para serenar tu mente y devolverle la vitalidad a tu cuerpo.
            </p>

            <div className="hero-actions">
              <a href="#reservar" className="btn-primary">
                <span>Agendar mi momento de paz</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>

              <a href="#tratamientos" className="btn-secondary">
                <span>Ver carta de masajes</span>
              </a>
            </div>

            {/* Micro rating trust indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', color: '#C29B38' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', color: '#5E6D61', fontWeight: 500 }}>
                <strong>4.9 / 5</strong> en satisfacción de clientes habituales
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80" 
                alt="Ambiente de spa y masaje relajante por Isel" 
              />
            </div>

            <div className="hero-floating-card">
              <div className="floating-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="floating-card-title">Cabina Zen Privada</div>
                <div className="floating-card-subtitle">Climatizada, velas & aromaterapia pura</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Amenities Bar */}
      <section className="trust-bar">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <div>
              <div className="trust-title">Aceites 100% Botánicos</div>
              <div className="trust-desc">Bases vegetales orgánicas y esencias puras sin químicos agresivos.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div>
              <div className="trust-title">Cuidado Holístico de Isel</div>
              <div className="trust-desc">Escucha activa y ajuste de presión a cada punto de tu anatomía.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="trust-title">Tiempo Real y Sin Prisas</div>
              <div className="trust-desc">Los minutos contratados son íntegros de masaje sobre la camilla.</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div>
              <div className="trust-title">Ritual Té e Hidratación</div>
              <div className="trust-desc">Cierre relajado con infusión digestiva reconfortante de cortesía.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz / Recommendation Tool */}
      <section id="recomendador" className="section-container" style={{ paddingBottom: '2rem' }}>
        <div className="section-header">
          <div className="section-badge">✨ Asesor Interactivo</div>
          <h2 className="section-title">¿Qué le pide tu cuerpo a gritos hoy?</h2>
          <p className="section-description">
            Selecciona tu principal sensación de hoy y te diremos al instante qué ritual de Armonía 
            te brindará el mayor alivio y recuperación.
          </p>
        </div>

        <div className="quiz-section">
          <div className="quiz-options">
            <button 
              className={`quiz-option-card ${quizNeed === 'estres' ? 'active' : ''}`}
              onClick={() => setQuizNeed('estres')}
            >
              <div className="quiz-option-title">
                <span>🧠 Estrés y Mente Saturada</span>
                {quizNeed === 'estres' && <span style={{ color: '#344C38' }}>✓</span>}
              </div>
              <p className="quiz-option-desc">Sensación de agobio, insomnio, mandíbula apretada o pensamientos que no se apagan.</p>
            </button>

            <button 
              className={`quiz-option-card ${quizNeed === 'espalda' ? 'active' : ''}`}
              onClick={() => setQuizNeed('espalda')}
            >
              <div className="quiz-option-title">
                <span>⚡ Nudos en Cuello & Espalda</span>
                {quizNeed === 'espalda' && <span style={{ color: '#344C38' }}>✓</span>}
              </div>
              <p className="quiz-option-desc">Tensión acumulada en trapecios, omóplatos o lumbalgia por postura frente al ordenador.</p>
            </button>

            <button 
              className={`quiz-option-card ${quizNeed === 'cansancio' ? 'active' : ''}`}
              onClick={() => setQuizNeed('cansancio')}
            >
              <div className="quiz-option-title">
                <span>🪨 Agotamiento Físico Profundo</span>
                {quizNeed === 'cansancio' && <span style={{ color: '#344C38' }}>✓</span>}
              </div>
              <p className="quiz-option-desc">Cuerpo pesado, articulaciones cargadas y necesidad de calor envolvente que te renueve.</p>
            </button>

            <button 
              className={`quiz-option-card ${quizNeed === 'mimos' ? 'active' : ''}`}
              onClick={() => setQuizNeed('mimos')}
            >
              <div className="quiz-option-title">
                <span>🌸 Desconexión & Autocuidado</span>
                {quizNeed === 'mimos' && <span style={{ color: '#344C38' }}>✓</span>}
              </div>
              <p className="quiz-option-desc">Deseas un tiempo sólo para ti o compartir una tarde inolvidable con tu pareja o amiga.</p>
            </button>
          </div>

          {/* Dynamic Quiz Result */}
          {quizNeed === 'estres' && (
            <div className="quiz-result-box">
              <div className="quiz-result-content">
                <div className="quiz-recommendation-badge">Tratamiento Recomendado Para Ti</div>
                <h3 className="quiz-result-name">Ritual Masaje Relajante Armonía (75 min)</h3>
                <p className="quiz-result-detail">
                  Diseñado para desacelerar el ritmo cardíaco y relajar el sistema nervioso mediante aromaterapia de lavanda francesa, toallas calientes y maniobras rítmicas envolventes que inducen paz mental profunda.
                </p>
              </div>
              <div>
                <button 
                  onClick={() => handleSelectServiceToBook('ritual-armonia')}
                  className="btn-primary"
                >
                  Reservar este ritual (55 €)
                </button>
              </div>
            </div>
          )}

          {quizNeed === 'espalda' && (
            <div className="quiz-result-box">
              <div className="quiz-result-content">
                <div className="quiz-recommendation-badge">Tratamiento Recomendado Para Ti</div>
                <h3 className="quiz-result-name">Descontracturante Suave Espalda & Cervical (50 min)</h3>
                <p className="quiz-result-detail">
                  Terapia descompresiva con bálsamo de árnica y romero tibio, enfocada en deshacer contracturas en cuello, hombros y zona lumbar con firmeza respetuosa y sin dolor residual.
                </p>
              </div>
              <div>
                <button 
                  onClick={() => handleSelectServiceToBook('espalda-cuello')}
                  className="btn-primary"
                >
                  Reservar este masaje (45 €)
                </button>
              </div>
            </div>
          )}

          {quizNeed === 'cansancio' && (
            <div className="quiz-result-box">
              <div className="quiz-result-content">
                <div className="quiz-recommendation-badge">Tratamiento Recomendado Para Ti</div>
                <h3 className="quiz-result-name">Terapia con Piedras Volcánicas Calientes (80 min)</h3>
                <p className="quiz-result-detail">
                  El calor sostenido de las piedras volcánicas basálticas penetra en las capas profundas de los músculos, devolviéndote la flexibilidad, eliminando toxinas y restableciendo tu energía vital.
                </p>
              </div>
              <div>
                <button 
                  onClick={() => handleSelectServiceToBook('piedras-volcanicas')}
                  className="btn-primary"
                >
                  Reservar este ritual (65 €)
                </button>
              </div>
            </div>
          )}

          {quizNeed === 'mimos' && (
            <div className="quiz-result-box">
              <div className="quiz-result-content">
                <div className="quiz-recommendation-badge">Tratamiento Recomendado Para Ti</div>
                <h3 className="quiz-result-name">Experiencia Armonía Dúo o Serenidad Craneofacial</h3>
                <p className="quiz-result-detail">
                  Elige entre disfrutar una experiencia sensorial compartida en cabina doble con cava y velas, o regalarte 60 minutos de serenidad craneal y podal para sentirte renovada de pies a cabeza.
                </p>
              </div>
              <div>
                <button 
                  onClick={() => handleSelectServiceToBook('experiencia-duo')}
                  className="btn-primary"
                >
                  Ver opciones y reservar
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Menu Catalog */}
      <section id="tratamientos" className="section-container">
        <div className="section-header">
          <div className="section-badge">🌿 Carta de Terapias</div>
          <h2 className="section-title">Nuestros Masajes y Rituales de Bienestar</h2>
          <p className="section-description">
            Cada tratamiento ha sido refinado con mimo por Isel para ofrecer una experiencia
            terapéutica superior que combina técnica milenaria, productos naturales y calma absoluta.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="category-filters">
          <button 
            className={`filter-btn ${activeCategory === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveCategory('todos')}
          >
            Todos los Tratamientos ({SERVICES.length})
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'relajantes' ? 'active' : ''}`}
            onClick={() => setActiveCategory('relajantes')}
          >
            Masajes Relajantes
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'terapeuticos' ? 'active' : ''}`}
            onClick={() => setActiveCategory('terapeuticos')}
          >
            Alivio Muscular
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'holisticos' ? 'active' : ''}`}
            onClick={() => setActiveCategory('holisticos')}
          >
            Rituales Holísticos
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'duo' ? 'active' : ''}`}
            onClick={() => setActiveCategory('duo')}
          >
            En Pareja / Dúo
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-box">
                <img src={service.image} alt={service.name} />
                {service.badge && (
                  <span className="service-badge">{service.badge}</span>
                )}
              </div>

              <div className="service-content">
                <div className="service-duration-row">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {service.duration}
                  </span>
                  <span style={{ color: '#C29B38', fontWeight: 600 }}>Terapia Guiada</span>
                </div>

                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                </div>

                <div className="service-footer">
                  <div className="service-price">
                    <span className="service-price-amount">{service.price}</span>
                    <span className="service-price-note">IVA e infusión incluidos</span>
                  </div>

                  <button 
                    className="service-book-btn"
                    onClick={() => handleSelectServiceToBook(service.id)}
                  >
                    Elegir & Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars / The Experience */}
      <section id="experiencia" className="section-container" style={{ background: '#FAF7F2' }}>
        <div className="section-header">
          <div className="section-badge">🌸 La Diferencia Armonía</div>
          <h2 className="section-title">El ritual paso a paso creado por Isel</h2>
          <p className="section-description">
            No creemos en los masajes impersonales de cadena. En Armonía cuidamos cada detalle sensorial
            para que desde el primer minuto sientas que entras en un espacio seguro de desconexión.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-number">01</div>
            <h4 className="pillar-title">Escucha Previa</h4>
            <p className="pillar-desc">
              Hablamos brevemente sobre tu nivel de cansancio, dolencias específicas y la intensidad de presión que más reconforta a tu musculatura.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">02</div>
            <h4 className="pillar-title">Inmersión Sensorial</h4>
            <p className="pillar-desc">
              Luz indirecta de velas de cera de soja, sonido binaural relajante a 432 Hz y temperatura de cabina regulada a 24°C continuos.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">03</div>
            <h4 className="pillar-title">Tacto Terapéutico</h4>
            <p className="pillar-desc">
              Maniobras continuas con aceites esenciales botánicos templados que alivian la fascia y desaceleran el sistema nervioso simpático.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-number">04</div>
            <h4 className="pillar-title">Vuelta Gradual & Té</h4>
            <p className="pillar-desc">
              Toalla tibia limpiadora, tiempo a solas para incorporarte a tu ritmo y una deliciosa infusión de hierbas silvestres para hidratarte.
            </p>
          </div>
        </div>
      </section>

      {/* About Isel Section */}
      <section id="sobre-isel" className="about-section">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image-card">
              <div className="about-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                  alt="Isel, terapeuta y fundadora de Armonía Masajes" 
                />
              </div>
              <div className="about-quote-box">
                <p>«El masaje no es sólo aflojar un músculo: es recordarle a tu cuerpo cómo se siente vivir en calma y sin prisa.»</p>
                <span style={{ fontSize: '0.8rem', opacity: 0.9, marginTop: '0.5rem', display: 'block', fontWeight: 600 }}>— Isel</span>
              </div>
            </div>

            <div className="about-content">
              <div className="section-badge" style={{ width: 'fit-content' }}>✨ Sobre la Terapeuta</div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
                Hola, soy Isel
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#344C38', fontWeight: 500 }}>
                Terapeuta corporal holística y creadora del concepto Armonía Masajes Relajantes.
              </p>
              <p className="section-description" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
                A lo largo de años dedicados al estudio de la masoterapia tradicional, la aromaterapia botánica y la liberación miofascial suave, comprendí que la gran mayoría de dolores físicos nacen de la sobrecarga emocional y el estrés no expresado.
              </p>
              <p className="section-description" style={{ textAlign: 'left' }}>
                En mi cabina no vas a encontrar masajes acelerados ni protocolos rígidos. Cada persona que cruza mi puerta recibe un trato respetuoso, cálido y confidencial. Mi mayor satisfacción es ver cómo las facciones se suavizan y cómo mis clientes se marchan con una sonrisa renovada y el cuerpo ligero.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <div className="about-point-icon">✓</div>
                  <div className="about-point-text">
                    <h4>Formación Certificada</h4>
                    <p>Especialización en masajes relajantes, descontracturantes y termoterapia.</p>
                  </div>
                </div>

                <div className="about-point">
                  <div className="about-point-icon">✓</div>
                  <div className="about-point-text">
                    <h4>Enfoque Personalizado</h4>
                    <p>Cada sesión es única, sin tiempos recortados ni atenciones apresuradas.</p>
                  </div>
                </div>

                <div className="about-point">
                  <div className="about-point-icon">✓</div>
                  <div className="about-point-text">
                    <h4>Higiene y Confort Riguroso</h4>
                    <p>Sábanas de algodón egipcio de un solo uso, toallas esterilizadas y pureza.</p>
                  </div>
                </div>

                <div className="about-point">
                  <div className="about-point-icon">✓</div>
                  <div className="about-point-text">
                    <h4>Ambiente Exclusivo</h4>
                    <p>Máxima privacidad para que puedas desconectar del mundo exterior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="section-container">
        <div className="section-header">
          <div className="section-badge">💬 Voces de Bienestar</div>
          <h2 className="section-title">Lo que sienten quienes nos visitan</h2>
          <p className="section-description">
            Historias reales de personas que confiaron en las manos de Isel para encontrar paz,
            aliviar dolores de espalda y recuperar la energía.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">«{t.comment}»</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-service">{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form & WhatsApp Direct */}
      <section id="reservar" className="booking-section section-container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-badge">📅 Agenda Tu Momento</div>
          <h2 className="section-title">Reserva tu Sesión en Armonía</h2>
          <p className="section-description">
            Completa tus preferencias para preparar tu llegada, o haz clic para abrir un chat directo
            en WhatsApp con tu reserva lista para enviar.
          </p>
        </div>

        <div className="booking-card">
          <div className="booking-form-header">
            <h3>Solicitud de Cita Personalizada</h3>
            <p>Isel confirmará tu horario en menos de 2 horas laborables</p>
          </div>

          <form className="booking-form-body" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Tu Nombre y Apellidos
                </label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Ej. María González"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Teléfono / WhatsApp
                </label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="Ej. +34 600 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path>
                  </svg>
                  Tratamiento Seleccionado
                </label>
                <select 
                  className="form-select"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} - {s.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Fecha Preferida
                </label>
                <input 
                  type="date" 
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Horario de Preferencia
                </label>
                <select 
                  className="form-select"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                >
                  <option value="10:00 - 12:00 (Mañana temprano)">10:00 - 12:00 (Mañana temprano)</option>
                  <option value="12:00 - 14:00 (Mediodía)">12:00 - 14:00 (Mediodía)</option>
                  <option value="16:00 - 18:00 (Tarde)">16:00 - 18:00 (Tarde)</option>
                  <option value="18:30 - 20:30 (Tarde-Noche para desconectar)">18:30 - 20:30 (Tarde-Noche para desconectar)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Presión que más te gusta
                </label>
                <div className="pressure-selector">
                  <button 
                    type="button" 
                    className={`pressure-btn ${formData.pressure === 'suave' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, pressure: 'suave' })}
                  >
                    Suave / Sensitiva
                  </button>
                  <button 
                    type="button" 
                    className={`pressure-btn ${formData.pressure === 'media' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, pressure: 'media' })}
                  >
                    Media / Equilibrada
                  </button>
                  <button 
                    type="button" 
                    className={`pressure-btn ${formData.pressure === 'firme' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, pressure: 'firme' })}
                  >
                    Firme / Descontracturante
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Zona de mayor tensión o petición especial (Opcional)
              </label>
              <textarea 
                className="form-textarea"
                placeholder="Ejemplo: Tengo dolor en las lumbares y mucha tensión en el cuello por la oficina. Prefiero aceites sin aroma muy fuerte."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="booking-actions">
              <a 
                href={generateWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-direct-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.37 7.34 9.11 7.4 8.89 7.64C8.68 7.88 8.08 8.44 8.08 9.6C8.08 10.76 8.92 11.87 9.04 12.03C9.16 12.19 10.66 14.59 13.01 15.5C14.96 16.26 15.36 16.11 15.78 16.07C16.21 16.03 17.15 15.51 17.35 14.96C17.54 14.41 17.54 13.93 17.48 13.84C17.42 13.74 17.27 13.68 17.04 13.57C16.82 13.45 15.72 12.91 15.51 12.84C15.31 12.76 15.16 12.72 15.01 12.95C14.86 13.18 14.44 13.68 14.31 13.83C14.18 13.98 14.06 14 13.83 13.89C13.61 13.77 12.89 13.54 12.03 12.78C11.36 12.18 10.91 11.44 10.78 11.23C10.66 11.01 10.77 10.89 10.88 10.78C10.99 10.68 11.12 10.5 11.24 10.37C11.35 10.23 11.4 10.13 11.47 9.98C11.55 9.83 11.51 9.7 11.45 9.58C11.39 9.47 10.94 8.35 10.75 7.9C10.56 7.46 10.38 7.52 10.23 7.51C10.1 7.51 9.94 7.5 9.78 7.5C9.62 7.5 9.36 7.56 9.15 7.8C8.94 8.04 8.34 8.6 8.34 9.76C8.34 10.92 9.18 12.03 9.3 12.19L9.53 7.34Z"/>
                </svg>
                <span>Agendar Directamente por WhatsApp con Isel</span>
              </a>

              <button type="submit" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                O Enviar Solicitud por Formulario Web
              </button>
            </div>

            <div className="booking-guarantee">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Cancelación y reprogramación gratuita hasta 12 horas antes de tu cita.</span>
            </div>
          </form>
        </div>

        {/* Gift Card Banner */}
        <div className="gift-banner">
          <div>
            <h3 className="gift-title">Regala Calma y Desconexión</h3>
            <p className="gift-desc">
              Sorprende a quien más quieres con una <strong>Tarjeta de Regalo Armonía</strong>.
              El detalle perfecto para cumpleaños, aniversarios o simplemente para cuidar a alguien especial.
            </p>
            <button 
              className="gift-btn"
              onClick={() => {
                const message = encodeURIComponent('¡Hola Isel! Me gustaría información sobre las Tarjetas de Regalo de Armonía Masajes.');
                window.open(`https://wa.me/34612345678?text=${message}`, '_blank');
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              Solicitar Bono Regalo
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: '1px dashed rgba(255, 255, 255, 0.4)', 
              borderRadius: '16px', 
              padding: '1.8rem',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#DBC99C' }}>VOUCHER DIGITAL O EN CAJA LUXE</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: '0.5rem 0' }}>Bono Masaje Personalizado</div>
              <p style={{ fontSize: '0.85rem', opacity: 0.85 }}>Válido durante 6 meses con fecha abierta</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-container">
        <div className="section-header">
          <div className="section-badge">❓ Dudas Frecuentes</div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-description">
            Todo lo que necesitas saber antes de tu primera cita con Isel en Armonía.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>Armonía</h4>
            <span>Masajes Relajantes por Isel</span>
            <p>
              Tu espacio de bienestar, serenidad y reconexión corporal. 
              Terapias manuales personalizadas con aceites puros y el máximo respeto por tus tiempos.
            </p>
          </div>

          <div className="footer-col">
            <h5>Carta de Servicios</h5>
            <ul>
              <li><a href="#tratamientos">Ritual Armonía 75 min</a></li>
              <li><a href="#tratamientos">Descontracturante Cervical</a></li>
              <li><a href="#tratamientos">Piedras Volcánicas</a></li>
              <li><a href="#tratamientos">Serenidad Craneofacial</a></li>
              <li><a href="#tratamientos">Experiencia Dúo</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Horario & Atención</h5>
            <ul>
              <li style={{ color: '#E2E8E3' }}>Lunes a Viernes: 10:00 - 20:30</li>
              <li style={{ color: '#E2E8E3' }}>Sábados: 10:00 - 15:00</li>
              <li style={{ color: '#A5B3A7' }}>Domingos: Cita previa exclusiva</li>
              <li style={{ marginTop: '0.5rem' }}>
                <a href="#reservar" style={{ color: '#C29B38', fontWeight: 600 }}>Solicitar cita ahora →</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contacto & Ubicación</h5>
            <ul>
              <li style={{ color: '#E2E8E3' }}>📍 Cabina Zen Privada y Climatizada</li>
              <li style={{ color: '#E2E8E3' }}>📞 WhatsApp: +34 612 345 678</li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram: @armonia.masajes.isel</a></li>
              <li style={{ marginTop: '0.4rem', color: '#8E9B91', fontSize: '0.8rem' }}>Atención con cita previa</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Armonía Masajes Relajantes por Isel. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacidad y Confidencialidad</span>
            <span>Términos de Servicio</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a 
        href={generateWhatsAppLink()}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        title="Contactar con Isel por WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.37 7.34 9.11 7.4 8.89 7.64C8.68 7.88 8.08 8.44 8.08 9.6C8.08 10.76 8.92 11.87 9.04 12.03C9.16 12.19 10.66 14.59 13.01 15.5C14.96 16.26 15.36 16.11 15.78 16.07C16.21 16.03 17.15 15.51 17.35 14.96C17.54 14.41 17.54 13.93 17.48 13.84C17.42 13.74 17.27 13.68 17.04 13.57C16.82 13.45 15.72 12.91 15.51 12.84C15.31 12.76 15.16 12.72 15.01 12.95C14.86 13.18 14.44 13.68 14.31 13.83C14.18 13.98 14.06 14 13.83 13.89C13.61 13.77 12.89 13.54 12.03 12.78C11.36 12.18 10.91 11.44 10.78 11.23C10.66 11.01 10.77 10.89 10.88 10.78C10.99 10.68 11.12 10.5 11.24 10.37C11.35 10.23 11.4 10.13 11.47 9.98C11.55 9.83 11.51 9.7 11.45 9.58C11.39 9.47 10.94 8.35 10.75 7.9C10.56 7.46 10.38 7.52 10.23 7.51C10.1 7.51 9.94 7.5 9.78 7.5C9.62 7.5 9.36 7.56 9.15 7.8C8.94 8.04 8.34 8.6 8.34 9.76C8.34 10.92 9.18 12.03 9.3 12.19L9.53 7.34Z"/>
        </svg>
      </a>

      {/* Success Notification Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#344C38', marginBottom: '0.6rem' }}>
              ¡Solicitud Recibida!
            </h3>
            <p style={{ color: '#5E6D61', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Muchas gracias <strong>{formData.name}</strong>. Isel revisará la disponibilidad para el ritual <strong>{selectedServiceObj.name}</strong> y se pondrá en contacto contigo a través de WhatsApp o llamada para confirmar la hora exacta.
            </p>
            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setModalOpen(false)}
            >
              Entendido, ¡muchas gracias!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
