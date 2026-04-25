import { createWhatsAppLink } from "../../../utils/whatsapp";

import styles from "./PricingCard.module.css";
export default function PricingCard({
  title,
  price,
  features,
  popular,
  description,
  subtitle,
  cta,
  badge
}) {
  const message = `Hola, buen día. Estoy interesado en el plan *${title}* y me gustaría recibir más información sobre mi página web.`;

  const url = createWhatsAppLink(message);

  return (
    <div className={`${styles.card} ${popular ? styles.popular : ""}`}>

      {badge && <span className={styles.badge}>{badge}</span>}

      <h3>{title}</h3>

      {description && <p className={styles.desc}>{description}</p>}

      <div className={styles.priceBox}>
        <h2 className={styles.price}>${price}</h2>
        <span>{subtitle || "MXN"}</span>
      </div>

      <ul>
        {features.map((f, i) => (
          <li key={i}>
            <span className={styles.check}>✔</span> {f}
          </li>
        ))}
      </ul>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        {cta || "Elegir plan"}
      </a>
    </div>
  );
}