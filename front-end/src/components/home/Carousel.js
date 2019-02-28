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
                <img alt="" className="carousel-img" src="/images/home6.jpg" />
            </div>
            <div className="slick-image">
                <img alt="" className="carousel-img" src="/images/home2.jpg" />
            </div>
            <div className="slick-image">
                <img alt="" className="carousel-img" src="/images/home3.jpg" />
            </div>
            <div className="slick-image">
                <img alt="" className="carousel-img" src="/images/home5.jpg" />
            </div>
        </Slider>
    )
}

export default Carousel;