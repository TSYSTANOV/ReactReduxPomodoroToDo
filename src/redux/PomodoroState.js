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
      if (state.POMODORO_COUNT < 3) {
        if (state.timeleft > 0) {
          return { ...state, timeleft: state.timeleft - 1 };
        } else {
          return state.ACTIVE_STATE === "WORK_TIME"
            ? {
                ...state,
                ACTIVE_STATE:
                  state.POMODORO_COUNT + 1 === 3 ? "RELAX_TIME" : "BREAK_TIME",
                POMODORO_COUNT: state.POMODORO_COUNT + 1,
                timeleft:
                  state.POMODORO_COUNT + 1 === 3
                    ? state["RELAX_TIME"] * 60
                    : state["BREAK_TIME"] * 60,
              }
            : {
                ...state,
                ACTIVE_STATE: "WORK_TIME",
                timeleft: state["WORK_TIME"] * 60,
              };
        }
      } else {
        return {
          ...state,
          ACTIVE_STATE: "RELAX_TIME",
          POMODORO_COUNT: 0,
          timeleft: state["RELAX_TIME"] * 60 - 1,
        };
      }
    },
    resetPomodoro(state) {
      clearInterval(state.id);
      return {
        ...state,
        timeleft: state[state.ACTIVE_STATE] * 60,
        isWorking: false,
      };
    },
    changeActiveState(state, action) {
      clearInterval(state.id);
      return {
        ...state,
        ACTIVE_STATE: action.payload,
        timeleft: state[action.payload] * 60,
        isWorking: false,
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
  changeActiveState,
} = Pomodoro.actions;
export default Pomodoro.reducer;
