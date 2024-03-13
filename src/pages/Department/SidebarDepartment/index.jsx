import React from "react";
import { Collapse } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import "./index.scss";
import { Link } from "react-router-dom";
const SidebarDeparment = () => {
  return (
    <div className="fixed flex w-64 flex-col h-full justify-start border border-solid bg-white border-r-slate-200 z-50">
      <div className="text-2xl pt-10 text-purple-600">
        <Link to="" className="w-full pl-5">
          Logo
        </Link>
      </div>
      <Collapse ghost defaultActiveKey={[1]}>
        <Collapse.Panel
          header={
            <p>
              <IoHomeOutline size={20} /> Home
            </p>
          }
          key={1}
        >
          <ul className="flex w-[90%] mx-auto mt-0 flex-col  justify-center gap-3">
            <li className="pl-3 py-3 text-[16px] rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="/Department">Quản Lý Tài Khoản</Link>
            </li>
            <li className="pl-3 py-3 text-[16px] rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="/Department/AllClass">Quản Lý Lớp Học</Link>
            </li>
            <li className="pl-3 py-3 text-[16px]  rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="">Quản Lý Môn Học</Link>
            </li>
          </ul>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default SidebarDeparment;
