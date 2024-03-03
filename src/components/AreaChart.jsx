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


export default function AreaChart({data1,text}) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
        text: "Area Chart Visualization",
      },
    },
  };
  const [chartData, setChartData] = useState({})
    
  

useEffect(() => {
  setChartData(data1[0])
}, [data1]);

  const labels = ["2012", "2013", "2014", "2015", "2016", "2017", "2018","2019","2020","2021","2022"];
  
  
   const dataa = {
    labels,
    datasets: [
      {
        fill: true,
        label: text,
        data: chartData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  


  


  return (
    <>

            <Line options={options} data={dataa} />
       
       
      </>
     )
     ;
}
