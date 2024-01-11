import { createSelector } from "@reduxjs/toolkit";

export const state = (state) => state.LoginReducer.data;

export const Class = (state) => state.ClassReducer.Class;

export const Search = (state) => state.FilterClassREducer.name_ClassSchool;

export const ListSubject = createSelector(Class, Search, (listSub, search) => {
  return listSub.filter((room) => {
    console.log(room.name_ClassSchool.includes(search));
    return room.name_ClassSchool.includes(search);
  });
});
