import React, { useState } from "react";
import { ComputedDatum, ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "Jan",
    Jan: 105,
  },
  {
    country: "Feb",
    Feb: 15,
  },
  {
    country: "Mar",
    Mar: 90,
  },
  {
    country: "Apr",
    Apr: 129,
  },
  {
    country: "May",
    May: 184,
  },
  {
    country: "Jun",
    Jun: 130,
  },
  {
    country: "Jul",
    Jul: 890,
  },
  {
    country: "Aug",
    Aug: 890,
  },
  {
    country: "Sep",
    Sep: 890,
  },
  {
    country: "Oct",
    Oct: 890,
  },
  {
    country: "Nov",
    Nov: 890,
  },
  {
    country: "Dec",
    Dec: 890,
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
      style={{
        width: "100%",
        height: "30rem",
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
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
          tickPadding: 5,
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
