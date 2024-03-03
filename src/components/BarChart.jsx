import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";

export default function BarChart({ data1, text }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart Visualization",
      },
    },
  };
  const [chartData, setChartData] = useState({});
  const labels = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];
  useEffect(() => {
    setChartData(data1[0]);
  }, [data1]);
  const dataa = {
    labels,
    datasets: [
      {
        label: text,
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: 'Dataset 2',
      //   data: [50, 15, 20, 30, 40],
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <>
      <Bar options={options} data={dataa} />
    </>
  );
}
