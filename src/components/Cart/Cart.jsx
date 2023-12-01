import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [count, setCount] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartp);
  const navigate = useNavigate();

  useEffect(() => {
    montoTotal();
  }, []);

  const montoTotal = () => {
    let subtotal = 0;
    cart.forEach((prod) => {
      subtotal += parseFloat((prod.cantidad * prod.prod.precio).toFixed(2));
    });
    console.log(cart);
    setSubTotal(subtotal.toFixed(2));
  };

  const deleteProd = (e, i) => {
    console.log(cart[i]);
    const result = cart.filter((prod) => prod !== cart[i]);
    dispatch(updateCart(result));
    navigate(0);
  };

  return (
    <main className={styles.main}>
      <div className={styles.prodsPay}>
        <section>
          {cart.length === 0
            ? "Cargando"
            : cart.map((prod, i) => (
                <article key={i} className={styles.prodContainer}>
                  <img src={prod.prod.imagen[0]} alt="" />
                  <div>
                    <h2>{prod.prod.nombre}asda</h2>
                    <span>color: {prod.prod.color}</span>
                    <p>S/{prod.prod.precio}</p>
                  </div>
                  <div className={styles.countContainer}>
                    <button
                      onClick={() => setCount(count - 1)}
                      disabled={count < 2}
                    >
                      -
                    </button>
                    <span>{prod.cantidad}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      disabled={count === 5}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <h3>S/{(prod.cantidad * prod.prod.precio).toFixed(2)} </h3>
                  </div>
                  <div>
                    <RiDeleteBin6Line onClick={(e) => deleteProd(e, i)} />
                  </div>
                </article>
              ))}
        </section>
        <section className={styles.pay}>
          <h2>Resumen</h2>
          <div className={`${styles.spaceBw}`}>
            <span>Subtotal:</span>
            <span>S/{subTotal}</span>
          </div>
          <div className={`${styles.spaceBw}`}>
            <span>Gastos de envío:</span>
            <span>S/0.00</span>
          </div>
          <hr />
          <div className={`${styles.spaceBw}`}>
            <span>Total a pagar: </span>
            <span>S/{subTotal}</span>
          </div>
          <button className={styles.payProd}>
            <span>Pagar</span>
          </button>
        </section>
      </div>
    </main>
  );
};
