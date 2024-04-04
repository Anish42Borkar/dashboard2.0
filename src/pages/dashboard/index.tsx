import React from "react";
import Card, { CardT } from "../../components/card";
import Select, { SelectT } from "../../components/select";
import Barchart from "../../niva-chart/barchart";
import Piechart from "../../niva-chart/piechart";
import Input from "../../components/input";
import Table from "../../components/table";
import { tableData } from "../../constant/tableData";

const data: CardT[] = [
  {
    amount: 198,
    percent: 37.8,
    pnl: "profit",
    type: "Earning",
    image: "assets/money.png",
  },
  {
    amount: 2.4,
    percent: 2,
    pnl: "loss",
    type: "Orders",
    image: "assets/order.png",
  },
  {
    amount: 2.4,
    percent: 2,
    pnl: "loss",
    type: "Balance",
    image: "assets/balance.png",
  },
  {
    amount: 98,
    percent: 1,
    pnl: "profit",
    type: "Total Sales",
    image: "assets/totalsales.png",
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
      <div className="flex gap-1 flex-wrap justify-center md:justify-between">
        {data.map((card) => {
          return <Card {...card} />;
        })}
      </div>

      <div className="mt-10 flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap  justify-between">
        <div className="w-full xl:w-[69%] h-[23rem] rounded-lg bg-white">
          <div className="px-7 pt-6 flex justify-between">
            <div className="">
              <p className="text-xl font-bold ">Overview</p>
              <p className="text-sm text-[#c8c8c8] mt-2  ">Monthly Earning</p>
            </div>

            <div className="">
              <Select placeholder="Quarterly" options={quarterly} />
            </div>
          </div>
          <div className="w-full">
            <Barchart />
          </div>
        </div>

        <div className="w-full xl:w-[27%] h-[23rem] relative rounded-lg bg-white">
          <div className="px-7 pt-6">
            <p className="text-xl font-bold ">Customers</p>
            <p className="text-sm text-[#c8c8c8] mt-2  ">
              Customers that buy products
            </p>
          </div>

          <div className="w-60 h-60 mt-5 bg-white rounded-full shadow-xl absolute left-1/2 -translate-x-1/2">
            <Piechart />
          </div>
        </div>
      </div>

      <div className="w-full  bg-white mt-10 rounded-md">
        <div className="px-7 pt-6 flex flex-wrap justify-between">
          <p className="text-xl font-bold ">Product Sell</p>

          <div className="flex flex-wrap gap-1">
            <Input bg="#fbfbfe" />
            <Select placeholder="Last 30 Days" options={quarterly} />
          </div>
        </div>

        <div className="mt-2">
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
