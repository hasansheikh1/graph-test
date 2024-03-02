import React from "react";

import {
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// const labels = ["2012", "2013", "2014", "2015", "2016", "2017", "2018","2019","2020","2021","2022"];


export const dataa = {
  datasets: [
    {
      label: 'A dataset',
      "data":{
        "2012": 22,
        "2013": 18.8,
        "2014": 20.8,
        "2015": 18.8,
        "2016": 13,
        "2017": 11.6,
        "2018": 14.3,
        "2019": 10.5,
        "2020": 10,
        "2021": 0,
        "2022": 0
        },
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function ScatterChart() {

  return (
    <>

            <Scatter options={options} data={dataa} />
       
       
      </>
     )
     ;
}
