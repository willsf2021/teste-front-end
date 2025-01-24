import React from "react";
import styles from "./styles.module.scss";
import truck from "../../assets/headerAssets/truck.png";
import shieldCheck from "../../assets/headerAssets/shieldCheck.png";
import creditCard from "../../assets/headerAssets/creditCard.png";
import searchIcon from "../../assets/headerAssets/searchIcon.png";
import groupIcon from "../../assets/headerAssets/groupIcon.png";
import heartIcon from "../../assets/headerAssets/heartIcon.png";
import cartIcon from "../../assets/headerAssets/cartIcon.png";
import userIcon from "../../assets/headerAssets/userIcon.png";
import logo from "../../assets/logo.png";

const Header: React.FC = () => (
  <header className={styles.header}>
    {/* Topo do header */}
    <div className={styles.topHeader}>
      <div className={styles.item}>
        <img src={shieldCheck} alt="Compra 100% segura" />
        <p>
          Compra <span>100% segura</span>
        </p>
      </div>
      <div className={styles.item}>
        <img src={truck} alt="Frete grátis acima de R$200" />
        <p>
          <span>Frete grátis</span> acima de R$200
        </p>
      </div>
      <div className={styles.item}>
        <img src={creditCard} alt="Parcele suas compras" />
        <p>
          <span>Parcele</span> suas compras
        </p>
      </div>
    </div>

    <div className={styles.divisor}></div>

    {/* Parte central com logo e busca */}
    <div className={styles.midHeader}>
      <img src={logo} className={styles.logo} alt="Logo da loja" />

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="O que você está buscando?"
          aria-label="Campo de busca"
        />
        <img src={searchIcon} alt="Ícone de busca" />
      </div>

      <div className={styles.navItems}>
        <img src={groupIcon} alt="Ícone de grupo" />
        <img src={heartIcon} alt="Ícone de favoritos" />
        <img src={userIcon} alt="Ícone de usuário" />
        <img src={cartIcon} alt="Ícone do carrinho" />
      </div>
    </div>

    <div className={styles.divisor}></div>

    {/* Menu inferior */}
    <nav className={styles.bottomHeader}>
      <ul>
        <li>
          <a href="/categorias">TODAS CATEGORIAS</a>
        </li>
        <li>
          <a href="/supermercado">SUPERMERCADO</a>
        </li>
        <li>
          <a href="/livros">LIVROS</a>
        </li>
        <li>
          <a href="/moda">MODA</a>
        </li>
        <li>
          <a href="/lancamentos">LANÇAMENTOS</a>
        </li>
        <li>
          <a href="/ofertas">OFERTAS DO DIA</a>
        </li>
        <li>
          <a href="/assinatura">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.52571 15.3137C3.54519 15.3959 3.58109 15.4732 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.7089C3.89039 15.7517 3.97108 15.7793 4.05483 15.7901C4.13857 15.8009 4.22363 15.7947 4.30489 15.7717C8.03061 14.743 11.9654 14.7426 15.6913 15.7706C15.7725 15.7935 15.8576 15.7998 15.9413 15.789C16.025 15.7782 16.1056 15.7506 16.1784 15.7079C16.2512 15.6651 16.3146 15.6081 16.3647 15.5402C16.4149 15.4723 16.4508 15.395 16.4703 15.3129L18.4616 6.8506C18.4883 6.73732 18.4828 6.61884 18.4457 6.50851C18.4087 6.39818 18.3416 6.30039 18.252 6.22615C18.1623 6.1519 18.0538 6.10415 17.9385 6.08828C17.8232 6.07241 17.7057 6.08904 17.5994 6.13631L13.6475 7.89269C13.5048 7.95611 13.3436 7.96382 13.1955 7.91429C13.0474 7.86476 12.9232 7.76159 12.8474 7.62508L10.5464 3.48334C10.4923 3.38591 10.4131 3.30472 10.317 3.2482C10.2209 3.19167 10.1115 3.16187 10 3.16187C9.88857 3.16187 9.77914 3.19167 9.68308 3.2482C9.58701 3.30472 9.50781 3.38591 9.45368 3.48334L7.15272 7.62508C7.07688 7.76159 6.95269 7.86476 6.8046 7.91429C6.6565 7.96381 6.49523 7.95611 6.35253 7.89269L2.40008 6.13604C2.29375 6.08878 2.17634 6.07215 2.06107 6.08801C1.94579 6.10386 1.83724 6.15158 1.74762 6.2258C1.658 6.30001 1.59088 6.39777 1.55381 6.50806C1.51674 6.61836 1.51119 6.73681 1.5378 6.85008L3.52571 15.3137Z"
                stroke="#9F9F9F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ASSINATURA
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
