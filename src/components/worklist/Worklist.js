import React from "react";

const Worklist = () => {
  return (
    <div className="worklist">
      <div className="container">
        <h1 className="text-lg-start text-center" id="etap">
          Этапы работы
        </h1>
        <div className="row">
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step1">
              <div className="back_shadow">
                <h4>1</h4>
                <p>Получение задачи от Заказчика</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step2">
              <div className="back_shadow">
                <h4>2</h4>
                <p>Бесплатный предварительный расчет возможной стоимости актива</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step3">
              <div className="back_shadow">
                <h4>3</h4>
                <p>Итоговая формулировка и проработка задачи и ее процесса решения</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step4">
              <div className="back_shadow">
                <h4>4</h4>
                <p>Расчет стоимости и
                  подготовка отчета об оценке</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step5">
              <div className="back_shadow">
                <h4>5</h4>
                <p>Согласование
                  предварительных результатов
                  и отчета с Заказчиком</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 my-3">
            <div className="step step6">
              <div className="back_shadow">
                <h4>6</h4>
                <p>Сдача итоговой работы. Печать нужного количества экземпляров отчета.
                  Доставка Заказчику
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Worklist;
