import { projectsData } from "../../data/projectsData";

import styles from "./Projects.module.css";

function Projects() {
    const { titulo, descripcion, demo, boton, comentario } = projectsData.project;

    return (
        <section className={styles.container} id="proyectos">

            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.descripcion}>{descripcion}</p>

            <div className={styles.card}>
                {demo.map((item, index) => (
                    <div key={index} className={styles.intocard} style={{ background: item.color.bg }}>
                        
                        {/* HEADER */}
                        <div
                            className={styles.header}
                            style={{ backgroundImage: `url(${item.icono})` }}
                        >

                            <img src={item.icono} alt={item.encabezado} />
                        </div>

                        {/* BODY */}
                        < div className={styles.body} >
                            <h3>{item.encabezado}</h3>
                            <p>{item.descripcion}</p>

                            <ul>
                                {item.lista.map((texto, key) => (
                                    <li key={key}>✔ {texto}</li>
                                ))}
                            </ul>

                            <a
                                href={item.ruta}
                                className={styles.button}
                                style={{
                                    border: `2px solid ${item.color.button}`,
                                    color: item.color.border,
                                    background: item.color.button
                                }}
                            >
                                {boton}
                            </a>
                        </div>

                    </div>
                ))
                }
            </div >

            <p className={styles.comentario}>{comentario}</p>

        </section >
    );
}

export default Projects;