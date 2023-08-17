import React from "react";
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

function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="header">
        <div className="cloud">
          <div className="container">
            <div className="header_left_side">
              <h2>
                <span>Независимая <br></br>
                  оценочная компания</span>
              </h2>
              <p>Оценим все: от автомобиля
                до интеллектуальной собственности</p>
              <p>Отчет об оценке в соответствии с ФЗ "Об оценочной деятельности" и Федеральными стандартами оценки</p>
              <p>В сжатые сроки подберем эксперта нужной квалификации.</p>
              <button onClick={handleOpen}>Получить расчет</button>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
