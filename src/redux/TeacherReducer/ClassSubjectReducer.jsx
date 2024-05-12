import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:"TeacherClassSubject",
    initialState:{
        ClassSubject:[]
    },
    reducers:{
        addClassSubject:(state,action)=>{
            state.ClassSubject = action.payload
        },
        resetClassSubject: (state)=>{
            state.ClassSubject = []
        }
    }
})