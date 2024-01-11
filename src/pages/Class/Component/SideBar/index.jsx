import { Avatar, Collapse, Typography } from "antd";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Class } from "../../../../redux/selector";
import "./index.scss";
import FilterClassReducer from "../TableClass/FilterClassReducer";

const SideBar = () => {
  const listClass = useSelector(Class);
  const dispatch = useDispatch();
  const FilterChange = (value) => {
    dispatch(FilterClassReducer.actions.fillterValue(value));
  };
  return (
    <div className="fixed flex flex-col h-full justify-start border border-solid border-r-slate-200">
      <div className="w-full ">
        <Link
          className="pl-9 py-4 w-[100%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
          to="/Class/Home"
        >
          <IoMdHome size={20} /> <p>Màn Hình Chính</p>
        </Link>
        <Link
          className="pl-9 py-4 w-[100%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
          to="/Class/Home"
        >
          <CiCalendar size={20} /> <p>Lịch</p>
        </Link>
      </div>
      <Collapse ghost defaultActiveKey={[1]}>
        <Collapse.Panel
          key={1}
          header={
            <p className="flex gap-3">
              <IoSchoolOutline size={20} />
              <span>Màn Hình Chính</span>
            </p>
          }
        >
          <Typography.Link className="flex items-center text-[18px] justify-start pl-9  text-black w-full py-2 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300">
            <GoChecklist size={20} /> Việc Cần Làm
          </Typography.Link>
          {listClass.map((room, index) => (
            <Typography.Link
              onClick={() => FilterChange(room.name_ClassSchool)}
              className="flex items-center justify-start pl-7 w-full py-2 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300 "
              key={index}
            >
              <Avatar src={room.photo_URL}>
                {room.photo_URL
                  ? ""
                  : room.name_ClassSchool?.charAt(0).toUpperCase()}
              </Avatar>
              <p className="!mb-0 text-black hover:text-black">
                {room.name_ClassSchool}
              </p>
            </Typography.Link>
          ))}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default SideBar;
