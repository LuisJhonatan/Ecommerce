import Slider from "react-slick";

import imagen1 from '../../assets/carousel-image-1.jpg';
import imagen2 from '../../assets/carousel-image-2.jpg';
import imagen3 from '../../assets/carousel-image-3.jpg';

const Carousel = () => {
    const settings = {
        arrows: false,
        className: "",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };
    return (
          <Slider {...settings}>
            <div>
              <img src={imagen1} alt="" />
            </div>
            <div>
              <img src={imagen2} alt="" />
            </div>
            <div>
              <img src={imagen3} alt="" />
            </div>
          </Slider>
    )
}

export default Carousel