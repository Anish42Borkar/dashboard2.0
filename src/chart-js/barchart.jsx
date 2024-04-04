import ChartContext, {
  Chart,
  ChartConfiguration,
  ChartArea,
  LinearScale,
  CategoryScale,
  ChartItem,
} from "chart.js/auto";
import React, { useEffect } from "react";

const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [10],
      borderColor: "pink",
      backgroundColor: "yellow",
      hoverBackgroundColor: "pink",
      barThickness: 45,
      borderRadius: 15,
      borderSkipped: false,
      hoverBorderWidth: 40,
      hoverOffset: 10,
      barPercentage: 0.1, // Set width for this dataset
    },
    {
      data: [53, 37, 100, 40],
      barThickness: 45,
      borderRadius: 5,
      backgroundColor: "orange",
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      // title: {
      //   display: true,
      //   text: "CUSTOMERS V/S APPOINTMENTS"
      // }
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },

    responsive: true,
    // maintainAspectRatio: true,
    scales: {
      y: {
        display: false, // Hide the y-axis
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false, // Hide the x-axis grid lines
        },
        border: {
          display: false, // Hide X-axis border
        },
      },
    },
  },
};

export default function BarChart() {
  const bar = React.useRef(null);

  useEffect(() => {
    if (bar.current) {
      const ctx = bar.current;
      const chart = new Chart(ctx, config);

      // ctx.onmousemove = (e) => {
      //   const points = chart.getElementsAtEventForMode(
      //     e,
      //     "nearest",
      //     {
      //       intersect: true,
      //     },
      //     true
      //   );

      //   if (points[0]) {
      //     const dataset = points[0].datasetIndex;
      //     const dataPoint = points[0].index;

      //     const backgroundColor = chart.data.datasets[dataset].backgroundColor;
      //     console.log(backgroundColor);
      //   }
      // };

      return () => {
        chart.destroy();
      };
    }
  }, []);
  return (
    <div className="div">
      <canvas id="canvas" ref={bar}></canvas>
    </div>
  );
}
