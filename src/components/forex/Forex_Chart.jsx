import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartComponent = (props) => {
  const { state, setState } = props;

  const getChartData = () => {
    const apiKey = "S765H6N4CCK2VPCH";
    const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${state.baseCurrency}&to_symbol=${state.quoteCurrency}&apikey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const chartData = [];
        for (let key in data["Time Series FX (Daily)"]) {
          chartData.push({
            date: key,
            rate: data["Time Series FX (Daily)"][key]["4. close"],
          });
        }
        setState({ ...state, chartData: chartData });
      });
  };

  useEffect(() => {
    getChartData();
  }, []);
  useEffect(() => {
    console.log(state.chartData);
  }, [state.chartData]);

  /*   return (
    <>
      <LineChart width={400} height={200} data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
        <CartesianGrid strokeDasharray="7 7" />
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="green" />
      </LineChart>
      <button onClick={getChartData}>get chartdata</button>
    </>
  ); */
};

export default ChartComponent;
