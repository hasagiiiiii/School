import { createSelector } from "@reduxjs/toolkit";

export const state = (state) => state.LoginReducer.data;

export const Class = (state) => state.ClassReducer.Class;

export const Search = (state) => {
  const search = state.FilterClassREducer.monhoc; // get all infor class
  return search;
};

export const ListSubject = createSelector(Class, Search, (listSub, search) => {
  const data = listSub.filter((room) => {
    return room.name_ClassSchool.includes(search);
  });
  return data || []; // get filter class info
});

// lấy preStudent nhập value => dipsatch value va filter

/* <---------------------/ListStudentReducer\----------------------------> */

export const Students = (state) => state.Students.preStudent; // get all Students
export const FilterSearchStudent = (state) => state.FilterSearchStudent.fullName; // lấy field Name trong FIlterSearch
export const TyepFillterStudent = (state) => state.FilterClassREducer.type;
export const StudentsFilter = createSelector(
  Students,
  FilterSearchStudent,
  (listStudent, valueInput) => {
    if (valueInput !== "") {
      const FielValue = valueInput.split(""); // tách ký tự valueInput ra thành mảng

      const StudentsCopy = [...listStudent]; // copy lại listStudent
      return StudentsCopy.filter((std) => {
        return FielValue.every((value) => {
          return std.user_Name.includes(value) || std.fullName.includes(value);
        }); // kiểm tra xem Student có user_Name || fullName nào có us giống như vậy không
      });
    } else {
      return listStudent;
    }
  }
);

export const StudentFillterAddClassSubject = createSelector(
  Students,
  FilterSearchStudent,
  TyepFillterStudent,
  (listStudent,valueInput,type)=>{
    
})
