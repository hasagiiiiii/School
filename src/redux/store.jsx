import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import LoginReducer from "./LoginReducer";
import ClassReducer from "./StudentReducer/ClassReducer";
import FilterClassReducer from "./TeacherReducer/FilterClassReducer";
import FilterSearchStudent from "./SchoolReducer/FilterSearchStudent";
import ListStudentReducer from "./SchoolReducer/ListStudentReducer";
import AuthReducer from "./AuthReducer";
import Calendar from "./SchoolReducer/Calendar";
import ClassSubjectReducer from "./TeacherReducer/ClassSubjectReducer";
import ClassSubjectStudent from "./StudentReducer/ClassSubjectStudent";
import ExcerciseStudentReducer from "./StudentReducer/ExcerciseStudentReducer";


const rootReducer = combineReducers({
  LoginReducer: LoginReducer.reducer,
  ClassReducer: ClassReducer.reducer,
  FilterClassReducer: FilterClassReducer.reducer,
  FilterSearchStudent: FilterSearchStudent.reducer,
  Students: ListStudentReducer.reducer,
  Auth: AuthReducer.reducer,
  Calendar: Calendar.reducer,
  ClassSubjectReducer:ClassSubjectReducer.reducer,
  ClassSubjectStudent : ClassSubjectStudent.reducer,
  ExcerciseStudentReducer: ExcerciseStudentReducer.reducer
})

const persistConfig = {
  key:'root',
  storage,
  whitelist:['LoginReducer', 'Students','ClassReducer', 'Auth','FilterClassReducer','ClassSubjectReducer','ClassSubjectStudent','ExcerciseStudentReducer'],
}


const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  // reducer: {
  //   LoginReducer: LoginReducer.reducer,
  //   ClassReducer: ClassReducer.reducer,
  //   FilterClassReducer: FilterClassReducer.reducer,
  //   FilterSearchStudent: FilterSearchStudent.reducer,
  //   Students: ListStudentReducer.reducer,
  // },
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>{  // cấu hình middleware để sử lý lỗi working with non-Serializable data khi sử dụng redux-persist
    return getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  }
});
export let persistor = persistStore(store)
