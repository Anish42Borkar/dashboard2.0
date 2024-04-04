import React from "react";
import { CiSearch } from "react-icons/ci";

type InputT = {
  bg?: string;
};

const Input = ({ bg = "#fff" }: InputT) => {
  return (
    <div className={`w-fit rounded-sm flex bg-[${bg}] items-center`}>
      <CiSearch className="text-lg w-8 pl-0.5" />

      <input
        className={`pb-1 outline-none bg-[${bg}]  text-sm`}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
