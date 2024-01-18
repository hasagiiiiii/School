import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "Class",
  initialState: {
    Class: [
      {
        name_ClassSchool: "K21-CNT2",
        teacher: [],
        listMonHoc: [
          {
            id: 1,
            NameClass: "Triet Hoc",
            Teacher: "Nguyen Thanh Tung",
            StudentCount: 30,
            tags: ["Active"],
          },
          {
            id: 2,
            NameClass: "React-JS",
            Teacher: "Do Van Trung",
            StudentCount: 20,
            tags: ["UnActive"],
          },
          {
            id: 3,
            NameClass: "Java - Web",
            Teacher: "Nguyen Nhat Minh",
            StudentCount: 30,
            tags: ["Active"],
          },
          {
            id: 4,
            NameClass: "Triet Hoc",
            Teacher: "Nguyen Thanh Tung",
            StudentCount: 30,
            tags: ["Active"],
          },
        ],
      },
    ],
  },
  reducers: {
    addClass: (state, action) => {
      state.Class.push(action.payload);
    },
  },
});
