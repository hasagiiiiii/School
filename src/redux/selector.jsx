import { createSelector } from "@reduxjs/toolkit";

export const StateInfo = (state) => state.LoginReducer.data;

export const Class = (state) => state.ClassReducer.Class;

export const Search = (state) => {
  const search = state.FilterClassReducer.monhoc; // get all infor class
  return search;
};

export const CalendarRedux = (state) => state.Calendar.calendar;

export const ListSubject = createSelector(Class, Search, (listSub, search) => {
  const data = listSub.filter((room) => {
    return room.name_ClassSchool.includes(search);
  });
  return data || []; // get filter class info
});

// lấy preStudent nhập value => dipsatch value va filter

/* <---------------------/ListStudentReducer\----------------------------> */

export const Students = (state) => state.Students.preStudent; // get all Students
export const FilterSearchStudent = (state) =>
  state.FilterSearchStudent.fullName; // lấy field Name trong FIlterSearch
export const TyepFillterStudent = (state) => state.FilterSearchStudent.type;

export const StudentsFilter = createSelector(
  Students,
  FilterSearchStudent,
  (listStudent, valueInput) => {
    if (valueInput !== "") {
      const FielValue = valueInput.trim().split(""); // tách ký tự valueInput ra thành mảng
      const StudentsCopy = [...listStudent]; // copy lại listStudent
      const s= StudentsCopy.filter((std) => {
        return FielValue.every((value) => {
          return std.user_Name.includes(value) || std.fullName.includes(value);
        }); // kiểm tra xem Student có user_Name || fullName nào có us giống như vậy không
      });
      return s
    } else {
      return listStudent;
    }
  }
);

export const StudentFillterAddClassSubject = createSelector(
  Students,
  FilterSearchStudent,
  TyepFillterStudent,
  (listStudent, valueInput, type) => {
    const FielValue = valueInput.split(""); // tách ký tự valueInput ra thành mảng
    const studentCopy = [...listStudent];
    console.log(valueInput)
    if(valueInput !== " " || valueInput !== null){
      if (type === "Class") {
        console.log("vao day")
          const s = studentCopy.filter((std) => {
          return FielValue.every((value) => {
            return std.name_Class.includes(value);
          });
        });
        return s
      }
      // type === USer_Name
      if (type === "user_Name") {
        const s = studentCopy.filter((std) => {
          return FielValue.every((value) => {
            return std.user_Name.includes(value);
          });
        });
        return s
      }
  
      // type === Full Name
  
      if (type === "fullName") {
        const s = studentCopy.filter((std) => {
          return FielValue.every((value) => {
            return std.fullName.includes(value);
          });
        });
        return s
      }
  
      if (type === "All") {
        const b = studentCopy.filter((std) => {
          return FielValue.every((value) => {
            return std.user_Name.includes(value);
          });
        });
        return b
      }
  
      // type === Full Name
  
    }
    return listStudent;
  }
);

/* <---------------------/Authenticator\----------------------------> */

export const isLogin = (state) => state.Auth.isLogin;
