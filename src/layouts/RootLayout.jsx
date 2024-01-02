import React from "react";
import { Outlet } from "react-router-dom";

import HeaderRootLayout from "../Component/Header/HeaderRootLayout";
const RootLayout = () => {
  return (
    <>
      <HeaderRootLayout />
      <Outlet />
    </>
  );
};

export default RootLayout;
