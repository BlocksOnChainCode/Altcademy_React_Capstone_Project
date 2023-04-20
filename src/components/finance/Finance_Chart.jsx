import { useState, useEffect } from "react";
import Charts from "chart.js/auto";
import Navbar from "./Finance_Navbar";
import { getDateRange } from "./utils";

const Pair = (props) => {
  const { state, setState } = props;
  return (
    <div id="Pair">
      <h2>
        {state.baseCurrency} / {state.quoteCurrency}
      </h2>
      ;
    </div>
  );
};

const Chart = (props) => {
  const { historicalRates } = props;

  return (
    <div id="Chart">
      <h2>Chart</h2>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

const ChartControls = () => {
  return <h1>Chart Controls</h1>;
};

const Converter = () => {
  return <h1>Converter</h1>;
};

const PairDetails = (props) => {
  const { state, setState } = props;

  // Example usage
  const dateRange = getDateRange();
  console.log(dateRange); // Output: "2022-04-18..2023-04-18" (assuming current date is April 18, 2023)

  const getHistoricalRates = () => {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/${dateRange}?from=${state.baseCurrency}&to=${state.quoteCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setState({
          ...state,
          historicalRates: data.rates,
        });
      });
  };

  useEffect(() => {
    getHistoricalRates();
  }, [state.baseCurrency, state.quoteCurrency]);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <Navbar />
      <Pair state={state} setState={setState} />
      <Chart historicalRates={state.historicalRates} />
      <ChartControls />
      <Converter state={state} setState={setState} />
    </>
  );
};

export default PairDetails;

// ? Will need states for amount to convert, base currency, and target currency
// ? Will need to calculate the result from the rates state
