import "./App.css";
import { Timer } from "./Timer";
function App() {
  return (
    <>
      <div className="container">
        <div className="todo">
          <h2 className="todo__title">Задачи</h2>
          <ol className="todo__list">
            <li className="todo__item">
              <div className="todo__item-wrapper">
                <button className="todo__btn">Написать Pomodoro</button>
                <button
                  className="todo__edit"
                  aria-label="Редактировать"
                ></button>
                <button className="todo__del" aria-label="Удалить"></button>
              </div>
            </li>
            <li className="todo__item">
              <button className="todo__add">Добавить новую задачу</button>
            </li>
          </ol>
        </div>

        <div className="timer">
          <div className="header">
            <h1 className="header__title">Помодоро</h1>

            <img src="../src/img/logo.svg" alt="Логотип" />
          </div>

          <div className="navigation">
            <button
              className="navigation__btn navigation__btn_active"
              data-use="work"
            >
              Помодоро
            </button>
            <button className="navigation__btn" data-use="break">
              Перерыв
            </button>
            <button className="navigation__btn" data-use="relax">
              Отдых
            </button>
          </div>
          <Timer />
        </div>

        <div className="count">
          <p className="count_num">3</p>
          <p className="count_text">Кол-во помодорок</p>
        </div>
      </div>
    </>
  );
}

export default App;
