import styles from "./PerformanceOptions.module.css";
import { performanceData } from "../../data/performanceData";

export default function PerformanceOptions() {

  const { header, planes, info } = performanceData;

  return (
    <section className={styles.container}>
      
      <h2>{header.titulo}</h2>
      <p className={styles.subtitle}>{header.descripcion}</p>

      <div className={styles.cards}>
        {planes.map((plan, i) => (
          <div
            key={i}
            className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
          >
            {plan.popular && <span className={styles.badge}>MEJOR</span>}

            <h3>{plan.nombre}</h3>

            {plan.tag && <span className={styles.tag}>{plan.tag}</span>}
            {plan.precio && <p>{plan.precio}</p>}

            <ul>
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.info}>{info}</div>
    </section>
  );
}