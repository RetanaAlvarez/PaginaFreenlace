
import styles from "./PricingCard.module.css";

export default function PricingCard({ title, price, features, popular }) {
  return (

    <div className={`${styles.card} ${popular ? styles.popular : ""}`}>

      <span className={styles.badge}>MÁS POPULAR</span>

      <button className={styles.btn}>Elegir plan</button>
      <h3>{title}</h3>

      <p>
        {title === "Básico" && "Perfecto para empezar"}
        {title === "Estándar" && "Ideal para negocios en crecimiento"}
        {title === "Premium" && "Solución completa"}
      </p>

      <h2>${price}</h2>
      <span>MXN</span>

      <ul>
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button className={styles.btn}>Elegir plan</button>
    </div>
  );
}