import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "Class",
  initialState: {
    ClassSubject:[]
  },
  reducers: {
    addClass: (state, action) => {
      state.ClassSubject = action.payload
    },
  },
});
