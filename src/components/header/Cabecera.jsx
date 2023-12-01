import { Link } from "react-router-dom";
import style from "./header.module.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

const Cabecera = () => {
  const cart =  useSelector(state => state.cart.cartp)

  let cartCount = 0

  cart.map(el => cartCount += el.cantidad)
  
  //Si activeBtn y activeMenu son true se muestra el menu
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleBtnClick = () => {
    setActiveBtn(!activeMenu);
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    //El menu se cierra no solo presionas la "X" tambien fuera del contenedor
    const closeMenu = (e) => {
      if (!e.target.matches(`.${style.btnMenu} *`)) {
        setActiveBtn(false);
        setActiveMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className={style.containerHeader}>
      <header className={style.header}>
        <button onClick={handleBtnClick} className={style.btnMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className={activeBtn ? `bi bi-list ${style.none}` : "bi bi-list"}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className={activeBtn ? "bi bi-list" : `bi bi-list ${style.none}`}
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={style.icons}>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </Link>
          <Link to="/cart" className={style.cartCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span >{cartCount}</span>
          </Link>
        </div>
      </header>
      <div className={`${style.menu} ${activeMenu ? style.isActive : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </div>
  );
};

export default Cabecera;
