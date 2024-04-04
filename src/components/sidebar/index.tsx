import React from "react";
import { BsHexagon, BsPersonVideo } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaKey, FaRegCircle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { GiCircle } from "react-icons/gi";
import { MdDashboard, MdOutlineLiveHelp } from "react-icons/md";
import { PiWalletThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const menu = [
  {
    path: "/",
    title: "Dashboard",
    icon: MdDashboard,
  },
  {
    path: "/product",
    title: "Product",
    icon: FiBox,
  },
  {
    path: "/customer",
    title: "Customer",
    icon: BsPersonVideo,
  },
  {
    path: "/income",
    title: "Income",
    icon: PiWalletThin,
  },
  {
    path: "/promote",
    title: "Promote",
    icon: CiDiscount1,
  },
  {
    path: "/help",
    title: "Help",
    icon: MdOutlineLiveHelp,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#050540] w-60 h-[100vh] fixed text-white">
      <div className="  w-52 flex justify-center px-4">
        <div className="text-2xl flex items-center mt-6">
          <span className="relative">
            <BsHexagon />

            <span className="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FaRegCircle />
            </span>
          </span>

          <p className="tracking-wide ml-2">Dashboard</p>
        </div>
      </div>
      <div className="space-y-6 flex flex-col items-center mt-12">
        {menu.map((item) => {
          return (
            <NavLink
              to={item.path}
              className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "bg-[#2c2d68]" : ""}
                w-52 flex justify-center items-center  rounded-md px-2 hover:bg-[#2c2d68]
                `
              }
            >
              <p className="flex justify-start items-center  w-44 h-8 ">
                <span>{<item.icon />}</span>
                <span className="w-24 text-sm ml-4 align-middle ">
                  {item.title}
                </span>
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
