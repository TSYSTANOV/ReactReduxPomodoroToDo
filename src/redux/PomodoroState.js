import { createSlice } from "@reduxjs/toolkit";
const pomodoroState = {
  WORK_TIME: 1,
  BREAK_TIME: 2,
  RELAX_TIME: 3,
  POMODORO_COUNT: 0,
  ACTIVE_STATE: "WORK_TIME",
  timeleft: 60,
  id: null,
  isWorking: false,
};
const Pomodoro = createSlice({
  name: "Pomodoro",
  initialState: pomodoroState,
  reducers: {
    addIntervalId(state, action) {
      return { ...state, id: action.payload };
    },
    clearIntervalId(state) {
      clearInterval(state.id);
      return { ...state, id: null };
    },
    setIsWorking(state) {
      return { ...state, isWorking: !state.isWorking };
    },
    startPomodoro(state) {
      if (state.timeleft > 0 && state.POMODORO_COUNT <= 3) {
        return { ...state, timeleft: state.timeleft - 15 };
      } else {
        if (state.ACTIVE_STATE === "WORK_TIME") {
          return {
            ...state,
            ACTIVE_STATE: "BREAK_TIME",
            timeleft: state["BREAK_TIME"] * 60,
          };
        }
        if (state.ACTIVE_STATE === "BREAK_TIME") {
          return {
            ...state,
            ACTIVE_STATE: "WORK_TIME",
            timeleft: state["WORK_TIME"] * 60,
          };
        }
      }

      // else if(){}
      // return {
      //   ...state,
      //   POMODORO_COUNT: 0,
      //   ACTIVE_STATE: "BREAK_TIME",
      //   timeleft: state["BREAK_TIME"] * 60,
      // };
    },
    resetPomodoro(state) {
      clearInterval(state.id);
      console.log(state.ACTIVE_STATE);
      return {
        ...state,
        timeleft: state[state.ACTIVE_STATE] * 60,
        isWorking: !state.isWorking,
      };
    },
  },
});
export const {
  startPomodoro,
  addIntervalId,
  clearIntervalId,
  setIsWorking,
  resetPomodoro,
} = Pomodoro.actions;
export default Pomodoro.reducer;
