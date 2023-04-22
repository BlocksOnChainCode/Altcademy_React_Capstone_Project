import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Forex_Details.scss";

const PairDetails = (props) => {
  const { state, setState } = props;
  return (
    <div id="PairDetails">
      <h1>Pair Details</h1>
      <div className="pair">
        <h2>
          {state.baseCurrency} / {state.quoteCurrency}
        </h2>
        <h2>{state.pairRate}</h2>
      </div>
    </div>
  );
};

const LineChart = () => {
  return (
    <div>
      <h1>Line Chart</h1>
    </div>
  );
};

const Converter = () => {
  return (
    <div>
      <h1>Converter</h1>
    </div>
  );
};

const Details = (props) => {
  const { state, setState } = props;

  return (
    <div>
      <Navbar />
      <PairDetails state={state} />
      <LineChart />
      <Converter />
      <button onClick={() => setState({ ...state, pairDetails: false })}>
        Back
      </button>
    </div>
  );
};

export default Details;

// todo: Here will go 2 components, one for the chart and one for the converter.
// todo: The chart will be a line chart, and the converter will be a form with 2 inputs, one for the base currency and one for the quote currency.
