import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./styles.module.scss";

interface FormData {
  name: string;
  email: string;
  terms: boolean;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    terms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Você deve aceitar os termos e condições.");
      return;
    }

    alert(`Formulário enviado com sucesso! 
      Nome: ${formData.name} 
      E-mail: ${formData.email}`);
  };

  return (
    <form
      className={styles.container}
      aria-labelledby="newsletter-title"
      onSubmit={handleSubmit}
    >
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">INSCREVER</button>
        </fieldset>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            name="terms"
            required
            aria-required="true"
            checked={formData.terms}
            onChange={handleChange}
          />
          <span className={styles.checkboxBox}></span>
          Aceito os termos e condições
        </label>
      </div>
    </form>
  );
};

export default Form;
