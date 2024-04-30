import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/TasksState";
import { v4 as uuidv4 } from "uuid";
import { NewTask } from "./NewTask";
function TasksController() {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.tasks);

  function handleAddTask() {
    const taskTitle = prompt("Enter a new Task");
    if (taskTitle) {
      const task = { title: taskTitle, id: uuidv4(), pomodoroCount: 0 };
      dispatch(addTask(task));
    }
  }
  return (
    <ol className="todo__list">
      {tasksList.map((task) => {
        return <NewTask key={task.id} {...task} />;
      })}
      <li className="todo__item">
        <button className="todo__add" onClick={handleAddTask}>
          Добавить новую задачу
        </button>
      </li>
    </ol>
  );
}
export { TasksController };
