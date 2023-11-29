import React from 'react'
import Extra from './Extra'
import Redes from './Redes'
import TiposDePago from './TiposDePago'
import Terminos from './Terminos'

const Footer = () => {
  return (
    <footer>
        <Extra />
        <hr />
        <Redes />
        <hr />
        <TiposDePago />
        <Terminos />
    </footer>
  )
}

export default Footer