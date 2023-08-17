import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  border: "2px solid #011835",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const [burger, setBurger] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const nav = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setNav = (id) => {
    setBurger(false);
    if (id === 1) {
      nav("/");
    }
    if (id === 2) {
      nav("/about");
    }
    if (id === 3) {
      nav("/services");
    }
    if (id === 4) {
      nav("/contact");
    }
  };

  return (
    <div>
      <div className={isScrolled ? "father_navbar scrolled" : "father_navbar"}>
        <div className="container">
          <div className="row navbar">
            <div className="col-2">
              <a href="/">
                <img className="nav_logo" src="logo.png" />
              </a>
            </div>
            <div className={`col-6  nav_a_box ${burger ? "active" : ""}`}>
              <ul className="row_list">
                <li onClick={() => setNav(1)} className="col-3">
                  Главный
                </li>
                <li onClick={() => setNav(2)} className="col-3">
                  О нас{" "}
                </li>
                <li onClick={() => setNav(3)} className="col-3">
                  Услуги
                </li>
                <li onClick={() => setNav(4)} className="col-3">
                  Контакты
                </li>
              </ul>
              <a
                className="nav_tel me-lg-4 me-0 d-lg-none d-flex justif-content-center align-items-center"
                href=""
              >
                + 9989 99999999
              </a>
              <button
                className="d-lg-none d-flex justif-content-center align-items-center"
                onClick={handleOpen}
              >
                Обратная связь
              </button>
            </div>
            <div className={`col-4 d-lg-flex d-none justify-content-end`}>
              <div className="ms-4 d-flex justify-content-between align-items-center">
                <a className="nav_tel me-4" href="">
                  + 9989 99999999
                </a>
                <button onClick={handleOpen}>Обратная связь</button>
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
            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger ? "burgered" : ""
              }`}
            >
              <div className="burger_up "></div>
              <div className="burger_down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
