import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";
import ClassReducer from "./StudentReducer/ClassReducer";
import FilterClassReducer from "../pages/Class/Component/TableClass/FilterClassReducer";
import FilterSearchStudent from "./SchoolReducer/FilterSearchStudent";
import ListStudentReducer from "./SchoolReducer/ListStudentReducer";

export const store = configureStore({
  reducer: {
    LoginReducer: LoginReducer.reducer,
    ClassReducer: ClassReducer.reducer,
    FilterClassREducer: FilterClassReducer.reducer,
    FilterSearchStudent: FilterSearchStudent.reducer,
    Students: ListStudentReducer.reducer,
  },
});
