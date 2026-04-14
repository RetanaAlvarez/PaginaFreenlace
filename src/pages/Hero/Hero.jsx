import { homeData } from "../../data/homeData";

import heroImg from "../../assets/image.png";

import styles from "./Hero.module.css";

function Hero() {
  const { badge, title, description, bullets, botones } = homeData.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.left}>
          <span className={styles.badge}>{badge}</span>
          <h1 className={styles.title}>
            {title.normal}
            <span className={styles.highlight}>
              {title.highlight}
            </span>
          </h1>

          <p className={styles.description}>{description}</p>

          <ul className={styles.list}>
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className={styles.buttons}>
            {botones.map((btn, index) => (
              <a key={index} href={btn.ruta}>
                {btn.nombre}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <img src={heroImg} alt="FotoHero" />
        </div>

      </div>
    </section>
  )
};

export default Hero;