import { createSlice } from "@reduxjs/toolkit";


export default createSlice({
    name:"Calendar",
    initialState:{
        calendar:[]
    },
    reducers:{
        getCalendar : (state,action)=>{
            state.calendar= action.payload
        },
        resetCalendar:(state,action)=>{
            state.calendar = []
        }
    }
})