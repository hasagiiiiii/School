import React from "react";
import { Col, Row } from "antd";
import SidebarDeparment from "./SidebarDepartment";
import { Outlet } from "react-router-dom";
const Department = () => {
  return (
    <div>
      <Row>
        <Col span={4}>
          <SidebarDeparment />
        </Col>
        <Col className=" relative z-0 bg-gray-200 h-screen" span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Department;
