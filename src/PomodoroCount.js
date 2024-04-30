import { useSelector } from "react-redux";

function PomodoroCount() {
  const pomodoroCount = useSelector(
    (state) => state.activePomodor.pomodoroCount
  );
  return (
    <div className="count">
      <p className="count_num">{pomodoroCount ? pomodoroCount : 0}</p>
      <p className="count_text">Кол-во помодорок</p>
    </div>
  );
}
export { PomodoroCount };
