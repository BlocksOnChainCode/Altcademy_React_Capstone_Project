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
  const [chartWidth, setChartWidth] = useState(300);

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
        chartData.reverse();
        setState({ ...state, chartData: chartData });
      });
  };

  useEffect(() => {
    getChartData();
  }, [state.baseCurrency, state.quoteCurrency]);

  // Responsive chart width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setChartWidth(300);
      } else {
        setChartWidth(500);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="chart-container">
      <LineChart
        width={chartWidth}
        height={150}
        id="chart"
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
