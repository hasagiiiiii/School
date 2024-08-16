import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoSunny, IoMoonOutline, IoHome, IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { ActiveModalContext } from "../../Context/ActiveModal";
import { Avatar } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useSelector } from "react-redux";
import { CalendarRedux, isLogin, StateInfo } from "../../redux/selector";

const HomeIndex = () => {
  const { darkMode, setDarkMode } = React.useContext(ActiveModalContext);
  const { Logout,CheckRedirect } = React.useContext(AuthContext);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isActive, setIsActive] = React.useState(1);
  const isLog = useSelector(isLogin)
  React.useEffect(() => {
    CheckRedirect();
  }, [CheckRedirect,isLog]);
  const {image_User , fullName} = useSelector(StateInfo)
  return (
    <div
      style={{ overflow: "hidden" }}
      className={darkMode ? "wrapper bg-[#2f2f2f]" : "bg-slate-200"}
    >
      <div className="frame w-full h-screen">
        <header className="h-24 w-[90%] flex justify-between  items-center ">
          <div className="left-header flex items-center xl:w-[60%]">
            <div
              className={
                darkMode
                  ? "task-bar-icons cursor-pointer relative bg-white w-8 h-[2px] rounded-md mx-4"
                  : "task-bar-icons cursor-pointer relative bg-[#212121] w-8 h-[2px] rounded-md mx-4"
              }
            >
              <div
                className={
                  darkMode
                    ? "absolute w-5 bg-white h-1 -top-2 left-[5px]  rounded-md"
                    : "absolute w-5 bg-[#212121] h-1 -top-2 left-[5px]  rounded-md"
                }
              ></div>
              <div
                className={
                  darkMode
                    ? "absolute w-5 bg-white h-1 -bottom-2 left-[5px] rounded-md"
                    : "absolute w-5 bg-[#212121] h-1 -bottom-2 left-[5px] rounded-md"
                }
              ></div>
            </div>
            <Link
              to="/HomeIndex"
              className={
                darkMode
                  ? "ml-4 text-xl text-white xl:text-2xl"
                  : "ml-4 text-xl xl:text-2xl"
              }
            >
              TrendyT
            </Link>
            <div className="group-input relative ml-7 flex items-center ">
              <label htmlFor="" className="left-2 absolute opacity-50">
                <CiSearch size={20} />
              </label>
              <input
                type="text"
                className="focus:outline-none h-7 px-1 py-2 pl-8 rounded-xl xl:h-10 xl:rounded-2xl xl:w-96"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="right-header flex items-center justify-around">
            <div className="darkmode mr-4">
              <div
                onClick={() => setDarkMode(false)}
                className={darkMode ? "" : "hidden"}
              >
                <IoMoonOutline style={{ color: "white", fontSize: 30 }} />
              </div>
              <div
                onClick={() => setDarkMode(true)}
                className={darkMode === false ? "" : "hidden"}
              >
                <IoSunny size={30} />
              </div>
            </div>
            <div className="Notification mx-3">
              <div className="icons">
                {darkMode ? (
                  <FaBell size={30} fill="white" />
                ) : (
                  <FaBell size={30} />
                )}
              </div>
            </div>
            <div
              onClick={() => setIsVisible(!isVisible)}
              className="avatar relative mx-3"
            >
              <Avatar
                className={
                  darkMode ? "bg-white flex items-center text-black" : ""
                }
               
              >
                {image_User ? fullName?.charAt(0).toUpperCase():""}
              </Avatar>
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 20 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className={
                      darkMode
                        ? "absolute -left-10 bg-[#212121] text-white border border-white border-opacity-20 shadow-lg p-2 rounded-lg"
                        : "absolute  -left-10 bg-white border border-black border-opacity-20 shadow-lg p-2 rounded-lg"
                    }
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <ul>
                      <li>
                        <Link to="#">Account</Link>
                      </li>
                      <li>
                        <Link to="#">Setting</Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              onClick={() => Logout()}
              style={{ cursor: "pointer" }}
              className={darkMode ? "text-white" : "text-black"}
            >
              Logout
            </div>
          </div>
        </header>
        <div className="content w-full flex">
          <div className="sideBar flex items-center flex-col w-[100px]">
            <Link
              onClick={() => setIsActive(1)}
              style={{ marginTop: "20px" }}
              className={
                isActive === 1
                  ? darkMode
                    ? "flex items-center justify-center text-center bg-white w-10 h-10 rounded-full text-black"
                    : "flex items-center justify-center text-center w-10 h-10 bg-[#2f2f2f] rounded-full text-white"
                  : darkMode
                  ? "flex items-center justify-center text-center w-10 h-10 rounded-full text-white"
                  : "flex items-center justify-center text-center w-10 h-10 rounded-full text-black"
              }
              to="/HomeIndex"
            >
              <IoHome size={25} />
            </Link>

            <Link
              onClick={() => setIsActive(2)}
              style={{ marginTop: "20px" }}
              className={
                isActive === 2
                  ? darkMode
                    ? "flex items-center justify-center text-center bg-white w-10 h-10 rounded-full text-black"
                    : "flex items-center justify-center text-center w-10 h-10 bg-[#2f2f2f] rounded-full text-white"
                  : darkMode
                  ? "flex items-center justify-center text-center  w-10 h-10 rounded-full text-white"
                  : "flex items-center justify-center text-center w-10 h-10 rounded-full text-black"
              }
              to="#"
            >
              <CgProfile size={25} />
            </Link>

            <Link
              onClick={() => setIsActive(3)}
              style={{ marginTop: "20px" }}
              className={
                isActive === 3
                  ? darkMode
                    ? "flex items-center justify-center text-center bg-white w-10 h-10 rounded-full text-black"
                    : "flex items-center justify-center text-center w-10 h-10 bg-[#2f2f2f] rounded-full text-white"
                  : darkMode
                  ? "flex items-center justify-center text-center w-10 h-10 rounded-full text-white"
                  : "flex items-center justify-center text-center w-10 h-10 rounded-full text-black"
              }
              to="/HomeIndex/Calender"
            >
              <FaRegCalendar size={25} />
            </Link>

            <Link
              onClick={() => setIsActive(4)}
              style={{ marginTop: "20px" }}
              className={
                isActive === 4
                  ? darkMode
                    ? "flex items-center justify-center text-center bg-white w-10 h-10 rounded-full text-black"
                    : "flex items-center justify-center text-center w-10 h-10 bg-[#2f2f2f] rounded-full text-white"
                  : darkMode
                  ? "flex items-center justify-center text-center  w-10 h-10 rounded-full text-white"
                  : "flex items-center justify-center text-center w-10 h-10 rounded-full text-black"
              }
              to="Profile"
            >
              <IoSettings size={25} />
            </Link>
          </div>
          <div className="outlet w-[100%] overflow-auto h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
