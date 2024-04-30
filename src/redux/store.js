import { configureStore } from "@reduxjs/toolkit";
import Pomodoro from "./PomodoroState";
import TasksState from "./TasksState";
import ActivePomodoro from "./ActioveToDoPomodoro";
const store = configureStore({
  reducer: {
    pomodoro: Pomodoro,
    tasks: TasksState,
    activePomodor: ActivePomodoro,
  },
});
export { store };
