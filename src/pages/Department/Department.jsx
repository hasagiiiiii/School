import React from "react";
import SidebarDeparment from "./SidebarDepartment";
import { Outlet } from "react-router-dom";
const Department = () => {
  return (
    <div className="w-full flex">
          <div className="w-[30%] lg:w-[17%]">
            <SidebarDeparment />
          </div>
          <div className=" relative z-0 w-[70%] pb-20 lg:w-[83%]  bg-gray-200 h-full">
            <Outlet />
          </div>
    </div>
  );
};

export default Department;
