import React from "react";
import styles from "./styles.module.scss";

const Partner: React.FC = () => (
  <aside
    className={styles.partnerContainer}
    aria-label="Parceiros"
    aria-labelledby="partners-section"
  >
    <div className={styles.textMask}>
      <h2 id="partners-section">Parceiros</h2>
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <a href="/parceiros" aria-label="Confira todos os parceiros">
        CONFIRA
      </a>
    </div>
  </aside>
);

export default Partner;
