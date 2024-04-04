import React from "react";

type Option = {
  value: string | number;
  label: string;
};

export type SelectT = {
  placeholder: string;
  options: Option[];
};

const Select = ({ placeholder, options }: SelectT) => {
  return (
    <form className="w-24 ">
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 ">
        <option selected>{placeholder}</option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
