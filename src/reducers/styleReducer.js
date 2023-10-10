import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light-mode",
};

export const style = createSlice({
  name: "style",
  initialState,
  reducers: {
    updateMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { updateMode } = style.actions;

export default style.reducer;
