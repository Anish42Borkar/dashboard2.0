import React from "react";
import Input from "../input";
import { IoMenu } from "react-icons/io5";
import { useSidebarContext } from "../../provider/sidebarProvider";

const NavBar = () => {
  const { toggle } = useSidebarContext();

  return (
    <div className="w-full  flex flex-wrap justify-between">
      <div className="flex  gap-2 items-center">
        <span
          onClick={() => {
            toggle();
          }}
          className="xl:hidden cursor-pointer"
        >
          {" "}
          <IoMenu />
        </span>

        <p className="font-bold text-xl">Hello Namratha 👋🏼, </p>
      </div>
      <Input bg="white" />
    </div>
  );
};

export default NavBar;
