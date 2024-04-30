import { createSlice } from "@reduxjs/toolkit";

const tasksState = [];
const Tasks = createSlice({
  name: "Tasks",
  initialState: tasksState,
  reducers: {
    addTask(state, action) {
      return [...state, action.payload];
    },
    deleteTask(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    editTask(state, action) {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title, id: item.id };
        }
        return item;
      });
    },
    addPomodoroCount(state, action) {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, pomodoroCount: action.payload.pomodoroCount };
        }
        return item;
      });
    },
  },
});
export const { addPomodoroCount, addTask, deleteTask, editTask } =
  Tasks.actions;
export default Tasks.reducer;
