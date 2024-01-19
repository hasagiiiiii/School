import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderCLass from "../../Component/HeaderClass";
import { AuthContext } from "../../Context/AuthProvider";
import SideBar from "./Component/SideBar";

const Class = () => {
  const { isLogin } = React.useContext(AuthContext); // Check User Login
  // useEffect(() => {
  //   CheckRedirect();
  // }, [CheckRedirect]);

  if (JSON.parse(localStorage.getItem("acces")).info.role) {
    // check xem ROLE của user có đủ thầm quyền hay không
    return console.error("Khoong có quyền truy cập");
  }

  if (!isLogin) {
    return "NotFound";
  }
  return (
    <div className="wrapper-class">
      <HeaderCLass />
      <Row>
        <Col className="h-[100vh]" span={4}>
          <SideBar />
        </Col>
        <Col span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Class;
