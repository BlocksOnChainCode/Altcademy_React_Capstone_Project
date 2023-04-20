import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Finance_ExchangeRates.scss";
import { Link } from "react-router-dom";

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
    <motion.div
      initial={{ opacity: 0, x: -400 }}
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
  );
};

const ExchangeRates = (props) => {
  const { state, setState } = props;
  return (
    <div id="ExchangeRates">
      <ExchangePair state={state} setState={setState} />
    </div>
  );
};

export default ExchangeRates;

//todo: add a custom component for the table rows
// ?: this will need access to the baseCurrency state from Finance.jsx
