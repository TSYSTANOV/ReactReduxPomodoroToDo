import "./App.css";
import { Timer } from "./Timer";
import { NavigationBtns } from "./NavigationBtns";
import { TasksController } from "./TasksController";
import { PomodoroCount } from "./PomodoroCount";
function App() {
  return (
    <>
      <div className="container">
        <div className="todo">
          <h2 className="todo__title">Задачи</h2>
          <TasksController />
        </div>

        <div className="timer">
          <div className="header">
            <h1 className="header__title">Помодоро</h1>
            <img src="../src/img/logo.svg" alt="Логотип" />
          </div>
          <NavigationBtns />
          <Timer />
        </div>
        <PomodoroCount />
      </div>
    </>
  );
}

export default App;
