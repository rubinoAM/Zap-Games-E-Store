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
            <div className="slick-image">
                <img className="carousel-img" src="/images/home1.jpg" />
                <h3>PRESS UP TO LOOK UP!</h3>
            </div>
            <div className="slick-image">
                <img className="carousel-img" src="/images/home2.jpg" />
                <h3>PRESS LEFT TO MOVE LEFT!</h3>
            </div>
            <div className="slick-image">
                <img className="carousel-img" src="/images/home3.jpg" />
                <h3>PRESS RIGHT TO MOVE RIGHT!</h3>
            </div>
            <div className="slick-image">
                <img className="carousel-img" src="/images/home4.jpg" />
                <h3>PRESS DOWN TO DUCK!</h3>
            </div>
        </Slider>
    )
}

export default Carousel;