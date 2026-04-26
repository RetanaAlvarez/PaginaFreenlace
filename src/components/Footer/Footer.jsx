import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brand}>
          <h3>WebDev Pro</h3>
          <p>
            Creando páginas web que ayudan a crecer negocios en México
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <h4>Enlaces rápidos</h4>
          <a href="#proyectos">Proyectos</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
          <a href="#">Portafolio completo ↗</a>
        </div>

        <div className={styles.contact}>
          <h4>Contacto</h4>
          <p>📩 retanaalvarez@gmail.com</p>
          <p>💬 712 193 3662</p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className={styles.divider}></div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2026 WebDev Pro. Todos los derechos reservados.</p>
        <span className={styles.version}>v1.1.5</span>
      </div>
    </footer>
  );
}