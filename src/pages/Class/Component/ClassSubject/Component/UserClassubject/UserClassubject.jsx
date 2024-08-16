import { Avatar } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ClassSubject } from "../../../../../../redux/TeacherReducer/selectorTeacher";
import { FETCH_API_Class } from "../../../../../../api/FetchAPIClass";

const listUserValue = {
  giangvien : {
    id_Teacher:"",
    email_User:"",
    fullName:"",
    image_User:"",
    sex_User:"",
    user_Name:"",
  },
  student: [
    {
      email_User:"",
    fullName:"",
    image_User:"",
    sex_User:"",
    user_Name:"",
    }
  ]
}


const UserClassubject = () => {
  const { id_MonHoc } = useSelector(ClassSubject);
  const [listUser,setListUser] = React.useState(listUserValue)
  React.useEffect(()=>{
    FETCH_API_Class.GetUserInClass(id_MonHoc,setListUser)
  },[])

  console.log(listUser)
  return (
    <div className="flex justify-center ">
      <div className=" w-2/3 ">
        <div className="mx-auto">
          <h1 className="text-3xl text-blue-500 px-3 border-b-2 border-b-blue-400 py-4 mb-2">
            Giáo Viên
          </h1>
          <div className="flex items-center p-3">
            <Avatar>{listUser?.giangvien?.fullName.charAt(0)}</Avatar>
            <p className="ml-3">{listUser?.giangvien.fullName.toUpperCase()}</p>
          </div>
        </div>

        <div className="mx-auto mt-10">
          <h1 className="text-3xl text-blue-500 px-3 border-b-2 border-b-blue-400 py-4 mb-2">
            Sinh Viên
          </h1>
          {listUser.student.map((items, index) => {
            return (
              <div key={index} className="flex items-center p-3">
                <Avatar>{items.fullName.charAt(0)}</Avatar>
                <p className="ml-4">{items.fullName.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserClassubject;
