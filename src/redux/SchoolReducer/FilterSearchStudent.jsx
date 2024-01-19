import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "FilterSearchStudent",
  initialState: {
    name: "",
    msv: "",
  },
  reducers: {
    filterSearchName: (state, action) => {
      state.name = action.payload;
    },
  },
});
