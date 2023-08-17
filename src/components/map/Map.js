import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid orange",
  boxShadow: 24,
  p: 4,
};
function Map() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="container">
        <div className="map_part pt-lg-5 pt-0 pb-5">
          <div className="info">
            <h1>Ждем вас по адресу:</h1>
            <b>
              <FaLocationDot /> город Ташкент, Алмазарский район, МСГ "Табассум", Кора-камиш 2/4, дом 30, кв. 46
            </b>
            <p>График работы: понедельник – пятница с 9:00 до 19:00</p>
            <b>
              <BsTelephoneFill /> +998999999999
            </b>
            <p>Остались вопросы?</p>
            <button onClick={handleOpen}>Остались вопросы?</button>
          </div>
          <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <h2 className="text-center">Обратная связь</h2>
                      <p className="text-center">Ответим на любой вопрос</p>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <div className="modal_info_part">
                        <input required type="text" placeholder="Name" />
                        <input required type="tel" placeholder="Phone number" />
                      </div>
                      <button onClick={handleClose} className="send">
                        Отправить
                      </button>
                    </Typography>
                  </Box>
                </Modal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6167.748557078694!2d69.24952972623407!3d41.3165582861041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2z0KXQuNC70YLQvtC9LCDQotCw0YjQutC10L3RgiDQodC40YLQuA!5e0!3m2!1sru!2s!4v1690999544738!5m2!1sru!2s"
            width="800"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
