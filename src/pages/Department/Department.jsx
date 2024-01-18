import React from "react";
import { Col, Row } from "antd";
import SidebarDeparment from "./SidebarDepartment";
import { Outlet } from "react-router-dom";
const Department = () => {
  if (JSON.parse(localStorage.getItem("acces")).info.role_School) {
    // check ROLE có đủ quyền không?
    return console.error("Khôngg đủ quyền truy cập");
  }
  return (
    <div>
      <Row>
        <Col span={4}>
          <SidebarDeparment />
        </Col>
        <Col className="bg-gray-200" span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Department;
