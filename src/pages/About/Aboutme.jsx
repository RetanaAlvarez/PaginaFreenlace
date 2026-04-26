import { aboutMe } from "../../data/projectsRealData";

import { FiExternalLink, FiUser } from "react-icons/fi";

import styles from "./About.module.css";

function Aboutme() {
    const { titulo, boton, card, descripcion, enlace } = aboutMe.aboutme;
    const { subtitulo, lista } = aboutMe.aboutme.card;

    return (
        <section className={styles.container} id="sobremi">
            <div className={styles.sobremi}>
                <div className={styles.avatar}>
                    <FiUser />
                </div>
                
                <h1>{titulo}</h1>
                {descripcion.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <a href={enlace} className={styles.boton}>
                    <FiExternalLink className={styles.icono} />
                    {boton}
                </a>


            </div>

            <div className={styles.lista}>
                <h3>{subtitulo}</h3>
                {lista.map((item, index) => (
                    <div key={index}>
                        <h4>
                            <span className={styles.check}>✔</span>
                            {item.encabezado}
                        </h4>

                        <p>{item.descripcion}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Aboutme;