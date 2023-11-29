
import imagen1 from "../../assets/facebook.svg"
import imagen2 from "../../assets/instagram.svg"
import imagen3 from "../../assets/tiktok.svg"

import style from "./footer.module.css"

const Redes = () => {
    
  return (
    <section className={`${style.containerRedes} container`} >
        <a href="https://www.facebook.com/IwoDotA" target="_blank" rel="noreferrer"> <img src={imagen1} alt="facebook" /></a>
        <a href="https://www.instagram.com/iwobeka/" target="_blank" rel="noreferrer"> <img src={imagen2} alt="instagran" /></a>
        <a href="https://www.tiktok.com/@iwobk" target="_blank" rel="noreferrer"> <img src={imagen3} alt="tik-tok" /></a>
    </section>
  )
}

export default Redes