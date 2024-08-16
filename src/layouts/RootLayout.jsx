import React from "react";
import { Outlet } from "react-router-dom";
import HeadeerRootAffterLogin from "../Component/HeaderRootLayout/HeadeerRootAffterLogin";
import HeaderRootLayout from "../Component/HeaderRootLayout/HeaderRootLayout";
import { useSelector } from "react-redux";
import { isLogin } from "../redux/selector";
const RootLayout = () => {
  const Login = useSelector(isLogin)
  return (
    <>
      {Login ? <HeadeerRootAffterLogin /> : <HeaderRootLayout />}
      <Outlet />
    </>
  );
};

export default RootLayout;
