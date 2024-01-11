import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "LoginReducer",
  initialState: {
    data: {},
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
  },
});
