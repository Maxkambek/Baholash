import React, { useState } from "react";
import {
  AiOutlineAppstoreAdd,
  AiFillCar,
  AiFillInsurance,
  AiOutlinePartition,
} from "react-icons/ai";
import { TbTransferIn } from "react-icons/tb";
import { BiPieChart, BiTransfer } from "react-icons/bi";
import { RiExchangeFundsLine, RiAuctionLine } from "react-icons/ri";
import { FaHouseDamage } from "react-icons/fa";
import { MdCarRental, MdOutlineManageHistory } from "react-icons/md";
function Objectives() {
  const data = [
    {
      logo: <AiOutlineAppstoreAdd />,
      text: "Внесение имущества в уставной капитал",
    },
    {
      logo: <TbTransferIn />,
      text: "Передача прав собственности",
    },
    {
      logo: <BiPieChart />,
      text: "Оценка с целью переоценки основныхфондов",
    },
    {
      logo: <RiExchangeFundsLine />,
      text: "Внесение имущест${pk}/ва в уставной капитал",
    },
    {
      logo: <AiFillCar />,
      text: "Залог",
    },
    {
      logo: <AiFillInsurance />,
      text: "Страхование",
    },
    {
      logo: <FaHouseDamage />,
      text: "Возмещение ущерба",
    },
    {
      logo: <AiOutlinePartition />,
      text: "Раздел, наследство, дарение",
    },
    {
      logo: <BiTransfer />,
      text: "Купля-продажа",
    },
    {
      logo: <RiAuctionLine />,
      text: "Проведение конкурсов, аукционов, торгов",
    },
    {
      logo: <MdCarRental />,
      text: "Аренда, лизинг",
    },
    {
      logo: <MdOutlineManageHistory />,
      text: "Передача в доверительное управление",
    },
  ];

  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="container">
        <h1 className="otsenki text-lg-start text-center">ЦЕЛИ ОЦЕНКИ</h1>
        <div className="row my-5">
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-6">
                  <div>
                    <div onClick={() => setModal(true)} className="property">
                      <span>{item.logo}</span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {modal ? (
        <>
          <div className="modalcha">
            <div className="modal_h">Внесение имущества в уставной капитал</div>
            <div className="modal_p">
              Целью оценки является определение стоимости объекта оценки, вид
              которой определяется в задании на оценку с учетом предполагаемого
              использования результата оценки.
            </div>
          </div>
          <div onClick={() => setModal(false)} className="modal_shadow"></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Objectives;
