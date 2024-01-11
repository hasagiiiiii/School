import React from "react";
import { Outlet } from "react-router-dom";
import HeadeerRootAffterLogin from "../Component/HeaderRootLayout/HeadeerRootAffterLogin";
import HeaderRootLayout from "../Component/HeaderRootLayout/HeaderRootLayout";
const RootLayout = () => {
  const Loged = window.localStorage.getItem("acces");
  const [isLogin, setIslogin] = React.useState(Loged);
  React.useEffect(() => {
    setIslogin(Loged);
  }, [Loged]);
  return (
    <>
      {isLogin ? <HeadeerRootAffterLogin /> : <HeaderRootLayout />}
      <Outlet />
    </>
  );
};

export default RootLayout;
