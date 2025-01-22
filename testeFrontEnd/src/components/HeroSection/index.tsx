import React from "react";
import styles from "./styles.module.scss";

const HeroSection: React.FC = () => (
  <section className={styles.heroSection} aria-label="Promoções especiais">
    <article className={styles.heroTitle}>
      <h1>Venha conhecer nossas promoções</h1>
      <p>
        <span>50% Off</span> nos produtos
      </p>
      <a href="#produtos" className={styles.heroButton}>
        Ver produtos
      </a>
    </article>
  </section>
);

export default HeroSection;
