import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import arrow from "../../assets/arrow.png";
import close from "../../assets/close.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

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
  const [selectedProduct, setSelectedProduct] = useState<DataItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
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

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const formatQuantity = (quantity: number): string => {
    if (quantity < 10) {
      return quantity.toString().padStart(2, "0");
    }
    return quantity.toString();
  };

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

  const handleBuyClick = (product: DataItem) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonLeft} onClick={handleLeftClick}>
        <button className={styles.left}>
          <img className={styles.left} src={arrow} alt="Rolar a esquerda" />
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
                  alt={product.productName}
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
              <button
                className={styles.buy}
                onClick={() => handleBuyClick(product)}
              >
                COMPRAR
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonRight} onClick={handleRightClick}>
        <button className={styles.right}>
          <img src={arrow} alt="Rolar a direita" />
        </button>
      </div>

      {isPopupOpen && selectedProduct && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={closePopup}>
              <img src={close} alt="Fechar" />
            </button>
            <div>
              <img
                className={styles.popupImage}
                src={selectedProduct.photo}
                alt={selectedProduct.productName}
              />
            </div>
            <div className={styles.rightSide}>
              <div className={styles.nameAndPrice}>
                <h3>{selectedProduct.productName}</h3>
                <p className={styles.price}>
                  R${" "}
                  {selectedProduct.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className={styles.descriptionAndDetails}>
                <p className={styles.descriptionShort}>
                  {selectedProduct.descriptionShort}
                </p>
                <a href="/detalhes">
                  <span>Veja mais detalhes do produto &gt;</span>
                </a>
              </div>
              <div className={styles.manageAndBuy}>
                <div className={styles.increaseDecrease}>
                  <button onClick={decreaseQuantity}>
                    <img src={minus} alt="Diminuir quantidade" />
                  </button>
                  <span>{formatQuantity(quantity)}</span>
                  <button onClick={increaseQuantity}>
                    <img src={plus} alt="Aumentar quantidade" />
                  </button>
                </div>
                <a href="">COMPRAR</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
