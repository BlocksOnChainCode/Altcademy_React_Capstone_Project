import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChartComponent from "./Forex_Chart";
import Converter from "./Forex_Converter";

const PairDetails = (props) => {
  const { state, setState } = props;
  return (
    <div id="PairDetails">
      <div className="pair">
        <h2>
          {state.baseCurrency} / {state.quoteCurrency}
        </h2>
        <h2>{state.pairRate.toFixed(3)}</h2>
      </div>
    </div>
  );
};

const Details = (props) => {
  const { state, setState } = props;

  return (
    <div>
      <Navbar />
      <PairDetails state={state} />
      <Converter state={state} setState={setState} />
      <ChartComponent state={state} setState={setState} />
      <button
        id="back-btn"
        onClick={() => setState({ ...state, pairDetails: false })}
      >
        Back
      </button>
    </div>
  );
};

export default Details;
