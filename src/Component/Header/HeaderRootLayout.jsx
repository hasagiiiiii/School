import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
const HeaderRootLayout = () => {
  const [isActive, setIsActive] = React.useState(1);
  const [isDrop, setDrop] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="wrap-header">
      <header>
        <div id="logo">
          <h1>Logo</h1>
        </div>
        <ul className="navbar-menu-header">
          <li>
            <Link
              className={isActive === 1 ? "active" : ""}
              onClick={() => setIsActive(1)}
              to=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isActive === 2 ? "active" : ""}
              onClick={() => setIsActive(2)}
              to=""
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={isActive === 3 ? "active" : ""}
              onClick={() => setIsActive(3)}
              to=""
            >
              Pages <RiArrowDropDownLine />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="">All Course</Link>
              </li>
              <li>
                <Link to="">Teams</Link>
              </li>
              <li>
                <Link to="">Instructor</Link>
              </li>
              <li>
                <Link to="">App Online</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className={isActive === 4 ? "active" : ""}
              onClick={() => setIsActive(4)}
              to=""
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={isActive === 5 ? "active" : ""}
              onClick={() => setIsActive(5)}
              to=""
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="header-action">
          <div className="field-search">
            <div className="icons-search">
              <IoIosSearch fill="#80808051" cursor="pointer" size={40} />
            </div>
            <div className="input-search">
              <input type="text" placeholder="Tìm Kiếm" />
            </div>
          </div>
          <button className="btn-common">Free Consultation</button>
        </div>
        <button onClick={() => setToggle(true)} className="drop-downMenu">
          <IoMenu size={30} />
        </button>
      </header>

      <ul className={toggle ? "navbar-menu-right toggle" : "navbar-menu-right"}>
        <div
          onClick={() => setToggle(false)}
          style={toggle ? {} : { display: "none" }}
          className="overLay"
        ></div>
        <li>
          <Link
            className={isActive === 1 ? "active" : ""}
            onClick={() => setIsActive(1)}
            to=""
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={isActive === 2 ? "active" : ""}
            onClick={() => setIsActive(2)}
            to=""
          >
            About Us
          </Link>
        </li>
        <li className={isDrop ? "drop" : ""} onClick={() => setDrop(!isDrop)}>
          <Link
            className={isActive === 3 ? "active" : ""}
            onClick={() => setIsActive(3)}
            to=""
          >
            Pages <RiArrowDropDownLine />
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to="">All Course</Link>
            </li>
            <li>
              <Link to="">Teams</Link>
            </li>
            <li>
              <Link to="">Instructor</Link>
            </li>
            <li>
              <Link to="">App Online</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className={isActive === 4 ? "active" : ""}
            onClick={() => setIsActive(4)}
            to=""
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={isActive === 5 ? "active" : ""}
            onClick={() => setIsActive(5)}
            to=""
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderRootLayout;
