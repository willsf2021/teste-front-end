import React from "react";
import styles from "./styles.module.scss";
import Partner from "../Partner";

const PartnersContainer: React.FC = () => (
  <section className={styles.container}>
    <Partner />
    <Partner />
  </section>
);

export default PartnersContainer;
