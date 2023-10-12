import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  period: "monthly",
};

export const chart = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updatePeriod: (state, action) => {
      state.period = action.payload;
    },
  },
});

export const { updatePeriod } = chart.actions;

export default chart.reducer;
