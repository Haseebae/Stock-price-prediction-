import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import "chart.js/auto";

const Free_chart = ({ timestamp, actual, pred, stock }) => {
  let pointstyle1 = [];
  let pointstyle2 = [];
  let max1 = Math.max.apply(null, actual.map(Math.abs));
  let max2 = Math.max.apply(null, pred.map(Math.abs));
  for (let i = 0; i < actual.length; i++) {
    if (Math.abs(actual[i]) == max1) {
      pointstyle1.push("rectRot");
    } else {
      pointstyle1.push(false);
    }
  }
  for (let i = 0; i < pred.length; i++) {
    if (Math.abs(pred[i]) == max2) {
      pointstyle2.push("rectRot");
    } else {
      pointstyle2.push(false);
    }
  }

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  // this functions runs when the component is loaded.
  useEffect(() => {
    // setting static data and labels
    setChartData({
      labels: timestamp,
      datasets: [
        {
          label: `Actual`,
          data: actual,
          backgroundColor: "rgb(224, 119, 20,  0.3)",
          borderColor: "rgb(224, 119, 20,  0.6)",
          pointStyle: pointstyle1,
          pointRadius: 7,
          pointHoverRadius: 15,
          pointBorderColor: "rgb(0, 0, 0)",
        },
        {
          label: `Predicted with Historical Data`,
          data: pred,
          backgroundColor: "rgb(0, 29, 217, 0.3)",
          borderColor: "rgb(0, 29, 217,  0.6)",
          pointStyle: pointstyle2,
          pointRadius: 7,
          pointHoverRadius: 15,
          pointBorderColor: "rgb(0, 0, 0)",
        },
      ],
    });
    // styling for appearance and scaling
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            pointStyle: "rectRot",
          },
        },
        title: {
          display: true,
          text: `${stock}`,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      tension: 0,
      scales: {
        y: {
          ticks: {
            maxTicksLimit: 10,
            display: true, // this will remove only the ticks
          },
        },
        x: {
          ticks: {
            maxTicksLimit: 10,
            display: true, // this will remove only the ticks
          },
          grid: {
            drawBorder: true,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-auto col-span-4 h-[70vh] pb-5 m-10 border rounded-lg shadow-lg bg-white">
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default Free_chart;
