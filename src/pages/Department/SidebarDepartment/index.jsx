import React from "react";
import { Collapse } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import "./index.scss";
import { Link } from "react-router-dom";
const SidebarDeparment = () => {
  return (
    <div className="fixed flex w-[30%] lg:w-[17%] flex-col h-full justify-start border border-solid bg-white border-r-slate-200 z-50">
      <div className="text-2xl pt-10 text-purple-600 border-b-2 ">
        <Link to="" className="w-full pl-5">
          Logo
        </Link>
      </div>
      <div className="text-lg lg xl:text-xl rounded-lg ease-in-out py-2 hover:bg-gray-100">
        <Link to="/Department/" className="w-full pl-5">
          OverView
        </Link>
      </div>
      <Collapse ghost defaultActiveKey={[1]}>
        <Collapse.Panel
          header={
            <p className="md:text-base lg:text-lg">
              <IoHomeOutline size={20} /> Home
            </p>
          }
          key={1}
        >
          <ul className="flex w-[90%] mx-auto mt-0 flex-col  justify-center gap-3">
            <li className="pl-3 py-3 md:text-sm xl:text-base rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="/Department/Accounts">Quản Lý Tài Khoản</Link>
            </li>
            <li className="pl-3 py-3 md:text-sm xl:text-base rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="/Department/AllClass">Quản Lý Lớp Học</Link>
            </li>
            <li className="pl-3 py-3 md:text-sm xl:text-base rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="">Quản Lý Môn Học</Link>
            </li>
            <li className="pl-3 py-3 md:text-sm xl:text-base rounded-lg ease-in-out hover:bg-gray-100">
              <Link to="">License</Link>
            </li>
          </ul>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default SidebarDeparment;
