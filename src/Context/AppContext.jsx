import React from "react";
export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isToggle, setIstoggle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenFormAddClass, setIsOpenFormAddCLass] = React.useState(false);
  const [teachers, setTeacher] = React.useState([]);
  const [khoa, setKhoa] = React.useState([]);
  const [listClass, setListClass] = React.useState([1]);
  const token = localStorage.getItem("acces");
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
  const fetchApiV1GET = async (type, action) => {
    try {
      const response = await fetch(
        `http://trendyt20231-001-site1.ftempurl.com/api/v1/${type}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JSON.parse(token).access_Token}`,
          },
        }
      );
      const data = await response.json();
      action(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch API teacher
  React.useEffect(() => {
    // fetchApiV1GET("teacher", setTeacher);

    // fetchApiV1GET("khoa", setKhoa);

    // fetchApiV1GET("class", setListClass);
    return () => {};
  }, []);
  // console.log(listClass);
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
        teachers,
        khoa,
        listClass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
