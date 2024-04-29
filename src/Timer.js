import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIntervalId,
  clearIntervalId,
  resetPomodoro,
  setIsWorking,
  startPomodoro,
} from "./redux/PomodoroState";

function Timer() {
  const dispatch = useDispatch();
  const [textOnButton, setTextOnButton] = useState("Старт");
  const timeLeft = useSelector((state) => {
    return state.pomodoro.timeleft;
  });
  const isWorking = useSelector((state) => {
    return state.pomodoro.isWorking;
  });

  function handleStartPomodoro() {
    if (isWorking) {
      dispatch(clearIntervalId());
      dispatch(setIsWorking());
      setTextOnButton("Старт");
    } else {
      const intervalId = setInterval(() => {
        dispatch(startPomodoro());
      }, 1000);
      dispatch(addIntervalId(intervalId));
      dispatch(setIsWorking());
      setTextOnButton("Пауза");
    }
  }
  function handleResetTimer() {
    dispatch(resetPomodoro());
    setTextOnButton("Старт");
  }
  return (
    <>
      <p className="time">
        <span className="time__minutes">
          {Math.floor(timeLeft / 60) < 10
            ? "0" + Math.floor(timeLeft / 60)
            : Math.floor(timeLeft / 60)}
        </span>
        :
        <span className="time__seconds">
          {timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60}
        </span>
      </p>

      <p className="title">Написать Pomodoro</p>
      <div className="control">
        <button
          className="control__btn control__btn_start"
          onClick={handleStartPomodoro}
        >
          {textOnButton}
        </button>
        <button
          className="control__btn control__btn_stop"
          onClick={handleResetTimer}
        >
          Стоп
        </button>
      </div>
    </>
  );
}
export { Timer };
