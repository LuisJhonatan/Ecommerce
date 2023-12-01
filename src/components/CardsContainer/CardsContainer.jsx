import React from "react";
import { useSelector } from "react-redux";
import styles from "./CardsContainer.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardsContainer = () => {
  const products = useSelector((state) => state.products.product);

  return (
    <article className={styles.cardContainer}>
      {products &&
        products.map((prod, i) => (
          <section key={i}>
            <Link to={`/productos/${prod.id}`} className={styles.prodInfo}>
              <img src={prod.data.imagen[0]} alt={prod.data.name} />
              <h3>{prod.data.nombre}</h3>
              <div className={styles.priceStock}>
                <span>S/{prod.data.precio}</span>
                <span>stock: {prod.data.stock}</span>
              </div>
            </Link>

            <button className={styles.addToCart}>
              <FaShoppingCart />
              <span>Agregar al carrito</span>
            </button>
          </section>
        ))}
    </article>
  );
};
