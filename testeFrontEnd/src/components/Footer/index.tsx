import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <div className={styles.topFooter}>
      <section className={styles.rightTopFooter}>
        <img src={logo} alt="Logo da Econverse" className={styles.logo} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <nav
          className={styles.socialMediaLinks}
          aria-label="Redes sociais da Econverse"
        >
          <a
            href="https://www.instagram.com/econverse.ag/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Econverse"
          >
            <img src={instagramIcon} alt="Logo do Instagram" />
          </a>
          <a
            href="https://www.facebook.com/agenciaeconverse/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Econverse"
          >
            <img src={facebookIcon} alt="Logo do Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/econverse/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn da Econverse"
          >
            <img src={linkedinIcon} alt="Logo do Linkedin" />
          </a>
        </nav>
      </section>
      <div className={styles.divisor} aria-hidden="true"></div>
      <section className={styles.leftTopFooter}>
        <nav aria-label="Links institucionais">
          <ul>
            <li>
              <a href="">
                <span>Institucional</span>
              </a>
            </li>
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="">Movimento</a>
            </li>
            <li>
              <a href="">Trabalhe conosco</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Ajuda e suporte">
          <ul>
            <li>
              <a href="">
                <span>Ajuda</span>
              </a>
            </li>
            <li>
              <a href="">Suporte</a>
            </li>
            <li>
              <a href="">Fale Conosco</a>
            </li>
            <li>
              <a href="">Perguntas Frequentes</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Termos e políticas">
          <ul>
            <li>
              <a href="">
                <span>Termos</span>
              </a>
            </li>
            <li>
              <a href="">Termos e Condições</a>
            </li>
            <li>
              <a href="">Política de Privacidade</a>
            </li>
            <li>
              <a href="">Troca e Devolução</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
    <div className={styles.bottomFooter}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  </footer>
);

export default Footer;
