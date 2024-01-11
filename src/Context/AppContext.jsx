import React from "react";
export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isToggle, setIstoggle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenFormAddClass, setIsOpenFormAddCLass] = React.useState(false);
  const hanldeDisableScroll = () => {
    setIstoggle(!isToggle);
    const ScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const ScrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(ScrollTop, ScrollLeft);
    };
  };
  const handleEnabaleScroll = () => {
    setIstoggle(false);
    window.onscroll = () => {};
  };

  return (
    <AppContext.Provider
      value={{
        isToggle,
        setIstoggle,
        hanldeDisableScroll,
        handleEnabaleScroll,
        open,
        setOpen,
        isOpenFormAddClass,
        setIsOpenFormAddCLass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
