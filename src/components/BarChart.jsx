import React from "react";

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
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["2012", "2013", "2014", "2015", "2016", "2017", "2018","2019","2020","2021","2022"];

export const dataa = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [50, 15, 20, 15, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [50, 15, 20, 30, 40],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {

  return (
    <>
      
            <Bar options={options} data={dataa} />
       
       
      </>
     )
     ;
}
