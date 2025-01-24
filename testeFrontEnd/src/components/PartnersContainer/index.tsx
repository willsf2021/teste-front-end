import React from "react";
import styles from "./styles.module.scss";
import Partner from "../Partner";

const PartnersContainer: React.FC = () => (
  <section
    className={styles.container}
    aria-labelledby="partners-container-title"
  >
    {" "}
    <h2 id="partners-container-title" className="visually-hidden">
      Nossos Parceiros
    </h2>
    <Partner />
    <Partner />
  </section>
);

export default PartnersContainer;
