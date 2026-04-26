
import styles from "./Contacto.module.css";
import { useContacto } from "./useContacto";

export default function Contacto() {

    const {
        form,
        handleChange,
        handleSubmit,
        handleWhatsApp
    } = useContacto();

    return (
        <section className={styles.container} id="contacto">

            <h2>¿Listo para tener tu página web?</h2>

            <p className={styles.subtitle}>
                Cuéntame sobre tu proyecto y te doy una propuesta en menos de 24 horas
            </p>

            <span className={styles.alert}>
                ⏳ Solo quedan 3 espacios este mes
            </span>

            <div className={styles.grid}>

                {/* FORM */}
                <form className={styles.formCard} onSubmit={handleSubmit}>
                    <h3>Envíame un mensaje</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="¿Qué tipo de página necesitas?"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button type="submit" className={styles.primaryBtn}>
                        Enviar mensaje
                    </button>

                    <small>Respuesta en menos de 24h • Sin compromiso</small>
                </form>

                {/* WHATSAPP */}
                <div>
                    <div className={styles.whatsappCard}>
                        <h3>WhatsApp</h3>

                        <p>¿Prefieres hablar directo? Escríbeme ahora</p>

                        <button onClick={handleWhatsApp} className={styles.whatsappBtn}>
                            💬 Hablar por WhatsApp
                        </button>
                    </div>

                    <div className={styles.benefits}>
                        <h3>¿Por qué elegirme?</h3>
                        <p>⚡ Respuesta rápida</p>
                        <p>🔒 Proceso claro</p>
                        <p>🛠 Soporte incluido</p>
                        <p>🚀 Inicio inmediato</p>
                    </div>
                </div>

            </div>
        </section>
    );
}