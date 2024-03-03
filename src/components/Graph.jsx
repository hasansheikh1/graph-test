import React, { useEffect } from "react";

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


export default function Graph(props) {

  // useEffect(()=>{

  // },[])
  const{data1}=props

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
  
  const dataa = {
      labels,
      datasets:data1,
      
    };
  return (
    <>
       
            <Line options={options} data={dataa} />
        
        
       
      </>
     )
     ;
}
