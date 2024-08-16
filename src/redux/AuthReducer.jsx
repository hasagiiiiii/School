import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:"auth",
    initialState:{
        isLogin: ""
    },
    reducers:{
        setLogin: (state,action)=>{
            state.isLogin = action.payload
        },
        resetIsLogin :(state,action)=>{
            state.isLogin=action.payload
        }
    }
})