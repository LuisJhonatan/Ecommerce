import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CardsContainer.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/slices/cartSlice";

export const CardsContainer = ({ option }) => {
  const products = useSelector((state) => state.products.product);
  const [style, setStyle] = useState({
    
  })
  const dispatch = useDispatch();

  const addToCart = (i) => {
    console.log(products);
    const cart = {
      prod: products[i].data,
      id: products[i].id,
      cantidad: 1,
    };
    console.log(cart);
    dispatch(addCart(cart));
  };

  useEffect(() => {
    if (option === "Nombre (a-z)") {
      console.log(option);

      
      /*console.log(products);
      const miArreglo = [];
      let arr = {};
      console.log("Cartera 1" > "Cartera 2");
     for (let i = 0; i < products.length; i++) {
        for (let j = 1; j < products.length; j++) {
          if(products[i].data.nombre < products[j].data.nombre ) {
            arr = products[i]
          }          
        }        

      }*/

    }
  }, [option]);

  return (
    <article className={styles.cardContainer}>
      {products &&
        products.map((prod, i) => (
          <section key={i} >
            <Link to={`/productos/${prod.id}`} className={styles.prodInfo} >
              <img src={prod.data.imagen[0]} alt={prod.data.name} />
              <h3>{prod.data.nombre}</h3>
              <p>color: {prod.data.color}</p>
              <div className={styles.priceStock}>
                <span>S/{prod.data.precio}</span>
                <span>stock: {prod.data.stock}</span>
              </div>
            </Link>

            <button className={styles.addToCart} onClick={() => addToCart(i)}>
              <FaShoppingCart />
              <span>Agregar al carrito</span>
            </button>
          </section>
        ))}
    </article>
  );
};
