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
  Tooltip,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";

export default function Graph({ data1,text }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  
  const [chartData, setChartData] = useState({})
    
  
   
  useEffect(() => {
    setChartData(data1[0])
  }, [data1]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Visualization",
      },
    },
  };

 
  const dataa = {
    // labels,
    datasets: [
      {
        // fill: true,
        label: text,
        data: chartData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={dataa} />
    </>
  );
}
