import React from "react";
export const ActiveModalContext = React.createContext();
export const ActiveModalProvider = ({ children }) => {
  const [isAddClassSubjectModal, setIsAddClassSubjectModal] =
    React.useState(false);
  const [isOpenAddClassModal, setIsOpenAddClassModal] = React.useState(false);
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);
  const [isOpenCalendarModal, setOpenCalendarModal] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [isOpenRegister, setIsOpenRegister] = React.useState(false);
  const [isOpenCallVideo, setIsOpenCallVideo] = React.useState(false)
  const [isOpenJoinCallVideo,setIsOpenJoinCallVideo] = React.useState(false)
  return (
    <ActiveModalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        isAddClassSubjectModal,
        setIsAddClassSubjectModal,
        isOpenAddClassModal,
        setIsOpenAddClassModal,
        isOpenLogin,
        setIsOpenLogin,
        isOpenCalendarModal,
        setOpenCalendarModal,
        isOpenRegister,
        setIsOpenRegister,
        isOpenCallVideo, setIsOpenCallVideo,
        isOpenJoinCallVideo,setIsOpenJoinCallVideo
      }}
    >
      {children}
    </ActiveModalContext.Provider>
  );
};
