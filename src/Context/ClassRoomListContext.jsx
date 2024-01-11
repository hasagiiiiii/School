import React from "react";

const ListClassRom = [
  { displayName: "T", photo_URL: "", RoomName: "K21-Cnt1" },
  { displayName: "T", photo_URL: "", RoomName: "K21-Cnt2" },
  { displayName: "T", photo_URL: "", RoomName: "K21-Cnt3" },
];

export const ClassRoomListContext = React.createContext();
const ClassRoomListProvider = ({ children }) => {
  return (
    <ClassRoomListContext.Provider value={{ ListClassRom }}>
      {children}
    </ClassRoomListContext.Provider>
  );
};

export default ClassRoomListProvider;
