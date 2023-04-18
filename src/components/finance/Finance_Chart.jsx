import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Pair = () => {
  return <h1>usd / eur </h1>;
};

const Chart = () => {
  return <h1>Chart</h1>;
};

const ChartControls = () => {
  return <h1>Chart Controls</h1>;
};

const Converter = () => {
  return <h1>Converter</h1>;
};

const PairDetails = (props) => {
  const { state, setState } = props;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Navbar />
      <Pair />
      <Chart />
      <ChartControls />
      <Converter />
    </>
  );
};

export default PairDetails;

// ? Will need states for amount to convert, base currency, and target currency
// ? Will need to calculate the result from the rates state
