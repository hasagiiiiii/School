import React from "react";
import { Avatar, Collapse } from "antd";
import { CiCalendar } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import ClassSubjectReducer from "../../../../redux/TeacherReducer/ClassSubjectReducer";
import FilterClassReducer from "../../../../redux/TeacherReducer/FilterClassReducer";
import { addDocument } from "../../../../Firebase/serviceFireStore";
import useFireStore from "../../../../Firebase/useFireStore";
import { AuthContext } from "../../../../Context/AuthProvider";

const SideBar = () => {
  const [ClassSubject,setClassSubject]= React.useState([])
  const [idMonhoc, setIdMonHoc] = React.useState(null)
  const {setLoading} = React.useContext(AuthContext)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // Condition
  const Condition = React.useMemo(
      () => ({
        fieldName: "id_MonHoc",
        operator: "==",
        compareValue: idMonhoc,
      }),
      [idMonhoc]
    );
    const chatRoom = useFireStore("chatRooms", Condition);

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
  },[dispatch])

  const FilterChange = (value) => {
    dispatch(FilterClassReducer.actions.fillterValue(value))
    setIdMonHoc(value.id_MonHoc)
    if(chatRoom === null || chatRoom.length === 0){
     try{
      const ref = addDocument("chatRooms",value)
      console.log(ref.id)
     }catch(e){
      console.log(e)
     }
    }
    setLoading(true)
    navigate (`/Class/${value.name_MonHoc}`)
  };
  return (
    <div className="fixed w-64 flex flex-col pb-10 scroll-smooth overflow-scroll h-full justify-start">
      <div className="w-64 ">
        <Link
          className="pl-9 py-4 w-[90%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
          to="/Class"
        >
          <IoMdHome size={20} /> <p>Màn Hình Chính</p>
        </Link>
        <Link
          className="pl-9 py-4 w-[90%] flex justify-start text-[16px] gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300  "
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
          <Link className="flex items-center w-[90%] text-[18px] justify-start pl-9  text-black py-3 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300">
            <GoChecklist size={20} /> Việc Cần Làm
          </Link>
          {ClassSubject.map((room, index) => (
            <Link
              onClick={() => FilterChange(room)}
              className="flex items-center  justify-start pl-7 w-[90%] py-2 my-3 gap-3 rounded-r-3xl hover:bg-slate-200 ease-in-out duration-200 active:bg-slate-300 "
              key={index}
              to={`/Class/${room.name_MonHoc?.trim()}`}
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

