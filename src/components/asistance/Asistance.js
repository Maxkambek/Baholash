import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../../tools/constants";

const SimpleSlider = () => {
  const nav = useNavigate();
  const [service, setService] = useState([])

  const getService = () => {
    axios.get(API_PATH + 'services/')
      .then((res) => {
        setService(res.data)
      })
  }

  useEffect(() => {
    getService();
  }, [])

  return (
    <div className="father_slide">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-lg-start text-center">НАШ УСЛУГИ </h1>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <>
            {service?.map((item, index) => (
              <SwiperSlide key={index} onClick={() => nav(`/detail/${item.id}`)}>
                <div className="s_f">
                  <div className="slide">
                    <img
                      className="image"
                      src={`https://complexvaluation.uz/assets/img/index/icon/${index + 1}.png`}
                      alt="Slide 1"
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSlider;
