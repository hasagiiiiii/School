import React from 'react'
export const ActiveModalContext = React.createContext();
export const ActiveModalProvider = ({children}) => {
    const [isAddClassSubjectModal,setIsAddClassSubjectModal] = React.useState(false);
    const [isOpenAddClassModal,setIsOpenAddClassModal] = React.useState(false)
  return (
    <ActiveModalContext.Provider value={{isAddClassSubjectModal,setIsAddClassSubjectModal,isOpenAddClassModal,setIsOpenAddClassModal}}>{children}</ActiveModalContext.Provider>
  )
}
