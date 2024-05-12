import FilterClassReducer from "./TeacherReducer/FilterClassReducer";
import AuthReducer from "./AuthReducer";
import LoginReducer from "./LoginReducer";
import Calendar from "./SchoolReducer/Calendar";
import ListStudentReducer from "./SchoolReducer/ListStudentReducer";
import ClassSubjectReducer from "./TeacherReducer/ClassSubjectReducer";


export const resetAllState = (dispatch)=>{
    dispatch(FilterClassReducer.actions.resetFilterClass())
    dispatch(AuthReducer.actions.resetIsLogin())
    dispatch(LoginReducer.actions.resetLogin(false))
    dispatch(Calendar.actions.resetCalendar())
    dispatch(ListStudentReducer.actions.resetListStudent())
    dispatch(ClassSubjectReducer.actions.resetClassSubject())
}