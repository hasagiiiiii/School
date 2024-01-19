import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filterClass",
  initialState: {
    monhoc: " ",
  },
  reducers: {
    fillterValue: (state, action) => {
      state.monhoc = action.payload;
    },
  },
});
