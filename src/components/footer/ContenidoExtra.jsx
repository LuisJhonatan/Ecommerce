import React from 'react'

import imagen1 from "../../assets/lock.svg"
import imagen2 from "../../assets/hand-index.svg"
import imagen3 from "../../assets/truck.svg"

import style from "./footer.module.css"

const ContenidoExtra = () => {

  return (
    <>
        <article className={style.contenidoExtra}>
            <img src={imagen1} alt="lock" />
            <p>Pagos 100% seguros</p>
        </article>
        <article className={style.contenidoExtra}>
            <img src={imagen2} alt="hand" />
            <p>Compra fácil en 3 pasos</p>
        </article>
        <article className={style.contenidoExtra}>
            <img src={imagen3} alt="truck" />
            <p>Envío a Lima y provincias</p>
        </article>
    </>
  )
}

export default ContenidoExtra