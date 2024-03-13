import React from "react";
import { Outlet } from "react-router-dom";
import HeadeerRootAffterLogin from "../Component/HeaderRootLayout/HeadeerRootAffterLogin";
import HeaderRootLayout from "../Component/HeaderRootLayout/HeaderRootLayout";
import { Service } from "../api/service";
const RootLayout = () => {
  const isLogin = Service.getTokenCookies()
  return (
    <>
      {isLogin ? <HeadeerRootAffterLogin /> : <HeaderRootLayout />}
      <Outlet />
    </>
  );
};

export default RootLayout;
