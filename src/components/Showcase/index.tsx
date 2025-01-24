import Carousel from "../Carousel";
import styles from "./styles.module.scss";

interface ShowcaseProps {
  list?: boolean;
}

const Showcase: React.FC<ShowcaseProps> = ({ list }) => {
  return (
    <article className={styles.showcaseContainer}>
      <div className={styles.title}>
        <div className={styles.divisor}></div>
        <h2>Produtos relacionados</h2>
        <div className={styles.divisor}></div>
      </div>
      {list ? (
        <nav aria-label="Categorias de produtos">
          <ul>
            <li>CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>
        </nav>
      ) : (
        <a
          className={styles.viewAll}
          aria-label="Ver todos os produtos relacionados"
        >
          Ver todos
        </a>
      )}
      <Carousel />
    </article>
  );
};

export default Showcase;
