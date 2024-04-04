import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import NavBar from "../../components/navbar";
import Card from "../../components/card";

const Layout = () => {
  return (
    <div className="flex bg-[#f4f7f8] ">
      <Sidebar />
      <div className="px-14 py-8 xl:ml-60 w-full">
        <NavBar />
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
