import { createSlice } from "@reduxjs/toolkit";
import list from "../list.json";

const initialState = {
  list: [...list],
  filter: "",
};

export const todoItems = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    updateTodoItem: (state, action) => {
      state.list = state.list.map((element) => {
        if (element.key === action.payload) {
          element.clicked = !element.clicked;
        }
        return element;
      });
    },
    searchTodos: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addTodoItem, updateTodoItem, searchTodos } = todoItems.actions;

export default todoItems.reducer;
