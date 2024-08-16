import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "excercise",
  initialState: {
    excercise: [],
  },
  reducers: {
    addExcercise: (state, action) => {
      state.excercise = action.payload;
    },
  },
});
