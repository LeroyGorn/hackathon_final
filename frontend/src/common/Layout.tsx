import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "../styles/Layout";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
