import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { API_PATH } from "../tools/constants";


const News = () => {
  const [news, setNews] = useState([])

  const getNews = () => {
    axios.get(API_PATH + 'news/')
      .then((res) => {
        setNews(res.data)
      })
  }

  useEffect(() => {
    getNews();
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="News">
      <div className="container">
        <div className="row">
          <div className="col-12 news_header">
            <h1 className="text-lg-start text-center">Следите за нашими новостями</h1>
          </div>
          <Slider {...settings}>
            {news?.map((item, index) => (
              <div key={index} className="news_box">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="news_h">
                      {item.title}
                    </div>
                    <div className="new_p">
                      {item.content}
                    </div>
                  </div>
                  <div className="col-lg-5 mt-lg-0 mt-5">
                    <img className="news_img" src={item.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default News;
