import { configureStore } from "@reduxjs/toolkit";
import Pomodoro from "./PomodoroState";
const store = configureStore({
  reducer: {
    pomodoro: Pomodoro,
  },
});
export { store };
