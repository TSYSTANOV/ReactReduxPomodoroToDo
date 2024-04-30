import { useDispatch, useSelector } from "react-redux";
import { addPomodoroCount, deleteTask, editTask } from "./redux/TasksState";
import {
  deleteActivePomodor,
  setActivePomodoro,
} from "./redux/ActioveToDoPomodoro";
import { useEffect } from "react";

function NewTask({ title, id, pomodoroCount }) {
  const activePomodor = useSelector((state) => state.activePomodor.id);
  const activePomodorCount = useSelector(
    (state) => state.activePomodor.pomodoroCount
  );
  const dispatch = useDispatch();
  function handleDeleteTask() {
    if (activePomodor === id) {
      dispatch(deleteActivePomodor());
    }
    dispatch(deleteTask(id));
  }
  function handleEditTask() {
    const newTaskTitle = prompt(`Edit task ${title}`);
    if (newTaskTitle) {
      dispatch(editTask({ id, title: newTaskTitle }));
      dispatch(setActivePomodoro({ newTaskTitle, id, pomodoroCount }));
    }
  }
  function handleSetActivePomodoro() {
    dispatch(setActivePomodoro({ title, id, pomodoroCount }));
  }
  useEffect(() => {
    if (activePomodorCount) {
      dispatch(
        addPomodoroCount({
          id: activePomodor,
          pomodoroCount: activePomodorCount,
        })
      );
    }
  }, [activePomodorCount]);
  return (
    <li className="todo__item">
      <div className="todo__item-wrapper">
        <button className="todo__btn" onClick={handleSetActivePomodoro}>
          {title}
        </button>
        <button
          className="todo__edit"
          aria-label="Редактировать"
          onClick={handleEditTask}
        ></button>
        <button
          className="todo__del"
          aria-label="Удалить"
          onClick={handleDeleteTask}
        ></button>
      </div>
    </li>
  );
}
export { NewTask };
