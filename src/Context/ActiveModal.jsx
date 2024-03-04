import React from 'react'
export const ActiveModalContext = React.createContext();
export const ActiveModalProvider = ({children}) => {
    const [isAddClassSubjectModal,setIsAddClassSubjectModal] = React.useState(false);
  return (
    <ActiveModalContext.Provider value={{isAddClassSubjectModal,setIsAddClassSubjectModal}}>{children}</ActiveModalContext.Provider>
  )
}
