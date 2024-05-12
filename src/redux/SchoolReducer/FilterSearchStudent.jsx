import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "FilterSearchStudent",
  initialState: {
    fullName: "",
    Email: "",
    type:"All"
  },
  reducers: {
    filterSearchName: (state, action) => {
      state.fullName = action.payload;
    },
    onChangeType : (state,action)=>{
      state.type = action.payload
    }
  },
});
