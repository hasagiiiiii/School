import React from "react";
import { Avatar, Collapse } from "antd";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
import ClassSubjectReducer from "../../../../redux/TeacherReducer/ClassSubjectReducer";

const SideBar = () => {
  const [ClassSubject,setClassSubject]= React.useState([])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    try {
      fetch("http://localhost:5071/api/v1.0/monhoc",{
        method:"GET",
        credentials: 'include'
      }).then(res=>res.json()).then(data=>{
         dispatch( ClassSubjectReducer.actions.addClassSubject(data))
        setClassSubject(data)
      })
    } catch (error) {
      
    }
  },[])
  const FilterChange = (value) => {
    console.log(value)
  
  };
  return (
    <div className="fixed w-64 flex flex-col h-full justify-start border border-solid border-r-slate-200">
      <div className="w-full ">
        <Link
          className="pl-9 py-4 w-[100%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
          to="/Class"
        >
          <IoMdHome size={20} /> <p>Màn Hình Chính</p>
        </Link>
        <Link
          className="pl-9 py-4 w-[100%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
          to="/Class/Schedule"
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
          <Link className="flex items-center text-[18px] justify-start pl-9  text-black w-full py-2 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300">
            <GoChecklist size={20} /> Việc Cần Làm
          </Link>
          {ClassSubject.map((room, index) => (
            <Link
              onClick={() => FilterChange(room)}
              className="flex items-center justify-start pl-7 w-full py-2 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300 "
              key={index}
              to="/Class/"
            >
              <Avatar src={room.photo_URL}>
                {room.photo_URL
                  ? ""
                  : room.giangvien.fullName?.charAt(0).toUpperCase()}
              </Avatar>
              <p className="!mb-0 text-black hover:text-black">
                {room.name_MonHoc}
              </p>
            </Link>
          ))}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default SideBar;

