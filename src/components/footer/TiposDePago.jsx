import React from 'react'

import imagen1 from "../../assets/visa.svg"
import imagen2 from "../../assets/american-express-1.svg"
import imagen3 from "../../assets/mastercard-4.svg"
import imagen4 from "../../assets/pago-efectivo-2020.svg"

import style from "./footer.module.css"

const TiposDePago = () => {
  return (
    <section className={style.pagosContainer}>
        <div><img src={imagen1} alt="visa" /></div>
        <div><img src={imagen2} alt="amex" /></div>
        <div><img src={imagen3} alt="mastercard" /></div>
        <div><img src={imagen4} alt="pagoefectivo" /></div>
    </section>
  )
}

export default TiposDePago