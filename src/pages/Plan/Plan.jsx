import PricingCard from "../../components/layout/layout/PricingCard/PricingCard";
import { plansData } from "../../data/plansData";
import styles from "./Plan.module.css";

export default function Plan() {
    return (
        <section className={styles.pricing}>
            <h2>Planes de desarrollo web</h2>

            <p className={styles.description}>
                Inversión inicial para crear tu sitio web
            </p>

            <div className={styles.cards}>
                {plansData.map((plan) => (
                    <PricingCard key={plan.title} {...plan} />
                ))}
            </div>
        </section>
    );
}