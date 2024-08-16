import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:"ClassReducerStudent",
    initialState:{
        classSbujectStudent : []
    },
    reducers:{
        addClassSubjectStudent: (state,action) =>{
            state.classSbujectStudent = action.payload
        },
        resetClassSubjectStudent:(state,action)=>{
            state.classSbujectStudent = []
        }
    }
    
})