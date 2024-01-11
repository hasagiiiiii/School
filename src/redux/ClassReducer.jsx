import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "Class",
  initialState: {
    Class: [
      {
        name_ClassSchool: "K21-CNT2",
        teacher: [],
        listMonHoc: [
          { id: 1, name_Monhoc: "Triet Hoc" },
          { id: 2, name_Monhoc: "Reactjs" },
        ],
      },
    ],
  },
  reducers: {
    addClass: (state, action) => {
      state.Class.push(action.payload);
    },
  },
});
