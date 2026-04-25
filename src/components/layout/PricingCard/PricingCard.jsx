import { createWhatsAppLink } from "../../../utils/whatsapp";

import styles from "./PricingCard.module.css";

export default function PricingCard({ title, price, features, popular }) {

  const message = `Hola, buen día. Estoy interesado en el plan *${title}* y me gustaría recibir más información sobre mi página web.`;

  const url = createWhatsAppLink(message);
  return (

    <div className={`${styles.card} ${popular ? styles.popular : ""}`}>
      {popular && (
        <span className={styles.badge}>MÁS POPULAR</span>
      )}
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
          <li key={i}><span className={styles.check}>✔</span> {f}</li>
        ))}
      </ul>

      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.btn}>
        Elegir plan
      </a>

    </div>
  );
}