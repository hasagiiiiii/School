import { Avatar } from "antd";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import Logo from "../../assets/logo.jpg";
import "./index.scss";
import { AuthContext } from "../../Context/AuthProvider";
import { ClassSubject } from "../../redux/TeacherReducer/selectorTeacher";
import { useDispatch, useSelector } from "react-redux";
import { resetClassSubjectReducer } from "../../redux/ResetReducer";
const HeaderCLass = () => {
  const [active, setActive] = React.useState(false);
  const {Logout} = React.useContext(AuthContext)
  const { setIsOpenFormAddCLass } = React.useContext(AppContext);
  const handleOpenLogin = () => {
    setActive(false);
  };
  const dispatch = useDispatch()
  const handleResetClassSubject = ()=>{
    resetClassSubjectReducer(dispatch)
  }
  const dataClassSubject = useSelector(ClassSubject)
  return (
    <header className="sticky top-0">
      <div className="header-left ">
        <div className="menu-icons">
          <IoMenu size={25} />
        </div>
        <div className="logo">
          <img src={Logo} width={45} alt="" />
          <div><Link onClick={()=>handleResetClassSubject()} className="firstlink" to="/Class">Lớp học</Link></div>
          {dataClassSubject.name_MonHoc ?  <div>/ <Link className="lastLink" to="">{dataClassSubject.name_MonHoc}</Link></div> : ""}
        </div>
      </div>
      <div className="header-right">
        <div
          className="incre"
          onClick={() => setActive(!active)}
          onMouseLeave={handleOpenLogin}
          toolip="Tạo hoặc tham gia lớp học"
        >
          +
          <div className={active ? "action active" : "action"}>
            <p>Tham Gia Lớp Học</p>
            <p onClick={() => setIsOpenFormAddCLass(true)}>Tạo Lớp Học</p>
          </div>
        </div>
        <Avatar>
         T
        </Avatar>
      <p onClick={Logout}>Logout</p>
      </div>
    </header>
  );
};

export default HeaderCLass;
