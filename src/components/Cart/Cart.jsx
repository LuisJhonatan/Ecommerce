import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart } from "../../redux/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdRemoveShoppingCart } from "react-icons/md";

export const Cart = () => {
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
      {cart.length === 0 ? (
        <article className={styles.cartVoid}>
          <MdRemoveShoppingCart className={styles.cartVoidIcon} />
          <p>
            <b>Aun no tienes articulos agregados al carrito</b>
          </p>
          <Link to='/productos'>
            <button className={styles.cartVoidButton}>Explorar articulos</button>
          </Link>
        </article>
      ) : (
        <>
          <div className={styles.prodsPay}>
            <section>
              {cart.map((prod, i) => (
                <article key={i} className={styles.prodContainer}>
                  <img src={prod.prod.imagen[0]} alt={prod.prod.nombre} />
                  <div>
                    <Link
                      to={`/productos/${prod.id}`}
                      className={styles.nameLink}
                    >
                      <h2>{prod.prod.nombre}</h2>
                    </Link>
                    <span>color: {prod.prod.color}</span>
                    <br />
                    <span>Cantidad: {prod.cantidad}</span>
                    <p>S/{prod.prod.precio}</p>
                  </div>

                  <div>
                    <span>
                      <b>Total:</b>
                    </span>
                    <h3>S/{(prod.cantidad * prod.prod.precio).toFixed(2)} </h3>
                  </div>
                  <div>
                    <RiDeleteBin6Line
                      onClick={(e) => deleteProd(e, i)}
                      className={styles.deleteIcon}
                    />
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
        </>
      )}
    </main>
  );
};

/* return (
    <main className={styles.main}>
      <div className={styles.prodsPay}>
        <section>
          {cart.length === 0 ? (
            <article className={styles.cartVoid}>
              <MdRemoveShoppingCart />
              <p>Aun no tienes articulos agregados al carrito</p>
              <Link>
                <button>Explorar articulos</button>
              </Link>
            </article>
          ) : (
            cart.map((prod, i) => (
              <article key={i} className={styles.prodContainer}>
                <img src={prod.prod.imagen[0]} alt={prod.prod.nombre} />
                <div>
                  <Link
                    to={`/productos/${prod.id}`}
                    className={styles.nameLink}
                  >
                    <h2>{prod.prod.nombre}</h2>
                  </Link>
                  <span>color: {prod.prod.color}</span>
                  <br />
                  <span>Cantidad: {prod.cantidad}</span>
                  <p>S/{prod.prod.precio}</p>
                </div>

                <div>
                  <span>
                    <b>Total:</b>
                  </span>
                  <h3>S/{(prod.cantidad * prod.prod.precio).toFixed(2)} </h3>
                </div>
                <div>
                  <RiDeleteBin6Line
                    onClick={(e) => deleteProd(e, i)}
                    className={styles.deleteIcon}
                  />
                </div>
              </article>
            ))
          )}
        </section>
        {cart.length === 0 || (
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
        )}
      </div>
    </main>
  ); */
