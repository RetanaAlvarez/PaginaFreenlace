import PricingCard from "../../components/layout/PricingCard/PricingCard";
import { plansData } from "../../data/plansData";
import styles from "./Plan.module.css";

export default function Plan() {
    return (
        <section className={styles.pricing} id="precios">

            <span className={styles.alert}>
                🔥 Solo 3 espacios disponibles este mes
            </span>

            <h2>Planes de desarrollo web</h2>

            <p className={styles.description}>
                Inversión inicial para crear tu sitio web
            </p>

            <div className={styles.payment}>
                💡 Pago: 50% anticipo y 50% al finalizar
            </div>

            <div className={styles.cards}>
                {plansData.map((plan) => (
                    <PricingCard key={plan.title} {...plan} />
                ))}
            </div>

        </section>
    );
}