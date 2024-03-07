import React from "react";
import { FETCH_API } from "../api/fetchAPI";
export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isToggle, setIstoggle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isOpenFormAddClass, setIsOpenFormAddCLass] = React.useState(false); // open and close Modal AddClassModal
  const [teachers, setTeacher] = React.useState([]); // GET Data is Fetch Api Teacher
  const [khoa, setKhoa] = React.useState([]); // GET Data is Fetch Api Khoa
  const [listClass, setListClass] = React.useState([1]); // GET Data is Fetch Api ALL Class
  const columns = [
    { title: "MSV", dataIndex: "msv", key: "msv" },
    { title: "FullName", dataIndex: "fullName", key: "fullName" },
    { title: "Email", dataIndex: "email_User", key: "email_User" },
    { title: "Sex", dataIndex: "sex_User", key: "sex_User" },
    {
      title: "Image",
      dataIndex: "image_User",
      key: "image_User",
      render: (imgUser, index) => (
        <img
          key={index}
          src={`${process.env.REACT_APP_URL_SEVER}/${imgUser}`}
          alt={imgUser}
          width={30}
          loading="lazy"
        />
      ),
    },
  ];
  
  const TOKEN = localStorage.getItem("acces")
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
  {/* <---------------------/START FECTH_API\----------------------------> */}
  React.useEffect(() => {
    if(TOKEN!==null){
      // FETCH_API.fetchAPIV1GET_Authoriez("teacher", setTeacher,TOKEN); // GET ALL TEACHER {error : NOT FOUND 404}
       FETCH_API.fetchAPIV1GET_Authoriez("school/khoa",setKhoa,TOKEN)
    }
    // FETCH_API.fetchApiV1GET("class", setListClass); // GET ALL CLASS
    return () => {};
  }, [TOKEN]);
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
        columns,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
