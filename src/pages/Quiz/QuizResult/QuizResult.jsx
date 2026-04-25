import styles from "./QuizResult.module.css";
import { quizResultData } from "../../data/quizResultData";

export default function QuizResult({ type, onReset }) {
  const data = quizResultData[type];

  return (
    <div className={`${styles.card} ${styles[data.color]}`}>
      <h2>{data.titulo}</h2>
      <p>{data.precio}</p>

      <div className={styles.box}>
        <h4>¿Por qué este plan?</h4>
        <ul>
          {data.beneficios.map((b, i) => (
            <li key={i}>✔ {b}</li>
          ))}
        </ul>
      </div>

      <button className={styles.cta}>
        Quiero este plan
      </button>

      <button className={styles.secondary} onClick={onReset}>
        Ver otras opciones
      </button>
    </div>
  );
}