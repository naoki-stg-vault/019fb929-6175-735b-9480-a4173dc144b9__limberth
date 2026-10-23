import { useEffect, type ReactNode } from 'react'
import './App.css'
import {
  negocio,
  contacto,
  servicios,
  beneficios,
  testimonios,
  sobreIsel,
  type IconName,
} from './content'

/* ── Íconos (trazos simples, heredan el color del texto) ───────────── */
const iconos: Record<IconName, ReactNode> = {
  masaje: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c0-6.2 3.2-10.4 8.4-11.4C20.4 15.8 17.2 20 12 21Z" />
      <path d="M12 21C12 14.8 8.8 10.6 3.6 9.6 3.6 15.8 6.8 20 12 21Z" />
    </svg>
  ),
  brillo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3.5l1.5 4.2 4.2 1.5-4.2 1.5L11 14.9 9.5 10.7 5.3 9.2l4.2-1.5L11 3.5Z" />
      <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  ),
  gota: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.2c3.1 3.7 5.6 6.5 5.6 9.6a5.6 5.6 0 1 1-11.2 0c0-3.1 2.5-5.9 5.6-9.6Z" />
      <path d="M12 15.2c-1.5-1-2.3-1.8-2.3-2.7a1.3 1.3 0 0 1 2.3-.9 1.3 1.3 0 0 1 2.3.9c0 .9-.8 1.7-2.3 2.7Z" />
    </svg>
  ),
  hoja: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4c0 8.5-4.4 13-11 13H5c0-8.5 4.4-13 11-13h4Z" />
      <path d="M5 21c1.5-5.5 4.5-9.5 9-12" />
    </svg>
  ),
  corazon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 7.8a4.1 4.1 0 0 1 7.5 2.8c0 5-7.5 9.4-7.5 9.4Z" />
    </svg>
  ),
  flor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c0-2.6-.9-4.6-2.4-4.6S7.2 6.6 7.2 8.4c0 1.2.6 2.2 1.6 2.8" />
      <path d="M14.4 12c2.6 0 4.6-.9 4.6-2.4s-1.6-2.4-3.4-2.4c-1.2 0-2.2.6-2.8 1.6" />
      <path d="M12 14.4c0 2.6.9 4.6 2.4 4.6s2.4-1.6 2.4-3.4c0-1.2-.6-2.2-1.6-2.8" />
      <path d="M9.6 12c-2.6 0-4.6.9-4.6 2.4s1.6 2.4 3.4 2.4c1.2 0 2.2-.6 2.8-1.6" />
    </svg>
  ),
}

function Icono({ nombre }: { nombre: IconName }) {
  return (
    <span className="icono" aria-hidden="true">
      {iconos[nombre]}
    </span>
  )
}

/* Marcador visible para los datos que faltan */
function Marcador({ children }: { children: ReactNode }) {
  return <span className="marcador">[ {children} ]</span>
}

/* Aparición suave al hacer scroll */
function useReveal() {
  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (sinMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('es-visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('es-visible')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])
}

const enlaceWhatsApp = contacto.whatsappNumero
  ? `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(
      'Hola Isel, me gustaría agendar una cita en Armonía.',
    )}`
  : null

function App() {
  useReveal()

  return (
    <div className="pagina">
      <header className="cabecera">
        <div className="cabecera__interior">
          <a className="marca" href="#inicio">
            <span className="marca__nombre">Armonía</span>
            <span className="marca__sub">Salud · Bienestar · Belleza</span>
          </a>
          <nav className="nav" aria-label="Secciones">
            <a href="#servicios">Servicios</a>
            <a href="#sobre-isel">Sobre Isel</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            className="btn btn--pequeno"
            href={negocio.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu cita
          </a>
        </div>
      </header>

      <main>
        {/* 1 · PORTADA */}
        <section className="hero" id="inicio">
          <div className="hero__halo" aria-hidden="true" />
          <div className="hero__contenido">
            <p className="hero__antetitulo">Salud · Bienestar · Belleza</p>
            <h1 className="hero__titulo">{negocio.nombre}</h1>
            <p className="hero__lema">{negocio.lema}</p>
            <a
              className="btn btn--grande"
              href={negocio.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu cita
            </a>
            <p className="hero__pie">Masajes terapéuticos · Estética · Cuidado personal</p>
          </div>
        </section>

        {/* 2 · SERVICIOS */}
        <section className="seccion" id="servicios">
          <div className="contenedor">
            <header className="seccion__cabecera" data-reveal>
              <p className="etiqueta">Servicios</p>
              <h2 className="seccion__titulo">Cuidado para tu cuerpo y tu piel</h2>
              <p className="seccion__intro">
                Cada servicio se adapta a lo que necesitas ese día. Escríbenos y te ayudamos a
                elegir el más adecuado para ti.
              </p>
            </header>

            <div className="rejilla rejilla--3">
              {servicios.map((servicio, i) => (
                <article
                  className="tarjeta"
                  key={servicio.titulo}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <Icono nombre={servicio.icono} />
                  <h3 className="tarjeta__titulo">{servicio.titulo}</h3>
                  <p className="tarjeta__texto">{servicio.descripcion}</p>
                  <ul className="chips">
                    {servicio.detalles.map((detalle) => (
                      <li className="chip" key={detalle}>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="nota-marcador" data-reveal>
              Precios: <Marcador>COMPLETAR: precios o «consultar por mensaje»</Marcador>
            </p>
          </div>
        </section>

        {/* 3 · SOBRE ISEL */}
        <section className="seccion seccion--arena" id="sobre-isel">
          <div className="contenedor sobre">
            <div className="sobre__foto" data-reveal>
              {contacto.fotoIsel ? (
                <img src={contacto.fotoIsel} alt={`Foto de ${sobreIsel.firma}`} />
              ) : (
                <div className="foto-marcador">
                  <Icono nombre="flor" />
                  <Marcador>COMPLETAR: foto de Isel</Marcador>
                  <span className="foto-marcador__pista">
                    Coloca la imagen en la carpeta public y escribe su ruta en el archivo de
                    contenido.
                  </span>
                </div>
              )}
            </div>

            <div className="sobre__texto" data-reveal>
              <p className="etiqueta">{sobreIsel.titulo}</p>
              <h2 className="seccion__titulo">Un trato cercano, un momento para ti</h2>
              {sobreIsel.parrafos.map((parrafo) => (
                <p className="parrafo" key={parrafo}>
                  {parrafo}
                </p>
              ))}
              <p className="firma">{sobreIsel.firma}</p>
            </div>
          </div>
        </section>

        {/* 4 · POR QUÉ ELEGIRNOS */}
        <section className="seccion" id="por-que">
          <div className="contenedor">
            <header className="seccion__cabecera" data-reveal>
              <p className="etiqueta">Por qué elegirnos</p>
              <h2 className="seccion__titulo">Bienestar con detalle</h2>
            </header>

            <div className="rejilla rejilla--4">
              {beneficios.map((beneficio, i) => (
                <article
                  className="beneficio"
                  key={beneficio.titulo}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icono nombre={beneficio.icono} />
                  <h3 className="beneficio__titulo">{beneficio.titulo}</h3>
                  <p className="beneficio__texto">{beneficio.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · TESTIMONIOS */}
        <section className="seccion seccion--arena" id="testimonios">
          <div className="contenedor">
            <header className="seccion__cabecera" data-reveal>
              <p className="etiqueta">Testimonios</p>
              <h2 className="seccion__titulo">Lo que dicen nuestras clientas</h2>
              <p className="aviso-ejemplo">
                Ejemplos de texto: reemplázalos por opiniones reales de tus clientas.
              </p>
            </header>

            <div className="rejilla rejilla--3">
              {testimonios.map((testimonio, i) => (
                <figure
                  className="testimonio"
                  key={testimonio.nombre}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="insignia">Ejemplo</span>
                  <blockquote className="testimonio__texto">«{testimonio.texto}»</blockquote>
                  <figcaption className="testimonio__autor">{testimonio.nombre}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · CONTACTO */}
        <section className="seccion" id="contacto">
          <div className="contenedor">
            <header className="seccion__cabecera" data-reveal>
              <p className="etiqueta">Contacto</p>
              <h2 className="seccion__titulo">Agenda tu cita</h2>
              <p className="seccion__intro">
                Escríbenos por Facebook o WhatsApp y coordinamos el día y la hora que mejor te
                venga.
              </p>
            </header>

            <div className="contacto" data-reveal>
              <div className="contacto__principal">
                <a
                  className="btn btn--grande"
                  href={negocio.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por Facebook
                </a>
                {enlaceWhatsApp ? (
                  <a
                    className="btn btn--contorno"
                    href={enlaceWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribir por WhatsApp
                  </a>
                ) : (
                  <p className="nota-marcador">
                    WhatsApp: <Marcador>{contacto.whatsappTexto}</Marcador>
                  </p>
                )}
              </div>

              <dl className="datos">
                <div className="dato">
                  <dt>Dirección</dt>
                  <dd>
                    <Marcador>{contacto.direccion}</Marcador>
                  </dd>
                </div>
                <div className="dato">
                  <dt>Horario</dt>
                  <dd>
                    <Marcador>{contacto.horario}</Marcador>
                  </dd>
                </div>
                <div className="dato">
                  <dt>Facebook</dt>
                  <dd>
                    <a href={negocio.facebook} target="_blank" rel="noopener noreferrer">
                      Armonía — Salud, Bienestar y Belleza
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <p className="pie__nombre">{negocio.nombreCompleto}</p>
        <p className="pie__nota">
          <a href={negocio.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
