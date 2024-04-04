import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="w-fit rounded-sm flex bg-white items-center">
      <CiSearch className="text-lg w-8 pl-0.5" />

      <input
        className="pb-1 outline-none  text-sm"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
