import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Badge } from "antd";
const OverviewClassSubject = () => {
  const [isActive,setIsActive] = React.useState(1)
  
  return (
    <div>
      <header className="w-full flex justify-between">
        <ul className="w-1/3 flex justify-around">
          <li onClick={()=>setIsActive(1)} className={isActive===1? "relative before:w-full before:absolute before:h-1 before:rounded-sm before:bg-[#689d18] before:-bottom-3":""}>
            <Link style={isActive ===1 ? {color:"#689d18"}:{}} to="">Bảng tin</Link>
          </li>
          <li onClick={()=>setIsActive(2)} className={isActive===2? "relative before:w-full before:absolute before:h-1 before:rounded-sm before:bg-[#689d18] before:-bottom-3":""}>
            <Link style={isActive ===2 ? {color:"#689d18"}:{}} to="BaiTapTrenLop">Bài tập trên lớp</Link>
          </li>
          <li onClick={()=>setIsActive(3)} className={isActive===3? "relative before:w-full before:absolute before:h-1 before:rounded-sm before:bg-[#689d18] before:-bottom-3":""}>
            <Link style={isActive ===3 ? {color:"#689d18"}:{}} to="Members">Mọi Người</Link>
          </li>
          <li onClick={()=>setIsActive(4)} className={isActive===4? "relative before:w-full before:absolute before:h-1 before:rounded-sm before:bg-[#689d18] before:-bottom-3":""}>
            <Link style={isActive ===4 ? {color:"#689d18"}:{}} to="Attendance">Điểm Danh</Link>
          </li>
        </ul>
        <ul>
          <li><Link to="Chat" > <Badge count={1}><IoChatbubbleOutline size={20}/></Badge> </Link></li>
          <li></li>
        </ul>
      </header>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default OverviewClassSubject;