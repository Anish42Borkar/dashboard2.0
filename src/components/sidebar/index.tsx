import React from "react";
import { BsHexagon, BsPersonVideo } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { FaKey, FaRegCircle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { GiCircle } from "react-icons/gi";
import { MdDashboard, MdOutlineLiveHelp } from "react-icons/md";
import { PiWalletThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../../provider/sidebarProvider";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

const menu = [
  {
    path: "/",
    title: "Dashboard",
    icon: MdDashboard,
    hasMore: false,
  },
  {
    path: "/product",
    title: "Product",
    icon: FiBox,
    hasMore: true,
  },
  {
    path: "/customer",
    title: "Customer",
    icon: BsPersonVideo,
    hasMore: true,
  },
  {
    path: "/income",
    title: "Income",
    icon: PiWalletThin,
    hasMore: true,
  },
  {
    path: "/promote",
    title: "Promote",
    icon: CiDiscount1,
    hasMore: true,
  },
  {
    path: "/help",
    title: "Help",
    icon: MdOutlineLiveHelp,
    hasMore: true,
  },
];

const Sidebar = () => {
  const { sidebarFlag, toggle } = useSidebarContext();
  return (
    <div
      className={`bg-[#050540] ${
        !sidebarFlag ? "-translate-x-full" : "translate-x-0"
      } xl:translate-x-0 w-60 h-[100vh] fixed text-white z-20 `}
    >
      <span
        onClick={() => {
          toggle();
        }}
        className="absolute right-2 top-3 xl:hidden"
      >
        <RxCross1 />
      </span>
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
                relative w-52 flex justify-center items-center  rounded-md px-2 hover:bg-[#2c2d68]
                `
              }
            >
              <p className="flex justify-start items-center  w-44 py-3 ">
                <span>{<item.icon />}</span>
                <span className="w-24 text-sm ml-4 align-middle ">
                  {item.title}
                </span>
              </p>
              {item.hasMore && (
                <span className="absolute right-0">
                  <IoIosArrowForward />
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="cursor-pointer px-2 py-2 rounded-lg absolute left-1/2 bottom-7 -translate-x-1/2 bg-[#2c2d68] flex w-52  items-center justify-around">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Jese image"
        />
        <p className="flex flex-col  w-44 leading-3 ml-4 ">
          <span className="text-sm leading-3">Neha</span>
          <span className="text-xs text-[#c3c4ca]">Project Manager</span>
        </p>
        <span className="absolute right-0">
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
