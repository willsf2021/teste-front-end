import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import arrow from "../../assets/arrow.png";

interface DataItem {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const calculatePrices = (price: number) => {
  const discountedPrice = price * 0.9;
  const installmentValue = price / 2;

  return {
    discountedPrice: discountedPrice.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    installmentValue: installmentValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };
};
const Carousel: React.FC = () => {
  const [products, setProducts] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setProducts(result.products);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  console.log(products);

  const handleLeftClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonLeft} onClick={handleLeftClick}>
        <button>
          <img src={arrow} alt="Rolar a esquerda" />
        </button>
      </div>
      <div className={styles.carousel} ref={carousel}>
        {products?.map((product, index) => {
          const { discountedPrice, installmentValue } = calculatePrices(
            product.price
          );
          return (
            <div className={styles.item} key={index}>
              <div className="image">
                <img
                  className={styles.productPhoto}
                  src={product.photo}
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <span className={styles.productName}>
                  {product.productName}
                </span>
                <div className={styles.pricesContainer}>
                  <span className={styles.oldPrice}>
                    R${" "}
                    {product.price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <span className={styles.newPrice}>R$ {discountedPrice}</span>
                </div>
                <span className={styles.splitPrice}>
                  2x de R$ {installmentValue}
                </span>
                <span className={styles.freeDelivery}>Frete Grátis</span>
              </div>
              <button className={styles.buy}>COMPRAR</button>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonRight} onClick={handleRightClick}>
        <button>
          <img src={arrow} alt="Rolar a direita" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
