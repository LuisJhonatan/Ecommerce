import Carousel from "./Carousel";
import Destacados from "./Destacados";
import style from "./inicio.module.css";

const Inicio = () => {
  
  return (
    <>
      <div className={`${style.carouselContainer}`}>
        <Carousel />
        <br />
        <hr />
      </div>
      <Destacados />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Inicio