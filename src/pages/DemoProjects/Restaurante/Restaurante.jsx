import { restauranteData } from "../../../data/demos/restauranteData";
import {
  createWhatsAppRestaurante,
  createWhatsAppLinkDemo,
} from "../../../utils/whatsapp";

import styles from "./Restaurante.module.css";

/* ================= NAV ================= */
function Nav() {
  const { regreso, path, titulo, boton } = restauranteData.navbar;
  const mensaje = "Hola, quiero más información sobre el restaurante";

  return (
    <nav className="container-fluid bg-danger py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <a href={path} className="text-white text-decoration-none">
              ← {regreso}
            </a>
          </div>

          <div className="col-4 text-center">
            <h5 className="text-white m-0">🌮 {titulo}</h5>
          </div>

          <div className="col-4 text-end">
            <a
              href={createWhatsAppLinkDemo(mensaje)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light rounded-pill"
            >
              📞 {boton}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */
function Hero() {
  const { titulo, subtitulo, estrellas, cantidad } = restauranteData.hero;

  return (
    <section
      className={`${styles.hero} d-flex align-items-center text-center`}
      style={{
        background: "linear-gradient(90deg, #ff4d00, #ff0000)",
        minHeight: "250px",
      }}
    >
      <div className="container text-white">
        <h1 className="fw-bold display-5 mb-3">{titulo}</h1>
        <p className="mb-2">{subtitulo}</p>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <span>{estrellas}</span>
          <small>{cantidad}</small>
        </div>
      </div>
    </section>
  );
}

/* ================= INFO ================= */
function InfoBar() {
  const { address, time, tel } = restauranteData.contacto;

  return (
    <section className="container-fluid bg-light py-3 border-bottom">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-4 mb-2 mb-md-0">📍 {address}</div>

          <div className="col-12 col-md-4 mb-2 mb-md-0 text-md-center">
            🕒 {time}
          </div>

          <div className="col-12 col-md-4 text-md-end">📞 {tel}</div>
        </div>
      </div>
    </section>
  );
}

/* ================= MENU ================= */
function Menu() {
  return (
    <section className="container-fluid py-5" style={{ background: "#f5efe6" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Nuestro Menú</h2>
          <p className="text-muted">
            Platillos preparados con ingredientes frescos y recetas
            tradicionales
          </p>
        </div>

        {restauranteData.comidas.map((section, idx) => (
          <div key={idx} className="mb-5">
            <h3 className={styles.titleSection}>{section.category}</h3>

            <div className="row g-4 mt-3">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="col-12 col-md-6 col-lg-4">
                  <div
                    className={`card h-100 border-0 rounded-4 shadow-sm ${styles.cardHover}`}
                  >
                    <div className="card-body p-4">
                      <div className="text-center fs-1 mb-3">{item.image}</div>

                      <div className="d-flex justify-content-between mb-2">
                        <h5 className="fw-bold mb-0">{item.name}</h5>
                        <span className={styles.price}>{item.price}</span>
                      </div>

                      <p className="text-muted mb-4">{item.description}</p>

                      <a
                        href={createWhatsAppRestaurante(
                          `Hola quiero ordenar ${item.name}`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn w-100 btn-success rounded-pill ${styles.btnOrder}`}
                      >
                        🛒 Ordenar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function CTA() {
  const url = createWhatsAppRestaurante("Hola, quiero hacer un pedido");

  return (
    <section
      className="container-fluid py-5 text-center text-white"
      style={{
        background: "linear-gradient(90deg, #ff4d00, #ff0000)",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">¿Listo para disfrutar?</h2>

        <p className="mb-4">
          Ordena ahora y recibe en la comodidad de tu hogar
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-success btn-lg rounded-pill"
        >
          📞 Ordenar por WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer
      className="container-fluid py-5 text-center"
      style={{
        background: "linear-gradient(180deg, #0f172a, #020617)",
      }}
    >
      <div className="container">
        <p
          className="mb-2"
          style={{
            color: "#cbd5f5",
            fontSize: "14px",
          }}
        >
          © 2026{" "}
          <span style={{ color: "#ffffff", fontWeight: "600" }}>
            La Cocina Mexicana
          </span>{" "}
          Todos los derechos reservados.
        </p>

        <p
          style={{
            color: "#64748b",
            fontSize: "13px",
          }}
        >
          Demo creado por Desarrollo Web Profesional
        </p>
      </div>
    </footer>
  );
}

/* ================= PAGE ================= */
export default function Restaurante() {
  return (
    <>
      <Nav />
      <Hero />
      <InfoBar />
      <Menu />
      <CTA />
      <Footer />
    </>
  );
}
