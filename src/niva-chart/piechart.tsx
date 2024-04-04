import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    id: "delhi",
    label: "delhi",
    value: 100,
    color: "hsl(321, 70%, 50%)",
  },
  {
    id: "goa",
    label: "goa",
    value: 257,
    color: "hsl(124, 70%, 50%)",
  },
  {
    id: "mumbai",
    label: "mumbai",
    value: 219,
    color: "hsl(177, 70%, 50%)",
  },
];

const Piechart = () => {
  return (
    <div
      style={{
        width: "50%",
        height: "20rem",
      }}
      className="relative bg-pink-300"
    >
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4">
        tjis is gg gvyni jiuh iuh
      </p>
      <ResponsivePie
        data={data}
        // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        // borderWidth={1}
        // borderColor={{
        //   from: "color",
        //   modifiers: [["darker", 0.2]],
        // }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          // using plain object
          linearGradientDef(
            "gradientA",
            [
              { offset: 0, color: "#643cea" },
              { offset: 100, color: "#b57fef" },
            ],
            {
              gradientTransform: "rotate(0 0.7 0.5)",
            }
          ),
          linearGradientDef(
            "gradientB",
            [
              { offset: 0, color: "#f1effc" },
              { offset: 100, color: "#f1effc" },
            ],
            {
              gradientTransform: "rotate(0 0.7 0.5)",
            }
          ),
          linearGradientDef(
            "gradientC",
            [
              { offset: 0, color: "#f43499" },
              { offset: 100, color: "#f43499" },
            ],
            {
              gradientTransform: "rotate(0 0.7 0.5)",
            }
          ),
        ]}
        fill={[
          { match: { id: "goa" }, id: "gradientA" }, // Apply gradient to Slice A
          { match: { id: "mumbai" }, id: "gradientB" }, // Apply gradient to Slice A
          { match: { id: "delhi" }, id: "gradientC" }, // Apply gradient to Slice A
        ]}
        tooltip={() => <></>}
        enableArcLabels={false}
        enableArcLinkLabels={false}
      />
    </div>
  );
};

export default Piechart;
