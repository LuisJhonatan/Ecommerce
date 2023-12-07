import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import { FaAngleDown } from "react-icons/fa";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const arrOptions = [
  "Mas recientes",
  "Nombre (a-z)",
  "Nombre (z-a)",
  "Precio mas bajo",
  "Precio mas alto",
];

export const Cards = () => {
  const products = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  const [arrOption, setArrOption] = useState("");

  const handleOption = (e) => {
 
    setOptions(!options);
    setArrOption(e.target.textContent);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.matches(`.${styles.optionsContainer} *`)) {
        setOptions(false);
      }
    };
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <section className={styles.cardContainer}>
      <div className={styles.optionsContainer}>
        <span>ordernar por: </span>
        <button
          onClick={() => setOptions(!options)}
          className={styles.optionsButton}
        >
          {arrOption}
          <FaAngleDown />
        </button>
        {options && (
          <article className={styles.options}>
            {arrOptions.map((opt, i) => (
              <button key={i} onClick={(e) => handleOption(e)}>
                {opt}
              </button>
            ))}
          </article>
        )}
      </div>
      <CardsContainer option={arrOption}/>
    </section>
  );
};
