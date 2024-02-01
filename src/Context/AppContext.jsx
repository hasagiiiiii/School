import React from "react";
export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isToggle, setIstoggle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenFormAddClass, setIsOpenFormAddCLass] = React.useState(false); // open and close Modal AddClassModal
  const [isOpenSubjectClass, setIsOpenSubjectClass] = React.useState(false);
  const [teachers, setTeacher] = React.useState([]); // GET Data is Fetch Api Teacher
  const [khoa, setKhoa] = React.useState([]); // GET Data is Fetch Api Khoa
  const [listClass, setListClass] = React.useState([1]); // GET Data is Fetch Api ALL Class
  const token = localStorage.getItem("acces");
  // Start handleDisableScroll
  const hanldeDisableScroll = () => {
    setIstoggle(!isToggle);
    const ScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Lâý vị trí từ trên cùng tới vị trí của element đó
    const ScrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft; //Lâý vị trí từ bên trái cùng tới vị trí của element đó

    window.onscroll = () => {
      // cố định cho scroll tại ví trí màn hình
      window.scrollTo(ScrollTop, ScrollLeft);
    };
  };
  // Finish DisableScroll

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
  const fetchApiV2GET = async (type, action) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_SEVER_V2}${type}`,
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
    // fetchApiV2GET("school/get-all-teacher", setTeacher); // GET ALL TEACHER {error : NOT FOUND 404}

    fetchApiV1GET("khoa", setKhoa);

    fetchApiV2GET("class", setListClass); // GET ALL CLASS
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
        isOpenSubjectClass,
        setIsOpenSubjectClass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
