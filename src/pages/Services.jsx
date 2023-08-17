import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH } from "../tools/constants";
import axios from "axios";

const Services = () => {
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
    <div className="Services">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1>НАШ УСЛУГИ</h1>
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-between">
          {service?.map((item, index) => (
            <div key={index} className="col-lg-4 col-6 mb-4 ">
              <div onClick={() => nav(`/detail/${item.id}`)} className="service_boc">
                <img className="w-100" src={item.image} alt="" />
                <div className="service_text">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
