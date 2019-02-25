import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return(
        <Slider {...settings}>
            <div>
                <h3>PRESS UP TO LOOK UP!</h3>
            </div>
            <div>
                <h3>PRESS LEFT TO MOVE LEFT!</h3>
            </div>
            <div>
                <h3>PRESS RIGHT TO MOVE RIGHT!</h3>
            </div>
            <div>
                <h3>PRESS DOWN TO DUCK!</h3>
            </div>
        </Slider>
    )
}

export default Carousel;