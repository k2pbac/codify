import { createSlice } from "@reduxjs/toolkit";
import list from "../list.json";

const initialState = {
  list: [...list],
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
  },
});

export const { addTodoItem, updateTodoItem } = todoItems.actions;

export default todoItems.reducer;
