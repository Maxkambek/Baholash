import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_PATH } from "../tools/constants";

const ServiceDetail = () => {
  const pk = useParams();
  console.log(pk)
  const [service, setService] = useState([])
  const getService = () => {
    axios.get(API_PATH + `services/` + pk.pk)
      .then((res) => {
        setService(res.data)
      })
  }

  useEffect(() => {
    getService();
  }, [])


  return (
    <div className="ServiceDetail">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 detail_header_h">
            <h3 className="text-lg-start text-center">{service?.name}</h3>
            <p className="detail_header_p">
              {service?.description}
            </p>
          </div>
          <div className="col-lg-6">
            <img className="img_about" src={service?.image} alt="" />
          </div>
        </div>
        <div className="row mt-5 d-flex justify-content-between">
          <div className="col-lg-5 mt-2">
            <div dangerouslySetInnerHTML={{ __html: service?.text }} />
          </div>
          <div className="col-lg-5 mt-2">
            <div dangerouslySetInnerHTML={{ __html: service?.text_2 }} />
          </div>
          <div className="col-lg-5 mt-2">
            <div dangerouslySetInnerHTML={{ __html: service?.text_3 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
