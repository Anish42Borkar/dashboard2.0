import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
// import moneyImg from "../../assets/money.png";

export type CardT = {
  amount: number;
  type: string;
  pnl: string;
  percent: number;
  image: string;
};

const Card = ({ amount, percent, pnl, type, image }: CardT) => {
  return (
    <div className="relative w-[17rem] h-40 bg-white rounded-md">
      <img
        className="absolute top-1/2 -translate-y-1/2 w-28 ml-2"
        src={image}
        alt=""
        srcSet=""
      />

      <div className="absolute top-1/2 -translate-y-1/2 py-2 right-0 w-32 h-20  flex flex-col">
        <p className="text-[#c8c8c8] text-sm">{type}</p>
        <p className="text-2xl font-bold">${amount}k</p>
        <p className="text-xs flex font-bold gap-1">
          <span
            className={`${
              pnl === "profit" ? "text-[#26b463]" : "text-[#cf0447]"
            }  flex items-center gap-1 font-bold`}
          >
            {pnl === "profit" ? (
              <FaArrowUp className="font-bold" />
            ) : (
              <FaArrowDown className="font-bold" />
            )}
            {percent}%
          </span>
          this month
        </p>
      </div>
    </div>
  );
};

export default Card;
