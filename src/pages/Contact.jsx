import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="row">
          <div className="col-12 contact_h">Связаться с нами</div>
          <div className="col-lg-3 col-6">
            <div className="contact_box">
              <div className="img_box">
                <img src="/images/Calling.png" alt="" />
              </div>
              <div className="contact_box_h">Телефон номер</div>
              <div className="contact_box_p">+998 (93) 333-33-33</div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="contact_box">
              <div className="img_box">
                <img src="/images/Calendar.svg" alt="" />
              </div>
              <div className="contact_box_h">Время работы</div>
              <div className="contact_box_p">
                Понедельник - суббота с 9:00 до 18: 00
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="contact_box">
              <div className="img_box">
                <img src="/images/Location.svg" alt="" />
              </div>
              <div className="contact_box_h">Адрес</div>
              <div className="contact_box_p">
                город Ташкент, Алмазарский район, МСГ "Табассум", Кора-камиш 2/4, дом 30, кв. 46
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="contact_box">
              <div className="img_box">
                <img src="/images/Message.svg" alt="" />
              </div>
              <div className="contact_box_h">Email</div>
              <div className="contact_box_p">info@accesment.uz</div>
            </div>
          </div>
        </div>
        <div className="map mt-5">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5988.889777652309!2d69.210104!3d41.364418!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzUxLjkiTiA2OcKwMTInMzYuNCJF!5e0!3m2!1sru!2s!4v1691489969800!5m2!1sru!2s"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
