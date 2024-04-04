import React from "react";
import { CiSearch } from "react-icons/ci";

type InputT = {
  bg?: string;
};

const Input = ({ bg = "#fff" }: InputT) => {
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
      className={`w-fit rounded-sm flex items-center`}
    >
      <CiSearch className="text-lg w-8 pl-0.5" />

      <input
        style={{
          backgroundColor: bg,
        }}
        className={`pb-1 outline-none   text-sm`}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
