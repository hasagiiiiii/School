import React from "react";
import HeaderCLass from "../../Component/HeaderClass";
import { Col, Row } from "antd";
import SideBar from "./Component/SideBar";
import { Outlet } from "react-router-dom";

const Class = () => {
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
