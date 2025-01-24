import React from "react";
import styles from "./styles.module.scss";

const Form: React.FC = () => (
  <form className={styles.container} aria-labelledby="newsletter-title">
    <div className={styles.title}>
      <h3 id="newsletter-title">Inscreva-se na nossa newsletter</h3>
      <p>
        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
        da Econverse.
      </p>
    </div>
    <div>
      <fieldset>
        <label htmlFor="name" className="visually-hidden">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          name="name"
          required
          aria-required="true"
        />
        <label htmlFor="email" className="visually-hidden">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          name="email"
          required
          aria-required="true"
        />
        <button type="submit">INSCREVER</button>
      </fieldset>
      <label className={styles.customCheckbox}>
        <input type="checkbox" name="terms" required aria-required="true" />
        <span className={styles.checkboxBox}></span>
        Aceito os termos e condições
      </label>
    </div>
  </form>
);

export default Form;
