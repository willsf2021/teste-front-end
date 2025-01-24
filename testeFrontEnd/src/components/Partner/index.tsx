import React from "react";
import styles from "./styles.module.scss";

const Partner: React.FC = () => (
  
    <aside className={styles.partnerContainer} aria-label="Parceiros">
      <div className={styles.textMask}>
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <a href="/parceiros">CONFIRA</a>
      </div>
    </aside>
    
);

export default Partner;
