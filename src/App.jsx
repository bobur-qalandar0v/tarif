import { useState } from "react";
import Timer from "./Components/Timer";
import WarningIcon from "./assets/Icons/WarningIcon";

function App() {
  const [selectTarif, setSelectTarif] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [discountActive, setDiscountActive] = useState(true);

  const handleTimerEnd = () => {
    setDiscountActive(false);
  };

  const tarifTanlash = (tarif) => {
    if (selectTarif == tarif) {
      setSelectTarif("");
    } else {
      setSelectTarif(tarif);
    }
  };

  const handleBuy = () => {
    if (!selectTarif) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return;
    }

    console.log("Tanlangan tarif: ", selectTarif);
  };

  return (
    <div className="layout">
      {showMessage && (
        <div className="toast-message">
          <p>
            <WarningIcon />
          </p>
          <p>Пожалуйста, выберите один из тарифов!</p>
        </div>
      )}

      <Timer onEnd={handleTimerEnd} />

      <main
        className={`main ${discountActive ? "with-discount" : "no-discount"}`}
      >
        <div className="container">
          <h1 className="main-title">
            Выбери подходящий для себя <span className="title-span">тариф</span>
          </h1>
          <div className="main-wrap">
            <div className="main-left">
              <img className="left-img" src="/man.png" alt="man-img" />
            </div>
            <div className="main-right">
              <div className="right-cards">
                <div className="cards-top">
                  <div
                    className={`forever-card ${
                      selectTarif == "forever" ? "active" : ""
                    }`}
                    onClick={() => tarifTanlash("forever")}
                  >
                    <div className="forever-wrap">
                      <div className="forever-left">
                        <h3 className="forever-title">Навсегда</h3>
                        <div className="price-wrap">
                          <p className="forever-price">
                            {discountActive ? "5990 ₽" : "18 990 ₽"}
                          </p>
                          <p
                            className={`forever-subprice ${
                              !discountActive ? "disabled" : ""
                            }`}
                          >
                            18 990 ₽
                          </p>
                        </div>
                      </div>
                      <div className="forever-right">
                        Для тех, кто хочет всегда быть в форме и поддерживать
                        здоровье
                      </div>
                      <div className="forever-right-responsive">
                        Всегда быть в форме
                      </div>
                    </div>
                    <div className="discount-forever">-70%</div>
                    <p className="xit">хит!</p>
                  </div>
                </div>
                <div className="cards-bottom">
                  {/* -50% */}
                  <div
                    className={`discount-cards ${
                      selectTarif == "month3" ? "active" : ""
                    }`}
                    onClick={() => tarifTanlash("month3")}
                  >
                    <div className="discount50">-50%</div>
                    <div className="price-month-wrap">
                      <p className="month3">3 месяца</p>
                      <div className="price-wrap">
                        <h1 className="price-title">
                          {discountActive ? "1990 ₽" : "3990 ₽"}
                        </h1>
                        <p
                          className={`price-subtitle ${
                            !discountActive ? "disabled" : ""
                          }`}
                        >
                          3990 ₽
                        </p>
                      </div>
                    </div>
                    <div
                      className={`discount-bottom ${
                        !discountActive ? "active" : ""
                      }`}
                    >
                      Привести тело в порядок
                    </div>
                  </div>

                  {/* -40% */}
                  <div
                    className={`discount-cards ${
                      selectTarif == "month1" ? "active" : ""
                    }`}
                    onClick={() => tarifTanlash("month1")}
                  >
                    <div className="discount50">-40%</div>
                    <div className="price-month-wrap">
                      <p className="month3">1 месяца</p>
                      <div className="price-wrap">
                        <h1 className="price-title">
                          {discountActive ? "990 ₽" : "1690 ₽"}
                        </h1>
                        <p
                          className={`price-subtitle ${
                            !discountActive ? "disabled" : ""
                          }`}
                        >
                          1690 ₽
                        </p>
                      </div>
                    </div>
                    <div
                      className={`discount-bottom ${
                        !discountActive ? "active" : ""
                      }`}
                    >
                      Чтобы получить первые результаты
                    </div>
                  </div>

                  {/* -30% */}
                  <div
                    className={`discount-cards ${
                      selectTarif == "week1" ? "active" : ""
                    }`}
                    onClick={() => tarifTanlash("week1")}
                  >
                    <div className="discount50">-30%</div>
                    <div className="price-month-wrap">
                      <p className="month3">1 неделя</p>
                      <div className="price-wrap">
                        <h1 className="price-title">
                          {discountActive ? "690 ₽" : "990 ₽"}
                        </h1>
                        <p
                          className={`price-subtitle ${
                            !discountActive ? "disabled" : ""
                          }`}
                        >
                          990 ₽
                        </p>
                      </div>
                    </div>
                    <div
                      className={`discount-bottom ${
                        !discountActive ? "active" : ""
                      }`}
                    >
                      Чтобы просто начать
                    </div>
                  </div>
                </div>
              </div>
              <div className="warning">
                <span className="undov">!</span>
                <p className="warning-content">
                  Следуя плану на 3 месяца и более, люди получают в 2 раза
                  лучший результат, чем за 1 месяц
                </p>
              </div>
              <div className="check-wrap">
                <input className="checkbox-input" type="checkbox" id="agree" />
                <label htmlFor="agree" className="checkbox-content">
                  Я согласен с <a href="#">офертой рекуррентных платежей</a> и
                  <a href="#">Политикой конфиденциальности</a>
                </label>
              </div>
              <button className="buy-btn" onClick={() => handleBuy()}>
                Купить
              </button>
              <p className="prosta-content">
                Нажимая кнопку «Купить», Пользователь соглашается на разовое
                списание денежных средств для получения пожизненного доступа к
                приложению. Пользователь соглашается, что данные
                кредитной/дебетовой карты будут сохранены для осуществления
                покупок дополнительных услуг сервиса в случае желания
                пользователя.
              </p>
            </div>
          </div>
          <div className="garantya">
            <div className="garantya-top">гарантия возврата 30 дней</div>
            <div className="garantya-content">
              Мы уверены, что наш план сработает для тебя и ты увидишь видимые
              результаты уже через 4 недели! Мы даже готовы полностью вернуть
              твои деньги в течение 30 дней с момента покупки, если ты не
              получишь видимых результатов.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
