import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Finance_Forex.scss";
import { Link } from "react-router-dom";
import Navbar from "./Finance_Navbar";
import BaseCurrency from "./Finance_BaseCurrency";
import { getRates, getHistoricalRates } from "./api";

const ExchangeChart = (props) => {
  const { state, setState } = props;

  const handleClick = () => {
    setState({
      ...state,
      pairDetails: false,
    });
  };

  console.log(state);
  return (
    <motion.div
      initial={{ opacity: 0, x: -800 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="exchangeChart"
    >
      <div className="chart" onClick={() => handleChartChange("line")}>
        <h3>Line</h3>
      </div>
      <Link to="/finance">
        <button onClick={handleClick}>Back</button>
      </Link>
    </motion.div>
  );
};

const ExchangePair = (props) => {
  const { state, setState } = props;

  const handleQuoteCurrencyChange = (key) => {
    setState({
      ...state,
      quoteCurrency: key,
      pairDetails: true,
    });
  };

  return (
    <div>
      <Navbar />
      <BaseCurrency state={state} setState={setState} />
      <motion.div
        initial={{ opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        id="exchangePairs"
      >
        {Object.keys(state.exchangeRates).map((key) => (
          <div
            className="pair"
            key={key}
            onClick={() => handleQuoteCurrencyChange(key)}
          >
            <h3>
              {state.baseCurrency} / {key}
            </h3>
            <h3>{state.exchangeRates[key]}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Finance_Forex = (props) => {
  const { state, setState } = props;

  let conditionalRender = null;

  if (state.pairDetails) {
    conditionalRender = <ExchangeChart state={state} setState={setState} />;
  } else {
    conditionalRender = <ExchangePair state={state} setState={setState} />;
  }

  return <div id="ExchangeRates">{conditionalRender}</div>;
};

export default Finance_Forex;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
