import React from "react";
import { FETCH_API } from "../../../../api/fetchAPI";

const ProfileStudent = () => {
  const [UserInfo, setInfo] = React.useState({});
  React.useEffect(() => {
    FETCH_API.fetchOpbjectAPI_Authoriez("member-profile", setInfo);
  }, []);
  const birtDayConvert = new Date(UserInfo.birthday_User).toUTCString()
  return (
    <div>
      <div className="w-[90%] rounded-lg py-10 flex bg-white justify-center mx-16">
        <div className="w-1/3 ">
            <div className="">
              <img
                src={`${process.env.REACT_APP_URL_SEVER}/${UserInfo.imageUser}`}
                width={270}
                height={270}
                className="rounded-full mx-auto"
                alt=""
              />
          </div>
          <h1 className="text-center text-xl ">{UserInfo.user_Name}</h1>
        </div>
        <div className="w-2/3 ">
          <div>
            <h1>Thông tin cá nhân</h1>
            <ul className="flex flex-wrap p-3 gap-5 w-full">
              <li className="h-14 w-1/2 flex-2 border border-gray-300 px-3"><span>Tên</span><p className="uppercase">{UserInfo.fullName}</p></li>
              <li className="h-14 w-1/2 flex-2 border border-gray-300 px-3"><span>School</span><p>{UserInfo.school}</p></li>
              <li className="h-14 w-1/2 flex-2 border border-gray-300 px-3"><span>Sinh nhật</span><p>{birtDayConvert}</p></li>
              <li className="h-14 w-1/2 flex-2 border border-gray-300 px-3"><span>Sex</span><p>{UserInfo.sex_User}</p></li>
              <li className="h-14 w-1/2 flex-2 border border-gray-300 px-3"><span>Tên</span><p>{UserInfo.fullName}</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ProfileStudent;
