import { Avatar } from "antd";
import React from "react";
import "./index.scss"
import Messages from "../../../../Component/Mesagess";
import { Link } from "react-router-dom";
import ClassSubjectStudent from "../../../../redux/StudentReducer/ClassSubjectStudent";
import { useDispatch } from "react-redux";
import ClassReducer from "../../../../redux/StudentReducer/ClassReducer";
import { addDocument } from "../../../../Firebase/serviceFireStore";
import useFireStore from "../../../../Firebase/useFireStore";
import * as signalR from '@microsoft/signalr';
const HomeGuest = () => {
  const [listclassSbujectStudent , setClassSubjectStudent] = React.useState([])
  const [idMonhoc, setIdMonHoc] = React.useState(null)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    try {
      fetch("http://localhost:5071/api/v1.0/monhoc",{
        method:"GET",
        credentials: 'include'
      }).then(res=>res.json()).then(data=>{
         dispatch( ClassSubjectStudent.actions.addClassSubjectStudent(data))
        setClassSubjectStudent(data)
      })
    } catch (error) {
      
    }
    // end call api

    const connection = new signalR.HubConnectionBuilder()
          .withUrl("http://localhost:5071/notificationHub-monhoc")
          .build();

      connection.on("ReceiveNotificationMonHoc", function (obj) {
          console.log(obj)
           setClassSubjectStudent(pre=>([...pre,obj]))// message nhận được từ server
      });

      connection.start()
          .then(function () {
              console.log("Connected to hub!");
          })
          .catch(function (err) {
              console.error(err.toString());
          });

      return () => {
          connection.stop();
      };


  },[dispatch])

  const Condition = React.useMemo(
    () => ({
      fieldName: "id_MonHoc",
      operator: "==",
      compareValue: idMonhoc,
    }),
    [idMonhoc]
  );
  const chatRoom = useFireStore("chatRooms", Condition);
  const hanldeFillterChangeClassSubject = (value)=>{
    dispatch(ClassReducer.actions.addClass(value))
    setIdMonHoc(value.id_MonHoc)
    if(chatRoom === null || chatRoom.length === 0){
      addDocument("chatRooms",value)
    }
  }
  return (
    <div className="mt-5 flex mb-[100px]">
      <div className="left-content mr-4 w-full lg:w-2/3 xl:w-2/3 bg-white rounded-xl p-6">
        <div className="flex justify-between">
          <h1 className="px-5 text-xl">Home</h1>
          <p>October,10</p>
        </div>

        <div className="ListCout flex items-center flex-wrap p-5 gap-4 w-full">
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">43</h3>
            <p className="title">Tổng Môn Học</p>
          </div>
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">23</h3>
            <p className="title">Đang hoạt động</p>
          </div>
          <div className="item hidden md:flex p-3 md:w-[100px] lg:w-[150px] text-md rounded-xl flex-col h-[100px]  shadow-md xl:w-[200px]  ">
            <h3 className="text-lg">10</h3>
            <p className="title">Bài tập</p>
          </div>
        </div>
        <div className="list-classSubject flex flex-wrap gap-5 p-5 items-center">
          {
            listclassSbujectStudent.map((item)=>{
              return(
                <Link key={item.id_MonHoc} to={`${item.name_MonHoc}`} onClick={(e)=>{hanldeFillterChangeClassSubject(item)}} className="ClassSubject cursor-pointer text-center h-[150px] bg-purple-400 flex flex-col shadow-md w-[200px] rounded-xl p-3 flex-shrink flex-grow">
                  <div className="name">{item.name_MonHoc}</div>
                  <div>{item.giangvien.fullName}</div>
                  <input type="range" min={0} max={100} disabled  className=" mt-4"  name="" id="" />
                  <div className="flex mt-5 justify-between">
                    <div className="group-avatar">
                      <Avatar.Group size="small" maxCount={2}>
                        {item.student.map((user)=>(
                          <Avatar key={user.id_Student}>{user.fullName?.charAt(0).toUpperCase()}</Avatar>
                        ))}
                      </Avatar.Group>
                    </div>
                    <button>heslo</button>
                  </div>
                </Link>
  
                )
            })
          }
          
        </div>
      </div>
      <div className="right-content hidden lg:block lg:w-1/3 h-max mx-10 right-0 bg-white rounded-xl p-6">
        <h1 className="text-xl">Cilent Messages</h1>
        <div className="Messages">
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
            <Messages text="Bạn đang có một bài tập mới" displayName={"Trung"} createAt={Date.now()} />
        
        </div>
      </div>
    </div>
  );
};

export default HomeGuest;
