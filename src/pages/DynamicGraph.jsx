import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ListItemText,
  MenuItem,
  Select,
  Tab,
 
} from "@mui/material";

import "../assets/css/DynamicGraph.scss";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  BarChartOutlined,
  GraphicEq,
  ScatterPlotOutlined,
  StackedLineChart,
} from "@mui/icons-material";
import algeria from "../assets/images/algeria-flag.svg";
import Ethopia from "../customData/Euthopia.json";
import { styled } from "@mui/system";
import Graph from "../components/Graph";
import BarChart from "../components/BarChart";
import ScatterChart from "../components/ScatterChart";
import AreaChart from "../components/AreaChart";

const data = Ethopia;

const MySelect = styled(Select)({
  background: "white",
  marginTop: "10px",
  color: "#B55E2E",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    width: 200, // Set your desired width here
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    background: "white",
  },
  "& .MuiSelect-select": {
    borderRadius: "5px",
  },
});
const MetricSelect = styled(Select)({
  width: 170,
  background: "white",
  marginTop: "10px",
  borderRadius: "5px",
  color: "#B55E2E",
  "& .MuiInputBase-input": {
    width: 200, // Set your desired width here
    whiteSpace: "nowrap",

    overflow: "hidden",
    textOverflow: "ellipsis",
    background: "white",
  },
  "& .MuiSelect-select": {
    borderRadius: "5px",
  },
});

const CountrySelect = styled(Select)({
  "& .MuiInputBase-input": {
    display: "flex ",
    gap: "4px",
    border: "1px solid #FFF",
    background: "rgba(199, 197, 197,0.8)",
    color: "#B55E2E",
    padding: "4px",
  },
});

export default function DynamicGraph() {
  const [value, setValue] = useState("1");
  const [age, setAge] = useState(10);
  const [indicator, setIndicator] = useState(1);
  const [metricValue, setMetricValue] = useState(1);
  const [metricText,setMetricText]=useState("")
  const [lineChart, setLineChart] = useState();

  const [charts, setCharts] = useState({
    lineChart: false,
    barChart: false,
    scatChart: false,
    areaChart: false,
  });

  // console.log("json", data[0].metric);

  const handleChangee = (event) => {
    setAge(event.target.value);
  };
  const handleIndicator = (event) => {
    setIndicator(event.target.value);
  };
  const handleMetric = (event) => {
    setMetricValue(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       // width: 250,

  //     },
  //   },
  // };
  // let data1;
  // let finaldata=[];
  const [finaldata,setFinalData]=useState([])
  const [data1,setData1]=useState([])

useEffect(()=>{
  let data2=data[indicator]?.metric.map((elm,id)=>{
    return(
      elm?.data
    )
  })
  let metricTexts=data[indicator]?.metric.map((text,id)=>{
    return(
     
      text?.title
 
    )
   
  })
  setMetricText(metricTexts[metricValue])
  console.log("titles",metricTexts[metricValue])
  setData1(data2)
  console.log("data1",data1)
 console.log("prop data",data2[metricValue])
//  finaldata.push(data1[metricValue])
 setFinalData([data2[metricValue]])
 
},[indicator,metricValue])

console.log("final data",finaldata);

useEffect(()=>{
  console.log("final data",finaldata);
},[])
  return (
    <div id="graph-container" className="graph-container">
      <div className="graph-wrapper">
        <div className="functions-panel">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Basic Settings" value="1" />
                <Tab label="Advanced Analytics" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="basic">
                <span className="country-sel">Select a Country</span>

                <CountrySelect
                  size="small"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  sx={{ marginTop: "10px", width: "169px" }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        "& .Mui-selected": {
                          backgroundColor: "white",
                          color: "black",
                        },
                      },
                    },
                  }}
                  onChange={handleChangee}
                >
                  <MenuItem className="hh" value={10}>
                    <img src={algeria} alt="flag" />
                    <ListItemText primary="Ethopia" />
                  </MenuItem>
                  <MenuItem className="hh" value={20}>
                    <img src={algeria} alt="flag" />
                    <ListItemText primary="Nigeria" />
                  </MenuItem>
                  <MenuItem className="hh" value={30}>
                    <img src={algeria} alt="flag" />
                    <ListItemText primary="Pakistan" />
                  </MenuItem>
                </CountrySelect>

                <span className="or">Or</span>

                <Button
                  sx={{
                    marginTop: "10px",
                    border: "0.5px solid white",
                    color: "#FFF",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  variant="outlined"
                >
                  Compare Countries
                </Button>

                <div className="separator"></div>

                <span className="indicator-label">Select An Indicator</span>

                <MySelect
                  size="small"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={indicator}
                  // MenuProps={MenuProps}
                  className="indicator"
                  onChange={handleIndicator}
                >
                  {data.map((element, index) => {
                    return (
                      <MenuItem value={index}>{element.indicator}</MenuItem>
                    );
                  })}
                </MySelect>

                <div className="separator"></div>

                <span className="indicator-label">Select a Metric</span>

                <MetricSelect
                  size="small"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={metricValue}
                  className="indicator"
                  onChange={handleMetric}
                >
                  {/* {data.map((element, index) => (
                    <MenuItem key={index} value={index}>
                      {element.metric.map((metric, idx) => (
                        <>
                          <span key={idx}>{metric.title}</span>
                          <br />
                        </>
                      ))}
                    </MenuItem>
                  ))} */}
                  {data[indicator]?.metric.map((met, idx) => (
                    <MenuItem key={idx} value={idx}>
                      {met?.title}
                    </MenuItem>
                  ))}
                </MetricSelect>

                <div className="separator"></div>

                <span className="indicator-label">
                  Select Visualization Type
                </span>
                <div className="chart-btn-wrapper">
                  <div
                    className="chart"
                    onClick={() =>
                      setCharts({
                        ...charts,
                        lineChart: true,
                        barChart: false,
                        scatChart: false,
                        areaChart: false,
                      })
                    }
                  >
                    <StackedLineChart
                      className="iconhover"
                      sx={{ color: "#FFF" }}
                    />
                    Line Chart
                  </div>
                  <div
                    className="chart"
                    onClick={() =>
                      setCharts({
                        ...charts,
                        lineChart: false,
                        barChart: true,
                        scatChart: false,
                        areaChart: false,
                      })
                    }
                  >
                    <BarChartOutlined
                      className="iconhover"
                      sx={{ color: "#FFF" }}
                    />
                    Bar Chart
                  </div>
                  <div
                    className="chart"
                    onClick={() =>
                      setCharts({
                        ...charts,
                        lineChart: false,
                        barChart: false,
                        scatChart: true,
                        areaChart: false,
                      })
                    }
                  >
                    <ScatterPlotOutlined
                      className="iconhover"
                      sx={{ color: "#FFF" }}
                    />
                    Scatter Chart
                  </div>
                  <div
                    className="chart"
                    onClick={() =>
                      setCharts({
                        ...charts,
                        lineChart: false,
                        barChart: false,
                        scatChart: false,
                        areaChart: true,
                      })
                    }
                  >
                    <GraphicEq className="iconhover" sx={{ color: "#FFF" }} />
                    Area Chart
                  </div>
                </div>
                <div className="separator"></div>
                <Button
                  sx={{
                    marginTop: "10px",
                    border: "0.5px solid white",
                    color: "#FFF",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  variant="outlined"
                >
                  Download The Data
                </Button>
                <Button
                  sx={{
                    marginTop: "10px",
                    border: "0.5px solid white",
                    color: "#FFF",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  variant="outlined"
                >
                  Share The Visualization
                </Button>
              </div>
            </TabPanel>
            <TabPanel value="2">Advanced Analytics Panel</TabPanel>
          </TabContext>
        </div>

        <div className="graph-panel">
          {charts.lineChart == true && (
            <Graph
            text={metricText}
             data1={[...finaldata]}
            />
          )}
          {charts.barChart == true && <BarChart text={metricText} data1={[...finaldata]} />}
          {charts.scatChart == true && <ScatterChart text={metricText} data1={[...finaldata]} />}
          {charts.areaChart == true && <AreaChart text={metricText} data1={[...finaldata]} />}

          {
    (charts.lineChart||charts.barChart||charts.scatChart||charts.areaChart)==false&&
            <div>
              Please Select any Chart Type to View Graph..
            </div>
           
          
          }
        </div>
      </div>
    </div>
  );
}
