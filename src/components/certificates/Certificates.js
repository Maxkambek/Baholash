import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
function Certificates() {
  return (
    <div className="certificates">
      <div className="container">
        <h1 className="text-lg-start text-center">Сертификаты</h1>
        <Slider {...settings}>
          <div className="cer1 cer">
            <div>
              <img
                className="image"
                src="../../images/cer1.JPG"
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="cer2 cer">
            <div>
              <img
                className="image"
                src="../../images/cer2.jpg"
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="cer3 cer">
            <div>
              <img
                className="image"
                src="../../images/cer3.JPG"
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="cer4 cer">
            <div>
              <img
                className="image"
                src="../../images/cer4.png"
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="cer5">
            <div>
              <img
                className="image"
                src="../../images/cer5.jpg"
                alt="Slide 2"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Certificates;
