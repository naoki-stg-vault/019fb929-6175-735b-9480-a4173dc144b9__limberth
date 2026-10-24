import { useEffect, useState } from 'react'
import './App.css'
import {
  negocio,
  enlaces,
  hero,
  servicios,
  beneficios,
  banda,
  galeria,
  sobreIsel,
  pasos,
  testimonios,
  preguntas,
  ctaFinal,
  footer,
} from './content'

/** Recuadro dorado para los datos que aún faltan por rellenar. */
function Marcador({ children }: { children: string }) {
  return (
    <span className="marcador" title="Dato pendiente de completar">
      {children}
    </span>
  )
}

/** Muestra el valor real o, si está vacío / empieza por COMPLETAR, el marcador. */
function Dato({ valor }: { valor: string }) {
  if (!valor || valor.startsWith('COMPLETAR')) return <Marcador>{valor || 'COMPLETAR: dato pendiente'}</Marcador>
  return <>{valor}</>
}

function App() {
  const [conScroll, setConScroll] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const alDesplazar = () => setConScroll(window.scrollY > 20)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  const enlaceWhatsapp = negocio.whatsappNumero
    ? `https://wa.me/${negocio.whatsappNumero}?text=${encodeURIComponent(negocio.whatsappMensaje)}`
    : null

  return (
    <div className="pagina">
      <header className={`cabecera${conScroll ? ' cabecera--solida' : ''}`}>
        <a className="marca" href="#inicio" onClick={() => setMenuAbierto(false)}>
          <span className="marca__sello" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="34" height="34">
              <path d="M32 14c6 6 9 11 9 16a9 9 0 0 1-18 0c0-5 3-10 9-16z" fill="currentColor" />
              <path
                d="M32 50c-8 0-14-4-16-9 6 1 11 3 16 6 5-3 10-5 16-6-2 5-8 9-16 9z"
                fill="currentColor"
                opacity=".55"
              />
            </svg>
          </span>
          <span className="marca__texto">
            <strong>{negocio.nombre}</strong>
            <small>{negocio.por}</small>
          </span>
        </a>

        <nav className={`nav${menuAbierto ? ' nav--abierta' : ''}`}>
          {enlaces.map((enlace) => (
            <a key={enlace.href} href={enlace.href} onClick={() => setMenuAbierto(false)}>
              {enlace.texto}
            </a>
          ))}
          <a className="boton boton--pequeno" href="#contacto" onClick={() => setMenuAbierto(false)}>
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="menu-boton"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero" id="inicio">
          <div className="hero__fondo" aria-hidden="true">
            <span className="blob blob--1" />
            <span className="blob blob--2" />
            <span className="blob blob--3" />
          </div>

          <div className="contenedor hero__grid">
            <div className="hero__texto">
              <p className="etiqueta">{hero.etiqueta}</p>
              <h1>
                {hero.titulo} <em>{hero.tituloAcento}</em>
              </h1>
              <p className="hero__parrafo">{hero.texto}</p>

              <div className="hero__acciones">
                {enlaceWhatsapp ? (
                  <a className="boton" href={enlaceWhatsapp} target="_blank" rel="noreferrer">
                    {hero.botonPrincipal}
                  </a>
                ) : (
                  <a className="boton" href="#contacto">
                    {hero.botonPrincipal}
                  </a>
                )}
                <a className="boton boton--fantasma" href="#servicios">
                  {hero.botonSecundario}
                </a>
              </div>

              <ul className="hero__sellos">
                {hero.sellos.map((sello) => (
                  <li key={sello}>{sello}</li>
                ))}
              </ul>
            </div>

            <div className="hero__visual">
              <div className="hero__marco">
                {negocio.fotoHero ? (
                  <img src={negocio.fotoHero} alt={`Masaje relajante en ${negocio.nombre}`} />
                ) : (
                  <div className="hero__placeholder">
                    <span className="hero__placeholder-icono" aria-hidden="true">
                      ❋
                    </span>
                    <strong>Foto del espacio</strong>
                    <small>Sube una imagen a la carpeta public/ y escribe la ruta en content.ts</small>
                  </div>
                )}
              </div>
              <div className="hero__tarjeta">
                <span className="hero__tarjeta-numero">{hero.tarjeta.numero}</span>
                <span className="hero__tarjeta-texto">
                  {hero.tarjeta.texto}
                  <small>{hero.tarjeta.subtexto}</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SERVICIOS ---------- */}
        <section className="seccion seccion--arena" id="servicios">
          <div className="contenedor">
            <div className="seccion__cabecera">
              <p className="etiqueta">Servicios</p>
              <h2>Elige cómo quieres relajarte</h2>
              <p className="seccion__intro">
                Todas las sesiones incluyen camilla, toallas, aceites y un espacio tranquilo. Los precios se
                confirman al reservar.
              </p>
            </div>

            <div className="rejilla rejilla--servicios">
              {servicios.map((servicio) => (
                <article
                  key={servicio.nombre}
                  className={`tarjeta${servicio.destacado ? ' tarjeta--destacada' : ''}`}
                >
                  {servicio.destacado && <span className="tarjeta__cinta">Más pedido</span>}
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                  <div className="tarjeta__pie">
                    <span className="pastilla">{servicio.duracion}</span>
                    <span className="precio">
                      <Dato valor={servicio.precio} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- BENEFICIOS ---------- */}
        <section className="seccion" id="beneficios">
          <div className="contenedor">
            <div className="seccion__cabecera seccion__cabecera--centrada">
              <p className="etiqueta">Beneficios</p>
              <h2>Lo que notas después</h2>
            </div>
            <div className="rejilla rejilla--beneficios">
              {beneficios.map((beneficio) => (
                <article className="beneficio" key={beneficio.titulo}>
                  <span className="beneficio__icono" aria-hidden="true">
                    {beneficio.icono}
                  </span>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- BANDA CON FOTO ---------- */}
        <section className="banda">
          <div className="banda__fondo" aria-hidden="true">
            {negocio.fotoBanda && <img src={negocio.fotoBanda} alt="" />}
          </div>
          <div className="contenedor banda__contenido">
            <p className="etiqueta etiqueta--clara">{banda.etiqueta}</p>
            <h2>{banda.titulo}</h2>
            <p>{banda.texto}</p>
          </div>
        </section>

        {/* ---------- GALERÍA ---------- */}
        <section className="seccion">
          <div className="contenedor">
            <div className="seccion__cabecera seccion__cabecera--centrada">
              <p className="etiqueta">{galeria.etiqueta}</p>
              <h2>{galeria.titulo}</h2>
              <p className="seccion__intro">{galeria.intro}</p>
            </div>
            <div className="galeria">
              {negocio.galeria.map((foto) => (
                <figure className="galeria__item" key={foto.src}>
                  <img src={foto.src} alt={foto.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SOBRE ISEL ---------- */}
        <section className="seccion seccion--bosque" id="sobre">
          <div className="contenedor sobre">
            <div className="sobre__visual">
              <div className="sobre__marco">
                {negocio.fotoIsel ? (
                  <img src={negocio.fotoIsel} alt={`${negocio.nombre}, masajista`} loading="lazy" />
                ) : (
                  <div className="sobre__placeholder">
                    <strong>Foto de Isel</strong>
                    <small>Sube la imagen a public/ y escribe la ruta en content.ts</small>
                  </div>
                )}
              </div>
            </div>

            <div className="sobre__texto">
              <p className="etiqueta etiqueta--clara">{sobreIsel.etiqueta}</p>
              <h2>{sobreIsel.titulo}</h2>
              {sobreIsel.parrafos.map((parrafo) => (
                <p key={parrafo.slice(0, 24)}>
                  <Dato valor={parrafo} />
                </p>
              ))}
              <dl className="sobre__datos">
                {sobreIsel.datos.map((dato) => (
                  <div key={dato.etiqueta}>
                    <dt>{dato.etiqueta}</dt>
                    <dd>
                      <Dato valor={dato.valor} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- PASOS ---------- */}
        <section className="seccion">
          <div className="contenedor">
            <div className="seccion__cabecera seccion__cabecera--centrada">
              <p className="etiqueta">Cómo funciona</p>
              <h2>Reservar es muy fácil</h2>
            </div>
            <div className="rejilla rejilla--pasos">
              {pasos.map((paso) => (
                <article className="paso" key={paso.numero}>
                  <span className="paso__numero">{paso.numero}</span>
                  <h3>{paso.titulo}</h3>
                  <p>{paso.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- TESTIMONIOS ---------- */}
        <section className="seccion seccion--arena">
          <div className="contenedor">
            <div className="seccion__cabecera seccion__cabecera--centrada">
              <p className="etiqueta">Opiniones</p>
              <h2>Lo que dicen quienes ya han venido</h2>
            </div>
            <div className="rejilla rejilla--testimonios">
              {testimonios.map((testimonio) => (
                <figure className="testimonio" key={testimonio.texto.slice(0, 24)}>
                  <span className="testimonio__comillas" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{testimonio.texto}</blockquote>
                  <figcaption>
                    <Dato valor={testimonio.autor} />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PREGUNTAS ---------- */}
        <section className="seccion" id="preguntas">
          <div className="contenedor contenedor--estrecho">
            <div className="seccion__cabecera seccion__cabecera--centrada">
              <p className="etiqueta">Preguntas frecuentes</p>
              <h2>Antes de tu primera cita</h2>
            </div>
            <div className="acordeon">
              {preguntas.map((item) => (
                <details key={item.pregunta}>
                  <summary>{item.pregunta}</summary>
                  <p>{item.respuesta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CONTACTO ---------- */}
        <section className="seccion seccion--contacto" id="contacto">
          <div className="contenedor contacto">
            <div className="contacto__texto">
              <p className="etiqueta etiqueta--clara">{ctaFinal.etiqueta}</p>
              <h2>{ctaFinal.titulo}</h2>
              <p>{ctaFinal.texto}</p>

              {enlaceWhatsapp ? (
                <a className="boton boton--claro" href={enlaceWhatsapp} target="_blank" rel="noreferrer">
                  {ctaFinal.boton}
                </a>
              ) : (
                <p className="contacto__aviso">
                  <Marcador>COMPLETAR: añade tu número de WhatsApp en content.ts para activar el botón de reserva</Marcador>
                </p>
              )}
            </div>

            <div className="contacto__datos">
              <div className="dato">
                <span className="dato__etiqueta">Dónde</span>
                <span className="dato__valor">
                  <Dato valor={negocio.direccion} />
                </span>
                <span className="dato__valor dato__valor--suave">
                  <Dato valor={negocio.ciudad} />
                </span>
              </div>
              <div className="dato">
                <span className="dato__etiqueta">Teléfono</span>
                <span className="dato__valor">
                  <Dato valor={negocio.telefono} />
                </span>
              </div>
              <div className="dato">
                <span className="dato__etiqueta">Correo</span>
                <span className="dato__valor">
                  <Dato valor={negocio.email} />
                </span>
              </div>
              <div className="dato">
                <span className="dato__etiqueta">Instagram</span>
                <span className="dato__valor">
                  <Dato valor={negocio.instagram} />
                </span>
              </div>
              <div className="dato">
                <span className="dato__etiqueta">Horario</span>
                <span className="dato__valor">
                  <Dato valor={negocio.horario} />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor pie__contenido">
          <div className="pie__marca">
            <strong>
              {negocio.nombre} <span>{negocio.por}</span>
            </strong>
            <small>{footer.nota}</small>
          </div>
          <p className="pie__aviso">{footer.aviso}</p>
          <p className="pie__copy">© {new Date().getFullYear()} {negocio.nombre}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
