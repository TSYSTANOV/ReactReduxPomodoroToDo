import { createSlice } from "@reduxjs/toolkit";
const activePomodoro = {
  title: "",
  id: "",
  pomodoroCount: 0,
};
const ActivePomodoro = createSlice({
  name: "activePomodoro",
  initialState: activePomodoro,
  reducers: {
    setActivePomodoro(state, action) {
      return {
        ...state,
        title: action.payload.title,
        id: action.payload.id,
        pomodoroCount: action.payload.pomodoroCount,
      };
    },
    changePomodoroCountInActivePomodor(state) {
      return {
        ...state,
        pomodoroCount: state.pomodoroCount + 1,
      };
    },
    deleteActivePomodor() {
      return { ...activePomodoro };
    },
  },
});
export const {
  setActivePomodoro,
  deleteActivePomodor,
  changePomodoroCountInActivePomodor,
} = ActivePomodoro.actions;
export default ActivePomodoro.reducer;
