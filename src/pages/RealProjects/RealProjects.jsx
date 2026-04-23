import { projectsRealData } from "../../data/projectsRealData";
import styles from "./RealProjects.module.css";

function RealProjects() {
  const { titulo, descripcion } = projectsRealData.header;
  const { card } = projectsRealData;

  return (
    <section className={styles.RealProjects}>

      <div className={styles.home}>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>

      <div className={styles.card}>
        {card.map((item, index) => (
          <div key={index} className={styles.info} >

            <img src={`${item.imagen}`} />

            <h2>{item.nombre}</h2>
            <p>{item.descripcioncard}</p>

            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.boton}
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}

export default RealProjects