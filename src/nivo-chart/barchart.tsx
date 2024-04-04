import React, { useState } from "react";
import { ComputedDatum, ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "Jan",
    Jan: 605,
  },
  {
    country: "Feb",
    Feb: 500,
  },
  {
    country: "Mar",
    Mar: 900,
  },
  {
    country: "Apr",
    Apr: 700,
  },
  {
    country: "May",
    May: 800,
  },
  {
    country: "Jun",
    Jun: 400,
  },
  {
    country: "Jul",
    Jul: 800,
  },
  {
    country: "Aug",
    Aug: 900,
  },
  {
    country: "Sep",
    Sep: 890,
  },
  {
    country: "Oct",
    Oct: 760,
  },
  {
    country: "Nov",
    Nov: 680,
  },
  {
    country: "Dec",
    Dec: 750,
  },
] as const;

const Barchart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<Number | null>();

  const handleMouseEnter = (
    data: ComputedDatum<any>,
    event: React.MouseEvent
  ) => {
    setHoveredIndex(data.index);
  };

  const handleMouseLeave = (
    data: ComputedDatum<any>,
    event: React.MouseEvent
  ) => {
    setHoveredIndex(null);
  };

  const colors = data.map((d, i) =>
    hoveredIndex === i ? "#5b32eb" : "#f3eeff"
  );

  return (
    <div
      // className="bg-pink-100"
      style={{
        width: "100%",
        height: "20rem",
      }}
    >
      <ResponsiveBar
        data={data}
        keys={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        indexBy="country"
        margin={{ top: 10, right: 0, bottom: 70, left: 0 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={colors}
        theme={{
          tooltip: {
            container: {
              background: "#333",
            },
          },
          crosshair: {
            line: {
              stroke: "#aaa",
            },
          },
        }}
        borderRadius={11}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 19,
          tickRotation: 0,
          truncateTickAt: 0,
        }}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
        tooltip={() => <></>}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        enableLabel={false}
      />
    </div>
  );
};

export default Barchart;
