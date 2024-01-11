import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";
import ClassReducer from "./ClassReducer";
import FilterClassReducer from "../pages/Class/Component/TableClass/FilterClassReducer";

export const store = configureStore({
  reducer: {
    LoginReducer: LoginReducer.reducer,
    ClassReducer: ClassReducer.reducer,
    FilterClassREducer: FilterClassReducer.reducer,
  },
});
