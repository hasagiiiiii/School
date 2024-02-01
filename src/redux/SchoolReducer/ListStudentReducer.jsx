import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "ListStudent",
  initialState: {
    preStudent: [],
  },
  reducers: {
    addStudents: (state, action) => {
      state.preStudent = action.payload; // addStudents => preStudenst
    },
  },
});
