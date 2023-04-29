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

  return (
    <div>
      <LineChart
        width={300}
        height={300}
        data={state.chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
