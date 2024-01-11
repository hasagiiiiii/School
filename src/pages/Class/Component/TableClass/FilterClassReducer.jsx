import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filterClass",
  initialState: {
    name_ClassSchool: "",
  },
  reducers: {
    fillterValue: (state, action) => {
      state.name_ClassSchool = action.payload;
    },
  },
});
