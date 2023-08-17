import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4 address_footer">
            <p>
            город Ташкент, Алмазарский район, МСГ "Табассум", Кора-камиш 2/4, дом 30, кв. 46
            </p>
            <p>+998 94 654-32-00</p>
            <p>+998 33 373-33-33</p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center">
            <p>Главный</p>
            <p>О нас</p>
            <p>Услуги</p>
            <p>Контакты</p>
          </div>
          <div className="col-lg-4 footer_qr">
            <img className="footer_qrcode" src="/images/qr.jpg" alt="" />
            <p>biznesreja@yandex.ru Работаем с 9:00 до 19:00</p>
            <p>Сканируй QR-код чтобы найти местоположение в карте</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
