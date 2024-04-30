import { useDispatch, useSelector } from "react-redux";
import { changeActiveState } from "./redux/PomodoroState";
function NavBtn({ name, type }) {
  const activeType = useSelector((state) => state.pomodoro.ACTIVE_STATE);
  const activeClass = "navigation__btn_active";
  const dispatch = useDispatch();
  function handleChangeActiveState(e) {
    dispatch(changeActiveState(e.target.dataset.use));
  }
  return (
    <button
      className={`navigation__btn ${type === activeType ? activeClass : ""}`}
      data-use={type}
      onClick={handleChangeActiveState}
    >
      {name}
    </button>
  );
}
export { NavBtn };
