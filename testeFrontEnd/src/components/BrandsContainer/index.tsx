import React from "react";
import styles from "./styles.module.scss";
import Brand from "../Brand";

const BrandsContainer: React.FC = () => (
  <section className={styles.container}>
    <h2>Navegue por marcas</h2>
    <div className={styles.logos}>
      <Brand />
      <Brand />
      <Brand />
      <Brand />
      <Brand />
    </div>
  </section>
);

export default BrandsContainer;
