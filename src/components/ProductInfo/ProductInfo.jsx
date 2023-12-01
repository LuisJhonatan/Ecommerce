import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ProductInfo.module.css";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/slices/cartSlice";

export const ProductInfo = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products.product).filter(
    (prod) => prod.id === id
  );

  const addToCart = () => {
    const cart = {
      prod: prod[0].data,
      cantidad: count,
    };
    console.log(cart);
    dispatch(addCart(cart));

  };

  const cart =  useSelector(state => state.cart.cartp)

  console.log(cart);


  return (
    <main>
      {prod.length === 0 ? (
        "cargando..."
      ) : (
        <section className={styles.infoContainer}>
          <article className={styles.imgContainer}>
            <img src={prod[0].data.imagen[0]} alt="" />
            <div className={styles.imgSmall}>
              <img src={prod[0].data.imagen[0]} alt="" />
              <img src="https://i.ibb.co/tMWxXmF/Captura.jpg" alt="" />
              <img src={prod[0].data.imagen[0]} alt="" />
            </div>
          </article>
          <article>
            <h2>{prod[0].data.nombre}</h2>
            <h3>S/{prod[0].data.precio}</h3>
            <p>
              {prod[0].data.descripcion} + Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Asperiores voluptates explicabo
              itaque harum! Expedita reiciendis necessitatibus labore dicta
              quibusdam quisquam ducimus, libero sapiente consequatur enim eius
              magnam ea numquam error?
            </p>

            <div className={styles.countContainer}>
              <button onClick={() => setCount(count - 1)} disabled={count < 2}>
                -
              </button>
              <span>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                disabled={count === parseInt(prod[0].data.stock)}
              >
                +
              </button>
            </div>

            <button className={styles.addToCart} onClick={addToCart}>
              <FaShoppingCart />
              <span>Agregar al carrito</span>
            </button>
          </article>
        </section>
      )}
    </main>
  );
};
