import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderCLass from "../../Component/HeaderClass";
import { AuthContext } from "../../Context/AuthProvider";
import SideBar from "./Component/SideBar";
import { useSelector } from "react-redux";
import { isLogin } from "../../redux/selector";

const Class = () => {
  const { CheckRedirect } = React.useContext(AuthContext); // Check User Login
  const isLog = useSelector(isLogin)
  React.useEffect(() => {
    CheckRedirect();
  }, [CheckRedirect,isLog]);
  // if (
  //   !JSON.parse(localStorage.getItem("acces"))?.info?.role_School === "student"
  // ) {
  //   // check xem ROLE của user có đủ thầm quyền hay không
  //   return console.error("Khoong có quyền truy cập");
  // }
  if (!isLog) {
    return null;
  }
  return (
    <div className="wrapper-class">
      <HeaderCLass />
      <Row>
        <Col className="h-[100vh]" span={4}>
          <SideBar />
        </Col>
        <Col className="border-2 border-solid border-r-slate-200" span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Class;
