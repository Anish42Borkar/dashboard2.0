import React from "react";
import Card, { CardT } from "../../components/card";
import Select, { SelectT } from "../../components/select";

const data: CardT[] = [
  {
    amount: 198,
    percent: 37.8,
    pnl: "profit",
    type: "Earning",
  },
  {
    amount: 2.4,
    percent: 2,
    pnl: "loss",
    type: "Orders",
  },
  {
    amount: 2.4,
    percent: 2,
    pnl: "loss",
    type: "Balance",
  },
  {
    amount: 98,
    percent: 1,
    pnl: "profit",
    type: "Total Sales",
  },
];

const quarterly: SelectT["options"] = [
  {
    label: "Monthly",
    value: 30,
  },
  {
    label: "15 Days",
    value: 15,
  },
  {
    label: "10 Day",
    value: 10,
  },
  {
    label: "1 Day",
    value: 1,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between">
        {data.map((card) => {
          return <Card {...card} />;
        })}
      </div>

      <div className="mt-10 flex justify-between">
        <div className="w-[69%] h-[23rem] rounded-lg bg-white">
          <div className="px-7 py-6 flex justify-between">
            <div className="">
              <p className="text-xl font-bold ">Overview</p>
              <p className="text-sm text-[#c8c8c8] mt-2  ">Monthly Earning</p>
            </div>

            <div className="">
              <Select placeholder="Quarterly" options={quarterly} />
            </div>
          </div>
        </div>

        <div className="w-[27%] h-[23rem] rounded-lg bg-white"></div>
      </div>
    </>
  );
};

export default Dashboard;
