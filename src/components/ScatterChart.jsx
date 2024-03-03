import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";



export default function ScatterChart({data1}) {


  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  // const labels = ["2012", "2013", "2014", "2015", "2016", "2017", "2018","2019","2020","2021","2022"];
  
  const [chartData, setChartData] = useState({})
    
  
  useEffect(()=>{
    console.log("chartData", chartData);
    
  })
useEffect(() => {
  setChartData(data1[0])
}, [data1]);

   const dataa = {
    datasets: [
      {
        label: 'A dataset',
        data:chartData,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <>

            <Scatter options={options} data={dataa} />
       
       
      </>
     )
     ;
}
