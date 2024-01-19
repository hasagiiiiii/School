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


