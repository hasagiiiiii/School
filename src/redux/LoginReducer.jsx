import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "LoginReducer",
  initialState: {
    data: {},
  },
  reducers: {
    login: (state, action) => {
      // update data save infor user
      state.data = action.payload;
    },
    resetLogin : (state,action)=>{
      state.data = {}
    }
  },
});
