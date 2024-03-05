import { Avatar } from "antd";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import Logo from "../../assets/logo.jpg";
import "./index.scss";
import { AuthContext } from "../../Context/AuthProvider";
const HeaderCLass = () => {
  const [active, setActive] = React.useState(false);
  const {Logout} = React.useContext(AuthContext)
  const { setIsOpenFormAddCLass } = React.useContext(AppContext);
  const handleOpenLogin = () => {
    setActive(false);
  };
  const username = JSON.parse(localStorage.getItem("acces"))?.info.user_Name;
  return (
    <header className="sticky top-0">
      <div className="header-left ">
        <div className="menu-icons">
          <IoMenu size={25} />
        </div>
        <div className="logo">
          <img src={Logo} width={45} alt="" />
          <Link to="/Class">Lớp học</Link>
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
        <Avatar style={{ background: "blue" }}>
          {username?.charAt(0).toUpperCase()}
        </Avatar>
      </div>
      <p onClick={Logout}>Logout</p>
    </header>
  );
};

export default HeaderCLass;
