import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";

const Brand: React.FC = () => (
  <section className={styles.container}>
    <img src={logo} alt="" />
  </section>
);

export default Brand;
